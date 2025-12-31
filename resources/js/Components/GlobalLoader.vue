<script setup>
import { ref, watch, onMounted } from 'vue';
import logoUrl from '../../assets/logo.svg';

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});

const isVisible = ref(props.loading);

// Helper to check if URL is a preview/builder URL
const isPreviewUrl = (url) => {
    if (!url) return false;
    return url.includes('/builder') || url.includes('/preview') || url.includes('sections.preview');
};

// Watch for prop changes
watch(() => props.loading, (newVal) => {
    // Check if we're in a browser environment (SSR guard)
    if (typeof window !== 'undefined' && !isPreviewUrl(window.location.href)) {
        isVisible.value = newVal;
    } else if (typeof window === 'undefined') {
        // During SSR, always show loading state based on prop
        isVisible.value = newVal;
    } else {
        isVisible.value = false;
    }
}, { immediate: true });

onMounted(() => {
    // Double check on mount (only runs in browser)
    if (typeof window !== 'undefined' && isPreviewUrl(window.location.href)) {
        isVisible.value = false;
    }
});
</script>

<template>
    <Transition name="loader-fade">
        <div v-if="isVisible" class="loader-container">
            <div class="loader-content">
                <div class="bouncing-ball"></div>
                <img :src="logoUrl" alt="Beyond Technology" class="loader-logo" />
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Ensure visibility during loading */
    visibility: visible !important;
    opacity: 1 !important;
}

/* Override any parent visibility rules */
html.loading .loader-container {
    visibility: visible !important;
    opacity: 1 !important;
}

.loader-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.loader-logo {
    height: 36px;
    width: auto;
    opacity: 0;
    animation: fadeIn 0.6s ease-out forwards;
    animation-delay: 0.4s;
}

.bouncing-ball {
    width: 16px;
    height: 16px;
    background-color: #004F4C; /* Brand Teal */
    border-radius: 50%;
    margin-bottom: 12px;
    animation: bounce-squash 0.8s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
}

@keyframes bounce-squash {
    0% { transform: translateY(0) scale(1.3, 0.7); } /* Landed & Squashed */
    10% { transform: translateY(0) scale(0.9, 1.1); } /* Rebound start */
    45% { transform: translateY(-50px) scale(1); } /* Peak */
    85% { transform: translateY(0) scale(0.9, 1.1); } /* Landing contact */
    100% { transform: translateY(0) scale(1.3, 0.7); } /* Squashed again */
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.loader-fade-enter-active,
.loader-fade-leave-active {
    transition: opacity 0.4s ease, visibility 0.4s;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
    opacity: 0;
}
</style>
