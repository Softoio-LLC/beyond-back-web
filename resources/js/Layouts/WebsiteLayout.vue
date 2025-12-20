<script>
// Global state to track if the app has loaded initially
let isAppLoaded = false;
</script>

<script setup>
import { Head } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted, watch, ref } from 'vue';
import GlobalLoader from '@/Components/GlobalLoader.vue';

const isLoading = ref(false);

const props = defineProps({
    lang: {
        type: String,
        default: 'ar'
    },
    page: {
        type: Object,
        default: () => ({
            title: 'Beyond',
            description: '',
            og_title: '',
            og_description: '',
            og_image: null,
            canonical_url: '',
            hreflang: {}
        })
    },
    seo: {
        type: Object,
        default: () => ({
            canonical_url: '',
            hreflang: {},
            robots: 'index, follow'
        })
    },
    jsonLdSchema: {
        type: Array,
        default: () => []
    }
});

const isRtl = computed(() => props.lang === 'ar');
const direction = computed(() => isRtl.value ? 'rtl' : 'ltr');

// Inject critical CSS to prevent FOUC
const injectCriticalCSS = () => {
    // Check if critical CSS is already injected
    if (document.getElementById('critical-fouc-css')) return;
    
    const criticalCSS = `
        html.loading { visibility: hidden !important; opacity: 0 !important; }
        html.loaded { visibility: visible !important; opacity: 1 !important; transition: opacity 0.2s ease-in; }
        html { animation: fouc-fallback 0s 0.1s forwards; }
        @keyframes fouc-fallback { to { visibility: visible; opacity: 1; } }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.id = 'critical-fouc-css';
    styleElement.textContent = criticalCSS;
    document.head.insertBefore(styleElement, document.head.firstChild);
};

// Computed JSON-LD script content
const jsonLdContent = computed(() => {
    if (!props.jsonLdSchema || props.jsonLdSchema.length === 0) {
        return null;
    }
    // If single schema, return it directly, otherwise wrap in @graph
    if (props.jsonLdSchema.length === 1) {
        return JSON.stringify(props.jsonLdSchema[0]);
    }
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': props.jsonLdSchema.map(schema => {
            const { '@context': context, ...rest } = schema;
            return rest;
        })
    });
});

// Inject JSON-LD schema into head
let jsonLdScriptElement = null;

const injectJsonLd = () => {
    // Remove existing JSON-LD script if any
    if (jsonLdScriptElement) {
        jsonLdScriptElement.remove();
    }
    
    if (jsonLdContent.value) {
        jsonLdScriptElement = document.createElement('script');
        jsonLdScriptElement.type = 'application/ld+json';
        jsonLdScriptElement.textContent = jsonLdContent.value;
        document.head.appendChild(jsonLdScriptElement);
    }
};

// Set HTML attributes on mount
onMounted(async () => {
    // Inject critical CSS first
    injectCriticalCSS();
    
    // Prevent FOUC - add loading class
    document.documentElement.classList.add('loading');
    
    // Only show loader on the very first load of the session
    if (!isAppLoaded) {
        isLoading.value = true;
    }

    document.documentElement.setAttribute('dir', direction.value);
    document.documentElement.setAttribute('lang', props.lang);
    
    // Inject JSON-LD schema
    injectJsonLd();

    // Remove loading class and show content
    requestAnimationFrame(() => {
        document.documentElement.classList.remove('loading');
        document.documentElement.classList.add('loaded');
    });

    // Scripts are now bundled with Vite - no dynamic loading needed
    // Hide loader after a short delay for smooth transition
    if (!isAppLoaded) {
        setTimeout(() => {
            isLoading.value = false;
            isAppLoaded = true;
        }, 200);
    }
});

// Watch for JSON-LD changes
watch(() => props.jsonLdSchema, () => {
    injectJsonLd();
}, { deep: true });

// Update direction when language changes
watch(() => props.lang, () => {
    document.documentElement.setAttribute('dir', direction.value);
    document.documentElement.setAttribute('lang', props.lang);
});

// Cleanup on unmount
onUnmounted(() => {
    if (jsonLdScriptElement) {
        jsonLdScriptElement.remove();
    }
});
</script>

<template>
    <GlobalLoader :loading="isLoading" />
    <Head>
        <title>{{ page.title }}</title>
        <meta name="description" :content="page.description" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Robots -->
        <meta name="robots" :content="seo.robots || 'index, follow'" />
        
        <!-- Canonical URL -->
        <link v-if="seo.canonical_url" rel="canonical" :href="seo.canonical_url" />
        
        <!-- Hreflang Tags for Multi-language SEO -->
        <link v-if="seo.hreflang?.en" rel="alternate" hreflang="en" :href="seo.hreflang.en" />
        <link v-if="seo.hreflang?.ar" rel="alternate" hreflang="ar" :href="seo.hreflang.ar" />
        <link v-if="seo.hreflang?.['x-default']" rel="alternate" hreflang="x-default" :href="seo.hreflang['x-default']" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:title" :content="page.og_title || page.title" />
        <meta property="og:description" :content="page.og_description || page.description" />
        <meta v-if="seo.canonical_url" property="og:url" :content="seo.canonical_url" />
        <meta v-if="page.og_image" property="og:image" :content="page.og_image" />
        <meta property="og:locale" :content="lang === 'ar' ? 'ar_SA' : 'en_US'" />
        <meta property="og:locale:alternate" :content="lang === 'ar' ? 'en_US' : 'ar_SA'" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="page.og_title || page.title" />
        <meta name="twitter:description" :content="page.og_description || page.description" />
        <meta v-if="page.og_image" name="twitter:image" :content="page.og_image" />

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />

        <!-- CSS Files (Swiper and AOS CSS is now bundled via Vite) -->
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/custom-fixes.css" />
    </Head>

    <div class="main-area overflow-hidden">
        <slot />
    </div>
</template>
