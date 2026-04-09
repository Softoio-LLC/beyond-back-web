<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import AppImage from '@/Components/AppImage.vue';

const props = defineProps({
    content: {
        type: Object,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    hreflang: {
        type: Object,
        default: () => ({})
    }
});

// Handle offcanvas events to ensure menu stays visible
let offcanvasElement = null;

onMounted(() => {
    // Get offcanvas element and add event listeners
    offcanvasElement = document.getElementById('offcanvasExample');
    if (offcanvasElement) {
        // Ensure offcanvas content stays visible when shown
        offcanvasElement.addEventListener('shown.bs.offcanvas', () => {
            const offcanvasBody = offcanvasElement.querySelector('.offcanvas-body');
            if (offcanvasBody) {
                offcanvasBody.style.opacity = '1';
                offcanvasBody.style.visibility = 'visible';
            }
        });
    }
});

onUnmounted(() => {
    // Cleanup event listeners
    if (offcanvasElement) {
        offcanvasElement.removeEventListener('shown.bs.offcanvas', () => {});
    }
});


// Menu items from section content only (Page Builder is the single source)
const menuItems = computed(() => props.content.menu_items || []);

// Check if RTL
const isRtl = computed(() => props.lang === 'ar');

// Reverse menu items for RTL display
const displayMenuItems = computed(() => {
    if (isRtl.value) {
        return [...menuItems.value].reverse();
    }
    return menuItems.value;
});




// Strip HTML tags from text
const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
};

// Check if URL is internal (should use Inertia navigation)
const isInternalUrl = (url) => {
    if (!url) return false;
    // External URLs or special protocols
    if (url.startsWith('http://') || url.startsWith('https://') || 
        url.startsWith('mailto:') || url.startsWith('tel:') ||
        url.startsWith('javascript:') || url === '#') {
        return false;
    }
    // Hash links for same-page anchors
    if (url.startsWith('#')) return false;
    // Internal paths
    return url.startsWith('/') || !url.includes('://');
};

// Get URL based on current language (supports separate url_en/url_ar)
const getUrl = (item) => {
    if (props.lang === 'ar') {
        return item.url_ar || item.url || '#';
    }
    return item.url_en || item.url || '#';
};

// Helper to get proper image URL
const getImageUrl = (img, defaultPath = '') => {
    if (!img || typeof img !== 'string') return defaultPath;
    if (img.startsWith('http') || img.startsWith('/')) return img;
    return `/storage/${img}`;
};

// Get asset paths from content (from database)
const flagAr = computed(() => getImageUrl(props.content.flag_ar, '/assets/img/flag-1.png'));
const flagEn = computed(() => getImageUrl(props.content.flag_en, '/assets/img/flag-2.png'));
const checkRadio = computed(() => getImageUrl(props.content.check_icon, '/assets/img/check-radio.svg'));

// Header variant (dark = transparent/white, light = solid background)
const variant = computed(() => props.content.variant || 'dark');
const headerClass = computed(() => {
    return variant.value === 'light' ? 'header-area header-light' : 'header-area';
});

// Logo based on variant
const logo = computed(() => {
    // If no custom logo or using default logo, switch based on variant
    if (!props.content.logo || props.content.logo === '/assets/img/logo.png' || props.content.logo === '/assets/img/logo-black.png') {
        return variant.value === 'light' ? '/assets/img/logo-black.png' : '/assets/img/logo.png';
    }
    // Use custom uploaded logo for both variants - handle path
    return getImageUrl(props.content.logo);
});

// Check if logo is a static asset (should load immediately)
const isStaticLogo = computed(() => {
    const logoPath = logo.value;
    return logoPath.startsWith('/assets/') || logoPath.startsWith('assets/');
});

const getLabel = (item) => {
    return props.lang === 'ar' ? item.label_ar : item.label_en;
};

// Home URL based on current language
const homeUrl = computed(() => props.lang === 'ar' ? '/ar' : '/en');

// Language labels from CMS content
const langLabelAr = computed(() => props.content.lang_label_ar || 'عربي');
const langLabelEn = computed(() => props.content.lang_label_en || 'English');

const contactButtonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.contact_button_text_ar : props.content.contact_button_text_en;
    return stripHtml(text);
});

// Handle language switch
const switchLanguage = (newLang) => {
    // Use hreflang URLs if available (these have the correct slugs for each language)
    if (props.hreflang) {
        const targetUrl = newLang === 'ar' ? props.hreflang.ar : props.hreflang.en;
        if (targetUrl) {
            // Convert full URL to path
            try {
                const url = new URL(targetUrl);
                router.visit(url.pathname);
                return;
            } catch {
                // If not a valid URL, use it as path
                router.visit(targetUrl);
                return;
            }
        }
    }
    
    // Fallback to simple prefix switching (for pages without hreflang)
    const currentPath = window.location.pathname;
    let newPath;
    
    if (newLang === 'ar') {
        // Switch to Arabic
        if (currentPath.startsWith('/en')) {
            newPath = currentPath === '/en' ? '/ar' : currentPath.replace('/en', '/ar');
        } else if (!currentPath.startsWith('/ar')) {
            newPath = currentPath === '/' ? '/ar' : `/ar${currentPath}`;
        } else {
            return; // Already on Arabic
        }
    } else {
        // Switch to English
        if (currentPath.startsWith('/ar')) {
            newPath = currentPath === '/ar' ? '/en' : currentPath.replace('/ar', '/en');
        } else if (!currentPath.startsWith('/en')) {
            newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
        } else {
            return; // Already on English
        }
    }
    
    router.visit(newPath);
};
</script>

<template>
    <!-- Mobile Offcanvas Menu -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="offcanvas-menu accordion">
                <ul>
                   
                    <template v-for="(item, index) in displayMenuItems" :key="index">
                        <li v-if="!item.children || item.children.length === 0">
                            <Link v-if="isInternalUrl(getUrl(item))" :href="getUrl(item)">{{ getLabel(item) }}</Link>
                            <a v-else :href="getUrl(item)">{{ getLabel(item) }}</a>
                        </li>
                        <li v-else>
                            <a 
                                href="#" 
                                class="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                :data-bs-target="`#collapse-mobile-${index}`" 
                                aria-expanded="false" 
                                :aria-controls="`collapse-mobile-${index}`"
                            >
                                {{ getLabel(item) }}
                            </a>
                            <div 
                                :id="`collapse-mobile-${index}`" 
                                class="accordion-collapse collapse" 
                                data-bs-parent="#accordionExample"
                            >
                                <ul class="dropdown-menu-list">
                                    <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                        <Link 
                                            v-if="isInternalUrl(getUrl(child))"
                                            class="dropdown-item" 
                                            :class="{ 'pt-0': childIndex === 0, 'border-0 pb-0': childIndex === item.children.length - 1 }"
                                            :href="getUrl(child)"
                                        >
                                            {{ getLabel(child) }}
                                            <span><i class="far fa-chevron-right"></i></span>
                                        </Link>
                                        <a 
                                            v-else
                                            class="dropdown-item" 
                                            :class="{ 'pt-0': childIndex === 0, 'border-0 pb-0': childIndex === item.children.length - 1 }"
                                            :href="getUrl(child)"
                                        >
                                            {{ getLabel(child) }}
                                            <span><i class="far fa-chevron-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
            <Link 
                v-if="isInternalUrl(content.contact_button_url)" 
                :href="content.contact_button_url"
                class="header-contact-btn w-100 justify-content-center d-flex align-items-center mt-40 border"
            >
                {{ contactButtonText }}
                <span><i class="far fa-angle-left"></i></span>
            </Link>
            <a 
                v-else
                :href="content.contact_button_url || '#'"
                class="header-contact-btn w-100 justify-content-center d-flex align-items-center mt-40 border"
            >
                {{ contactButtonText }}
                <span><i class="far fa-angle-left"></i></span>
            </a>
        </div>
    </div>

    <!-- Header -->
    <header :class="headerClass" data-aos="fade-in">
        <div class="container">
            <div class="header-inner-block d-flex align-items-center justify-content-between">
                <div class="header-left-block d-flex align-items-center">
                    <div class="header-logo">
                        <Link :href="homeUrl">
                            <AppImage :src="logo" alt="Logo" loading="lazy" :width="150" :height="60" />
                        </Link>
                    </div>
                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul class="d-flex align-items-center">
                                <template v-for="(item, index) in displayMenuItems" :key="index">
                                    <li v-if="!item.children || item.children.length === 0">
                                        <Link v-if="isInternalUrl(getUrl(item))" :href="getUrl(item)">{{ getLabel(item) }}</Link>
                                        <a v-else :href="getUrl(item)">{{ getLabel(item) }}</a>
                                    </li>
                                    <li v-else>
                                        <a 
                                            href="#" 
                                            class="dropdown-toggle" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            {{ getLabel(item) }}
                                            <span><i class="far fa-chevron-down"></i></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                                <Link 
                                                    v-if="isInternalUrl(getUrl(child))"
                                                    class="dropdown-item" 
                                                    :class="{ 'pt-0': childIndex === 0, 'border-0 pb-0': childIndex === item.children.length - 1 }"
                                                    :href="getUrl(child)"
                                                >
                                                    {{ getLabel(child) }}
                                                    <span><i class="far fa-chevron-right"></i></span>
                                                </Link>
                                                <a 
                                                    v-else
                                                    class="dropdown-item" 
                                                    :class="{ 'pt-0': childIndex === 0, 'border-0 pb-0': childIndex === item.children.length - 1 }"
                                                    :href="getUrl(child)"
                                                >
                                                    {{ getLabel(child) }}
                                                    <span><i class="far fa-chevron-right"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </template>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="header-btns d-flex align-items-center gap-2">
                    <Link 
                        v-if="isInternalUrl(content.contact_button_url)"
                        :href="content.contact_button_url"
                        class="header-contact-btn d-none d-lg-inline-flex align-items-center"
                    >
                        {{ contactButtonText }}
                        <span><i class="far fa-angle-left"></i></span>
                    </Link>
                    <a 
                        v-else
                        :href="content.contact_button_url || '#'"
                        class="header-contact-btn d-none d-lg-inline-flex align-items-center"
                    >
                        {{ contactButtonText }}
                        <span><i class="far fa-angle-left"></i></span>
                    </a>
                    <div class="language-select">
                        <div class="selectorwith_flag">
                            <div class="select-box">
                                <div class="select-box__current" tabindex="1">
                                    <div class="select-box__value">
                                        <input 
                                            class="select-box__input" 
                                            type="radio" 
                                            id="lang-ar" 
                                            value="ar" 
                                            name="language" 
                                            :checked="lang === 'ar'"
                                            @change="switchLanguage('ar')"
                                        />
                                        <p class="select-box__input-text">
                                            <AppImage :src="flagAr" alt="" loading="lazy"  /> {{ langLabelAr }}
                                        </p>
                                    </div>
                                    <div class="select-box__value">
                                        <input 
                                            class="select-box__input" 
                                            type="radio" 
                                            id="lang-en" 
                                            value="en" 
                                            name="language" 
                                            :checked="lang === 'en'"
                                            @change="switchLanguage('en')"
                                        />
                                        <p class="select-box__input-text">
                                            <AppImage :src="flagEn" alt="" loading="lazy"  />{{ langLabelEn }}
                                        </p>
                                    </div>
                                </div>
                                <ul class="select-box__list">
                                    <li :class="{ active: lang === 'ar' }" @click="switchLanguage('ar')">
                                        <label class="select-box__option" for="lang-ar" aria-hidden="true">
                                            <AppImage :src="flagAr" alt="" loading="lazy"  /> {{ langLabelAr }}
                                        </label>
                                        <span v-if="lang === 'ar'" class="active-check-shape">
                                            <i class="fas fa-check-circle"></i>
                                        </span>
                                    </li>
                                    <li :class="{ active: lang === 'en' }" @click="switchLanguage('en')">
                                        <label class="select-box__option" for="lang-en" aria-hidden="true">
                                            <AppImage :src="flagEn" alt="" loading="lazy"  />{{ langLabelEn }}
                                        </label>
                                        <span v-if="lang === 'en'" class="active-check-shape">
                                            <i class="fas fa-check-circle"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a 
                        class="open-menu d-lg-none" 
                        data-bs-toggle="offcanvas" 
                        href="#offcanvasExample" 
                        role="button" 
                        aria-controls="offcanvasExample"
                    >
                        <i class="far fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Light variant styling - only affects menu items */
.header-light .header-inner-block {
    border-bottom-color: rgba(100, 118, 140, 0.2);
}

.header-light .main-menu nav ul li a {
    color: #64768c;
}

.header-light .main-menu nav ul li a:hover {
    color: #000000;
}

/* Check-image positioning for RTL/LTR */
.check-image {
    right: 5px !important;
    left: auto !important;
}

/* RTL arrow positioning - automatically reverses flex items in RTL */
[dir="rtl"] .header-contact-btn {
    flex-direction: row-reverse;
}

[dir="rtl"] .dropdown-toggle {
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
}

[dir="ltr"] .dropdown-toggle {
    display: flex;
    align-items: center;
}

[dir="rtl"] .dropdown-item {
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
}

/* Ensure LTR dropdown items also flex */
[dir="ltr"] .dropdown-item {
    display: flex;
    align-items: center;
}

/* Enhanced Language Switcher UI */
.language-select {
    position: relative;
}

.select-box {
    position: relative;
    min-width: 6.25rem;
}

.select-box__current {
    cursor: pointer;
    position: relative;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.select-box__current:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
}

.select-box__current::after {
    content: '\f078';
    font-family: 'Font Awesome 6 Pro';
    font-weight: 400;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
    font-size: 10px;
    opacity: 0.7;
}

[dir="rtl"] .select-box__current::after {
    right: auto;
    left: 12px;
}

.select-box__current:focus::after,
.select-box__current:hover::after {
    transform: translateY(-50%) rotate(180deg);
}

.select-box__value {
    display: none;
}

.select-box__value:has(input:checked) {
    display: block;
}

.select-box__input {
    display: none;
}

.select-box__input-text {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
}

.select-box__input-text img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.select-box__list {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000;
    padding: 0.5rem;
    list-style: none;
    margin: 0;
    min-width: 8.75rem;
    overflow: visible;
    max-height: none;
}

[dir="rtl"] .select-box__list {
    left: auto;
    right: 0;
}

.select-box__current:focus + .select-box__list,
.select-box__current:hover + .select-box__list,
.select-box__list:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.select-box__list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    gap: 0.5rem;
}

.select-box__list li:hover {
    background: rgba(59, 130, 246, 0.08);
}

.select-box__list li.active {
    background: rgba(59, 130, 246, 0.12);
}

.active-check-shape {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #0d5d56;
    font-size: 16px;
    flex-shrink: 0;
}

.select-box__option {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    cursor: pointer;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    color: #1f2937;
}

.select-box__option img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Light header variant language switcher */
.header-light .select-box__current {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.1);
}

.header-light .select-box__current:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.15);
}

.header-light .select-box__input-text {
    color: #1f2937;
}

@media (max-width: 576px) {
    .header-btns {
        gap: 0.25rem;
    }
}

</style>
