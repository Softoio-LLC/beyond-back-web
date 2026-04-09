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
    {
        name: 'Contacts',
        icon: 'contacts',
        route: 'contacts.index',
    },
    {
        name: 'Settings',
        icon: 'settings',
        children: [
            { name: 'Custom Code', route: 'settings.custom-code' },
            { name: 'SEO', route: 'settings.seo' },
            { name: 'Email', route: 'settings.email' },
            { name: 'Storage', route: 'settings.storage' },
        ],
    },
];

const settingsOpen = ref(false);

const isActive = (routeName) => {
    return route().current(routeName);
};

const isSettingsActive = computed(() => {
    return route().current('settings.*');
});

const toggleSettings = () => {
    settingsOpen.value = !settingsOpen.value;
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
                <Link href="/dashboard" class="logo-link">
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
                        <!-- Regular menu item -->
                        <Link
                            v-if="!item.children"
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
                            <!-- Contacts Icon -->
                            <svg v-if="item.icon === 'contacts'" class="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H5.83333C4.94928 12.5 4.10143 12.8512 3.47631 13.4763C2.85119 14.1014 2.5 14.9493 2.5 15.8333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.33333 9.16667C10.1743 9.16667 11.6667 7.67428 11.6667 5.83333C11.6667 3.99238 10.1743 2.5 8.33333 2.5C6.49238 2.5 5 3.99238 5 5.83333C5 7.67428 6.49238 9.16667 8.33333 9.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 17.5V15.8333C17.4993 15.0948 17.2478 14.3773 16.7867 13.7936C16.3256 13.21 15.6816 12.7927 14.9583 12.6083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.4583 2.60834C13.1834 2.79192 13.8294 3.20933 14.2918 3.79389C14.7542 4.37845 15.0062 5.09736 15.0062 5.83751C15.0062 6.57766 14.7542 7.29656 14.2918 7.88113C13.8294 8.46569 13.1834 8.8831 12.4583 9.06668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <!-- Menus Icon -->
                            <svg v-if="item.icon === 'menus'" class="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3 10H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3 15H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span v-if="!sidebarCollapsed" class="menu-text">{{ item.name }}</span>
                        </Link>

                        <!-- Collapsible menu group -->
                        <template v-if="item.children">
                            <button
                                class="sidebar-menu-item"
                                :class="{ 'active': isSettingsActive }"
                                @click="toggleSettings"
                            >
                                <!-- Settings Icon -->
                                <svg v-if="item.icon === 'settings'" class="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.1667 12.5C16.0557 12.7513 16.0226 13.0302 16.0716 13.3005C16.1206 13.5708 16.2495 13.8203 16.4417 14.0167L16.4917 14.0667C16.6466 14.2215 16.7695 14.4053 16.8534 14.6076C16.9373 14.8099 16.9806 15.0268 16.9806 15.2458C16.9806 15.4649 16.9373 15.6817 16.8534 15.8841C16.7695 16.0864 16.6466 16.2702 16.4917 16.425C16.3369 16.5799 16.1531 16.7028 15.9507 16.7867C15.7484 16.8706 15.5316 16.9139 15.3125 16.9139C15.0935 16.9139 14.8766 16.8706 14.6743 16.7867C14.472 16.7028 14.2881 16.5799 14.1333 16.425L14.0833 16.375C13.887 16.1828 13.6375 16.0539 13.3672 16.0049C13.0969 15.9559 12.818 15.989 12.5667 16.1C12.3203 16.2056 12.1124 16.3832 11.9693 16.6099C11.8261 16.8366 11.754 17.1016 11.7625 17.3708V17.5C11.7625 17.942 11.587 18.3659 11.2744 18.6785C10.9618 18.9911 10.5379 19.1667 10.0958 19.1667C9.6538 19.1667 9.22988 18.9911 8.91732 18.6785C8.60476 18.3659 8.42917 17.942 8.42917 17.5V17.425C8.42225 17.1492 8.34048 16.8813 8.18971 16.6537C8.03895 16.4261 7.82565 16.2488 7.57917 16.1417C7.32789 16.0307 7.04897 15.9976 6.77869 16.0466C6.50841 16.0956 6.25888 16.2245 6.0625 16.4167L6.0125 16.4667C5.8577 16.6216 5.67388 16.7445 5.47157 16.8284C5.26926 16.9123 5.05239 16.9556 4.83333 16.9556C4.61428 16.9556 4.39741 16.9123 4.1951 16.8284C3.99279 16.7445 3.80897 16.6216 3.65417 16.4667C3.49927 16.3119 3.37637 16.1281 3.29248 15.9258C3.20859 15.7235 3.16526 15.5066 3.16526 15.2875C3.16526 15.0685 3.20859 14.8516 3.29248 14.6493C3.37637 14.447 3.49927 14.2631 3.65417 14.1083L3.70417 14.0583C3.89636 13.862 4.02528 13.6125 4.07429 13.3422C4.12329 13.0719 4.09017 12.793 3.97917 12.5417C3.87364 12.2953 3.69607 12.0874 3.46936 11.9443C3.24266 11.8011 2.97773 11.729 2.70833 11.7375H2.5C2.05797 11.7375 1.63405 11.562 1.32149 11.2494C1.00893 10.9368 0.833334 10.5129 0.833334 10.0708C0.833334 9.62882 1.00893 9.2049 1.32149 8.89234C1.63405 8.57978 2.05797 8.40418 2.5 8.40418H2.575C2.85084 8.39726 3.11872 8.3155 3.34631 8.16473C3.57391 8.01396 3.75124 7.80066 3.85833 7.55418C3.96934 7.3029 4.00245 7.02398 3.95345 6.7537C3.90445 6.48342 3.77553 6.23389 3.58333 6.03751L3.53333 5.98751C3.37844 5.83271 3.25553 5.64888 3.17164 5.44658C3.08775 5.24427 3.04443 5.0274 3.04443 4.80834C3.04443 4.58928 3.08775 4.37242 3.17164 4.17011C3.25553 3.9678 3.37844 3.78397 3.53333 3.62918C3.68813 3.47428 3.87196 3.35138 4.07427 3.26749C4.27658 3.1836 4.49344 3.14027 4.7125 3.14027C4.93156 3.14027 5.14842 3.1836 5.35074 3.26749C5.55305 3.35138 5.73687 3.47428 5.89167 3.62918L5.94167 3.67918C6.13804 3.87137 6.38757 4.00029 6.65786 4.04929C6.92814 4.0983 7.20706 4.06518 7.45833 3.95418H7.5C7.74637 3.84864 7.95424 3.67107 8.09737 3.44436C8.24049 3.21766 8.31261 2.95273 8.30417 2.68334V2.50001C8.30417 2.05798 8.47976 1.63406 8.79232 1.3215C9.10488 1.00894 9.5288 0.833344 9.97083 0.833344C10.4129 0.833344 10.8368 1.00894 11.1493 1.3215C11.4619 1.63406 11.6375 2.05798 11.6375 2.50001V2.57501C11.629 2.84441 11.7012 3.10934 11.8443 3.33604C11.9874 3.56274 12.1953 3.74031 12.4417 3.84584C12.6929 3.95685 12.9719 3.98997 13.2421 3.94096C13.5124 3.89196 13.762 3.76304 13.9583 3.57084L14.0083 3.52084C14.1631 3.36595 14.347 3.24305 14.5493 3.15916C14.7516 3.07527 14.9685 3.03194 15.1875 3.03194C15.4066 3.03194 15.6234 3.07527 15.8257 3.15916C16.0281 3.24305 16.2119 3.36595 16.3667 3.52084C16.5216 3.67564 16.6445 3.85947 16.7284 4.06178C16.8122 4.26409 16.8556 4.48096 16.8556 4.70001C16.8556 4.91907 16.8122 5.13593 16.7284 5.33824C16.6445 5.54055 16.5216 5.72438 16.3667 5.87918L16.3167 5.92918C16.1245 6.12555 15.9956 6.37508 15.9466 6.64537C15.8976 6.91565 15.9307 7.19457 16.0417 7.44584V7.50001C16.1472 7.74638 16.3248 7.95424 16.5515 8.09737C16.7782 8.24049 17.0431 8.31261 17.3125 8.30418H17.5C17.942 8.30418 18.366 8.47977 18.6785 8.79233C18.9911 9.10489 19.1667 9.52882 19.1667 9.97084C19.1667 10.4129 18.9911 10.8368 18.6785 11.1493C18.366 11.4619 17.942 11.6375 17.5 11.6375H17.425C17.1556 11.629 16.8907 11.7012 16.664 11.8443C16.4373 11.9874 16.2597 12.1953 16.1542 12.4417" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span v-if="!sidebarCollapsed" class="menu-text">{{ item.name }}</span>
                                <svg v-if="!sidebarCollapsed" class="chevron-icon" :class="{ 'chevron-open': settingsOpen || isSettingsActive }" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <Transition name="submenu">
                                <ul v-if="(settingsOpen || isSettingsActive) && !sidebarCollapsed" class="sub-nav-list">
                                    <li v-for="child in item.children" :key="child.name" class="sub-nav-item">
                                        <Link
                                            :href="route(child.route)"
                                            class="sidebar-sub-item"
                                            :class="{ 'active': isActive(child.route) }"
                                        >
                                            {{ child.name }}
                                        </Link>
                                    </li>
                                </ul>
                            </Transition>
                        </template>
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

.chevron-icon {
    width: 14px;
    height: 14px;
    margin-left: auto;
    color: var(--color-text-muted);
    transition: transform var(--transition-fast);
}

.chevron-icon.chevron-open {
    transform: rotate(90deg);
}

.sub-nav-list {
    list-style: none;
    padding: 0 0 0 20px;
    margin: 0;
}

.sub-nav-item {
    margin-bottom: 2px;
}

.sidebar-sub-item {
    display: block;
    padding: 6px 12px;
    font-size: 13px;
    color: var(--color-text-muted);
    text-decoration: none;
    border-radius: 6px;
    transition: all var(--transition-fast);
}

.sidebar-sub-item:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
}

.sidebar-sub-item.active {
    color: var(--color-primary);
    font-weight: 500;
}

.submenu-enter-active,
.submenu-leave-active {
    transition: all 0.2s ease;
    overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
    opacity: 0;
    max-height: 0;
}

.submenu-enter-to,
.submenu-leave-from {
    opacity: 1;
    max-height: 200px;
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
