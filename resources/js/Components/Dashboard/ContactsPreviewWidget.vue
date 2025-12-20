<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    contacts: {
        type: Array,
        default: () => [],
    },
    unreadCount: {
        type: Number,
        default: 0,
    },
    totalCount: {
        type: Number,
        default: 0,
    },
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        if (diffHours === 0) {
            const diffMins = Math.floor(diffTime / (1000 * 60));
            return diffMins <= 1 ? 'Just now' : `${diffMins}m ago`;
        }
        return `${diffHours}h ago`;
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else if (diffDays < 7) {
        return `${diffDays}d ago`;
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
};

const truncate = (text, length = 40) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
};
</script>

<template>
    <div class="contacts-preview-widget">
        <div class="widget-header">
            <div class="widget-title-section">
                <h3 class="widget-title">Recent Contacts</h3>
                <span v-if="unreadCount > 0" class="unread-badge">{{ unreadCount }} unread</span>
            </div>
            <Link :href="route('contacts.index')" class="view-all-link">
                View All
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
        </div>

        <!-- Stats -->
        <div class="contacts-stats">
            <div class="stat-item">
                <div class="stat-value">{{ totalCount }}</div>
                <div class="stat-label">Total Contacts</div>
            </div>
            <div class="stat-item">
                <div class="stat-value stat-unread">{{ unreadCount }}</div>
                <div class="stat-label">Unread</div>
            </div>
        </div>

        <!-- Contacts Table -->
        <div class="contacts-table-container">
            <table v-if="contacts.length > 0" class="contacts-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="contact in contacts" 
                        :key="contact.id"
                        :class="{ 'unread': !contact.is_read }"
                    >
                        <td class="email-cell">
                            <div class="email-wrapper">
                                <span v-if="!contact.is_read" class="unread-dot"></span>
                                <span class="email-text">{{ contact.email }}</span>
                            </div>
                        </td>
                        <td class="subject-cell">{{ truncate(contact.subject, 30) }}</td>
                        <td class="date-cell">{{ formatDate(contact.created_at) }}</td>
                        <td class="action-cell">
                            <Link 
                                :href="route('contacts.show', contact.id)" 
                                class="view-link"
                            >
                                View
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Empty State -->
            <div v-else class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p class="empty-title">No contacts yet</p>
                <p class="empty-text">Contact form submissions will appear here.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contacts-preview-widget {
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.widget-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.widget-title-section {
    display: flex;
    align-items: center;
    gap: 12px;
}

.widget-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text-dark);
    margin: 0;
}

.unread-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background-color: #FEE2E2;
    color: #DC2626;
    font-size: 11px;
    font-weight: 500;
    border-radius: 12px;
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-primary);
    text-decoration: none;
    transition: opacity var(--transition-fast);
}

.view-all-link:hover {
    opacity: 0.8;
}

.view-all-link svg {
    width: 16px;
    height: 16px;
}

/* Stats */
.contacts-stats {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
}

.stat-item {
    flex: 1;
    padding: 16px;
    background-color: var(--color-bg-main);
    border-radius: 8px;
    text-align: center;
}

.stat-value {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: var(--color-text-dark);
    margin-bottom: 4px;
}

.stat-unread {
    color: #DC2626;
}

.stat-label {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: var(--color-text-muted);
}

/* Table */
.contacts-table-container {
    flex: 1;
    overflow: auto;
}

.contacts-table {
    width: 100%;
    border-collapse: collapse;
}

.contacts-table th {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
    padding: 12px 8px;
    border-bottom: 1px solid var(--color-border-light);
}

.contacts-table td {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-dark);
    padding: 12px 8px;
    border-bottom: 1px solid var(--color-border-light);
}

.contacts-table tr:last-child td {
    border-bottom: none;
}

.contacts-table tr.unread td {
    font-weight: 500;
}

.email-cell {
    max-width: 180px;
}

.email-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.unread-dot {
    width: 8px;
    height: 8px;
    background-color: var(--color-primary);
    border-radius: 50%;
    flex-shrink: 0;
}

.email-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.subject-cell {
    color: var(--color-text-muted);
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.date-cell {
    color: var(--color-text-muted);
    font-size: 12px;
    white-space: nowrap;
}

.action-cell {
    text-align: right;
}

.view-link {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-primary);
    text-decoration: none;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color var(--transition-fast);
}

.view-link:hover {
    background-color: var(--color-secondary);
}

/* Empty State */
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    text-align: center;
}

.empty-icon {
    width: 48px;
    height: 48px;
    color: var(--color-text-muted);
    margin-bottom: 16px;
    opacity: 0.5;
}

.empty-icon svg {
    width: 100%;
    height: 100%;
}

.empty-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: var(--color-text-dark);
    margin: 0 0 4px 0;
}

.empty-text {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0;
}

@media (max-width: 640px) {
    .contacts-stats {
        flex-direction: column;
    }

    .stat-value {
        font-size: 20px;
    }
}
</style>
