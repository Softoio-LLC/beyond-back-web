<?php

namespace App\Console\Commands;

use App\Models\PageSection;
use Illuminate\Console\Command;

class FixNestedSectionContent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sections:fix-nested-content';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix sections with nested content structure (unwrap double content wrapper)';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Checking sections for nested content...');

        $sections = PageSection::all();
        $fixed = 0;

        foreach ($sections as $section) {
            $content = $section->content;
            $originalContent = $content;
            $changed = false;

            // Recursively unwrap nested content
            while (is_array($content) && isset($content['content']) && is_array($content['content'])) {
                $content = $content['content'];
                $changed = true;
            }

            if ($changed) {
                $section->content = $content;
                $section->save();
                $fixed++;
                $sectionKey = $section->sectionType ? $section->sectionType->key : 'unknown';
                $this->line("Fixed section ID: {$section->id} ({$sectionKey})");
            }
        }

        if ($fixed > 0) {
            $this->info("Fixed {$fixed} sections with nested content.");
        } else {
            $this->info('No sections needed fixing.');
        }

        return Command::SUCCESS;
    }
}
