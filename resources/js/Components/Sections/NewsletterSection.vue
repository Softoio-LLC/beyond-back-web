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

const title1 = computed(() => props.lang === 'ar' ? props.content.title1_ar : props.content.title1_en);
const title2 = computed(() => props.lang === 'ar' ? props.content.title2_ar : props.content.title2_en);
const phoneLabel = computed(() => props.lang === 'ar' ? props.content.phone_label_ar : props.content.phone_label_en);
const backgroundUrl = computed(() => getImageUrl(props.content.background_image));
const iconUrl = computed(() => getImageUrl(props.content.icon));
const bgStyle = computed(() => {
    if (backgroundUrl.value) {
        return { background: `url(${backgroundUrl.value}) center/cover no-repeat` };
    }
    return { background: 'linear-gradient(135deg, #004F4C 0%, #003836 100%)' };
});
</script>

<template>
    <section class="newLetter-area mt-5">
        <div class="container color-text">
            <div 
                class="newLetter-wrp" 
                :style="bgStyle"
                data-aos="fade-up"
            >
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="newsletter__content">
                            <h1>{{ title1 }}</h1>
                            <h1>{{ title2 }}</h1>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="d-flex align-items-center gap-4 newsletter__contact">
                            <i v-if="iconUrl">
                                <img 
                                    :src="iconUrl" 
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            </i>
                            <div>
                                <h5>{{ phoneLabel }}</h5>
                                <h1>
                                    <a :href="`tel:${content.phone}`">{{ content.phone }}</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.newLetter-wrp {
    padding: 40px 50px;
    border-radius: 16px;
}

.newsletter__content h1 {
    color: #fff;
    margin-bottom: 0.5rem;
}

.newsletter__content h1:last-child {
    margin-bottom: 0;
}

.newsletter__contact h5 {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.25rem;
}

.newsletter__contact h1 {
    color: #fff;
    margin-bottom: 0;
}

.newsletter__contact h1 a {
    color: #fff;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.newsletter__contact h1 a:hover {
    opacity: 0.8;
}

.newsletter__contact i img {
    width: 60px;
    height: 60px;
}

@media (max-width: 991px) {
    .newLetter-wrp {
        padding: 30px;
    }
    
    .newsletter__content {
        margin-bottom: 2rem;
    }
}
</style>
