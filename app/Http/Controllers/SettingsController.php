<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{
    /**
     * Display custom code settings page.
     */
    public function customCode(): Response
    {
        $settings = Setting::getByGroup('custom_code');

        return Inertia::render('Settings/CustomCode', [
            'settings' => [
                'header_code' => $settings['header_code'] ?? '',
                'footer_code' => $settings['footer_code'] ?? '',
            ],
        ]);
    }

    /**
     * Update custom code settings.
     */
    public function updateCustomCode(Request $request)
    {
        $request->validate([
            'header_code' => 'nullable|string|max:65535',
            'footer_code' => 'nullable|string|max:65535',
        ]);

        $headerCode = $request->input('header_code', '');
        $footerCode = $request->input('footer_code', '');

        // Validate and collect warnings
        $warnings = [];
        
        if ($headerCode) {
            $headerWarnings = Setting::validateCustomCode($headerCode);
            $warnings = array_merge($warnings, array_map(fn($w) => "Header: $w", $headerWarnings));
            $headerCode = Setting::sanitizeCustomCode($headerCode);
        }
        
        if ($footerCode) {
            $footerWarnings = Setting::validateCustomCode($footerCode);
            $warnings = array_merge($warnings, array_map(fn($w) => "Footer: $w", $footerWarnings));
            $footerCode = Setting::sanitizeCustomCode($footerCode);
        }

        // Save settings
        Setting::set('header_code', $headerCode, 'custom_code', 'html');
        Setting::set('footer_code', $footerCode, 'custom_code', 'html');

        $message = 'Custom code settings saved successfully.';
        if (!empty($warnings)) {
            $message .= ' Warnings: ' . implode(' ', $warnings);
        }

        return back()->with('success', $message);
    }

    /**
     * Display SEO settings page.
     */
    public function seo(): Response
    {
        $settings = Setting::getByGroup('seo');

        return Inertia::render('Settings/Seo', [
            'settings' => [
                'default_schema' => $settings['default_schema'] ?? '',
            ],
        ]);
    }

    /**
     * Update SEO settings.
     */
    public function updateSeo(Request $request)
    {
        $request->validate([
            'default_schema' => 'nullable|string|max:65535',
        ]);

        $schema = $request->input('default_schema', '');
        
        // Validate JSON if provided
        if ($schema) {
            $decoded = json_decode($schema);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return back()->withErrors(['default_schema' => 'Invalid JSON format.']);
            }
        }

        Setting::set('default_schema', $schema, 'seo', 'json');

        return back()->with('success', 'SEO settings saved successfully.');
    }

    /**
     * Display general settings page.
     */
    public function general(): Response
    {
        $settings = Setting::getByGroup('general');

        return Inertia::render('Settings/General', [
            'settings' => $settings,
        ]);
    }

    /**
     * Update general settings.
     */
    public function updateGeneral(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            if ($key !== '_token') {
                Setting::set($key, $value, 'general');
            }
        }

        return back()->with('success', 'General settings saved successfully.');
    }

    /**
     * Display email settings page.
     */
    public function email(): Response
    {
        $settings = Setting::getByGroup('email');

        return Inertia::render('Settings/Email', [
            'settings' => [
                'mail_mailer' => $settings['mail_mailer'] ?? env('MAIL_MAILER', 'smtp'),
                'mail_host' => $settings['mail_host'] ?? env('MAIL_HOST', ''),
                'mail_port' => $settings['mail_port'] ?? env('MAIL_PORT', '587'),
                'mail_username' => $settings['mail_username'] ?? env('MAIL_USERNAME', ''),
                'mail_password' => $settings['mail_password'] ?? '',
                'mail_encryption' => $settings['mail_encryption'] ?? env('MAIL_ENCRYPTION', 'tls'),
                'mail_from_address' => $settings['mail_from_address'] ?? env('MAIL_FROM_ADDRESS', ''),
                'mail_from_name' => $settings['mail_from_name'] ?? env('MAIL_FROM_NAME', 'Beyond'),
                'admin_email' => $settings['admin_email'] ?? env('MAIL_ADMIN_EMAIL', ''),
            ],
        ]);
    }

    /**
     * Update email settings.
     */
    public function updateEmail(Request $request)
    {
        $request->validate([
            'mail_mailer' => 'required|string|in:smtp',
            'mail_host' => 'required|string|max:255',
            'mail_port' => 'required|string|max:10',
            'mail_username' => 'required|string|max:255',
            'mail_password' => 'nullable|string|max:255',
            'mail_encryption' => 'required|string|in:tls,ssl,null',
            'mail_from_address' => 'required|email|max:255',
            'mail_from_name' => 'required|string|max:255',
            'admin_email' => 'nullable|email|max:255',
        ]);

        // Save all email settings
        Setting::set('mail_mailer', $request->input('mail_mailer', 'smtp'), 'email', 'text');
        Setting::set('mail_host', $request->input('mail_host', ''), 'email', 'text');
        Setting::set('mail_port', $request->input('mail_port', '587'), 'email', 'text');
        Setting::set('mail_username', $request->input('mail_username', ''), 'email', 'text');
        
        // Only update password if provided (don't clear existing)
        if ($request->filled('mail_password')) {
            Setting::set('mail_password', $request->input('mail_password'), 'email', 'password');
        }
        
        Setting::set('mail_encryption', $request->input('mail_encryption', 'tls'), 'email', 'text');
        Setting::set('mail_from_address', $request->input('mail_from_address', ''), 'email', 'text');
        Setting::set('mail_from_name', $request->input('mail_from_name', 'Beyond'), 'email', 'text');
        Setting::set('admin_email', $request->input('admin_email', ''), 'email', 'text');

        return back()->with('success', 'Email settings saved successfully.');
    }

    /**
     * Send a test email.
     */
    public function testEmail(Request $request)
    {
        $request->validate([
            'test_email' => 'required|email',
        ]);

        try {
            // Apply settings temporarily for testing
            $settings = Setting::getByGroup('email');
            
            Config::set('mail.default', $settings['mail_mailer'] ?? 'smtp');
            Config::set('mail.mailers.smtp.host', $settings['mail_host'] ?? '');
            Config::set('mail.mailers.smtp.port', $settings['mail_port'] ?? 587);
            Config::set('mail.mailers.smtp.username', $settings['mail_username'] ?? '');
            Config::set('mail.mailers.smtp.password', $settings['mail_password'] ?? '');
            Config::set('mail.mailers.smtp.encryption', $settings['mail_encryption'] ?? 'tls');
            Config::set('mail.from.address', $settings['mail_from_address'] ?? '');
            Config::set('mail.from.name', $settings['mail_from_name'] ?? 'Beyond');

            Mail::raw('This is a test email from Beyond CMS. If you received this, your email settings are working correctly!', function ($message) use ($request, $settings) {
                $message->to($request->test_email)
                        ->subject('Beyond CMS - Test Email');
            });

            return back()->with('success', 'Test email sent successfully to ' . $request->test_email);
        } catch (\Exception $e) {
            return back()->withErrors(['test_email' => 'Failed to send test email: ' . $e->getMessage()]);
        }
    }
}
