<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class MediaController extends Controller
{
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
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120', // 5MB max
            'section_type' => 'required|string',
            'size' => 'nullable|string|in:thumbnail,small,medium,large,hero,original',
        ]);

        $file = $request->file('image');
        $sectionType = Str::slug($request->section_type);
        $size = $request->input('size', 'medium');
        
        // Generate unique filename
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = "sections/{$sectionType}";
        
        // Process and optimize image
        $processedImage = $this->processImage($file, $size);
        
        // Store the image
        $fullPath = "{$path}/{$filename}";
        Storage::disk('public')->put($fullPath, $processedImage);
        
        // Get image dimensions
        $imageInfo = getimagesizefromstring($processedImage);
        
        return response()->json([
            'success' => true,
            'path' => $fullPath,
            'url' => Storage::disk('public')->url($fullPath),
            'filename' => $filename,
            'original_name' => $file->getClientOriginalName(),
            'size' => strlen($processedImage),
            'width' => $imageInfo[0] ?? null,
            'height' => $imageInfo[1] ?? null,
            'mime_type' => $imageInfo['mime'] ?? $file->getMimeType(),
        ]);
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
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = "sections/{$sectionType}/icons";
        
        // For icons, resize to max 64x64 if not SVG
        if ($file->getClientOriginalExtension() !== 'svg') {
            $processedIcon = $this->processImage($file, 'thumbnail', 64, 64);
            Storage::disk('public')->put("{$path}/{$filename}", $processedIcon);
        } else {
            // Store SVG as-is
            Storage::disk('public')->putFileAs($path, $file, $filename);
        }
        
        $fullPath = "{$path}/{$filename}";
        
        return response()->json([
            'success' => true,
            'path' => $fullPath,
            'url' => Storage::disk('public')->url($fullPath),
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
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $path = "sections/{$sectionType}";
            
            $processedImage = $this->processImage($file, $size);
            $fullPath = "{$path}/{$filename}";
            Storage::disk('public')->put($fullPath, $processedImage);
            
            $imageInfo = getimagesizefromstring($processedImage);
            
            $uploadedImages[] = [
                'path' => $fullPath,
                'url' => Storage::disk('public')->url($fullPath),
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
        if (!Str::startsWith($path, 'sections/')) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid file path.',
            ], 403);
        }

        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
            
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
