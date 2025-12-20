<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class CommercialServicesPageSeeder extends Seeder
{
    /**
     * Seed the Commercial Services page (index-2.html).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'commercial-services'],
            [
            'name_en' => 'Commercial Services',
            'url_slug_en' => 'commercial-services',
            'meta_title_en' => 'Commercial Services - Comprehensive Business Solutions | Beyond',
            'h1_title_en' => 'Commercial Services',
            'og_title_en' => 'Commercial Services - Beyond',
            'hreflang_en' => 'en-US',
            'meta_description_en' => 'We provide integrated business solutions and consultations that help companies achieve sustainable growth and expansion. Market analysis, factory relations management, and quality assurance.',
            'og_description_en' => 'We provide integrated business solutions and consultations that help companies achieve sustainable growth and expansion.',
            'og_image_en' => null,
            
            'name_ar' => 'الخدمات التجارية',
            'url_slug_ar' => 'الخدمات-التجارية',
            'meta_title_ar' => 'الخدمات التجارية - حلول تجارية متكاملة | بيوند',
            'h1_title_ar' => 'الخدمات التجارية',
            'og_title_ar' => 'الخدمات التجارية - بيوند',
            'hreflang_ar' => 'ar-SA',
            'meta_description_ar' => 'نوفر حلولًا واستشارات تجارية متكاملة تساعد الشركات على تحقيق النمو والتوسع المستدام. تشمل خدماتنا تحليل الأسواق، إدارة علاقات المصانع، التفاوض التجاري، وضمان جودة العمليات.',
            'og_description_ar' => 'نوفر حلولًا واستشارات تجارية متكاملة تساعد الشركات على تحقيق النمو والتوسع المستدام.',
            'og_image_ar' => null,
            'is_homepage' => false,
            'is_published' => true,
        ]);

        // Get section types
        $headerSection = SectionType::where('key', 'header')->first();
        $heroSection = SectionType::where('key', 'hero_common')->first();
        $commonServiceSection = SectionType::where('key', 'common_service')->first();
        $productSection = SectionType::where('key', 'product')->first();
        $inquirySection = SectionType::where('key', 'inquiry')->first();
        $footerSection = SectionType::where('key', 'footer')->first();

        $order = 0;

        // 1. Header Section
        if ($headerSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $headerSection->id],
                [
                'page_id' => $page->id,
                'section_type_id' => $headerSection->id,
                'order' => $order++,
                'is_active' => true,
                'content' => $headerSection->default_content,
            ]);
        }

        // 2. Hero Section - Commercial Services
        if ($heroSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $heroSection->id],
                [
                'page_id' => $page->id,
                'section_type_id' => $heroSection->id,
                'order' => $order++,
                'is_active' => true,
                'content' => [
                    'shape_image' => '/assets/img/hero-shape.svg',
                    'icon' => '/assets/img/icon/hero-icon-1.svg',
                    'hero_image' => '/assets/img/hero-img-1.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'الخدمات التجارية',
                    'title_en' => 'Commercial Services',
                    'description_ar' => 'نوفر حلولًا واستشارات تجارية متكاملة تساعد الشركات على تحقيق النمو والتوسع المستدام. تشمل خدماتنا تحليل الأسواق، إدارة علاقات المصانع، التفاوض التجاري، وضمان جودة العمليات لضمان أعلى عائد وأفضل أداء للشركة.',
                    'description_en' => 'We provide integrated business solutions and consultations that help companies achieve sustainable growth and expansion. Our services include market analysis, factory relations management, commercial negotiation, and quality assurance to ensure the highest return and best company performance.',
                    'button_text_ar' => 'ابدأ مشروعك الآن',
                    'button_text_en' => 'Start Your Project Now',
                    'button_url' => '#',
                ],
            ]);
        }

        // 3. Common Service Section - What's Included
        if ($commonServiceSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $commonServiceSection->id],
                [
                'page_id' => $page->id,
                'section_type_id' => $commonServiceSection->id,
                'order' => $order++,
                'is_active' => true,
                'content' => [
                    'left_shape' => '/assets/img/com-svc-left.svg',
                    'top_right_shape' => '/assets/img/com-svc-top-right.svg',
                    'icon' => '/assets/img/icon/svc-sec.svg',
                    'title_ar' => 'ما الذي تتضمنه الخدمة؟',
                    'title_en' => 'What Does the Service Include?',
                    'services' => [
                        [
                            'icon' => '/assets/img/icon/svc-1.svg',
                            'title_ar' => 'الاستشارات التجارية المتخصصة',
                            'title_en' => 'Specialized Business Consulting',
                            'description_ar' => 'تقديم حلول واستراتيجيات مدروسة تساعد الشركات على النمو والتوسع، مع التركيز على زيادة العائدات وتحقيق أهداف الأعمال.',
                            'description_en' => 'Providing well-studied solutions and strategies that help companies grow and expand, focusing on increasing revenues and achieving business goals.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-2.svg',
                            'title_ar' => 'تحليل الأسواق والفرص',
                            'title_en' => 'Market and Opportunity Analysis',
                            'description_ar' => 'دراسة الأسواق المحلية والدولية لتحديد الفرص التجارية الواعدة وتقييم جدوى الدخول إلى قطاعات جديدة.',
                            'description_en' => 'Studying local and international markets to identify promising business opportunities and evaluate the feasibility of entering new sectors.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-3.svg',
                            'title_ar' => 'إدارة علاقات المصانع',
                            'title_en' => 'Factory Relations Management',
                            'description_ar' => 'بناء علاقات مستمرة مع المصانع لضمان جودة المنتجات، الالتزام بالمواعيد، وتحقيق أفضل الشروط للعميل.',
                            'description_en' => 'Building ongoing relationships with factories to ensure product quality, deadline compliance, and achieving the best terms for the client.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-4.svg',
                            'title_ar' => 'التفاوض وإدارة العقود',
                            'title_en' => 'Negotiation and Contract Management',
                            'description_ar' => 'صياغة وإدارة العقود التجارية لضمان تحقيق مصالح العميل وتعظيم قيمة الشراكات.',
                            'description_en' => 'Drafting and managing business contracts to ensure client interests are met and partnership value is maximized.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-5.svg',
                            'title_ar' => 'التعاون مع المصانع الشريكة',
                            'title_en' => 'Collaboration with Partner Factories',
                            'description_ar' => 'التنسيق مع مصانع موثوقة في تركيا والصين لتلبية احتياجات العملاء بكفاءة وفق معايير الجودة العالمية.',
                            'description_en' => 'Coordinating with reliable factories in Turkey and China to efficiently meet client needs according to global quality standards.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-6.svg',
                            'title_ar' => 'حلول سلسلة الإمداد والتوريد',
                            'title_en' => 'Supply Chain Solutions',
                            'description_ar' => 'تقديم دعم كامل لعمليات التوريد والتخزين والتوزيع لضمان سير الأعمال بسلاسة.',
                            'description_en' => 'Providing full support for supply, storage, and distribution operations to ensure smooth business operations.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-7.svg',
                            'title_ar' => 'إدارة الجودة والرقابة',
                            'title_en' => 'Quality Management and Control',
                            'description_ar' => 'تنفيذ أنظمة رقابة دقيقة لضمان مطابقة المنتجات لأعلى معايير الجودة العالمية.',
                            'description_en' => 'Implementing precise control systems to ensure products meet the highest global quality standards.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-8.svg',
                            'title_ar' => 'إعداد التقارير التجارية',
                            'title_en' => 'Business Reporting',
                            'description_ar' => 'تقديم تقارير دورية توضح الأداء التجاري مع توصيات استراتيجية للتحسين المستمر.',
                            'description_en' => 'Providing periodic reports that clarify business performance with strategic recommendations for continuous improvement.',
                        ],
                    ],
                ],
            ]);
        }

        // 4. Product/Added Value Section
        if ($productSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $productSection->id],
                [
                'page_id' => $page->id,
                'section_type_id' => $productSection->id,
                'order' => $order++,
                'is_active' => true,
                'content' => [
                    'left_shape' => '/assets/img/pd-left.svg',
                    'top_right_shape' => '/assets/img/pd-top-right.svg',
                    'icon' => '/assets/img/icon/product-icon.svg',
                    'image' => '/assets/img/product-img.png',
                    'title_ar' => 'القيمة المضافة',
                    'title_en' => 'Added Value',
                    'description_ar' => 'تساعد هذه الخدمة المشروع على تحقيق نمو مستدام من خلال تنظيم العمليات التجارية، بناء شراكات قوية مع المصانع، وتحقيق أعلى عائد من كل استثمار تجاري.',
                    'description_en' => 'This service helps the project achieve sustainable growth by organizing business operations, building strong partnerships with factories, and achieving the highest return on every business investment.',
                ],
            ]);
        }

        // 5. Inquiry Section (CTA)
        if ($inquirySection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $inquirySection->id],
                [
                'page_id' => $page->id,
                'section_type_id' => $inquirySection->id,
                'order' => $order++,
                'is_active' => true,
                'content' => $inquirySection->default_content,
            ]);
        }

        // 6. Footer Section
        if ($footerSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $footerSection->id],
                [
                'page_id' => $page->id,
                'section_type_id' => $footerSection->id,
                'order' => $order++,
                'is_active' => true,
                'content' => $footerSection->default_content,
            ]);
        }

        $this->command->info('✓ Commercial Services page created successfully');
    }
}
