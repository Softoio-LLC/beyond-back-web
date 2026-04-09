<?php

namespace Database\Seeders;

use App\Models\SectionType;
use Illuminate\Database\Seeder;

class SectionContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * This seeder contains the actual content from the HTML template.
     */
    public function run(): void
    {
        $sectionTypes = [
            // ========================================
            // HEADER SECTION (Fixed)
            // ========================================
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
                    'logo' => '/assets/img/logo.png',
                    'menu_items' => [
                        [
                            'label_ar' => 'الرئيسية',
                            'label_en' => 'Home',
                            'url_en' => '/',
                            'url_ar' => '/ar',
                            'children' => [],
                        ],
                        [
                            'label_ar' => 'من نحن',
                            'label_en' => 'About',
                            'url_en' => '/about',
                            'url_ar' => '/ar/about',
                            'children' => [],
                        ],
                        [
                            'label_ar' => 'خدماتنا',
                            'label_en' => 'Services',
                            'url_en' => '/services',
                            'url_ar' => '/ar/services',
                            'children' => [
                                ['label_ar' => 'منصة ريا', 'label_en' => 'Raya Platform', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'منصة جياد', 'label_en' => 'Jiyad Platform', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'منصة Shops Z', 'label_en' => 'Shops Z Platform', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'Beyond ERP', 'label_en' => 'Beyond ERP', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'Beyond Pay', 'label_en' => 'Beyond Pay', 'url_en' => '#', 'url_ar' => '#'],
                            ],
                        ],
                        [
                            'label_ar' => 'المعرض',
                            'label_en' => 'Gallery',
                            'url_en' => '/gallery',
                            'url_ar' => '/ar/gallery',
                            'children' => [],
                        ],
                        [
                            'label_ar' => 'أعمالنا',
                            'label_en' => 'Our Work',
                            'url_en' => '/work',
                            'url_ar' => '/ar/work',
                            'children' => [
                                ['label_ar' => 'الخدمات التجارية', 'label_en' => 'Commercial Services', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'حلول المبيعات والتوزيع المباشر', 'label_en' => 'Sales & Distribution Solutions', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'البرمجة وتطوير التطبيقات', 'label_en' => 'Programming & App Development', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'إدارة المشاريع وتنفيذها', 'label_en' => 'Project Management', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'التسويق الإلكتروني', 'label_en' => 'Digital Marketing', 'url_en' => '#', 'url_ar' => '#'],
                            ],
                        ],
                    ],
                    'contact_button_text_ar' => 'تواصل معنا',
                    'contact_button_text_en' => 'Contact Us',
                    'contact_button_url' => '#contact',
                    'flag_ar' => '/assets/img/flag-1.png',
                    'flag_en' => '/assets/img/flag-2.png',
                    'check_icon' => '/assets/img/check-radio.svg',
                    'lang_label_ar' => 'عربي',
                    'lang_label_en' => 'English',
                ],
            ],

            // ========================================
            // HERO SLIDER SECTION (Homepage)
            // ========================================
            [
                'key' => 'hero_slider',
                'name_en' => 'Hero Slider',
                'name_ar' => 'السلايدر الرئيسي',
                'icon' => 'far fa-images',
                'preview_image' => '/assets/section-preview/hero-slider-section.png',
                'component_name' => 'HeroSliderSection',
                'is_fixed' => false,
                'default_order' => 1,
                'is_active' => true,
                'default_content' => [
                    'background_image' => '/assets/img/hero-bg.png',
                    'subtitle_ar' => 'المستقبل هنا',
                    'subtitle_en' => 'The Future is Here',
                    'title_ar' => 'بيوند - نحوّل الرؤية إلى <span>إنجاز رقمي</span> ونُدير الرحلة كاملة',
                    'title_en' => 'Beyond - Transforming Vision into <span>Digital Achievement</span> and Managing the Entire Journey',
                    'description_ar' => 'شركة سعودية متخصصة في بناء وتشغيل المنصات الرقمية، تجمع بين التقنية والإبداع في مجالات البرمجة، المشاريع التقنية، التسويق الرقمي، ونظم الـ<span>ERP</span>.',
                    'description_en' => 'A Saudi company specialized in building and operating digital platforms, combining technology and creativity in programming, technical projects, digital marketing, and <span>ERP</span> systems.',
                    'button_text_ar' => 'ابدأ مشروعك الآن',
                    'button_text_en' => 'Start Your Project Now',
                    'button_url' => '#',
                    'slides' => [
                        ['image' => '/assets/img/hero-thumb-1.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-2.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-3.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-1.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-2.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-3.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-1.jpg', 'alt' => 'Thumb'],
                        ['image' => '/assets/img/hero-thumb-2.jpg', 'alt' => 'Thumb'],
                    ],
                ],
            ],

            // ========================================
            // HERO COMMON SECTION (Service Pages - Dark background)
            // ========================================
            [
                'key' => 'hero_common',
                'name_en' => 'Hero Common',
                'name_ar' => 'الهيرو العام',
                'icon' => 'far fa-window-alt',
                'preview_image' => '/assets/section-preview/hero-common-section.png',
                'component_name' => 'HeroCommonSection',
                'is_fixed' => false,
                'default_order' => 1,
                'is_active' => true,
                'default_content' => [
                    'background_image' => null,
                    'shape_image' => '/assets/img/hero-shape.svg',
                    'icon' => '/assets/img/icon/hero-icon-1.svg',
                    'hero_image' => '/assets/img/hero-img-1.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'الخدمات التجارية',
                    'title_en' => 'Commercial Services',
                    'description_ar' => 'نوفر حلولًا واستشارات تجارية متكاملة تساعد الشركات على تحقيق النمو والتوسع المستدام. تشمل خدماتنا تحليل الأسواق، إدارة علاقات المصانع، التفاوض التجاري، وضمان جودة العمليات لضمان أعلى عائد وأفضل أداء للشركة.',
                    'description_en' => 'We provide comprehensive commercial solutions and consultations that help companies achieve sustainable growth and expansion. Our services include market analysis, factory relations management, commercial negotiation, and quality assurance to ensure the highest returns and best performance.',
                    'button_text_ar' => 'ابدأ مشروعك الآن',
                    'button_text_en' => 'Start Your Project Now',
                    'button_url' => '#',
                    'secondary_button_text_ar' => '',
                    'secondary_button_text_en' => '',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // PARTNERS/BRANDS SECTION
            // ========================================
            [
                'key' => 'partners',
                'name_en' => 'Partners',
                'name_ar' => 'الشركاء',
                'icon' => 'far fa-handshake',
                'preview_image' => '/assets/section-preview/partners-section.png',
                'component_name' => 'PartnersSection',
                'is_fixed' => false,
                'default_order' => 2,
                'is_active' => true,
                'default_content' => [
                    'logos' => [
                        ['image' => '/assets/img/brand-logo-1.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-2.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-3.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-4.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-5.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-6.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-7.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-1.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-2.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-3.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-4.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-5.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-6.svg', 'url' => '#', 'alt' => 'Logo'],
                        ['image' => '/assets/img/brand-logo-7.svg', 'url' => '#', 'alt' => 'Logo'],
                    ],
                ],
            ],

            // ========================================
            // CONCEPT SECTION
            // ========================================
            [
                'key' => 'concept',
                'name_en' => 'Concept',
                'name_ar' => 'المفهوم',
                'icon' => 'far fa-lightbulb',
                'preview_image' => '/assets/section-preview/concept-section.png',
                'component_name' => 'ConceptSection',
                'is_fixed' => false,
                'default_order' => 3,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/concept-shape.png',
                    'bottom_shape_image' => '/assets/img/concept-bottom-shape.png',
                    'counter_bg_image' => '/assets/img/counter-up-bg.png',
                    'blocks' => [
                        [
                            'title_ar' => 'بيـوند، من الفكرة إلى التشغيل',
                            'title_en' => 'Beyond, from Idea to Execution',
                            'paragraphs_ar' => [
                                'تبدأ كل رحلة رقمية ناجحة بتحليل دقيق للفكرة وصياغة رؤية واضحة تحدد الأهداف والاحتياجات.',
                                'ومن خلال نهج متكامل يجمع بين التصميم التقني والتجربة الرقمية، يتم تحويل الفكرة إلى منصة فعّالة جاهزة للإطلاق.',
                                'نرافق العميل في جميع المراحل، من بناء النظام وتشغيله إلى تحسين الأداء وتطوير الحلول لضمان أعلى درجات الكفاءة والاستدامة، مع تقديم الدعم المستمر الذي يواكب تطور متطلبات السوق.',
                            ],
                            'paragraphs_en' => [
                                'Every successful digital journey begins with a careful analysis of the idea and formulating a clear vision that defines goals and needs.',
                                'Through an integrated approach that combines technical design and digital experience, the idea is transformed into an effective platform ready for launch.',
                                'We accompany the client at all stages, from building and operating the system to improving performance and developing solutions to ensure the highest levels of efficiency and sustainability, while providing continuous support that keeps pace with market requirements.',
                            ],
                            'slides' => [
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-bottom-left'],
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-top-right'],
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-bottom-left'],
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-top-right'],
                            ],
                            'image_on_left' => false,
                        ],
                        [
                            'title_ar' => 'قصص نجاح رقمية',
                            'title_en' => 'Digital Success Stories',
                            'paragraphs_ar' => [
                                'تُعد المشاريع المنفّذة نماذج حقيقية لنجاح التحول الرقمي الذي يجمع بين الإبداع والدقة التنفيذية.',
                                'منصات مثل ريا وجياد وغيرهما تعكس خبرتنا في تحويل الأفكار إلى حلول رقمية متكاملة تحقق نتائج ملموسة وتنافسية في السوق.',
                                'كل مشروع يمثل تجربة فريدة تُظهر قدرة بيوند على الدمج بين التقنية والإدارة والتشغيل الذكي، لتكون شريكًا في بناء منظومات رقمية مستدامة تسهم في دفع عجلة التطور والتحول في مختلف القطاعات.',
                            ],
                            'paragraphs_en' => [
                                'The executed projects are real examples of digital transformation success that combines creativity and execution precision.',
                                'Platforms like Raya and Jiyad reflect our expertise in transforming ideas into integrated digital solutions that achieve tangible and competitive results in the market.',
                                'Each project represents a unique experience that demonstrates Beyond\'s ability to integrate technology, management, and smart operation, to be a partner in building sustainable digital ecosystems that contribute to driving development and transformation across various sectors.',
                            ],
                            'slides' => [
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-bottom-left'],
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-top-right'],
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-bottom-left'],
                                ['image' => '/assets/img/concept-thumb.jpg', 'alt' => 'Thumb', 'radius_class' => 'radious-top-right'],
                            ],
                            'image_on_left' => true,
                        ],
                    ],
                    'counters' => [
                        ['value' => '50+', 'label_ar' => 'مشاريعنا', 'label_en' => 'Our Projects'],
                        ['value' => '1000+', 'label_ar' => 'عملائنا', 'label_en' => 'Our Clients'],
                        ['value' => '20+', 'label_ar' => 'شركائنا', 'label_en' => 'Our Partners'],
                    ],
                ],
            ],

            // ========================================
            // SERVICES SECTION
            // ========================================
            [
                'key' => 'services',
                'name_en' => 'Our Services',
                'name_ar' => 'خدماتنا',
                'icon' => 'far fa-cogs',
                'preview_image' => '/assets/section-preview/service-section.png',
                'component_name' => 'ServicesSection',
                'is_fixed' => false,
                'default_order' => 4,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'خدماتنا',
                    'title_en' => 'Our Services',
                    'shape_image' => '/assets/img/service-shape.png',
                    'services' => [
                        [
                            'image' => '/assets/img/service-thumb-1.png',
                            'title_ar' => 'البرمجة وتطوير التطبيقات',
                            'title_en' => 'Programming & App Development',
                            'description_ar' => 'تطوير تطبيقات ومواقع إلكترونية حسب احتياجات العملاء باستخدام أحدث التقنيات.',
                            'description_en' => 'Developing applications and websites according to customer needs using the latest technologies.',
                        ],
                        [
                            'image' => '/assets/img/service-thumb-4.png',
                            'title_ar' => 'إدارة المشاريع وتنفيذها',
                            'title_en' => 'Project Management & Implementation',
                            'description_ar' => 'تخطيط وتنفيذ المشاريع الرقمية من البداية للنهاية بكفاءة عالية لضمان نجاح كل مشروع.',
                            'description_en' => 'Planning and executing digital projects from start to finish with high efficiency to ensure the success of every project.',
                        ],
                        [
                            'image' => '/assets/img/service-thumb-2.png',
                            'title_ar' => 'حلول المبيعات والتوزيع المباشر',
                            'title_en' => 'Sales & Direct Distribution Solutions',
                            'description_ar' => 'تحويل متاجركم التقليدية إلى منصات رقمية متطورة مع تجربة مستخدم سلسة وتجهيزات كاملة للبيع عبر الإنترنت.',
                            'description_en' => 'Transform your traditional stores into advanced digital platforms with seamless user experience and complete online selling capabilities.',
                        ],
                        [
                            'image' => '/assets/img/service-thumb-5.png',
                            'title_ar' => 'الخدمات التجارية',
                            'title_en' => 'Commercial Services',
                            'description_ar' => 'تحويل متاجركم التقليدية إلى منصات رقمية متطورة مع تجربة مستخدم سلسة وتجهيزات كاملة للبيع عبر الإنترنت.',
                            'description_en' => 'Transform your traditional stores into advanced digital platforms with seamless user experience and complete online selling capabilities.',
                        ],
                        [
                            'image' => '/assets/img/service-thumb-3.png',
                            'title_ar' => 'التسويق الإلكتروني',
                            'title_en' => 'Digital Marketing',
                            'description_ar' => 'استراتيجيات مبتكرة لتعزيز حضور العلامات التجارية على الإنترنت وزيادة التفاعل وتحقيق نتائج ملموسة.',
                            'description_en' => 'Innovative strategies to enhance brand presence online, increase engagement and achieve tangible results.',
                        ],
                    ],
                ],
            ],

            // ========================================
            // CTA SECTION
            // ========================================
            [
                'key' => 'cta',
                'name_en' => 'Call to Action',
                'name_ar' => 'دعوة للتواصل',
                'icon' => 'far fa-phone-alt',
                'preview_image' => null,
                'component_name' => 'CTASection',
                'is_fixed' => false,
                'default_order' => 5,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/cta-shape.png',
                    'button_text_ar' => 'تواصل معنا',
                    'button_text_en' => 'Contact Us',
                    'button_url' => '#',
                    'title_ar' => 'لديك مشروع أو فكرة تريد تنفيذها؟',
                    'title_en' => 'Have a project or idea you want to implement?',
                    'description_ar' => 'تواصل معنا الأن. نساعدك في تحويل فكرتك إلى نجاح رقمى',
                    'description_en' => 'Contact us now. We help you transform your idea into digital success',
                    'contact_cards' => [
                        [
                            'icon' => '/assets/img/mail-icon.svg',
                            'title_ar' => 'راسلنا عبر البريد الإلكتروني',
                            'title_en' => 'Email Us',
                            'links' => [
                                ['text' => 'info@beyond.com.sa', 'url' => 'mailto:info@beyond.com.sa'],
                                ['text' => 'info@beyond.com.sa', 'url' => 'mailto:info@beyond.com.sa'],
                            ],
                        ],
                        [
                            'icon' => '/assets/img/telephone-icon.svg',
                            'title_ar' => 'تواصل معنا على',
                            'title_en' => 'Contact Us On',
                            'links' => [
                                ['text' => '8001111144 966+', 'url' => 'tel:+9668001111144'],
                                ['text' => '920031831 966+', 'url' => 'tel:+966920031831'],
                            ],
                        ],
                    ],
                ],
            ],

            // ========================================
            // WORK/PROJECTS SECTION
            // ========================================
            [
                'key' => 'projects',
                'name_en' => 'Our Work',
                'name_ar' => 'أعمالنا',
                'icon' => 'far fa-briefcase',
                'preview_image' => '/assets/section-preview/our-work-section.png',
                'is_fixed' => false,
                'default_order' => 6,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'أعمالنا',
                    'title_en' => 'Our Work',
                    'shape_image' => '/assets/img/service-shape.png',
                    'work_shape_image' => '/assets/img/work-shape-3.png',
                    'projects' => [
                        [
                            'title_ar' => 'منصة جياد',
                            'title_en' => 'Jiyad Platform',
                            'description_ar' => 'جياد منصة رقمية متكاملة تُعنى بعالم الخيل، وتقدم حلولاً مبتكرة لمُلاك الخيول، المستثمرين، والمشترين، عبر تجربة رقمية متقدمة تجمع بين المعرفة، السوق، والمجتمع.',
                            'description_en' => 'Jiyad is a comprehensive digital platform dedicated to the world of horses, offering innovative solutions for horse owners, investors, and buyers through an advanced digital experience.',
                            'image' => '/assets/img/work-thumb-3.png',
                            'btn_color_class' => '',
                            'learn_more_url' => '#',
                            'visit_url' => '#',
                            'learn_more_text_ar' => 'تعرف أكثر',
                            'learn_more_text_en' => 'Learn More',
                            'visit_text_ar' => 'زيارة المشروع',
                            'visit_text_en' => 'Visit Project',
                        ],
                        [
                            'title_ar' => 'منصة ريا',
                            'title_en' => 'Raya Platform',
                            'description_ar' => 'ريا هي منصة تسوق تقدم لك تجربة تسوق إلكتروني متميزة تجمع بين الجودة العالية والأسعار المناسبة مع تشكيلة واسعة من المنتجات.',
                            'description_en' => 'Raya is a shopping platform that offers you a distinguished e-commerce experience combining high quality, suitable prices, and a wide selection of products.',
                            'image' => '/assets/img/work-thumb-2.png',
                            'btn_color_class' => 'purple-btns',
                            'learn_more_url' => '#',
                            'visit_url' => '#',
                            'learn_more_text_ar' => 'تعرف أكثر',
                            'learn_more_text_en' => 'Learn More',
                            'visit_text_ar' => 'زيارة المشروع',
                            'visit_text_en' => 'Visit Project',
                        ],
                        [
                            'title_ar' => 'منصة ShopsZe',
                            'title_en' => 'ShopsZe Platform',
                            'description_ar' => 'الوجهة المثلى للتجارة الإلكترونية التي تمكّنك من إنشاء وإدارة متجرك الإلكتروني بسهولة ويسر. نحن نفخر بكوننا شريككم الموثوق في رحلة التحول الرقمي لأعمالكم.',
                            'description_en' => 'The ultimate destination for e-commerce that enables you to create and manage your online store easily.',
                            'image' => '/assets/img/work-thumb-1.png',
                            'btn_color_class' => 'green-btns',
                            'learn_more_url' => '#',
                            'visit_url' => '#',
                            'learn_more_text_ar' => 'تعرف أكثر',
                            'learn_more_text_en' => 'Learn More',
                            'visit_text_ar' => 'زيارة المشروع',
                            'visit_text_en' => 'Visit Project',
                        ],
                    ],
                ],
            ],

            // ========================================
            // TEAM SECTION
            // ========================================
            [
                'key' => 'team',
                'name_en' => 'Team',
                'name_ar' => 'فريق العمل',
                'icon' => 'far fa-users',
                'preview_image' => '/assets/section-preview/team-section.png',
                'component_name' => 'TeamSection',
                'is_fixed' => false,
                'default_order' => 7,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'فريق العمل',
                    'title_en' => 'Our Team',
                    'shape_image' => '/assets/img/team-shape.png',
                    'members' => [
                        [
                            'image' => '/assets/img/team-thumb-4.png',
                            'title_ar' => 'الموظف',
                            'title_en' => 'Employee',
                            'description_ar' => 'خدمة ذاتية وتطبيق جوال يختصران المهام المتكررة على فريق الموارد البشرية',
                            'description_en' => 'Self-service and mobile app that simplify repetitive tasks for HR team',
                        ],
                        [
                            'image' => '/assets/img/team-thumb-3.png',
                            'title_ar' => 'مسئول الرواتب',
                            'title_en' => 'Payroll Manager',
                            'description_ar' => 'إدارة الرواتب بسهولة تامة، من احتساب الأجور إلى المحاسبة الخاصة بالرواتب',
                            'description_en' => 'Manage payroll with ease, from wage calculation to payroll accounting',
                        ],
                        [
                            'image' => '/assets/img/team-thumb-2.png',
                            'title_ar' => 'مدير الموارد البشرية',
                            'title_en' => 'HR Manager',
                            'description_ar' => 'أتمتة عمليات الموارد البشرية وإجراءات الموظفين لرفع كفاءة قسم الموارد البشرية',
                            'description_en' => 'Automate HR processes and employee procedures to increase HR department efficiency',
                        ],
                        [
                            'image' => '/assets/img/team-thumb-1.png',
                            'title_ar' => 'المدير المباشر',
                            'title_en' => 'Direct Manager',
                            'description_ar' => 'تطبيق السياسات بسهولة وتوفير تجربة سلسة في الموارد البشرية والرواتب للموظفين',
                            'description_en' => 'Apply policies easily and provide a seamless HR and payroll experience for employees',
                        ],
                    ],
                ],
            ],

            // ========================================
            // CONTACT SECTION
            // ========================================
            [
                'key' => 'contact',
                'name_en' => 'Contact',
                'name_ar' => 'تواصل معنا',
                'icon' => 'far fa-address-card',
                'preview_image' => '/assets/section-preview/contact-section.png',
                'component_name' => 'ContactSection',
                'is_fixed' => false,
                'default_order' => 8,
                'is_active' => true,
                'default_content' => [
                    'background_image' => '/assets/img/contact-bg.png',
                    'contact_logo' => '/assets/img/contact-logo.svg',
                    'button_text_ar' => 'تواصل معنا',
                    'button_text_en' => 'Contact Us',
                    'button_url' => '#',
                    'cards' => [
                        [
                            'icon' => '/assets/img/contact-icon-1.svg',
                            'title_ar' => 'فريـق متنوع',
                            'title_en' => 'Diverse Team',
                            'description_ar' => 'يضم فريق بيوند نخبة من الخبراء من خلفيات وثقافات مختلفة، ما يعزز الإبداع والتكامل في كل مشروع ويضمن تقديم رؤى متعددة الزوايا.',
                            'description_en' => 'Beyond team includes elite experts from different backgrounds and cultures, enhancing creativity and integration in every project.',
                        ],
                        [
                            'icon' => '/assets/img/contact-icon-2.svg',
                            'title_ar' => 'خبـرة واسعة',
                            'title_en' => 'Extensive Experience',
                            'description_ar' => 'تمتلك بيوند خبرة واسعة في إدارة وتنفيذ المشاريع بمختلف المجالات، مما يمنحها قدرة عالية على فهم متطلبات كل صناعة وتقديم حلول دقيقة وفعّالة.',
                            'description_en' => 'Beyond has extensive experience in managing and executing projects across various fields.',
                        ],
                        [
                            'icon' => '/assets/img/contact-icon-3.svg',
                            'title_ar' => 'حلول رقمية مبتكرة',
                            'title_en' => 'Innovative Digital Solutions',
                            'description_ar' => 'تعتمد بيوند على أحدث التقنيات الرقمية وأدوات التحليل الذكية لتطوير حلول مبتكرة تُحدث فرقًا حقيقيًا في أداء الأعمال ونموها.',
                            'description_en' => 'Beyond relies on the latest digital technologies and smart analytics tools to develop innovative solutions.',
                        ],
                    ],
                ],
            ],

            // ========================================
            // GALLERY SECTION
            // ========================================
            [
                'key' => 'gallery',
                'name_en' => 'Gallery',
                'name_ar' => 'المعرض',
                'icon' => 'far fa-images',
                'preview_image' => '/assets/section-preview/gallery-section.png',
                'component_name' => 'GallerySection',
                'is_fixed' => false,
                'default_order' => 9,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'المعرض',
                    'title_en' => 'Gallery',
                    'subtitle_ar' => 'رحلة بصرية لأهم إنجازاتنا في عالم التقنية والتصميم والإدارة المتكاملة.',
                    'subtitle_en' => 'A visual journey of our most important achievements in technology, design, and integrated management.',
                    'shape_image' => '/assets/img/cta-shape.png',
                    'button_text_ar' => 'شاهد المعرض كاملاً',
                    'button_text_en' => 'View Full Gallery',
                    'button_url' => '#',
                    'images' => [
                        ['image' => '/assets/img/gallery-thumb-2.jpg', 'title' => 'seamlessksa'],
                        ['image' => '/assets/img/gallery-thumb-1.jpg', 'title' => 'seamlessksa'],
                    ],
                ],
            ],

            // ========================================
            // FAQ SECTION
            // ========================================
            [
                'key' => 'faq',
                'name_en' => 'FAQ',
                'name_ar' => 'الأسئلة الشائعة',
                'icon' => 'far fa-question-circle',
                'preview_image' => '/assets/section-preview/faq-section.png',
                'component_name' => 'FAQSection',
                'is_fixed' => false,
                'default_order' => 10,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'أسئلتك… نُجيب عليها بكل وضوح',
                    'title_en' => 'Your Questions... We Answer Clearly',
                    'subtitle_ar' => 'كل ما تحتاج معرفته قبل الطلب، جمعناه لك هنا باختصار وشفافية',
                    'subtitle_en' => 'Everything you need to know before ordering, we gathered for you here briefly and transparently',
                    'shape_image' => '/assets/img/service-shape.png',
                    'faqs' => [
                        [
                            'question_ar' => 'كيف يمكن لبيوند مساعدتي في بدء رحلة التحول الرقمي؟',
                            'question_en' => 'How can Beyond help me start my digital transformation journey?',
                            'answer_ar' => 'نبدأ بفهم احتياجاتك وأهدافك، ثم نضع خطة شاملة للتحول الرقمي تشمل تحليل الوضع الحالي وتصميم الحلول المناسبة.',
                            'answer_en' => 'We start by understanding your needs and goals, then we develop a comprehensive digital transformation plan.',
                        ],
                        [
                            'question_ar' => 'هل تقدمون خدمات التصميم والبرمجة معًا؟',
                            'question_en' => 'Do you offer design and programming services together?',
                            'answer_ar' => 'نعم، نقدم حلولًا متكاملة تشمل دراسة الفكرة، تصميم واجهات المستخدم، التطوير البرمجي، الإطلاق، والدعم الفني المستمر.',
                            'answer_en' => 'Yes, we offer integrated solutions that include idea study, UI design, software development, launch, and ongoing technical support.',
                        ],
                        [
                            'question_ar' => 'ما القطاعات أو أنواع الشركات التي تخدمها بيوند؟',
                            'question_en' => 'What sectors or types of companies does Beyond serve?',
                            'answer_ar' => 'نخدم مختلف القطاعات بما في ذلك التجارة الإلكترونية، الخدمات المالية، التعليم، الرعاية الصحية، والقطاع الحكومي.',
                            'answer_en' => 'We serve various sectors including e-commerce, financial services, education, healthcare, and government sector.',
                        ],
                        [
                            'question_ar' => 'هل يمكن العمل مع بيوند عن بُعد؟',
                            'question_en' => 'Can I work with Beyond remotely?',
                            'answer_ar' => 'نعم، نقدم خدماتنا عن بُعد لجميع العملاء مع ضمان نفس مستوى الجودة والتواصل المستمر.',
                            'answer_en' => 'Yes, we offer our services remotely to all clients while ensuring the same level of quality and continuous communication.',
                        ],
                        [
                            'question_ar' => 'كيف يمكنني معرفة تكلفة الخدمة؟',
                            'question_en' => 'How can I know the cost of the service?',
                            'answer_ar' => 'تواصل معنا لتحديد متطلباتك وسنقدم لك عرض سعر مفصل بناءً على نطاق المشروع.',
                            'answer_en' => 'Contact us to define your requirements and we will provide you with a detailed quote based on the project scope.',
                        ],
                    ],
                ],
            ],

            // ========================================
            // INQUIRY SECTION
            // ========================================
            [
                'key' => 'inquiry',
                'name_en' => 'Inquiry',
                'name_ar' => 'استفسار',
                'icon' => 'far fa-paper-plane',
                'preview_image' => '/assets/section-preview/inquiry-section.png',
                'component_name' => 'InquirySection',
                'is_fixed' => false,
                'default_order' => 11,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'جاهز لتبدأ مشروعك؟',
                    'title_en' => 'Ready to Start Your Project?',
                    'description_ar' => 'ابـدأ معنا بخطوات واثقة، نحن هنا لتحويل فكرتك إلى قصة نجاح رقمية.',
                    'description_en' => 'Start with us with confident steps, we are here to turn your idea into a digital success story.',
                    'shape_image' => '/assets/img/cta-shape-2.png',
                    'image' => '/assets/img/inquiry-image.png',
                    'primary_button_text_ar' => 'ابنى مشروعك الآن',
                    'primary_button_text_en' => 'Build Your Project Now',
                    'primary_button_url' => '#',
                    'secondary_button_text_ar' => 'تحدث معنا عبر الواتساب',
                    'secondary_button_text_en' => 'Talk to Us via WhatsApp',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // MAP SECTION
            // ========================================
            [
                'key' => 'map',
                'name_en' => 'Map',
                'name_ar' => 'الخريطة',
                'icon' => 'far fa-map-marker-alt',
                'preview_image' => null,
                'component_name' => 'MapSection',
                'is_fixed' => false,
                'default_order' => 12,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'موقعنا',
                    'title_en' => 'Our Location',
                    'subtitle_ar' => 'تفضل بزيارتنا',
                    'subtitle_en' => 'Visit Us',
                    'map_title_ar' => 'خريطة الموقع',
                    'map_title_en' => 'Location Map',
                    'address' => 'Riyadh, King Abdulaziz Road, Al-Amal District, Saudi Arabia',
                    'default_location' => 'Riyadh, Saudi Arabia',
                    'latitude' => '24.7136',
                    'longitude' => '46.6753',
                    'business_name' => 'Beyond Technology',
                    'zoom' => '15',
                    'height' => 500,
                    'embed_url' => null,
                ],
            ],

            // ========================================
            // CONTACT INFO SECTION
            // ========================================
            [
                'key' => 'contact-info',
                'name_en' => 'Contact Info',
                'name_ar' => 'معلومات التواصل',
                'icon' => 'far fa-id-card',
                'preview_image' => null,
                'component_name' => 'ContactInfoSection',
                'is_fixed' => false,
                'default_order' => 13,
                'is_active' => true,
                'default_content' => [
                    'overlay_image' => '/assets/img/overly-1.png',
                    'info_cards' => [
                        [
                            'icon' => '/assets/img/icon/contact-icon-1.svg',
                            'title_ar' => 'تواصل معنا على',
                            'title_en' => 'Contact Us On',
                            'content_ar' => '+966 8001111144 <br /> +966 920031831',
                            'content_en' => '+966 8001111144 <br /> +966 920031831',
                        ],
                        [
                            'icon' => '/assets/img/icon/contact-icon-2.svg',
                            'title_ar' => 'راسلنا عبر البريد الإلكتروني',
                            'title_en' => 'Email Us',
                            'content_ar' => 'info@beyond.com.sa <br /> support@beyond.com.sa',
                            'content_en' => 'info@beyond.com.sa <br /> support@beyond.com.sa',
                        ],
                        [
                            'icon' => '/assets/img/icon/contact-icon-3.svg',
                            'title_ar' => 'موقعنا',
                            'title_en' => 'Our Location',
                            'content_ar' => 'الرياض – طريق الملك عبد العزيز, حي الأمل, المملكة العربية السعودية',
                            'content_en' => 'Riyadh - King Abdulaziz Road, Al-Amal District, Saudi Arabia',
                        ],
                    ],
                    'general_info_title_ar' => 'معلومات عامة',
                    'general_info_title_en' => 'General Information',
                    'general_info_description_ar' => 'شركة سعودية متخصصة في بناء وتشغيل المنصات الرقمية، تجمع بين التقنية والإبداع في مجالات البرمجة، المشاريع التقنية، التسويق الرقمي، ونظم الـERP.',
                    'general_info_description_en' => 'A Saudi company specialized in building and operating digital platforms, combining technology and creativity in programming, technical projects, digital marketing, and ERP systems.',
                    'info_items' => [
                        [
                            'type' => 'text',
                            'label_ar' => 'موقع المعرض الرئيسي',
                            'label_en' => 'Main Showroom Location',
                            'value_ar' => 'الرياض – طريق الملك عبد العزيز, حي الأمل, المملكة العربية السعودية',
                            'value_en' => 'Riyadh - King Abdulaziz Road, Al-Amal District, Saudi Arabia',
                        ],
                        [
                            'type' => 'text',
                            'label_ar' => 'ساعات العمل',
                            'label_en' => 'Working Hours',
                            'value_ar' => 'من السبت إلى الخميس: 10:00 صباحًا – 9:00 مساءً الجمعة: 4:00 مساءً – 9:00 مساءً',
                            'value_en' => 'Saturday to Thursday: 10:00 AM – 9:00 PM Friday: 4:00 PM – 9:00 PM',
                        ],
                        [
                            'type' => 'social',
                            'label_ar' => 'حسابات التواصل الاجتماعي',
                            'label_en' => 'Social Media Accounts',
                            'links' => [
                                ['icon' => '/assets/img/icon/snapchat.svg', 'url' => '#', 'name' => 'Snapchat'],
                                ['icon' => '/assets/img/icon/youtube.svg', 'url' => '#', 'name' => 'YouTube'],
                                ['icon' => '/assets/img/icon/tiktok.svg', 'url' => '#', 'name' => 'TikTok'],
                                ['icon' => '/assets/img/icon/instagram.svg', 'url' => '#', 'name' => 'Instagram'],
                            ],
                        ],
                    ],
                    'form_title_ar' => 'اتصل بنا',
                    'form_title_en' => 'Contact Us',
                    'form_description_ar' => 'يسعدنا تواصلك معنا! نحن في BEYOND نهتم بتقديم تجربة متكاملة لعملائنا، ونسعد بالإجابة على استفساراتكم، وتقديم الدعم في كل إنشاء المشروعات',
                    'form_description_en' => 'We are happy to hear from you! At BEYOND, we care about providing a complete experience for our customers, and we are happy to answer your inquiries and provide support in all project creation.',
                    // Form customization fields
                    'country_code' => '+966',
                    'placeholder_name_en' => 'Full Name',
                    'placeholder_name_ar' => 'الاسم الكامل',
                    'placeholder_email_en' => 'Email Address',
                    'placeholder_email_ar' => 'البريد الالكتروني',
                    'placeholder_phone_en' => 'Example 5xxxxxxxx',
                    'placeholder_phone_ar' => 'مثال xxxxxxxx5',
                    'placeholder_subject_en' => 'Subject',
                    'placeholder_subject_ar' => 'الموضوع',
                    'placeholder_message_en' => 'Write your message here...',
                    'placeholder_message_ar' => 'اكتب رسالتك هنا...',
                    'submit_text_en' => 'Send',
                    'submit_text_ar' => 'إرسال',
                    'submitting_text_en' => 'Sending...',
                    'submitting_text_ar' => 'جاري الإرسال...',
                    'success_message_en' => 'Your message was sent successfully!',
                    'success_message_ar' => 'تم إرسال رسالتك بنجاح!',
                    'default_subject_en' => 'Message from Contact Page',
                    'default_subject_ar' => 'رسالة من صفحة التواصل',
                ],
            ],

            // ========================================
            // CONTACT BANNER SECTION
            // ========================================
            [
                'key' => 'contact-banner',
                'name_en' => 'Contact Banner',
                'name_ar' => 'بانر التواصل',
                'icon' => 'far fa-image',
                'preview_image' => null,
                'component_name' => 'ContactBannerSection',
                'is_fixed' => false,
                'default_order' => 14,
                'is_active' => true,
                'default_content' => [
                    'background_image' => '/assets/img/contact-banner.png',
                    'icon' => '/assets/img/icon/Phone-Call.svg',
                    'title_ar' => 'تواصل معنا',
                    'title_en' => 'Contact Us',
                    'breadcrumb_ar' => 'تواصل معنا',
                    'breadcrumb_en' => 'Contact Us',
                    'home_label_ar' => 'الرئيسية',
                    'home_label_en' => 'Home',
                    'side_image' => '/assets/img/Contact-Info.svg',
                ],
            ],

            // ========================================
            // COMMON SERVICE SECTION
            // ========================================
            [
                'key' => 'common_service',
                'name_en' => 'Common Service',
                'name_ar' => 'الخدمات المشتركة',
                'icon' => 'far fa-th-large',
                'preview_image' => '/assets/section-preview/common-service-section.png',
                'component_name' => 'CommonServiceSection',
                'is_fixed' => false,
                'default_order' => 18,
                'is_active' => true,
                'default_content' => [
                    'section_icon' => '/assets/img/icon/svc-sec-6.svg',
                    'title_ar' => 'دور بيوند في المنصة',
                    'title_en' => 'Beyond\'s Role in the Platform',
                    'title_color' => 'inherit',
                    'subtitle_ar' => 'من الفكرة إلى الإطلاق — تدير بيوند كل مرحلة من مراحل المشروع بخبرة متكاملة تجمع بين التقنية والإبداع والتسويق لتحقيق أفضل النتائج.',
                    'subtitle_en' => 'From idea to launch — Beyond manages every stage of the project with integrated expertise combining technology, creativity, and marketing to achieve the best results.',
                    'services' => [
                        [
                            'icon' => '/assets/img/icon/svc-1.svg',
                            'title_ar' => 'تصميم استراتيجيات المبيعات',
                            'title_en' => 'Sales Strategy Design',
                            'description_ar' => 'وضع خطط متكاملة لتوسيع شبكة المبيعات وزيادة الإيرادات بشكل مستدام.',
                            'description_en' => 'Developing comprehensive plans to expand sales network and increase revenue sustainably.',
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
                            'description_en' => 'Using analytical tools to understand customer needs and provide customized solutions.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-4.svg',
                            'title_ar' => 'توسيع قنوات التوزيع',
                            'title_en' => 'Distribution Channel Expansion',
                            'description_ar' => 'بناء شبكة توزيع متكاملة تشمل البيع المباشر والموزعين لضمان الوصول إلى أكبر شريحة من السوق.',
                            'description_en' => 'Building a comprehensive distribution network including direct sales and distributors.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-5.svg',
                            'title_ar' => 'تحسين تجربة العملاء',
                            'title_en' => 'Customer Experience Enhancement',
                            'description_ar' => 'تطوير رحلة العميل في كل مرحلة لضمان ولاء العملاء ورفع مستوى الرضا.',
                            'description_en' => 'Developing the customer journey at every stage to ensure loyalty and satisfaction.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-6.svg',
                            'title_ar' => 'المتابعة والتحليل الدوري',
                            'title_en' => 'Regular Follow-up and Analysis',
                            'description_ar' => 'قياس أداء فرق المبيعات بشكل دوري لتحديد نقاط القوة وفرص التحسين',
                            'description_en' => 'Regularly measuring sales team performance to identify strengths and improvement opportunities.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-7.svg',
                            'title_ar' => 'إدارة التسعير والعروض',
                            'title_en' => 'Pricing and Offers Management',
                            'description_ar' => 'تصميم استراتيجيات تسعير تنافسية مع عروض ترويجية محسوبة لتعزيز المبيعات.',
                            'description_en' => 'Designing competitive pricing strategies with calculated promotional offers.',
                        ],
                        [
                            'icon' => '/assets/img/icon/svc-8.svg',
                            'title_ar' => 'نظم تتبع المبيعات الرقمية',
                            'title_en' => 'Digital Sales Tracking Systems',
                            'description_ar' => 'تطبيق أدوات رقمية لمراقبة عمليات البيع وتحليل النتائج لضمان اتخاذ قرارات فعّالة.',
                            'description_en' => 'Implementing digital tools to monitor sales and analyze results for effective decisions.',
                        ],
                    ],
                ],
            ],

            // ========================================
            // COUNTER AREA SECTION
            // ========================================
            [
                'key' => 'counter_area',
                'name_en' => 'Counter Area',
                'name_ar' => 'منطقة الإحصائيات',
                'icon' => 'far fa-sort-numeric-up',
                'preview_image' => '/assets/section-preview/counter-area.png',
                'component_name' => 'CounterAreaSection',
                'is_fixed' => false,
                'default_order' => 19,
                'is_active' => true,
                'default_content' => [
                    'no_margin_top' => false,
                    'counters' => [
                        [
                            'icon' => '/assets/img/icon/hero-icon-6.svg',
                            'value' => '+40',
                            'label_ar' => 'علامة تجارية',
                            'label_en' => 'Brands',
                        ],
                        [
                            'icon' => '/assets/img/icon/hero-icon-6.svg',
                            'value' => '+10000',
                            'label_ar' => 'منتج',
                            'label_en' => 'Products',
                        ],
                    ],
                ],
            ],

            // ========================================
            // GALLERY PAGE SECTION (with breadcrumb)
            // ========================================
            [
                'key' => 'gallery_page',
                'name_en' => 'Gallery Page',
                'name_ar' => 'صفحة المعرض',
                'icon' => 'far fa-photo-video',
                'preview_image' => null,
                'component_name' => 'GalleryPageSection',
                'is_fixed' => false,
                'default_order' => 20,
                'is_active' => true,
                'default_content' => [
                    'title_ar' => 'المعرض',
                    'title_en' => 'Gallery',
                    'subtitle_ar' => 'رحلة بصرية لأهم إنجازاتنا في عالم التقنية والتصميم والإدارة المتكاملة.',
                    'subtitle_en' => 'A visual journey of our most important achievements in technology, design, and integrated management.',
                    'breadcrumb_ar' => 'المعرض',
                    'breadcrumb_en' => 'Gallery',
                    'items' => [
                        ['image' => '/assets/img/gallery-img/gallery-1.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                        ['image' => '/assets/img/gallery-img/gallery-2.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                        ['image' => '/assets/img/gallery-img/gallery-1.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                        ['image' => '/assets/img/gallery-img/gallery-2.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                    ],
                ],
            ],

            // ========================================
            // HERO RIYA SECTION (Purple theme)
            // ========================================
            [
                'key' => 'hero_riya',
                'name_en' => 'Riya Hero Section',
                'name_ar' => 'هيرو منصة ريا',
                'icon' => 'far fa-shopping-cart',
                'preview_image' => '/assets/section-preview/riya-hero-section.png',
                'component_name' => 'HeroRiyaSection',
                'is_fixed' => false,
                'default_order' => 21,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/hero-shape-2.svg',
                    'icon' => '/assets/img/icon/hero-icon-6.svg',
                    'hero_image' => '/assets/img/hero-img-6.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'منصة ريا',
                    'title_en' => 'Riya Platform',
                    'title_color' => '#9B4DE0',
                    'description_ar' => 'نقدم استراتيجيات تسويقية رقمية متكاملة لتعزيز حضور العلامة التجارية على الإنترنت وزيادة التفاعل مع الجمهور. تشمل خدماتنا إدارة الحملات الإعلانية، التسويق عبر وسائل التواصل الاجتماعي، وتحليل الأداء لضمان نمو مستدام وفعالية التسويق.',
                    'description_en' => 'We provide comprehensive digital marketing strategies to enhance brand presence online and increase audience engagement. Our services include advertising campaign management, social media marketing, and performance analysis to ensure sustainable growth.',
                    'button_text_ar' => 'ابدأ مشروعك معنا',
                    'button_text_en' => 'Start Your Project',
                    'button_url' => '#',
                    'secondary_button_text_ar' => 'زيارة المنصة',
                    'secondary_button_text_en' => 'Visit Platform',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // HERO JIYAD SECTION (Blue/Grey theme)
            // ========================================
            [
                'key' => 'hero_jiyad',
                'name_en' => 'Jiyad Hero Section',
                'name_ar' => 'هيرو منصة جياد',
                'icon' => 'far fa-horse',
                'preview_image' => '/assets/section-preview/jeyad-hero-section.png',
                'component_name' => 'HeroJiyadSection',
                'is_fixed' => false,
                'default_order' => 22,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/hero-shape-3.svg',
                    'icon' => '/assets/img/icon/hero-icon-7.svg',
                    'hero_image' => '/assets/img/hero-img-7.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'منصة جياد',
                    'title_en' => 'Jiyad Platform',
                    'title_color' => '#314660',
                    'description_ar' => 'جياد هي منصة رقمية متكاملة لعالم الخيل، تجمع بين المعرفة والسوق والمجتمع، وتقدّم حلولًا مبتكرة لملاك الخيول والمستثمرين والمشترين، عبر خدمات تشمل إدارة المزادات، تحكيم البطولات، أرشفة الأنساب، والمتجر المتكامل.',
                    'description_en' => 'Jiyad is a comprehensive digital platform for the equine world, combining knowledge, market, and community. It offers innovative solutions for horse owners, investors, and buyers through services including auction management, championship judging, pedigree archiving, and an integrated store.',
                    'button_text_ar' => 'ابدأ مشروعك معنا',
                    'button_text_en' => 'Start Your Project',
                    'button_url' => '#',
                    'secondary_button_text_ar' => 'زيارة المنصة',
                    'secondary_button_text_en' => 'Visit Platform',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // HERO SHOPS Z SECTION (Green theme)
            // ========================================
            [
                'key' => 'hero_shopsz',
                'name_en' => 'Shops Z Hero Section',
                'name_ar' => 'هيرو منصة Shops Z',
                'icon' => 'far fa-store',
                'preview_image' => '/assets/section-preview/Shops-Z-hero.png',
                'component_name' => 'HeroShopsZSection',
                'is_fixed' => false,
                'default_order' => 23,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/hero-shape-4.svg',
                    'icon' => '/assets/img/icon/hero-icon-8.svg',
                    'hero_image' => '/assets/img/hero-img-8.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'منصة Shops Z',
                    'title_en' => 'Shops Z Platform',
                    'title_color' => '#00A651',
                    'description_ar' => 'منصة إلكترونية متكاملة تتيح إنشاء وتشغيل المتاجر الإلكترونية بسهولة، وتمكن البائعين من إدارة منتجاتهم، المبيعات، والشحن بشكل احترافي.',
                    'description_en' => 'A comprehensive e-commerce platform that enables easy creation and operation of online stores, allowing sellers to manage their products, sales, and shipping professionally.',
                    'button_text_ar' => 'ابدأ مشروعك معنا',
                    'button_text_en' => 'Start Your Project',
                    'button_url' => '#',
                    'secondary_button_text_ar' => 'زيارة المنصة',
                    'secondary_button_text_en' => 'Visit Platform',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // HERO BEYOND ERP SECTION
            // ========================================
            [
                'key' => 'hero_beyond_erp',
                'name_en' => 'Beyond ERP Hero Section',
                'name_ar' => 'هيرو Beyond ERP',
                'icon' => 'far fa-sitemap',
                'preview_image' => '/assets/section-preview/Beyond-ERP-hero.png',
                'component_name' => 'HeroBeyondERPSection',
                'is_fixed' => false,
                'default_order' => 24,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/hero-shape-4.svg',
                    'icon' => '/assets/img/icon/hero-icon-9.svg',
                    'hero_image' => '/assets/img/hero-img-9.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'Beyond ERP',
                    'title_en' => 'Beyond ERP',
                    'description_ar' => 'حل إداري متكامل يربط جميع أقسام الشركة في نظام واحد ذكي، يساعد على تحسين الكفاءة التشغيلية، تتبع الأداء، وتنظيم الموارد البشرية والمالية والإدارية بدقة عالية. تم تصميم النظام ليتوافق مع احتياجات الشركات الصغيرة والمتوسطة والكبيرة، مع قابلية تخصيص كاملة تناسب طبيعة كل نشاط تجاري.',
                    'description_en' => 'A comprehensive management solution that connects all company departments in one smart system, helping improve operational efficiency, track performance, and organize human, financial, and administrative resources with high precision. The system is designed to meet the needs of small, medium, and large companies, with full customization capabilities.',
                    'button_text_ar' => 'ابدأ مشروعك معنا',
                    'button_text_en' => 'Start Your Project',
                    'button_url' => '#',
                    'secondary_button_text_ar' => 'زيارة المنصة',
                    'secondary_button_text_en' => 'Visit Platform',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // HERO BEYOND PAY SECTION
            // ========================================
            [
                'key' => 'hero_beyond_pay',
                'name_en' => 'Beyond Pay Hero Section',
                'name_ar' => 'هيرو Beyond Pay',
                'icon' => 'far fa-credit-card',
                'preview_image' => '/assets/section-preview/Beyond-Pay-hero.png',
                'component_name' => 'HeroBeyondPaySection',
                'is_fixed' => false,
                'default_order' => 25,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/hero-shape-4.svg',
                    'icon' => '/assets/img/icon/hero-icon-10.svg',
                    'hero_image' => '/assets/img/hero-img-11.png',
                    'hero_bg_image' => '/assets/img/hero-icon-bg.png',
                    'title_ar' => 'Beyond Pay',
                    'title_en' => 'Beyond Pay',
                    'description_ar' => 'نظام دفع إلكتروني متكامل وآمن، يوفّر للشركات حلولًا رقمية ذكية لمعالجة المدفوعات وإدارة المعاملات المالية بسهولة وموثوقية. يدعم النظام طرق دفع متعددة محلية وعالمية، مع تقنيات تشفير عالية لضمان حماية البيانات وتجنّب أي عمليات احتيال.',
                    'description_en' => 'A comprehensive and secure electronic payment system that provides companies with smart digital solutions for processing payments and managing financial transactions easily and reliably. The system supports multiple local and international payment methods, with high encryption technologies to ensure data protection and avoid any fraud.',
                    'button_text_ar' => 'ابدأ مشروعك معنا',
                    'button_text_en' => 'Start Your Project',
                    'button_url' => '#',
                    'secondary_button_text_ar' => 'زيارة المنصة',
                    'secondary_button_text_en' => 'Visit Platform',
                    'secondary_button_url' => '#',
                ],
            ],

            // ========================================
            // ABOUT SECTION
            // ========================================
            [
                'key' => 'about',
                'name_en' => 'About',
                'name_ar' => 'من نحن',
                'icon' => 'far fa-building',
                'preview_image' => null,
                'component_name' => 'AboutSection',
                'is_fixed' => false,
                'default_order' => 17,
                'is_active' => true,
                'default_content' => [
                    'shape_image' => '/assets/img/hero-shape-5.svg',
                    'left_shape_image' => '/assets/img/ab-left.png',
                    'right_shape_image' => '/assets/img/ab-right-img.png',
                    'blocks' => [
                        [
                            'icon' => '/assets/img/icon/about-icon-1.svg',
                            'title_ar' => 'رسالة المدير التنفيذي',
                            'title_en' => 'CEO Message',
                            'content_ar' => '<p>في بيوند، نؤمن أن التقنية ليست مجرد أدوات، بل هي شريك في بناء المستقبل. رؤيتنا تتمحور حول تمكين الشركات من تحقيق التحول الرقمي الكامل، من خلال حلول ذكية، منهجيات مبتكرة، وفريق يمتلك الشغف والإصرار على النجاح.</p><p>نسعى لأن تكون بيوند الخيار الأول لكل من يؤمن بأن التقنية هي الطريق نحو التميز والاستدامة.</p>',
                            'content_en' => '<p>At Beyond, we believe that technology is not just tools, but a partner in building the future. Our vision revolves around enabling companies to achieve complete digital transformation through smart solutions, innovative methodologies, and a team that has passion and determination for success.</p><p>We strive for Beyond to be the first choice for everyone who believes that technology is the path to excellence and sustainability.</p>',
                            'author' => '— المدير التنفيذي، بيوند تكنولوجي',
                            'image' => '/assets/img/about-img/about-img.png',
                            'image_bg' => '/assets/img/ab-img-bg.png',
                            'layout' => 'image-right',
                        ],
                        [
                            'icon' => '/assets/img/icon/about-icon-2.svg',
                            'title_ar' => 'بيوند تكنولوجي',
                            'title_en' => 'Beyond Technology',
                            'content_ar' => '<p>بيوند هي شركة الابتكار التي تُعيد صياغة مفهوم التحول الرقمي بما يتوافق مع رؤية المملكة 2030. نؤمن بأن الابتكار هو قلب النجاح، ونسعى لتمكين الأعمال عبر تقنيات متقدمة واستراتيجيات مبتكرة.</p><p>نحوّل الأفكار إلى حلول رقمية ذكية، مع فريق متعدد الخبرات يضمن لكل عميل تجربة فريدة ونتائج استثنائية.</p><p>مع أكثر من 50 موظفًا، وفروع في 4 دول، وخدمات نفذت في أكثر من 30 دولة، تظل بيوند شريكك الموثوق في رحلة التحول الرقمي والنمو المستدام.</p>',
                            'content_en' => '<p>Beyond is the innovation company that redefines the concept of digital transformation in line with Saudi Vision 2030. We believe that innovation is the heart of success, and we strive to empower businesses through advanced technologies and innovative strategies.</p><p>We transform ideas into smart digital solutions, with a multi-skilled team that guarantees each customer a unique experience and exceptional results.</p><p>With more than 50 employees, branches in 4 countries, and services executed in more than 30 countries, Beyond remains your trusted partner in the digital transformation journey and sustainable growth.</p>',
                            'image' => '/assets/img/about-img/about-img-2.jpg',
                            'layout' => 'image-left',
                        ],
                        [
                            'icon' => '/assets/img/icon/about-icon-3.svg',
                            'title_ar' => 'رؤيتنا',
                            'title_en' => 'Our Vision',
                            'content_ar' => '<p>أن نصبح الشريك التقني الأول في المملكة والمنطقة، من خلال تقديم حلول رقمية ذكية، مبتكرة ومستدامة، تدعم نمو الأعمال وتحولها إلى بيئات رقمية متطورة.</p>',
                            'content_en' => '<p>To become the leading technology partner in the Kingdom and the region, by providing smart, innovative and sustainable digital solutions that support business growth and transform them into advanced digital environments.</p>',
                            'image' => '/assets/img/about-img/about-img-3.png',
                            'layout' => 'image-left',
                        ],
                    ],
                ],
            ],

            // ========================================
            // PRODUCT/ADDED VALUE SECTION
            // ========================================
            [
                'key' => 'product',
                'name_en' => 'Product / Added Value',
                'name_ar' => 'المنتج / القيمة المضافة',
                'icon' => 'far fa-box',
                'preview_image' => '/assets/section-preview/product-section.png',
                'component_name' => 'ProductSection',
                'is_fixed' => false,
                'default_order' => 15,
                'is_active' => true,
                'default_content' => [
                    'left_shape' => '/assets/img/pd-left.svg',
                    'top_right_shape' => '/assets/img/pd-top-right.svg',
                    'icon' => '/assets/img/icon/product-icon.svg',
                    'image' => '/assets/img/product-img.png',
                    'title_ar' => 'القيمة المضافة',
                    'title_en' => 'Added Value',
                    'description_ar' => 'تساعد هذه الخدمة المشروع على تحقيق نمو مستدام من خلال تنظيم العمليات التجارية، بناء شراكات قوية مع المصانع، وتحقيق أعلى عائد من كل استثمار تجاري.',
                    'description_en' => 'This service helps the project achieve sustainable growth by organizing business operations, building strong partnerships with factories, and achieving the highest return from every business investment.',
                ],
            ],

            // ========================================
            // FOOTER SECTION (Fixed)
            // ========================================
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
                    'logo' => '/assets/img/logo.png',
                    'shape_image' => '/assets/img/cta-shape.png',
                    'tagline_ar' => 'جزء من رؤية المملكة 2030',
                    'tagline_en' => 'Part of Saudi Vision 2030',
                    'copyright_text' => 'All Rights Reserved Beyond 2024 ©',
                    'menu_columns' => [
                        [
                            'title_ar' => 'روابط تهمك',
                            'title_en' => 'Important Links',
                            'links' => [
                                ['label_ar' => 'الرئيسية', 'label_en' => 'Home', 'url_en' => '/', 'url_ar' => '/ar'],
                                ['label_ar' => 'من نحن', 'label_en' => 'About', 'url_en' => '/about', 'url_ar' => '/ar/about'],
                                ['label_ar' => 'خدماتنا', 'label_en' => 'Services', 'url_en' => '/services', 'url_ar' => '/ar/services'],
                                ['label_ar' => 'المعرض', 'label_en' => 'Gallery', 'url_en' => '/gallery', 'url_ar' => '/ar/gallery'],
                                ['label_ar' => 'أعمالنا', 'label_en' => 'Our Work', 'url_en' => '/work', 'url_ar' => '/ar/work'],
                                ['label_ar' => 'اتصل بنا', 'label_en' => 'Contact Us', 'url_en' => '#contact', 'url_ar' => '#contact'],
                            ],
                        ],
                        [
                            'title_ar' => 'الخدمات',
                            'title_en' => 'Services',
                            'links' => [
                                ['label_ar' => 'Be ERP', 'label_en' => 'Be ERP', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'ShopsZe', 'label_en' => 'ShopsZe', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'التسويق الرقمي', 'label_en' => 'Digital Marketing', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'حلول الدفع', 'label_en' => 'Payment Solutions', 'url_en' => '#', 'url_ar' => '#'],
                                ['label_ar' => 'خدمات المبيعات والتوزيع المباشر', 'label_en' => 'Sales & Distribution Services', 'url_en' => '#', 'url_ar' => '#'],
                            ],
                        ],
                    ],
                    'contact_info' => [
                        'title_ar' => 'اتصل بنا',
                        'title_en' => 'Contact Us',
                        'items' => [
                            ['icon' => '/assets/img/telephone-icon.svg', 'text' => '8001111144', 'url' => 'tel:8001111144'],
                            ['icon' => '/assets/img/whatsapp-icon.svg', 'text' => '920031831', 'url' => 'https://wa.me/920031831'],
                            ['icon' => '/assets/img/mail-icon.svg', 'text' => 'info@beyond.com.sa', 'url' => 'mailto:info@beyond.com.sa'],
                            ['icon' => '/assets/img/location-icon.svg', 'text' => 'Riyadh, Saudi Arabia', 'url' => '#'],
                        ],
                    ],
                    'social' => [
                        'title_ar' => 'تابعنا',
                        'title_en' => 'Follow Us',
                        'links' => [
                            ['icon' => '/assets/img/social-icon-1.svg', 'url' => '#'],
                            ['icon' => '/assets/img/social-icon-2.svg', 'url' => '#'],
                            ['icon' => '/assets/img/social-icon-3.svg', 'url' => '#'],
                            ['icon' => '/assets/img/social-icon-4.svg', 'url' => '#'],
                        ],
                    ],
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
