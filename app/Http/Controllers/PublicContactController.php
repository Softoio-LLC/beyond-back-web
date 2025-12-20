<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactFormSubmitted;
use App\Models\Contact;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class PublicContactController extends Controller
{
    /**
     * Store a new contact form submission.
     */
    public function store(ContactFormRequest $request)
    {
        // Create contact record in database
        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        // Send email notification
        try {
            // Apply email settings from database
            $this->applyEmailSettings();
            
            // Get admin email from settings or fallback to config
            $adminEmail = Setting::get('admin_email') ?: config('mail.admin_email', config('mail.from.address'));
            
            if ($adminEmail) {
                Mail::to($adminEmail)->send(new ContactFormSubmitted($contact));
            }
        } catch (\Exception $e) {
            // Log error but don't fail the request - contact is already saved
            Log::error('Failed to send contact notification email: ' . $e->getMessage());
        }

        return back()->with('success', __('Thank you for your message! We will get back to you soon.'));
    }

    /**
     * Apply email settings from database to mail config.
     */
    protected function applyEmailSettings(): void
    {
        $settings = Setting::getByGroup('email');
        
        if (empty($settings)) {
            return; // Use default config if no settings
        }

        if (!empty($settings['mail_mailer'])) {
            Config::set('mail.default', $settings['mail_mailer']);
        }

        if (!empty($settings['mail_host'])) {
            Config::set('mail.mailers.smtp.host', $settings['mail_host']);
        }

        if (!empty($settings['mail_port'])) {
            Config::set('mail.mailers.smtp.port', (int) $settings['mail_port']);
        }

        if (!empty($settings['mail_username'])) {
            Config::set('mail.mailers.smtp.username', $settings['mail_username']);
        }

        if (!empty($settings['mail_password'])) {
            Config::set('mail.mailers.smtp.password', $settings['mail_password']);
        }

        if (!empty($settings['mail_encryption'])) {
            $encryption = $settings['mail_encryption'] === 'null' ? null : $settings['mail_encryption'];
            Config::set('mail.mailers.smtp.encryption', $encryption);
        }

        if (!empty($settings['mail_from_address'])) {
            Config::set('mail.from.address', $settings['mail_from_address']);
        }

        if (!empty($settings['mail_from_name'])) {
            Config::set('mail.from.name', $settings['mail_from_name']);
        }
    }
}
