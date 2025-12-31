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

const getTitle = (block) => props.lang === 'ar' ? block.title_ar : block.title_en;
const getParagraphs = (block) => props.lang === 'ar' ? block.paragraphs_ar : block.paragraphs_en;
const getCounterLabel = (counter) => props.lang === 'ar' ? counter.label_ar : counter.label_en;

// Process blocks with proper image URLs
const blocks = computed(() => {
    const rawBlocks = props.content.blocks || [];
    return rawBlocks.map(block => ({
        ...block,
        slides: (block.slides || []).map(slide => ({
            ...slide,
            imageUrl: getImageUrl(slide.image)
        }))
    }));
});

const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
const counterBgImageUrl = computed(() => getImageUrl(props.content.counter_bg_image));
const bottomShapeImageUrl = computed(() => getImageUrl(props.content.bottom_shape_image));
</script>

<template>
    <section class="concept-area">
        <div class="container">
            <div class="concept-inner-block position-relative z-1 overflow-hidden">
                <!-- First Concept Block -->
                <div 
                    v-for="(block, blockIndex) in blocks" 
                    :key="blockIndex"
                    class="concept-wrapper position-relative z-1 overflow-hidden"
                    :class="{ 'second-concept-wrapper m-0': blockIndex > 0 }"
                >
                    <div v-if="shapeImageUrl" class="concept-wrapper-shape position-absolute z-n1">
                        <AppImage class="w-100 h-100 object-fit-cover" :src="shapeImageUrl" alt="Shape" loading="lazy"  />
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
                                        <AppImage 
                                            class="w-100 h-100 object-fit-cover" 
                                            :src="slide.imageUrl" 
                                            :alt="slide.alt || 'Thumb'"
                                            loading="lazy"
                                            :width="600"
                                            :height="400"
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
                                <h3 v-html="getTitle(block)"></h3>
                                <p v-for="(paragraph, pIndex) in getParagraphs(block)" :key="pIndex" v-html="paragraph">
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
                        :style="{ backgroundImage: counterBgImageUrl ? `url('${counterBgImageUrl}')` : '' }"
                        data-aos="zoom-in" 
                        :data-aos-delay="(counterIndex + 1) * 100"
                    >
                        <h5 v-html="counter.value"></h5>
                        <p v-html="getCounterLabel(counter)"></p>
                    </div>
                </div>

                <!-- Bottom Shape -->
                <div v-if="bottomShapeImageUrl" class="concept-shape position-absolute zn-1 w-100" data-aos="fade-up">
                    <AppImage :src="bottomShapeImageUrl" alt="Shape" loading="lazy" :width="800" :height="600" />
                </div>
            </div>
        </div>
    </section>
</template>
