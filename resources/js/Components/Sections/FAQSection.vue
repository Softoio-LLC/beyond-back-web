<script setup>
import { computed, ref } from 'vue';
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

const activeIndex = ref(0);

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const faqItems = computed(() => props.content.faqs || props.content.items || []);

const getQuestion = (faq) => {
    if (props.lang === 'ar') {
        return faq.question_ar || faq.question || faq.title_ar || faq.title || faq.question_en || '';
    }

    return faq.question_en || faq.question || faq.title_en || faq.title || faq.question_ar || '';
};

const getAnswer = (faq) => {
    if (props.lang === 'ar') {
        return faq.answer_ar || faq.answer || faq.description_ar || faq.description || faq.answer_en || '';
    }

    return faq.answer_en || faq.answer || faq.description_en || faq.description || faq.answer_ar || '';
};

const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));

const toggleFaq = (index) => {
    activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<template>
    <section class="faq-area position-relative z-1">
        <div v-if="shapeImageUrl" class="faq-shape position-absolute z-n1">
            <AppImage class="w-100 h-100 object-fit-cover" :src="shapeImageUrl" alt="Shape" loading="lazy"  />
        </div>
        <div v-if="shapeImageUrl" class="faq-sec-shape position-absolute z-n1">
            <AppImage class="w-100 h-100 object-fit-cover" :src="shapeImageUrl" alt="Shape" loading="lazy"  />
        </div>
        <div class="container">
            <div class="faq-inner-block">
                <div class="common-title text-center mb-40" data-aos="fade-up">
                    <h3 v-html="sectionTitle"></h3>
                    <p v-html="subtitle"></p>
                </div>
                <div class="accordion-wrapper">
                    <div class="accordion faq-accordion" id="accordionExample">
                        <div 
                            v-for="(faq, index) in faqItems" 
                            :key="index"
                            class="accordion-item" 
                            data-aos="fade-up" 
                            :data-aos-delay="(index + 1) * 100"
                        >
                            <h2 class="accordion-header">
                                <button 
                                    class="accordion-button" 
                                    :class="{ 'collapsed': activeIndex !== index }"
                                    type="button" 
                                    :aria-expanded="activeIndex === index" 
                                    :aria-controls="`collapse-faq-${index}`"
                                    @click="toggleFaq(index)"
                                    v-html="getQuestion(faq)"
                                >
                                </button>
                            </h2>
                            <div 
                                :id="`collapse-faq-${index}`" 
                                class="accordion-collapse" 
                                :class="{ 'show': activeIndex === index }"
                                v-show="activeIndex === index"
                            >
                                <div class="accordion-body" v-html="getAnswer(faq)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
