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

const tagline = computed(() => props.lang === 'ar' ? props.content.tagline_ar : props.content.tagline_en);
const getMenuTitle = (col) => props.lang === 'ar' ? col.title_ar : col.title_en;
const getLinkLabel = (link) => props.lang === 'ar' ? link.label_ar : link.label_en;
const contactTitle = computed(() => props.lang === 'ar' ? props.content.contact_info.title_ar : props.content.contact_info.title_en);
const socialTitle = computed(() => props.lang === 'ar' ? props.content.social.title_ar : props.content.social.title_en);
</script>

<template>
    <footer class="footer-area">
        <div class="container">
            <div class="footer-inner-block position-relative z-1 overflow-hidden">
                <div class="footer-top-wrapper">
                    <div class="row">
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-identity">
                                <div class="footer-logo">
                                    <a href="#">
                                        <img :src="content.logo" alt="Logo" />
                                    </a>
                                </div>
                                <div class="footer-content">
                                    <p>{{ tagline }}</p>
                                </div>
                            </div>
                        </div>
                        <div 
                            v-for="(column, index) in content.menu_columns" 
                            :key="index"
                            class="col-xl-2" 
                            data-aos="fade-in" 
                            data-aos-delay="300"
                        >
                            <div class="footer-menu-list">
                                <div class="footer-inner-title">
                                    <h4>{{ getMenuTitle(column) }}</h4>
                                </div>
                                <ul>
                                    <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                                        <a :href="link.url">{{ getLinkLabel(link) }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-menu-list">
                                <div class="footer-inner-title">
                                    <h4>{{ contactTitle }}</h4>
                                </div>
                                <ul>
                                    <li v-for="(item, itemIndex) in content.contact_info.items" :key="itemIndex">
                                        <a :href="item.url" class="d-flex align-items-center">
                                            <span class="d-flex align-items-center justify-content-between">
                                                <img :src="item.icon" alt="Icon" />
                                            </span>
                                            {{ item.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-social-block">
                                <div class="footer-inner-title">
                                    <h4>{{ socialTitle }}</h4>
                                </div>
                                <div class="social-icons d-flex align-items-center">
                                    <a 
                                        v-for="(social, socialIndex) in content.social.links" 
                                        :key="socialIndex"
                                        :href="social.url" 
                                        class="d-flex align-items-center justify-content-center"
                                    >
                                        <img :src="social.icon" alt="Icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-text text-center">
                    <p>{{ content.copyright_text }}</p>
                </div>
                <div class="footer-shape position-absolute z-n1">
                    <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
                </div>
            </div>
        </div>
    </footer>
</template>
