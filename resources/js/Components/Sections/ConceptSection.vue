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

const getTitle = (block) => props.lang === 'ar' ? block.title_ar : block.title_en;
const getParagraphs = (block) => props.lang === 'ar' ? block.paragraphs_ar : block.paragraphs_en;
const getCounterLabel = (counter) => props.lang === 'ar' ? counter.label_ar : counter.label_en;
</script>

<template>
    <section class="concept-area">
        <div class="container">
            <div class="concept-inner-block position-relative z-1 overflow-hidden">
                <!-- First Concept Block -->
                <div 
                    v-for="(block, blockIndex) in content.blocks" 
                    :key="blockIndex"
                    class="concept-wrapper position-relative z-1 overflow-hidden"
                    :class="{ 'second-concept-wrapper m-0': blockIndex > 0 }"
                >
                    <div class="concept-wrapper-shape position-absolute z-n1">
                        <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
                    </div>
                    <div class="row align-items-center">
                        <div 
                            class="col-lg-6" 
                            :class="{ 'order-lg-2': !block.image_on_left }"
                            data-aos="zoom-in"
                        >
                            <div class="swiper concept-thumbnails" :class="{ 'me-0': block.image_on_left }">
                                <div class="swiper-wrapper">
                                    <div 
                                        v-for="(slide, slideIndex) in block.slides" 
                                        :key="slideIndex"
                                        class="concept-single-thumb swiper-slide"
                                        :class="slide.radius_class"
                                    >
                                        <img 
                                            class="w-100 h-100 object-fit-cover" 
                                            :src="slide.image" 
                                            :alt="slide.alt || 'Thumb'" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                            class="col-lg-6" 
                            :class="{ 'order-lg-1': !block.image_on_left }"
                            data-aos="fade-right"
                        >
                            <div class="concept-content">
                                <h3>{{ getTitle(block) }}</h3>
                                <p v-for="(paragraph, pIndex) in getParagraphs(block)" :key="pIndex">
                                    {{ paragraph }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Counter Up Area -->
                <div class="counter-up-area d-flex align-items-center justify-content-center position-relative z-1">
                    <div 
                        v-for="(counter, counterIndex) in content.counters" 
                        :key="counterIndex"
                        class="counter-up-step d-flex align-items-center justify-content-center flex-column" 
                        :style="{ backgroundImage: `url('${content.counter_bg_image}')` }"
                        data-aos="zoom-in" 
                        :data-aos-delay="(counterIndex + 1) * 100"
                    >
                        <h5>{{ counter.value }}</h5>
                        <p>{{ getCounterLabel(counter) }}</p>
                    </div>
                </div>

                <!-- Bottom Shape -->
                <div class="concept-shape position-absolute zn-1 w-100" data-aos="fade-up">
                    <img :src="content.bottom_shape_image" alt="Shape" />
                </div>
            </div>
        </div>
    </section>
</template>
