<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class SalesDistributionPageSeeder extends Seeder
{
    /**
     * Seed the Sales & Distribution page (index-3.html).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'sales-distribution-solutions'],
            [
                'name_en' => 'Sales & Distribution Solutions',
                'url_slug_en' => 'sales-distribution-solutions',
                'meta_title_en' => 'Sales & Distribution Solutions - Effective Sales Strategies | Beyond',
                'h1_title_en' => 'Sales & Distribution Solutions',
                'og_title_en' => 'Sales & Distribution Solutions - Beyond',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'We support companies in designing and implementing effective sales strategies and expanding distribution networks to ensure products reach customers efficiently.',
                'og_description_en' => 'We support companies in designing and implementing effective sales strategies and expanding distribution networks.',
                'og_image_en' => null,

                'name_ar' => 'حلول المبيعات والتوزيع المباشر',
                'url_slug_ar' => 'حلول-المبيعات-والتوزيع-المباشر',
                'meta_title_ar' => 'حلول المبيعات والتوزيع المباشر - استراتيجيات مبيعات فعّالة | بيوند',
                'h1_title_ar' => 'حلول المبيعات والتوزيع المباشر',
                'og_title_ar' => 'حلول المبيعات والتوزيع المباشر - بيوند',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'ندعم الشركات في تصميم وتنفيذ استراتيجيات مبيعات فعّالة وتوسيع شبكة التوزيع لضمان وصول المنتجات للعملاء بكفاءة.',
                'og_description_ar' => 'ندعم الشركات في تصميم وتنفيذ استراتيجيات مبيعات فعّالة وتوسيع شبكة التوزيع.',
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

        // 2. Hero Section - Sales & Distribution
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
                        'icon' => '/assets/img/icon/hero-icon-2.svg',
                        'hero_image' => '/assets/img/hero-img-2.png',
                        'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                        'title_ar' => 'حلول المبيعات والتوزيع المباشر',
                        'title_en' => 'Sales & Distribution Solutions',
                        'description_ar' => 'ندعم الشركات في تصميم وتنفيذ استراتيجيات مبيعات فعّالة وتوسيع شبكة التوزيع لضمان وصول المنتجات للعملاء بكفاءة. نركز على تحسين تجربة العملاء وزيادة رضاهم وتعزيز ولاءهم للعلامة التجارية.',
                        'description_en' => 'We support companies in designing and implementing effective sales strategies and expanding distribution networks to ensure products reach customers efficiently. We focus on improving customer experience, increasing satisfaction, and enhancing brand loyalty.',
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
                        'icon' => '/assets/img/icon/svc-sec-2.svg',
                        'title_ar' => 'ما الذي تتضمنه الخدمة؟',
                        'title_en' => 'What Does the Service Include?',
                        'services' => [
                            [
                                'icon' => '/assets/img/icon/svc-1.svg',
                                'title_ar' => 'تصميم استراتيجيات المبيعات',
                                'title_en' => 'Sales Strategy Design',
                                'description_ar' => 'وضع خطط متكاملة لتوسيع شبكة المبيعات وزيادة الإيرادات بشكل مستدام.',
                                'description_en' => 'Developing integrated plans to expand sales networks and sustainably increase revenues.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-2.svg',
                                'title_ar' => 'إدارة فرق المبيعات',
                                'title_en' => 'Sales Team Management',
                                'description_ar' => 'تدريب وتطوير فرق المبيعات لتعزيز كفاءتها وتحقيق الأهداف المحددة.',
                                'description_en' => 'Training and developing sales teams to enhance their efficiency and achieve set goals.',
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
                                'title_en' => 'Distribution Channel Expansion',
                                'description_ar' => 'بناء شبكة توزيع متكاملة تشمل البيع المباشر والموزعين لضمان الوصول إلى أكبر شريحة من السوق.',
                                'description_en' => 'Building an integrated distribution network including direct sales and distributors to ensure reaching the largest market segment.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-5.svg',
                                'title_ar' => 'تحسين تجربة العملاء',
                                'title_en' => 'Customer Experience Enhancement',
                                'description_ar' => 'تطوير رحلة العميل في كل مرحلة لضمان ولاء العملاء ورفع مستوى الرضا.',
                                'description_en' => 'Developing the customer journey at every stage to ensure customer loyalty and increase satisfaction levels.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-6.svg',
                                'title_ar' => 'المتابعة والتحليل الدوري',
                                'title_en' => 'Periodic Monitoring and Analysis',
                                'description_ar' => 'قياس أداء فرق المبيعات بشكل دوري لتحديد نقاط القوة وفرص التحسين',
                                'description_en' => 'Periodically measuring sales team performance to identify strengths and improvement opportunities.',
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
                                'description_en' => 'Applying digital tools to monitor sales operations and analyze results to ensure effective decision-making.',
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
                        'image' => '/assets/img/product-img-2.png',
                        'title_ar' => 'القيمة المضافة',
                        'title_en' => 'Added Value',
                        'description_ar' => 'تحقيق نمو ملحوظ في المبيعات من خلال توسيع قنوات التوزيع، تحسين أداء فرق المبيعات، وبناء علاقات طويلة الأمد مع العملاء.',
                        'description_en' => 'Achieving remarkable sales growth through expanding distribution channels, improving sales team performance, and building long-term relationships with customers.',
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

        $this->command->info('✓ Sales & Distribution page created successfully');
    }
}
