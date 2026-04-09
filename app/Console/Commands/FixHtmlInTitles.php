<?php

namespace App\Console\Commands;

use App\Models\PageSection;
use Illuminate\Console\Command;

class FixHtmlInTitles extends Command
{
    protected $signature = 'sections:fix-html-titles';

    protected $description = 'Strip HTML tags from title fields and paragraph arrays in section content';

    public function handle()
    {
        $this->info('Checking sections for HTML in title/paragraph fields...');

        $sections = PageSection::all();
        $fixed = 0;

        // Title fields that should NOT have HTML
        $titleFields = ['title_en', 'title_ar', 'subtitle_en', 'subtitle_ar'];

        foreach ($sections as $section) {
            $content = $section->content;
            $changed = false;

            if (! is_array($content)) {
                continue;
            }

            // Fix top-level title fields
            foreach ($titleFields as $field) {
                if (isset($content[$field]) && is_string($content[$field])) {
                    $stripped = strip_tags($content[$field]);
                    if ($stripped !== $content[$field]) {
                        $content[$field] = trim($stripped);
                        $changed = true;
                        $this->line("  - Fixed {$field}");
                    }
                }
            }

            // Fix paragraphs in concept blocks
            if (isset($content['blocks']) && is_array($content['blocks'])) {
                foreach ($content['blocks'] as $blockIdx => $block) {
                    // Fix paragraphs_en
                    if (isset($block['paragraphs_en']) && is_array($block['paragraphs_en'])) {
                        foreach ($block['paragraphs_en'] as $pIdx => $paragraph) {
                            if (is_string($paragraph)) {
                                $stripped = strip_tags($paragraph);
                                if ($stripped !== $paragraph) {
                                    $content['blocks'][$blockIdx]['paragraphs_en'][$pIdx] = trim($stripped);
                                    $changed = true;
                                    $this->line("  - Fixed blocks[{$blockIdx}].paragraphs_en[{$pIdx}]");
                                }
                            }
                        }
                    }
                    // Fix paragraphs_ar
                    if (isset($block['paragraphs_ar']) && is_array($block['paragraphs_ar'])) {
                        foreach ($block['paragraphs_ar'] as $pIdx => $paragraph) {
                            if (is_string($paragraph)) {
                                $stripped = strip_tags($paragraph);
                                if ($stripped !== $paragraph) {
                                    $content['blocks'][$blockIdx]['paragraphs_ar'][$pIdx] = trim($stripped);
                                    $changed = true;
                                    $this->line("  - Fixed blocks[{$blockIdx}].paragraphs_ar[{$pIdx}]");
                                }
                            }
                        }
                    }
                }
            }

            if ($changed) {
                $section->content = $content;
                $section->save();
                $fixed++;
                $sectionKey = $section->sectionType ? $section->sectionType->key : 'unknown';
                $this->info("Fixed section ID: {$section->id} ({$sectionKey})");
            }
        }

        if ($fixed > 0) {
            $this->info("Fixed {$fixed} sections.");
        } else {
            $this->info('No sections needed fixing.');
        }

        return Command::SUCCESS;
    }
}
