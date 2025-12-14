<script setup>
import { Head } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted, watch } from 'vue';

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

// Load external scripts
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
};

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

// Set HTML attributes and load scripts on mount
onMounted(async () => {
    document.documentElement.setAttribute('dir', direction.value);
    document.documentElement.setAttribute('lang', props.lang);
    
    // Inject JSON-LD schema
    injectJsonLd();

    // Load scripts in order
    await loadScript('/assets/js/bootstrap.bundle.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    await loadScript('/assets/js/aos.js');
    await loadScript('/assets/js/main.js');
});

// Watch for JSON-LD changes
watch(() => props.jsonLdSchema, () => {
    injectJsonLd();
}, { deep: true });

// Cleanup on unmount
onUnmounted(() => {
    if (jsonLdScriptElement) {
        jsonLdScriptElement.remove();
    }
});
</script>

<template>
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

        <!-- CSS Files -->
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
    </Head>

    <div class="main-area overflow-hidden">
        <slot />
    </div>
</template>
