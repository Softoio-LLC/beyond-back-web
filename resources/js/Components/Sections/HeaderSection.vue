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

// Get asset paths from content (from database)
const flagAr = computed(() => props.content.flag_ar || '/assets/img/flag-1.png');
const flagEn = computed(() => props.content.flag_en || '/assets/img/flag-2.png');
const checkRadio = computed(() => props.content.check_icon || '/assets/img/check-radio.svg');

const getLabel = (item) => {
    return props.lang === 'ar' ? item.label_ar : item.label_en;
};

const contactButtonText = computed(() => {
    return props.lang === 'ar' ? props.content.contact_button_text_ar : props.content.contact_button_text_en;
});
</script>

<template>
    <!-- Mobile Offcanvas Menu -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="offcanvas-menu accordion">
                <ul>
                    <template v-for="(item, index) in content.menu_items" :key="index">
                        <li v-if="!item.children || item.children.length === 0">
                            <a :href="item.url">{{ getLabel(item) }}</a>
                        </li>
                        <li v-else>
                            <a 
                                href="#" 
                                class="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                :data-bs-target="`#collapse-mobile-${index}`" 
                                aria-expanded="false" 
                                :aria-controls="`collapse-mobile-${index}`"
                            >
                                {{ getLabel(item) }}
                            </a>
                            <div 
                                :id="`collapse-mobile-${index}`" 
                                class="accordion-collapse collapse" 
                                data-bs-parent="#accordionExample"
                            >
                                <ul class="dropdown-menu-list">
                                    <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                        <a 
                                            class="dropdown-item" 
                                            :class="{ 'pt-0': childIndex === 0, 'border-0 pb-0': childIndex === item.children.length - 1 }"
                                            :href="child.url"
                                        >
                                            {{ getLabel(child) }}
                                            <span><i class="far fa-chevron-left"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
            <button class="header-contact-btn w-100 justify-content-center d-flex align-items-center mt-40 border" type="button">
                {{ contactButtonText }}
                <span><i class="far fa-angle-left"></i></span>
            </button>
        </div>
    </div>

    <!-- Header -->
    <header class="header-area" data-aos="fade-in">
        <div class="container">
            <div class="header-inner-block d-flex align-items-center justify-content-between">
                <div class="header-left-block d-flex align-items-center">
                    <div class="header-logo">
                        <a href="#">
                            <img :src="content.logo || '/assets/img/logo.png'" alt="Logo" />
                        </a>
                    </div>
                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul class="d-flex align-items-center">
                                <template v-for="(item, index) in content.menu_items" :key="index">
                                    <li v-if="!item.children || item.children.length === 0">
                                        <a :href="item.url">{{ getLabel(item) }}</a>
                                    </li>
                                    <li v-else>
                                        <a 
                                            href="#" 
                                            class="dropdown-toggle" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            <span><i class="far fa-chevron-down"></i></span>
                                            {{ getLabel(item) }}
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                                <a 
                                                    class="dropdown-item" 
                                                    :class="{ 'pt-0': childIndex === 0, 'border-0 pb-0': childIndex === item.children.length - 1 }"
                                                    :href="child.url"
                                                >
                                                    {{ getLabel(child) }}
                                                    <span><i class="far fa-chevron-left"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </template>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="header-btns d-flex align-items-center gap-2">
                    <button class="header-contact-btn d-none d-lg-inline-flex align-items-center" type="button">
                        {{ contactButtonText }}
                        <span><i class="far fa-angle-left"></i></span>
                    </button>
                    <div class="language-select">
                        <div class="selectorwith_flag">
                            <div class="select-box">
                                <div class="select-box__current" tabindex="1">
                                    <div class="select-box__value">
                                        <input 
                                            class="select-box__input" 
                                            type="radio" 
                                            id="lang-ar" 
                                            value="ar" 
                                            name="language" 
                                            :checked="lang === 'ar'" 
                                        />
                                        <p class="select-box__input-text">
                                            <img :src="flagAr" alt="" /> عربي
                                        </p>
                                    </div>
                                    <div class="select-box__value">
                                        <input 
                                            class="select-box__input" 
                                            type="radio" 
                                            id="lang-en" 
                                            value="en" 
                                            name="language" 
                                            :checked="lang === 'en'" 
                                        />
                                        <p class="select-box__input-text">
                                            <img :src="flagEn" alt="" />English
                                        </p>
                                    </div>
                                </div>
                                <ul class="select-box__list">
                                    <li :class="{ active: lang === 'ar' }">
                                        <label class="select-box__option" for="lang-ar" aria-hidden="true">
                                            <img :src="flagAr" alt="" /> عربي
                                        </label>
                                        <span class="check-image">
                                            <img :src="checkRadio" alt="check-radio" />
                                        </span>
                                    </li>
                                    <li :class="{ active: lang === 'en' }">
                                        <label class="select-box__option" for="lang-en" aria-hidden="true">
                                            <img :src="flagEn" alt="" />English
                                        </label>
                                        <span class="check-image">
                                            <img :src="checkRadio" alt="check-radio" />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a 
                        class="open-menu d-lg-none" 
                        data-bs-toggle="offcanvas" 
                        href="#offcanvasExample" 
                        role="button" 
                        aria-controls="offcanvasExample"
                    >
                        <i class="far fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
