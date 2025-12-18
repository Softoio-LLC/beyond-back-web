<script setup>
/**
 * LazyImage component with native lazy loading and responsive support
 * Uses native loading="lazy" for images below the fold
 * Supports srcset for responsive images
 */
import { computed } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    },
    // Responsive image sizes (from MediaController)
    sizes: {
        type: String,
        default: null
    },
    // Whether to lazy load (default true)
    lazy: {
        type: Boolean,
        default: true
    },
    // CSS class
    class: {
        type: String,
        default: ''
    },
    // Width attribute (for layout stability)
    width: {
        type: [String, Number],
        default: null
    },
    // Height attribute (for layout stability)
    height: {
        type: [String, Number],
        default: null
    },
    // Object fit style
    objectFit: {
        type: String,
        default: null
    }
});

// Build srcset for responsive images
// Assumes images are stored with size suffixes: image-thumbnail.jpg, image-small.jpg, etc.
const srcset = computed(() => {
    if (!props.src || !props.sizes) return null;
    
    // If the image is from storage (uploaded images), try to generate srcset
    if (props.src.includes('/storage/sections/')) {
        const basePath = props.src.replace(/\.[^.]+$/, '');
        const extension = props.src.split('.').pop();
        
        return [
            `${basePath}-small.${extension} 300w`,
            `${basePath}-medium.${extension} 600w`,
            `${basePath}-large.${extension} 1200w`,
            `${props.src} 1920w`
        ].join(', ');
    }
    
    return null;
});

const loadingAttr = computed(() => props.lazy ? 'lazy' : 'eager');

const imgStyle = computed(() => {
    if (props.objectFit) {
        return { objectFit: props.objectFit };
    }
    return {};
});
</script>

<template>
    <img 
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        :class="$props.class"
        :loading="loadingAttr"
        :width="width"
        :height="height"
        :style="imgStyle"
        decoding="async"
    />
</template>
