<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePageSectionRequest;
use App\Http\Requests\UpdatePageSectionRequest;
use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class PageSectionController extends Controller
{
    /**
     * Display the page builder/section customizer.
     */
    public function builder(Page $page): Response
    {
        $page->load(['sections.sectionType']);
        
        $sectionTypes = SectionType::active()->ordered()->get();
        
        return Inertia::render('PageBuilder/Index', [
            'page' => $page,
            'sections' => $page->sections,
            'sectionTypes' => $sectionTypes,
        ]);
    }

    /**
     * Store a new section for a page.
     */
    public function store(StorePageSectionRequest $request, Page $page)
    {
        $validated = $request->validated();
        
        $sectionType = SectionType::findOrFail($validated['section_type_id']);
        
        // Get the max order and add 1
        $maxOrder = $page->sections()->max('order') ?? -1;
        
        $section = $page->sections()->create([
            'section_type_id' => $validated['section_type_id'],
            'order' => $maxOrder + 1,
            'is_active' => $validated['is_active'] ?? true,
            'content' => $validated['content'] ?? $sectionType->default_content,
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

        $validated = $request->validated();
        
        $section->update([
            'is_active' => $validated['is_active'] ?? $section->is_active,
            'content' => $validated['content'] ?? $section->content,
            'custom_css' => $validated['custom_css'] ?? $section->custom_css,
        ]);

        return back()->with('success', 'Section updated successfully.');
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

        return back()->with('success', 'Section deleted successfully.');
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
            $content['title_en'] = $content['title_en'] . ' (Copy)';
        }
        if (isset($content['title_ar'])) {
            $content['title_ar'] = $content['title_ar'] . ' (نسخة)';
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

        $section->update(['is_active' => !$section->is_active]);

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
     */
    private function reorderAfterDelete(Page $page): void
    {
        $sections = $page->sections()->ordered()->get();
        
        foreach ($sections as $index => $section) {
            if ($section->order !== $index) {
                $section->update(['order' => $index]);
            }
        }
    }
}
