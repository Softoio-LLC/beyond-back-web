<script setup>
import { computed } from 'vue';
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import HeaderSection from '@/Components/Sections/HeaderSection.vue';
import HeroSection from '@/Components/Sections/HeroSection.vue';
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
    'footer': FooterSection
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
</script>

<template>
    <WebsiteLayout :lang="lang" :page="page" :seo="seo" :jsonLdSchema="jsonLdSchema">
        <!-- Header -->
        <component 
            v-if="headerSection"
            :is="getComponent('header')"
            :content="headerSection.content"
            :lang="lang"
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
