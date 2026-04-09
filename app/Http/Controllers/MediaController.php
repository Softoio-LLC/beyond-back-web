<?php

namespace App\Http\Controllers;

use App\Services\StorageService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class MediaController extends Controller
{
    public function __construct(protected StorageService $storage) {}

    /**
     * Image size presets for different purposes.
     */
    private const IMAGE_SIZES = [
        'thumbnail' => ['width' => 150, 'height' => 120],
        'small' => ['width' => 300, 'height' => 240],
        'medium' => ['width' => 600, 'height' => 480],
        'large' => ['width' => 1200, 'height' => 960],
        'hero' => ['width' => 1920, 'height' => 1080],
        'original' => null, // Keep original size
    ];

    /**
     * Upload an image for a section.
     */
    public function uploadSectionImage(Request $request)
    {
        $request->validate([
            'image' => 'required|file|mimes:jpeg,png,jpg,gif,webp,svg|max:5120', // 5MB max
            'section_type' => 'required|string',
            'size' => 'nullable|string|in:thumbnail,small,medium,large,hero,original',
        ]);

        try {
            $file = $request->file('image');
            $sectionType = Str::slug($request->section_type);
            $size = $request->input('size', 'original'); // Default to original to avoid processing issues

            // Generate unique filename
            $extension = strtolower($file->getClientOriginalExtension());
            $filename = Str::uuid().'.'.$extension;
            $path = "sections/{$sectionType}";
            $fullPath = "{$path}/{$filename}";

            // For SVG files or if size is 'original', store as-is without processing
            if ($extension === 'svg' || $size === 'original') {
                $this->storage->putFileAs($path, $file, $filename);
                $fileSize = $file->getSize();
                $imageInfo = @getimagesize($file->getPathname());
            } else {
                // Try to process and optimize image, fall back to original if it fails
                try {
                    $processedImage = $this->processImage($file, $size);
                    $this->storage->put($fullPath, $processedImage);
                    $fileSize = strlen($processedImage);
                    $imageInfo = @getimagesizefromstring($processedImage);
                } catch (\Exception $e) {
                    // If processing fails, store original
                    $this->storage->putFileAs($path, $file, $filename);
                    $fileSize = $file->getSize();
                    $imageInfo = @getimagesize($file->getPathname());
                }
            }

            return response()->json([
                'success' => true,
                'path' => $fullPath,
                'url' => $this->storage->url($fullPath),
                'filename' => $filename,
                'original_name' => $file->getClientOriginalName(),
                'size' => $fileSize,
                'width' => $imageInfo[0] ?? null,
                'height' => $imageInfo[1] ?? null,
                'mime_type' => $imageInfo['mime'] ?? $file->getMimeType(),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Upload failed: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Upload an icon for a section button.
     */
    public function uploadSectionIcon(Request $request)
    {
        $request->validate([
            'icon' => 'required|image|mimes:png,svg,webp|max:1024', // 1MB max for icons
            'section_type' => 'required|string',
        ]);

        $file = $request->file('icon');
        $sectionType = Str::slug($request->section_type);

        // Generate unique filename
        $filename = Str::uuid().'.'.$file->getClientOriginalExtension();
        $path = "sections/{$sectionType}/icons";

        // For icons, resize to max 64x64 if not SVG
        if ($file->getClientOriginalExtension() !== 'svg') {
            $processedIcon = $this->processImage($file, 'thumbnail', 64, 64);
            $this->storage->put("{$path}/{$filename}", $processedIcon);
        } else {
            // Store SVG as-is
            $this->storage->putFileAs($path, $file, $filename);
        }

        $fullPath = "{$path}/{$filename}";

        return response()->json([
            'success' => true,
            'path' => $fullPath,
            'url' => $this->storage->url($fullPath),
            'filename' => $filename,
            'original_name' => $file->getClientOriginalName(),
        ]);
    }

    /**
     * Upload multiple images for a gallery or slider.
     */
    public function uploadMultipleImages(Request $request)
    {
        $request->validate([
            'images' => 'required|array|max:20',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'section_type' => 'required|string',
            'size' => 'nullable|string|in:thumbnail,small,medium,large,hero,original',
        ]);

        $sectionType = Str::slug($request->section_type);
        $size = $request->input('size', 'medium');
        $uploadedImages = [];

        foreach ($request->file('images') as $file) {
            $filename = Str::uuid().'.'.$file->getClientOriginalExtension();
            $path = "sections/{$sectionType}";

            $processedImage = $this->processImage($file, $size);
            $fullPath = "{$path}/{$filename}";
            $this->storage->put($fullPath, $processedImage);

            $imageInfo = getimagesizefromstring($processedImage);

            $uploadedImages[] = [
                'path' => $fullPath,
                'url' => $this->storage->url($fullPath),
                'filename' => $filename,
                'original_name' => $file->getClientOriginalName(),
                'width' => $imageInfo[0] ?? null,
                'height' => $imageInfo[1] ?? null,
            ];
        }

        return response()->json([
            'success' => true,
            'images' => $uploadedImages,
            'count' => count($uploadedImages),
        ]);
    }

    /**
     * Delete an image.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'path' => 'required|string',
        ]);

        $path = $request->input('path');

        // Security check: ensure path is within sections folder
        if (! Str::startsWith($path, 'sections/')) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid file path.',
            ], 403);
        }

        if ($this->storage->exists($path)) {
            $this->storage->delete($path);

            return response()->json([
                'success' => true,
                'message' => 'Image deleted successfully.',
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Image not found.',
        ], 404);
    }

    /**
     * Process and optimize an image.
     */
    private function processImage($file, string $size, ?int $maxWidth = null, ?int $maxHeight = null): string
    {
        $image = Image::read($file);

        // Get target dimensions
        $dimensions = self::IMAGE_SIZES[$size] ?? null;

        if ($dimensions || ($maxWidth && $maxHeight)) {
            $targetWidth = $maxWidth ?? $dimensions['width'];
            $targetHeight = $maxHeight ?? $dimensions['height'];

            // Resize while maintaining aspect ratio
            $image->scaleDown($targetWidth, $targetHeight);
        }

        // Optimize quality based on format
        $extension = strtolower($file->getClientOriginalExtension());

        return match ($extension) {
            'png' => $image->toPng()->toString(),
            'gif' => $image->toGif()->toString(),
            'webp' => $image->toWebp(quality: 85)->toString(),
            default => $image->toJpeg(quality: 85)->toString(),
        };
    }
}
