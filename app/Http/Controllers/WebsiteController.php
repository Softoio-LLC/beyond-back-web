<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\SectionType;
use App\Services\GlobalSectionService;
use App\Services\StorageService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WebsiteController extends Controller
{
    public function __construct(
        protected GlobalSectionService $globalSectionService,
        protected StorageService $storage
    ) {}

    /**
     * Display the homepage.
     */
    public function home(Request $request): Response|RedirectResponse
    {
        // Only redirect bare root `/` to `/ar` (Arabic is default)
        // Do NOT redirect `/en` or `/ar` as those are explicit language choices
        if (($request->path() === '' || $request->path() === '/') && ! str_starts_with($request->getRequestUri(), '/en')) {
            return redirect('/ar', 301);
        }

        // Get the homepage (page marked as homepage)
        $page = Page::getHomepage();

        // Determine language from request
        $lang = $this->detectLanguage($request);

        // If no page exists, create mock data for development
        if (! $page) {
            return $this->renderWithMockData($lang);
        }

        return $this->renderPage($page, $lang, true);
    }

    /**
     * Display a specific page by slug.
     */
    public function showBySlug(Request $request, string $slug): Response|RedirectResponse
    {
        $lang = $this->detectLanguage($request);

        // Redirect non-prefixed slugs (/{slug}) to /en/{slug} for consistent language URLs
        if (! str_starts_with($request->path(), 'en/') && ! str_starts_with($request->path(), 'ar/')) {
            return redirect("/en/{$slug}", 301);
        }

        // URL decode the slug (handles Arabic characters)
        $slug = urldecode($slug);

        $page = Page::findBySlug($slug, $lang);

        if (! $page) {
            abort(404);
        }

        // If this is the homepage, redirect to canonical language home for SEO
        if ($page->is_homepage) {
            return redirect($lang === 'ar' ? '/ar' : '/en', 301);
        }

        return $this->renderPage($page, $lang, false);
    }

    /**
     * Display a specific page by model (for admin preview).
     */
    public function show(Request $request, Page $page): Response
    {
        $lang = $this->detectLanguage($request);

        return $this->renderPage($page, $lang, $page->is_homepage);
    }

    /**
     * Render a page with its sections.
     */
    private function renderPage(Page $page, string $lang, bool $isHomepage = false): Response
    {
        $sections = $page->sections()
            ->with('sectionType')
            ->active()
            ->ordered()
            ->get()
            ->map(function ($section) {
                $sectionTypeKey = $section->sectionType->key;
                $content = $section->content;

                // Merge global content for header/footer sections
                if ($sectionTypeKey === 'header') {
                    $content = $this->globalSectionService->mergeHeaderContent($content ?? []);
                } elseif ($sectionTypeKey === 'footer') {
                    $content = $this->globalSectionService->mergeFooterContent($content ?? []);
                }

                return [
                    'id' => $section->id,
                    'section_type' => [
                        'id' => $section->sectionType->id,
                        'key' => $sectionTypeKey,
                        'name_ar' => $section->sectionType->name_ar,
                        'name_en' => $section->sectionType->name_en,
                        'component_name' => $section->sectionType->component_name,
                    ],
                    'order' => $section->order,
                    'content' => $content,
                    'is_active' => $section->is_active,
                ];
            });

        // Build SEO data
        $seoData = $this->buildSeoData($page, $lang, $isHomepage);

        // Build JSON-LD schema
        $jsonLdSchema = $this->buildJsonLdSchema($page, $sections, $lang, $isHomepage);

        return Inertia::render('Website/Index', [
            'page' => [
                'id' => $page->id,
                'title' => $lang === 'ar' ? $page->meta_title_ar : $page->meta_title_en,
                'description' => $lang === 'ar' ? $page->meta_description_ar : $page->meta_description_en,
                'h1' => $lang === 'ar' ? $page->h1_title_ar : $page->h1_title_en,
                'og_title' => $lang === 'ar' ? ($page->og_title_ar ?: $page->meta_title_ar) : ($page->og_title_en ?: $page->meta_title_en),
                'og_description' => $lang === 'ar' ? ($page->og_description_ar ?: $page->meta_description_ar) : ($page->og_description_en ?: $page->meta_description_en),
                'og_image' => $lang === 'ar'
                    ? ($page->og_image_ar ? $this->storage->url($page->og_image_ar) : null)
                    : ($page->og_image_en ? $this->storage->url($page->og_image_en) : null),
                'canonical_url' => $seoData['canonical_url'],
                'hreflang' => $seoData['hreflang'],
            ],
            'sections' => $sections,
            'lang' => $lang,
            'seo' => $seoData,
            'jsonLdSchema' => $jsonLdSchema,
        ]);
    }

    /**
     * Build SEO data for the page.
     */
    private function buildSeoData(Page $page, string $lang, bool $isHomepage): array
    {
        $baseUrl = config('app.url');

        // Determine canonical URL
        if ($isHomepage) {
            $canonicalUrl = $lang === 'ar' ? "{$baseUrl}/ar" : "{$baseUrl}/en";
            $alternateEn = "{$baseUrl}/en";
            $alternateAr = "{$baseUrl}/ar";
        } else {
            $slugEn = $page->url_slug_en;
            $slugAr = $page->url_slug_ar;
            $canonicalUrl = $lang === 'ar' ? "{$baseUrl}/ar/{$slugAr}" : "{$baseUrl}/en/{$slugEn}";
            $alternateEn = $slugEn ? "{$baseUrl}/en/{$slugEn}" : null;
            $alternateAr = $slugAr ? "{$baseUrl}/ar/{$slugAr}" : null;
        }

        return [
            'canonical_url' => $canonicalUrl,
            'hreflang' => [
                'en' => $alternateEn,
                'ar' => $alternateAr,
                'x-default' => $alternateEn ?: $alternateAr,
            ],
            'robots' => 'index, follow',
        ];
    }

    /**
     * Build JSON-LD schema for the page.
     */
    private function buildJsonLdSchema(Page $page, $sections, string $lang, bool $isHomepage): array
    {
        $baseUrl = config('app.url');
        $companyName = $lang === 'ar' ? 'بيوند' : 'Beyond';

        // Base Organization schema
        $schemas = [];

        // Organization Schema (always present)
        $organizationSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => $companyName,
            'url' => $baseUrl,
            'logo' => "{$baseUrl}/assets/images/logo.png",
        ];

        // Try to get contact info from contact section
        $contactSection = $sections->first(function ($section) {
            return $section['section_type']['key'] === 'contact';
        });

        if ($contactSection && isset($contactSection['content'])) {
            $content = $contactSection['content'];
            $contactPoint = [];

            if (! empty($content['phone'])) {
                $contactPoint['telephone'] = $content['phone'];
            }
            if (! empty($content['email'])) {
                $contactPoint['email'] = $content['email'];
            }
            if (! empty($content['address_'.$lang])) {
                $organizationSchema['address'] = [
                    '@type' => 'PostalAddress',
                    'streetAddress' => $content['address_'.$lang],
                ];
            }

            if (! empty($contactPoint)) {
                $contactPoint['@type'] = 'ContactPoint';
                $contactPoint['contactType'] = 'customer service';
                $organizationSchema['contactPoint'] = $contactPoint;
            }

            // Social links
            $sameAs = [];
            foreach (['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'] as $social) {
                if (! empty($content[$social])) {
                    $sameAs[] = $content[$social];
                }
            }
            if (! empty($sameAs)) {
                $organizationSchema['sameAs'] = $sameAs;
            }
        }

        $schemas[] = $organizationSchema;

        // WebSite schema for homepage
        if ($isHomepage) {
            $schemas[] = [
                '@context' => 'https://schema.org',
                '@type' => 'WebSite',
                'name' => $companyName,
                'url' => $baseUrl,
                'potentialAction' => [
                    '@type' => 'SearchAction',
                    'target' => "{$baseUrl}/search?q={search_term_string}",
                    'query-input' => 'required name=search_term_string',
                ],
            ];
        }

        // WebPage schema
        $pageTitle = $lang === 'ar' ? $page->meta_title_ar : $page->meta_title_en;
        $pageDescription = $lang === 'ar' ? $page->meta_description_ar : $page->meta_description_en;

        $webPageSchema = [
            '@context' => 'https://schema.org',
            '@type' => $isHomepage ? 'WebPage' : 'AboutPage',
            'name' => $pageTitle,
            'description' => $pageDescription,
            'url' => $isHomepage ? $baseUrl : $page->getUrl($lang),
            'isPartOf' => [
                '@type' => 'WebSite',
                'name' => $companyName,
                'url' => $baseUrl,
            ],
            'inLanguage' => $lang === 'ar' ? 'ar-SA' : 'en-US',
        ];

        // Add breadcrumb
        $breadcrumb = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                [
                    '@type' => 'ListItem',
                    'position' => 1,
                    'name' => $lang === 'ar' ? 'الرئيسية' : 'Home',
                    'item' => $baseUrl,
                ],
            ],
        ];

        if (! $isHomepage) {
            $breadcrumb['itemListElement'][] = [
                '@type' => 'ListItem',
                'position' => 2,
                'name' => $pageTitle,
                'item' => "{$baseUrl}{$page->getUrl($lang)}",
            ];
        }

        $webPageSchema['breadcrumb'] = $breadcrumb;
        $schemas[] = $webPageSchema;

        // Services schema from services section
        $servicesSection = $sections->first(function ($section) {
            return $section['section_type']['key'] === 'services';
        });

        if ($servicesSection && isset($servicesSection['content']['items'])) {
            $services = [];
            foreach ($servicesSection['content']['items'] as $item) {
                $serviceName = $item['title_'.$lang] ?? $item['title_en'] ?? '';
                $serviceDesc = $item['description_'.$lang] ?? $item['description_en'] ?? '';

                if ($serviceName) {
                    $services[] = [
                        '@type' => 'Service',
                        'name' => $serviceName,
                        'description' => $serviceDesc,
                        'provider' => [
                            '@type' => 'Organization',
                            'name' => $companyName,
                        ],
                    ];
                }
            }

            if (! empty($services)) {
                $schemas[] = [
                    '@context' => 'https://schema.org',
                    '@type' => 'ItemList',
                    'name' => $lang === 'ar' ? 'خدماتنا' : 'Our Services',
                    'itemListElement' => array_map(function ($service, $index) {
                        return [
                            '@type' => 'ListItem',
                            'position' => $index + 1,
                            'item' => $service,
                        ];
                    }, $services, array_keys($services)),
                ];
            }
        }

        // FAQ schema from FAQ section
        $faqSection = $sections->first(function ($section) {
            return $section['section_type']['key'] === 'faq';
        });

        if ($faqSection && isset($faqSection['content']['items'])) {
            $faqItems = [];
            foreach ($faqSection['content']['items'] as $item) {
                $question = $item['question_'.$lang] ?? $item['question_en'] ?? '';
                $answer = $item['answer_'.$lang] ?? $item['answer_en'] ?? '';

                if ($question && $answer) {
                    $faqItems[] = [
                        '@type' => 'Question',
                        'name' => $question,
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text' => $answer,
                        ],
                    ];
                }
            }

            if (! empty($faqItems)) {
                $schemas[] = [
                    '@context' => 'https://schema.org',
                    '@type' => 'FAQPage',
                    'mainEntity' => $faqItems,
                ];
            }
        }

        // Team/About schema
        $teamSection = $sections->first(function ($section) {
            return $section['section_type']['key'] === 'team';
        });

        if ($teamSection && isset($teamSection['content']['items'])) {
            $teamMembers = [];
            foreach ($teamSection['content']['items'] as $item) {
                $name = $item['name_'.$lang] ?? $item['name_en'] ?? '';
                $role = $item['role_'.$lang] ?? $item['role_en'] ?? '';

                if ($name) {
                    $person = [
                        '@type' => 'Person',
                        'name' => $name,
                        'jobTitle' => $role,
                        'worksFor' => [
                            '@type' => 'Organization',
                            'name' => $companyName,
                        ],
                    ];

                    if (! empty($item['image'])) {
                        $person['image'] = "{$baseUrl}/storage/{$item['image']}";
                    }

                    $teamMembers[] = $person;
                }
            }

            if (! empty($teamMembers)) {
                $organizationSchema['employee'] = $teamMembers;
            }
        }

        return $schemas;
    }

    /**
     * Render with mock data for development when no pages exist.
     */
    private function renderWithMockData(string $lang): Response
    {
        // Get all section types ordered
        $sectionTypes = SectionType::active()->ordered()->get();

        // Build mock sections from section types with their default content
        $sections = $sectionTypes->map(function ($type, $index) {
            $content = $type->default_content;

            // Merge global content for header/footer
            if ($type->key === 'header') {
                $content = $this->globalSectionService->mergeHeaderContent($content ?? []);
            } elseif ($type->key === 'footer') {
                $content = $this->globalSectionService->mergeFooterContent($content ?? []);
            }

            return [
                'id' => $index + 1,
                'section_type' => [
                    'id' => $type->id,
                    'key' => $type->key,
                    'name_ar' => $type->name_ar,
                    'name_en' => $type->name_en,
                    'component_name' => $type->component_name,
                ],
                'order' => $type->default_order,
                'content' => $content,
                'is_active' => true,
            ];
        });

        $baseUrl = config('app.url');

        return Inertia::render('Website/Index', [
            'page' => [
                'id' => 0,
                'title' => $lang === 'ar' ? 'بيوند' : 'Beyond',
                'description' => $lang === 'ar'
                    ? 'شركة سعودية متخصصة في بناء وتشغيل المنصات الرقمية'
                    : 'A Saudi company specializing in building and operating digital platforms',
                'h1' => $lang === 'ar' ? 'بيوند' : 'Beyond',
                'og_title' => $lang === 'ar' ? 'بيوند' : 'Beyond',
                'og_description' => $lang === 'ar'
                    ? 'شركة سعودية متخصصة في بناء وتشغيل المنصات الرقمية'
                    : 'A Saudi company specializing in building and operating digital platforms',
                'og_image' => null,
                'canonical_url' => $lang === 'ar' ? "{$baseUrl}/ar" : $baseUrl,
                'hreflang' => [
                    'en' => $baseUrl,
                    'ar' => "{$baseUrl}/ar",
                    'x-default' => $baseUrl,
                ],
            ],
            'sections' => $sections,
            'lang' => $lang,
            'seo' => [
                'canonical_url' => $lang === 'ar' ? "{$baseUrl}/ar" : $baseUrl,
                'hreflang' => [
                    'en' => $baseUrl,
                    'ar' => "{$baseUrl}/ar",
                    'x-default' => $baseUrl,
                ],
                'robots' => 'index, follow',
            ],
            'jsonLdSchema' => [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Organization',
                    'name' => $lang === 'ar' ? 'بيوند' : 'Beyond',
                    'url' => $baseUrl,
                ],
            ],
        ]);
    }

    /**
     * Detect language from request.
     */
    private function detectLanguage(Request $request): string
    {
        // Check for explicit /en/ or /en route
        if (str_starts_with($request->path(), 'en/') || $request->path() === 'en') {
            return 'en';
        }

        // Check if URL starts with /ar/
        if (str_starts_with($request->path(), 'ar/') || $request->path() === 'ar') {
            return 'ar';
        }

        // Check Accept-Language header for preference
        $acceptLang = $request->header('Accept-Language', 'ar');

        // Default to Arabic (RTL) as the template is primarily RTL
        return str_contains($acceptLang, 'en') ? 'en' : 'ar';
    }
}
