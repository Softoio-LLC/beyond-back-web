<script setup>
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [Number, String],
        default: null
    },
    height: {
        type: [Number, String],
        default: null
    },
    loading: {
        type: String,
        default: 'lazy', // 'lazy' or 'eager'
        validator: (value) => ['lazy', 'eager'].includes(value)
    },
    priority: {
        type: Boolean,
        default: false // If true, sets fetchpriority="high" and loading="eager"
    },
    quality: {
        type: Number,
        default: 80,
        validator: (value) => value >= 1 && value <= 100
    },
    format: {
        type: String,
        default: 'webp',
        validator: (value) => ['webp', 'jpg', 'jpeg', 'png', 'original'].includes(value)
    },
    sizes: {
        type: String,
        default: '100vw' // Default sizes for responsive images
    },
    objectFit: {
        type: String,
        default: 'cover',
        validator: (value) => ['cover', 'contain', 'fill', 'none', 'scale-down'].includes(value)
    },
    class: {
        type: String,
        default: ''
    }
});

// Check if image is a static asset (bypass optimization for static assets)
const isStaticAsset = computed(() => {
    return props.src.startsWith('/assets/') || props.src.startsWith('assets/');
});

// Clean the path (remove /storage/ prefix or domain if present)
const cleanPath = computed(() => {
    let path = props.src;
    
    // Remove domain
    if (path.startsWith('http')) {
        const url = new URL(path);
        path = url.pathname;
    }
    
    // Remove leading slash
    path = path.replace(/^\/+/, '');
    
    // Remove /storage/ prefix if present (for uploaded files)
    if (path.startsWith('storage/')) {
        path = path.replace('storage/', '');
    }
    
    return path;
});

// Generate optimized image URL
const getOptimizedUrl = (width = null, height = null) => {
    const params = new URLSearchParams({
        path: cleanPath.value,
        q: props.quality.toString(),
        f: props.format
    });
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    
    return `/img?${params.toString()}`;
};

// Main optimized source - use direct URL for static assets
const optimizedSrc = computed(() => {
    // Static assets should load directly without optimization
    if (isStaticAsset.value) {
        return props.src;
    }
    return getOptimizedUrl(props.width, props.height);
});

// Generate srcset for responsive images
const srcset = computed(() => {
    // Static assets don't need srcset optimization
    if (isStaticAsset.value) {
        return undefined;
    }
    
    if (!props.width) {
        // If no width specified, generate common breakpoints
        const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
        return widths.map(w => `${getOptimizedUrl(w)} ${w}w`).join(', ');
    }
    
    // If width is specified, generate 1x, 2x versions
    const baseWidth = parseInt(props.width);
    return [
        `${getOptimizedUrl(baseWidth)} 1x`,
        `${getOptimizedUrl(baseWidth * 2)} 2x`
    ].join(', ');
});

// Loading strategy
const loadingStrategy = computed(() => {
    return props.priority ? 'eager' : props.loading;
});

const fetchPriority = computed(() => {
    return props.priority ? 'high' : 'auto';
});

// Calculate aspect ratio for preventing layout shift
const aspectRatio = computed(() => {
    if (props.width && props.height) {
        return `${props.width} / ${props.height}`;
    }
    return 'auto';
});

// Image loaded state - always true to ensure visibility
// Removing fade-in effect to ensure SSR compatibility
const imageLoaded = ref(true);

const onImageLoad = () => {
    imageLoaded.value = true;
};

// Inline styles - always visible for SSR compatibility
const imageStyles = computed(() => ({
    aspectRatio: aspectRatio.value,
    objectFit: props.objectFit
}));
</script>

<template>
    <img
        :src="optimizedSrc"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="loadingStrategy"
        :fetchpriority="fetchPriority"
        :class="class"
        :style="imageStyles"
        decoding="async"
        @load="onImageLoad"
    />
</template>

<style scoped>
img {
    display: block;
    max-width: 100%;
    height: auto;
}
</style>
