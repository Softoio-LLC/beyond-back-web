<script setup>
import { Link, router, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    contact: {
        type: Object,
        required: true,
    },
});

const page = usePage();

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const deleteContact = () => {
    if (confirm('Are you sure you want to delete this contact?')) {
        router.delete(route('contacts.destroy', props.contact.id));
    }
};

const toggleRead = () => {
    router.post(route('contacts.toggle-read', props.contact.id));
};

const replyByEmail = () => {
    window.location.href = `mailto:${props.contact.email}?subject=Re: ${props.contact.subject}`;
};
</script>

<template>
    <div class="contact-show-page">
        <!-- Back Button -->
        <div class="page-navigation">
            <Link :href="route('contacts.index')" class="back-link">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back to Contacts
            </Link>
        </div>

        <div class="contact-container">
            <!-- Header -->
            <div class="contact-header">
                <div class="header-left">
                    <h1 class="contact-subject">{{ contact.subject }}</h1>
                    <span :class="['status-badge', contact.is_read ? 'status-read' : 'status-unread']">
                        {{ contact.is_read ? 'Read' : 'Unread' }}
                    </span>
                </div>
                <div class="header-actions">
                    <button class="btn btn-secondary" @click="toggleRead">
                        <svg v-if="contact.is_read" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H16C16.9167 4 17.6667 4.75 17.6667 5.66667V14.3333C17.6667 15.25 16.9167 16 16 16H4C3.08333 16 2.33333 15.25 2.33333 14.3333V5.66667C2.33333 4.75 3.08333 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6667 5.66797L10 10.8346L2.33333 5.66797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg v-else viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 7.5L10 12.5L17.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.5 7.5V15C2.5 15.4167 2.64583 15.7812 2.9375 16.0938C3.22917 16.4062 3.58333 16.5625 4 16.5625H16C16.4167 16.5625 16.7812 16.4062 17.0938 16.0938C17.4062 15.7812 17.5625 15.4167 17.5625 15V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {{ contact.is_read ? 'Mark Unread' : 'Mark Read' }}
                    </button>
                    <button class="btn btn-primary" @click="replyByEmail">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3333 5L10 10.8333L1.66667 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.66667 5V15C1.66667 15.4420 1.84226 15.8660 2.15482 16.1786C2.46738 16.4911 2.89131 16.6667 3.33333 16.6667H16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1786C18.1577 15.8660 18.3333 15.4420 18.3333 15V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Reply
                    </button>
                    <button class="btn btn-danger" @click="deleteContact">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Delete
                    </button>
                </div>
            </div>

            <!-- Contact Info -->
            <div class="contact-info-card">
                <div class="info-row">
                    <div class="info-item">
                        <span class="info-label">From</span>
                        <span class="info-value info-name">{{ contact.name }}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Email</span>
                        <a :href="`mailto:${contact.email}`" class="info-value info-email">{{ contact.email }}</a>
                    </div>
                    <div v-if="contact.phone" class="info-item">
                        <span class="info-label">Phone</span>
                        <a :href="`tel:${contact.phone}`" class="info-value info-phone">{{ contact.phone }}</a>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Received</span>
                        <span class="info-value info-date">{{ formatDate(contact.created_at) }}</span>
                    </div>
                </div>
            </div>

            <!-- Message -->
            <div class="message-card">
                <h3 class="message-label">Message</h3>
                <div class="message-content">
                    {{ contact.message }}
                </div>
            </div>

            <!-- Read Info -->
            <div v-if="contact.is_read && contact.read_at" class="read-info">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Read on {{ formatDate(contact.read_at) }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-show-page {
    max-width: 900px;
    margin: 0 auto;
}

/* Navigation */
.page-navigation {
    margin-bottom: 24px;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.back-link:hover {
    color: var(--color-primary);
}

.back-link svg {
    width: 18px;
    height: 18px;
}

/* Container */
.contact-container {
    background-color: var(--color-bg-white);
    border-radius: 12px;
    border: 1px solid var(--color-border-light);
    overflow: hidden;
}

/* Header */
.contact-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px;
    border-bottom: 1px solid var(--color-border-light);
    gap: 20px;
    flex-wrap: wrap;
}

.header-left {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex-wrap: wrap;
}

.contact-subject {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: var(--color-text-dark);
    margin: 0;
    line-height: 1.3;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 12px;
    flex-shrink: 0;
}

.status-read {
    background-color: #D1FAE5;
    color: #065F46;
}

.status-unread {
    background-color: #FEE2E2;
    color: #DC2626;
}

.header-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    transition: all var(--transition-fast);
    border: none;
    white-space: nowrap;
}

.btn svg {
    width: 18px;
    height: 18px;
}

.btn-secondary {
    background-color: var(--color-bg-main);
    color: var(--color-text-dark);
    border: 1px solid var(--color-border-light);
}

.btn-secondary:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-primary);
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background-color: #003D3A;
}

.btn-danger {
    background-color: white;
    color: #DC2626;
    border: 1px solid #FECACA;
}

.btn-danger:hover {
    background-color: #FEE2E2;
}

/* Contact Info */
.contact-info-card {
    padding: 24px;
    border-bottom: 1px solid var(--color-border-light);
    background-color: var(--color-bg-main);
}

.info-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.info-label {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.info-value {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
}

.info-name {
    font-weight: 600;
}

.info-email,
.info-phone {
    color: var(--color-primary);
    text-decoration: none;
    transition: opacity var(--transition-fast);
}

.info-email:hover,
.info-phone:hover {
    opacity: 0.8;
}

.info-date {
    color: var(--color-text-muted);
}

/* Message */
.message-card {
    padding: 24px;
}

.message-label {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 12px 0;
}

.message-content {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: var(--color-text-dark);
    line-height: 1.8;
    white-space: pre-wrap;
    word-wrap: break-word;
}

/* Read Info */
.read-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 24px;
    border-top: 1px solid var(--color-border-light);
    background-color: #F0FDF4;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #065F46;
}

.read-info svg {
    width: 16px;
    height: 16px;
}

/* Responsive */
@media (max-width: 768px) {
    .contact-header {
        flex-direction: column;
        align-items: stretch;
    }

    .header-actions {
        justify-content: flex-start;
    }

    .contact-subject {
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    .header-actions {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }
}
</style>
