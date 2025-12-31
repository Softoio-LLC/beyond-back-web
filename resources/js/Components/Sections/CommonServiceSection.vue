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

const sectionIcon = computed(() => getImageUrl(props.content.section_icon));
const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const titleColor = computed(() => props.content.title_color || 'inherit');

// Services items
const services = computed(() => {
    return (props.content.services || []).map(service => ({
        icon: getImageUrl(service.icon),
        title: props.lang === 'ar' ? service.title_ar : service.title_en,
        description: props.lang === 'ar' ? service.description_ar : service.description_en,
    }));
});
</script>

<template>
    <!---------comService Section START ---------->
    <section class="comService-area">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <i v-if="sectionIcon">
                            <AppImage :src="sectionIcon" alt="" loading="lazy"  />
                        </i>
                        <h1 v-if="title" v-html="title" :style="{ color: titleColor }"></h1>
                        <p v-if="subtitle" class="fs-18" style="color: #768495" v-html="subtitle"></p>
                    </div>
                </div>
                <div 
                    v-for="(service, index) in services" 
                    :key="index"
                    class="col-xl-3 col-lg-4 col-md-6"
                >
                    <div class="service__block">
                        <i v-if="service.icon">
                            <AppImage :src="service.icon" alt="" loading="lazy" :width="64" :height="64" />
                        </i>
                        <h5 v-html="service.title"></h5>
                        <p v-html="service.description"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!---------comService Section End ---------->
</template>

<style scoped>
.comService-area .row {
    display: flex;
    flex-wrap: wrap;
}

.comService-area .row > [class*="col-"] {
    display: flex;
}

.comService-area .service__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 280px;
}

.comService-area .service__block h5 {
    flex-shrink: 0;
}

.comService-area .service__block p {
    flex-grow: 1;
}
</style>
