<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class GlobalSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed Global Header Settings (matching existing database content)
        $globalHeader = [
            'logo' => '/assets/img/logo.png',
            'logo_dark' => '/assets/img/logo-black.png',
            'flag_ar' => '/assets/img/flag-1.png',
            'flag_en' => '/assets/img/flag-2.png',
            'check_icon' => '/assets/img/check-radio.svg',
            'menu_items' => [
                [
                    'label_en' => 'Home',
                    'label_ar' => 'الرئيسية',
                    'url_en' => '/',
                    'url_ar' => '/ar',
                    'children' => [],
                ],
                [
                    'label_en' => 'About',
                    'label_ar' => 'من نحن',
                    'url_en' => '/gallery',
                    'url_ar' => '/ar/المعرض',
                    'children' => [],
                ],
                [
                    'label_en' => 'Services',
                    'label_ar' => 'خدماتنا',
                    'url' => '#',
                    'children' => [
                        [
                            'label_en' => 'Commercial Services',
                            'label_ar' => 'الخدمات التجارية',
                            'url_en' => '/commercial-services',
                            'url_ar' => '/ar/الخدمات-التجارية',
                        ],
                        [
                            'label_en' => 'Sales & Distribution Solutions',
                            'label_ar' => 'حلول المبيعات والتوزيع المباشر',
                            'url_en' => '/sales-distribution-solutions',
                            'url_ar' => '/ar/حلول-المبيعات-والتوزيع-المباشر',
                        ],
                        [
                            'label_en' => 'Programming & App Development',
                            'label_ar' => 'البرمجة وتطوير التطبيقات',
                            'url_en' => '/programming-app-development',
                            'url_ar' => '/ar/البرمجة-وتطوير-التطبيقات',
                        ],
                        [
                            'label_en' => 'Project Management',
                            'label_ar' => 'إدارة المشاريع وتنفيذها',
                            'url_en' => '/project-management-execution',
                            'url_ar' => '/ar/إدارة-المشاريع-وتنفيذها',
                        ],
                        [
                            'label_en' => 'Digital Marketing',
                            'label_ar' => 'التسويق الإلكتروني',
                            'url_en' => '/digital-marketing',
                            'url_ar' => '/ar/التسويق-الإلكتروني',
                        ],
                    ],
                ],
                [
                    'label_en' => 'Gallery',
                    'label_ar' => 'المعرض',
                    'url_en' => '/gallery',
                    'url_ar' => '/ar/المعرض',
                    'children' => [],
                ],
                [
                    'label_en' => 'Our Work',
                    'label_ar' => 'أعمالنا',
                    'url_en' => '/commercial-services',
                    'url_ar' => '/ar/الخدمات-التجارية',
                    'children' => [
                        [
                            'label_en' => 'Riya Platform',
                            'label_ar' => 'منصة ريا',
                            'url_en' => '/riya-platform',
                            'url_ar' => '/ar/منصة-ريا',
                        ],
                        [
                            'label_en' => 'Jiyad Platform',
                            'label_ar' => 'منصة جياد',
                            'url_en' => '/jiyad-platform',
                            'url_ar' => '/ar/منصة-جياد',
                        ],
                        [
                            'label_en' => 'Shops Z Platform',
                            'label_ar' => 'منصة Shops Z',
                            'url_en' => '/shopsz-platform',
                            'url_ar' => '/ar/منصة-شوبس-زد',
                        ],
                        [
                            'label_en' => 'Beyond ERP',
                            'label_ar' => 'Beyond ERP',
                            'url_en' => '/beyond-erp',
                            'url_ar' => '/ar/بيوند-إي-آر-بي',
                        ],
                        [
                            'label_en' => 'Beyond Pay',
                            'label_ar' => 'Beyond Pay',
                            'url_en' => '/beyond-pay',
                            'url_ar' => '/ar/بيوند-باي',
                        ],
                    ],
                ],
            ],
            'contact_button_text_en' => 'Contact Us',
            'contact_button_text_ar' => 'تواصل معنا',
            'contact_button_url' => 'https://wa.me/966920031831',
        ];

        Setting::set('global_header', $globalHeader, 'global', 'json');

        // Seed Global Footer Settings (matching existing database content)
        $globalFooter = [
            'logo' => '/assets/img/logo.png',
            'tagline_en' => 'Part of Saudi Vision 2030',
            'tagline_ar' => 'جزء من رؤية المملكة 2030',
            'shape_image' => '/assets/img/cta-shape.png',
            'menu_columns' => [
                [
                    'title_en' => 'Important Pages',
                    'title_ar' => 'صفحات تهمك',
                    'links' => [
                        ['label_en' => 'Home', 'label_ar' => 'الرئيسية', 'url_en' => '/', 'url_ar' => '/ar'],
                        ['label_en' => 'About', 'label_ar' => 'من نحن', 'url_en' => '/gallery', 'url_ar' => '/ar/المعرض'],
                        ['label_en' => 'Services', 'label_ar' => 'خدماتنا', 'url_en' => '/commercial-services', 'url_ar' => '/ar/الخدمات-التجارية'],
                        ['label_en' => 'Gallery', 'label_ar' => 'المعرض', 'url_en' => '/gallery', 'url_ar' => '/ar/المعرض'],
                        ['label_en' => 'Our Work', 'label_ar' => 'أعمالنا', 'url' => '#'],
                        ['label_en' => 'Contact Us', 'label_ar' => 'اتصل بنا', 'url_en' => '/contact-us', 'url_ar' => '/ar/تواصل-معنا'],
                    ],
                ],
                [
                    'title_en' => 'Services',
                    'title_ar' => 'الخدمات',
                    'links' => [
                        ['label_en' => 'Be ERP', 'label_ar' => 'Be ERP', 'url' => '#'],
                        ['label_en' => 'ShopsZe', 'label_ar' => 'ShopsZe', 'url' => '#'],
                        ['label_en' => 'Digital Marketing', 'label_ar' => 'التسويق الرقمي', 'url_en' => '/digital-marketing', 'url_ar' => '/ar/التسويق-الإلكتروني'],
                        ['label_en' => 'Payment Solutions', 'label_ar' => 'حلول الدفع', 'url' => '#'],
                        ['label_en' => 'Sales & Distribution Services', 'label_ar' => 'خدمات المبيعات والتوزيع المباشر', 'url' => '#'],
                    ],
                ],
            ],
            'contact_info' => [
                'title_en' => 'Contact Us',
                'title_ar' => 'اتصل بنا',
                'items' => [
                    ['icon' => '/assets/img/telephone-icon.svg', 'text' => '8001111144', 'url' => 'tel:8001111144'],
                    ['icon' => '/assets/img/whatsapp-icon.svg', 'text' => '920031831', 'url' => 'https://wa.me/920031831'],
                    ['icon' => '/assets/img/mail-icon.svg', 'text' => 'info@beyond.com.sa', 'url' => 'mailto:info@beyond.com.sa'],
                    ['icon' => '/assets/img/location-icon.svg', 'text' => 'Riyadh, Saudi Arabia', 'url' => '#'],
                ],
            ],
            'social' => [
                'title_en' => 'Follow Us',
                'title_ar' => 'تابعنا',
                'links' => [
                    ['icon' => '/assets/img/social-icon-1.svg', 'url' => '#'],
                    ['icon' => '/assets/img/social-icon-2.svg', 'url' => '#'],
                    ['icon' => '/assets/img/social-icon-3.svg', 'url' => '#'],
                    ['icon' => '/assets/img/social-icon-4.svg', 'url' => '#'],
                ],
            ],
            'copyright_text' => 'All Rights Reserved Beyond '.date('Y').'©',
        ];

        Setting::set('global_footer', $globalFooter, 'global', 'json');

        $this->command->info('Global header and footer settings seeded successfully.');
    }
}
