<script setup>
import { ref, computed } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import saFlag from '@/../assets/sa-flag.svg';
import usFlag from '@/../assets/us-flag.svg';

defineOptions({ layout: DashboardLayout });

// Props from backend
const props = defineProps({
    pages: {
        type: Array,
        default: () => [],
    },
});

const selectedPages = ref([]);
const selectAll = ref(false);
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() => Math.ceil(props.pages.length / itemsPerPage));
const totalResults = computed(() => props.pages.length);

const paginatedPages = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return props.pages.slice(start, end);
});

const paginationInfo = computed(() => {
    if (totalResults.value === 0) return 'No results';
    const start = (currentPage.value - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage.value * itemsPerPage, totalResults.value);
    return `Showing ${start} to ${end} of ${totalResults.value} results`;
});

const pageNumbers = computed(() => {
    const pages = [];
    for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
    }
    return pages;
});

const toggleSelectAll = () => {
    if (selectAll.value) {
        selectedPages.value = paginatedPages.value.map(p => p.id);
    } else {
        selectedPages.value = [];
    }
};

const togglePageSelection = (pageId) => {
    const index = selectedPages.value.indexOf(pageId);
    if (index > -1) {
        selectedPages.value.splice(index, 1);
    } else {
        selectedPages.value.push(pageId);
    }
    selectAll.value = selectedPages.value.length === paginatedPages.value.length;
};

const isPageSelected = (pageId) => {
    return selectedPages.value.includes(pageId);
};

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        selectedPages.value = [];
        selectAll.value = false;
    }
};

const editPage = (pageId, lang) => {
    router.visit(route('pages.edit', pageId));
};

const deletePage = (pageId) => {
    if (confirm('Are you sure you want to delete this page?')) {
        router.delete(route('pages.destroy', pageId), {
            preserveScroll: true,
        });
    }
};

const duplicatePage = (pageId) => {
    router.post(route('pages.duplicate', pageId), {}, {
        preserveScroll: true,
    });
};
</script>

<template>
    <div class="all-pages">
        <!-- Page Header -->
        <div class="page-header">
            <h1 class="page-title">All Pages</h1>
            <Link :href="route('pages.create')" class="btn-primary">
                <svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Add New
            </Link>
        </div>

        <!-- Table Container -->
        <div class="table-container card">
            <table class="data-table">
                <thead>
                    <tr>
                        <th class="checkbox-column">
                            <input 
                                type="checkbox" 
                                class="checkbox-custom" 
                                v-model="selectAll"
                                @change="toggleSelectAll"
                            />
                        </th>
                        <th class="name-column">
                            <div class="th-content sortable">
                                Pages Name
                                <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </th>
                        <th class="date-column">
                            <div class="th-content sortable">
                                Last Edit Date
                                <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </th>
                        <th class="languages-column"></th>
                        <th class="actions-column">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="page in paginatedPages" :key="page.id">
                        <td class="checkbox-column">
                            <input 
                                type="checkbox" 
                                class="checkbox-custom"
                                :checked="isPageSelected(page.id)"
                                @change="togglePageSelection(page.id)"
                            />
                        </td>
                        <td class="name-column">
                            <span class="page-name">{{ page.name }}</span>
                        </td>
                        <td class="date-column">
                            <span class="date-text">{{ page.lastEditDate }}</span>
                        </td>
                        <td class="languages-column">
                            <div class="language-badges">
                                <button 
                                    v-if="page.hasArabic" 
                                    class="badge badge-sa"
                                    @click="editPage(page.id, 'ar')"
                                >
                                    <img :src="saFlag" alt="SA" class="flag-icon" />
                                    Edit
                                </button>
                                <button 
                                    v-if="page.hasEnglish" 
                                    class="badge badge-en"
                                    @click="editPage(page.id, 'en')"
                                >
                                    <img :src="usFlag" alt="US" class="flag-icon" />
                                    Edit
                                </button>
                            </div>
                        </td>
                        <td class="actions-column">
                            <div class="action-buttons">
                                <button class="btn-icon btn-primary-icon" title="Builder" @click="router.visit(route('pages.builder.index', page.id))">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" stroke-width="1.5"/>
                                        <path d="M3 7h14M7 3v14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </button>
                                <button class="btn-icon" title="Edit" @click="editPage(page.id, 'default')">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.166 2.5L17.5 5.83333L6.66667 16.6667H3.33334V13.3333L14.166 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button class="btn-icon" title="Delete" @click="deletePage(page.id)">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.66666 5V3.33333C6.66666 2.89131 6.84225 2.46738 7.15481 2.15482C7.46737 1.84226 7.8913 1.66667 8.33332 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5H15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button class="btn-icon" title="Duplicate" @click="duplicatePage(page.id)">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.16666 12.5H3.33332C2.8913 12.5 2.46737 12.3244 2.15481 12.0118C1.84225 11.6993 1.66666 11.2754 1.66666 10.8333V3.33333C1.66666 2.89131 1.84225 2.46738 2.15481 2.15482C2.46737 1.84226 2.8913 1.66667 3.33332 1.66667H10.8333C11.2753 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
            <p class="pagination-info">{{ paginationInfo }}</p>
            <div class="pagination">
                <button 
                    class="pagination-btn"
                    :disabled="currentPage === 1"
                    @click="goToPage(currentPage - 1)"
                >
                    Previous
                </button>
                <button 
                    v-for="page in pageNumbers" 
                    :key="page"
                    class="pagination-number"
                    :class="{ 'active': page === currentPage }"
                    @click="goToPage(page)"
                >
                    {{ page }}
                </button>
                <button 
                    class="pagination-btn"
                    :disabled="currentPage === totalPages"
                    @click="goToPage(currentPage + 1)"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.all-pages {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-icon-svg {
    width: 16px;
    height: 16px;
}

/* Table specific styles */
.table-container {
    overflow: hidden;
    min-height: 450px; /* Fixed height to keep pagination in place */
    display: flex;
    flex-direction: column;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    flex: 1;
}

.data-table tbody {
    display: block;
    min-height: 384px; /* 6 rows x 64px height */
}

.data-table thead {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.data-table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    height: 64px;
}

.checkbox-column {
    width: 50px;
    text-align: center;
}

.name-column {
    width: 25%;
}

.date-column {
    width: 20%;
}

.languages-column {
    width: 25%;
}

.actions-column {
    width: auto;
    text-align: center;
}

.th-content {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.th-content.sortable {
    cursor: pointer;
}

.th-content.sortable:hover {
    color: var(--color-primary);
}

.sort-icon {
    width: 14px;
    height: 14px;
    opacity: 0.5;
}

.page-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-dark);
}

.date-text {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-text-muted);
}

.language-badges {
    display: flex;
    gap: 8px;
}

.badge {
    cursor: pointer;
    border: none;
    transition: all var(--transition-fast);
}

.badge:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
}

.flag-emoji {
    font-size: 14px;
}

.action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.action-buttons .btn-icon svg {
    width: 18px;
    height: 18px;
}

.btn-primary-icon {
    background-color: var(--color-primary) !important;
    color: #ffffff !important;
}

.btn-primary-icon:hover {
    background-color: #003a38 !important;
}

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
}

.pagination-info {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
    .table-container {
        overflow-x: auto;
    }
    
    .data-table {
        min-width: 800px;
    }
}

@media (max-width: 768px) {
    .page-header {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
    }
    
    .pagination-container {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
    }
}
</style>
