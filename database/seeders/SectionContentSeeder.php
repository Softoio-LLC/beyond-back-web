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
                            'url' => '#',
                            'children' => []
                        ],
                        [
                            'label_ar' => 'من نحن',
                            'label_en' => 'About',
                            'url' => '#',
                            'children' => []
                        ],
                        [
                            'label_ar' => 'خدماتنا',
                            'label_en' => 'Services',
                            'url' => '#',
                            'children' => [
                                ['label_ar' => 'منصة ريا', 'label_en' => 'Raya Platform', 'url' => '#'],
                                ['label_ar' => 'منصة جياد', 'label_en' => 'Jiyad Platform', 'url' => '#'],
                                ['label_ar' => 'منصة Shops Z', 'label_en' => 'Shops Z Platform', 'url' => '#'],
                                ['label_ar' => 'Beyond ERP', 'label_en' => 'Beyond ERP', 'url' => '#'],
                                ['label_ar' => 'Beyond Pay', 'label_en' => 'Beyond Pay', 'url' => '#'],
                            ]
                        ],
                        [
                            'label_ar' => 'المعرض',
                            'label_en' => 'Gallery',
                            'url' => '#',
                            'children' => []
                        ],
                        [
                            'label_ar' => 'أعمالنا',
                            'label_en' => 'Our Work',
                            'url' => '#',
                            'children' => [
                                ['label_ar' => 'الخدمات التجارية', 'label_en' => 'Commercial Services', 'url' => '#'],
                                ['label_ar' => 'حلول المبيعات والتوزيع المباشر', 'label_en' => 'Sales & Distribution Solutions', 'url' => '#'],
                                ['label_ar' => 'البرمجة وتطوير التطبيقات', 'label_en' => 'Programming & App Development', 'url' => '#'],
                                ['label_ar' => 'إدارة المشاريع وتنفيذها', 'label_en' => 'Project Management', 'url' => '#'],
                                ['label_ar' => 'التسويق الإلكتروني', 'label_en' => 'Digital Marketing', 'url' => '#'],
                            ]
                        ],
                    ],
                    'contact_button_text_ar' => 'تواصل معنا',
                    'contact_button_text_en' => 'Contact Us',
                    'contact_button_url' => '#contact',
                    'flag_ar' => '/assets/img/flag-1.png',
                    'flag_en' => '/assets/img/flag-2.png',
                    'check_icon' => '/assets/img/check-radio.svg',
                ],
            ],
            
            // ========================================
            // HERO SECTION
            // ========================================
            [
                'key' => 'hero',
                'name_en' => 'Slider',
                'name_ar' => 'السلايدر',
                'icon' => 'far fa-images',
                'preview_image' => null,
                'component_name' => 'HeroSection',
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
            // PARTNERS/BRANDS SECTION
            // ========================================
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
                'preview_image' => null,
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
                'preview_image' => null,
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
                'preview_image' => null,
                'component_name' => 'WorkSection',
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
                'preview_image' => null,
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
                'preview_image' => null,
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
                'preview_image' => null,
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
                'preview_image' => null,
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
                'preview_image' => null,
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
                                ['label_ar' => 'الرئيسية', 'label_en' => 'Home', 'url' => '#'],
                                ['label_ar' => 'من نحن', 'label_en' => 'About', 'url' => '#'],
                                ['label_ar' => 'خدماتنا', 'label_en' => 'Services', 'url' => '#'],
                                ['label_ar' => 'المعرض', 'label_en' => 'Gallery', 'url' => '#'],
                                ['label_ar' => 'أعمالنا', 'label_en' => 'Our Work', 'url' => '#'],
                                ['label_ar' => 'اتصل بنا', 'label_en' => 'Contact Us', 'url' => '#'],
                            ],
                        ],
                        [
                            'title_ar' => 'الخدمات',
                            'title_en' => 'Services',
                            'links' => [
                                ['label_ar' => 'Be ERP', 'label_en' => 'Be ERP', 'url' => '#'],
                                ['label_ar' => 'ShopsZe', 'label_en' => 'ShopsZe', 'url' => '#'],
                                ['label_ar' => 'التسويق الرقمي', 'label_en' => 'Digital Marketing', 'url' => '#'],
                                ['label_ar' => 'حلول الدفع', 'label_en' => 'Payment Solutions', 'url' => '#'],
                                ['label_ar' => 'خدمات المبيعات والتوزيع المباشر', 'label_en' => 'Sales & Distribution Services', 'url' => '#'],
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
