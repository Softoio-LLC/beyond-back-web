<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'name_en' => 'Home',
                'url_slug_en' => 'home',
                'meta_title_en' => 'Home - Your Website',
                'h1_title_en' => 'Welcome to Our Website',
                'og_title_en' => 'Home - Your Website',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Welcome to our website. Discover our services and products.',
                'og_description_en' => 'Welcome to our website. Discover our services and products.',
                'og_image_en' => null,
                'name_ar' => 'الرئيسية',
                'url_slug_ar' => 'الرئيسية',
                'meta_title_ar' => 'الرئيسية - موقعك',
                'h1_title_ar' => 'مرحباً بك في موقعنا',
                'og_title_ar' => 'الرئيسية - موقعك',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'مرحباً بك في موقعنا. اكتشف خدماتنا ومنتجاتنا.',
                'og_description_ar' => 'مرحباً بك في موقعنا. اكتشف خدماتنا ومنتجاتنا.',
                'og_image_ar' => null,
                'is_homepage' => true,  // Set as homepage
                'is_published' => true,
            ],
            [
                'name_en' => 'About Us',
                'url_slug_en' => 'about-us',
                'meta_title_en' => 'About Us - Learn More About Our Company',
                'h1_title_en' => 'About Our Company',
                'og_title_en' => 'About Us - Learn More',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Learn more about our company, our mission, and our team.',
                'og_description_en' => 'Learn more about our company, our mission, and our team.',
                'og_image_en' => null,
                'name_ar' => 'من نحن',
                'url_slug_ar' => 'من-نحن',
                'meta_title_ar' => 'من نحن - تعرف على شركتنا',
                'h1_title_ar' => 'عن شركتنا',
                'og_title_ar' => 'من نحن - تعرف أكثر',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'تعرف على المزيد عن شركتنا ورسالتنا وفريقنا.',
                'og_description_ar' => 'تعرف على المزيد عن شركتنا ورسالتنا وفريقنا.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Services',
                'url_slug_en' => 'services',
                'meta_title_en' => 'Our Services - What We Offer',
                'h1_title_en' => 'Our Professional Services',
                'og_title_en' => 'Services - What We Offer',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Explore our wide range of professional services designed to meet your needs.',
                'og_description_en' => 'Explore our wide range of professional services designed to meet your needs.',
                'og_image_en' => null,
                'name_ar' => 'خدماتنا',
                'url_slug_ar' => 'خدماتنا',
                'meta_title_ar' => 'خدماتنا - ما نقدمه',
                'h1_title_ar' => 'خدماتنا المهنية',
                'og_title_ar' => 'الخدمات - ما نقدمه',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'استكشف مجموعتنا الواسعة من الخدمات المهنية المصممة لتلبية احتياجاتك.',
                'og_description_ar' => 'استكشف مجموعتنا الواسعة من الخدمات المهنية المصممة لتلبية احتياجاتك.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Products',
                'url_slug_en' => 'products',
                'meta_title_en' => 'Our Products - Browse Our Collection',
                'h1_title_en' => 'Browse Our Products',
                'og_title_en' => 'Products - Browse Our Collection',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Browse our extensive collection of high-quality products.',
                'og_description_en' => 'Browse our extensive collection of high-quality products.',
                'og_image_en' => null,
                'name_ar' => 'منتجاتنا',
                'url_slug_ar' => 'منتجاتنا',
                'meta_title_ar' => 'منتجاتنا - تصفح مجموعتنا',
                'h1_title_ar' => 'تصفح منتجاتنا',
                'og_title_ar' => 'المنتجات - تصفح مجموعتنا',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'تصفح مجموعتنا الواسعة من المنتجات عالية الجودة.',
                'og_description_ar' => 'تصفح مجموعتنا الواسعة من المنتجات عالية الجودة.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Contact',
                'url_slug_en' => 'contact',
                'meta_title_en' => 'Contact Us - Get in Touch',
                'h1_title_en' => 'Contact Us',
                'og_title_en' => 'Contact Us - Get in Touch',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Get in touch with us. We would love to hear from you.',
                'og_description_en' => 'Get in touch with us. We would love to hear from you.',
                'og_image_en' => null,
                'name_ar' => 'اتصل بنا',
                'url_slug_ar' => 'اتصل-بنا',
                'meta_title_ar' => 'اتصل بنا - تواصل معنا',
                'h1_title_ar' => 'اتصل بنا',
                'og_title_ar' => 'اتصل بنا - تواصل معنا',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'تواصل معنا. نحن نحب أن نسمع منك.',
                'og_description_ar' => 'تواصل معنا. نحب أن نسمع منك.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Blog',
                'url_slug_en' => 'blog',
                'meta_title_en' => 'Blog - Latest News and Articles',
                'h1_title_en' => 'Our Blog',
                'og_title_en' => 'Blog - Latest News',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Read our latest news, articles, and insights.',
                'og_description_en' => 'Read our latest news, articles, and insights.',
                'og_image_en' => null,
                'name_ar' => 'المدونة',
                'url_slug_ar' => 'المدونة',
                'meta_title_ar' => 'المدونة - أحدث الأخبار والمقالات',
                'h1_title_ar' => 'مدونتنا',
                'og_title_ar' => 'المدونة - أحدث الأخبار',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'اقرأ آخر أخبارنا ومقالاتنا ورؤيتنا.',
                'og_description_ar' => 'اقرأ آخر أخبارنا ومقالاتنا ورؤيتنا.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'FAQ',
                'url_slug_en' => 'faq',
                'meta_title_en' => 'Frequently Asked Questions',
                'h1_title_en' => 'Frequently Asked Questions',
                'og_title_en' => 'FAQ - Common Questions',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Find answers to commonly asked questions about our services.',
                'og_description_en' => 'Find answers to commonly asked questions about our services.',
                'og_image_en' => null,
                'name_ar' => 'الأسئلة الشائعة',
                'url_slug_ar' => 'الأسئلة-الشائعة',
                'meta_title_ar' => 'الأسئلة المتكررة',
                'h1_title_ar' => 'الأسئلة المتكررة',
                'og_title_ar' => 'الأسئلة الشائعة - أسئلة شائعة',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا.',
                'og_description_ar' => 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Privacy Policy',
                'url_slug_en' => 'privacy-policy',
                'meta_title_en' => 'Privacy Policy - How We Protect Your Data',
                'h1_title_en' => 'Privacy Policy',
                'og_title_en' => 'Privacy Policy',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Learn about our privacy policy and how we protect your personal information.',
                'og_description_en' => 'Learn about our privacy policy and how we protect your personal information.',
                'og_image_en' => null,
                'name_ar' => 'سياسة الخصوصية',
                'url_slug_ar' => 'سياسة-الخصوصية',
                'meta_title_ar' => 'سياسة الخصوصية - كيف نحمي بياناتك',
                'h1_title_ar' => 'سياسة الخصوصية',
                'og_title_ar' => 'سياسة الخصوصية',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'تعرف على سياسة الخصوصية الخاصة بنا وكيف نحمي معلوماتك الشخصية.',
                'og_description_ar' => 'تعرف على سياسة الخصوصية الخاصة بنا وكيف نحمي معلوماتك الشخصية.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Terms & Conditions',
                'url_slug_en' => 'terms-conditions',
                'meta_title_en' => 'Terms & Conditions - Our Terms of Service',
                'h1_title_en' => 'Terms & Conditions',
                'og_title_en' => 'Terms & Conditions',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Read our terms and conditions before using our services.',
                'og_description_en' => 'Read our terms and conditions before using our services.',
                'og_image_en' => null,
                'name_ar' => 'الشروط والأحكام',
                'url_slug_ar' => 'الشروط-والأحكام',
                'meta_title_ar' => 'الشروط والأحكام - شروط الخدمة',
                'h1_title_ar' => 'الشروط والأحكام',
                'og_title_ar' => 'الشروط والأحكام',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'اقرأ شروطنا وأحكامنا قبل استخدام خدماتنا.',
                'og_description_ar' => 'اقرأ شروطنا وأحكامنا قبل استخدام خدماتنا.',
                'og_image_ar' => null,
            ],
            [
                'name_en' => 'Careers',
                'url_slug_en' => 'careers',
                'meta_title_en' => 'Careers - Join Our Team',
                'h1_title_en' => 'Join Our Team',
                'og_title_en' => 'Careers - Join Our Team',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'Explore career opportunities and join our growing team.',
                'og_description_en' => 'Explore career opportunities and join our growing team.',
                'og_image_en' => null,
                'name_ar' => 'الوظائف',
                'url_slug_ar' => 'الوظائف',
                'meta_title_ar' => 'الوظائف - انضم إلى فريقنا',
                'h1_title_ar' => 'انضم إلى فريقنا',
                'og_title_ar' => 'الوظائف - انضم إلى فريقنا',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'استكشف الفرص الوظيفية وانضم إلى فريقنا المتنامي.',
                'og_description_ar' => 'استكشف الفرص الوظيفية وانضم إلى فريقنا المتنامي.',
                'og_image_ar' => null,
            ],
        ];

        foreach ($pages as $pageData) {
            Page::create($pageData);
        }

        // Attach all sections to the homepage
        $this->attachSectionsToHomepage();
    }

    /**
     * Attach all section types to the homepage with their default content.
     */
    private function attachSectionsToHomepage(): void
    {
        $homepage = Page::where('url_slug_en', 'home')->first();
        
        if (!$homepage) {
            return;
        }

        $sectionTypes = \App\Models\SectionType::active()->ordered()->get();

        foreach ($sectionTypes as $sectionType) {
            \App\Models\PageSection::create([
                'page_id' => $homepage->id,
                'section_type_id' => $sectionType->id,
                'order' => $sectionType->default_order,
                'content' => $sectionType->default_content,
                'is_active' => true,
            ]);
        }
    }
}
