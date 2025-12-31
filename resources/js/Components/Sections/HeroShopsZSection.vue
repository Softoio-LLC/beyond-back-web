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

// Strip HTML tags from text
const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
};

const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
const buttonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en;
    return stripHtml(text);
});
const secondaryButtonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
    return stripHtml(text);
});

// Icon angle based on language direction
const angleIcon = computed(() => props.lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right');
const longArrowIcon = computed(() => props.lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right');

// Image URLs with proper path handling
const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
const iconUrl = computed(() => getImageUrl(props.content.icon));
const heroImageUrl = computed(() => getImageUrl(props.content.hero_image));
const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
const titleColor = computed(() => props.content.title_color || '#00A651');
</script>

<template>
    <!-- Shops Z Hero Section (Green theme - E-commerce Platform) -->
    <section class="common-hero-area pb-4 pb-lg-0 pt-4">
        <AppImage 
            v-if="shapeImageUrl"
            :src="shapeImageUrl" 
            class="hero-shape" 
            alt="" 
            loading="lazy"
            
        />
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        <i v-if="iconUrl">
                            <AppImage 
                                :src="iconUrl" 
                                alt="" 
                                loading="lazy"
                                :width="80"
                                :height="80"
                            />
                        </i>
                        <div class="">
                            <h1 class="text-green fs-56" :style="{ color: titleColor }" v-html="title"></h1>
                            <p v-html="description"></p>
                            <div class="work-card-btns green-btns d-flex align-items-center">
                                <a 
                                    v-if="buttonText"
                                    :href="content.button_url || '#'"
                                >
                                    {{ buttonText }}
                                    <span><i :class="angleIcon"></i></span>
                                </a>
                                <a 
                                    v-if="secondaryButtonText"
                                    :href="content.secondary_button_url || '#'" 
                                    class="secondary-btn"
                                >
                                    {{ secondaryButtonText }}
                                    <span><i :class="longArrowIcon"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img">
                        <AppImage 
                            v-if="heroImageUrl"
                            :src="heroImageUrl" 
                            :alt="title"
                            loading="lazy"
                            :width="700"
                            :height="500"
                        />
                        <AppImage 
                            v-if="heroBgImageUrl"
                            :src="heroBgImageUrl" 
                            class="hero-icon-bg"
                            alt=""
                            loading="lazy"
                            :width="700"
                            :height="500"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
