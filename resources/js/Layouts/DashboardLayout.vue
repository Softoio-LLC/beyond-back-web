<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Link, usePage, router } from '@inertiajs/vue3';

const page = usePage();
const mobileMenuOpen = ref(false);
const userMenuOpen = ref(false);
const settingsMenuOpen = ref(false);
const currentYear = new Date().getFullYear();

// Get user from page props
const user = computed(() => page.props.auth?.user);
const userInitial = computed(() => {
    if (user.value?.name) {
        return user.value.name.charAt(0).toUpperCase();
    }
    return 'U';
});

// Unread contacts count for badge
const unreadContactsCount = computed(() => page.props.unreadContactsCount || 0);

const menuItems = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        route: 'dashboard',
    },
    {
        name: 'Pages',
        icon: 'pages',
        route: 'pages.index',
    },
    {
        name: 'Contacts',
        icon: 'contacts',
        route: 'contacts.index',
        badge: () => unreadContactsCount.value,
    },
];

const settingsItems = [
    {
        name: 'Custom Code',
        route: 'settings.custom-code',
        description: 'Header & footer scripts',
    },
    {
        name: 'Email Settings',
        route: 'settings.email',
        description: 'SMTP & notifications',
    },
];

const isActive = (routeName) => {
    return route().current(routeName);
};

const isSettingsActive = computed(() => {
    return settingsItems.some(item => route().current(item.route));
});

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    if (mobileMenuOpen.value) {
        settingsMenuOpen.value = false;
        userMenuOpen.value = false;
    }
};

const toggleUserMenu = () => {
    userMenuOpen.value = !userMenuOpen.value;
    if (userMenuOpen.value) {
        settingsMenuOpen.value = false;
    }
};

const toggleSettingsMenu = () => {
    settingsMenuOpen.value = !settingsMenuOpen.value;
    if (settingsMenuOpen.value) {
        userMenuOpen.value = false;
    }
};

const closeAllMenus = (event) => {
    const userMenuElement = document.querySelector('.user-menu');
    const settingsMenuElement = document.querySelector('.settings-dropdown-wrapper');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (userMenuElement && !userMenuElement.contains(event.target)) {
        userMenuOpen.value = false;
    }
    if (settingsMenuElement && !settingsMenuElement.contains(event.target)) {
        settingsMenuOpen.value = false;
    }
    if (mobileMenuBtn && !mobileMenuBtn.contains(event.target) && !event.target.closest('.mobile-nav')) {
        mobileMenuOpen.value = false;
    }
};

const goToProfile = () => {
    userMenuOpen.value = false;
    mobileMenuOpen.value = false;
    router.visit(route('profile.edit'));
};

const logout = () => {
    userMenuOpen.value = false;
    mobileMenuOpen.value = false;
    router.post(route('logout'));
};

const navigateTo = (routeName) => {
    mobileMenuOpen.value = false;
    settingsMenuOpen.value = false;
    router.visit(route(routeName));
};

onMounted(() => {
    document.addEventListener('click', closeAllMenus);
});

onUnmounted(() => {
    document.removeEventListener('click', closeAllMenus);
});
</script>

<template>
    <div class="dashboard-wrapper">
        <!-- Top Navbar -->
        <header class="navbar">
            <div class="navbar-container">
                <!-- Logo -->
                <Link href="/" class="logo-link">
                    <div class="logo">
                        <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#004F4C"/>
                            <path d="M12 14C12 12.8954 12.8954 12 14 12H20C21.1046 12 22 12.8954 22 14V26C22 27.1046 21.1046 28 20 28H14C12.8954 28 12 27.1046 12 26V14Z" fill="white"/>
                            <path d="M18 14C18 12.8954 18.8954 12 20 12H26C27.1046 12 28 12.8954 28 14V20C28 21.1046 27.1046 22 26 22H20C18.8954 22 18 21.1046 18 20V14Z" fill="#E3ECEB"/>
                        </svg>
                        <span class="logo-text">
                            <span class="logo-beyond">BEYOND</span>
                            <span class="logo-tech">TECHNOLOGY</span>
                        </span>
                    </div>
                </Link>

                <!-- Desktop Navigation -->
                <nav class="desktop-nav">
                    <ul class="nav-list">
                        <li v-for="item in menuItems" :key="item.name" class="nav-item">
                            <Link 
                                :href="route(item.route)" 
                                class="nav-link"
                                :class="{ 'active': isActive(item.route) }"
                            >
                                <!-- Dashboard Icon -->
                                <svg v-if="item.icon === 'dashboard'" class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 10L10 3L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 8V16C5 16.5523 5.44772 17 6 17H8C8.55228 17 9 16.5523 9 16V12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H14C14.5523 17 15 16.5523 15 16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <!-- Pages Icon -->
                                <svg v-if="item.icon === 'pages'" class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 2V6C11 6.55228 11.4477 7 12 7H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 10H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M7 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <!-- Menus Icon -->
                                <svg v-if="item.icon === 'menus'" class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M3 10H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M3 15H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <!-- Contacts Icon -->
                                <svg v-if="item.icon === 'contacts'" class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 14V16C17 16.5304 16.7893 17.0391 16.4142 17.4142C16.0391 17.7893 15.5304 18 15 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 14C3 12.9391 3.42143 11.9217 4.17157 11.1716C4.92172 10.4214 5.93913 10 7 10H13C14.0609 10 15.0783 10.4214 15.8284 11.1716C16.5786 11.9217 17 12.9391 17 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="nav-text">{{ item.name }}</span>
                                <span v-if="item.badge && item.badge() > 0" class="nav-badge">{{ item.badge() }}</span>
                            </Link>
                        </li>
                        
                        <!-- Settings Dropdown -->
                        <li class="nav-item settings-dropdown-wrapper">
                            <button 
                                class="nav-link settings-trigger"
                                :class="{ 'active': isSettingsActive }"
                                @click.stop="toggleSettingsMenu"
                            >
                                <svg class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.1667 12.5C16.0557 12.7513 16.0226 13.0302 16.0716 13.3005C16.1206 13.5708 16.2495 13.8203 16.4417 14.0167L16.4917 14.0667C16.6466 14.2214 16.7695 14.4053 16.8534 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8534 15.8841C16.7695 16.0864 16.6466 16.2702 16.4917 16.425C16.337 16.5798 16.1531 16.7027 15.9508 16.7866C15.7485 16.8705 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8705 14.6743 16.7866C14.472 16.7027 14.2881 16.5798 14.1333 16.425L14.0833 16.375C13.887 16.1828 13.6375 16.0539 13.3672 16.0049C13.0969 15.9559 12.818 15.989 12.5667 16.1C12.3203 16.2056 12.1124 16.3833 11.9704 16.6094C11.8284 16.8355 11.7588 17.0994 11.7708 17.3667V17.5C11.7708 17.942 11.5952 18.3659 11.2826 18.6785C10.97 18.9911 10.5462 19.1667 10.1042 19.1667C9.66215 19.1667 9.23823 18.9911 8.92564 18.6785C8.61304 18.3659 8.4375 17.942 8.4375 17.5V17.4083C8.42221 17.133 8.33992 16.8655 8.1982 16.6342C8.05649 16.4029 7.85965 16.216 7.62502 16.0917C7.37373 15.9806 7.09481 15.9476 6.82453 15.9966C6.55424 16.0456 6.30476 16.1744 6.10834 16.3667L6.05834 16.4167C5.90358 16.5715 5.71973 16.6944 5.5174 16.7783C5.31507 16.8622 5.09822 16.9055 4.87917 16.9055C4.66011 16.9055 4.44327 16.8622 4.24094 16.7783C4.03861 16.6944 3.85475 16.5715 3.7 16.4167C3.54512 16.2619 3.42225 16.0781 3.33834 15.8757C3.25443 15.6734 3.21113 15.4565 3.21113 15.2375C3.21113 15.0184 3.25443 14.8016 3.33834 14.5993C3.42225 14.3969 3.54512 14.2131 3.7 14.0583L3.75 14.0083C3.94221 13.8119 4.07108 13.5624 4.12009 13.2921C4.16909 13.0218 4.13605 12.743 4.02502 12.4917C3.9194 12.2453 3.74172 12.0373 3.51561 11.8953C3.28951 11.7533 3.02556 11.6838 2.75834 11.6958H2.62502C2.18298 11.6958 1.75906 11.5203 1.44646 11.2077C1.13387 10.8951 0.958344 10.4711 0.958344 10.0292C0.958344 9.58713 1.13387 9.1632 1.44646 8.85061C1.75906 8.53801 2.18298 8.36248 2.62502 8.36248H2.71668C2.99197 8.34719 3.25952 8.2649 3.49081 8.12318C3.7221 7.98147 3.90899 7.78463 4.03334 7.55C4.14438 7.29871 4.17741 7.01979 4.12841 6.7495C4.07941 6.47922 3.95054 6.22974 3.75834 6.03331L3.70834 5.98331C3.55346 5.82856 3.43059 5.6447 3.34668 5.44237C3.26277 5.24004 3.21947 5.02319 3.21947 4.80414C3.21947 4.58509 3.26277 4.36824 3.34668 4.16591C3.43059 3.96358 3.55346 3.77973 3.70834 3.62498C3.8631 3.4701 4.04695 3.34722 4.24928 3.26331C4.45161 3.17941 4.66845 3.1361 4.88751 3.1361C5.10656 3.1361 5.32341 3.17941 5.52574 3.26331C5.72807 3.34722 5.91192 3.4701 6.06668 3.62498L6.11668 3.67498C6.31311 3.86718 6.56258 3.99605 6.83287 4.04505C7.10316 4.09406 7.38208 4.06102 7.63334 3.94998H7.70834C7.95475 3.84437 8.16274 3.66669 8.30474 3.44058C8.44674 3.21447 8.51629 2.95053 8.50418 2.68331V2.49998C8.50418 2.05795 8.67971 1.63402 8.99231 1.32143C9.3049 1.00883 9.72883 0.833313 10.1709 0.833313C10.6129 0.833313 11.0368 1.00883 11.3494 1.32143C11.662 1.63402 11.8375 2.05795 11.8375 2.49998V2.59165C11.8254 2.85886 11.895 3.12281 12.037 3.34892C12.179 3.57502 12.387 3.7527 12.6333 3.85831C12.8846 3.96935 13.1636 4.00238 13.4338 3.95338C13.7041 3.90438 13.9536 3.77551 14.15 3.58331L14.2 3.53331C14.3548 3.37843 14.5386 3.25556 14.7409 3.17165C14.9433 3.08774 15.1601 3.04444 15.3792 3.04444C15.5982 3.04444 15.8151 3.08774 16.0174 3.17165C16.2197 3.25556 16.4036 3.37843 16.5583 3.53331C16.7132 3.68807 16.8361 3.87192 16.92 4.07425C17.0039 4.27658 17.0472 4.49343 17.0472 4.71248C17.0472 4.93153 17.0039 5.14838 16.92 5.35071C16.8361 5.55304 16.7132 5.73689 16.5583 5.89165L16.5083 5.94165C16.3161 6.13807 16.1873 6.38755 16.1383 6.65783C16.0893 6.92812 16.1223 7.20704 16.2333 7.45831V7.53331C16.339 7.77972 16.5166 7.98771 16.7427 8.12971C16.9689 8.27171 17.2328 8.34126 17.5 8.32915H17.6833C18.1254 8.32915 18.5493 8.50467 18.8619 8.81727C19.1745 9.12986 19.35 9.55379 19.35 9.99581C19.35 10.4379 19.1745 10.8618 18.8619 11.1744C18.5493 11.487 18.1254 11.6625 17.6833 11.6625H17.5917C17.3245 11.6746 17.0605 11.7441 16.8344 11.8861C16.6083 12.0281 16.4306 12.2361 16.325 12.4825L16.1667 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="nav-text">Settings</span>
                                <svg class="dropdown-chevron" :class="{ 'rotated': settingsMenuOpen }" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            
                            <!-- Settings Dropdown -->
                            <Transition name="dropdown">
                                <div v-if="settingsMenuOpen" class="settings-dropdown">
                                    <Link 
                                        v-for="item in settingsItems" 
                                        :key="item.route"
                                        :href="route(item.route)"
                                        class="settings-dropdown-item"
                                        :class="{ 'active': isActive(item.route) }"
                                        @click="settingsMenuOpen = false"
                                    >
                                        <span class="settings-item-name">{{ item.name }}</span>
                                        <span class="settings-item-desc">{{ item.description }}</span>
                                    </Link>
                                </div>
                            </Transition>
                        </li>
                    </ul>
                </nav>

                <!-- Right side: User menu -->
                <div class="navbar-right">
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
                        
                        <!-- User Dropdown Menu -->
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

                    <!-- Mobile menu button -->
                    <button class="mobile-menu-btn" @click.stop="toggleMobileMenu">
                        <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <Transition name="mobile-menu">
                <nav v-if="mobileMenuOpen" class="mobile-nav">
                    <ul class="mobile-nav-list">
                        <li v-for="item in menuItems" :key="item.name" class="mobile-nav-item">
                            <button 
                                class="mobile-nav-link"
                                :class="{ 'active': isActive(item.route) }"
                                @click="navigateTo(item.route)"
                            >
                                <span>{{ item.name }}</span>
                                <span v-if="item.badge && item.badge() > 0" class="nav-badge">{{ item.badge() }}</span>
                            </button>
                        </li>
                        
                        <!-- Mobile Settings -->
                        <li class="mobile-nav-item mobile-nav-divider">
                            <span class="mobile-nav-label">Settings</span>
                        </li>
                        <li v-for="item in settingsItems" :key="item.route" class="mobile-nav-item">
                            <button 
                                class="mobile-nav-link"
                                :class="{ 'active': isActive(item.route) }"
                                @click="navigateTo(item.route)"
                            >
                                {{ item.name }}
                            </button>
                        </li>
                        
                        <!-- Mobile User Actions -->
                        <li class="mobile-nav-item mobile-nav-divider">
                            <span class="mobile-nav-label">Account</span>
                        </li>
                        <li class="mobile-nav-item">
                            <button class="mobile-nav-link" @click="goToProfile">
                                Edit Profile
                            </button>
                        </li>
                        <li class="mobile-nav-item">
                            <button class="mobile-nav-link mobile-nav-danger" @click="logout">
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </Transition>
        </header>

        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Page Content -->
            <main class="page-content">
                <slot />
            </main>

            <!-- Footer -->
            <footer class="dashboard-footer">
                <p class="footer-text">{{ currentYear }} © BEYOND TECHNOLOGY</p>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.dashboard-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-bg-main);
}

/* Navbar Styles */
.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--color-bg-white);
    border-bottom: 1px solid var(--color-border-light);
    box-shadow: var(--shadow-sm);
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height, 64px);
    padding: 0 24px;
    max-width: 1600px;
    margin: 0 auto;
}

/* Logo */
.logo-link {
    text-decoration: none;
    flex-shrink: 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
}

.logo-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.logo-beyond {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--color-primary);
    letter-spacing: 1px;
    line-height: 1;
}

.logo-tech {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 8px;
    color: var(--color-text-muted);
    letter-spacing: 1.5px;
    line-height: 1;
}

/* Desktop Navigation */
.desktop-nav {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 0 40px;
}

.nav-list {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-dark);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    white-space: nowrap;
}

.nav-link:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
}

.nav-link.active {
    background-color: var(--color-primary);
    color: white;
}

.nav-link.active .nav-icon {
    color: white;
}

.nav-icon {
    width: 18px;
    height: 18px;
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
}

.nav-link:hover .nav-icon {
    color: var(--color-primary);
}

.nav-text {
    line-height: 1;
}

.nav-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background-color: var(--color-danger, #ef4444);
    color: white;
    font-size: 11px;
    font-weight: 600;
    border-radius: 9px;
    line-height: 1;
}

.nav-link.active .nav-badge {
    background-color: white;
    color: var(--color-primary);
}

/* Settings Dropdown */
.settings-dropdown-wrapper {
    position: relative;
}

.settings-trigger {
    position: relative;
}

.dropdown-chevron {
    width: 14px;
    height: 14px;
    color: var(--color-text-muted);
    transition: transform var(--transition-fast);
    margin-left: 2px;
}

.dropdown-chevron.rotated {
    transform: rotate(180deg);
}

.settings-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    min-width: 220px;
    background-color: var(--color-bg-white);
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--color-border-light);
    overflow: hidden;
    z-index: 1000;
}

.settings-dropdown-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 12px 16px;
    text-decoration: none;
    transition: background-color var(--transition-fast);
}

.settings-dropdown-item:hover {
    background-color: var(--color-secondary);
}

.settings-dropdown-item.active {
    background-color: var(--color-primary);
}

.settings-dropdown-item.active .settings-item-name,
.settings-dropdown-item.active .settings-item-desc {
    color: white;
}

.settings-item-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-dark);
}

.settings-item-desc {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-text-muted);
}

/* Navbar Right */
.navbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}

/* User Menu */
.user-menu {
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

/* User Dropdown */
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
    color: var(--color-danger, #ef4444);
}

.dropdown-item-danger .dropdown-item-icon {
    color: var(--color-danger, #ef4444);
}

.dropdown-item-danger:hover {
    background-color: #FEE2E2;
}

/* Mobile Menu Button */
.mobile-menu-btn {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color var(--transition-fast);
}

.mobile-menu-btn:hover {
    background-color: var(--color-secondary);
}

.mobile-menu-btn svg {
    width: 24px;
    height: 24px;
    color: var(--color-text-dark);
}

/* Mobile Navigation */
.mobile-nav {
    display: none;
    background-color: var(--color-bg-white);
    border-top: 1px solid var(--color-border-light);
    padding: 16px;
}

.mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mobile-nav-item {
    margin-bottom: 4px;
}

.mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: var(--color-text-dark);
    text-align: left;
    border-radius: 8px;
    transition: all var(--transition-fast);
}

.mobile-nav-link:hover {
    background-color: var(--color-secondary);
}

.mobile-nav-link.active {
    background-color: var(--color-primary);
    color: white;
}

.mobile-nav-divider {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--color-border-light);
}

.mobile-nav-label {
    display: block;
    padding: 8px 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.mobile-nav-danger {
    color: var(--color-danger, #ef4444);
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

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    max-height: 0;
}

/* Main Content */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-height, 64px));
}

.page-content {
    flex: 1;
    padding: 24px;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

.dashboard-footer {
    padding: 20px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--color-border-light);
    background-color: var(--color-bg-white);
}

.footer-text {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .desktop-nav {
        display: none;
    }

    .mobile-menu-btn {
        display: flex;
    }

    .mobile-nav {
        display: block;
    }

    .user-menu {
        display: none;
    }
}

@media (max-width: 640px) {
    .navbar-container {
        padding: 0 16px;
    }

    .logo-text {
        display: none;
    }

    .page-content {
        padding: 16px;
    }
}
</style>
