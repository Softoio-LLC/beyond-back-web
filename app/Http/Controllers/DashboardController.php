<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index(): Response
    {
        // Get recent contacts for widget
        $recentContacts = Contact::getRecentForDashboard(5);
        $unreadCount = Contact::getUnreadCount();
        $totalContacts = Contact::count();

        // Analytics data - placeholder or real based on config
        $gaEnabled = config('services.google_analytics.enabled', false);
        $gaMeasurementId = config('services.google_analytics.measurement_id');

        // Placeholder analytics data for the chart
        $analyticsData = [
            'enabled' => $gaEnabled,
            'measurement_id' => $gaMeasurementId,
            'placeholder' => ! $gaEnabled,
            // Placeholder data for chart visualization
            'chart_data' => [
                'labels' => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                'visitors' => [120, 190, 150, 220, 180, 250, 200],
                'pageviews' => [340, 420, 380, 520, 450, 580, 490],
            ],
            'summary' => [
                'total_visitors' => 1310,
                'total_pageviews' => 3180,
                'avg_session_duration' => '2m 34s',
                'bounce_rate' => '42%',
            ],
        ];

        return Inertia::render('Dashboard/Index', [
            'recentContacts' => $recentContacts,
            'unreadCount' => $unreadCount,
            'totalContacts' => $totalContacts,
            'analytics' => $analyticsData,
        ]);
    }
}
