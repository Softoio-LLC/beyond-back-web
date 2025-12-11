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
const getTitle = (service) => props.lang === 'ar' ? service.title_ar : service.title_en;
const getDescription = (service) => props.lang === 'ar' ? service.description_ar : service.description_en;
</script>

<template>
    <section class="service-area position-relative overflow-hidden pb-80 z-1">
        <div class="container">
            <div class="service-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>{{ sectionTitle }}</h3>
                </div>
                <div class="row">
                    <div 
                        v-for="(service, index) in content.services" 
                        :key="index"
                        class="col-md-6" 
                        data-aos="fade-up"
                    >
                        <div class="service-single-card d-flex align-items-center">
                            <div class="service-card-thumb w-100">
                                <img 
                                    class="w-100 h-100 object-fit-cover" 
                                    :src="service.image" 
                                    alt="Thumb" 
                                />
                            </div>
                            <div class="service-card-content">
                                <h4>{{ getTitle(service) }}</h4>
                                <p>{{ getDescription(service) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="service-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
        </div>
    </section>
</template>
