<script setup>
import { computed } from 'vue';

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

// Strip HTML tags from text
const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
};

const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
const buttonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en;
    return stripHtml(text);
});

// Icon angle based on language direction
const angleIcon = computed(() => props.lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right');

// Image URLs with proper path handling
const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));

// Slides with proper image URLs
const slidesWithUrls = computed(() => {
    if (!props.content.slides || !Array.isArray(props.content.slides)) return [];
    return props.content.slides.map(slide => ({
        ...slide,
        imageUrl: getImageUrl(slide.image)
    }));
});
</script>

<template>
    <!-- Hero Slider Layout (Homepage) -->
    <section 
        class="hero-area position-relative" 
        :style="{ backgroundImage: backgroundImageUrl ? `url('${backgroundImageUrl}')` : '' }"
    >
        <div class="container">
            <div class="hero-inner-block">
                <div class="hero-title">
                    <h5 v-html="subtitle"></h5>
                    <h1 v-html="title"></h1>
                </div>
                <div class="swiper hero-slide-thumb">
                    <div class="swiper-wrapper">
                        <div 
                            v-for="(slide, index) in slidesWithUrls" 
                            :key="index" 
                            class="swiper-slide"
                        >
                            <div class="hero-slide-card">
                                <img 
                                    class="w-100 h-100 object-fit-cover" 
                                    :src="slide.imageUrl" 
                                    :alt="slide.alt || 'Thumb'"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hero-content text-center mt-40">
                    <p v-html="description"></p>
                </div>
                <div class="hero-btn d-flex justify-content-center">
                    <a :href="content.button_url || '#'" class="common-btn d-flex align-items-center">
                        {{ buttonText }}
                        <span><i :class="angleIcon"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
