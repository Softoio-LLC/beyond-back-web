<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class ContactPageSeeder extends Seeder
{
    /**
     * Seed the Contact page (index-13.html).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'contact-us'],
            [
                'name_en' => 'Contact Us',
                'url_slug_en' => 'contact-us',
                'meta_title_en' => 'Contact Us - Get in Touch | Beyond',
                'h1_title_en' => 'Contact Us',
                'og_title_en' => 'Contact Us - Beyond',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Get in touch with Beyond. We are here to answer your questions and provide support in creating projects.',
                'og_description_en' => 'Get in touch with Beyond. We are here to answer your questions.',
                'og_image_en' => null,

                'name_ar' => 'تواصل معنا',
                'url_slug_ar' => 'تواصل-معنا',
                'meta_title_ar' => 'تواصل معنا - ابقى على تواصل | بيوند',
                'h1_title_ar' => 'تواصل معنا',
                'og_title_ar' => 'تواصل معنا - بيوند',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'يسعدنا تواصلك معنا! نحن في BEYOND نهتم بتقديم تجربة متكاملة لعملائنا، ونسعد بالإجابة على استفساراتكم.',
                'og_description_ar' => 'يسعدنا تواصلك معنا! نحن في BEYOND نهتم بتقديم تجربة متكاملة.',
                'og_image_ar' => null,
                'is_homepage' => false,
                'is_published' => true,
            ]);

        // Get section types
        $headerSection = SectionType::where('key', 'header')->first();
        $contactBannerSection = SectionType::where('key', 'contact-banner')->first();
        $contactInfoSection = SectionType::where('key', 'contact-info')->first();
        $mapSection = SectionType::where('key', 'map')->first();
        $newsletterSection = SectionType::where('key', 'newsletter')->first();
        $footerSection = SectionType::where('key', 'footer')->first();

        $order = 0;

        // 1. Header Section (with v2 style - logo-black.svg)
        if ($headerSection) {
            $headerContent = $headerSection->default_content;
            $headerContent['logo'] = '/assets/img/logo-black.svg';
            $headerContent['variant'] = 'light'; // Use light header for contact page

            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $headerSection->id],
                [
                    'page_id' => $page->id,
                    'section_type_id' => $headerSection->id,
                    'order' => $order++,
                    'is_active' => true,
                    'content' => $headerContent,
                ]);
        }

        // 2. Contact Banner Section
        if ($contactBannerSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $contactBannerSection->id],
                [
                    'page_id' => $page->id,
                    'section_type_id' => $contactBannerSection->id,
                    'order' => $order++,
                    'is_active' => true,
                    'content' => [
                        'background_image' => '/assets/img/contact-banner.png',
                        'icon' => '/assets/img/icon/Phone-Call.svg',
                        'image' => '/assets/img/Contact-Info.svg',
                        'title_ar' => 'تواصل معنا',
                        'title_en' => 'Contact Us',
                        'breadcrumb_ar' => 'الرئيسية / تواصل معنا',
                        'breadcrumb_en' => 'Home / Contact Us',
                    ],
                ]);
        }

        // 3. Contact Info Section (with form and info cards)
        if ($contactInfoSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $contactInfoSection->id],
                [
                    'page_id' => $page->id,
                    'section_type_id' => $contactInfoSection->id,
                    'order' => $order++,
                    'is_active' => true,
                    'content' => [
                        'overlay_image' => '/assets/img/overly-1.png',
                        'info_cards' => [
                            [
                                'icon' => '/assets/img/icon/contact-icon-1.svg',
                                'title_ar' => 'تواصل معنا على',
                                'title_en' => 'Call Us At',
                                'content_ar' => '+966 8001111144<br>+966 920031831',
                                'content_en' => '+966 8001111144<br>+966 920031831',
                            ],
                            [
                                'icon' => '/assets/img/icon/contact-icon-2.svg',
                                'title_ar' => 'راسلنا عبر البريد الإلكتروني',
                                'title_en' => 'Email Us',
                                'content_ar' => 'info@beyond.com.sa<br>info@beyond.com.sa',
                                'content_en' => 'info@beyond.com.sa<br>info@beyond.com.sa',
                            ],
                            [
                                'icon' => '/assets/img/icon/contact-icon-3.svg',
                                'title_ar' => 'موقعنا',
                                'title_en' => 'Our Location',
                                'content_ar' => 'الرياض – طريق الملك عبد العزيز, حي الأمل, المملكة العربية السعودية',
                                'content_en' => 'Riyadh - King Abdul Aziz Road, Al Amal District, Kingdom of Saudi Arabia',
                            ],
                        ],
                        'general_info' => [
                            'title_ar' => 'معلومات عامة',
                            'title_en' => 'General Information',
                            'description_ar' => 'شركة سعودية متخصصة في بناء وتشغيل المنصات الرقمية، تجمع بين التقنية والإبداع في مجالات البرمجة، المشاريع التقنية، التسويق الرقمي، ونظم الـERP.',
                            'description_en' => 'A Saudi company specialized in building and operating digital platforms, combining technology and creativity in programming, technical projects, digital marketing, and ERP systems.',
                            'items' => [
                                [
                                    'title_ar' => 'موقع المعرض الرئيسي',
                                    'title_en' => 'Main Gallery Location',
                                    'content_ar' => 'الرياض – طريق الملك عبد العزيز, حي الأمل, المملكة العربية السعودية',
                                    'content_en' => 'Riyadh - King Abdul Aziz Road, Al Amal District, Kingdom of Saudi Arabia',
                                ],
                                [
                                    'title_ar' => 'ساعات العمل',
                                    'title_en' => 'Working Hours',
                                    'content_ar' => 'من السبت إلى الخميس: 10:00 صباحًا – 9:00 مساءً<br>الجمعة: 4:00 مساءً – 9:00 مساءً',
                                    'content_en' => 'Saturday to Thursday: 10:00 AM – 9:00 PM<br>Friday: 4:00 PM – 9:00 PM',
                                ],
                                [
                                    'title_ar' => 'حسابات التواصل الاجتماعي',
                                    'title_en' => 'Social Media Accounts',
                                    'links' => [
                                        ['icon' => '/assets/img/icon/snapchat.svg', 'url' => '#'],
                                        ['icon' => '/assets/img/icon/youtube.svg', 'url' => '#'],
                                        ['icon' => '/assets/img/icon/tiktok.svg', 'url' => '#'],
                                        ['icon' => '/assets/img/icon/instagram.svg', 'url' => '#'],
                                    ],
                                ],
                            ],
                        ],
                        'contact_form' => [
                            'title_ar' => 'اتصل بنا',
                            'title_en' => 'Contact Us',
                            'description_ar' => 'يسعدنا تواصلك معنا! نحن في BEYOND نهتم بتقديم تجربة متكاملة لعملائنا، ونسعد بالإجابة على استفساراتكم، وتقديم الدعم في كل إنشاء المشروعات',
                            'description_en' => 'We are happy to hear from you! At BEYOND, we care about providing a complete experience to our clients, and we are happy to answer your inquiries and provide support in all project creation.',
                        ],
                    ],
                ]);
        }

        // 4. Map Section
        if ($mapSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $mapSection->id],
                [
                    'page_id' => $page->id,
                    'section_type_id' => $mapSection->id,
                    'order' => $order++,
                    'is_active' => true,
                    'content' => [
                        'map_url' => 'https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=dubai+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
                    ],
                ]);
        }

        // 5. Newsletter Section
        if ($newsletterSection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $newsletterSection->id],
                [
                    'page_id' => $page->id,
                    'section_type_id' => $newsletterSection->id,
                    'order' => $order++,
                    'is_active' => true,
                    'content' => [
                        'background_image' => '/assets/img/newsLatter-bg.png',
                        'icon' => '/assets/img/gpt-img.svg',
                        'title_ar' => 'ابدأ معنا. اتصل بنا الآن!',
                        'title_en' => 'Start with us. Contact us now!',
                        'subtitle_ar' => 'مكالمة مجانية',
                        'subtitle_en' => 'Free Call',
                        'phone' => '+966 8001111144',
                    ],
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

        $this->command->info('✓ Contact page created successfully');
    }
}
