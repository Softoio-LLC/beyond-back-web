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

const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
const primaryButtonText = computed(() => props.lang === 'ar' ? props.content.primary_button_text_ar : props.content.primary_button_text_en);
const secondaryButtonText = computed(() => props.lang === 'ar' ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en);
</script>

<template>
    <section class="inquiry-area">
        <div class="container">
            <div class="inquiry-inner-block overflow-hidden position-relative z-1">
                <div class="inquiry-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-7" data-aos="fade-right">
                            <div class="inquiry-right-block">
                                <div class="inquiry-content">
                                    <h4>{{ title }}</h4>
                                    <p>{{ description }}</p>
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
                        <div class="col-lg-5" data-aos="zoom-in">
                            <div class="inquiry-image">
                                <img :src="content.image" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inquiry-shape position-absolute z-n1">
                    <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
                </div>
            </div>
        </div>
    </section>
</template>
