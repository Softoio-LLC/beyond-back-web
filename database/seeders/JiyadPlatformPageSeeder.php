<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class JiyadPlatformPageSeeder extends Seeder
{
    /**
     * Seed the Jiyad Platform page (index-8.html).
     */
    public function run(): void
    {
        // Create or update the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'jiyad-platform'],
            [
            'name_en' => 'Jiyad Platform',
            'meta_title_en' => 'Jiyad Platform - Complete Horse Industry Digital Solution | Beyond',
            'h1_title_en' => 'Jiyad Platform',
            'og_title_en' => 'Jiyad Platform - Beyond',
            'hreflang_en' => 'en-US',
            'meta_description_en' => 'Jiyad is a comprehensive digital platform for the horse world with 6M+ horses in database and 50+ documented championships. Combines knowledge, marketplace, and community.',
            'og_description_en' => 'Complete digital platform for horse industry with 6M+ horses in database.',
            'og_image_en' => null,
            
            'name_ar' => 'منصة جياد',
            'url_slug_ar' => 'منصة-جياد',
            'meta_title_ar' => 'منصة جياد - حل رقمي متكامل لصناعة الخيول | بيوند',
            'h1_title_ar' => 'منصة جياد',
            'og_title_ar' => 'منصة جياد - بيوند',
            'hreflang_ar' => 'ar-SA',
            'meta_description_ar' => 'جياد منصة رقمية متكاملة لعالم الخيل مع 6+ مليون خيل في قاعدة البيانات و 50+ بطولة موثقة. تجمع بين المعرفة والسوق والمجتمع.',
            'og_description_ar' => 'منصة رقمية متكاملة لصناعة الخيول مع 6+ مليون خيل في قاعدة البيانات.',
            'og_image_ar' => null,
            'is_homepage' => false,
            'is_published' => true,
        ]);

        // Get section types
        $headerSection = SectionType::where('key', 'header')->first();
        $heroSection = SectionType::where('key', 'hero_jiyad')->first();
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

        // 2. Hero Section - Jiyad
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
                    'shape_image' => '/assets/img/hero-shape-3.svg',
                    'icon' => '/assets/img/icon/hero-icon-7.svg',
                    'hero_image' => '/assets/img/hero-img-7.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'منصة جياد',
                    'title_en' => 'Jiyad Platform',
                    'title_color' => '#314660',
                    'description_ar' => 'جياد هي منصة رقمية متكاملة لعالم الخيل، تجمع بين المعرفة والسوق والمجتمع، وتقدّم حلولًا مبتكرة لملاك الخيول والمستثمرين والمشترين، عبر خدمات تشمل إدارة المزادات، تحكيم البطولات، أرشفة الأنساب، والمتجر المتكامل.',
                    'description_en' => 'Jiyad is a comprehensive digital platform for the horse world, combining knowledge, marketplace, and community. It offers innovative solutions for horse owners, investors, and buyers through services including auction management, championship judging, pedigree archiving, and an integrated store.',
                    'button_primary_text_ar' => 'ابدأ مشروعك معنا',
                    'button_primary_text_en' => 'Start Your Project With Us',
                    'button_primary_url' => '#',
                    'button_secondary_text_ar' => 'زيارة المنصة',
                    'button_secondary_text_en' => 'Visit Platform',
                    'button_secondary_url' => '#',
                    'button_class' => 'green-btns',
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
                    'icon' => '/assets/img/icon/hero-icon-7.svg',
                    'counters' => [
                        [
                            'icon' => '/assets/img/icon/hero-icon-7.svg',
                            'number' => '+6,000,000',
                            'label_ar' => 'خيل في قاعدة البيانات',
                            'label_en' => 'Horses in Database',
                        ],
                        [
                            'icon' => '/assets/img/icon/hero-icon-7.svg',
                            'number' => '+50',
                            'label_ar' => 'بطولة موثقة',
                            'label_en' => 'Documented Championships',
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
                    'icon' => '/assets/img/icon/svc-sec-7.svg',
                    'title_ar' => 'دور بيوند في منصة <span style="color: #314660">جياد</span>',
                    'title_en' => 'Beyond\'s Role in <span style="color: #314660">Jiyad</span> Platform',
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
