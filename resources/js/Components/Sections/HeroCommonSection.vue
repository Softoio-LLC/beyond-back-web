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
const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
const iconUrl = computed(() => getImageUrl(props.content.icon));
const heroImageUrl = computed(() => getImageUrl(props.content.hero_image || props.content.side_image));
const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));

// Background style
const bgStyle = computed(() => {
    if (backgroundImageUrl.value) {
        return { backgroundImage: `url(${backgroundImageUrl.value})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }
    return {};
});
</script>

<template>
    <!-- Hero Common Layout (Dark background - Service Pages) - matches template hero-area v2 -->
    <section class="hero-area v2 position-relative text-white pb-1 pb-lg-1" :style="bgStyle">
        <AppImage 
            v-if="shapeImageUrl"
            :src="shapeImageUrl" 
            class="hero-shape" 
            alt="" 
            loading="lazy"
            
        />
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-4 align-items-center">
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
                            <h1 class="text-white " v-html="title"></h1> <!-- fs-56 -->
                            <p v-html="description"></p>
                            <div class="d-flex align-items-center gap-3">
                                <a 
                                    v-if="buttonText"
                                    :href="content.button_url || '#'" 
                                    class="common-btn d-flex align-items-center w-max"
                                >
                                    {{ buttonText }}
                                    <span><i :class="angleIcon"></i></span>
                                </a>
                                <a 
                                    v-if="secondaryButtonText"
                                    :href="content.secondary_button_url || '#'" 
                                    class="secondary-btn text-white"
                                >
                                    {{ secondaryButtonText }}
                                    <span><i :class="longArrowIcon"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="hero__img">
                        <AppImage 
                            v-if="heroImageUrl"
                            :src="heroImageUrl" 
                            :alt="title"
                            loading="lazy"
                            :width="600"
                            :height="500"
                        />
                        <AppImage 
                            v-if="heroBgImageUrl"
                            :src="heroBgImageUrl" 
                            class="hero-icon-bg"
                            alt=""
                            loading="lazy"
                            :width="600"
                            :height="500"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.hero-area.v2 {
    background-color: #012d37;
    padding-top: clamp(2.5rem, 2rem + 4vw, 6.25rem);
    padding-bottom: clamp(2.5rem, 2rem + 4vw, 6.25rem);
}
</style>