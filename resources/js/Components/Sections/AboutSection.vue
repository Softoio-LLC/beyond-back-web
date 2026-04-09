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

const blocks = computed(() => {
    const rawBlocks = props.content.blocks || [];
    // Process each block to add proper image URLs
    return rawBlocks.map(block => ({
        ...block,
        iconUrl: getImageUrl(block.icon),
        imageUrl: getImageUrl(block.image),
        imageBgUrl: getImageUrl(block.image_bg)
    }));
});

// Shape images
const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
const leftShapeImageUrl = computed(() => getImageUrl(props.content.left_shape_image));
const rightShapeImageUrl = computed(() => getImageUrl(props.content.right_shape_image));

const t = (ar, en) => props.lang === 'ar' ? (ar || en || '') : (en || ar || '');
</script>

<template>
    <!-- About section wrapper with proper spacing -->
    <div class="about-section-wrapper">
        <section class="about-area">
            <AppImage 
                v-if="shapeImageUrl" 
                :src="shapeImageUrl" 
                class="hero-shape-5" 
                alt=""
                loading="lazy"
            />
            
            <!-- First block style (CEO Message style) -->
            <template v-for="(block, idx) in blocks" :key="idx">
                <!-- Image Right Layout (First block style) -->
                <div 
                    v-if="block.layout === 'image-right' || block.layout === 'first' || (idx === 0 && !block.layout)" 
                    class="container pb-5"
                >
                    <div class="row align-items-center">
                        <div class="col-lg-6 mt-4 mt-lg-0 order-lg-1 order-2">
                            <div class="about__content">
                                <i v-if="block.iconUrl">
                                    <AppImage :src="block.iconUrl" alt="" loading="lazy" :width="80" :height="80" />
                                </i>
                                <div>
                                    <h1 class="color-text" v-html="t(block.title_ar, block.title_en)"></h1>
                                    <div v-html="t(block.content_ar, block.content_en)"></div>
                                    <span v-if="block.author">— {{ block.author }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-2 order-1">
                            <div class="about__img">
                                <AppImage 
                                    v-if="block.imageUrl" 
                                    :src="block.imageUrl" 
                                    alt=""
                                    loading="lazy"
                                    class="about-main-img"
                                />
                                <AppImage 
                                    v-if="block.imageBgUrl" 
                                    :src="block.imageBgUrl" 
                                    class="hero-icon-bg" 
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Alternative Layout (company info, vision style) -->
                <div 
                    v-else 
                    class="position-relative about-block-alt"
                    :class="{ 'bg-light-gray': idx % 2 !== 0 }"
                >
                    <AppImage 
                        v-if="leftShapeImageUrl" 
                        :src="leftShapeImageUrl" 
                        class="ab-left" 
                        alt=""
                        loading="lazy"
                        :width="300"
                        :height="400"
                    />
                    <AppImage 
                        v-if="rightShapeImageUrl" 
                        :src="rightShapeImageUrl" 
                        class="ab-right" 
                        alt=""
                        loading="lazy"
                        :width="300"
                        :height="400"
                    />
                    <div class="container md">
                        <div class="row align-items-center">
                            <div class="col-lg-7 order-lg-1 order-2">
                                <div class="about__content v2">
                                    <i v-if="block.iconUrl">
                                        <AppImage :src="block.iconUrl" alt="" loading="lazy" :width="80" :height="80" />
                                    </i>
                                    <div>
                                        <h1 v-html="t(block.title_ar, block.title_en)"></h1>
                                        <div v-html="t(block.content_ar, block.content_en)"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 order-lg-2 order-1">
                                <div class="about__img">
                                    <AppImage 
                                        v-if="block.imageUrl" 
                                        :src="block.imageUrl" 
                                        alt=""
                                        loading="lazy"
                                        class="about-main-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </section>
    </div>
</template>

<style scoped>
.about-section-wrapper {
    margin-block: clamp(1.5rem, 1rem + 2vw, 3rem);
    padding-top: clamp(1rem, 0.5rem + 1.5vw, 2rem);
}

.about-area {
    position: relative;
}

.about-block-alt {
    padding: clamp(1.5rem, 1rem + 2vw, 3rem) 0;
}

.bg-light-gray {
    background-color: #fcfcfd;
}

@media (max-width: 767px) {
    .ab-left,
    .ab-right,
    .hero-shape-5 {
        display: none;
    }
}

/* RTL adjustments handled by Bootstrap's order classes */
</style>
