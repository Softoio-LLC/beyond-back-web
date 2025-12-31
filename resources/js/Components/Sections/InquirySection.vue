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
const primaryButtonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.primary_button_text_ar : props.content.primary_button_text_en;
    return stripHtml(text);
});
const secondaryButtonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
    return stripHtml(text);
});

const imageUrl = computed(() => getImageUrl(props.content.image));
const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
</script>

<template>
    <section class="inquiry-area">
        <div class="container">
            <div class="inquiry-inner-block overflow-hidden position-relative z-1">
                <div class="inquiry-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="inquiry-right-block">
                                <div class="inquiry-content">
                                    <h4 v-html="title"></h4>
                                    <p v-html="description"></p>
                                </div>
                                <div class="inquiry-btns d-flex align-items-center">
                                    <a :href="content.primary_button_url || '#'" class="secondary-btn">
                                        {{ primaryButtonText }}
                                        <span><i class="fal fa-angle-left"></i></span>
                                    </a>
                                    <a :href="content.secondary_button_url || '#'">
                                        {{ secondaryButtonText }}
                                        <span><i class="fab fa-whatsapp"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-if="imageUrl" class="col-lg-5">
                            <div class="inquiry-image">
                                <AppImage :src="imageUrl" alt="Image" loading="lazy"  />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="shapeImageUrl" class="inquiry-shape position-absolute z-n1">
                    <AppImage class="w-100 h-100 object-fit-cover" :src="shapeImageUrl" alt="Shape" loading="lazy"  />
                </div>
            </div>
        </div>
    </section>
</template>
