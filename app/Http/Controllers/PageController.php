<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of pages.
     */
    public function index()
    {
        $pages = Page::orderBy('updated_at', 'desc')->get()->map(function ($page) {
            return [
                'id' => $page->id,
                'name' => $page->name_en ?: $page->name_ar,
                'lastEditDate' => $page->updated_at->format('d.m.Y'),
                'hasArabic' => !empty($page->name_ar),
                'hasEnglish' => !empty($page->name_en),
            ];
        });

        return Inertia::render('Pages/Index', [
            'pages' => $pages,
        ]);
    }

    /**
     * Show the form for creating a new page.
     */
    public function create()
    {
        return Inertia::render('Pages/Create');
    }

    /**
     * Store a newly created page in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            // English fields
            'name_en' => 'nullable|string|max:255',
            'url_slug_en' => 'nullable|string|max:255',
            'meta_title_en' => 'nullable|string|max:255',
            'h1_title_en' => 'nullable|string|max:255',
            'og_title_en' => 'nullable|string|max:255',
            'hreflang_en' => 'nullable|string|max:255',
            'meta_description_en' => 'nullable|string',
            'og_description_en' => 'nullable|string',
            'og_image_en' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            // Arabic fields
            'name_ar' => 'nullable|string|max:255',
            'url_slug_ar' => 'nullable|string|max:255',
            'meta_title_ar' => 'nullable|string|max:255',
            'h1_title_ar' => 'nullable|string|max:255',
            'og_title_ar' => 'nullable|string|max:255',
            'hreflang_ar' => 'nullable|string|max:255',
            'meta_description_ar' => 'nullable|string',
            'og_description_ar' => 'nullable|string',
            'og_image_ar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        // Handle file uploads
        if ($request->hasFile('og_image_en')) {
            $validated['og_image_en'] = $request->file('og_image_en')->store('pages/og-images', 'public');
        }

        if ($request->hasFile('og_image_ar')) {
            $validated['og_image_ar'] = $request->file('og_image_ar')->store('pages/og-images', 'public');
        }

        Page::create($validated);

        return redirect()->route('pages.index')->with('success', 'Page created successfully.');
    }

    /**
     * Show the form for editing the specified page.
     */
    public function edit(Page $page)
    {
        return Inertia::render('Pages/Edit', [
            'page' => [
                'id' => $page->id,
                // English fields
                'name_en' => $page->name_en,
                'url_slug_en' => $page->url_slug_en,
                'meta_title_en' => $page->meta_title_en,
                'h1_title_en' => $page->h1_title_en,
                'og_title_en' => $page->og_title_en,
                'hreflang_en' => $page->hreflang_en,
                'meta_description_en' => $page->meta_description_en,
                'og_description_en' => $page->og_description_en,
                'og_image_en' => $page->og_image_en ? Storage::url($page->og_image_en) : null,
                // Arabic fields
                'name_ar' => $page->name_ar,
                'url_slug_ar' => $page->url_slug_ar,
                'meta_title_ar' => $page->meta_title_ar,
                'h1_title_ar' => $page->h1_title_ar,
                'og_title_ar' => $page->og_title_ar,
                'hreflang_ar' => $page->hreflang_ar,
                'meta_description_ar' => $page->meta_description_ar,
                'og_description_ar' => $page->og_description_ar,
                'og_image_ar' => $page->og_image_ar ? Storage::url($page->og_image_ar) : null,
            ],
        ]);
    }

    /**
     * Update the specified page in storage.
     */
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            // English fields
            'name_en' => 'nullable|string|max:255',
            'url_slug_en' => 'nullable|string|max:255',
            'meta_title_en' => 'nullable|string|max:255',
            'h1_title_en' => 'nullable|string|max:255',
            'og_title_en' => 'nullable|string|max:255',
            'hreflang_en' => 'nullable|string|max:255',
            'meta_description_en' => 'nullable|string',
            'og_description_en' => 'nullable|string',
            'og_image_en' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            // Arabic fields
            'name_ar' => 'nullable|string|max:255',
            'url_slug_ar' => 'nullable|string|max:255',
            'meta_title_ar' => 'nullable|string|max:255',
            'h1_title_ar' => 'nullable|string|max:255',
            'og_title_ar' => 'nullable|string|max:255',
            'hreflang_ar' => 'nullable|string|max:255',
            'meta_description_ar' => 'nullable|string',
            'og_description_ar' => 'nullable|string',
            'og_image_ar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        // Handle file uploads
        if ($request->hasFile('og_image_en')) {
            // Delete old image if exists
            if ($page->og_image_en) {
                Storage::disk('public')->delete($page->og_image_en);
            }
            $validated['og_image_en'] = $request->file('og_image_en')->store('pages/og-images', 'public');
        }

        if ($request->hasFile('og_image_ar')) {
            // Delete old image if exists
            if ($page->og_image_ar) {
                Storage::disk('public')->delete($page->og_image_ar);
            }
            $validated['og_image_ar'] = $request->file('og_image_ar')->store('pages/og-images', 'public');
        }

        $page->update($validated);

        return redirect()->route('pages.index')->with('success', 'Page updated successfully.');
    }

    /**
     * Remove the specified page from storage.
     */
    public function destroy(Page $page)
    {
        // Delete associated images
        if ($page->og_image_en) {
            Storage::disk('public')->delete($page->og_image_en);
        }
        if ($page->og_image_ar) {
            Storage::disk('public')->delete($page->og_image_ar);
        }

        $page->delete();

        return redirect()->route('pages.index')->with('success', 'Page deleted successfully.');
    }

    /**
     * Duplicate the specified page.
     */
    public function duplicate(Page $page)
    {
        $newPage = $page->replicate();
        $newPage->name_en = $page->name_en ? $page->name_en . ' (Copy)' : null;
        $newPage->name_ar = $page->name_ar ? $page->name_ar . ' (نسخة)' : null;
        $newPage->url_slug_en = $page->url_slug_en ? $page->url_slug_en . '-copy' : null;
        $newPage->url_slug_ar = $page->url_slug_ar ? $page->url_slug_ar . '-copy' : null;
        
        // Copy images if they exist
        if ($page->og_image_en) {
            $extension = pathinfo($page->og_image_en, PATHINFO_EXTENSION);
            $newPath = 'pages/og-images/' . uniqid() . '.' . $extension;
            Storage::disk('public')->copy($page->og_image_en, $newPath);
            $newPage->og_image_en = $newPath;
        }
        
        if ($page->og_image_ar) {
            $extension = pathinfo($page->og_image_ar, PATHINFO_EXTENSION);
            $newPath = 'pages/og-images/' . uniqid() . '.' . $extension;
            Storage::disk('public')->copy($page->og_image_ar, $newPath);
            $newPage->og_image_ar = $newPath;
        }
        
        $newPage->save();

        return redirect()->route('pages.index')->with('success', 'Page duplicated successfully.');
    }
}
