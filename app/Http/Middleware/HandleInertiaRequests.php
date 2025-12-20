<?php

namespace App\Http\Middleware;

use App\Models\Contact;
use App\Models\Page;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'ziggy' => fn () => [
                ...(new \Tighten\Ziggy\Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'auth' => [
                'user' => $request->user() ? $request->user()->only(['id', 'name', 'email']) : null,
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
            'slugs' => fn () => $request->user() ? Page::getSlugs() : null,
            // Google Analytics config
            'ga' => [
                'enabled' => config('services.google_analytics.enabled', false),
                'measurementId' => config('services.google_analytics.measurement_id'),
            ],
            // Unread contacts count for navbar badge
            'unreadContactsCount' => fn () => $request->user() ? Contact::getUnreadCount() : 0,
        ];
    }

    /**
     * Get the root view data.
     */
    public function rootView(Request $request): string
    {
        // Pass custom code to the blade view
        $this->shareCustomCode();
        
        return $this->rootView;
    }

    /**
     * Share custom code settings with the view.
     */
    protected function shareCustomCode(): void
    {
        try {
            $customCode = Setting::getCustomCode();
            view()->share('headerCode', $customCode['header_code'] ?? '');
            view()->share('footerCode', $customCode['footer_code'] ?? '');
        } catch (\Exception $e) {
            // Table might not exist yet during migrations
            view()->share('headerCode', '');
            view()->share('footerCode', '');
        }
    }
}
