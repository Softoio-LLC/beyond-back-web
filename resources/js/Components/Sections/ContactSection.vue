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

const buttonText = computed(() => props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en);
const getCardTitle = (card) => props.lang === 'ar' ? card.title_ar : card.title_en;
const getCardDescription = (card) => props.lang === 'ar' ? card.description_ar : card.description_en;
</script>

<template>
    <section class="contact-area overflow-hidden" :style="{ backgroundImage: `url('${content.background_image}')` }">
        <div class="container">
            <div class="contact-inner-block p-40 bg-white">
                <div class="row">
                    <div class="col-xl-6" data-aos="fade-right">
                        <div class="contact-right-block">
                            <div 
                                v-for="(card, index) in content.cards" 
                                :key="index"
                                class="contact-card d-flex align-items-center"
                                :class="{ 'contact-middle-card': index === 1 }"
                            >
                                <div class="contact-card-icon">
                                    <img :src="card.icon" alt="Icon" />
                                </div>
                                <div class="contact-card-content">
                                    <h4>{{ getCardTitle(card) }}</h4>
                                    <p>{{ getCardDescription(card) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6" data-aos="zoom-in">
                        <div class="contact-left d-flex align-items-center justify-content-start flex-column">
                            <div class="contact-logo">
                                <a href="#">
                                    <img :src="content.contact_logo" alt="Logo" />
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
