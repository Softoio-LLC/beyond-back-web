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

// Computed properties for bilingual content
const leftShape = computed(() => getImageUrl(props.content.left_shape));
const topRightShape = computed(() => getImageUrl(props.content.top_right_shape));
const icon = computed(() => getImageUrl(props.content.icon));
const image = computed(() => getImageUrl(props.content.image));
const title = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const description = computed(() => props.lang === 'ar' ? props.content.description_ar : props.content.description_en);
</script>

<template>
    <!--------- Section START product Area ---------->
    <section class="product-area">
        <!-- Left shape decoration -->
        <AppImage 
            v-if="leftShape" 
            :src="leftShape" 
            class="product-left" 
            alt="" 
            loading="lazy" 
            
        />
        
        <!-- Top right shape decoration -->
        <AppImage 
            v-if="topRightShape" 
            :src="topRightShape" 
            class="product-top-right" 
            alt="" 
            loading="lazy" 
           
        />
        
        <div class="container md">
            <div 
                class="row align-items-center gap-4 gap-lg-0" 
                :class="lang === 'ar' ? 'flex-column-reverse flex-lg-row' : 'flex-column-reverse flex-lg-row-reverse'"
            >
                <!-- Content Column -->
                <div :class="lang === 'ar' ? 'col-lg-7' : 'col-lg-7'">
                    <div class="product__content">
                        <i v-if="icon">
                            <AppImage 
                                :src="icon" 
                                alt="" 
                                loading="lazy" 
                                :width="80"
                                :height="80"
                            />
                        </i>
                        <div>
                            <h1 v-if="title" v-html="title"></h1>
                            <p v-if="description" v-html="description"></p>
                        </div>
                    </div>
                </div>
                
                <!-- Image Column -->
                <div :class="lang === 'ar' ? 'col-lg-5' : 'col-lg-5'">
                    <div class="product__image">
                        <AppImage 
                            v-if="image" 
                            :src="image" 
                            alt="" 
                            loading="lazy" 
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--------- Section END product Area ---------->
</template>

<style scoped>
/* Product Area Styles */
.product-area {
    position: relative;
    padding: clamp(2.5rem, 2rem + 3vw, 5rem) 0;
    overflow: hidden;
}

.product-left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: min(200px, 15vw);
    z-index: 1;
}

.product-top-right {
    position: absolute;
    right: 0;
    top: 0;
    max-width: min(250px, 18vw);
    z-index: 1;
}

/* RTL adjustments */
[dir="rtl"] .product-left {
    left: auto;
    right: 0;
    transform: translateY(-50%) scaleX(-1);
}

[dir="rtl"] .product-top-right {
    right: auto;
    left: 0;
    transform: scaleX(-1);
}

.container.md {
    max-width: 1320px;
}

.product__content {
    position: relative;
    z-index: 2;
}

.product__content i {
    display: inline-block;
    margin-bottom: 1.25rem;
}

.product__content i img {
    width: clamp(2.5rem, 2rem + 1vw, 3.75rem);
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
}

.product__content h1 {
    font-size: clamp(1.5rem, 1.2rem + 2vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.25rem;
    line-height: 1.2;
    color: #1a1a1a;
}

.product__content p {
    font-size: clamp(0.875rem, 0.8rem + 0.5vw, 1.125rem);
    line-height: 1.8;
    color: #666;
    margin: 0;
}

.product__image {
    position: relative;
    z-index: 2;
    text-align: center;
}

.product__image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Responsive styles */
@media (max-width: 767px) {
    .product-left,
    .product-top-right {
        display: none;
    }
}
</style>
