<?php

namespace Database\Seeders;

use App\Models\SectionType;
use Illuminate\Database\Seeder;

class SectionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sectionTypes = [
            // Fixed sections
            [
                'key' => 'header',
                'name_en' => 'Header',
                'name_ar' => 'الهيدر',
                'icon' => 'far fa-window-maximize',
                'preview_image' => null,
                'component_name' => 'HeaderSection',
                'is_fixed' => true,
                'default_order' => 0,
                'is_active' => true,
                'default_content' => [
                    'logo' => null,
                    'menu_items' => [],
                    'contact_button_text_en' => 'Contact Us',
                    'contact_button_text_ar' => 'تواصل معنا',
                    'contact_button_url' => '#contact',
                    'variant' => 'dark',
                ],
            ],
            
            // Hero/Slider section (Homepage)
            [
                'key' => 'hero_slider',
                'name_en' => 'Hero Slider',
                'name_ar' => 'السلايدر الرئيسي',
                'icon' => 'far fa-images',
                'preview_image' => null,
                'component_name' => 'HeroSliderSection',
                'is_fixed' => false,
                'default_order' => 1,
                'is_active' => true,
                'default_content' => [
                    'subtitle_en' => 'The Future is Here',
                    'subtitle_ar' => 'المستقبل هنا',
                    'title_en' => '',
                    'title_ar' => '',
                    'description_en' => '',
                    'description_ar' => '',
                    'background_image' => null,
                    'slides' => [],
                    'button_text_en' => 'Start Your Project',
                    'button_text_ar' => 'ابدأ مشروعك الآن',
                    'button_url' => '#',
                ],
            ],
            
            // Hero Common section (Service Pages - Dark background)
            [
                'key' => 'hero_common',
                'name_en' => 'Hero Common',
                'name_ar' => 'الهيرو العام',
                'icon' => 'far fa-window-alt',
                'preview_image' => null,
                'component_name' => 'HeroCommonSection',
                'is_fixed' => false,
                'default_order' => 1,
                'is_active' => true,
                'default_content' => [
                    'title_en' => '',
                    'title_ar' => '',
                    'description_en' => '',
                    'description_ar' => '',
                    'shape_image' => '/assets/img/hero-shape.svg',
                    'icon' => null,
                    'hero_image' => null,
                    'button_text_en' => 'Start Your Project',
                    'button_text_ar' => 'ابدأ مشروعك الآن',
                    'button_url' => '#',
                ],
            ],
            
            // Partners/Brands section
            [
                'key' => 'partners',
                'name_en' => 'Partners',
                'name_ar' => 'الشركاء',
                'icon' => 'far fa-handshake',
                'preview_image' => null,
                'component_name' => 'PartnersSection',
                'is_fixed' => false,
                'default_order' => 2,
                'is_active' => true,
                'default_content' => [
                    'logos' => [],
                ],
            ],
            
            // Concept section (includes two content blocks + counters)
            [
                'key' => 'concept',
                'name_en' => 'Concept',
                'name_ar' => 'المفهوم',
                'icon' => 'far fa-lightbulb',
                'preview_image' => null,
                'component_name' => 'ConceptSection',
                'is_fixed' => false,
                'default_order' => 3,
                'is_active' => true,
                'default_content' => [
                    // First concept block
                    'first_block' => [
                        'title_en' => 'Beyond, from Idea to Execution',
                        'title_ar' => 'بيـوند، من الفكرة إلى التشغيل',
                        'description_en' => '',
                        'description_ar' => 'تبدأ كل رحلة رقمية ناجحة بتحليل دقيق للفكرة وصياغة رؤية واضحة تحدد الأهداف والاحتياجات.\n\nومن خلال نهج متكامل يجمع بين التصميم التقني والتجربة الرقمية، يتم تحويل الفكرة إلى منصة فعّالة جاهزة للإطلاق.\n\nنرافق العميل في جميع المراحل، من بناء النظام وتشغيله إلى تحسين الأداء وتطوير الحلول لضمان أعلى درجات الكفاءة والاستدامة، مع تقديم الدعم المستمر الذي يواكب تطور متطلبات السوق.',
                        'images' => [],
                        'image_alignment' => 'right',
                    ],
                    // Second concept block
                    'second_block' => [
                        'title_en' => 'Digital Success Stories',
                        'title_ar' => 'قصص نجاح رقمية',
                        'description_en' => '',
                        'description_ar' => 'تُعد المشاريع المنفّذة نماذج حقيقية لنجاح التحول الرقمي الذي يجمع بين الإبداع والدقة التنفيذية.\n\nمنصات مثل ريا وجياد وغيرهما تعكس خبرتنا في تحويل الأفكار إلى حلول رقمية متكاملة تحقق نتائج ملموسة وتنافسية في السوق.\n\nكل مشروع يمثل تجربة فريدة تُظهر قدرة بيوند على الدمج بين التقنية والإدارة والتشغيل الذكي، لتكون شريكًا في بناء منظومات رقمية مستدامة تسهم في دفع عجلة التطور والتحول في مختلف القطاعات.',
                        'images' => [],
                        'image_alignment' => 'left',
                    ],
                    // Counters
                    'counters' => [
                        [
                            'label_en' => 'Our Projects',
                            'label_ar' => 'مشاريعنا',
                            'start_number' => 0,
                            'end_number' => 50,
                            'unit' => '+',
                            'duration' => 2000,
                        ],
                        [
                            'label_en' => 'Our Clients',
                            'label_ar' => 'عملائنا',
                            'start_number' => 0,
                            'end_number' => 1000,
                            'unit' => '+',
                            'duration' => 2000,
                        ],
                        [
                            'label_en' => 'Our Partners',
                            'label_ar' => 'شركائنا',
                            'start_number' => 0,
                            'end_number' => 20,
                            'unit' => '+',
                            'duration' => 2000,
                        ],
                    ],
                ],
            ],
            
            // Services section
            [
                'key' => 'services',
                'name_en' => 'Our Services',
                'name_ar' => 'خدماتنا',
                'icon' => 'far fa-cogs',
                'preview_image' => null,
                'component_name' => 'ServicesSection',
                'is_fixed' => false,
                'default_order' => 4,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Our Services',
                    'title_ar' => 'خدماتنا',
                    'description_en' => '',
                    'description_ar' => '',
                    'items' => [],
                ],
            ],
            
            // Call to Action section
            [
                'key' => 'cta',
                'name_en' => 'Call to Action',
                'name_ar' => 'دعوة للتواصل',
                'icon' => 'far fa-phone-alt',
                'preview_image' => null,
                'component_name' => 'CtaSection',
                'is_fixed' => false,
                'default_order' => 5,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Do you have a project or idea you want to implement?',
                    'title_ar' => 'لديك مشروع أو فكرة تريد تنفيذها؟',
                    'description_en' => 'Contact us now. We help you turn your idea into digital success',
                    'description_ar' => 'تواصل معنا الأن. نساعدك في تحويل فكرتك إلى نجاح رقمى',
                    'button_text_en' => 'Contact Us',
                    'button_text_ar' => 'تواصل معنا',
                    'contact_items' => [
                        [
                            'type' => 'email',
                            'icon' => 'assets/img/mail-icon.svg',
                            'title_en' => 'Email us',
                            'title_ar' => 'راسلنا عبر البريد الإلكتروني',
                            'values' => ['info@beyond.com.sa', 'info@beyond.com.sa'],
                        ],
                        [
                            'type' => 'phone',
                            'icon' => 'assets/img/telephone-icon.svg',
                            'title_en' => 'Call us',
                            'title_ar' => 'تواصل معنا على',
                            'values' => ['+966 8001111144', '+966 920031831'],
                        ],
                    ],
                ],
            ],
            
            // Projects/Work section
            [
                'key' => 'projects',
                'name_en' => 'Our Work',
                'name_ar' => 'أعمالنا',
                'icon' => 'far fa-briefcase',
                'preview_image' => null,
                'component_name' => 'WorkSection',
                'is_fixed' => false,
                'default_order' => 6,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Our Work',
                    'title_ar' => 'أعمالنا',
                    'description_en' => '',
                    'description_ar' => '',
                    'items' => [],
                ],
            ],
            
            // Team section
            [
                'key' => 'team',
                'name_en' => 'Team',
                'name_ar' => 'فريق العمل',
                'icon' => 'far fa-users',
                'preview_image' => null,
                'component_name' => 'TeamSection',
                'is_fixed' => false,
                'default_order' => 7,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Team',
                    'title_ar' => 'فريق العمل',
                    'description_en' => '',
                    'description_ar' => '',
                    'items' => [],
                ],
            ],
            
            // Contact section (with contact info cards)
            [
                'key' => 'contact',
                'name_en' => 'Contact',
                'name_ar' => 'تواصل معنا',
                'icon' => 'far fa-address-card',
                'preview_image' => null,
                'component_name' => 'ContactSection',
                'is_fixed' => false,
                'default_order' => 8,
                'is_active' => true,
                'default_content' => [
                    'logo' => null,
                    'button_text_en' => 'Contact Us Now',
                    'button_text_ar' => 'تواصل معنا الآن',
                    'button_url' => '#',
                    'contact_cards' => [
                        [
                            'icon' => 'assets/img/location-icon.svg',
                            'title_en' => 'Visit us',
                            'title_ar' => 'زورنا',
                            'address_en' => '',
                            'address_ar' => 'الرياض - المملكة العربية السعودية',
                        ],
                        [
                            'icon' => 'assets/img/mail-icon.svg',
                            'title_en' => 'Email us',
                            'title_ar' => 'راسلنا',
                            'value' => 'info@beyond.com.sa',
                        ],
                        [
                            'icon' => 'assets/img/telephone-icon.svg',
                            'title_en' => 'Call us',
                            'title_ar' => 'اتصل بنا',
                            'value' => '+966 8001111144',
                        ],
                    ],
                ],
            ],
            
            // Gallery section
            [
                'key' => 'gallery',
                'name_en' => 'Gallery',
                'name_ar' => 'المعرض',
                'icon' => 'far fa-images',
                'preview_image' => null,
                'component_name' => 'GallerySection',
                'is_fixed' => false,
                'default_order' => 9,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Gallery',
                    'title_ar' => 'المعرض',
                    'description_en' => 'A visual journey through our most important achievements in the world of technology, design and integrated management.',
                    'description_ar' => 'رحلة بصرية لأهم إنجازاتنا في عالم التقنية والتصميم والإدارة المتكاملة.',
                    'images' => [],
                    'button' => [
                        'text_en' => 'View Full Gallery',
                        'text_ar' => 'شاهد المعرض كاملاً',
                        'url' => '#',
                        'icon' => 'far fa-angle-left',
                        'icon_position' => 'after',
                    ],
                ],
            ],
            
            // FAQ section
            [
                'key' => 'faq',
                'name_en' => 'FAQ',
                'name_ar' => 'الأسئلة الشائعة',
                'icon' => 'far fa-question-circle',
                'preview_image' => null,
                'component_name' => 'FaqSection',
                'is_fixed' => false,
                'default_order' => 10,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Your Questions... We Answer Them Clearly',
                    'title_ar' => 'أسئلتك… نُجيب عليها بكل وضوح',
                    'description_en' => 'Everything you need to know before requesting, we have gathered it for you here in summary and transparency',
                    'description_ar' => 'كل ما تحتاج معرفته قبل الطلب، جمعناه لك هنا باختصار وشفافية',
                    'items' => [],
                ],
            ],
            
            // Inquiry section (bottom CTA)
            [
                'key' => 'inquiry',
                'name_en' => 'Inquiry',
                'name_ar' => 'استفسار',
                'icon' => 'far fa-paper-plane',
                'preview_image' => null,
                'component_name' => 'InquirySection',
                'is_fixed' => false,
                'default_order' => 11,
                'is_active' => true,
                'default_content' => [
                    'title_en' => 'Frequently Asked Questions',
                    'title_ar' => 'الأسئلة الشائعة',
                    'description_en' => '',
                    'description_ar' => '',
                    'items' => [],
                ],
            ],
            
            // Footer section (fixed)
            [
                'key' => 'footer',
                'name_en' => 'Footer',
                'name_ar' => 'الفوتر',
                'icon' => 'far fa-window-minimize',
                'preview_image' => null,
                'component_name' => 'FooterSection',
                'is_fixed' => true,
                'default_order' => 999,
                'is_active' => true,
                'default_content' => [
                    'logo' => null,
                    'description_en' => '',
                    'description_ar' => '',
                    'social_links' => [],
                    'quick_links' => [],
                    'contact_info' => [
                        'phone' => '',
                        'email' => '',
                        'address_en' => '',
                        'address_ar' => '',
                    ],
                    'copyright_en' => 'All Rights Reserved Beyond © ' . date('Y'),
                    'copyright_ar' => 'جميع الحقوق محفوظة Beyond © ' . date('Y'),
                ],
            ],
        ];

        foreach ($sectionTypes as $type) {
            SectionType::updateOrCreate(
                ['key' => $type['key']],
                $type
            );
        }
    }
}
