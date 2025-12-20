<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class ShopsZPlatformPageSeeder extends Seeder
{
    /**
     * Seed the Shops Z Platform page (index-9.html).
     */
    public function run(): void
    {
        // Create or update the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'shopsz-platform'],
            [
            'name_en' => 'Shops Z Platform',
            'meta_title_en' => 'Shops Z Platform - E-commerce Store Builder | Beyond',
            'h1_title_en' => 'Shops Z Platform',
            'og_title_en' => 'Shops Z Platform - Beyond',
            'hreflang_en' => 'en-US',
            'meta_description_en' => 'Shops Z is a comprehensive e-commerce platform for creating and operating online stores easily. Built 100+ stores with 10,000+ products across different platforms.',
            'og_description_en' => 'E-commerce platform with 100+ stores built and 10,000+ products.',
            'og_image_en' => null,
            
            'name_ar' => 'منصة Shops Z',
            'url_slug_ar' => 'منصة-شوبس-زد',
            'meta_title_ar' => 'منصة Shops Z - منشئ المتاجر الإلكترونية | بيوند',
            'h1_title_ar' => 'منصة Shops Z',
            'og_title_ar' => 'منصة Shops Z - بيوند',
            'hreflang_ar' => 'ar-SA',
            'meta_description_ar' => 'Shops Z منصة إلكترونية متكاملة لإنشاء وتشغيل المتاجر الإلكترونية بسهولة. تم بناء 100+ متجر مع 10,000+ منتج عبر منصات مختلفة.',
            'og_description_ar' => 'منصة تجارة إلكترونية مع 100+ متجر مصمم و 10,000+ منتج.',
            'og_image_ar' => null,
            'is_homepage' => false,
            'is_published' => true,
        ]);

        // Get section types
        $headerSection = SectionType::where('key', 'header')->first();
        $heroSection = SectionType::where('key', 'hero_shopsz')->first();
        $counterSection = SectionType::where('key', 'counter_area')->first();
        $commonServiceSection = SectionType::where('key', 'common_service')->first();
        $inquirySection = SectionType::where('key', 'inquiry')->first();
        $footerSection = SectionType::where('key', 'footer')->first();

        $order = 0;

        // 1. Header Section
        if ($headerSection) {
            PageSection::updateOrCreate(
                [
                    'page_id' => $page->id,
                    'section_type_id' => $headerSection->id,
                ],
                [
                'order' => $order++,
                'is_active' => true,
                'content' => $headerSection->default_content,
            ]);
        }

        // 2. Hero Section - Shops Z
        if ($heroSection) {
            PageSection::updateOrCreate(
                [
                    'page_id' => $page->id,
                    'section_type_id' => $heroSection->id,
                ],
                [
                'order' => $order++,
                'is_active' => true,
                'content' => [
                    'shape_image' => '/assets/img/hero-shape-4.svg',
                    'icon' => '/assets/img/icon/hero-icon-8.svg',
                    'hero_image' => '/assets/img/hero-img-8.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'منصة Shops Z',
                    'title_en' => 'Shops Z Platform',
                    'title_color' => 'text-green',
                    'description_ar' => 'منصة إلكترونية متكاملة تتيح إنشاء وتشغيل المتاجر الإلكترونية بسهولة، وتمكن البائعين من إدارة منتجاتهم، المبيعات، والشحن بشكل احترافي.',
                    'description_en' => 'A comprehensive e-commerce platform that enables easy creation and operation of online stores, empowering sellers to professionally manage their products, sales, and shipping.',
                    'button_primary_text_ar' => 'ابدأ مشروعك معنا',
                    'button_primary_text_en' => 'Start Your Project With Us',
                    'button_primary_url' => '#',
                    'button_secondary_text_ar' => 'زيارة المنصة',
                    'button_secondary_text_en' => 'Visit Platform',
                    'button_secondary_url' => '#',
                    'button_class' => 'green-btns',
                    'section_class' => 'pb-4 pb-lg-0 pt-4',
                ],
            ]);
        }

        // 3. Counter Area Section
        if ($counterSection) {
            PageSection::updateOrCreate(
                [
                    'page_id' => $page->id,
                    'section_type_id' => $counterSection->id,
                ],
                [
                'order' => $order++,
                'is_active' => true,
                'content' => [
                    'icon' => '/assets/img/icon/hero-icon-8.svg',
                    'section_class' => 'mt-0',
                    'counters' => [
                        [
                            'icon' => '/assets/img/icon/hero-icon-8.svg',
                            'number' => '+100',
                            'label_ar' => 'متجر تم تصميمها وتشغيلها',
                            'label_en' => 'Stores Designed and Operated',
                        ],
                        [
                            'icon' => '/assets/img/icon/hero-icon-8.svg',
                            'number' => '+10000',
                            'label_ar' => 'المنتجات عبر المتاجر المختلفة',
                            'label_en' => 'Products Across Different Stores',
                        ],
                    ],
                ],
            ]);
        }

        // 4. Common Service Section
        if ($commonServiceSection) {
            PageSection::updateOrCreate(
                [
                    'page_id' => $page->id,
                    'section_type_id' => $commonServiceSection->id,
                ],
                [
                'order' => $order++,
                'is_active' => true,
                'content' => [
                    'left_shape' => '/assets/img/com-svc-left.svg',
                    'top_right_shape' => '/assets/img/com-svc-top-right.svg',
                    'icon' => '/assets/img/icon/svc-sec-8.svg',
                    'title_ar' => 'دور بيوند في منصة <span class="text-green">Shops Z</span>',
                    'title_en' => 'Beyond\'s Role in <span class="text-green">Shops Z</span> Platform',
                    'subtitle_ar' => 'من الفكرة إلى الإطلاق — تدير بيوند كل مرحلة من مراحل المشروع بخبرة متكاملة تجمع بين التقنية والإبداع والتسويق لتحقيق أفضل النتائج.',
                    'subtitle_en' => 'From idea to launch — Beyond manages every stage of the project with comprehensive expertise combining technology, creativity, and marketing to achieve the best results.',
                    'services' => [
                        [
                            'icon' => '/assets/img/icon/svc-1.svg',
                            'title_ar' => 'تصميم استراتيجيات المبيعات',
                            'title_en' => 'Sales Strategy Design',
                            'description_ar' => 'وضع خطط متكاملة لتوسيع شبكة المبيعات وزيادة الإيرادات بشكل مستدام.',
                            'description_en' => 'Developing comprehensive plans to expand sales network and increase revenues sustainably.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-2.svg',
                            'title_ar' => 'إدارة فرق المبيعات',
                            'title_en' => 'Sales Team Management',
                            'description_ar' => 'تدريب وتطوير فرق المبيعات لتعزيز كفاءتها وتحقيق الأهداف المحددة.',
                            'description_en' => 'Training and developing sales teams to enhance efficiency and achieve set goals.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-3.svg',
                            'title_ar' => 'تحليل سلوك العملاء',
                            'title_en' => 'Customer Behavior Analysis',
                            'description_ar' => 'استخدام أدوات تحليلية لفهم احتياجات العملاء وتقديم حلول مخصصة تزيد من رضاهم.',
                            'description_en' => 'Using analytical tools to understand customer needs and provide customized solutions that increase their satisfaction.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-4.svg',
                            'title_ar' => 'توسيع قنوات التوزيع',
                            'title_en' => 'Distribution Channels Expansion',
                            'description_ar' => 'بناء شبكة توزيع متكاملة تشمل البيع المباشر والموزعين لضمان الوصول إلى أكبر شريحة من السوق.',
                            'description_en' => 'Building an integrated distribution network including direct sales and distributors to ensure reaching the largest market segment.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-5.svg',
                            'title_ar' => 'تحسين تجربة العملاء',
                            'title_en' => 'Customer Experience Enhancement',
                            'description_ar' => 'تطوير رحلة العميل في كل مرحلة لضمان ولاء العملاء ورفع مستوى الرضا.',
                            'description_en' => 'Developing the customer journey at every stage to ensure customer loyalty and increase satisfaction.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-6.svg',
                            'title_ar' => 'المتابعة والتحليل الدوري',
                            'title_en' => 'Periodic Monitoring and Analysis',
                            'description_ar' => 'قياس أداء فرق المبيعات بشكل دوري لتحديد نقاط القوة وفرص التحسين',
                            'description_en' => 'Measuring sales teams performance periodically to identify strengths and improvement opportunities.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-7.svg',
                            'title_ar' => 'إدارة التسعير والعروض',
                            'title_en' => 'Pricing and Offers Management',
                            'description_ar' => 'تصميم استراتيجيات تسعير تنافسية مع عروض ترويجية محسوبة لتعزيز المبيعات.',
                            'description_en' => 'Designing competitive pricing strategies with calculated promotional offers to boost sales.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-8.svg',
                            'title_ar' => 'نظم تتبع المبيعات الرقمية',
                            'title_en' => 'Digital Sales Tracking Systems',
                            'description_ar' => 'تطبيق أدوات رقمية لمراقبة عمليات البيع وتحليل النتائج لضمان اتخاذ قرارات فعّالة.',
                            'description_en' => 'Implementing digital tools to monitor sales operations and analyze results to ensure effective decision making.',
                        ],
                    ],
                ],
            ]);
        }

        // 5. Inquiry Section
        if ($inquirySection) {
            PageSection::updateOrCreate(
                [
                    'page_id' => $page->id,
                    'section_type_id' => $inquirySection->id,
                ],
                [
                'order' => $order++,
                'is_active' => true,
                'content' => $inquirySection->default_content,
            ]);
        }

        // 6. Footer Section
        if ($footerSection) {
            PageSection::updateOrCreate(
                [
                    'page_id' => $page->id,
                    'section_type_id' => $footerSection->id,
                ],
                [
                'order' => $order++,
                'is_active' => true,
                'content' => $footerSection->default_content,
            ]);
        }
    }
}
