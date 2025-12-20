<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class DigitalMarketingPageSeeder extends Seeder
{
    /**
     * Seed the Digital Marketing page (index-6.html).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'digital-marketing'],
            [
            'name_en' => 'Digital Marketing',
            'url_slug_en' => 'digital-marketing',
            'meta_title_en' => 'Digital Marketing - Comprehensive Digital Strategies | Beyond',
            'h1_title_en' => 'Digital Marketing',
            'og_title_en' => 'Digital Marketing - Beyond',
            'hreflang_en' => 'en-US',
            'meta_description_en' => 'We provide comprehensive digital marketing strategies to enhance brand presence online and increase audience engagement.',
            'og_description_en' => 'We provide comprehensive digital marketing strategies to enhance brand presence online.',
            'og_image_en' => null,
            
            'name_ar' => 'التسويق الإلكتروني',
            'url_slug_ar' => 'التسويق-الإلكتروني',
            'meta_title_ar' => 'التسويق الإلكتروني - استراتيجيات رقمية متكاملة | بيوند',
            'h1_title_ar' => 'التسويق الإلكتروني',
            'og_title_ar' => 'التسويق الإلكتروني - بيوند',
            'hreflang_ar' => 'ar-SA',
            'meta_description_ar' => 'نقدم استراتيجيات تسويقية رقمية متكاملة لتعزيز حضور العلامة التجارية على الإنترنت وزيادة التفاعل مع الجمهور.',
            'og_description_ar' => 'نقدم استراتيجيات تسويقية رقمية متكاملة لتعزيز حضور العلامة التجارية.',
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

        // 2. Hero Section - Digital Marketing
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
                    'icon' => '/assets/img/icon/hero-icon-5.svg',
                    'hero_image' => '/assets/img/hero-img-5.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'التسويق الإلكتروني',
                    'title_en' => 'Digital Marketing',
                    'description_ar' => 'نقدم استراتيجيات تسويقية رقمية متكاملة لتعزيز حضور العلامة التجارية على الإنترنت وزيادة التفاعل مع الجمهور. تشمل خدماتنا إدارة الحملات الإعلانية، التسويق عبر وسائل التواصل الاجتماعي، وتحليل الأداء لضمان نمو مستدام وفعالية التسويق.',
                    'description_en' => 'We provide comprehensive digital marketing strategies to enhance brand presence online and increase audience engagement. Our services include advertising campaign management, social media marketing, and performance analysis to ensure sustainable growth and marketing effectiveness.',
                    'button_text_ar' => 'ابدأ حملتك الآن',
                    'button_text_en' => 'Start Your Campaign Now',
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
                    'icon' => '/assets/img/icon/svc-sec-5.svg',
                    'title_ar' => 'ما الذي تتضمنه الخدمة؟',
                    'title_en' => 'What Does the Service Include?',
                    'services' => [
                        [
                            'icon' => '/assets/img/icon/svc-1.svg',
                            'title_ar' => 'تحسين محركات البحث (SEO)',
                            'title_en' => 'Search Engine Optimization (SEO)',
                            'description_ar' => 'تحسين موقعك لتصدر نتائج البحث وزيادة الزيارات العضوية من محركات البحث.',
                            'description_en' => 'Optimizing your website to top search results and increase organic traffic from search engines.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-2.svg',
                            'title_ar' => 'إدارة الحملات الإعلانية',
                            'title_en' => 'Advertising Campaign Management',
                            'description_ar' => 'تصميم وإدارة حملات إعلانية فعّالة على Google وFacebook وغيرها من المنصات.',
                            'description_en' => 'Designing and managing effective advertising campaigns on Google, Facebook, and other platforms.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-3.svg',
                            'title_ar' => 'التسويق عبر وسائل التواصل الاجتماعي',
                            'title_en' => 'Social Media Marketing',
                            'description_ar' => 'إدارة الحسابات وإنشاء محتوى جذاب يعزز التفاعل ويبني مجتمع قوي حول العلامة.',
                            'description_en' => 'Managing accounts and creating engaging content that enhances interaction and builds a strong community around the brand.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-4.svg',
                            'title_ar' => 'التسويق بالمحتوى',
                            'title_en' => 'Content Marketing',
                            'description_ar' => 'إنتاج محتوى قيّم يجذب الجمهور المستهدف ويعزز ثقتهم بالعلامة التجارية.',
                            'description_en' => 'Producing valuable content that attracts the target audience and enhances their trust in the brand.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-5.svg',
                            'title_ar' => 'التسويق عبر البريد الإلكتروني',
                            'title_en' => 'Email Marketing',
                            'description_ar' => 'تصميم حملات بريد إلكتروني احترافية لزيادة التفاعل والوصول المباشر للعملاء.',
                            'description_en' => 'Designing professional email campaigns to increase engagement and direct customer reach.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-6.svg',
                            'title_ar' => 'تحليل البيانات والأداء',
                            'title_en' => 'Data and Performance Analysis',
                            'description_ar' => 'قياس نتائج الحملات وتحليل البيانات لتحسين الاستراتيجيات وزيادة العائد.',
                            'description_en' => 'Measuring campaign results and analyzing data to improve strategies and increase returns.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-7.svg',
                            'title_ar' => 'التسويق بالمؤثرين',
                            'title_en' => 'Influencer Marketing',
                            'description_ar' => 'التعاون مع مؤثرين لتعزيز وصول العلامة التجارية وزيادة المصداقية.',
                            'description_en' => 'Collaborating with influencers to enhance brand reach and increase credibility.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-8.svg',
                            'title_ar' => 'إدارة السمعة الرقمية',
                            'title_en' => 'Digital Reputation Management',
                            'description_ar' => 'مراقبة وتحسين سمعة العلامة على الإنترنت والتعامل مع التقييمات.',
                            'description_en' => 'Monitoring and improving brand reputation online and handling reviews.',
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
                    'image' => '/assets/img/product-img-5.png',
                    'title_ar' => 'القيمة المضافة',
                    'title_en' => 'Added Value',
                    'description_ar' => 'زيادة الوعي بالعلامة التجارية، تحقيق نمو في المبيعات، وبناء علاقات قوية مع الجمهور من خلال استراتيجيات تسويقية مبتكرة وفعّالة.',
                    'description_en' => 'Increasing brand awareness, achieving sales growth, and building strong relationships with the audience through innovative and effective marketing strategies.',
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

        $this->command->info('✓ Digital Marketing page created successfully');
    }
}
