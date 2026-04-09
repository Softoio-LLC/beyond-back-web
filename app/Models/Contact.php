<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'subject',
        'message',
        'is_read',
        'read_at',
    ];

    protected $casts = [
        'is_read' => 'boolean',
        'read_at' => 'datetime',
    ];

    /**
     * Scope for unread contacts
     */
    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    /**
     * Mark contact as read
     */
    public function markAsRead(): void
    {
        if (! $this->is_read) {
            $this->update([
                'is_read' => true,
                'read_at' => now(),
            ]);
        }
    }

    /**
     * Get recent contacts for dashboard widget
     */
    public static function getRecentForDashboard(int $limit = 5)
    {
        return static::latest()
            ->take($limit)
            ->get(['id', 'name', 'email', 'subject', 'is_read', 'created_at']);
    }

    /**
     * Get unread count
     */
    public static function getUnreadCount(): int
    {
        return static::unread()->count();
    }
}
