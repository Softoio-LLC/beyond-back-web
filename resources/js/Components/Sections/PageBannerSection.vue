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

// Variant determines the banner style
const variant = computed(() => props.content.variant || 'default');

// Image URLs
const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
const iconUrl = computed(() => getImageUrl(props.content.icon));
const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
const sideImageUrl = computed(() => getImageUrl(props.content.side_image));

// Background style
const bgStyle = computed(() => ({
    background: backgroundImageUrl.value 
        ? `url(${backgroundImageUrl.value}) center/cover no-repeat` 
        : 'linear-gradient(135deg, #004F4C 0%, #003836 100%)'
}));
</script>

<template>
    <!-- Default Page Banner Style -->
    <section 
        v-if="variant === 'default'"
        class="page-banner-area"
        :style="bgStyle"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page__banner--content text-center" data-aos="fade-up">
                        <div class="d-flex flex-column align-items-center gap-3">
                            <i v-if="iconUrl">
                                <img 
                                    :src="iconUrl" 
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            </i>
                            <div>
                                <h1 class="fs-56 text-white">{{ title }}</h1>
                                <p v-if="subtitle" class="text-white-50 mb-3">{{ subtitle }}</p>
                                <p class="mb-0 breadcrumb-text">
                                    <span>{{ breadcrumb.home }}</span> / <span>{{ breadcrumb.current }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Page Banner Style -->
    <section 
        v-else-if="variant === 'services'"
        class="services-banner-area position-relative"
        :style="bgStyle"
    >
        <img 
            v-if="shapeImageUrl" 
            :src="shapeImageUrl" 
            class="banner-shape" 
            alt=""
            loading="lazy"
            decoding="async"
        />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="services__banner--content" data-aos="fade-up">
                        <i v-if="iconUrl">
                            <img 
                                :src="iconUrl" 
                                alt=""
                                loading="lazy"
                                decoding="async"
                            />
                        </i>
                        <h1 class="fs-56 text-white">{{ title }}</h1>
                        <p v-if="subtitle" class="text-white-50">{{ subtitle }}</p>
                        <p class="mb-0 breadcrumb-text">
                            <span>{{ breadcrumb.home }}</span> / <span>{{ breadcrumb.current }}</span>
                        </p>
                    </div>
                </div>
                <div v-if="sideImageUrl" class="col-lg-6">
                    <div class="services__banner--image" data-aos="fade-up" data-aos-delay="100">
                        <img 
                            :src="sideImageUrl" 
                            alt=""
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Page Banner Style -->
    <section 
        v-else-if="variant === 'about'"
        class="about-banner-area"
        :style="bgStyle"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="about__banner--content text-center" data-aos="fade-up">
                        <i v-if="iconUrl">
                            <img 
                                :src="iconUrl" 
                                alt=""
                                loading="lazy"
                                decoding="async"
                            />
                        </i>
                        <h1 class="fs-56 text-white mt-3">{{ title }}</h1>
                        <p v-if="subtitle" class="text-white-50 mb-4">{{ subtitle }}</p>
                        <p class="mb-0 breadcrumb-text">
                            <span>{{ breadcrumb.home }}</span> / <span>{{ breadcrumb.current }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-banner-area,
.services-banner-area,
.about-banner-area {
    padding: 80px 0;
    min-height: 300px;
    display: flex;
    align-items: center;
}

.breadcrumb-text {
    color: rgba(255, 255, 255, 0.7);
}

.breadcrumb-text span:last-child {
    color: #fff;
}

.banner-shape {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    object-fit: contain;
    opacity: 0.3;
}

.services__banner--image img {
    max-width: 100%;
    height: auto;
}
</style>
