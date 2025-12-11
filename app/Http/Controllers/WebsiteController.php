<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WebsiteController extends Controller
{
    /**
     * Display the homepage.
     */
    public function home(Request $request): Response
    {
        // Get the homepage (first page or one with specific slug)
        $page = Page::first();
        
        // Determine language from request
        $lang = $this->detectLanguage($request);
        
        // If no page exists, create mock data for development
        if (!$page) {
            return $this->renderWithMockData($lang);
        }
        
        return $this->renderPage($page, $lang);
    }

    /**
     * Display a specific page by slug.
     */
    public function show(Request $request, Page $page): Response
    {
        $lang = $this->detectLanguage($request);
        
        return $this->renderPage($page, $lang);
    }

    /**
     * Render a page with its sections.
     */
    private function renderPage(Page $page, string $lang): Response
    {
        $sections = $page->sections()
            ->with('sectionType')
            ->active()
            ->ordered()
            ->get()
            ->map(function ($section) use ($lang) {
                return [
                    'id' => $section->id,
                    'section_type' => [
                        'id' => $section->sectionType->id,
                        'key' => $section->sectionType->key,
                        'name_ar' => $section->sectionType->name_ar,
                        'name_en' => $section->sectionType->name_en,
                        'component_name' => $section->sectionType->component_name,
                    ],
                    'order' => $section->order,
                    'content' => $section->content,
                    'is_active' => $section->is_active,
                ];
            });

        return Inertia::render('Website/Index', [
            'page' => [
                'id' => $page->id,
                'title' => $lang === 'ar' ? $page->meta_title_ar : $page->meta_title_en,
                'description' => $lang === 'ar' ? $page->meta_description_ar : $page->meta_description_en,
                'h1' => $lang === 'ar' ? $page->h1_title_ar : $page->h1_title_en,
            ],
            'sections' => $sections,
            'lang' => $lang,
        ]);
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
                'content' => $type->default_content,
                'is_active' => true,
            ];
        });

        return Inertia::render('Website/Index', [
            'page' => [
                'id' => 0,
                'title' => $lang === 'ar' ? 'بيوند' : 'Beyond',
                'description' => $lang === 'ar' 
                    ? 'شركة سعودية متخصصة في بناء وتشغيل المنصات الرقمية' 
                    : 'A Saudi company specializing in building and operating digital platforms',
                'h1' => $lang === 'ar' ? 'بيوند' : 'Beyond',
            ],
            'sections' => $sections,
            'lang' => $lang,
        ]);
    }

    /**
     * Detect language from request.
     */
    private function detectLanguage(Request $request): string
    {
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
