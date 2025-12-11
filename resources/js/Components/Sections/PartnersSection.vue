<script setup>
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
</script>

<template>
    <section class="brand-area">
        <div class="container">
            <div class="swiper brand-logos-slide">
                <div class="swiper-wrapper">
                    <div 
                        v-for="(logo, index) in content.logos" 
                        :key="index" 
                        class="logo-items swiper-slide" 
                        data-aos="zoom-in"
                    >
                        <a :href="logo.url || '#'">
                            <img :src="logo.image" :alt="logo.alt || 'Logo'" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
