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

// Helper to get proper image URL
const getImageUrl = (img) => {
    if (!img || typeof img !== 'string') return '';
    if (img.startsWith('http') || img.startsWith('/')) return img;
    return `/storage/${img}`;
};

const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const subtitle = computed(() => props.lang === 'ar' ? props.content.subtitle_ar : props.content.subtitle_en);

const breadcrumb = computed(() => {
    const home = props.lang === 'ar' ? 'الرئيسية' : 'Home';
    const current = props.lang === 'ar' ? props.content.breadcrumb_ar : props.content.breadcrumb_en;
    return { home, current };
});

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
    <main>
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb-nav">
            <div class="container">
                <ul>
                    <li><a href="">{{ breadcrumb.home }}</a></li>
                    <li><span>/</span></li>
                    <li><a href="" class="active">{{ breadcrumb.current }}</a></li>
                </ul>
            </div>
        </div>

        <!---------gallery Section START ---------->
        <section class="galleryV2-area">
            <div class="container py-5">
                <div class="row gy-4">
                    <div class="col-lg-12 text-center">
                        <div class="">
                            <h1 class="mb-3">{{ title }}</h1>
                            <p v-if="subtitle" class="off-text mb-0 fw-medium fs-18">{{ subtitle }}</p>
                        </div>
                    </div>
                    <div 
                        v-for="(item, index) in galleryItems" 
                        :key="index"
                        class="col-md-6"
                    >
                        <div class="img__card__block">
                            <img :src="item.image" :alt="item.label" loading="lazy" decoding="async" />
                            <a :href="item.url">{{ item.label }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!---------gallery Section End ---------->
    </main>
</template>
