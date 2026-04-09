<script setup>
import { ref, computed, watch } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

// Use absolute paths for SSR compatibility
const saFlag = '/assets/img/sa-flag.svg';
const usFlag = '/assets/img/us-flag.svg';

defineOptions({ layout: DashboardLayout });

// Simple debounce utility
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Props from backend
const props = defineProps({
    pages: {
        type: Object,
        default: () => ({ data: [], meta: {}, links: {} }),
    },
    filters: {
        type: Object,
        default: () => ({ search: '', per_page: 20 }),
    },
});

const selectedPages = ref([]);
const selectAll = ref(false);
const searchQuery = ref(props.filters.search || '');
const perPage = ref(props.filters.per_page || 20);
const perPageOptions = [20, 50, 70, 100];

// Computed properties for pagination
const paginatedPages = computed(() => props.pages.data || []);
const currentPage = computed(() => props.pages.current_page || 1);
const lastPage = computed(() => props.pages.last_page || 1);
const totalResults = computed(() => props.pages.total || 0);
const from = computed(() => props.pages.from || 0);
const to = computed(() => props.pages.to || 0);

const paginationInfo = computed(() => {
    if (totalResults.value === 0) return 'No results';
    return `Showing ${from.value} to ${to.value} of ${totalResults.value} results`;
});

const pageNumbers = computed(() => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
    let end = Math.min(lastPage.value, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
});

// Fetch pages with filters
const fetchPages = (page = 1) => {
    router.get(route('pages.index'), {
        page: page,
        per_page: perPage.value,
        search: searchQuery.value,
    }, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
};

// Debounced search
const debouncedSearch = debounce(() => {
    fetchPages(1);
}, 300);

// Watch for search changes
watch(searchQuery, () => {
    debouncedSearch();
});

// Watch for per page changes
watch(perPage, () => {
    fetchPages(1);
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
    if (page >= 1 && page <= lastPage.value) {
        selectedPages.value = [];
        selectAll.value = false;
        fetchPages(page);
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

        <!-- Filters Row -->
        <div class="filters-row">
            <div class="search-box">
                <svg class="search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input 
                    type="text" 
                    v-model="searchQuery"
                    placeholder="Search by name or slug..."
                    class="search-input"
                />
                <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="per-page-select">
                <label for="perPage">Show:</label>
                <select id="perPage" v-model="perPage" class="select-input">
                    <option v-for="option in perPageOptions" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
                <span>per page</span>
            </div>
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
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
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
                    :disabled="currentPage === lastPage"
                    @click="goToPage(currentPage + 1)"
                >
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
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

/* Filters Row */
.filters-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 400px;
}

.search-icon {
    position: absolute;
    left: 12px;
    width: 18px;
    height: 18px;
    color: var(--color-text-muted);
    pointer-events: none;
}

.search-input {
    width: 100%;
    padding: 10px 36px 10px 40px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background-color: var(--color-bg-white);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.search-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 75, 73, 0.1);
}

.search-input::placeholder {
    color: var(--color-text-muted);
}

.clear-search {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
}

.clear-search:hover {
    color: var(--color-text-dark);
}

.clear-search svg {
    width: 14px;
    height: 14px;
}

.per-page-select {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-muted);
}

.select-input {
    padding: 8px 32px 8px 12px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background-color: var(--color-bg-white);
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    transition: border-color var(--transition-fast);
}

.select-input:focus {
    outline: none;
    border-color: var(--color-primary);
}

.select-input:hover {
    border-color: var(--color-primary);
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

.pagination {
    display: flex;
    gap: 4px;
}

.pagination-btn,
.pagination-number {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    border: 1px solid var(--color-border-light);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.pagination-btn:hover:not(:disabled),
.pagination-number:hover:not(.active) {
    background-color: var(--color-secondary);
    border-color: var(--color-primary);
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-number.active {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
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
    
    .filters-row {
        flex-direction: column;
        align-items: stretch;
    }
    
    .search-box {
        max-width: 100%;
    }
    
    .per-page-select {
        justify-content: flex-start;
    }
    
    .pagination-container {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
    }
}
</style>
