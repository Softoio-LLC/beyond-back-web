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

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const buttonText = computed(() => props.lang === 'ar' ? props.content.button_text_ar : props.content.button_text_en);
</script>

<template>
    <section class="gallery-area overflow-hidden">
        <div class="container">
            <div class="gallery-inner-block position-relative z-1">
                <div class="gallery-shape position-absolute z-n1">
                    <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
                </div>
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>{{ sectionTitle }}</h3>
                    <p>{{ subtitle }}</p>
                </div>
                <div class="gallery-wrapper">
                    <div class="row">
                        <div 
                            v-for="(item, index) in content.images" 
                            :key="index"
                            class="col-md-6" 
                            data-aos="zoom-in"
                        >
                            <div class="gallery-thumb position-relative">
                                <img :src="item.image" alt="Thumb" />
                                <div class="gallery-thumb-text position-absolute">
                                    <h3>{{ item.title }}</h3>
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
