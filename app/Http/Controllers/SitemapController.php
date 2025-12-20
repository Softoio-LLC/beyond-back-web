<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Generate XML sitemap for all published pages.
     */
    public function index(): Response
    {
        $baseUrl = config('app.url');
        $pages = Page::published()->get();
        
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
        $xml .= 'xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";
        
        foreach ($pages as $page) {
            // English URL
            $urlEn = $page->is_homepage ? $baseUrl : "{$baseUrl}/{$page->url_slug_en}";
            $urlAr = $page->is_homepage ? "{$baseUrl}/ar" : "{$baseUrl}/ar/{$page->url_slug_ar}";
            
            // Only add if we have a valid slug or it's homepage
            if ($page->is_homepage || $page->url_slug_en) {
                $xml .= "  <url>\n";
                $xml .= "    <loc>{$urlEn}</loc>\n";
                $xml .= "    <lastmod>{$page->updated_at->toIso8601String()}</lastmod>\n";
                $xml .= "    <changefreq>weekly</changefreq>\n";
                $xml .= "    <priority>" . ($page->is_homepage ? '1.0' : '0.8') . "</priority>\n";
                
                // Hreflang alternatives
                if ($page->url_slug_en || $page->is_homepage) {
                    $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"en\" href=\"{$urlEn}\" />\n";
                }
                if ($page->url_slug_ar || $page->is_homepage) {
                    $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"ar\" href=\"{$urlAr}\" />\n";
                }
                $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"{$urlEn}\" />\n";
                
                $xml .= "  </url>\n";
            }
            
            // Arabic URL (separate entry)
            if ($page->is_homepage || $page->url_slug_ar) {
                $xml .= "  <url>\n";
                $xml .= "    <loc>{$urlAr}</loc>\n";
                $xml .= "    <lastmod>{$page->updated_at->toIso8601String()}</lastmod>\n";
                $xml .= "    <changefreq>weekly</changefreq>\n";
                $xml .= "    <priority>" . ($page->is_homepage ? '1.0' : '0.8') . "</priority>\n";
                
                // Hreflang alternatives
                if ($page->url_slug_en || $page->is_homepage) {
                    $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"en\" href=\"{$urlEn}\" />\n";
                }
                if ($page->url_slug_ar || $page->is_homepage) {
                    $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"ar\" href=\"{$urlAr}\" />\n";
                }
                $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"{$urlEn}\" />\n";
                
                $xml .= "  </url>\n";
            }
        }
        
        $xml .= '</urlset>';
        
        return response($xml, 200)
            ->header('Content-Type', 'application/xml; charset=utf-8');
    }

    /**
     * Generate robots.txt with sitemap reference.
     */
    public function robots(): Response
    {
        $baseUrl = config('app.url');
        
        $content = "User-agent: *\n";
        $content .= "Allow: /\n";
        $content .= "Disallow: /dashboard\n";
        $content .= "Disallow: /login\n";
        $content .= "Disallow: /profile\n";
        $content .= "Disallow: /pages/\n";
        $content .= "Disallow: /media/\n";
        $content .= "\n";
        $content .= "Sitemap: {$baseUrl}/sitemap.xml\n";
        
        return response($content, 200, [
            'Content-Type' => 'text/plain',
        ]);
    }
}
