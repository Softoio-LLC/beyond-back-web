<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import Button from '@/Components/UI/Button.vue';
import Toast from '@/Components/UI/Toast.vue';
import AddSectionModal from './AddSectionModal.vue';
import EditSectionSidebar from './EditSectionSidebar.vue';
import Sortable from 'sortablejs';

// Import section components for live preview
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
import ContactBannerSection from '@/Components/Sections/ContactBannerSection.vue';
import ContactInfoSection from '@/Components/Sections/ContactInfoSection.vue';
import AboutSection from '@/Components/Sections/AboutSection.vue';
// New section components
import CommonServiceSection from '@/Components/Sections/CommonServiceSection.vue';
import CounterAreaSection from '@/Components/Sections/CounterAreaSection.vue';
import GalleryPageSection from '@/Components/Sections/GalleryPageSection.vue';
import HeroRiyaSection from '@/Components/Sections/HeroRiyaSection.vue';
import HeroJiyadSection from '@/Components/Sections/HeroJiyadSection.vue';
import HeroShopsZSection from '@/Components/Sections/HeroShopsZSection.vue';
import HeroBeyondERPSection from '@/Components/Sections/HeroBeyondERPSection.vue';
import HeroBeyondPaySection from '@/Components/Sections/HeroBeyondPaySection.vue';
import ProductSection from '@/Components/Sections/ProductSection.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    page: {
        type: Object,
        required: true,
    },
    sections: {
        type: Array,
        default: () => [],
    },
    sectionTypes: {
        type: Array,
        default: () => [],
    },
});

// Section components mapping
const sectionComponents = {
    'header': HeaderSection,
    'hero': HeroSection,
    'hero_slider': HeroSliderSection,
    'hero_common': HeroCommonSection,
    'slider': HeroSliderSection,
    'partners': PartnersSection,
    'concept': ConceptSection,
    'services': ServicesSection,
    'cta': CTASection,
    'work': WorkSection,
    'projects': WorkSection,
    'team': TeamSection,
    'contact': ContactSection,
    'gallery': GallerySection,
    'faq': FAQSection,
    'inquiry': InquirySection,
    'footer': FooterSection,
    'contact-banner': ContactBannerSection,
    'contact-info': ContactInfoSection,
    'about': AboutSection,
    // New section components
    'common_service': CommonServiceSection,
    'counter_area': CounterAreaSection,
    'gallery_page': GalleryPageSection,
    'hero_riya': HeroRiyaSection,
    'hero_jiyad': HeroJiyadSection,
    'hero_shopsz': HeroShopsZSection,
    'hero_beyond_erp': HeroBeyondERPSection,
    'hero_beyond_pay': HeroBeyondPaySection,
    'product': ProductSection,
};

// Get component for section type
const getComponent = (sectionKey) => {
    return sectionComponents[sectionKey] || null;
};

// State
const showAddModal = ref(false);
const editingSectionId = ref(null);
const sectionsList = ref([...props.sections]);
const sortableInstance = ref(null);
const hasUnsavedChanges = ref(false);
const isSaving = ref(false);
const toast = ref({ show: false, message: '', type: 'success' });
const previewLang = ref('en');
const previewDevice = ref('desktop');
const previewIframe = ref(null);

// Computed
const editingSection = computed(() => {
    if (!editingSectionId.value) return null;
    return sectionsList.value.find(s => s.id === editingSectionId.value);
});

const draggableSections = computed(() => {
    return sectionsList.value.filter(s => !s.section_type.is_fixed);
});

const headerSection = computed(() => {
    return sectionsList.value.find(s => s.section_type.key === 'header');
});

const footerSection = computed(() => {
    return sectionsList.value.find(s => s.section_type.key === 'footer');
});

// Ordered sections for preview (header first, then sorted, then footer)
const orderedPreviewSections = computed(() => {
    const header = sectionsList.value.find(s => s.section_type.key === 'header');
    const footer = sectionsList.value.find(s => s.section_type.key === 'footer');
    const middle = sectionsList.value
        .filter(s => s.section_type.key !== 'header' && s.section_type.key !== 'footer')
        .sort((a, b) => a.order - b.order);
    
    return [
        ...(header ? [header] : []),
        ...middle,
        ...(footer ? [footer] : []),
    ];
});

// Generate preview HTML with all styles
const previewHtml = computed(() => {
    const direction = previewLang.value === 'ar' ? 'rtl' : 'ltr';
    const lang = previewLang.value;
    
    // Build sections HTML by rendering section data
    let sectionsHtml = '';
    
    for (const section of orderedPreviewSections.value) {
        if (!section.is_active) {
            sectionsHtml += `<div class="preview-inactive-section" data-section-id="${section.id}">
                <span>${section.section_type.name_en} (Hidden)</span>
            </div>`;
            continue;
        }
        
        const content = section.content || {};
        const key = section.section_type?.key;
        
        sectionsHtml += `<div class="preview-section-wrapper" data-section-id="${section.id}" data-section-key="${key}">`;
        sectionsHtml += generateSectionHtml(key, content, lang);
        sectionsHtml += `</div>`;
    }
    
    return `<!DOCTYPE html>
<html lang="${lang}" dir="${direction}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css">
    <link rel="stylesheet" href="/assets/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="/assets/css/aos.css">
    <link rel="stylesheet" href="/assets/css/default.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/responsive.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        .preview-section-wrapper {
            position: relative;
            cursor: pointer;
            transition: outline 0.15s;
        }
        .preview-section-wrapper:hover {
            outline: 3px solid #004F4C;
            outline-offset: -3px;
        }
        .preview-section-wrapper:hover::before {
            content: attr(data-section-key);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;
            padding: 6px 12px;
            background: #004F4C;
            color: white;
            font-size: 12px;
            font-weight: 500;
            text-transform: capitalize;
            border-bottom-right-radius: 6px;
        }
        .preview-inactive-section {
            padding: 40px;
            background: #f3f4f6;
            border: 2px dashed #d1d5db;
            text-align: center;
            color: #6b7280;
            font-style: italic;
            cursor: pointer;
        }
        .preview-inactive-section:hover {
            background: #e5e7eb;
        }
    </style>
</head>
<body class="main-area">
    ${sectionsHtml}
    <script src="/assets/js/bootstrap.bundle.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"><\/script>
    <script src="/assets/js/aos.js"><\/script>
    <script>
        // Handle section clicks to communicate with parent
        document.querySelectorAll('.preview-section-wrapper, .preview-inactive-section').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const sectionId = el.dataset.sectionId;
                window.parent.postMessage({ type: 'edit-section', sectionId: parseInt(sectionId) }, '*');
            });
        });
        
        // Prevent all links from navigating
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });
        
        // Initialize AOS after a slight delay to ensure DOM is ready
        setTimeout(function() {
            if (typeof AOS !== 'undefined') {
                AOS.init({ 
                    duration: 800, 
                    once: true,
                    disable: false
                });
            }
            
            // Initialize Swipers
            if (typeof Swiper !== 'undefined') {
                // Hero slide thumb
                if (document.querySelector('.hero-slide-thumb')) {
                    new Swiper('.hero-slide-thumb', {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        loop: true,
                        autoplay: { delay: 3000, disableOnInteraction: false },
                        breakpoints: {
                            0: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 }
                        }
                    });
                }
                
                // Brand logos
                if (document.querySelector('.brand-logos-slide')) {
                    new Swiper('.brand-logos-slide', {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: { delay: 2000, disableOnInteraction: false },
                        breakpoints: {
                            0: { slidesPerView: 2 },
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 }
                        }
                    });
                }
                
                // Concept thumbnails
                document.querySelectorAll('.concept-thumbnails').forEach(function(el) {
                    new Swiper(el, {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false }
                    });
                });
                
                // Work slides
                if (document.querySelector('.work-single-wrap')) {
                    new Swiper('.work-single-wrap', {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        loop: true,
                        pagination: { el: '.swiper-pagination', clickable: true }
                    });
                }
                
                // Team card wrap
                if (document.querySelector('.team-card-wrap')) {
                    new Swiper('.team-card-wrap', {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        loop: true,
                        pagination: { el: '.team-pagination', clickable: true },
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }
                    });
                }
            }
        }, 100);
    <\/script>
</body>
</html>`;
});

// Generate HTML for each section type
const generateSectionHtml = (key, content, lang) => {
    const c = content;
    const t = (ar, en) => lang === 'ar' ? (ar || en || '') : (en || ar || '');
    
    switch (key) {
        case 'header':
            return generateHeaderHtml(c, lang, t);
        case 'hero':
        case 'slider':
        case 'hero_slider':
            return generateHeroSliderHtml(c, lang, t);
        case 'hero_common':
            return generateHeroCommonHtml(c, lang, t);
        case 'partners':
            return generatePartnersHtml(c, lang, t);
        case 'concept':
            return generateConceptHtml(c, lang, t);
        case 'services':
            return generateServicesHtml(c, lang, t);
        case 'cta':
            return generateCtaHtml(c, lang, t);
        case 'work':
        case 'projects':
            return generateWorkHtml(c, lang, t);
        case 'team':
            return generateTeamHtml(c, lang, t);
        case 'contact':
            return generateContactHtml(c, lang, t);
        case 'gallery':
            return generateGalleryHtml(c, lang, t);
        case 'faq':
            return generateFaqHtml(c, lang, t);
        case 'inquiry':
            return generateInquiryHtml(c, lang, t);
        case 'footer':
            return generateFooterHtml(c, lang, t);
        case 'contact-banner':
            return generateContactBannerHtml(c, lang, t);
        case 'contact-info':
            return generateContactInfoHtml(c, lang, t);
        case 'about':
            return generateAboutHtml(c, lang, t);
        case 'product':
            return generateProductHtml(c, lang, t);
        case 'map':
            return generateMapHtml(c, lang, t);
        case 'common_service':
            return generateCommonServiceHtml(c, lang, t);
        case 'counter_area':
            return generateCounterAreaHtml(c, lang, t);
        case 'gallery_page':
            return generateGalleryPageHtml(c, lang, t);
        case 'hero_riya':
            return generateHeroRiyaHtml(c, lang, t);
        case 'hero_jiyad':
            return generateHeroJiyadHtml(c, lang, t);
        case 'hero_shopsz':
            return generateHeroShopsZHtml(c, lang, t);
        case 'hero_beyond_erp':
            return generateHeroBeyondERPHtml(c, lang, t);
        case 'hero_beyond_pay':
            return generateHeroBeyondPayHtml(c, lang, t);
        default:
            return `<div class="p-5 text-center text-muted">Section: ${key}</div>`;
    }
};

// Header Section HTML
const generateHeaderHtml = (c, lang, t) => {
    const menuItems = c.menu_items || [];
    return `
    <header class="header-area" data-aos="fade-in">
        <div class="container">
            <div class="header-inner-block d-flex align-items-center justify-content-between">
                <div class="header-left-block d-flex align-items-center">
                    <div class="header-logo">
                        <a href="#"><img src="${c.logo || '/assets/img/logo.png'}" alt="Logo" /></a>
                    </div>
                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul class="d-flex align-items-center">
                                ${menuItems.map((item, idx) => {
                                    if (!item.children || item.children.length === 0) {
                                        return `<li><a href="${item.url || '#'}">${t(item.label_ar, item.label_en)}</a></li>`;
                                    }
                                    return `
                                    <li>
                                        <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span><i class="far fa-chevron-down"></i></span> ${t(item.label_ar, item.label_en)}
                                        </a>
                                        <ul class="dropdown-menu">
                                            ${item.children.map((child, cIdx) => `
                                                <li><a class="dropdown-item ${cIdx === 0 ? 'pt-0' : ''} ${cIdx === item.children.length - 1 ? 'border-0 pb-0' : ''}" href="${child.url || '#'}">
                                                    ${t(child.label_ar, child.label_en)} <span><i class="far fa-chevron-left"></i></span>
                                                </a></li>
                                            `).join('')}
                                        </ul>
                                    </li>`;
                                }).join('')}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="header-btns d-flex align-items-center gap-2">
                    <button class="header-contact-btn d-none d-lg-inline-flex align-items-center" type="button">
                        ${t(c.contact_button_text_ar, c.contact_button_text_en) || 'Contact Us'} <span><i class="far fa-angle-left"></i></span>
                    </button>
                    <div class="language-select">
                        <div class="selectorwith_flag">
                            <div class="select-box">
                                <div class="select-box__current" tabindex="1">
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="lang-ar-preview" value="ar" name="language-preview" ${lang === 'ar' ? 'checked' : ''} />
                                        <p class="select-box__input-text"><img src="/assets/img/flag-1.png" alt="" /> عربي</p>
                                    </div>
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="lang-en-preview" value="en" name="language-preview" ${lang === 'en' ? 'checked' : ''} />
                                        <p class="select-box__input-text"><img src="/assets/img/flag-2.png" alt="" />English</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>`;
};

// Hero Section HTML
const generateHeroHtml = (c, lang, t) => {
    const variant = c.variant || 'slider';
    const slides = c.slides || [];
    const bgImage = c.background_image && c.background_image.trim() !== '' && !c.background_image.includes('undefined');
    const defaultBg = 'linear-gradient(135deg, #004F4C 0%, #003836 100%)';
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    
    // Variant: Service Layout (Dark background with gradient)
    if (variant === 'service' || variant === 'v2') {
        const bgStyle = bgImage ? `url(${c.background_image}) center/cover no-repeat` : defaultBg;
        return `
        <section class="hero-area v2 position-relative text-white pb-5 pb-lg-0" style="background: ${bgStyle}; min-height: 400px; padding: 80px 0;">
            ${c.shape_image ? `<img src="${c.shape_image}" class="hero-shape" alt="" />` : ''}
            <div class="container">
                <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                    <div class="col-lg-6">
                        <div class="hero__block" data-aos="fade-up">
                            ${c.icon ? `<i><img src="${c.icon}" alt="" /></i>` : ''}
                            <div>
                                <h1 class="text-white fs-56">${t(c.title_ar, c.title_en) || 'Hero Title'}</h1>
                                <p>${t(c.description_ar, c.description_en) || ''}</p>
                                <a href="${c.button_url || '#'}" class="common-btn d-flex align-items-center w-max">
                                    ${t(c.button_text_ar, c.button_text_en) || 'Get Started'} <span><i class="${angleIcon}"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero__img" data-aos="fade-up" data-aos-delay="200">
                            ${c.hero_image || c.side_image ? `<img src="${c.hero_image || c.side_image}" alt="" />` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
    
    // Variant: Common Layout (Light background, colored title, two buttons)
    if (variant === 'common') {
        const titleColorClass = c.title_color_class || 'color-text';
        return `
        <section class="common-hero-area pb-4 pb-lg-0 pt-4">
            ${c.shape_image ? `<img src="${c.shape_image}" class="hero-shape" alt="" />` : ''}
            <div class="container">
                <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                    <div class="col-lg-6">
                        <div class="hero__block">
                            ${c.icon ? `<i><img src="${c.icon}" alt="" /></i>` : ''}
                            <div>
                                <h1 class="${titleColorClass} fs-56">${t(c.title_ar, c.title_en) || 'Hero Title'}</h1>
                                <p>${t(c.description_ar, c.description_en) || ''}</p>
                                <div class="work-card-btns green-btns d-flex align-items-center">
                                    ${c.button_text_ar || c.button_text_en ? `
                                    <a href="${c.button_url || '#'}">
                                        ${t(c.button_text_ar, c.button_text_en)} <span><i class="${angleIcon}"></i></span>
                                    </a>` : ''}
                                    ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                    <a href="${c.secondary_button_url || '#'}" class="secondary-btn">
                                        ${t(c.secondary_button_text_ar, c.secondary_button_text_en)} <span><i class="${longArrowIcon}"></i></span>
                                    </a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <div class="hero__img">
                            ${c.hero_image || c.side_image ? `<img src="${c.hero_image || c.side_image}" alt="" />` : ''}
                            ${c.hero_bg_image ? `<img src="${c.hero_bg_image}" class="hero-icon-bg" alt="" />` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
    
    // Default: Slider Layout (Homepage)
    return `
    <section class="hero-area position-relative" style="background-image: url('${c.background_image || '/assets/img/hero-bg.png'}')">
        <div class="container">
            <div class="hero-inner-block">
                <div class="hero-title" data-aos="fade-up">
                    <h5>${t(c.subtitle_ar, c.subtitle_en) || ''}</h5>
                    <h1>${t(c.title_ar, c.title_en) || 'Hero Title'}</h1>
                </div>
                ${slides.length > 0 ? `
                <div class="swiper hero-slide-thumb" data-aos="fade-up" data-aos-delay="300">
                    <div class="swiper-wrapper">
                        ${slides.map(slide => `
                            <div class="swiper-slide">
                                <div class="hero-slide-card">
                                    <img class="w-100 h-100 object-fit-cover" src="${slide.image || ''}" alt="Thumb" />
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                <div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500">
                    <p>${t(c.description_ar, c.description_en) || ''}</p>
                </div>
                <div class="hero-btn d-flex justify-content-center" data-aos="fade-up">
                    <a href="${c.button_url || '#'}" class="common-btn d-flex align-items-center">
                        ${t(c.button_text_ar, c.button_text_en) || 'Get Started'} <span><i class="${angleIcon}"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
};

// Partners Section HTML
const generatePartnersHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const logos = c.logos || c.partners || [];
    return `
    <section class="brand-area">
        <div class="container">
            <div class="swiper brand-logos-slide">
                <div class="swiper-wrapper">
                    ${logos.map(p => `
                        <div class="logo-items swiper-slide" data-aos="zoom-in">
                            <a href="${p.url || '#'}"><img src="${getImageUrl(p.image || p.logo)}" alt="${p.alt || p.name || 'Partner'}" /></a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>`;
};

// Concept Section HTML
const generateConceptHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const blocks = c.blocks || [];
    const counters = c.counters || [];
    
    // Helper to strip HTML tags for safe display
    const stripTags = (str) => {
        if (!str) return '';
        return str.replace(/<[^>]*>/g, '');
    };
    
    return `
    <section class="concept-area position-relative pt-80" style="padding-bottom: 80px;">
        <div class="container">
            <div class="concept-area-wrapper">
                ${blocks.map((block, idx) => {
                    // Get paragraphs - handle both array of strings and array of objects
                    const paragraphsAr = block.paragraphs_ar || [];
                    const paragraphsEn = block.paragraphs_en || [];
                    const paragraphs = lang === 'ar' ? paragraphsAr : paragraphsEn;
                    
                    // Get slides/images
                    const slides = block.slides || block.images || [];
                    
                    // Determine layout (image on left or right)
                    const imageOnLeft = block.image_on_left === true;
                    
                    return `
                <div class="concept-wrapper ${idx > 0 ? 'second-concept-wrapper' : ''} position-relative z-1 overflow-hidden" style="background: linear-gradient(135deg, #004F4C 0%, #003836 100%); border-radius: 24px; padding: 40px; margin-bottom: 30px;">
                    ${c.shape_image ? `<div class="concept-wrapper-shape position-absolute z-n1" style="top: 0; right: 0; opacity: 0.1;"><img src="${getImageUrl(c.shape_image)}" alt="Shape" style="max-width: 300px;" /></div>` : ''}
                    <div class="row align-items-center g-4">
                        <div class="col-lg-6 ${imageOnLeft ? '' : 'order-lg-2'}">
                            <div class="concept-thumbnails d-flex gap-3 flex-wrap justify-content-center">
                                ${slides.slice(0, 4).map((slide, slideIdx) => `
                                    <div class="concept-single-thumb" style="width: calc(50% - 8px); border-radius: ${slideIdx % 2 === 0 ? '0 0 0 24px' : '24px 0 0 0'}; overflow: hidden;">
                                        <img src="${getImageUrl(slide.image || slide)}" alt="${slide.alt || 'Thumb'}" style="width: 100%; height: 150px; object-fit: cover;" />
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="col-lg-6 ${imageOnLeft ? 'order-lg-2' : ''}">
                            <div class="concept-content" style="color: #fff;">
                                <h3 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1rem; color: #fff;">${t(block.title_ar, block.title_en)}</h3>
                                ${paragraphs.map(p => {
                                    // Handle both plain text and HTML content
                                    const text = typeof p === 'object' ? (lang === 'ar' ? p.text_ar : p.text_en) : p;
                                    const cleanText = stripTags(text);
                                    return `<p style="color: rgba(255,255,255,0.85); margin-bottom: 0.75rem; font-size: 0.95rem; line-height: 1.6;">${cleanText}</p>`;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>`;
                }).join('')}
                ${counters.length > 0 ? `
                <div class="counter-up-area d-flex align-items-center justify-content-center flex-wrap gap-4 mt-4" style="position: relative;">
                    ${counters.map((counter, idx) => `
                        <div class="counter-up-step d-flex align-items-center justify-content-center flex-column" style="background: linear-gradient(135deg, #004F4C 0%, #003836 100%); border-radius: 100px; padding: 20px 40px; min-width: 180px;">
                            <h5 style="color: #fff; font-size: 1.5rem; font-weight: 700; margin: 0;">${counter.value}</h5>
                            <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 0.875rem;">${t(counter.label_ar, counter.label_en)}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    </section>`;
};

// Services Section HTML
const generateServicesHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const services = c.services || [];
    return `
    <section class="service-area position-relative overflow-hidden pb-80 z-1">
        <div class="container">
            <div class="service-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t(c.title_ar, c.title_en)}</h3>
                </div>
                <div class="row">
                    ${services.map(service => `
                        <div class="col-md-6" data-aos="fade-up">
                            <div class="service-single-card d-flex align-items-center">
                                <div class="service-card-thumb w-100">
                                    <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(service.image) || '/assets/img/service-thumb-1.png'}" alt="Thumb" />
                                </div>
                                <div class="service-card-content">
                                    <h4>${t(service.title_ar, service.title_en)}</h4>
                                    <p>${t(service.description_ar, service.description_en)}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        ${c.shape_image ? `<div class="service-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c.shape_image)}" alt="Shape" /></div>` : ''}
    </section>`;
};

// CTA Section HTML
const generateCtaHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const cards = c.contact_cards || [];
    const shapeUrl = getImageUrl(c.shape_image);
    
    return `
    <section class="cta-area overflow-hidden position-relative z-1 pt-80 pb-80">
        <div class="container">
            <div class="cta-inner-block">
                <div class="row align-items-center">
                    <div class="col-xl-5" data-aos="fade-right">
                        <div class="cta-right-block">
                            <div class="service-card-content cta-content text-end">
                                <a href="${c.button_url || '#'}" class="cta-btn">${t(c.button_text_ar, c.button_text_en) || 'Contact Us'}</a>
                                <h4>${t(c.title_ar, c.title_en)}</h4>
                                <p>${t(c.description_ar, c.description_en)}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="cta-left-block">
                            <div class="row">
                                ${cards.map(card => `
                                    <div class="col-sm-6" data-aos="zoom-in">
                                        <div class="cta-card d-flex align-items-center flex-column">
                                            <span class="d-flex align-items-center justify-content-center"><img src="${getImageUrl(card.icon)}" alt="Icon" /></span>
                                            <h5>${t(card.title_ar, card.title_en)}</h5>
                                            ${(card.links || []).map(link => `<a href="${link.url || '#'}">${link.text}</a>`).join('')}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${shapeUrl ? `<div class="cta-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${shapeUrl}" alt="Shape" /></div>` : ''}
        </div>
    </section>`;
};

// Work/Projects Section HTML
const generateWorkHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const projects = c.projects || [];
    const shapeUrl = getImageUrl(c.shape_image) || '/assets/img/service-shape.png';
    return `
    <section class="work-area position-relative z-1 overflow-hidden">
        <div class="work-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${shapeUrl}" alt="Shape" />
        </div>
        <div class="container">
            <div class="work-inner-block">
                <div class="common-title text-center" data-aos="zoom-in">
                    <h3>${t(c.title_ar, c.title_en)}</h3>
                </div>
                <div class="work-wrapper">
                    <div class="work-single-card position-relative z-1">
                        <div class="swiper work-single-wrap">
                            <div class="swiper-wrapper">
                                ${projects.map(project => `
                                    <div class="swiper-slide">
                                        <div class="work-slide-single-item" data-aos="fade-right">
                                            <div class="work-card-wrap d-flex align-items-center justify-content-between">
                                                <div class="work-card-items">
                                                    <div class="contact-card-content work-card-content">
                                                        <h4>${t(project.title_ar, project.title_en)}</h4>
                                                        <p>${t(project.description_ar, project.description_en)}</p>
                                                    </div>
                                                    <div class="work-card-btns ${project.btn_color_class || ''} d-flex align-items-center">
                                                        <a href="${project.learn_more_url || '#'}">${t(project.learn_more_text_ar, project.learn_more_text_en) || 'Learn More'}<span><i class="far fa-angle-left"></i></span></a>
                                                        <a href="${project.visit_url || '#'}" class="secondary-btn">${t(project.visit_text_ar, project.visit_text_en) || 'Visit Project'}<span><i class="fal fa-long-arrow-left"></i></span></a>
                                                    </div>
                                                </div>
                                                <div class="work-card-thumb">
                                                    <img src="${getImageUrl(project.image)}" alt="${t(project.title_ar, project.title_en)}" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${c.work_shape_image ? `<div class="work-card-shape position-absolute z-n1"><img src="${getImageUrl(c.work_shape_image)}" alt="Shape" /></div>` : ''}
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Team Section HTML
const generateTeamHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const members = c.members || [];
    const shapeUrl = getImageUrl(c.shape_image) || '/assets/img/team-shape.png';
    
    return `
    <section class="team-area">
        <div class="container">
            <div class="team-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t(c.title_ar, c.title_en)}</h3>
                </div>
                <div class="swiper team-card-wrap">
                    <div class="swiper-wrapper">
                        ${members.map((member, idx) => `
                            <div class="swiper-slide team-card position-relative z-1" data-aos="zoom-in" data-aos-delay="${(idx + 2) * 100}">
                                <div class="team-card-shape position-absolute z-n1">
                                    <img class="w-100 h-100 object-fit-cover" src="${shapeUrl}" alt="Shape" />
                                </div>
                                <div class="team-thumb">
                                    <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(member.image)}" alt="Thumb" />
                                </div>
                                <div class="team-card-content">
                                    <h4>${t(member.title_ar, member.title_en)}</h4>
                                    <p>${t(member.description_ar, member.description_en)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="team-pagination"></div>
                </div>
            </div>
        </div>
    </section>`;
};

// Contact Section HTML
const generateContactHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const cards = c.cards || [];
    const bgUrl = getImageUrl(c.background_image) || '/assets/img/contact-bg.png';
    const logoUrl = getImageUrl(c.contact_logo) || '/assets/img/contact-logo.svg';
    
    return `
    <section class="contact-area overflow-hidden" style="background-image: url('${bgUrl}')">
        <div class="container">
            <div class="contact-inner-block p-40 bg-white">
                <div class="row">
                    <div class="col-xl-6" data-aos="fade-right">
                        <div class="contact-right-block">
                            ${cards.map((card, idx) => `
                                <div class="contact-card ${idx === 1 ? 'contact-middle-card' : ''} d-flex align-items-center">
                                    <div class="contact-card-icon">
                                        <img src="${getImageUrl(card.icon)}" alt="Icon" />
                                    </div>
                                    <div class="contact-card-content">
                                        <h4>${t(card.title_ar, card.title_en)}</h4>
                                        <p>${t(card.description_ar, card.description_en)}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="col-xl-6" data-aos="zoom-in">
                        <div class="contact-left d-flex align-items-center justify-content-start flex-column">
                            <div class="contact-logo">
                                <a href="#"><img src="${logoUrl}" alt="Logo" /></a>
                            </div>
                            <div class="contact-btn">
                                <a href="${c.button_url || '#'}" class="common-btn d-flex align-items-center">
                                    ${t(c.button_text_ar, c.button_text_en) || 'Contact Us'}<span><i class="far fa-angle-left"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Gallery Section HTML
const generateGalleryHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const images = c.images || [];
    return `
    <section class="gallery-area overflow-hidden">
        <div class="container">
            <div class="gallery-inner-block position-relative z-1">
                ${c.shape_image ? `<div class="gallery-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c.shape_image)}" alt="Shape" /></div>` : ''}
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t(c.title_ar, c.title_en)}</h3>
                    <p>${t(c.subtitle_ar, c.subtitle_en)}</p>
                </div>
                <div class="gallery-wrapper">
                    <div class="row">
                        ${images.map(img => `
                            <div class="col-md-6" data-aos="zoom-in">
                                <div class="gallery-thumb position-relative">
                                    <img src="${getImageUrl(img.image)}" alt="Thumb" />
                                    <div class="gallery-thumb-text position-absolute">
                                        <h3>${img.title || ''}</h3>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ${c.button_text_en ? `
                <div class="gallery-button d-flex justify-content-center" data-aos="fade-up">
                    <a href="${c.button_url || '#'}" class="common-btn d-flex align-items-center">
                        ${t(c.button_text_ar, c.button_text_en)} <span><i class="far fa-angle-left"></i></span>
                    </a>
                </div>
                ` : ''}
            </div>
        </div>
    </section>`;
};

// FAQ Section HTML
const generateFaqHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const faqs = c.faqs || [];
    return `
    <section class="faq-area position-relative z-1">
        <div class="faq-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c.shape_image) || '/assets/img/service-shape.png'}" alt="Shape" />
        </div>
        <div class="container">
            <div class="faq-inner-block">
                <div class="common-title text-center mb-40" data-aos="fade-up">
                    <h3>${t(c.title_ar, c.title_en)}</h3>
                    <p>${t(c.subtitle_ar, c.subtitle_en)}</p>
                </div>
                <div class="accordion-wrapper">
                    <div class="accordion faq-accordion" id="faqAccordionPreview">
                        ${faqs.map((faq, idx) => `
                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
                                <h2 class="accordion-header">
                                    <button class="accordion-button ${idx !== 1 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 1 ? 'true' : 'false'}" aria-controls="faqCollapse${idx}">
                                        ${t(faq.question_ar, faq.question_en)}
                                    </button>
                                </h2>
                                <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 1 ? 'show' : ''}" data-bs-parent="#faqAccordionPreview">
                                    <div class="accordion-body">
                                        ${t(faq.answer_ar, faq.answer_en)}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Inquiry Section HTML
const generateInquiryHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    return `
    <section class="inquiry-area">
        <div class="container">
            <div class="inquiry-inner-block overflow-hidden position-relative z-1">
                <div class="inquiry-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-7" data-aos="fade-right">
                            <div class="inquiry-right-block">
                                <div class="inquiry-content">
                                    <h4>${t(c.title_ar, c.title_en)}</h4>
                                    <p>${t(c.description_ar, c.description_en)}</p>
                                </div>
                                <div class="inquiry-btns d-flex align-items-center">
                                    <a href="${c.primary_button_url || '#'}" class="secondary-btn">
                                        ${t(c.primary_button_text_ar, c.primary_button_text_en)} <span><i class="fal fa-angle-left"></i></span>
                                    </a>
                                    <a href="${c.secondary_button_url || '#'}">
                                        ${t(c.secondary_button_text_ar, c.secondary_button_text_en)} <span><i class="fab fa-whatsapp"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5" data-aos="zoom-in">
                            <div class="inquiry-image">
                                ${c.image ? `<img src="${getImageUrl(c.image)}" alt="Image" />` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                ${c.shape_image ? `<div class="inquiry-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c.shape_image)}" alt="Shape" /></div>` : ''}
            </div>
        </div>
    </section>`;
};

// Footer Section HTML
const generateFooterHtml = (c, lang, t) => {
    const menuColumns = c.menu_columns || [];
    const contactInfo = c.contact_info || {};
    const social = c.social || {};
    return `
    <footer class="footer-area">
        <div class="container">
            <div class="footer-inner-block position-relative z-1 overflow-hidden">
                <div class="footer-top-wrapper">
                    <div class="row">
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-identity">
                                <div class="footer-logo">
                                    <a href="#"><img src="${c.logo || '/assets/img/logo.png'}" alt="Logo" /></a>
                                </div>
                                <div class="footer-content">
                                    <p>${t(c.tagline_ar, c.tagline_en)}</p>
                                </div>
                            </div>
                        </div>
                        ${menuColumns.map(col => `
                            <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                                <div class="footer-menu-list">
                                    <div class="footer-inner-title">
                                        <h4>${t(col.title_ar, col.title_en)}</h4>
                                    </div>
                                    <ul>
                                        ${(col.links || []).map(link => `
                                            <li><a href="${link.url || '#'}">${t(link.label_ar, link.label_en)}</a></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        `).join('')}
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-menu-list">
                                <div class="footer-inner-title">
                                    <h4>${t(contactInfo.title_ar, contactInfo.title_en)}</h4>
                                </div>
                                <ul>
                                    ${(contactInfo.items || []).map(item => `
                                        <li>
                                            <a href="${item.url || '#'}" class="d-flex align-items-center">
                                                <span class="d-flex align-items-center justify-content-between"><img src="${item.icon}" alt="Icon" /></span> ${item.text}
                                            </a>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-social-block">
                                <div class="footer-inner-title">
                                    <h4>${t(social.title_ar, social.title_en)}</h4>
                                </div>
                                <div class="social-icons d-flex align-items-center">
                                    ${(social.links || []).map(link => `
                                        <a href="${link.url || '#'}" class="d-flex align-items-center justify-content-center"><img src="${link.icon}" alt="Icon" /></a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-text text-center">
                    <p>${c.copyright_text || ''}</p>
                </div>
                ${c.shape_image ? `<div class="footer-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c.shape_image}" alt="Shape" /></div>` : ''}
            </div>
        </div>
    </footer>`;
};



// About Section HTML
const generateAboutHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const blocks = c.blocks || [];
    
    return `
    <section class="about-area">
        ${c.shape_image ? `<img src="${getImageUrl(c.shape_image)}" class="hero-shape-5" alt="" />` : ''}
        ${blocks.map((block, idx) => {
            const title = t(block.title_ar, block.title_en) || '';
            const content = t(block.content_ar, block.content_en) || '';
            const layout = block.layout || 'image-right';
            const bgColor = idx % 2 === 0 ? '' : 'background-color: #fcfcfd;';
            
            if (layout === 'image-right' || layout === 'first') {
                return `
                <div class="container pb-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="about__content">
                                ${block.icon ? `<i><img src="${getImageUrl(block.icon)}" alt="" /></i>` : ''}
                                <div>
                                    <h1 class="color-text">${title}</h1>
                                    <div>${content}</div>
                                    ${block.author ? `<span>— ${block.author}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about__img">
                                ${block.image ? `<img src="${getImageUrl(block.image)}" alt="" />` : ''}
                                ${block.image_bg ? `<img src="${getImageUrl(block.image_bg)}" class="hero-icon-bg" alt="" />` : ''}
                            </div>
                        </div>
                    </div>
                </div>`;
            } else {
                return `
                <div class="position-relative" style="${bgColor}">
                    ${c.left_shape_image ? `<img src="${getImageUrl(c.left_shape_image)}" class="ab-left" alt="" />` : ''}
                    ${c.right_shape_image ? `<img src="${getImageUrl(c.right_shape_image)}" class="ab-right" alt="" />` : ''}
                    <div class="container md">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="about__content v2">
                                    ${block.icon ? `<i><img src="${getImageUrl(block.icon)}" alt="" /></i>` : ''}
                                    <div>
                                        <h1>${title}</h1>
                                        <div>${content}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="about__img">
                                    ${block.image ? `<img src="${getImageUrl(block.image)}" alt="" />` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }).join('')}
    </section>`;
};

// Contact Banner Section HTML
const generateContactBannerHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const title = t(c.title_ar, c.title_en) || (lang === 'ar' ? 'تواصل معنا' : 'Contact Us');
    const breadcrumbHome = lang === 'ar' ? 'الرئيسية' : 'Home';
    const breadcrumbCurrent = t(c.breadcrumb_ar, c.breadcrumb_en) || title;
    const bgImage = c.background_image && c.background_image.trim() !== '';
    const defaultBg = 'linear-gradient(135deg, #004F4C 0%, #003836 100%)';
    const bgUrl = bgImage ? getImageUrl(c.background_image) : '';
    
    return `
    <section class="contact-banner-area my-5">
        <div class="container-fluid">
            <div class="contact__banner" style="background: ${bgImage ? `url(${bgUrl}) center/cover no-repeat` : defaultBg}; border-radius: 24px; padding: 60px 40px;">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact__banner--content d-flex align-items-center justify-content-between flex-wrap gap-4">
                            <div class="d-flex align-items-center gap-3">
                                ${c.icon ? `<i style="background: #fff; border-radius: 50%; padding: 20px;"><img src="${getImageUrl(c.icon)}" alt="" style="width: 32px; height: 32px;" /></i>` : ''}
                                <div>
                                    <h1 class="fs-56 text-white">${title}</h1>
                                    <p class="mb-0" style="color: rgba(255,255,255,0.7);">
                                        <span>${breadcrumbHome}</span> / <span style="color: #fff;">${breadcrumbCurrent}</span>
                                    </p>
                                </div>
                            </div>
                            ${c.side_image ? `<picture><img src="${getImageUrl(c.side_image)}" alt="" style="max-height: 200px;" /></picture>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Contact Info Section HTML
const generateContactInfoHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const infoCards = c.info_cards || [];
    const infoItems = c.info_items || [];
    
    return `
    <section class="contact-info-area" style="position: relative;">
        ${c.overlay_image ? `<img src="${getImageUrl(c.overlay_image)}" class="overly-1" alt="" style="position: absolute; top: 0; left: 0; opacity: 0.1; pointer-events: none;" />` : ''}
        <div class="container">
            <!-- Contact Info Cards -->
            ${infoCards.length > 0 ? `
            <div class="row gy-4 mb-5 pb-0 pb-md-5">
                ${infoCards.map((card, index) => `
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <div class="contact__info--block" style="background: #fff; border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                            ${card.icon ? `<i style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: #004F4C; border-radius: 50%; margin-bottom: 16px;"><img src="${getImageUrl(card.icon)}" alt="" style="width: 28px; height: 28px; filter: brightness(0) invert(1);" /></i>` : ''}
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; color: #1a1a1a;">${t(card.title_ar, card.title_en)}</h3>
                            <p style="color: #666; margin: 0; line-height: 1.6;">${t(card.content_ar, card.content_en)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : ''}
            
            <!-- General Info & Contact Form -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact__info--content">
                        <h1 class="fw-bold" style="font-size: 2rem; margin-bottom: 16px;">${t(c.general_info_title_ar, c.general_info_title_en) || (lang === 'ar' ? 'معلومات عامة' : 'General Information')}</h1>
                        <p style="color: #666; margin-bottom: 24px;">${t(c.general_info_description_ar, c.general_info_description_en) || ''}</p>
                        ${infoItems.length > 0 ? `
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            ${infoItems.map(item => `
                                <li style="margin-bottom: 20px;">
                                    <h6 style="font-weight: 600; margin-bottom: 4px;">${t(item.label_ar, item.label_en)}</h6>
                                    <span style="color: #666;">${t(item.value_ar, item.value_en)}</span>
                                </li>
                            `).join('')}
                        </ul>
                        ` : ''}
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact__info--form" style="background: #f8f9fa; border-radius: 16px; padding: 30px;">
                        <h1 class="fw-bold" style="font-size: 2rem; margin-bottom: 16px;">${t(c.form_title_ar, c.form_title_en) || (lang === 'ar' ? 'اتصل بنا' : 'Contact Us')}</h1>
                        <p style="color: #666; margin-bottom: 24px;">${t(c.form_description_ar, c.form_description_en) || ''}</p>
                        <form>
                            <input type="text" placeholder="${lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px;" />
                            <input type="email" placeholder="${lang === 'ar' ? 'البريد الالكتروني' : 'Email Address'}" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px;" />
                            <div class="d-flex gap-3 mb-3">
                                <input type="text" value="+966" style="max-width: 80px; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px;" readonly />
                                <input type="text" placeholder="${lang === 'ar' ? 'مثال xxxxxxxx5' : 'Example 5xxxxxxxx'}" style="flex: 1; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px;" />
                            </div>
                            <input type="text" placeholder="${lang === 'ar' ? 'الموضوع' : 'Subject'}" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px;" />
                            <textarea placeholder="${lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}" rows="4" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px; resize: vertical;"></textarea>
                            <button type="button" class="btn" style="background: #004F4C; color: #fff; padding: 12px 32px; border-radius: 8px; font-weight: 500;">${lang === 'ar' ? 'إرسال' : 'Send'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Hero Slider Section HTML (Homepage slider)
const generateHeroSliderHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const slides = c.slides || [];
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const bgUrl = getImageUrl(c.background_image) || '/assets/img/hero-bg.png';
    
    return `
    <section class="hero-area position-relative" style="background-image: url('${bgUrl}')">
        <div class="container">
            <div class="hero-inner-block">
                <div class="hero-title" data-aos="fade-up">
                    <h5>${t(c.subtitle_ar, c.subtitle_en) || ''}</h5>
                    <h1>${t(c.title_ar, c.title_en) || 'Hero Title'}</h1>
                </div>
                ${slides.length > 0 ? `
                <div class="swiper hero-slide-thumb" data-aos="fade-up" data-aos-delay="300">
                    <div class="swiper-wrapper">
                        ${slides.map(slide => `
                            <div class="swiper-slide">
                                <div class="hero-slide-card">
                                    <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(slide.image)}" alt="${slide.alt || 'Slide'}" />
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : `<div class="text-center py-4" style="color: rgba(255,255,255,0.7);">Add slides to show here</div>`}
                <div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500">
                    <p>${t(c.description_ar, c.description_en) || ''}</p>
                </div>
                <div class="hero-btn d-flex justify-content-center" data-aos="fade-up">
                    <a href="${c.button_url || '#'}" class="common-btn d-flex align-items-center">
                        ${t(c.button_text_ar, c.button_text_en) || 'Get Started'} <span><i class="${angleIcon}"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
};

// Hero Common Section HTML (Service pages with dark background - hero-area v2 style)
const generateHeroCommonHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    const bgUrl = getImageUrl(c.background_image);
    const bgStyle = bgUrl ? `url(${bgUrl}) center/cover no-repeat` : '#012d37';
    const shapeUrl = getImageUrl(c.shape_image);
    const iconUrl = getImageUrl(c.icon);
    const heroImgUrl = getImageUrl(c.hero_image);
    const heroBgImgUrl = getImageUrl(c.hero_bg_image);
    
    return `
    <section class="hero-area v2 position-relative" style="background: ${bgStyle}; min-height: 400px; padding: 80px 0;">
        ${shapeUrl ? `<img src="${shapeUrl}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; height: 100%; object-fit: contain; opacity: 0.3;" />` : ''}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block" data-aos="fade-up">
                        ${iconUrl ? `<i><img src="${iconUrl}" alt="" /></i>` : ''}
                        <div>
                            <h1 class="text-white fs-56">${t(c.title_ar, c.title_en) || 'Hero Title'}</h1>
                            <p class="text-white-50">${t(c.description_ar, c.description_en) || ''}</p>
                            <div class="d-flex align-items-center gap-3 mt-4">
                                ${c.button_text_ar || c.button_text_en ? `
                                <a href="${c.button_url || '#'}" class="common-btn d-flex align-items-center" style="background: #fff; color: #012d37;">
                                    ${t(c.button_text_ar, c.button_text_en)} <span><i class="${angleIcon}"></i></span>
                                </a>` : ''}
                                ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                <a href="${c.secondary_button_url || '#'}" class="secondary-btn text-white">
                                    ${t(c.secondary_button_text_ar, c.secondary_button_text_en)} <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" data-aos="fade-up" data-aos-delay="200">
                        ${heroImgUrl ? `<img src="${heroImgUrl}" alt="" />` : '<div style="height: 200px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">Add hero image</div>'}
                        ${heroBgImgUrl ? `<img src="${heroBgImgUrl}" class="hero-icon-bg" alt="" />` : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Product Section HTML
const generateProductHtml = (c, lang, t) => {
    // Helper to get proper image URL
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const leftShape = getImageUrl(c.left_shape) || '/assets/img/pd-left.svg';
    const topRightShape = getImageUrl(c.top_right_shape) || '/assets/img/pd-top-right.svg';
    const icon = getImageUrl(c.icon) || '/assets/img/icon/product-icon.svg';
    const image = getImageUrl(c.image) || '/assets/img/product-img.png';
    const title = t(c.title_ar, c.title_en) || (lang === 'ar' ? 'القيمة المضافة' : 'Added Value');
    const description = t(c.description_ar, c.description_en) || '';
    
    return `
    <section class="product-area" style="position: relative; padding: 80px 0; overflow: hidden;">
        <img src="${leftShape}" class="product-left" alt="" style="position: absolute; ${lang === 'ar' ? 'right' : 'left'}: 0; top: 50%; transform: translateY(-50%) ${lang === 'ar' ? 'scaleX(-1)' : ''}; max-width: 200px; z-index: 1;" />
        <img src="${topRightShape}" class="product-top-right" alt="" style="position: absolute; ${lang === 'ar' ? 'left' : 'right'}: 0; top: 0; transform: ${lang === 'ar' ? 'scaleX(-1)' : 'none'}; max-width: 250px; z-index: 1;" />
        <div class="container md" style="max-width: 1320px;">
            <div class="row align-items-center flex-column-reverse flex-lg-row gap-4 gap-lg-0">
                <div class="col-lg-7">
                    <div class="product__content" style="position: relative; z-index: 2;">
                        <i style="display: inline-block; margin-bottom: 20px;">
                            <img src="${icon}" alt="" style="width: 60px; height: 60px; object-fit: contain;" />
                        </i>
                        <div>
                            <h1 style="font-size: 48px; font-weight: 700; margin-bottom: 20px; line-height: 1.2; color: #1a1a1a;">${title}</h1>
                            <p style="font-size: 18px; line-height: 1.8; color: #666; margin: 0;">${description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="product__image" style="position: relative; z-index: 2; text-align: center;">
                        <img src="${image}" alt="" style="max-width: 100%; height: auto; border-radius: 10px;" />
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Map Section HTML
const generateMapHtml = (c, lang, t) => {
    const title = t(c.title_ar, c.title_en) || (lang === 'ar' ? 'موقعنا' : 'Our Location');
    const subtitle = t(c.subtitle_ar, c.subtitle_en) || '';
    const height = c.height || 500;
    const embedUrl = c.embed_url;
    const lat = c.latitude || '24.7136';
    const lng = c.longitude || '46.6753';
    const zoom = c.zoom || '15';
    
    // Use embed URL if provided, otherwise use coordinates
    const mapSrc = embedUrl || `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    
    return `
    <section class="map-area" style="padding: 40px 0;">
        <div class="container">
            ${title || subtitle ? `
            <div class="section-title text-center mb-4">
                ${title ? `<h2>${title}</h2>` : ''}
                ${subtitle ? `<p style="color: #666;">${subtitle}</p>` : ''}
            </div>
            ` : ''}
            <div class="map-wrapper" style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                <iframe 
                    src="${mapSrc}" 
                    width="100%" 
                    height="${height}" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            ${c.address ? `
            <div class="map-address text-center mt-3">
                <p style="color: #666;"><i class="far fa-map-marker-alt me-2"></i>${c.address}</p>
            </div>
            ` : ''}
        </div>
    </section>`;
};

// Common Service Section HTML
const generateCommonServiceHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const services = c.services || [];
    const titleColor = c.title_color || 'inherit';
    
    return `
    <section class="comService-area" style="padding: 60px 0;">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-4">
                        ${c.section_icon ? `<i><img src="${getImageUrl(c.section_icon)}" alt="" /></i>` : ''}
                        <h1 style="color: ${titleColor};">${t(c.title_ar, c.title_en) || ''}</h1>
                        ${c.subtitle_ar || c.subtitle_en ? `<p class="fs-18" style="color: #768495">${t(c.subtitle_ar, c.subtitle_en)}</p>` : ''}
                    </div>
                </div>
                ${services.map(service => `
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="service__block" style="background: #fff; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                            ${service.icon ? `<i><img src="${getImageUrl(service.icon)}" alt="" style="width: 48px; height: 48px; margin-bottom: 16px;" /></i>` : ''}
                            <h5 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 12px;">${t(service.title_ar, service.title_en)}</h5>
                            <p style="color: #666; font-size: 0.9rem; margin: 0;">${t(service.description_ar, service.description_en)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
};

// Counter Area Section HTML
const generateCounterAreaHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const counters = c.counters || [];
    const noMarginTop = c.no_margin_top ? 'margin-top: 0;' : '';
    
    return `
    <section class="counter-area" style="padding: 40px 0; ${noMarginTop}">
        <div class="container">
            <div class="counter__wrapper" style="background: linear-gradient(135deg, #004F4C 0%, #003836 100%); border-radius: 24px; padding: 40px;">
                <div class="row">
                    ${counters.map(counter => `
                        <div class="col-md-6">
                            <div class="counter__block d-flex align-items-center gap-3" style="padding: 20px;">
                                ${counter.icon ? `<i style="background: rgba(255,255,255,0.1); border-radius: 50%; padding: 16px;"><img src="${getImageUrl(counter.icon)}" alt="" style="width: 32px; height: 32px;" /></i>` : ''}
                                <h1 style="color: #fff; font-size: 2.5rem; margin: 0;">
                                    ${counter.value}
                                    <span style="display: block; font-size: 1rem; font-weight: 400; opacity: 0.8;">${t(counter.label_ar, counter.label_en)}</span>
                                </h1>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>`;
};

// Gallery Page Section HTML (with breadcrumb)
const generateGalleryPageHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const items = c.items || [];
    const home = lang === 'ar' ? 'الرئيسية' : 'Home';
    const breadcrumb = t(c.breadcrumb_ar, c.breadcrumb_en) || (lang === 'ar' ? 'المعرض' : 'Gallery');
    
    return `
    <div>
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb-nav" style="padding: 20px 0; background: #f8f9fa;">
            <div class="container">
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; gap: 8px; align-items: center;">
                    <li><a href="" style="color: #666; text-decoration: none;">${home}</a></li>
                    <li><span style="color: #999;">/</span></li>
                    <li><a href="" class="active" style="color: #004F4C; text-decoration: none; font-weight: 500;">${breadcrumb}</a></li>
                </ul>
            </div>
        </div>

        <!-- Gallery Section -->
        <section class="galleryV2-area" style="padding: 60px 0;">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-12 text-center">
                        <div class="mb-4">
                            <h1 style="margin-bottom: 16px;">${t(c.title_ar, c.title_en) || (lang === 'ar' ? 'المعرض' : 'Gallery')}</h1>
                            ${c.subtitle_ar || c.subtitle_en ? `<p class="off-text mb-0 fw-medium fs-18" style="color: #666;">${t(c.subtitle_ar, c.subtitle_en)}</p>` : ''}
                        </div>
                    </div>
                    ${items.map(item => `
                        <div class="col-md-6">
                            <div class="img__card__block" style="position: relative; border-radius: 16px; overflow: hidden;">
                                <img src="${getImageUrl(item.image)}" alt="${t(item.label_ar, item.label_en)}" style="width: 100%; height: 300px; object-fit: cover;" />
                                <a href="${item.url || '#'}" style="position: absolute; bottom: 16px; left: 16px; background: rgba(255,255,255,0.9); padding: 8px 16px; border-radius: 8px; text-decoration: none; color: #333; font-weight: 500;">${t(item.label_ar, item.label_en)}</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    </div>`;
};

// Hero Riya Section HTML (Purple theme)
const generateHeroRiyaHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    const titleColor = c.title_color || '#9B4DE0';
    
    return `
    <section class="common-hero-area" style="padding: 60px 0; position: relative;">
        ${c.shape_image ? `<img src="${getImageUrl(c.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ''}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ''}
                        <div>
                            <h1 class="fs-56" style="color: ${titleColor}; font-size: 3rem; margin-bottom: 16px;">${t(c.title_ar, c.title_en) || 'منصة ريا'}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t(c.description_ar, c.description_en) || ''}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c.button_text_ar || c.button_text_en ? `
                                <a href="${c.button_url || '#'}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.button_text_ar, c.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ''}
                                ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                <a href="${c.secondary_button_url || '#'}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.secondary_button_text_ar, c.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c.hero_image ? `<img src="${getImageUrl(c.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ''}
                        ${c.hero_bg_image ? `<img src="${getImageUrl(c.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Hero Jiyad Section HTML (Blue/Grey theme)
const generateHeroJiyadHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    const titleColor = c.title_color || '#314660';
    
    return `
    <section class="common-hero-area" style="padding: 60px 0; position: relative;">
        ${c.shape_image ? `<img src="${getImageUrl(c.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ''}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ''}
                        <div>
                            <h1 class="fs-56" style="color: ${titleColor}; font-size: 3rem; margin-bottom: 16px;">${t(c.title_ar, c.title_en) || 'منصة جياد'}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t(c.description_ar, c.description_en) || ''}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c.button_text_ar || c.button_text_en ? `
                                <a href="${c.button_url || '#'}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.button_text_ar, c.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ''}
                                ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                <a href="${c.secondary_button_url || '#'}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.secondary_button_text_ar, c.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c.hero_image ? `<img src="${getImageUrl(c.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ''}
                        ${c.hero_bg_image ? `<img src="${getImageUrl(c.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Hero Shops Z Section HTML (Green theme)
const generateHeroShopsZHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    const titleColor = c.title_color || '#00A651';
    
    return `
    <section class="common-hero-area pb-4 pb-lg-0 pt-4" style="padding: 40px 0; position: relative;">
        ${c.shape_image ? `<img src="${getImageUrl(c.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ''}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ''}
                        <div>
                            <h1 class="text-green fs-56" style="color: ${titleColor}; font-size: 3rem; margin-bottom: 16px;">${t(c.title_ar, c.title_en) || 'منصة Shops Z'}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t(c.description_ar, c.description_en) || ''}</p>
                            <div class="work-card-btns green-btns d-flex align-items-center gap-3">
                                ${c.button_text_ar || c.button_text_en ? `
                                <a href="${c.button_url || '#'}" style="background: #00A651; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.button_text_ar, c.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ''}
                                ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                <a href="${c.secondary_button_url || '#'}" class="secondary-btn" style="color: #00A651; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.secondary_button_text_ar, c.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c.hero_image ? `<img src="${getImageUrl(c.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ''}
                        ${c.hero_bg_image ? `<img src="${getImageUrl(c.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Hero Beyond ERP Section HTML
const generateHeroBeyondERPHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    
    return `
    <section class="common-hero-area pb-4 pb-lg-0 pt-4" style="padding: 40px 0; position: relative;">
        ${c.shape_image ? `<img src="${getImageUrl(c.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ''}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ''}
                        <div>
                            <h1 class="fs-56" style="font-size: 3rem; margin-bottom: 16px;">${t(c.title_ar, c.title_en) || 'Beyond ERP'}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t(c.description_ar, c.description_en) || ''}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c.button_text_ar || c.button_text_en ? `
                                <a href="${c.button_url || '#'}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.button_text_ar, c.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ''}
                                ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                <a href="${c.secondary_button_url || '#'}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.secondary_button_text_ar, c.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c.hero_image ? `<img src="${getImageUrl(c.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ''}
                        ${c.hero_bg_image ? `<img src="${getImageUrl(c.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Hero Beyond Pay Section HTML
const generateHeroBeyondPayHtml = (c, lang, t) => {
    const getImageUrl = (img) => {
        if (!img || typeof img !== 'string') return '';
        if (img.startsWith('http') || img.startsWith('/')) return img;
        return `/storage/${img}`;
    };
    
    const angleIcon = lang === 'ar' ? 'far fa-angle-left' : 'far fa-angle-right';
    const longArrowIcon = lang === 'ar' ? 'fal fa-long-arrow-left' : 'fal fa-long-arrow-right';
    
    return `
    <section class="common-hero-area pb-4 pb-lg-0 pt-4" style="padding: 40px 0; position: relative;">
        ${c.shape_image ? `<img src="${getImageUrl(c.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ''}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ''}
                        <div>
                            <h1 class="fs-56" style="font-size: 3rem; margin-bottom: 16px;">${t(c.title_ar, c.title_en) || 'Beyond Pay'}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t(c.description_ar, c.description_en) || ''}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c.button_text_ar || c.button_text_en ? `
                                <a href="${c.button_url || '#'}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.button_text_ar, c.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ''}
                                ${c.secondary_button_text_ar || c.secondary_button_text_en ? `
                                <a href="${c.secondary_button_url || '#'}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t(c.secondary_button_text_ar, c.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c.hero_image ? `<img src="${getImageUrl(c.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ''}
                        ${c.hero_bg_image ? `<img src="${getImageUrl(c.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

const availableSectionTypes = computed(() => {
    return props.sectionTypes.filter(st => !st.is_fixed);
});

// Methods
const openAddModal = () => {
    showAddModal.value = true;
};

const closeAddModal = () => {
    showAddModal.value = false;
};

const editSection = (sectionId) => {
    editingSectionId.value = sectionId;
};

const closeEditSidebar = () => {
    editingSectionId.value = null;
};

const addSection = (sectionTypeId) => {
    router.post(
        route('pages.builder.sections.store', props.page.id),
        { section_type_id: sectionTypeId },
        {
            preserveScroll: true,
            onSuccess: (page) => {
                sectionsList.value = page.props.sections;
                showToast('Section added successfully', 'success');
                closeAddModal();
            },
            onError: (errors) => {
                showToast('Failed to add section', 'error');
            },
        }
    );
};

const updateSection = (sectionId, content) => {
    const section = sectionsList.value.find(s => s.id === sectionId);
    if (!section) return;

    console.log('Saving section:', sectionId, 'with content:', JSON.stringify(content, null, 2));

    router.put(
        route('pages.builder.sections.update', [props.page.id, sectionId]),
        { content },
        {
            preserveScroll: true,
            preserveState: false, // Allow props to update from server
            onSuccess: (page) => {
                console.log('Save success, received sections:', page.props.sections);
                // Update sections from props if available
                if (page.props.sections) {
                    sectionsList.value = page.props.sections;
                }
                showToast('Section updated successfully', 'success');
                hasUnsavedChanges.value = false;
                isSaving.value = false;
                closeEditSidebar();
            },
            onError: (errors) => {
                console.error('Save error:', errors);
                showToast('Failed to update section: ' + JSON.stringify(errors), 'error');
                isSaving.value = false;
            },
        }
    );
};

const deleteSection = (sectionId) => {
    if (!confirm('Are you sure you want to delete this section?')) return;

    router.delete(
        route('pages.builder.sections.destroy', [props.page.id, sectionId]),
        {
            preserveScroll: true,
            onSuccess: (page) => {
                sectionsList.value = page.props.sections;
                showToast('Section deleted successfully', 'success');
                if (editingSectionId.value === sectionId) {
                    closeEditSidebar();
                }
            },
            onError: () => {
                showToast('Failed to delete section', 'error');
            },
        }
    );
};

const duplicateSection = (sectionId) => {
    router.post(
        route('pages.builder.sections.duplicate', [props.page.id, sectionId]),
        {},
        {
            preserveScroll: true,
            onSuccess: (page) => {
                sectionsList.value = page.props.sections;
                showToast('Section duplicated successfully', 'success');
            },
            onError: () => {
                showToast('Failed to duplicate section', 'error');
            },
        }
    );
};

const toggleSection = (sectionId) => {
    router.post(
        route('pages.builder.sections.toggle', [props.page.id, sectionId]),
        {},
        {
            preserveScroll: true,
            preserveState: true,
            onSuccess: (page) => {
                sectionsList.value = page.props.sections;
                const section = sectionsList.value.find(s => s.id === sectionId);
                const status = section?.is_active ? 'activated' : 'deactivated';
                showToast(`Section ${status}`, 'success');
            },
            onError: () => {
                showToast('Failed to toggle section', 'error');
            },
        }
    );
};

const reorderSections = (newOrder) => {
    router.post(
        route('pages.builder.sections.reorder', props.page.id),
        { sections: newOrder },
        {
            preserveScroll: true,
            preserveState: true,
            onSuccess: (page) => {
                sectionsList.value = page.props.sections;
            },
            onError: () => {
                showToast('Failed to reorder sections', 'error');
                sectionsList.value = [...props.sections];
            },
        }
    );
};

const openPreview = () => {
    // Open the actual page URL in a new tab
    const slug = props.page.url_slug_en || props.page.slug || '';
    const pageUrl = slug === 'home' || !slug ? '/' : `/${slug}`;
    window.open(pageUrl, '_blank');
};

// Save all sections (for the Save button)
const saveAllSections = () => {
    if (isSaving.value) return;
    
    isSaving.value = true;
    
    // If there's an editing section, save it
    if (editingSection.value) {
        updateSection(editingSection.value.id, editingSection.value.content);
    } else {
        // Just show success toast if no active edits
        setTimeout(() => {
            isSaving.value = false;
            showToast('All changes saved', 'success');
            hasUnsavedChanges.value = false;
        }, 500);
    }
};

const showToast = (message, type = 'success') => {
    toast.value = { show: true, message, type };
};

const closeToast = () => {
    toast.value.show = false;
};

// Initialize Sortable
const initSortable = () => {
    const container = document.querySelector('.sections-list-sortable');
    if (!container) return;

    sortableInstance.value = Sortable.create(container, {
        animation: 150,
        handle: '.drag-handle',
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        onEnd: (evt) => {
            const { oldIndex, newIndex } = evt;
            if (oldIndex === newIndex) return;

            const draggableItems = [...draggableSections.value];
            const [movedItem] = draggableItems.splice(oldIndex, 1);
            draggableItems.splice(newIndex, 0, movedItem);

            const newOrder = draggableItems.map((section, index) => ({
                id: section.id,
                order: index + 1,
            }));

            reorderSections(newOrder);
        },
    });
};

// Warn before leaving with unsaved changes
const beforeUnload = (e) => {
    if (hasUnsavedChanges.value) {
        e.preventDefault();
        e.returnValue = '';
    }
};

// Handle messages from iframe (section clicks)
const handleIframeMessage = (event) => {
    if (event.data?.type === 'edit-section' && event.data?.sectionId) {
        editSection(event.data.sectionId);
    }
};

onMounted(() => {
    nextTick(() => {
        initSortable();
    });
    window.addEventListener('beforeunload', beforeUnload);
    window.addEventListener('message', handleIframeMessage);
});

onUnmounted(() => {
    window.removeEventListener('beforeunload', beforeUnload);
    window.removeEventListener('message', handleIframeMessage);
    if (sortableInstance.value) {
        sortableInstance.value.destroy();
    }
});
</script>

<template>
    <div class="page-builder">
        <!-- Header -->
        <div class="builder-header">
            <div class="header-left">
                <h1 class="page-title">Page Builder</h1>
                <div class="page-info">
                    <span class="page-name">{{ page.name_en }}</span>
                    <span class="separator">•</span>
                    <span class="page-slug">/{{ page.url_slug_en }}</span>
                </div>
            </div>
            <div class="header-right">
                <Button variant="outline" size="md" @click="openPreview">
                    <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    Preview
                </Button>
                <Button variant="primary" size="md" @click="saveAllSections" :disabled="isSaving">
                    <svg v-if="isSaving" class="icon animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.416" stroke-dashoffset="10" />
                    </svg>
                    <svg v-else class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ isSaving ? 'Saving...' : 'Save' }}
                </Button>
            </div>
        </div>

        <!-- Main Content -->
        <div class="builder-content">
            <!-- Sections Panel -->
            <div class="sections-panel">
                <div class="panel-header">
                    <h2 class="panel-title">Customize Sections</h2>
                    <Button variant="primary" size="sm" @click="openAddModal">
                        <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        Add New
                    </Button>
                </div>

                <div class="sections-list">
                    <!-- Draggable Sections -->
                    <div class="sections-list-sortable">
                        <div
                            v-for="section in draggableSections"
                            :key="section.id"
                            :class="['section-item', { 'section-inactive': !section.is_active }]"
                        >
                            <div class="section-drag drag-handle">
                                <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 2a2 2 0 10.001 4.001A2 2 0 007 2zm0 6a2 2 0 10.001 4.001A2 2 0 007 8zm0 6a2 2 0 10.001 4.001A2 2 0 007 14zm6-8a2 2 0 10.001-4.001A2 2 0 0013 6zm0 2a2 2 0 10.001 4.001A2 2 0 0013 8zm0 6a2 2 0 10.001 4.001A2 2 0 0013 14z" />
                                </svg>
                            </div>
                            <div class="section-info">
                                <span class="section-name">{{ section.section_type.name_en }}</span>
                            </div>
                            <div class="section-actions">
                                <button type="button" class="action-btn" title="Edit" @click="editSection(section.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                                <button type="button" class="action-btn" title="Delete" @click="deleteSection(section.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" class="action-btn" title="Duplicate" @click="duplicateSection(section.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    :class="['action-btn', 'toggle-btn', { 'active': section.is_active }]"
                                    :title="section.is_active ? 'Hide' : 'Show'"
                                    @click="toggleSection(section.id)"
                                >
                                    <svg v-if="section.is_active" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                    <svg v-else viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Fixed Sections -->
                    <div class="fixed-sections">
                        <div class="fixed-section-label">Fixed Sections</div>
                        
                        <div v-if="headerSection" class="section-item section-fixed">
                            <div class="section-info">
                                <span class="section-name">{{ headerSection.section_type.name_en }}</span>
                            </div>
                            <div class="section-actions">
                                <button type="button" class="action-btn" title="Edit" @click="editSection(headerSection.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div v-if="footerSection" class="section-item section-fixed">
                            <div class="section-info">
                                <span class="section-name">{{ footerSection.section_type.name_en }}</span>
                            </div>
                            <div class="section-actions">
                                <button type="button" class="action-btn" title="Edit" @click="editSection(footerSection.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Preview Panel -->
            <div class="preview-panel">
                <div class="preview-header">
                    <h2 class="preview-title">Preview</h2>
                    <div class="preview-actions">
                        <!-- Language Toggle -->
                        <div class="preview-lang-toggle">
                            <button 
                                type="button"
                                :class="['lang-btn', { active: previewLang === 'en' }]"
                                @click="previewLang = 'en'"
                            >EN</button>
                            <button 
                                type="button"
                                :class="['lang-btn', { active: previewLang === 'ar' }]"
                                @click="previewLang = 'ar'"
                            >AR</button>
                        </div>
                        
                        <!-- Device Toggle -->
                        <button 
                            type="button"
                            :class="['preview-device', { active: previewDevice === 'desktop' }]" 
                            title="Desktop"
                            @click="previewDevice = 'desktop'"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button 
                            type="button"
                            :class="['preview-device', { active: previewDevice === 'tablet' }]" 
                            title="Tablet"
                            @click="previewDevice = 'tablet'"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button 
                            type="button"
                            :class="['preview-device', { active: previewDevice === 'mobile' }]" 
                            title="Mobile"
                            @click="previewDevice = 'mobile'"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="preview-content">
                    <!-- Live Preview Container with iframe -->
                    <div :class="['preview-frame-container', `preview-${previewDevice}`]">
                        <iframe 
                            ref="previewIframe"
                            class="preview-iframe"
                            :srcdoc="previewHtml"
                            frameborder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Section Modal -->
        <AddSectionModal
            :show="showAddModal"
            :section-types="availableSectionTypes"
            @close="closeAddModal"
            @add="addSection"
        />

        <!-- Edit Section Sidebar -->
        <EditSectionSidebar
            v-if="editingSection"
            :section="editingSection"
            :section-type="sectionTypes.find(st => st.id === editingSection.section_type_id)"
            @close="closeEditSidebar"
            @update="updateSection"
            @change="hasUnsavedChanges = true"
        />

        <!-- Toast Notifications -->
        <Toast
            v-if="toast.show"
            :message="toast.message"
            :type="toast.type"
            @close="closeToast"
        />
    </div>
</template>

<style scoped>
.page-builder {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.hero-area.v2 {
    background-color: #012d37;
}

/* Header */
.builder-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
}

.header-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.page-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
}

.page-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #6b7280;
}

.page-name {
    font-weight: 500;
}

.separator {
    color: #d1d5db;
}

.page-slug {
    font-family: monospace;
}

.header-right {
    display: flex;
    gap: 0.75rem;
}

.icon {
    width: 1.25rem;
    height: 1.25rem;
}

.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Main Content */
.builder-content {
    flex: 1;
    display: flex;
    overflow: hidden;
}

/* Sections Panel */
.sections-panel {
    width: 320px;
    background-color: #ffffff;
    border-right: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
}

.panel-header {
    padding: 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.panel-title {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
}

.sections-list {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
}

/* Section Item */
.section-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    transition: all 0.15s;
}

.section-item:hover {
    background-color: #f3f4f6;
}

.section-inactive {
    opacity: 0.5;
}

.section-drag {
    width: 1.5rem;
    height: 1.5rem;
    color: #9ca3af;
    cursor: grab;
    flex-shrink: 0;
}

.section-drag:active {
    cursor: grabbing;
}

.section-drag svg {
    width: 100%;
    height: 100%;
}

.section-info {
    flex: 1;
    min-width: 0;
}

.section-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.section-actions {
    display: flex;
    gap: 0.25rem;
}

.action-btn {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s;
}

.action-btn:hover {
    background-color: #e5e7eb;
    color: #111827;
}

.action-btn svg {
    width: 1rem;
    height: 1rem;
}

.toggle-btn.active {
    color: #004F4C;
}

/* Fixed Sections */
.fixed-sections {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
}

.fixed-section-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
}

.section-fixed {
    background-color: #fef3c7;
    border-color: #fcd34d;
}

/* Preview Panel */
.preview-panel {
    flex: 1;
    background-color: #f9fafb;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.preview-header {
    padding: 1.25rem;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.preview-title {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
}

.preview-actions {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.preview-lang-toggle {
    display: flex;
    background-color: #f3f4f6;
    border-radius: 6px;
    padding: 2px;
}

.lang-btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    border: none;
    background: transparent;
    color: #6b7280;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.15s;
}

.lang-btn.active {
    background-color: #004F4C;
    color: #ffffff;
}

.preview-device {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s;
}

.preview-device:hover {
    background-color: #f3f4f6;
}

.preview-device.active {
    background-color: #004F4C;
    border-color: #004F4C;
    color: #ffffff;
}

.preview-device svg {
    width: 1.25rem;
    height: 1.25rem;
}

.preview-content {
    flex: 1;
    overflow: hidden;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    min-height: 600px;
}

/* Preview Frame Container - Responsive */
.preview-frame-container {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: width 0.3s ease;
    height: 100%;
    min-height: 550px;
}

.preview-frame-container.preview-desktop {
    width: 100%;
}

.preview-frame-container.preview-tablet {
    width: 768px;
    max-width: 100%;
}

.preview-frame-container.preview-mobile {
    width: 375px;
    max-width: 100%;
}

.preview-iframe {
    width: 100%;
    height: 100%;
    border: none;
}

/* Sortable */
.sortable-ghost {
    opacity: 0.4;
    background-color: #e5e7eb;
}

.sortable-drag {
    opacity: 1;
    cursor: grabbing;
}
</style>
