<script setup>
import { ref, computed, watch } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    contacts: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({ search: '', status: 'all' }),
    },
    unreadCount: {
        type: Number,
        default: 0,
    },
});

const page = usePage();
const selectedContacts = ref([]);
const selectAll = ref(false);
const searchQuery = ref(props.filters.search);
const statusFilter = ref(props.filters.status);
const showDeleteModal = ref(false);
const contactToDelete = ref(null);

const flash = computed(() => page.props.flash || {});

const paginationInfo = computed(() => {
    const { from, to, total } = props.contacts;
    if (total === 0) return 'No contacts';
    return `Showing ${from} to ${to} of ${total} results`;
});

const toggleSelectAll = () => {
    if (selectAll.value) {
        selectedContacts.value = props.contacts.data.map(c => c.id);
    } else {
        selectedContacts.value = [];
    }
};

const toggleContactSelection = (contactId) => {
    const index = selectedContacts.value.indexOf(contactId);
    if (index > -1) {
        selectedContacts.value.splice(index, 1);
    } else {
        selectedContacts.value.push(contactId);
    }
    selectAll.value = selectedContacts.value.length === props.contacts.data.length;
};

const isContactSelected = (contactId) => {
    return selectedContacts.value.includes(contactId);
};

// Search with debounce
let searchTimeout;
watch(searchQuery, (value) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        applyFilters();
    }, 300);
});

watch(statusFilter, () => {
    applyFilters();
});

const applyFilters = () => {
    router.get(route('contacts.index'), {
        search: searchQuery.value,
        status: statusFilter.value,
    }, {
        preserveState: true,
        replace: true,
    });
};

const confirmDelete = (contact) => {
    contactToDelete.value = contact;
    showDeleteModal.value = true;
};

const deleteContact = () => {
    if (contactToDelete.value) {
        router.delete(route('contacts.destroy', contactToDelete.value.id), {
            onSuccess: () => {
                showDeleteModal.value = false;
                contactToDelete.value = null;
            },
        });
    }
};

const bulkDelete = () => {
    if (selectedContacts.value.length === 0) return;
    
    if (confirm(`Are you sure you want to delete ${selectedContacts.value.length} contacts?`)) {
        router.post(route('contacts.bulk-destroy'), {
            ids: selectedContacts.value,
        }, {
            onSuccess: () => {
                selectedContacts.value = [];
                selectAll.value = false;
            },
        });
    }
};

const bulkMarkRead = () => {
    if (selectedContacts.value.length === 0) return;
    
    router.post(route('contacts.bulk-mark-read'), {
        ids: selectedContacts.value,
    }, {
        onSuccess: () => {
            selectedContacts.value = [];
            selectAll.value = false;
        },
    });
};

const toggleRead = (contact) => {
    router.post(route('contacts.toggle-read', contact.id));
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const truncate = (text, length = 50) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
};
</script>

<template>
    <div class="contacts-page">
        <!-- Flash Messages -->
        <Transition name="flash">
            <div v-if="flash.success" class="flash-message flash-success">
                {{ flash.success }}
            </div>
        </Transition>

        <div class="page-header">
            <div class="header-left">
                <h1 class="page-title">Contacts</h1>
                <span v-if="unreadCount > 0" class="unread-badge">{{ unreadCount }} unread</span>
            </div>
        </div>

        <!-- Filters & Actions -->
        <div class="filters-bar">
            <div class="filters-left">
                <div class="search-box">
                    <svg class="search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input 
                        v-model="searchQuery"
                        type="text" 
                        placeholder="Search contacts..."
                        class="search-input"
                    />
                </div>

                <select v-model="statusFilter" class="status-filter">
                    <option value="all">All Status</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                </select>
            </div>

            <div v-if="selectedContacts.length > 0" class="bulk-actions">
                <span class="selected-count">{{ selectedContacts.length }} selected</span>
                <button class="btn btn-secondary" @click="bulkMarkRead">
                    Mark as Read
                </button>
                <button class="btn btn-danger" @click="bulkDelete">
                    Delete
                </button>
            </div>
        </div>

        <!-- Contacts Table -->
        <div class="table-container">
            <table v-if="contacts.data.length > 0" class="contacts-table">
                <thead>
                    <tr>
                        <th class="checkbox-cell">
                            <input 
                                type="checkbox" 
                                v-model="selectAll" 
                                @change="toggleSelectAll"
                                class="checkbox"
                            />
                        </th>
                        <th>Contact</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th class="actions-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="contact in contacts.data" 
                        :key="contact.id"
                        :class="{ 'unread-row': !contact.is_read }"
                    >
                        <td class="checkbox-cell">
                            <input 
                                type="checkbox" 
                                :checked="isContactSelected(contact.id)"
                                @change="toggleContactSelection(contact.id)"
                                class="checkbox"
                            />
                        </td>
                        <td class="contact-cell">
                            <div class="contact-info">
                                <span class="contact-name">{{ contact.name }}</span>
                                <span class="contact-email">{{ contact.email }}</span>
                            </div>
                        </td>
                        <td class="subject-cell">
                            <Link :href="route('contacts.show', contact.id)" class="subject-link">
                                {{ truncate(contact.subject, 40) }}
                            </Link>
                        </td>
                        <td class="date-cell">{{ formatDate(contact.created_at) }}</td>
                        <td class="status-cell">
                            <span :class="['status-badge', contact.is_read ? 'status-read' : 'status-unread']">
                                {{ contact.is_read ? 'Read' : 'Unread' }}
                            </span>
                        </td>
                        <td class="actions-cell">
                            <div class="action-buttons">
                                <Link 
                                    :href="route('contacts.show', contact.id)" 
                                    class="action-btn action-view"
                                    title="View"
                                >
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4.37891C3.75 4.37891 1.25 10.0039 1.25 10.0039C1.25 10.0039 3.75 15.6289 10 15.6289C16.25 15.6289 18.75 10.0039 18.75 10.0039C18.75 10.0039 16.25 4.37891 10 4.37891Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Link>
                                <button 
                                    class="action-btn action-toggle"
                                    :title="contact.is_read ? 'Mark as Unread' : 'Mark as Read'"
                                    @click="toggleRead(contact)"
                                >
                                    <svg v-if="contact.is_read" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H16C16.9167 4 17.6667 4.75 17.6667 5.66667V14.3333C17.6667 15.25 16.9167 16 16 16H4C3.08333 16 2.33333 15.25 2.33333 14.3333V5.66667C2.33333 4.75 3.08333 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.6667 5.66797L10 10.8346L2.33333 5.66797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg v-else viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 7.5L10 12.5L17.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.5 7.5V15C2.5 15.4167 2.64583 15.7812 2.9375 16.0938C3.22917 16.4062 3.58333 16.5625 4 16.5625H16C16.4167 16.5625 16.7812 16.4062 17.0938 16.0938C17.4062 15.7812 17.5625 15.4167 17.5625 15V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button 
                                    class="action-btn action-delete"
                                    title="Delete"
                                    @click="confirmDelete(contact)"
                                >
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
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
                <h3 class="empty-title">No contacts found</h3>
                <p class="empty-text">
                    {{ filters.search || filters.status !== 'all' ? 'Try adjusting your filters.' : 'Contact form submissions will appear here.' }}
                </p>
            </div>
        </div>

        <!-- Pagination -->
        <div v-if="contacts.data.length > 0" class="pagination-container">
            <div class="pagination-info">{{ paginationInfo }}</div>
            <div class="pagination">
                <Link
                    v-for="link in contacts.links"
                    :key="link.label"
                    :href="link.url || '#'"
                    class="pagination-link"
                    :class="{ 
                        'active': link.active, 
                        'disabled': !link.url, 
                        'arrow': link.label.toLowerCase().includes('previous') || link.label.toLowerCase().includes('next') 
                    }"
                    :preserveState="true"
                >
                    <template v-if="link.label.toLowerCase().includes('previous')">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-icon">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </template>
                    <template v-else-if="link.label.toLowerCase().includes('next')">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-icon">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </template>
                    <template v-else>
                        <span v-html="link.label"></span>
                    </template>
                </Link>
            </div>
        </div>

        <!-- Delete Modal -->
        <Transition name="modal">
            <div v-if="showDeleteModal" class="modal-overlay" @click.self="showDeleteModal = false">
                <div class="modal">
                    <div class="modal-header">
                        <h3 class="modal-title">Delete Contact</h3>
                        <button class="modal-close" @click="showDeleteModal = false">
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this contact from <strong>{{ contactToDelete?.email }}</strong>? This action cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" @click="showDeleteModal = false">Cancel</button>
                        <button class="btn btn-danger" @click="deleteContact">Delete</button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.contacts-page {
    max-width: 100%;
}

/* Flash Messages */
.flash-message {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
}

.flash-success {
    background-color: #D1FAE5;
    color: #065F46;
    border: 1px solid #A7F3D0;
}

.flash-enter-active,
.flash-leave-active {
    transition: all 0.3s ease;
}

.flash-enter-from,
.flash-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Header */
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.page-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: var(--color-text-dark);
    margin: 0;
}

.unread-badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    background-color: #FEE2E2;
    color: #DC2626;
    font-size: 13px;
    font-weight: 500;
    border-radius: 16px;
}

/* Filters */
.filters-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 16px;
    flex-wrap: wrap;
}

.filters-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.search-box {
    position: relative;
    width: 280px;
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: var(--color-text-muted);
}

.search-input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border: 1px solid var(--color-border-light);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.search-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 79, 76, 0.1);
}

.status-filter {
    padding: 10px 32px 10px 12px;
    border: 1px solid var(--color-border-light);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
}

.status-filter:focus {
    outline: none;
    border-color: var(--color-primary);
}

/* Bulk Actions */
.bulk-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.selected-count {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-muted);
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    transition: all var(--transition-fast);
    border: none;
}

.btn-secondary {
    background-color: var(--color-bg-main);
    color: var(--color-text-dark);
    border: 1px solid var(--color-border-light);
}

.btn-secondary:hover {
    background-color: var(--color-secondary);
}

.btn-danger {
    background-color: #DC2626;
    color: white;
}

.btn-danger:hover {
    background-color: #B91C1C;
}

/* Table */
.table-container {
    background-color: var(--color-bg-white);
    border-radius: 12px;
    border: 1px solid var(--color-border-light);
    overflow: hidden;
}

.contacts-table {
    width: 100%;
    border-collapse: collapse;
}

.contacts-table th {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
    padding: 16px;
    background-color: var(--color-bg-main);
    border-bottom: 1px solid var(--color-border-light);
}

.contacts-table td {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    padding: 16px;
    border-bottom: 1px solid var(--color-border-light);
    vertical-align: middle;
}

.contacts-table tr:last-child td {
    border-bottom: none;
}

.contacts-table tr:hover {
    background-color: var(--color-bg-main);
}

.unread-row {
    background-color: #FEFCE8;
}

.unread-row:hover {
    background-color: #FEF9C3;
}

.checkbox-cell {
    width: 50px;
}

.checkbox {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: var(--color-primary);
}

.contact-cell {
    min-width: 200px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.contact-name {
    font-weight: 500;
    color: var(--color-text-dark);
}

.contact-email {
    font-size: 13px;
    color: var(--color-text-muted);
}

.subject-cell {
    min-width: 200px;
}

.subject-link {
    color: var(--color-text-dark);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.subject-link:hover {
    color: var(--color-primary);
}

.date-cell {
    white-space: nowrap;
    color: var(--color-text-muted);
    font-size: 13px;
}

.status-cell {
    white-space: nowrap;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 12px;
}

.status-read {
    background-color: #D1FAE5;
    color: #065F46;
}

.status-unread {
    background-color: #FEE2E2;
    color: #DC2626;
}

.actions-header {
    text-align: right;
}

.actions-cell {
    width: 120px;
}

.action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    background-color: transparent;
    text-decoration: none;
}

.action-btn svg {
    width: 18px;
    height: 18px;
}

.action-view {
    color: var(--color-primary);
}

.action-view:hover {
    background-color: var(--color-secondary);
}

.action-toggle {
    color: #6B7280;
}

.action-toggle:hover {
    background-color: #F3F4F6;
    color: var(--color-text-dark);
}

.action-delete {
    color: #DC2626;
}

.action-delete:hover {
    background-color: #FEE2E2;
}

/* Empty State */
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
}

.empty-icon {
    width: 64px;
    height: 64px;
    color: var(--color-text-muted);
    margin-bottom: 20px;
    opacity: 0.5;
}

.empty-icon svg {
    width: 100%;
    height: 100%;
}

.empty-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text-dark);
    margin: 0 0 8px 0;
}

.empty-text {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0;
}

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0 4px;
}

.pagination-info {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-muted);
}

.pagination {
    display: flex;
    gap: 4px;
}

.pagination-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 12px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    text-decoration: none;
    background-color: var(--color-bg-white);
    border: 1px solid var(--color-border-light);
    transition: all var(--transition-fast);
}

.pagination-link:hover:not(.disabled):not(.active) {
    background-color: var(--color-secondary);
    border-color: var(--color-primary);
}

.pagination-link.active {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
}

.pagination-link.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.arrow-icon {
    width: 20px;
    height: 20px;
}

/* Modal */
.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.modal {
    background-color: var(--color-bg-white);
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
    box-shadow: var(--shadow-lg);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid var(--color-border-light);
}

.modal-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text-dark);
    margin: 0;
}

.modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--color-text-muted);
    transition: all var(--transition-fast);
}

.modal-close:hover {
    background-color: var(--color-bg-main);
    color: var(--color-text-dark);
}

.modal-close svg {
    width: 20px;
    height: 20px;
}

.modal-body {
    padding: 20px;
}

.modal-body p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    line-height: 1.6;
    margin: 0;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 20px;
    border-top: 1px solid var(--color-border-light);
}

.modal-enter-active,
.modal-leave-active {
    transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
    transform: scale(0.95);
}

/* Responsive */
@media (max-width: 1024px) {
    .subject-cell {
        display: none;
    }
}

@media (max-width: 768px) {
    .filters-bar {
        flex-direction: column;
        align-items: stretch;
    }

    .filters-left {
        flex-direction: column;
    }

    .search-box {
        width: 100%;
    }

    .status-filter {
        width: 100%;
    }

    .bulk-actions {
        justify-content: flex-end;
    }

    .date-cell {
        display: none;
    }

    .pagination-container {
        flex-direction: column;
        gap: 16px;
    }
}

@media (max-width: 640px) {
    .page-title {
        font-size: 24px;
    }

    .status-cell {
        display: none;
    }
}
</style>
