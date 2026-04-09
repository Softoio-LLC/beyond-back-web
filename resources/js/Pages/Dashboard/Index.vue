<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import VisitorChartWidget from '@/Components/Dashboard/VisitorChartWidget.vue';
import ContactsPreviewWidget from '@/Components/Dashboard/ContactsPreviewWidget.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    recentContacts: {
        type: Array,
        default: () => [],
    },
    unreadCount: {
        type: Number,
        default: 0,
    },
    totalContacts: {
        type: Number,
        default: 0,
    },
    analytics: {
        type: Object,
        default: () => ({}),
    },
});

const page = usePage();
const gaConfig = computed(() => page.props.ga || {});
</script>

<template>
    <div class="dashboard-page">
        <div class="page-header">
            <h1 class="page-title">Dashboard</h1>
            <p class="page-subtitle">Welcome back! Here's an overview of your website.</p>
        </div>

        <div class="widgets-grid">
            <!-- Visitor Chart Widget -->


            <!-- Contacts Preview Widget -->
            <div class="widget widget-contacts">
                <ContactsPreviewWidget 
                    :contacts="recentContacts"
                    :unread-count="unreadCount"
                    :total-count="totalContacts"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-page {
    max-width: 100%;
}

.page-header {
    margin-bottom: 32px;
}

.page-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: var(--color-text-dark);
    margin: 0 0 8px 0;
}

.page-subtitle {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: var(--color-text-muted);
    margin: 0;
}

.widgets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
    gap: 24px;
}

.widget {
    background-color: var(--color-bg-white);
    border-radius: 12px;
    border: 1px solid var(--color-border-light);
    overflow: hidden;
    min-height: 400px;
}

@media (max-width: 640px) {
    .page-title {
        font-size: 24px;
    }

    .widgets-grid {
        gap: 16px;
    }
}
</style>
