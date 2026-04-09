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

// Strip HTML tags from text
const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
};

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const getTitle = (project) => props.lang === 'ar' ? project.title_ar : project.title_en;
const getDescription = (project) => props.lang === 'ar' ? project.description_ar : project.description_en;
const getLearnMoreText = (project) => stripHtml(props.lang === 'ar' ? project.learn_more_text_ar : project.learn_more_text_en);
const getVisitText = (project) => stripHtml(props.lang === 'ar' ? project.visit_text_ar : project.visit_text_en);

// Process projects with proper image URLs
const projects = computed(() => {
    const rawProjects = props.content.projects || [];
    return rawProjects.map(project => ({
        ...project,
        imageUrl: getImageUrl(project.image)
    }));
});

const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
const workShapeImageUrl = computed(() => getImageUrl(props.content.work_shape_image));
</script>

<template>
    <section class="work-area position-relative z-1 overflow-hidden">
        <div v-if="shapeImageUrl" class="work-shape position-absolute z-n1">
            <AppImage
                :src="shapeImageUrl"
                alt="Shape"
                loading="lazy"
                
                class="w-100 h-100 object-fit-cover"
            />
        </div>
        <div v-if="shapeImageUrl" class="work-second-shape position-absolute z-n1">
            <AppImage
                :src="shapeImageUrl"
                alt="Shape"
                loading="lazy"
                
                class="w-100 h-100 object-fit-cover"
            />
        </div>
        <div class="container">
            <div class="work-inner-block">
                <div class="common-title text-center" data-aos="zoom-in">
                    <h3 v-html="sectionTitle"></h3>
                </div>
                <div class="outer-work-swiper swiper">
                    <div class="swiper-wrapper">
                        <div 
                            v-for="(project, index) in projects" 
                            :key="index"
                            class="swiper-slide"
                        >
                            <div class="work-wrapper">
                                <div class="work-single-card position-relative z-1">
                                    <div class="work-slide-single-item">
                                        <div class="work-card-wrap d-flex align-items-center justify-content-between">
                                            <div class="work-card-items">
                                                <div class="contact-card-content work-card-content">
                                                    <h4 v-html="getTitle(project)"></h4>
                                                    <p v-html="getDescription(project)"></p>
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
                                                <AppImage
                                                    :src="project.imageUrl"
                                                    alt="Thumb"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="workShapeImageUrl" class="work-card-shape position-absolute z-n1">
                                        <AppImage
                                            :src="workShapeImageUrl"
                                            alt="Shape"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination and Navigation -->
                    <div class="swiper-pagination-wrap position-relative">
                        
                        <div class="swiper-pagination outer-work-pagination"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
