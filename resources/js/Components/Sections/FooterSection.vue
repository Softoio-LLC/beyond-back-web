<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

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

// Check if URL is internal (should use Inertia navigation)
const isInternalUrl = (url) => {
    if (!url) return false;
    // External URLs or special protocols
    if (url.startsWith('http://') || url.startsWith('https://') || 
        url.startsWith('mailto:') || url.startsWith('tel:') ||
        url.startsWith('javascript:') || url === '#') {
        return false;
    }
    // Hash links for same-page anchors
    if (url.startsWith('#')) return false;
    // Internal paths
    return url.startsWith('/') || !url.includes('://');
};

// Get URL based on current language (supports separate url_en/url_ar)
const getUrl = (link) => {
    if (props.lang === 'ar') {
        return link.url_ar || link.url || '#';
    }
    return link.url_en || link.url || '#';
};

const tagline = computed(() => props.lang === 'ar' ? props.content.tagline_ar : props.content.tagline_en);
const getMenuTitle = (col) => props.lang === 'ar' ? col.title_ar : col.title_en;
const getLinkLabel = (link) => props.lang === 'ar' ? link.label_ar : link.label_en;
const contactTitle = computed(() => props.lang === 'ar' ? props.content.contact_info?.title_ar : props.content.contact_info?.title_en);
const socialTitle = computed(() => props.lang === 'ar' ? props.content.social?.title_ar : props.content.social?.title_en);

// Image URLs
const logoUrl = computed(() => getImageUrl(props.content.logo));
const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));

// Process contact items with proper image URLs
const contactItems = computed(() => {
    const items = props.content.contact_info?.items || [];
    return items.map(item => ({
        ...item,
        iconUrl: getImageUrl(item.icon)
    }));
});

// Process social links with proper image URLs
const socialLinks = computed(() => {
    const links = props.content.social?.links || [];
    return links.map(social => ({
        ...social,
        iconUrl: getImageUrl(social.icon)
    }));
});
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
                                    <Link :href="lang === 'ar' ? '/ar' : '/'">
                                        <img v-if="logoUrl" :src="logoUrl" alt="Logo" loading="lazy" />
                                    </Link>
                                </div>
                                <div class="footer-content">
                                    <p v-html="tagline"></p>
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
                                    <h4 v-html="getMenuTitle(column)"></h4>
                                </div>
                                <ul>
                                    <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                                        <Link v-if="isInternalUrl(getUrl(link))" :href="getUrl(link)" v-html="getLinkLabel(link)"></Link>
                                        <a v-else :href="getUrl(link)" v-html="getLinkLabel(link)"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-menu-list">
                                <div class="footer-inner-title">
                                    <h4 v-html="contactTitle"></h4>
                                </div>
                                <ul>
                                    <li v-for="(item, itemIndex) in contactItems" :key="itemIndex">
                                        <a :href="item.url" class="d-flex align-items-center">
                                            <span v-if="item.iconUrl" class="d-flex align-items-center justify-content-between">
                                                <img :src="item.iconUrl" alt="Icon" loading="lazy" />
                                            </span>
                                            <span v-html="item.text"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-social-block">
                                <div class="footer-inner-title">
                                    <h4 v-html="socialTitle"></h4>
                                </div>
                                <div class="social-icons d-flex align-items-center">
                                    <a 
                                        v-for="(social, socialIndex) in socialLinks" 
                                        :key="socialIndex"
                                        :href="social.url" 
                                        class="d-flex align-items-center justify-content-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img v-if="social.iconUrl" :src="social.iconUrl" alt="Icon" loading="lazy" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-text text-center">
                    <p v-html="content.copyright_text"></p>
                </div>
                <div v-if="shapeImageUrl" class="footer-shape position-absolute z-n1">
                    <img class="w-100 h-100 object-fit-cover" :src="shapeImageUrl" alt="Shape" loading="lazy" />
                </div>
            </div>
        </div>
    </footer>
</template>
