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

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const getTitle = (service) => props.lang === 'ar' ? service.title_ar : service.title_en;
const getDescription = (service) => props.lang === 'ar' ? service.description_ar : service.description_en;

// Process services with proper image URLs
const services = computed(() => {
    const rawServices = props.content.services || [];
    return rawServices.map(service => ({
        ...service,
        imageUrl: getImageUrl(service.image)
    }));
});

const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
</script>

<template>
    <section class="service-area position-relative overflow-hidden pt-5 pb-80 z-1">
        <div class="container">
            <div class="service-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3 v-html="sectionTitle"></h3>
                </div>
                <div class="row">
                    <div 
                        v-for="(service, index) in services" 
                        :key="index"
                        class="col-sm-12 col-md-6 col-lg-4" 
                        data-aos="fade-up"
                    >
                        <div class="service-single-card d-flex align-items-center">
                            <div class="service-card-thumb w-100">
                                <AppImage
                                    :src="service.imageUrl"
                                    alt="Thumb"
                                    
                                    loading="lazy"
                                    class="w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <div class="service-card-content">
                                <h4 v-html="getTitle(service)"></h4>
                                <p v-html="getDescription(service)"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="shapeImageUrl" class="service-shape position-absolute z-n1">
            <AppImage
                :src="shapeImageUrl"
                alt="Shape"
                loading="lazy"
                
                class="w-100 h-100 object-fit-cover"
            />
        </div>
    </section>
</template>
