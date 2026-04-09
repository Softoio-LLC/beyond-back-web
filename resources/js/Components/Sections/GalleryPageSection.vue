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

const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);
const breadcrumb = computed(() => props.lang === 'ar' ? props.content.breadcrumb_ar : props.content.breadcrumb_en);

// Gallery items
const galleryItems = computed(() => {
    return (props.content.items || []).map(item => ({
        image: getImageUrl(item.image),
        label: props.lang === 'ar' ? item.label_ar : item.label_en,
        url: item.url || '#',
    }));
});
</script>

<template>
    <div class="gallery-page-section my-5">
        <!---------gallery Section START ---------->
        <section class="galleryV2-area">
            <div class="container py-5">
                <div class="row gy-4">
                    <div class="col-lg-12 text-center">
                        <div>
                            <h1 class="mb-3" v-html="title"></h1>
                            <p v-if="subtitle" class="off-text mb-0 fw-medium fs-18" v-html="subtitle"></p>
                            <p v-if="breadcrumb" class="off-text mt-2 mb-0 fw-medium fs-16" v-html="breadcrumb"></p>
                        </div>
                    </div>
                    <div 
                        v-for="(item, index) in galleryItems" 
                        :key="index"
                        class="col-sm-12 col-md-6 col-lg-4"
                    >
                        <div class="img__card__block">
                            <div class="gallery-image-wrapper">
                                <AppImage :src="item.image" :alt="item.label" loading="lazy" />
                            </div>
                            <a :href="item.url" v-html="item.label"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!---------gallery Section End ---------->
    </div>
</template>
<style scoped>
.gallery-image-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 60%; /* 5:3 aspect ratio */
    overflow: hidden;
}

.gallery-image-wrapper :deep(img) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>