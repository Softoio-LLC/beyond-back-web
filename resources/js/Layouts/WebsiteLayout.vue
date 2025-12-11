<script setup>
import { Head } from '@inertiajs/vue3';
import { computed, onMounted } from 'vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'ar'
    },
    page: {
        type: Object,
        default: () => ({
            title: 'Beyond',
            description: ''
        })
    }
});

const isRtl = computed(() => props.lang === 'ar');
const direction = computed(() => isRtl.value ? 'rtl' : 'ltr');

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

// Set HTML attributes and load scripts on mount
onMounted(async () => {
    document.documentElement.setAttribute('dir', direction.value);
    document.documentElement.setAttribute('lang', props.lang);

    // Load scripts in order
    await loadScript('/assets/js/bootstrap.bundle.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    await loadScript('/assets/js/aos.js');
    await loadScript('/assets/js/main.js');
});
</script>

<template>
    <Head>
        <title>{{ page.title }}</title>
        <meta name="description" :content="page.description" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
