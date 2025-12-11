<script setup>
import { computed, ref } from 'vue';

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

const activeIndex = ref(1); // Second item open by default as per HTML

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const getQuestion = (faq) => props.lang === 'ar' ? faq.question_ar : faq.question_en;
const getAnswer = (faq) => props.lang === 'ar' ? faq.answer_ar : faq.answer_en;

const toggleFaq = (index) => {
    activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<template>
    <section class="faq-area position-relative z-1">
        <div class="faq-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
        </div>
        <div class="faq-sec-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
        </div>
        <div class="container">
            <div class="faq-inner-block">
                <div class="common-title text-center mb-40" data-aos="fade-up">
                    <h3>{{ sectionTitle }}</h3>
                    <p>{{ subtitle }}</p>
                </div>
                <div class="accordion-wrapper">
                    <div class="accordion faq-accordion" id="accordionExample">
                        <div 
                            v-for="(faq, index) in content.faqs" 
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
                                    data-bs-toggle="collapse" 
                                    :data-bs-target="`#collapse-faq-${index}`" 
                                    :aria-expanded="activeIndex === index" 
                                    :aria-controls="`collapse-faq-${index}`"
                                    @click="toggleFaq(index)"
                                >
                                    {{ getQuestion(faq) }}
                                </button>
                            </h2>
                            <div 
                                :id="`collapse-faq-${index}`" 
                                class="accordion-collapse collapse" 
                                :class="{ 'show': activeIndex === index }"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">{{ getAnswer(faq) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
