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
const getCardTitle = (card) => props.lang === 'ar' ? card.title_ar : card.title_en;
const getCardDescription = (card) => props.lang === 'ar' ? card.description_ar : card.description_en;

// Process cards with proper image URLs
const cards = computed(() => {
    const rawCards = props.content.cards || [];
    return rawCards.map(card => ({
        ...card,
        iconUrl: getImageUrl(card.icon)
    }));
});

const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
const contactLogoUrl = computed(() => getImageUrl(props.content.contact_logo));

const bgStyle = computed(() => {
    return backgroundImageUrl.value ? { backgroundImage: `url('${backgroundImageUrl.value}')` } : {};
});
</script>

<template>
    <section class="contact-area overflow-hidden" :style="bgStyle">
        <div class="container">
            <div class="contact-inner-block p-40 bg-white">
                <div class="row">
                    <div class="col-xl-6" data-aos="fade-right">
                        <div class="contact-right-block">
                            <div 
                                v-for="(card, index) in cards" 
                                :key="index"
                                class="contact-card d-flex align-items-center"
                                :class="{ 'contact-middle-card': index === 1 }"
                            >
                                <div v-if="card.iconUrl" class="contact-card-icon">
                                    <img :src="card.iconUrl" alt="Icon" loading="lazy" decoding="async" />
                                </div>
                                <div class="contact-card-content">
                                    <h4 v-html="getCardTitle(card)"></h4>
                                    <p v-html="getCardDescription(card)"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6" data-aos="zoom-in">
                        <div class="contact-left d-flex align-items-center justify-content-start flex-column">
                            <div v-if="contactLogoUrl" class="contact-logo">
                                <a href="#">
                                    <AppImage :src="contactLogoUrl" alt="Logo" loading="lazy" :width="150" :height="60" />
                                </a>
                            </div>
                            <div class="contact-btn">
                                <a :href="content.button_url || '#'" class="common-btn d-flex align-items-center">
                                    {{ buttonText }}
                                    <span><i class="far fa-angle-left"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
