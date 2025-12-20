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
    <section class="about-area">
        <img 
            v-if="shapeImageUrl" 
            :src="shapeImageUrl" 
            class="hero-shape-5" 
            alt=""
            loading="lazy"
            decoding="async"
        />
        
        <!-- First block style (CEO Message style) -->
        <template v-for="(block, idx) in blocks" :key="idx">
            <!-- Image Right Layout (First block style) -->
            <div 
                v-if="block.layout === 'image-right' || block.layout === 'first' || (idx === 0 && !block.layout)" 
                class="container pb-5"
            >
                <div class="row align-items-center">
                    <div class="col-lg-6 mt-4 mt-lg-0">
                        <div class="about__content">
                            <i v-if="block.iconUrl">
                                <img :src="block.iconUrl" alt="" loading="lazy" decoding="async" />
                            </i>
                            <div>
                                <h1 class="color-text">{{ t(block.title_ar, block.title_en) }}</h1>
                                <div v-html="t(block.content_ar, block.content_en)"></div>
                                <span v-if="block.author">— {{ block.author }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about__img">
                            <img 
                                v-if="block.imageUrl" 
                                :src="block.imageUrl" 
                                alt=""
                                loading="lazy"
                                decoding="async"
                            />
                            <img 
                                v-if="block.imageBgUrl" 
                                :src="block.imageBgUrl" 
                                class="hero-icon-bg" 
                                alt=""
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Alternative Layout (company info, vision style) -->
            <div 
                v-else 
                class="position-relative"
                :style="{ backgroundColor: idx % 2 !== 0 ? '#fcfcfd' : '' }"
            >
                <img 
                    v-if="leftShapeImageUrl" 
                    :src="leftShapeImageUrl" 
                    class="ab-left" 
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    v-if="rightShapeImageUrl" 
                    :src="rightShapeImageUrl" 
                    class="ab-right" 
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
                <div class="container md">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="about__content v2">
                                <i v-if="block.iconUrl">
                                    <img :src="block.iconUrl" alt="" loading="lazy" decoding="async" />
                                </i>
                                <div>
                                    <h1>{{ t(block.title_ar, block.title_en) }}</h1>
                                    <div v-html="t(block.content_ar, block.content_en)"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about__img">
                                <img 
                                    v-if="block.imageUrl" 
                                    :src="block.imageUrl" 
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </section>
</template>
