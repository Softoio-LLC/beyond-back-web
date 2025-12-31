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

const buttonText = computed(() => {
    const text = props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en;
    return stripHtml(text);
});
const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
const getCardTitle = (card) => props.lang === 'ar' ? card.title_ar : card.title_en;

// Process contact cards with proper image URLs
const contactCards = computed(() => {
    const rawCards = props.content.contact_cards || [];
    return rawCards.map(card => ({
        ...card,
        iconUrl: getImageUrl(card.icon)
    }));
});

const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
</script>

<template>
    <section class="cta-area overflow-hidden position-relative z-1 pt-80 pb-80">
        <div class="container">
            <div class="cta-inner-block">
                <div class="row align-items-center">
                    <div class="col-xl-5" data-aos="fade-right">
                        <div class="cta-right-block">
                            <div :class="'service-card-content cta-content ' + (lang === 'ar' ? 'text-end' : '')">
                                <a :href="content.button_url || '#'" class="cta-btn">{{ buttonText }}</a>
                                <h4 v-html="title"></h4>
                                <p v-html="description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="cta-left-block">
                            <div class="row">
                                <div 
                                    v-for="(card, index) in contactCards" 
                                    :key="index"
                                    class="col-sm-6" 
                                    data-aos="zoom-in"
                                >
                                    <div class="cta-card d-flex align-items-center flex-column">
                                        <span v-if="card.iconUrl" class="d-flex align-items-center justify-content-center">
                                            <AppImage :src="card.iconUrl" alt="Icon" loading="lazy" />
                                        </span>
                                        <h5 v-html="getCardTitle(card)"></h5>
                                        <a 
                                            v-for="(link, linkIndex) in card.links" 
                                            :key="linkIndex"
                                            :href="link.url"
                                            v-html="link.text"
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="shapeImageUrl" class="cta-shape position-absolute z-n1">
                <AppImage class="w-100 h-100 object-fit-cover" :src="shapeImageUrl" alt="Shape" loading="lazy" :width="800" :height="600" />
            </div>
        </div>
    </section>
</template>
