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

const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
const buttonText = computed(() => props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en);
</script>

<template>
    <section class="hero-area position-relative" :style="{ backgroundImage: `url('${content.background_image}')` }">
        <div class="container">
            <div class="hero-inner-block">
                <div class="hero-title" data-aos="fade-up">
                    <h5>{{ subtitle }}</h5>
                    <h1 v-html="title"></h1>
                </div>
                <div class="swiper hero-slide-thumb" data-aos="fade-up" data-aos-delay="300">
                    <div class="swiper-wrapper">
                        <div 
                            v-for="(slide, index) in content.slides" 
                            :key="index" 
                            class="swiper-slide"
                        >
                            <div class="hero-slide-card">
                                <img 
                                    class="w-100 h-100 object-fit-cover" 
                                    :src="slide.image" 
                                    :alt="slide.alt || 'Thumb'" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500">
                    <p v-html="description"></p>
                </div>
                <div class="hero-btn d-flex justify-content-center" data-aos="fade-up">
                    <a :href="content.button_url || '#'" class="common-btn d-flex align-items-center">
                        {{ buttonText }}
                        <span><i class="far fa-angle-left"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
