<script setup>
import { computed } from 'vue';
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import HeaderSection from '@/Components/Sections/HeaderSection.vue';
import HeroSection from '@/Components/Sections/HeroSection.vue';
import HeroSliderSection from '@/Components/Sections/HeroSliderSection.vue';
import HeroCommonSection from '@/Components/Sections/HeroCommonSection.vue';
import PartnersSection from '@/Components/Sections/PartnersSection.vue';
import ConceptSection from '@/Components/Sections/ConceptSection.vue';
import ServicesSection from '@/Components/Sections/ServicesSection.vue';
import CTASection from '@/Components/Sections/CTASection.vue';
import WorkSection from '@/Components/Sections/WorkSection.vue';
import TeamSection from '@/Components/Sections/TeamSection.vue';
import ContactSection from '@/Components/Sections/ContactSection.vue';
import GallerySection from '@/Components/Sections/GallerySection.vue';
import FAQSection from '@/Components/Sections/FAQSection.vue';
import InquirySection from '@/Components/Sections/InquirySection.vue';
import FooterSection from '@/Components/Sections/FooterSection.vue';
import MapSection from '@/Components/Sections/MapSection.vue';
import ContactInfoSection from '@/Components/Sections/ContactInfoSection.vue';
import ContactBannerSection from '@/Components/Sections/ContactBannerSection.vue';
// New sections
import CommonServiceSection from '@/Components/Sections/CommonServiceSection.vue';
import CounterAreaSection from '@/Components/Sections/CounterAreaSection.vue';
import GalleryPageSection from '@/Components/Sections/GalleryPageSection.vue';
import HeroRiyaSection from '@/Components/Sections/HeroRiyaSection.vue';
import HeroJiyadSection from '@/Components/Sections/HeroJiyadSection.vue';
import HeroShopsZSection from '@/Components/Sections/HeroShopsZSection.vue';
import HeroBeyondERPSection from '@/Components/Sections/HeroBeyondERPSection.vue';
import HeroBeyondPaySection from '@/Components/Sections/HeroBeyondPaySection.vue';
import ProductSection from '@/Components/Sections/ProductSection.vue';
import AboutSection from '@/Components/Sections/AboutSection.vue';

const props = defineProps({
    page: {
        type: Object,
        required: true
    },
    sections: {
        type: Array,
        default: () => []
    },
    lang: {
        type: String,
        default: 'ar'
    },
    seo: {
        type: Object,
        default: () => ({})
    },
    jsonLdSchema: {
        type: Array,
        default: () => []
    }
});

// Map section type keys to components
const sectionComponents = {
    'header': HeaderSection,
    'hero': HeroSection,
    'hero_slider': HeroSliderSection,
    'hero_common': HeroCommonSection,
    'partners': PartnersSection,
    'concept': ConceptSection,
    'services': ServicesSection,
    'cta': CTASection,
    'work': WorkSection,
    'projects': WorkSection, // Alias for seeder key
    'team': TeamSection,
    'contact': ContactSection,
    'gallery': GallerySection,
    'faq': FAQSection,
    'inquiry': InquirySection,
    'footer': FooterSection,
    'map': MapSection,
    'contact-info': ContactInfoSection,
    'contact-banner': ContactBannerSection,
    
    // New sections
    'common_service': CommonServiceSection,
    'counter_area': CounterAreaSection,
    'gallery_page': GalleryPageSection,
    'hero_riya': HeroRiyaSection,
    'hero_jiyad': HeroJiyadSection,
    'hero_shopsz': HeroShopsZSection,
    'hero_beyond_erp': HeroBeyondERPSection,
    'hero_beyond_pay': HeroBeyondPaySection,
    'product': ProductSection,
    'about': AboutSection,
};

// Get component for section type
const getComponent = (sectionKey) => {
    return sectionComponents[sectionKey] || null;
};

// Separate header/footer from main sections
const headerSection = computed(() => props.sections.find(s => s.section_type?.key === 'header'));
const footerSection = computed(() => props.sections.find(s => s.section_type?.key === 'footer'));
const mainSections = computed(() => props.sections.filter(s => 
    s.section_type?.key !== 'header' && s.section_type?.key !== 'footer'
));

// Get LCP image URL for preloading (first hero slide image)
const lcpImage = computed(() => {
    const heroSection = props.sections.find(s => 
        s.section_type?.key === 'hero' || 
        s.section_type?.key === 'hero_slider' ||
        s.section_type?.key === 'hero_common'
    );
    
    if (!heroSection?.content) return null;
    
    // Try to get the first slide image
    const slides = heroSection.content.slides;
    if (slides?.length > 0 && slides[0].image) {
        const img = slides[0].image;
        if (img.startsWith('http') || img.startsWith('/')) return img;
        // Generate optimized image URL
        const params = new URLSearchParams({
            path: img,
            q: '85',
            f: 'webp',
            w: '600'
        });
        return `/img?${params.toString()}`;
    }
    
    // Try background image
    const bgImage = heroSection.content.background_image;
    if (bgImage) {
        if (bgImage.startsWith('http') || bgImage.startsWith('/')) return bgImage;
        return `/storage/${bgImage}`;
    }
    
    return null;
});
</script>

<template>
    <WebsiteLayout :lang="lang" :page="page" :seo="seo" :jsonLdSchema="jsonLdSchema" :lcpImage="lcpImage">
        <!-- Header -->
        <component 
            v-if="headerSection"
            :is="getComponent('header')"
            :content="headerSection.content"
            :lang="lang"
            :hreflang="seo?.hreflang"
        />

        <main>
            <!-- Dynamic Sections -->
            <template v-for="section in mainSections" :key="section.id">
                <component 
                    v-if="getComponent(section.section_type?.key)"
                    :is="getComponent(section.section_type?.key)"
                    :content="section.content"
                    :lang="lang"
                />
            </template>
        </main>

        <!-- Footer -->
        <component 
            v-if="footerSection"
            :is="getComponent('footer')"
            :content="footerSection.content"
            :lang="lang"
        />
    </WebsiteLayout>
</template>
