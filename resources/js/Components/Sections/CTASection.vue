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
const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
const getCardTitle = (card) => props.lang === 'ar' ? card.title_ar : card.title_en;
</script>

<template>
    <section class="cta-area overflow-hidden position-relative z-1 pt-80 pb-80">
        <div class="container">
            <div class="cta-inner-block">
                <div class="row align-items-center">
                    <div class="col-xl-5" data-aos="fade-right">
                        <div class="cta-right-block">
                            <div class="service-card-content cta-content text-end">
                                <a :href="content.button_url || '#'" class="cta-btn">{{ buttonText }}</a>
                                <h4>{{ title }}</h4>
                                <p>{{ description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="cta-left-block">
                            <div class="row">
                                <div 
                                    v-for="(card, index) in content.contact_cards" 
                                    :key="index"
                                    class="col-sm-6" 
                                    data-aos="zoom-in"
                                >
                                    <div class="cta-card d-flex align-items-center flex-column">
                                        <span class="d-flex align-items-center justify-content-center">
                                            <img :src="card.icon" alt="Icon" />
                                        </span>
                                        <h5>{{ getCardTitle(card) }}</h5>
                                        <a 
                                            v-for="(link, linkIndex) in card.links" 
                                            :key="linkIndex"
                                            :href="link.url"
                                        >
                                            {{ link.text }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta-shape position-absolute z-n1">
                <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
            </div>
        </div>
    </section>
</template>
