<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class ProjectManagementPageSeeder extends Seeder
{
    /**
     * Seed the Project Management page (index-5.html - إدارة المشاريع وتنفيذها).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'project-management-execution'],
            [
                'name_en' => 'Project Management & Execution',
                'url_slug_en' => 'project-management-execution',
                'meta_title_en' => 'Project Management & Execution - Comprehensive Management | Beyond',
                'h1_title_en' => 'Project Management & Execution',
                'og_title_en' => 'Project Management & Execution - Beyond',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'We provide comprehensive project management from planning to delivery, with precise monitoring of all execution stages.',
                'og_description_en' => 'We provide comprehensive project management from planning to delivery.',
                'og_image_en' => null,

                'name_ar' => 'إدارة المشاريع وتنفيذها',
                'url_slug_ar' => 'إدارة-المشاريع-وتنفيذها',
                'meta_title_ar' => 'إدارة المشاريع وتنفيذها - إدارة شاملة | بيوند',
                'h1_title_ar' => 'إدارة المشاريع وتنفيذها',
                'og_title_ar' => 'إدارة المشاريع وتنفيذها - بيوند',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'نوفر إدارة شاملة للمشاريع من التخطيط حتي التسليم, مع متابعة دقيقة لجميع مراحل التنفيذ.',
                'og_description_ar' => 'نوفر إدارة شاملة للمشاريع من التخطيط حتي التسليم.',
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

        // 2. Hero Section - Project Management
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
                        'icon' => '/assets/img/icon/hero-icon-4.svg',
                        'hero_image' => '/assets/img/hero-img-4.png',
                        'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                        'title_ar' => 'إدارة المشاريع وتنفيذها',
                        'title_en' => 'Project Management & Execution',
                        'description_ar' => 'نوفر إدارة شاملة للمشاريع من التخطيط حتي التسليم, مع متابعة دقيقة لجميع مراحل التنفيذ, نركز علي تنظيم الموارد, تقييم الأداء, وضمان الجودة لتحقيق أهداف المشروع بنجاح واحترافية.',
                        'description_en' => 'We provide comprehensive project management from planning to delivery, with precise monitoring of all execution stages. We focus on resource organization, performance evaluation, and quality assurance to achieve project goals successfully and professionally.',
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
                        'icon' => '/assets/img/icon/svc-sec-4.svg',
                        'title_ar' => 'ما الذي تتضمنه الخدمة؟',
                        'title_en' => 'What Does the Service Include?',
                        'services' => [
                            [
                                'icon' => '/assets/img/icon/svc-1.svg',
                                'title_ar' => 'تخطيط المشاريع',
                                'title_en' => 'Project Planning',
                                'description_ar' => 'وضع خطة شاملة تحدد الأهداف، المراحل، الجدول الزمني، والموارد المطلوبة.',
                                'description_en' => 'Developing a comprehensive plan that defines objectives, stages, timeline, and required resources.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-2.svg',
                                'title_ar' => 'إدارة الفرق والموارد',
                                'title_en' => 'Team and Resource Management',
                                'description_ar' => 'تنظيم الفرق وتوزيع المهام بكفاءة لضمان سير المشروع بسلاسة.',
                                'description_en' => 'Organizing teams and efficiently distributing tasks to ensure smooth project progress.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-3.svg',
                                'title_ar' => 'متابعة التنفيذ',
                                'title_en' => 'Execution Monitoring',
                                'description_ar' => 'مراقبة دقيقة لكل مرحلة لضمان الالتزام بالجدول الزمني والمعايير المحددة.',
                                'description_en' => 'Precise monitoring of each stage to ensure adherence to the timeline and specified standards.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-4.svg',
                                'title_ar' => 'إدارة المخاطر',
                                'title_en' => 'Risk Management',
                                'description_ar' => 'تحديد المخاطر المحتملة ووضع خطط للتعامل معها قبل حدوثها.',
                                'description_en' => 'Identifying potential risks and developing plans to address them before they occur.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-5.svg',
                                'title_ar' => 'مراقبة الجودة',
                                'title_en' => 'Quality Control',
                                'description_ar' => 'ضمان تطابق المخرجات مع أعلى معايير الجودة المطلوبة.',
                                'description_en' => 'Ensuring outputs meet the highest required quality standards.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-6.svg',
                                'title_ar' => 'إعداد التقارير الدورية',
                                'title_en' => 'Periodic Reporting',
                                'description_ar' => 'تقديم تقارير شاملة توضح التقدم والمشاكل والحلول المقترحة.',
                                'description_en' => 'Providing comprehensive reports showing progress, problems, and proposed solutions.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-7.svg',
                                'title_ar' => 'التواصل مع أصحاب المصلحة',
                                'title_en' => 'Stakeholder Communication',
                                'description_ar' => 'إبقاء جميع الأطراف على اطلاع دائم بحالة المشروع ومستجداته.',
                                'description_en' => 'Keeping all parties constantly informed about project status and developments.',
                            ],
                            [
                                'icon' => '/assets/img/icon/svc-8.svg',
                                'title_ar' => 'التسليم والتقييم النهائي',
                                'title_en' => 'Delivery and Final Evaluation',
                                'description_ar' => 'تسليم المشروع وفق المواصفات المتفق عليها مع تقييم شامل للأداء.',
                                'description_en' => 'Delivering the project according to agreed specifications with comprehensive performance evaluation.',
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
                        'image' => '/assets/img/product-img-4.png',
                        'title_ar' => 'القيمة المضافة',
                        'title_en' => 'Added Value',
                        'description_ar' => 'تحقيق الأهداف بأعلى كفاءة وأقل تكلفة من خلال التخطيط الدقيق، إدارة الموارد الفعّالة، والمتابعة المستمرة لجميع مراحل المشروع.',
                        'description_en' => 'Achieving goals with the highest efficiency and lowest cost through precise planning, effective resource management, and continuous monitoring of all project stages.',
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

        $this->command->info('✓ Project Management & Execution page created successfully');
    }
}
