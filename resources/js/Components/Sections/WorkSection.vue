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
const getTitle = (project) => props.lang === 'ar' ? project.title_ar : project.title_en;
const getDescription = (project) => props.lang === 'ar' ? project.description_ar : project.description_en;
const getLearnMoreText = (project) => props.lang === 'ar' ? project.learn_more_text_ar : project.learn_more_text_en;
const getVisitText = (project) => props.lang === 'ar' ? project.visit_text_ar : project.visit_text_en;
</script>

<template>
    <section class="work-area position-relative z-1 overflow-hidden">
        <div class="work-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
        </div>
        <div class="work-second-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
        </div>
        <div class="container">
            <div class="work-inner-block">
                <div class="common-title text-center" data-aos="zoom-in">
                    <h3>{{ sectionTitle }}</h3>
                </div>
                <div class="outer-work-swiper swiper">
                    <div class="swiper-wrapper">
                        <div 
                            v-for="(slideGroup, groupIndex) in [content.projects, content.projects.slice().reverse(), content.projects]" 
                            :key="groupIndex"
                            class="swiper-slide" 
                            data-aos="fade-right" 
                            :data-aos-delay="300 - (groupIndex * 100)"
                        >
                            <div class="work-wrapper">
                                <div class="work-single-card position-relative z-1">
                                    <div class="swiper work-single-wrap">
                                        <div class="swiper-wrapper">
                                            <div 
                                                v-for="(project, projectIndex) in slideGroup" 
                                                :key="projectIndex"
                                                class="swiper-slide"
                                            >
                                                <div class="work-slide-single-item" data-aos="fade-right">
                                                    <div class="work-card-wrap d-flex align-items-center justify-content-between">
                                                        <div class="work-card-items">
                                                            <div class="contact-card-content work-card-content">
                                                                <h4>{{ getTitle(project) }}</h4>
                                                                <p>{{ getDescription(project) }}</p>
                                                            </div>
                                                            <div 
                                                                class="work-card-btns d-flex align-items-center"
                                                                :class="project.btn_color_class"
                                                            >
                                                                <a :href="project.learn_more_url || '#'">
                                                                    {{ getLearnMoreText(project) }}
                                                                    <span><i class="far fa-angle-left"></i></span>
                                                                </a>
                                                                <a :href="project.visit_url || '#'" class="secondary-btn">
                                                                    {{ getVisitText(project) }}
                                                                    <span><i class="fal fa-long-arrow-left"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="work-card-thumb">
                                                            <img :src="project.image" alt="Thumb" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="work-card-shape position-absolute z-n1">
                                        <img :src="content.work_shape_image" alt="Shape" />
                                    </div>
                                    <!-- Dots Pagination -->
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
