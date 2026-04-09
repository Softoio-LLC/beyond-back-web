<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Services\StorageService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PageController extends Controller
{
    public function __construct(protected StorageService $storage) {}

    /**
     * Display a listing of pages.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);
        $search = $request->input('search', '');

        $query = Page::query();

        // Apply search filter
        if (! empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name_en', 'like', "%{$search}%")
                    ->orWhere('name_ar', 'like', "%{$search}%")
                    ->orWhere('url_slug_en', 'like', "%{$search}%")
                    ->orWhere('url_slug_ar', 'like', "%{$search}%");
            });
        }

        $paginatedPages = $query->orderBy('updated_at', 'desc')->paginate($perPage)->withQueryString();

        $pages = $paginatedPages->through(function ($page) {
            return [
                'id' => $page->id,
                'name' => $page->name_en ?: $page->name_ar,
                'name_en' => $page->name_en,
                'name_ar' => $page->name_ar,
                'lastEditDate' => $page->updated_at->format('d.m.Y'),
                'hasArabic' => ! empty($page->name_ar),
                'hasEnglish' => ! empty($page->name_en),
                'is_homepage' => $page->is_homepage,
                'is_published' => $page->is_published,
                'url_slug_en' => $page->url_slug_en,
                'url_slug_ar' => $page->url_slug_ar,
            ];
        });

        return Inertia::render('Pages/Index', [
            'pages' => $pages,
            'filters' => [
                'search' => $search,
                'per_page' => (int) $perPage,
            ],
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
            'url_slug_en' => [
                'nullable',
                'string',
                'max:255',
                'regex:/^[a-z0-9\-]+$/',
                Rule::unique('pages', 'url_slug_en'),
            ],
            'meta_title_en' => 'nullable|string|max:255',
            'h1_title_en' => 'nullable|string|max:255',
            'og_title_en' => 'nullable|string|max:255',
            'hreflang_en' => 'nullable|string|max:255',
            'meta_description_en' => 'nullable|string',
            'og_description_en' => 'nullable|string',
            'og_image_en' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            // Arabic fields
            'name_ar' => 'nullable|string|max:255',
            'url_slug_ar' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('pages', 'url_slug_ar'),
            ],
            'meta_title_ar' => 'nullable|string|max:255',
            'h1_title_ar' => 'nullable|string|max:255',
            'og_title_ar' => 'nullable|string|max:255',
            'hreflang_ar' => 'nullable|string|max:255',
            'meta_description_ar' => 'nullable|string',
            'og_description_ar' => 'nullable|string',
            'og_image_ar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            // Status fields
            'is_homepage' => 'nullable|boolean',
            'is_published' => 'nullable|boolean',
        ], [
            'url_slug_en.regex' => 'The English URL slug can only contain lowercase letters, numbers, and hyphens.',
            'url_slug_en.unique' => 'This English URL slug is already in use.',
            'url_slug_ar.unique' => 'This Arabic URL slug is already in use.',
        ]);

        // Auto-generate slugs from names if not provided
        if (empty($validated['url_slug_en']) && ! empty($validated['name_en'])) {
            $validated['url_slug_en'] = $this->generateUniqueSlug($validated['name_en'], 'url_slug_en');
        }
        if (empty($validated['url_slug_ar']) && ! empty($validated['name_ar'])) {
            $validated['url_slug_ar'] = $this->generateUniqueSlug($validated['name_ar'], 'url_slug_ar');
        }

        // Handle file uploads
        if ($request->hasFile('og_image_en')) {
            $validated['og_image_en'] = $this->storage->store($request->file('og_image_en'), 'pages/og-images');
        }

        if ($request->hasFile('og_image_ar')) {
            $validated['og_image_ar'] = $this->storage->store($request->file('og_image_ar'), 'pages/og-images');
        }

        // If this page is set as homepage, unset other homepages
        if (! empty($validated['is_homepage']) && $validated['is_homepage']) {
            Page::where('is_homepage', true)->update(['is_homepage' => false]);
        }

        // Default is_published to true if not set
        $validated['is_published'] = $validated['is_published'] ?? true;

        $page = Page::create($validated);

        // Initialize default sections for the new page
        $page->initializeDefaultSections();

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
                'og_image_en' => $page->og_image_en ? $this->storage->url($page->og_image_en) : null,
                // Arabic fields
                'name_ar' => $page->name_ar,
                'url_slug_ar' => $page->url_slug_ar,
                'meta_title_ar' => $page->meta_title_ar,
                'h1_title_ar' => $page->h1_title_ar,
                'og_title_ar' => $page->og_title_ar,
                'hreflang_ar' => $page->hreflang_ar,
                'meta_description_ar' => $page->meta_description_ar,
                'og_description_ar' => $page->og_description_ar,
                'og_image_ar' => $page->og_image_ar ? $this->storage->url($page->og_image_ar) : null,
                // Status fields
                'is_homepage' => $page->is_homepage,
                'is_published' => $page->is_published,
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
            'url_slug_en' => [
                'nullable',
                'string',
                'max:255',
                'regex:/^[a-z0-9\-]+$/',
                Rule::unique('pages', 'url_slug_en')->ignore($page->id),
            ],
            'meta_title_en' => 'nullable|string|max:255',
            'h1_title_en' => 'nullable|string|max:255',
            'og_title_en' => 'nullable|string|max:255',
            'hreflang_en' => 'nullable|string|max:255',
            'meta_description_en' => 'nullable|string',
            'og_description_en' => 'nullable|string',
            'og_image_en' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            // Arabic fields
            'name_ar' => 'nullable|string|max:255',
            'url_slug_ar' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('pages', 'url_slug_ar')->ignore($page->id),
            ],
            'meta_title_ar' => 'nullable|string|max:255',
            'h1_title_ar' => 'nullable|string|max:255',
            'og_title_ar' => 'nullable|string|max:255',
            'hreflang_ar' => 'nullable|string|max:255',
            'meta_description_ar' => 'nullable|string',
            'og_description_ar' => 'nullable|string',
            'og_image_ar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            // Status fields
            'is_homepage' => 'nullable|boolean',
            'is_published' => 'nullable|boolean',
        ], [
            'url_slug_en.regex' => 'The English URL slug can only contain lowercase letters, numbers, and hyphens.',
            'url_slug_en.unique' => 'This English URL slug is already in use.',
            'url_slug_ar.unique' => 'This Arabic URL slug is already in use.',
        ]);

        // Handle file uploads
        if ($request->hasFile('og_image_en')) {
            // Delete old image if exists
            if ($page->og_image_en) {
                $this->storage->delete($page->og_image_en);
            }
            $validated['og_image_en'] = $this->storage->store($request->file('og_image_en'), 'pages/og-images');
        }

        if ($request->hasFile('og_image_ar')) {
            // Delete old image if exists
            if ($page->og_image_ar) {
                $this->storage->delete($page->og_image_ar);
            }
            $validated['og_image_ar'] = $this->storage->store($request->file('og_image_ar'), 'pages/og-images');
        }

        // If this page is set as homepage, unset other homepages
        if (! empty($validated['is_homepage']) && $validated['is_homepage'] && ! $page->is_homepage) {
            Page::where('is_homepage', true)->update(['is_homepage' => false]);
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
            $this->storage->delete($page->og_image_en);
        }
        if ($page->og_image_ar) {
            $this->storage->delete($page->og_image_ar);
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
        $newPage->name_en = $page->name_en ? $page->name_en.' (Copy)' : null;
        $newPage->name_ar = $page->name_ar ? $page->name_ar.' (نسخة)' : null;

        // Generate unique slugs for the copy
        if ($page->url_slug_en) {
            $newPage->url_slug_en = $this->generateUniqueSlug($page->url_slug_en.'-copy', 'url_slug_en');
        }
        if ($page->url_slug_ar) {
            $newPage->url_slug_ar = $this->generateUniqueSlug($page->url_slug_ar.'-copy', 'url_slug_ar');
        }

        // Duplicated page should never be homepage
        $newPage->is_homepage = false;

        // Copy images if they exist
        if ($page->og_image_en) {
            $extension = pathinfo($page->og_image_en, PATHINFO_EXTENSION);
            $newPath = 'pages/og-images/'.uniqid().'.'.$extension;
            $this->storage->copy($page->og_image_en, $newPath);
            $newPage->og_image_en = $newPath;
        }

        if ($page->og_image_ar) {
            $extension = pathinfo($page->og_image_ar, PATHINFO_EXTENSION);
            $newPath = 'pages/og-images/'.uniqid().'.'.$extension;
            $this->storage->copy($page->og_image_ar, $newPath);
            $newPage->og_image_ar = $newPath;
        }

        $newPage->save();

        // Duplicate all sections
        $page->duplicateSectionsTo($newPage);

        return redirect()->route('pages.index')->with('success', 'Page duplicated successfully.');
    }

    /**
     * Toggle homepage status for a page.
     */
    public function toggleHomepage(Page $page)
    {
        if ($page->is_homepage) {
            // Cannot unset homepage without setting another
            return redirect()->route('pages.index')->with('error', 'You must set another page as homepage first.');
        }

        // Unset current homepage
        Page::where('is_homepage', true)->update(['is_homepage' => false]);

        // Set this page as homepage
        $page->update(['is_homepage' => true]);

        return redirect()->route('pages.index')->with('success', 'Homepage updated successfully.');
    }

    /**
     * Toggle published status for a page.
     */
    public function togglePublished(Page $page)
    {
        $page->update(['is_published' => ! $page->is_published]);

        $status = $page->is_published ? 'published' : 'unpublished';

        return redirect()->route('pages.index')->with('success', "Page {$status} successfully.");
    }

    /**
     * Generate a unique slug for a given field.
     */
    private function generateUniqueSlug(string $value, string $field): string
    {
        // Convert to lowercase and replace spaces with hyphens
        $slug = Str::slug($value);

        // If Arabic, transliterate or keep as-is
        if ($field === 'url_slug_ar' && ! preg_match('/^[a-z0-9\-]+$/', $slug)) {
            // For Arabic, we'll use the original value but make it URL-safe
            $slug = urlencode($value);
            // Replace encoded spaces with hyphens
            $slug = str_replace(['%20', '+'], '-', $slug);
        }

        // Check if slug exists and make it unique
        $originalSlug = $slug;
        $counter = 1;

        while (Page::where($field, $slug)->exists()) {
            $slug = $originalSlug.'-'.$counter;
            $counter++;
        }

        return $slug;
    }
}
