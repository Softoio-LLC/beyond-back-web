<script setup>
/**
 * HeroSection - Legacy wrapper component for backward compatibility
 * 
 * This component maintains backward compatibility with existing pages
 * that use the old 'hero' section type key with a 'variant' field.
 * 
 * New implementations should use:
 * - HeroSliderSection for homepage slider
 * - HeroCommonSection for service pages (dark background)
 */
import { computed } from 'vue';
import HeroSliderSection from './HeroSliderSection.vue';
import HeroCommonSection from './HeroCommonSection.vue';

const props = defineProps({
    content: {
        type: Object,
        required: true
    },
    lang: {
        type: String,
        required: true
    }
});

// Determine which component to use based on variant
const variant = computed(() => props.content.variant || 'slider');

// Check if it's a slider variant (homepage)
const isSliderVariant = computed(() => 
    variant.value === 'slider' || variant.value === 'v1'
);

// Check if it's a service/common variant (dark background pages)
const isServiceVariant = computed(() => 
    variant.value === 'service' || variant.value === 'v2' || variant.value === 'common'
);
</script>

<template>
    <!-- Slider variant (Homepage) -->
    <HeroSliderSection 
        v-if="isSliderVariant"
        :content="content"
        :lang="lang"
    />
    
    <!-- Service/Common variant (Dark background - Service Pages) -->
    <HeroCommonSection 
        v-else-if="isServiceVariant"
        :content="content"
        :lang="lang"
    />
    
    <!-- Default fallback to slider -->
    <HeroSliderSection 
        v-else
        :content="content"
        :lang="lang"
    />
</template>
