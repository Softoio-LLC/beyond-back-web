<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class ImageController extends Controller
{
    /**
     * Serve optimized image with resizing, format conversion, and caching.
     *
     * Usage: /img?path=images/hero.jpg&w=800&h=600&q=80&f=webp
     */
    public function show(Request $request): Response
    {
        $request->validate([
            'path' => 'required|string',
            'w' => 'nullable|integer|min:1|max:3840',
            'h' => 'nullable|integer|min:1|max:2160',
            'q' => 'nullable|integer|min:1|max:100',
            'f' => 'nullable|in:webp,jpg,jpeg,png,original',
        ]);

        $path = $request->input('path');
        $width = $request->input('w') ? (int) $request->input('w') : null;
        $height = $request->input('h') ? (int) $request->input('h') : null;
        $quality = (int) $request->input('q', 80);
        $format = $request->input('f', 'webp');

        // Generate cache key
        $cacheKey = $this->getCacheKey($path, $width, $height, $quality, $format);

        // Check if cached version exists
        if (Cache::has($cacheKey)) {
            $cachedData = Cache::get($cacheKey);
            $content = base64_decode($cachedData['content']);

            return $this->responseWithHeaders($content, $cachedData['mime']);
        }

        // Determine the actual file path
        $originalPath = $this->resolveImagePath($path);

        if (! $originalPath || ! file_exists($originalPath)) {
            abort(404, 'Image not found: '.$path);
        }

        // Check if it's an SVG - serve directly without processing
        $extension = strtolower(pathinfo($originalPath, PATHINFO_EXTENSION));
        if ($extension === 'svg') {
            $content = file_get_contents($originalPath);

            return response($content, 200, [
                'Content-Type' => 'image/svg+xml',
                'Cache-Control' => 'public, max-age=31536000, immutable',
                'Expires' => gmdate('D, d M Y H:i:s \G\M\T', time() + 31536000),
                'X-Content-Type-Options' => 'nosniff',
            ]);
        }

        // Load image with Intervention
        $image = Image::read($originalPath);

        // Resize if dimensions provided
        if ($width || $height) {
            $image->scale($width, $height);
        }

        // Determine output format and mime type
        $outputFormat = $format === 'original' ? pathinfo($path, PATHINFO_EXTENSION) : $format;
        $mimeType = $this->getMimeType($outputFormat);

        // Encode image
        $encodedImage = match ($outputFormat) {
            'webp' => $image->toWebp($quality),
            'jpg', 'jpeg' => $image->toJpeg($quality),
            'png' => $image->toPng(),
            default => $image->toJpeg($quality),
        };

        $imageContent = (string) $encodedImage;

        // Cache the result for 30 days (base64 encoded to avoid UTF-8 issues)
        Cache::put($cacheKey, [
            'content' => base64_encode($imageContent),
            'mime' => $mimeType,
        ], now()->addDays(30));

        return $this->responseWithHeaders($imageContent, $mimeType);
    }

    /**
     * Resolve the actual file path for an image
     * Handles both storage uploads and public assets
     */
    private function resolveImagePath(string $path): ?string
    {
        // Remove leading slash if present
        $path = ltrim($path, '/');

        // Check if it's a public asset (e.g., /assets/img/logo.png)
        if (str_starts_with($path, 'assets/') || str_starts_with($path, 'public/')) {
            $publicPath = public_path($path);
            if (file_exists($publicPath)) {
                return $publicPath;
            }
        }

        // Check in storage/app/public (uploaded files)
        if (Storage::disk('public')->exists($path)) {
            return Storage::disk('public')->path($path);
        }

        // Try as absolute path from public root
        $publicPath = public_path($path);
        if (file_exists($publicPath)) {
            return $publicPath;
        }

        return null;
    }

    /**
     * Generate cache key for image
     */
    private function getCacheKey(string $path, ?int $width, ?int $height, int $quality, string $format): string
    {
        return 'img_'.md5("{$path}_{$width}_{$height}_{$quality}_{$format}");
    }

    /**
     * Get MIME type for format
     */
    private function getMimeType(string $format): string
    {
        return match ($format) {
            'webp' => 'image/webp',
            'jpg', 'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            default => 'image/jpeg',
        };
    }

    /**
     * Create response with proper cache headers
     */
    private function responseWithHeaders(string $content, string $mimeType): Response
    {
        return response($content, 200, [
            'Content-Type' => $mimeType,
            'Cache-Control' => 'public, max-age=31536000, immutable', // 1 year
            'Expires' => gmdate('D, d M Y H:i:s \G\M\T', time() + 31536000),
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }

    /**
     * Clear image cache (useful for admin panel)
     */
    public function clearCache(Request $request): Response
    {
        $path = $request->input('path');

        if ($path) {
            // Clear specific image cache
            $patterns = ['img_*'.md5($path).'*'];
            foreach ($patterns as $pattern) {
                Cache::forget($pattern);
            }
        } else {
            // Clear all image cache
            Cache::flush();
        }

        return response()->json(['message' => 'Cache cleared successfully']);
    }
}
