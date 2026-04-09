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

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const buttonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en;
    return stripHtml(text);
});

// Process gallery images with proper URLs
const images = computed(() => {
    const rawImages = props.content.images || [];
    return rawImages.map(item => ({
        ...item,
        imageUrl: getImageUrl(item.image)
    }));
});

const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
</script>

<template>
    <section class="gallery-area overflow-hidden">
        <div class="container">
            <div class="gallery-inner-block position-relative z-1">
                <div v-if="shapeImageUrl" class="gallery-shape position-absolute z-n1">
                    <AppImage
                        :src="shapeImageUrl"
                        alt="Shape"
                        loading="lazy"
                        :width="800"
                        :height="600"
                        class="w-100 h-100 object-fit-cover"
                        format="webp"
                        :quality="80"
                    />
                </div>
                <div class="common-title text-center" data-aos="fade-up">
                    <h3 v-html="sectionTitle"></h3>
                    <p v-html="subtitle"></p>
                </div>
                <div class="gallery-wrapper">
                    <div class="row">
                        <div 
                            v-for="(item, index) in images" 
                            :key="index"
                            class="col-sm-12 col-md-6 col-lg-4" 
                            data-aos="zoom-in"
                        >
                            <div class="gallery-thumb position-relative">
                                <AppImage
                                    :src="item.imageUrl"
                                    alt="Thumb"
                                    loading="lazy"
                                    :width="800"
                                    :height="600"
                                    format="webp"
                                    :quality="85"
                                />
                                <div class="gallery-thumb-text position-absolute">
                                    <h3 v-html="item.title"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-button d-flex justify-content-center" data-aos="fade-up">
                    <a :href="content.button_url || '#'" class="common-btn d-flex align-items-center">
                        {{ buttonText }}
                        <span><i class="far fa-angle-left"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
