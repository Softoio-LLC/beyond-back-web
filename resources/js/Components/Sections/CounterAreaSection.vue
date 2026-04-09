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

// Counter items
const counters = computed(() => {
    return (props.content.counters || []).map(counter => ({
        icon: getImageUrl(counter.icon),
        value: counter.value,
        label: props.lang === 'ar' ? counter.label_ar : counter.label_en,
    }));
});

// Extra class for margin top adjustment
const extraClasses = computed(() => props.content.no_margin_top ? 'mt-0' : '');
</script>

<template>
    <!--------- Counter Section START ---------->
    <section class="counter-area" :class="extraClasses">
        <div class="container">
            <div class="counter__wrapper">
                <div class="row">
                    <div 
                        v-for="(counter, index) in counters" 
                        :key="index"
                        class="col-sm-6 col-md-6 col-lg-3"
                    >
                        <div class="counter__block">
                            <i v-if="counter.icon">
                                <AppImage :src="counter.icon" alt="" loading="lazy" :width="64" :height="64" />
                            </i>
                            <h1>
                                {{ counter.value }}
                                <span v-html="counter.label"></span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ------- Counter Section End ----------------- -->
</template>
