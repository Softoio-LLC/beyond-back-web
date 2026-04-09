<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class ProgrammingPageSeeder extends Seeder
{
    /**
     * Seed the Programming & App Development page (index-4.html).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'programming-app-development'],
            [
                'name_en' => 'Programming & App Development',
                'url_slug_en' => 'programming-app-development',
                'meta_title_en' => 'Programming & App Development - Smart Solutions | Beyond',
                'h1_title_en' => 'Programming & App Development',
                'og_title_en' => 'Programming & App Development - Beyond',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'We design and develop smart websites and applications suitable for all devices, in addition to integrated management systems for companies.',
                'og_description_en' => 'We design and develop smart websites and applications suitable for all devices.',
                'og_image_en' => null,

                'name_ar' => 'البرمجة وتطوير التطبيقات',
                'url_slug_ar' => 'البرمجة-وتطوير-التطبيقات',
                'meta_title_ar' => 'البرمجة وتطوير التطبيقات - حلول ذكية | بيوند',
                'h1_title_ar' => 'البرمجة وتطوير التطبيقات',
                'og_title_ar' => 'البرمجة وتطوير التطبيقات - بيوند',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'نقوم بتصميم وتطوير مواقع وتطبيقات ذكية تناسب جميع الأجهزة، بالإضافة إلى أنظمة إدارة متكاملة للشركات.',
                'og_description_ar' => 'نقوم بتصميم وتطوير مواقع وتطبيقات ذكية تناسب جميع الأجهزة.',
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

        // 2. Hero Section - Programming
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
                        'icon' => '/assets/img/icon/hero-icon-3.svg',
                        'hero_image' => '/assets/img/hero-img-3.png',
                        'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                        'title_ar' => 'البرمجة وتطوير التطبيقات',
                        'title_en' => 'Programming & App Development',
                        'description_ar' => 'نقوم بتصميم وتطوير مواقع وتطبيقات ذكية تناسب جميع الأجهزة، بالإضافة إلى أنظمة إدارة متكاملة للشركات. نركز على تجربة المستخدم، الأداء العالي، والأمان لضمان استمرارية الأعمال وكفاءة العمليات الرقمية.',
                        'description_en' => 'We design and develop smart websites and applications suitable for all devices, in addition to integrated management systems for companies. We focus on user experience, high performance, and security to ensure business continuity and digital operations efficiency.',
                        'button_text_ar' => 'ابدأ مشروعك البرمجي',
                        'button_text_en' => 'Start Your Programming Project',
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
                        'icon' => '/assets/img/icon/svc-sec-3.svg',
                        'title_ar' => 'ما الذي تتضمنه الخدمة؟',
                        'title_en' => 'What Does the Service Include?',
                        'services' => [
                            [
                                'icon' => '/assets/img/icon/svc-1.svg',
                                'title_ar' => 'تطوير المواقع الإلكترونية',
                                'title_en' => 'Website Development',
                                'description_ar' => 'تصميم وبرمجة مواقع احترافية متجاوبة مع جميع الأجهزة وسهلة الاستخدام.',
                                'description_en' => 'Designing and developing professional websites responsive to all devices and easy to use.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-2.svg',
                                'title_ar' => 'تطوير تطبيقات الجوال',
                                'title_en' => 'Mobile App Development',
                                'description_ar' => 'بناء تطبيقات ذكية لأنظمة iOS و Android بأداء عالٍ وتجربة مستخدم سلسة.',
                                'description_en' => 'Building smart applications for iOS and Android systems with high performance and smooth user experience.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-3.svg',
                                'title_ar' => 'أنظمة إدارة المحتوى (CMS)',
                                'title_en' => 'Content Management Systems (CMS)',
                                'description_ar' => 'تطوير أنظمة سهلة لإدارة المحتوى والتحديثات دون الحاجة لخبرة تقنية.',
                                'description_en' => 'Developing easy systems to manage content and updates without technical expertise.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-4.svg',
                                'title_ar' => 'أنظمة إدارة الموارد (ERP)',
                                'title_en' => 'Enterprise Resource Planning (ERP)',
                                'description_ar' => 'بناء أنظمة متكاملة لإدارة جميع عمليات الشركة من المحاسبة إلى المخزون.',
                                'description_en' => 'Building integrated systems to manage all company operations from accounting to inventory.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-5.svg',
                                'title_ar' => 'المنصات التجارية الإلكترونية',
                                'title_en' => 'E-commerce Platforms',
                                'description_ar' => 'تصميم متاجر إلكترونية احترافية مع بوابات دفع آمنة وإدارة كاملة للمنتجات.',
                                'description_en' => 'Designing professional online stores with secure payment gateways and complete product management.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-6.svg',
                                'title_ar' => 'التكامل مع الأنظمة الخارجية',
                                'title_en' => 'External Systems Integration',
                                'description_ar' => 'ربط التطبيقات بأنظمة خارجية وخدمات API لضمان التكامل السلس.',
                                'description_en' => 'Connecting applications with external systems and API services to ensure seamless integration.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-7.svg',
                                'title_ar' => 'الأمان وحماية البيانات',
                                'title_en' => 'Security and Data Protection',
                                'description_ar' => 'تطبيق أعلى معايير الأمان لحماية البيانات وتشفير المعلومات الحساسة.',
                                'description_en' => 'Applying the highest security standards to protect data and encrypt sensitive information.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-8.svg',
                                'title_ar' => 'الصيانة والدعم الفني',
                                'title_en' => 'Maintenance and Technical Support',
                                'description_ar' => 'تقديم دعم مستمر وتحديثات دورية لضمان استمرار عمل التطبيقات بكفاءة.',
                                'description_en' => 'Providing continuous support and periodic updates to ensure applications continue to work efficiently.',
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
                        'image' => '/assets/img/product-img-3.png',
                        'title_ar' => 'القيمة المضافة',
                        'title_en' => 'Added Value',
                        'description_ar' => 'تشغيل المشروع بكفاءة على جميع الأجهزة الرقمية، مع واجهات سهلة الاستخدام وأداء عالي، مما يعزز تجربة المستخدم ويزيد من كفاءة إدارة العمليات.',
                        'description_en' => 'Running the project efficiently on all digital devices, with user-friendly interfaces and high performance, enhancing user experience and increasing operations management efficiency.',
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

        $this->command->info('✓ Programming & App Development page created successfully');
    }
}
