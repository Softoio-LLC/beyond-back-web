<script setup>
import { computed } from 'vue';
import AppImage from '@/Components/AppImage.vue';

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

// Helper to get proper image URL
const getImageUrl = (img) => {
    if (!img || typeof img !== 'string') return '';
    if (img.startsWith('http') || img.startsWith('/')) return img;
    return `/storage/${img}`;
};

// Process logos with proper image URLs
const logos = computed(() => {
    const rawLogos = props.content.logos || [];
    return rawLogos.map(logo => ({
        ...logo,
        imageUrl: getImageUrl(logo.image)
    }));
});
</script>

<template>
    <section class="brand-area">
        <div class="container">
            <div class="swiper brand-logos-slide">
                <div class="swiper-wrapper">
                    <div 
                        v-for="(logo, index) in logos" 
                        :key="index" 
                        class="logo-items swiper-slide" 
                        data-aos="zoom-in"
                    >
                        <a :href="logo.url || '#'">
                            <AppImage
                                :src="logo.imageUrl"
                                :alt="logo.alt || 'Logo'"
                                :width="200"
                                :height="100"
                                loading="lazy"
                                format="webp"
                                :quality="85"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
