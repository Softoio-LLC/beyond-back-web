<script>
// Global state to track if the app has loaded initially
let isAppLoaded = false;
</script>

<script setup>
import { Head } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted, watch, ref } from 'vue';
import GlobalLoader from '@/Components/GlobalLoader.vue';

const isLoading = ref(false);
const isMounted = ref(false);

const props = defineProps({
    lang: {
        type: String,
        default: 'ar'
    },
    page: {
        type: Object,
        default: () => ({
            title: '',
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
    },
    lcpImage: {
        type: String,
        default: null
    }
});

const isRtl = computed(() => props.lang === 'ar');
const direction = computed(() => isRtl.value ? 'rtl' : 'ltr');

onMounted(() => {
    isMounted.value = true;
    
    // Preload critical static assets for better LCP
    const preloadCriticalAssets = () => {
        const assetsToPreload = [
            { href: '/assets/img/logo.png', as: 'image', type: 'image/png' },
            { href: '/assets/img/logo-black.png', as: 'image', type: 'image/png' }
        ];
        
        assetsToPreload.forEach(asset => {
            const existingLink = document.querySelector(`link[href="${asset.href}"]`);
            if (!existingLink) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = asset.href;
                link.as = asset.as;
                if (asset.type) link.type = asset.type;
                document.head.appendChild(link);
            }
        });
    };
    
    preloadCriticalAssets();
});

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
    
    // Don't add loading class on SSR hydration - content is already rendered
    // Only add it on first client-side load when there's no SSR content
    const hasSSRContent = document.querySelector('[data-page]');
    if (!hasSSRContent && !isAppLoaded) {
        document.documentElement.classList.add('loading');
        isLoading.value = true;
    }

    document.documentElement.setAttribute('dir', direction.value);
    document.documentElement.setAttribute('lang', props.lang);
    
    // Inject JSON-LD schema
    injectJsonLd();

    // Ensure content is visible after hydration
    requestAnimationFrame(() => {
        document.documentElement.classList.remove('loading');
        document.documentElement.classList.add('loaded');
    });

    // Hide loader after a short delay for smooth transition
    if (!isAppLoaded) {
        setTimeout(() => {
            isLoading.value = false;
            isAppLoaded = true;
        }, 100); // Reduced from 200ms since SSR is faster
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
    <GlobalLoader v-if="isMounted" :loading="isLoading" />
    <Head>
        <title>{{ page.title || $page.props.siteName || 'Beyond' }}</title>
        <meta name="description" :content="page.description" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Theme Color -->
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        
        <!-- Format Detection -->
        <meta name="format-detection" content="telephone=no" />
        
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
        <meta property="og:site_name" :content="$page.props.siteName || 'Beyond'" />
        <meta property="og:title" :content="page.og_title || page.title" />
        <meta property="og:description" :content="page.og_description || page.description" />
        <meta v-if="seo.canonical_url" property="og:url" :content="seo.canonical_url" />
        <meta v-if="page.og_image" property="og:image" :content="page.og_image" />
        <meta v-if="page.og_image" property="og:image:width" content="1200" />
        <meta v-if="page.og_image" property="og:image:height" content="630" />
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

        <!-- Preconnect to image optimization endpoint -->
        <link rel="preconnect" href="/img" />
        
        <!-- Preload LCP image if provided -->
        <link v-if="lcpImage" rel="preload" :href="lcpImage" as="image" fetchpriority="high" />
        
        <!-- Critical CSS - loaded synchronously (minimal) -->
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        
        <!-- Non-critical CSS - loaded with low priority using media trick -->
        <link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css" media="print" onload="this.media='all'" />
        <link rel="stylesheet" href="/assets/css/all.min.css" media="print" onload="this.media='all'" />
        <link rel="stylesheet" href="/assets/css/responsive.css" media="print" onload="this.media='all'" />
        <link rel="stylesheet" href="/assets/css/custom-fixes.css" media="print" onload="this.media='all'" />
        
        <!-- Fallback for JS-disabled browsers -->
        <noscript>
            <link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css" />
            <link rel="stylesheet" href="/assets/css/all.min.css" />
            <link rel="stylesheet" href="/assets/css/responsive.css" />
            <link rel="stylesheet" href="/assets/css/custom-fixes.css" />
        </noscript>
    </Head>

    <div class="main-area overflow-hidden">
        <slot />
    </div>
</template>
