<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePageSectionRequest;
use App\Http\Requests\UpdatePageSectionRequest;
use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use App\Services\GlobalSectionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class PageSectionController extends Controller
{
    public function __construct(protected GlobalSectionService $globalSectionService) {}

    /**
     * Display the page builder/section customizer.
     */
    public function builder(Page $page): Response
    {
        $page->load(['sections.sectionType']);

        $sectionTypes = SectionType::active()->ordered()->get();

        // Merge global content into header/footer sections for display
        $sections = $page->sections->map(function ($section) {
            if ($section->sectionType->key === 'header') {
                $section->content = $this->globalSectionService->mergeHeaderContent($section->content ?? []);
            } elseif ($section->sectionType->key === 'footer') {
                $section->content = $this->globalSectionService->mergeFooterContent($section->content ?? []);
            }

            return $section;
        });

        return Inertia::render('PageBuilder/Index', [
            'page' => $page,
            'sections' => $sections,
            'sectionTypes' => $sectionTypes,
            'globalHeader' => $this->globalSectionService->getGlobalHeader(),
            'globalFooter' => $this->globalSectionService->getGlobalFooter(),
        ]);
    }

    /**
     * Store a new section for a page.
     */
    public function store(StorePageSectionRequest $request, Page $page)
    {
        $validated = $request->validated();

        $sectionType = SectionType::findOrFail($validated['section_type_id']);

        // Calculate the order for the new section
        // Fixed sections (header/footer) have special ordering:
        // - Header is always at order 0
        // - Footer is always at order 999
        // - All other sections should be between 1 and 998
        if ($sectionType->key === 'header') {
            $order = 0;
        } elseif ($sectionType->key === 'footer') {
            $order = 999;
        } else {
            // For regular sections, find the max order excluding footer (999)
            $maxOrder = $page->sections()
                ->where('order', '<', 999)
                ->max('order') ?? 0;
            $order = $maxOrder + 1;

            // Safety check: don't exceed 998
            if ($order >= 999) {
                $order = 998;
            }
        }

        // For header/footer, use global content merged with defaults
        $content = $validated['content'] ?? $sectionType->default_content;
        if ($sectionType->key === 'header') {
            $content = $this->globalSectionService->mergeHeaderContent($content);
        } elseif ($sectionType->key === 'footer') {
            $content = $this->globalSectionService->mergeFooterContent($content);
        }

        $section = $page->sections()->create([
            'section_type_id' => $validated['section_type_id'],
            'order' => $order,
            'is_active' => $validated['is_active'] ?? true,
            'content' => $content,
            'custom_css' => $validated['custom_css'] ?? null,
        ]);

        return back()->with('success', 'Section added successfully.');
    }

    /**
     * Update the specified section.
     */
    public function update(UpdatePageSectionRequest $request, Page $page, PageSection $section)
    {
        // Ensure section belongs to page
        if ($section->page_id !== $page->id) {
            abort(403, 'Section does not belong to this page.');
        }

        // Load section type for checking
        $section->load('sectionType');
        $sectionTypeKey = $section->sectionType->key;

        // Debug logging
        Log::info('Section Update Request', [
            'page_id' => $page->id,
            'section_id' => $section->id,
            'section_type' => $sectionTypeKey,
            'all_input' => $request->all(),
            'validated' => $request->validated(),
        ]);

        $validated = $request->validated();

        // If content is provided, update it
        if (isset($validated['content']) && ! empty($validated['content'])) {
            $content = $validated['content'];

            // Unwrap nested content if it exists (fix for corrupted data)
            // If content has a single 'content' key that contains the actual data, unwrap it
            if (is_array($content) && count($content) === 1 && isset($content['content']) && is_array($content['content'])) {
                $content = $content['content'];
            }

            // Also handle deeply nested content (recursive unwrap)
            while (is_array($content) && isset($content['content']) && is_array($content['content'])
                   && count(array_diff(array_keys($content), ['content'])) === 0) {
                $content = $content['content'];
            }

            // Handle global sections (header/footer)
            if ($sectionTypeKey === 'header') {
                // Extract and save global fields
                $globalFields = $this->globalSectionService->extractGlobalHeaderFields($content);
                if (! empty($globalFields)) {
                    $this->globalSectionService->updateGlobalHeader($globalFields);
                }

                // Only save page-specific fields to the section
                $pageFields = $this->globalSectionService->extractPageHeaderFields($content);
                $section->content = $pageFields;
            } elseif ($sectionTypeKey === 'footer') {
                // Footer is fully global - save all to global settings
                $this->globalSectionService->updateGlobalFooter($content);

                // Section content can be empty or minimal for footer
                $section->content = [];
            } else {
                // Regular sections - validate and save normally
                // Validate contact_info items - must always have exactly 4 items
                if (isset($content['contact_info']) && isset($content['contact_info']['items'])) {
                    $items = $content['contact_info']['items'];

                    // Ensure exactly 4 items (no more, no less)
                    if (count($items) > 4) {
                        $content['contact_info']['items'] = array_slice($items, 0, 4);
                    } elseif (count($items) < 4) {
                        // Fill missing items with defaults
                        $defaultItems = [
                            ['icon' => '/assets/img/telephone-icon.svg', 'text' => '', 'url' => '#'],
                            ['icon' => '/assets/img/whatsapp-icon.svg', 'text' => '', 'url' => '#'],
                            ['icon' => '/assets/img/mail-icon.svg', 'text' => '', 'url' => '#'],
                            ['icon' => '/assets/img/location-icon.svg', 'text' => '', 'url' => '#'],
                        ];
                        while (count($content['contact_info']['items']) < 4) {
                            $idx = count($content['contact_info']['items']);
                            $content['contact_info']['items'][] = $defaultItems[$idx] ?? $defaultItems[0];
                        }
                    }
                }

                $section->content = $content;
            }
        }

        // If is_active is provided, update it
        if (isset($validated['is_active'])) {
            $section->is_active = $validated['is_active'];
        }

        // If custom_css is provided, update it
        if (isset($validated['custom_css'])) {
            $section->custom_css = $validated['custom_css'];
        }

        // Save the section
        $saved = $section->save();

        Log::info('Section Save Result', [
            'saved' => $saved,
            'section_type' => $sectionTypeKey,
            'section_content' => $section->content,
        ]);

        // Success message based on section type
        $message = $this->globalSectionService->isGlobalSection($sectionTypeKey)
            ? 'Section updated successfully. Changes apply to all pages.'
            : 'Section updated successfully.';

        // Redirect to page builder index (not section URL)
        return redirect()->route('pages.builder.index', $page)->with('success', $message);
    }

    /**
     * Remove the specified section.
     */
    public function destroy(Page $page, PageSection $section)
    {
        // Ensure section belongs to page
        if ($section->page_id !== $page->id) {
            abort(403, 'Section does not belong to this page.');
        }

        // Check if it's a fixed section (header/footer)
        if ($section->sectionType->is_fixed) {
            return back()->with('error', 'Cannot delete fixed sections (Header/Footer).');
        }

        $section->delete();

        // Reorder remaining sections
        $this->reorderAfterDelete($page);

        // Redirect to page builder (not back to the deleted section URL)
        return redirect()->route('pages.builder.index', $page)->with('success', 'Section deleted successfully.');
    }

    /**
     * Duplicate a section.
     */
    public function duplicate(Page $page, PageSection $section)
    {
        // Ensure section belongs to page
        if ($section->page_id !== $page->id) {
            abort(403, 'Section does not belong to this page.');
        }

        // Check if it's a fixed section (header/footer)
        if ($section->sectionType->is_fixed) {
            return back()->with('error', 'Cannot duplicate fixed sections (Header/Footer).');
        }

        // Get all sections after current one and increment their order
        $page->sections()
            ->where('order', '>', $section->order)
            ->increment('order');

        // Create duplicate section right after the original
        $newSection = $section->replicate();
        $newSection->order = $section->order + 1;

        // Append "(Copy)" to titles if they exist
        $content = $newSection->content;
        if (isset($content['title_en'])) {
            $content['title_en'] = $content['title_en'].' (Copy)';
        }
        if (isset($content['title_ar'])) {
            $content['title_ar'] = $content['title_ar'].' (نسخة)';
        }
        $newSection->content = $content;
        $newSection->save();

        return back()->with('success', 'Section duplicated successfully.');
    }

    /**
     * Toggle section visibility.
     */
    public function toggle(Page $page, PageSection $section)
    {
        // Ensure section belongs to page
        if ($section->page_id !== $page->id) {
            abort(403, 'Section does not belong to this page.');
        }

        $section->update(['is_active' => ! $section->is_active]);

        $status = $section->is_active ? 'visible' : 'hidden';

        return back()->with('success', "Section is now {$status}.");
    }

    /**
     * Reorder sections.
     */
    public function reorder(Request $request, Page $page)
    {
        $request->validate([
            'sections' => 'required|array',
            'sections.*.id' => 'required|integer|exists:page_sections,id',
            'sections.*.order' => 'required|integer|min:0',
        ]);

        DB::transaction(function () use ($request, $page) {
            foreach ($request->sections as $item) {
                $page->sections()
                    ->where('id', $item['id'])
                    ->update(['order' => $item['order']]);
            }
        });

        return back()->with('success', 'Sections reordered successfully.');
    }

    /**
     * Preview section with current content (without saving).
     */
    public function preview(Request $request, Page $page, PageSection $section)
    {
        // Ensure section belongs to page
        if ($section->page_id !== $page->id) {
            abort(403, 'Section does not belong to this page.');
        }

        $request->validate([
            'content' => 'required|array',
        ]);

        // Create a temporary section object with preview content
        // This doesn't save to the database
        $previewSection = clone $section;
        $previewSection->content = $request->content;

        return Inertia::render('PageBuilder/Preview', [
            'section' => $previewSection->load('sectionType'),
            'page' => $page,
        ]);
    }

    /**
     * Reorder sections after deletion.
     * Keeps header at 0 and footer at 999, renumbers other sections sequentially.
     */
    private function reorderAfterDelete(Page $page): void
    {
        $sections = $page->sections()->with('sectionType')->ordered()->get();

        $order = 1; // Start at 1 (header is 0)
        foreach ($sections as $section) {
            // Header stays at 0
            if ($section->sectionType->key === 'header') {
                if ($section->order !== 0) {
                    $section->update(['order' => 0]);
                }
            }
            // Footer stays at 999
            elseif ($section->sectionType->key === 'footer') {
                if ($section->order !== 999) {
                    $section->update(['order' => 999]);
                }
            }
            // Regular sections get sequential order (1, 2, 3, ...)
            else {
                if ($section->order !== $order) {
                    $section->update(['order' => $order]);
                }
                $order++;
            }
        }
    }
}
