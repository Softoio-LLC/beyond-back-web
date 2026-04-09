<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Database\Seeder;

class GalleryPageSeeder extends Seeder
{
    /**
     * Seed the Gallery page (index-14.html).
     */
    public function run(): void
    {
        // Create the page
        $page = Page::updateOrCreate(
            ['url_slug_en' => 'gallery'],
            [
                'name_en' => 'Gallery',
                'url_slug_en' => 'gallery',
                'meta_title_en' => 'Gallery - Our Work & Projects | Beyond',
                'h1_title_en' => 'Gallery',
                'og_title_en' => 'Gallery - Beyond',
                'hreflang_en' => 'en-US',
                'meta_description_en' => 'A visual journey of our most important achievements in technology, design, and integrated management.',
                'og_description_en' => 'A visual journey of our most important achievements in technology, design, and integrated management.',
                'og_image_en' => null,

                'name_ar' => 'المعرض',
                'url_slug_ar' => 'المعرض',
                'meta_title_ar' => 'المعرض - أعمالنا ومشاريعنا | بيوند',
                'h1_title_ar' => 'المعرض',
                'og_title_ar' => 'المعرض - بيوند',
                'hreflang_ar' => 'ar-SA',
                'meta_description_ar' => 'رحلة بصرية لأهم إنجازاتنا في عالم التقنية والتصميم والإدارة المتكاملة.',
                'og_description_ar' => 'رحلة بصرية لأهم إنجازاتنا في عالم التقنية والتصميم والإدارة المتكاملة.',
                'og_image_ar' => null,
                'is_homepage' => false,
                'is_published' => true,
            ]);

        // Get section types
        $headerSection = SectionType::where('key', 'header')->first();
        $pageGallerySection = SectionType::where('key', 'gallery_page')->first();
        $footerSection = SectionType::where('key', 'footer')->first();

        $order = 0;

        // 1. Header Section (with v2 style - logo-black.svg)
        if ($headerSection) {
            $headerContent = $headerSection->default_content;
            $headerContent['logo'] = '/assets/img/logo-black.svg';
            $headerContent['variant'] = 'light'; // Use light header for gallery page

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

        // 2. Gallery Page Section (with breadcrumb and gallery items)
        if ($pageGallerySection) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'section_type_id' => $pageGallerySection->id],
                [
                    'page_id' => $page->id,
                    'section_type_id' => $pageGallerySection->id,
                    'order' => $order++,
                    'is_active' => true,
                    'content' => [
                        'breadcrumb' => [
                            ['text_ar' => 'الرئيسية', 'text_en' => 'Home', 'url' => '/'],
                            ['text_ar' => 'المعرض', 'text_en' => 'Gallery', 'url' => '#'],
                        ],
                        'title_ar' => 'المعرض',
                        'title_en' => 'Gallery',
                        'subtitle_ar' => 'رحلة بصرية لأهم إنجازاتنا في عالم التقنية والتصميم والإدارة المتكاملة.',
                        'subtitle_en' => 'A visual journey of our most important achievements in technology, design, and integrated management.',
                        'items' => [
                            ['image' => '/assets/img/gallery-img/gallery-1.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-2.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-1.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-2.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-1.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-2.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-1.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                            ['image' => '/assets/img/gallery-img/gallery-2.png', 'label_ar' => 'seamlessksa', 'label_en' => 'seamlessksa', 'url' => '#'],
                        ],
                    ],
                ]);
        }

        // 3. Footer Section
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

        $this->command->info('✓ Gallery page created successfully');
    }
}
