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
const breadcrumb = computed(() => {
    const home = props.lang === 'ar' ? 'الرئيسية' : 'Home';
    const current = props.lang === 'ar' ? props.content.breadcrumb_ar : props.content.breadcrumb_en;
    return { home, current };
});

// Image URLs
const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
const iconUrl = computed(() => getImageUrl(props.content.icon));
const sideImageUrl = computed(() => getImageUrl(props.content.side_image));

const bgStyle = computed(() => ({
    background: backgroundImageUrl.value 
        ? `url(${backgroundImageUrl.value}) center/cover no-repeat` 
        : 'linear-gradient(135deg, #004F4C 0%, #003836 100%)'
}));
</script>

<template>
    <section class="contact-banner-area pt-5 mt-5">
        <div class="container-fluid">
            <div 
                class="contact__banner" 
                :style="bgStyle"
            >
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact__banner--content" data-aos="fade-up">
                            <div class="d-flex align-items-center gap-3">
                                <i v-if="iconUrl">
                                    <img 
                                        :src="iconUrl" 
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </i>
                                <div>
                                    <h1 class="fs-56">{{ title }}</h1>
                                    <p class="mb-0">
                                        <span>{{ breadcrumb.home }}</span> / <span>{{ breadcrumb.current }}</span>
                                    </p>
                                </div>
                            </div>
                            <picture v-if="sideImageUrl">
                                <img 
                                    :src="sideImageUrl" 
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
