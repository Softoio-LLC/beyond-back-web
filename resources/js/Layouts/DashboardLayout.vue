<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Link, usePage, router } from '@inertiajs/vue3';

const page = usePage();
const sidebarCollapsed = ref(false);
const userMenuOpen = ref(false);
const currentYear = new Date().getFullYear();

// Get user from page props
const user = computed(() => page.props.auth?.user);
const userInitial = computed(() => {
    if (user.value?.name) {
        return user.value.name.charAt(0).toUpperCase();
    }
    return 'U';
});

const menuItems = [
    {
        name: 'Pages',
        icon: 'pages',
        route: 'pages.index',
    },
];

const isActive = (routeName) => {
    return route().current(routeName);
};

const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
};

const toggleUserMenu = () => {
    userMenuOpen.value = !userMenuOpen.value;
};

const closeUserMenu = (event) => {
    const userMenuElement = document.querySelector('.user-menu');
    if (userMenuElement && !userMenuElement.contains(event.target)) {
        userMenuOpen.value = false;
    }
};

const goToProfile = () => {
    userMenuOpen.value = false;
    router.visit(route('profile.edit'));
};

const logout = () => {
    userMenuOpen.value = false;
    router.post(route('logout'));
};

onMounted(() => {
    document.addEventListener('click', closeUserMenu);
});

onUnmounted(() => {
    document.removeEventListener('click', closeUserMenu);
});
</script>

<template>
    <div class="dashboard-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
            <!-- Logo -->
            <div class="sidebar-header">
                <Link href="/" class="logo-link">
                    <div class="logo">
                        <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#004F4C"/>
                            <path d="M12 14C12 12.8954 12.8954 12 14 12H20C21.1046 12 22 12.8954 22 14V26C22 27.1046 21.1046 28 20 28H14C12.8954 28 12 27.1046 12 26V14Z" fill="white"/>
                            <path d="M18 14C18 12.8954 18.8954 12 20 12H26C27.1046 12 28 12.8954 28 14V20C28 21.1046 27.1046 22 26 22H20C18.8954 22 18 21.1046 18 20V14Z" fill="#E3ECEB"/>
                        </svg>
                        <span v-if="!sidebarCollapsed" class="logo-text">
                            <span class="logo-beyond">BEYOND</span>
                            <span class="logo-tech">TECHNOLOGY</span>
                        </span>
                    </div>
                </Link>
            </div>

            <!-- Navigation -->
            <nav class="sidebar-nav">
                <ul class="nav-list">
                    <li v-for="item in menuItems" :key="item.name" class="nav-item">
                        <Link 
                            :href="route(item.route)" 
                            class="sidebar-menu-item"
                            :class="{ 'active': isActive(item.route) }"
                        >
                            <!-- Pages Icon -->
                            <svg v-if="item.icon === 'pages'" class="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 2V6C11 6.55228 11.4477 7 12 7H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 10H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M7 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span v-if="!sidebarCollapsed" class="menu-text">{{ item.name }}</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <!-- Sidebar Toggle -->
            <button class="sidebar-toggle" @click="toggleSidebar">
                <svg class="toggle-icon" :class="{ 'rotated': sidebarCollapsed }" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L7 10L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </aside>

        <!-- Main Content Area -->
        <div class="main-content" :class="{ 'expanded': sidebarCollapsed }">
            <!-- Top Header -->
            <header class="top-header">
                <div class="header-left">
                    <!-- Breadcrumb or search can go here -->
                </div>
                <div class="header-right">
                    <!-- User profile dropdown -->
                    <div class="user-menu">
                        <button class="user-avatar-btn" @click.stop="toggleUserMenu">
                            <div class="user-avatar">
                                <span>{{ userInitial }}</span>
                            </div>
                            <svg class="dropdown-arrow" :class="{ 'rotated': userMenuOpen }" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        
                        <!-- Dropdown Menu -->
                        <Transition name="dropdown">
                            <div v-if="userMenuOpen" class="user-dropdown">
                                <div class="dropdown-header">
                                    <div class="dropdown-user-avatar">
                                        <span>{{ userInitial }}</span>
                                    </div>
                                    <div class="dropdown-user-info">
                                        <span class="dropdown-user-name">{{ user?.name || 'User' }}</span>
                                        <span class="dropdown-user-email">{{ user?.email || '' }}</span>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <button class="dropdown-item" @click="goToProfile">
                                    <svg class="dropdown-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.75 17.5V15.8333C3.75 14.9493 4.10119 14.1014 4.72631 13.4763C5.35143 12.8512 6.19928 12.5 7.08333 12.5H12.9167C13.8007 12.5 14.6486 12.8512 15.2737 13.4763C15.8988 14.1014 16.25 14.9493 16.25 15.8333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Edit Profile
                                </button>
                                <button class="dropdown-item dropdown-item-danger" @click="logout">
                                    <svg class="dropdown-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.6756 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.6756 3.30072 2.98816 2.98816C3.30072 2.6756 3.72464 2.5 4.16667 2.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.5 10H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        </Transition>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="page-content">
                <slot />
            </main>

            <!-- Footer -->
            <footer class="dashboard-footer">
                <p class="footer-text">{{ currentYear }} © BEYOND TECHNOLOGY</p>
                <p class="footer-text"></p>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.dashboard-wrapper {
    display: flex;
    min-height: 100vh;
    background-color: var(--color-bg-main);
}

/* Sidebar Styles */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;
    background-color: var(--color-bg-sidebar);
    border-right: 1px solid var(--color-border-light);
    display: flex;
    flex-direction: column;
    transition: width var(--transition-normal);
    z-index: 100;
    box-shadow: var(--shadow-sm);
}

.sidebar-collapsed {
    width: var(--sidebar-collapsed-width);
}

.sidebar-header {
    padding: 20px;
    border-bottom: 1px solid var(--color-border-light);
}

.logo-link {
    text-decoration: none;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}

.logo-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.logo-beyond {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--color-primary);
    letter-spacing: 1px;
}

.logo-tech {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 10px;
    color: var(--color-text-muted);
    letter-spacing: 2px;
}

.sidebar-nav {
    flex: 1;
    padding: 20px 12px;
    overflow-y: auto;
}

.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-item {
    margin-bottom: 4px;
}

.menu-text {
    white-space: nowrap;
    overflow: hidden;
}

.sidebar-toggle {
    position: absolute;
    bottom: 20px;
    right: -12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--color-primary);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
    transition: background-color var(--transition-fast);
}

.sidebar-toggle:hover {
    background-color: #003D3A;
}

.toggle-icon {
    width: 14px;
    height: 14px;
    color: white;
    transition: transform var(--transition-normal);
}

.toggle-icon.rotated {
    transform: rotate(180deg);
}

/* Main Content Styles */
.main-content {
    margin-left: var(--sidebar-width);
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: margin-left var(--transition-normal);
}

.main-content.expanded {
    margin-left: var(--sidebar-collapsed-width);
}

.top-header {
    height: var(--header-height);
    background-color: var(--color-bg-white);
    border-bottom: 1px solid var(--color-border-light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    position: sticky;
    top: 0;
    z-index: 50;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 16px;
}

.user-menu {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
}

.user-avatar-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 8px;
    transition: background-color var(--transition-fast);
}

.user-avatar-btn:hover {
    background-color: var(--color-secondary);
}

.user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
}

.dropdown-arrow {
    width: 16px;
    height: 16px;
    color: var(--color-text-muted);
    transition: transform var(--transition-fast);
}

.dropdown-arrow.rotated {
    transform: rotate(180deg);
}

/* User Dropdown Styles */
.user-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 280px;
    background-color: var(--color-bg-white);
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--color-border-light);
    overflow: hidden;
    z-index: 1000;
}

.dropdown-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background-color: var(--color-bg-main);
}

.dropdown-user-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
}

.dropdown-user-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}

.dropdown-user-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-text-dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.dropdown-user-email {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.dropdown-divider {
    height: 1px;
    background-color: var(--color-border-light);
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-dark);
    text-align: left;
    transition: background-color var(--transition-fast);
}

.dropdown-item:hover {
    background-color: var(--color-secondary);
}

.dropdown-item-icon {
    width: 20px;
    height: 20px;
    color: var(--color-text-muted);
    flex-shrink: 0;
}

.dropdown-item:hover .dropdown-item-icon {
    color: var(--color-primary);
}

.dropdown-item-danger {
    color: var(--color-danger);
}

.dropdown-item-danger .dropdown-item-icon {
    color: var(--color-danger);
}

.dropdown-item-danger:hover {
    background-color: #FEE2E2;
}

/* Dropdown Animation */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

.page-content {
    flex: 1;
    padding: 24px;
}

.dashboard-footer {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--color-border-light);
    background-color: var(--color-bg-white);
}

/* Responsive */
@media (max-width: 768px) {
    .sidebar {
        transform: translateX(-100%);
    }
    
    .sidebar.mobile-open {
        transform: translateX(0);
    }
    
    .main-content {
        margin-left: 0;
    }
}
</style>
