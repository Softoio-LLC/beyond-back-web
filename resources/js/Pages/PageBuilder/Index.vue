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
    'slider': HeroSection,
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
            return generateHeroHtml(c, lang, t);
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
    const slides = c.slides || [];
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
                        ${t(c.button_text_ar, c.button_text_en) || 'Get Started'} <span><i class="far fa-angle-left"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
};

// Partners Section HTML
const generatePartnersHtml = (c, lang, t) => {
    const partners = c.partners || [];
    return `
    <section class="brand-area">
        <div class="container">
            <div class="swiper brand-logos-slide">
                <div class="swiper-wrapper">
                    ${partners.map(p => `
                        <div class="logo-items swiper-slide" data-aos="zoom-in">
                            <a href="${p.url || '#'}"><img src="${p.logo || p.image || ''}" alt="${p.name || 'Partner'}" /></a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>`;
};

// Concept Section HTML
const generateConceptHtml = (c, lang, t) => {
    const blocks = c.blocks || [];
    const counters = c.counters || [];
    return `
    <section class="concept-area position-relative pt-80">
        <div class="container">
            <div class="concept-area-wrapper">
                ${blocks.map((block, idx) => `
                <div class="concept-wrapper ${idx > 0 ? 'second-concept-wrapper' : ''} position-relative z-1 overflow-hidden ${idx === 0 ? '' : 'm-0'}">
                    ${block.shape_image ? `<div class="concept-wrapper-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${block.shape_image}" alt="Shape" /></div>` : ''}
                    <div class="row align-items-center">
                        <div class="col-lg-6 ${idx === 0 ? 'order-lg-2' : ''}" data-aos="zoom-in">
                            <div class="swiper concept-thumbnails ${idx === 0 ? 'ms-0' : 'me-0'}">
                                <div class="swiper-wrapper">
                                    ${(block.images || []).map((img, imgIdx) => `
                                        <div class="concept-single-thumb swiper-slide ${imgIdx % 2 === 0 ? 'radious-bottom-left' : 'radious-top-right'}">
                                            <img class="w-100 h-100 object-fit-cover" src="${img.image || img}" alt="Thumb" />
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ${idx === 0 ? 'order-lg-1' : ''}" data-aos="fade-right">
                            <div class="concept-content">
                                <h3>${t(block.title_ar, block.title_en)}</h3>
                                ${(block.paragraphs || []).map(p => `<p>${t(p.text_ar, p.text_en)}</p>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                `).join('')}
                ${counters.length > 0 ? `
                <div class="counter-up-area d-flex align-items-center justify-content-center position-relative z-1">
                    ${counters.map((counter, idx) => `
                        <div class="counter-up-step d-flex align-items-center justify-content-center flex-column" style="background-image: url('/assets/img/counter-up-bg.png')" data-aos="zoom-in" data-aos-delay="${(idx + 1) * 100}">
                            <h5>${counter.value}</h5>
                            <p>${t(counter.label_ar, counter.label_en)}</p>
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
                                    <img class="w-100 h-100 object-fit-cover" src="${service.image || '/assets/img/service-thumb-1.png'}" alt="Thumb" />
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
        ${c.shape_image ? `<div class="service-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c.shape_image}" alt="Shape" /></div>` : ''}
    </section>`;
};

// CTA Section HTML
const generateCtaHtml = (c, lang, t) => {
    const cards = c.contact_cards || [];
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
                                            <span class="d-flex align-items-center justify-content-center"><img src="${card.icon || ''}" alt="Icon" /></span>
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
            ${c.shape_image ? `<div class="cta-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c.shape_image}" alt="Shape" /></div>` : ''}
        </div>
    </section>`;
};

// Work/Projects Section HTML
const generateWorkHtml = (c, lang, t) => {
    const projects = c.projects || [];
    return `
    <section class="work-area position-relative z-1 overflow-hidden">
        <div class="work-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${c.shape_image || '/assets/img/service-shape.png'}" alt="Shape" />
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
                                                    <img src="${project.image || ''}" alt="${t(project.title_ar, project.title_en)}" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${c.work_shape_image ? `<div class="work-card-shape position-absolute z-n1"><img src="${c.work_shape_image}" alt="Shape" /></div>` : ''}
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
};

// Team Section HTML
const generateTeamHtml = (c, lang, t) => {
    const members = c.members || [];
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
                                    <img class="w-100 h-100 object-fit-cover" src="${c.shape_image || '/assets/img/team-shape.png'}" alt="Shape" />
                                </div>
                                <div class="team-thumb">
                                    <img class="w-100 h-100 object-fit-cover" src="${member.image || ''}" alt="Thumb" />
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
    const cards = c.cards || [];
    return `
    <section class="contact-area overflow-hidden" style="background-image: url('${c.background_image || '/assets/img/contact-bg.png'}')">
        <div class="container">
            <div class="contact-inner-block p-40 bg-white">
                <div class="row">
                    <div class="col-xl-6" data-aos="fade-right">
                        <div class="contact-right-block">
                            ${cards.map((card, idx) => `
                                <div class="contact-card ${idx === 1 ? 'contact-middle-card' : ''} d-flex align-items-center">
                                    <div class="contact-card-icon">
                                        <img src="${card.icon || ''}" alt="Icon" />
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
                                <a href="#"><img src="${c.contact_logo || '/assets/img/contact-logo.svg'}" alt="Logo" /></a>
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
    const images = c.images || [];
    return `
    <section class="gallery-area overflow-hidden">
        <div class="container">
            <div class="gallery-inner-block position-relative z-1">
                ${c.shape_image ? `<div class="gallery-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c.shape_image}" alt="Shape" /></div>` : ''}
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t(c.title_ar, c.title_en)}</h3>
                    <p>${t(c.subtitle_ar, c.subtitle_en)}</p>
                </div>
                <div class="gallery-wrapper">
                    <div class="row">
                        ${images.map(img => `
                            <div class="col-md-6" data-aos="zoom-in">
                                <div class="gallery-thumb position-relative">
                                    <img src="${img.image || ''}" alt="Thumb" />
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
    const faqs = c.faqs || [];
    return `
    <section class="faq-area position-relative z-1">
        <div class="faq-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${c.shape_image || '/assets/img/service-shape.png'}" alt="Shape" />
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
                                ${c.image ? `<img src="${c.image}" alt="Image" />` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                ${c.shape_image ? `<div class="inquiry-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c.shape_image}" alt="Shape" /></div>` : ''}
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

    router.put(
        route('pages.builder.sections.update', [props.page.id, sectionId]),
        { content },
        {
            preserveScroll: true,
            preserveState: true,
            onSuccess: (page) => {
                sectionsList.value = page.props.sections;
                showToast('Section updated successfully', 'success');
                hasUnsavedChanges.value = false;
            },
            onError: (errors) => {
                showToast('Failed to update section', 'error');
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
    window.open(route('website.home'), '_blank');
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
                <Button variant="primary" size="md">
                    <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Save
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
                                <button class="action-btn" title="Edit" @click="editSection(section.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                                <button class="action-btn" title="Delete" @click="deleteSection(section.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button class="action-btn" title="Duplicate" @click="duplicateSection(section.id)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                    </svg>
                                </button>
                                <button
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
                                <button class="action-btn" title="Edit" @click="editSection(headerSection.id)">
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
                                <button class="action-btn" title="Edit" @click="editSection(footerSection.id)">
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
                                :class="['lang-btn', { active: previewLang === 'en' }]"
                                @click="previewLang = 'en'"
                            >EN</button>
                            <button 
                                :class="['lang-btn', { active: previewLang === 'ar' }]"
                                @click="previewLang = 'ar'"
                            >AR</button>
                        </div>
                        
                        <!-- Device Toggle -->
                        <button 
                            :class="['preview-device', { active: previewDevice === 'desktop' }]" 
                            title="Desktop"
                            @click="previewDevice = 'desktop'"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button 
                            :class="['preview-device', { active: previewDevice === 'tablet' }]" 
                            title="Tablet"
                            @click="previewDevice = 'tablet'"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button 
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
}

/* Preview Frame Container - Responsive */
.preview-frame-container {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: width 0.3s ease;
    height: 100%;
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
