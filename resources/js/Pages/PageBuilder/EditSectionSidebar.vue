<script setup>
import { ref, reactive, watch, computed, nextTick } from 'vue';
import TextInput from '@/Components/UI/TextInput.vue';
import UrlAutocomplete from '@/Components/UI/UrlAutocomplete.vue';
import RichTextEditor from '@/Components/UI/RichTextEditor.vue';
import ImageWithAlt from '@/Components/UI/ImageWithAlt.vue';
import Button from '@/Components/UI/Button.vue';
import RepeaterField from '@/Components/UI/RepeaterField.vue';
import NestedMenuEditor from '@/Components/UI/NestedMenuEditor.vue';
import FooterMenuEditor from '@/Components/UI/FooterMenuEditor.vue';
import ConceptBlockEditor from '@/Components/UI/ConceptBlockEditor.vue';

// Use absolute paths for SSR compatibility
const saFlag = '/assets/img/sa-flag.svg';
const usFlag = '/assets/img/us-flag.svg';

const props = defineProps({
    section: {
        type: Object,
        required: true,
    },
    sectionType: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(['close', 'update', 'change']);

const currentLang = ref('en');

// Initialize formData with section content merged with default_content
const initFormData = () => {
    const defaultContent = props.sectionType?.default_content || props.section.section_type?.default_content || {};
    const sectionContent = props.section.content || {};
    
    // Deep merge: default_content as base, section content overrides
    return deepMerge(JSON.parse(JSON.stringify(defaultContent)), JSON.parse(JSON.stringify(sectionContent)));
};

// Deep merge helper
const deepMerge = (target, source) => {
    if (!source) return target;
    
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Array) {
            target[key] = source[key];
        } else if (source[key] instanceof Object && target[key] instanceof Object) {
            target[key] = deepMerge(target[key], source[key]);
        } else if (source[key] !== undefined && source[key] !== null && source[key] !== '') {
            target[key] = source[key];
        }
    }
    return target;
};

const formData = reactive(initFormData());
const isResetting = ref(false);

// Watch for section changes (only react to section ID change, not deep content changes)
watch(() => props.section?.id, (newId, oldId) => {
    if (newId !== oldId) {
        isResetting.value = true;
        Object.assign(formData, initFormData());
        nextTick(() => { isResetting.value = false; });
    }
});

// Watch for changes and emit current content for live preview
watch(formData, () => {
    if (!isResetting.value) {
        emit('change', props.section.id, { ...formData });
    }
}, { deep: true });

// Language toggle
const switchLanguage = (lang) => {
    currentLang.value = lang;
};

// Get field value for current language
const getFieldValue = (field) => {
    const langField = `${field}_${currentLang.value}`;
    return formData[langField] ?? formData[field] ?? '';
};

// Set field value for current language
const setFieldValue = (field, value) => {
    const langField = `${field}_${currentLang.value}`;
    if (formData.hasOwnProperty(langField) || formData.hasOwnProperty(`${field}_en`)) {
        formData[langField] = value;
    } else {
        formData[field] = value;
    }
    emit('change');
};

// Check if field exists (bilingual or not)
const hasField = (field) => {
    return formData.hasOwnProperty(`${field}_en`) || 
           formData.hasOwnProperty(`${field}_ar`) || 
           formData.hasOwnProperty(field);
};

// Check if field is bilingual
const isBilingualField = (field) => {
    return formData.hasOwnProperty(`${field}_en`) || formData.hasOwnProperty(`${field}_ar`);
};

// Save changes
const save = () => {
    emit('update', props.section.id, { ...formData });
};

// Close sidebar
const close = () => {
    emit('close');
};

// Get section key
const sectionKey = computed(() => props.section.section_type?.key || '');

// Field definitions for each section type
const getSectionFields = computed(() => {
    const key = sectionKey.value;
    
    switch (key) {
        case 'hero':
            return {
                basicFields: [
                    { key: 'subtitle', type: 'text' },
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' }
                ],
                buttonFields: [
                    { key: 'button_text', label: 'Primary Button Text' },
                    { key: 'button_url', label: 'Primary Button URL' },
                    { key: 'secondary_button_text', label: 'Secondary Button Text' },
                    { key: 'secondary_button_url', label: 'Secondary Button URL' }
                ],
                imageFields: [
                    { key: 'background_image', showAlt: true, hint: '1920 × 1080 px' },
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' },
                    { key: 'icon', showAlt: false, hint: '100 × 100 px (SVG preferred)' },
                    { key: 'hero_image', showAlt: false, hint: '744 × 526 px' },
                    { key: 'hero_bg_image', showAlt: false, hint: '780 × 534 px' }
                ],
                repeaterFields: [{
                    key: 'slides',
                    label: 'Slider Images (for Slider variant)',
                    itemLabel: 'Slide',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: true, simpleAlt: true, hint: '833 × 592 px' }
                    ],
                    defaultItem: { image: '', alt: '' }
                }],
                variantField: {
                    key: 'variant',
                    options: [
                        { value: 'slider', label: 'Slider (Homepage)' },
                        { value: 'service', label: 'Service (Dark Background)' },
                        { value: 'common', label: 'Common (Light Background)' }
                    ]
                }
            };
            
        case 'partners':
            return {
                basicFields: [],
                buttonFields: [],
                imageFields: [],
                repeaterFields: [{
                    key: 'logos',
                    label: 'Partner Logos',
                    itemLabel: 'Logo',
                    fields: [
                        { key: 'image', label: 'Logo Image', type: 'image', showAlt: true, simpleAlt: true, hint: '200 × 100 px (SVG preferred)' },
                        { key: 'url', label: 'Website URL', type: 'url' }
                    ],
                    defaultItem: { image: '', url: '#', alt: '' }
                }]
            };
            
        case 'concept':
            return {
                basicFields: [],
                buttonFields: [],
                imageFields: [
                    { key: 'shape_image', showAlt: false, hint: '2490 × 2034 px (SVG preferred)' },
                    { key: 'bottom_shape_image', showAlt: false, hint: '5556 × 774 px (SVG preferred)' },
                    { key: 'counter_bg_image', showAlt: false, hint: '1544 × 390 px' }
                ],
                repeaterFields: [],
                conceptEditor: true  // Use dedicated ConceptBlockEditor
            };
            
        case 'services':
            return {
                basicFields: [{ key: 'title', type: 'text' }],
                buttonFields: [],
                imageFields: [{ key: 'shape_image', showAlt: false, hint: '1812 × 1684 px (SVG preferred)' }],
                repeaterFields: [{
                    key: 'services',
                    label: 'Services',
                    itemLabel: 'Service',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false, hint: '588 × 504 px' },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { image: '', title_en: '', title_ar: '', description_en: '', description_ar: '' }
                }]
            };
            
        case 'cta':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' }
                ],
                buttonFields: ['button_text', 'button_url'],
                imageFields: [{ key: 'shape_image', showAlt: false, hint: '931 × 164 px (SVG preferred)' }],
                repeaterFields: [{
                    key: 'contact_cards',
                    label: 'Contact Cards',
                    itemLabel: 'Card',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false, hint: '120 × 120 px (SVG preferred)' },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        {
                            key: 'links',
                            label: 'Links',
                            type: 'repeater',
                            itemLabel: 'Link',
                            sortable: true,
                            fields: [
                                { key: 'text', label: 'Text', type: 'text' },
                                { key: 'url', label: 'URL', type: 'url' }
                            ],
                            defaultItem: { text: '', url: '#' },
                            minItems: 0,
                            maxItems: 10
                        }
                    ],
                    defaultItem: { icon: '', title_en: '', title_ar: '', links: [] }
                }]
            };
            
        case 'projects':
            return {
                basicFields: [{ key: 'title', type: 'text' }],
                buttonFields: [],
                imageFields: [
                    { key: 'shape_image', showAlt: false, hint: '1209 × 522 px (SVG preferred)' },
                    { key: 'work_shape_image', showAlt: false, hint: '1278 × 522 px (SVG preferred)' }
                ],
                repeaterFields: [{
                    key: 'projects',
                    label: 'Projects',
                    itemLabel: 'Project',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false, hint: '520 × 1049 px' },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true },
                        { key: 'learn_more_text', label: 'Learn More Text', type: 'text', bilingual: true },
                        { key: 'learn_more_url', label: 'Learn More URL', type: 'url' },
                        { key: 'visit_text', label: 'Visit Text', type: 'text', bilingual: true },
                        { key: 'visit_url', label: 'Visit URL', type: 'url' },
                        { key: 'btn_color_class', label: 'Button Color Class', type: 'text' }
                    ],
                    defaultItem: { 
                        image: '', title_en: '', title_ar: '', description_en: '', description_ar: '',
                        learn_more_text_en: 'Learn More', learn_more_text_ar: 'تعرف أكثر', learn_more_url: '#',
                        visit_text_en: 'Visit Project', visit_text_ar: 'زيارة المشروع', visit_url: '#',
                        btn_color_class: ''
                    }
                }]
            };
            
        case 'team':
            return {
                basicFields: [{ key: 'title', type: 'text' }],
                buttonFields: [],
                imageFields: [{ key: 'shape_image', showAlt: false, hint: '586 × 362 px (SVG preferred)' }],
                repeaterFields: [{
                    key: 'members',
                    label: 'Team Members',
                    itemLabel: 'Member',
                    fields: [
                        { key: 'image', label: 'Photo', type: 'image', showAlt: false, hint: '1200 × 858 px' },
                        { key: 'title', label: 'Role', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { image: '', title_en: '', title_ar: '', description_en: '', description_ar: '' }
                }]
            };
            
        case 'contact':
            return {
                basicFields: [],
                buttonFields: ['button_text', 'button_url'],
                imageFields: [
                    { key: 'background_image', showAlt: true, hint: '1920 × 1080 px' },
                    { key: 'contact_logo', showAlt: false, hint: '200 × 80 px (SVG preferred)' }
                ],
                repeaterFields: [{
                    key: 'cards',
                    label: 'Feature Cards',
                    itemLabel: 'Card',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false, hint: '120 × 120 px (SVG preferred)' },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { icon: '', title_en: '', title_ar: '', description_en: '', description_ar: '' }
                }]
            };
            
        case 'gallery':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'subtitle', type: 'text' }
                ],
                buttonFields: ['button_text', 'button_url'],
                imageFields: [{ key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' }],
                repeaterFields: [{
                    key: 'images',
                    label: 'Gallery Images',
                    itemLabel: 'Image',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false, hint: '1628 × 1054 px' },
                        { key: 'title', label: 'Title/Caption', type: 'text' }
                    ],
                    defaultItem: { image: '', title: '' }
                }]
            };
            
        case 'faq':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'subtitle', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [{ key: 'shape_image', showAlt: false }],
                repeaterFields: [{
                    key: 'faqs',
                    label: 'FAQ Items',
                    itemLabel: 'FAQ',
                    fields: [
                        { key: 'question', label: 'Question', type: 'text', bilingual: true },
                        { key: 'answer', label: 'Answer', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { question_en: '', question_ar: '', answer_en: '', answer_ar: '' }
                }]
            };
            
        case 'inquiry':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' }
                ],
                buttonFields: [
                    { key: 'primary_button_text', label: 'Primary Button Text' },
                    { key: 'primary_button_url', label: 'Primary Button URL' },
                    { key: 'secondary_button_text', label: 'Secondary Button Text' },
                    { key: 'secondary_button_url', label: 'Secondary Button URL' }
                ],
                imageFields: [
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' },
                    { key: 'image', showAlt: false, hint: '1080 × 810 px' }
                ],
                repeaterFields: []
            };
            
        case 'header':
            return {
                basicFields: [
                    { key: 'lang_label_ar', type: 'text' },
                    { key: 'lang_label_en', type: 'text' }
                ],
                buttonFields: ['contact_button_text', 'contact_button_url'],
                imageFields: [
                    { key: 'logo', showAlt: false, hint: '208 × 36 px (SVG preferred)' },
                    { key: 'flag_ar', showAlt: false, hint: '20 × 20 px (SVG preferred)' },
                    { key: 'flag_en', showAlt: false, hint: '20 × 20 px (SVG preferred)' },
                    { key: 'check_icon', showAlt: false, hint: '16 × 16 px (SVG preferred)' }
                ],
                repeaterFields: [],
                nestedMenuField: {
                    key: 'menu_items',
                    label: 'Menu Items'
                },
                variantField: {
                    key: 'variant',
                    options: [
                        { value: 'dark', label: 'Dark (Transparent/White)' },
                        { value: 'light', label: 'Light (Solid Background)' }
                    ]
                }
            };
            
        case 'footer':
            return {
                basicFields: ['tagline', 'copyright_text'],
                buttonFields: [],
                imageFields: [
                    { key: 'logo', showAlt: false, hint: '208 × 36 px (SVG preferred)' },
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' }
                ],
                repeaterFields: [],
                footerFields: {
                    menuColumns: 'menu_columns',
                    contactInfo: 'contact_info',
                    social: 'social'
                }
            };
        
        case 'contact-info':
            return {
                basicFields: [
                    { key: 'section_title', type: 'text' },
                    { key: 'section_description', type: 'richtext' },
                    { key: 'general_info_title', type: 'text' },
                    { key: 'general_info_description', type: 'richtext' },
                    { key: 'form_title', type: 'text' },
                    { key: 'form_description', type: 'richtext' },
                    { key: 'country_code', type: 'text' },
                    { key: 'placeholder_name', type: 'text' },
                    { key: 'placeholder_email', type: 'text' },
                    { key: 'placeholder_phone', type: 'text' },
                    { key: 'placeholder_subject', type: 'text' },
                    { key: 'placeholder_message', type: 'text' },
                    { key: 'submit_text', type: 'text' },
                    { key: 'submitting_text', type: 'text' },
                    { key: 'success_message', type: 'text' },
                    { key: 'default_subject', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [{ key: 'overlay_image', showAlt: false, hint: '636 × 451 px' }],
                repeaterFields: [
                    {
                        key: 'info_cards',
                        label: 'Contact Info Cards',
                        itemLabel: 'Card',
                        fields: [
                            { key: 'icon', label: 'Icon', type: 'image', showAlt: false, hint: '24 × 24 px (SVG preferred)' },
                            { key: 'title', label: 'Title', type: 'text', bilingual: true },
                            { key: 'content', label: 'Content', type: 'richtext', bilingual: true }
                        ],
                        defaultItem: { icon: '', title_en: '', title_ar: '', content_en: '', content_ar: '' }
                    },
                    {
                        key: 'info_items',
                        label: 'General Info Items',
                        itemLabel: 'Info Item',
                        fields: [
                            { key: 'label', label: 'Label', type: 'text', bilingual: true },
                            { key: 'value', label: 'Value', type: 'text', bilingual: true },
                            { key: 'type', label: 'Type', type: 'text' },
                            {
                                key: 'links',
                                label: 'Social Links',
                                type: 'repeater',
                                itemLabel: 'Social Link',
                                sortable: true,
                                showWhen: {
                                    key: 'type',
                                    equals: 'social'
                                },
                                fields: [
                                    { key: 'icon', label: 'Icon URL/Path', type: 'text' },
                                    { key: 'url', label: 'Profile URL', type: 'url' },
                                    { key: 'name', label: 'Name', type: 'text' }
                                ],
                                defaultItem: { icon: '', url: '#', name: '' },
                                minItems: 0,
                                maxItems: 10
                            }
                        ],
                        defaultItem: { label_en: '', label_ar: '', value_en: '', value_ar: '', type: 'text', links: [] }
                    }
                ]
            };
        
        case 'page-banner':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'subtitle', type: 'text' },
                    { key: 'breadcrumb', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [
                    { key: 'background_image', showAlt: true, hint: '1852 × 499 px' },
                    { key: 'icon', showAlt: false, hint: '100 × 100 px (SVG preferred)' },
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' },
                    { key: 'side_image', showAlt: false, hint: '539 × 520 px' }
                ],
                repeaterFields: [],
                variantField: {
                    key: 'variant',
                    options: [
                        { value: 'default', label: 'Default (Centered)' },
                        { value: 'services', label: 'Services (Side Image)' },
                        { value: 'about', label: 'About (Wide)' }
                    ]
                }
            };
        
        case 'contact-banner':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'breadcrumb', type: 'text' },
                    { key: 'home_label', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [
                    { key: 'background_image', showAlt: true, hint: '1852 × 499 px' },
                    { key: 'icon', showAlt: false, hint: '100 × 100 px (SVG preferred)' },
                    { key: 'side_image', showAlt: false, hint: '539 × 520 px' }
                ],
                repeaterFields: []
            };

        case 'about':
            return {
                basicFields: [],
                buttonFields: [],
                imageFields: [
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' },
                    { key: 'left_shape_image', showAlt: false, hint: '309 × 300 px (SVG preferred)' },
                    { key: 'right_shape_image', showAlt: false, hint: '421 × 300 px (SVG preferred)' }
                ],
                repeaterFields: [{
                    key: 'blocks',
                    label: 'About Blocks',
                    itemLabel: 'Block',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false, hint: '70 × 70 px (SVG preferred)' },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'content', label: 'Content', type: 'richtext', bilingual: true },
                        { key: 'image', label: 'Image', type: 'image', showAlt: false, hint: '539 × 520 px' },
                        { key: 'image_bg', label: 'Image Background', type: 'image', showAlt: false, hint: '780 × 534 px' },
                        { key: 'layout', label: 'Layout', type: 'text' }
                    ],
                    defaultItem: { 
                        icon: '', 
                        title_en: '', 
                        title_ar: '', 
                        content_en: '', 
                        content_ar: '', 
                        image: '',
                        image_bg: '',
                        layout: 'image-right'
                    }
                }]
            };

        case 'hero_slider':
            return {
                basicFields: [
                    { key: 'subtitle', type: 'text' },
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' }
                ],
                buttonFields: ['button_text', 'button_url'],
                imageFields: [
                    { key: 'background_image', showAlt: true, hint: '1920 × 1080 px' }
                ],
                repeaterFields: [{
                    key: 'slides',
                    label: 'Slider Images',
                    itemLabel: 'Slide',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: true, simpleAlt: true, hint: '833 × 592 px' }
                    ],
                    defaultItem: { image: '', alt: '' }
                }]
            };

        case 'hero_common':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' }
                ],
                buttonFields: [
                    { key: 'button_text', label: 'Primary Button Text' },
                    { key: 'button_url', label: 'Primary Button URL' },
                    { key: 'secondary_button_text', label: 'Secondary Button Text' },
                    { key: 'secondary_button_url', label: 'Secondary Button URL' }
                ],
                imageFields: [
                    { key: 'background_image', showAlt: false, hint: '780 × 534 px' },
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' },
                    { key: 'icon', showAlt: false, hint: '100 × 100 px (SVG preferred)' },
                    { key: 'hero_image', showAlt: false, hint: '744 × 526 px' },
                    { key: 'hero_bg_image', showAlt: false, hint: '780 × 534 px' }
                ],
                repeaterFields: []
            };

        case 'newsletter':
            return {
                basicFields: [
                    { key: 'title1', type: 'text' },
                    { key: 'title2', type: 'text' },
                    { key: 'phone_label', type: 'text' },
                    { key: 'phone', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [
                    { key: 'background_image', showAlt: false, hint: '1660 × 296 px' },
                    { key: 'icon', showAlt: false, hint: '102 × 102 px (SVG preferred)' }
                ],
                repeaterFields: []
            };

        case 'map':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'subtitle', type: 'text' },
                    { key: 'map_title', type: 'text' },
                    { key: 'address', type: 'text' },
                    { key: 'default_location', type: 'text' },
                    { key: 'business_name', type: 'text' },
                    { key: 'latitude', type: 'text' },
                    { key: 'longitude', type: 'text' },
                    { key: 'zoom', type: 'text' },
                    { key: 'height', type: 'text' },
                    { key: 'embed_url', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [],
                repeaterFields: []
            };

        case 'common_service':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'subtitle', type: 'text' },
                    { key: 'title_color', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [{ key: 'section_icon', showAlt: false }],
                repeaterFields: [{
                    key: 'services',
                    label: 'Services',
                    itemLabel: 'Service',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { icon: '', title_en: '', title_ar: '', description_en: '', description_ar: '' }
                }]
            };

        case 'counter_area':
            return {
                basicFields: [{ key: 'no_margin_top', type: 'checkbox' }],
                buttonFields: [],
                imageFields: [],
                repeaterFields: [{
                    key: 'counters',
                    label: 'Counter Items',
                    itemLabel: 'Counter',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false },
                        { key: 'value', label: 'Value (e.g. +40)', type: 'text' },
                        { key: 'label', label: 'Label', type: 'text', bilingual: true }
                    ],
                    defaultItem: { icon: '', value: '', label_en: '', label_ar: '' }
                }]
            };

        case 'gallery_page':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'subtitle', type: 'text' },
                    { key: 'breadcrumb', type: 'text' }
                ],
                buttonFields: [],
                imageFields: [],
                repeaterFields: [{
                    key: 'items',
                    label: 'Gallery Items',
                    itemLabel: 'Item',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false },
                        { key: 'label', label: 'Label', type: 'text', bilingual: true },
                        { key: 'url', label: 'URL', type: 'url' }
                    ],
                    defaultItem: { image: '', label_en: '', label_ar: '', url: '#' }
                }]
            };

        case 'hero_riya':
        case 'hero_jiyad':
        case 'hero_shopsz':
        case 'hero_beyond_erp':
        case 'hero_beyond_pay':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' },
                    { key: 'title_color', type: 'text' }
                ],
                buttonFields: [
                    { key: 'button_text', label: 'Primary Button Text' },
                    { key: 'button_url', label: 'Primary Button URL' },
                    { key: 'secondary_button_text', label: 'Secondary Button Text' },
                    { key: 'secondary_button_url', label: 'Secondary Button URL' }
                ],
                imageFields: [
                    { key: 'shape_image', showAlt: false, hint: '1576 × 625 px (SVG preferred)' },
                    { key: 'icon', showAlt: false, hint: '100 × 100 px (SVG preferred)' },
                    { key: 'hero_image', showAlt: false, hint: '744 × 526 px' },
                    { key: 'hero_bg_image', showAlt: false, hint: '780 × 534 px' }
                ],
                repeaterFields: []
            };

        case 'product':
            return {
                basicFields: [
                    { key: 'title', type: 'text' },
                    { key: 'description', type: 'richtext' }
                ],
                buttonFields: [],
                imageFields: [
                    { key: 'icon', showAlt: false, hint: '70 × 70 px (SVG preferred)' },
                    { key: 'image', showAlt: false, hint: '539 × 520 px' },
                    { key: 'left_shape', showAlt: false, hint: '309 × 300 px (SVG preferred)' },
                    { key: 'top_right_shape', showAlt: false, hint: '421 × 300 px (SVG preferred)' }
                ],
                repeaterFields: []
            };
            
        default:
            // Generic fallback
            return {
                basicFields: ['title', 'subtitle', 'description'],
                buttonFields: hasField('button_text') ? ['button_text', 'button_url'] : [],
                imageFields: hasField('background_image') ? ['background_image'] : [],
                repeaterFields: []
            };
    }
});

// Get button field configuration
const getButtonConfig = (field) => {
    if (typeof field === 'object') return field;
    return { key: field, label: formatLabel(field) };
};

// Format label from field key
const formatLabel = (key) => {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace(/Url/g, 'URL')
        .replace(/En$|Ar$/g, '');
};

// Handle image update
const updateImage = (field, value) => {
    if (typeof value === 'object' && value.image !== undefined) {
        formData[field] = value.image;
        formData[`${field}_alt_en`] = value.alt_en || '';
        formData[`${field}_alt_ar`] = value.alt_ar || '';
    } else {
        formData[field] = value;
    }
    emit('change');
};

// Get image data for ImageWithAlt - always return a valid object
// IMPORTANT: Do NOT mutate formData here - this is called during render
const getImageData = (field) => {
    return {
        image: formData[field] || '',
        alt_en: formData[`${field}_alt_en`] || '',
        alt_ar: formData[`${field}_alt_ar`] || ''
    };
};

// Update repeater data
const updateRepeater = (key, value) => {
    formData[key] = value;
    emit('change');
};
</script>

<template>
    <div class="sidebar-overlay" @click="close"></div>
    <div class="edit-sidebar">
        <div class="sidebar-header">
            <div class="header-content">
                <h2 class="sidebar-title">Edit Section</h2>
                <p class="section-type">{{ section.section_type?.name_en || 'Section' }}</p>
            </div>
            <button class="close-btn" @click="close">
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="sidebar-body">
            <!-- Language Tabs -->
            <div class="language-tabs">
                <button
                    :class="['lang-tab', { 'active': currentLang === 'en' }]"
                    @click="switchLanguage('en')"
                >
                    <img :src="usFlag" alt="English" class="flag-icon" />
                    English
                </button>
                <button
                    :class="['lang-tab', { 'active': currentLang === 'ar' }]"
                    @click="switchLanguage('ar')"
                >
                    <img :src="saFlag" alt="Arabic" class="flag-icon" />
                    Arabic
                </button>
            </div>

            <!-- Content Fields -->
            <div class="content-fields">
                
                <!-- Basic Text Fields (Title, Subtitle, Description) -->
                <template v-for="field in getSectionFields.basicFields" :key="typeof field === 'object' ? field.key : field">
                    <template v-if="typeof field === 'object'">
                        <!-- TextInput for text type fields -->
                        <TextInput
                            v-if="field.type === 'text' && hasField(field.key)"
                            :model-value="getFieldValue(field.key)"
                            :label="formatLabel(field.key)"
                            :placeholder="`Enter ${formatLabel(field.key).toLowerCase()}`"
                            @update:model-value="setFieldValue(field.key, $event)"
                        />
                        <!-- RichTextEditor for richtext type fields -->
                        <RichTextEditor
                            v-else-if="field.type === 'richtext' && hasField(field.key)"
                            :model-value="getFieldValue(field.key)"
                            :label="formatLabel(field.key)"
                            :placeholder="`Enter ${formatLabel(field.key).toLowerCase()}`"
                            @update:model-value="setFieldValue(field.key, $event)"
                        />
                    </template>
                    <!-- Backward compatibility: string field names use TextInput by default -->
                    <TextInput
                        v-else-if="hasField(field)"
                        :model-value="getFieldValue(field)"
                        :label="formatLabel(field)"
                        :placeholder="`Enter ${formatLabel(field).toLowerCase()}`"
                        @update:model-value="setFieldValue(field, $event)"
                    />
                </template>

                <!-- Button Fields -->
                <div v-if="getSectionFields.buttonFields.length > 0" class="field-group">
                    <h3 class="group-title">Button Settings</h3>
                    <template v-for="btnField in getSectionFields.buttonFields" :key="typeof btnField === 'object' ? btnField.key : btnField">
                        <template v-if="typeof btnField === 'object'">
                            <RichTextEditor
                                v-if="btnField.key.includes('text') && hasField(btnField.key)"
                                :model-value="getFieldValue(btnField.key)"
                                :label="btnField.label"
                                :placeholder="`Enter ${btnField.label.toLowerCase()}`"
                                @update:model-value="setFieldValue(btnField.key, $event)"
                            />
                            <UrlAutocomplete
                                v-else-if="hasField(btnField.key)"
                                :model-value="formData[btnField.key]"
                                :label="btnField.label"
                                :placeholder="`Type / for internal pages or enter URL`"
                                :lang="currentLang"
                                @update:model-value="formData[btnField.key] = $event; emit('change')"
                            />
                        </template>
                        <template v-else>
                            <RichTextEditor
                                v-if="btnField.includes('text') && hasField(btnField)"
                                :model-value="getFieldValue(btnField)"
                                :label="formatLabel(btnField)"
                                :placeholder="`Enter ${formatLabel(btnField).toLowerCase()}`"
                                @update:model-value="setFieldValue(btnField, $event)"
                            />
                            <UrlAutocomplete
                                v-else-if="hasField(btnField)"
                                :model-value="formData[btnField]"
                                :label="formatLabel(btnField)"
                                :placeholder="`Type / for internal pages or enter URL`"
                                :lang="currentLang"
                                @update:model-value="formData[btnField] = $event; emit('change')"
                            />
                        </template>
                    </template>
                </div>

                <!-- Image Fields -->
                <div v-if="getSectionFields.imageFields.length > 0" class="field-group">
                    <h3 class="group-title">Images</h3>
                    <template v-for="imgField in getSectionFields.imageFields" :key="typeof imgField === 'object' ? imgField.key : imgField">
                        <template v-if="typeof imgField === 'object'">
                            <ImageWithAlt
                                :model-value="getImageData(imgField.key)"
                                :label="formatLabel(imgField.key)"
                                :section-type="sectionKey"
                                :current-lang="currentLang"
                                :show-alt-fields="imgField.showAlt"
                                :hint="imgField.hint || ''"
                                @update:model-value="updateImage(imgField.key, $event)"
                            />
                        </template>
                        <template v-else>
                            <ImageWithAlt
                                :model-value="getImageData(imgField)"
                                :label="formatLabel(imgField)"
                                :section-type="sectionKey"
                                :current-lang="currentLang"
                                :show-alt-fields="imgField.includes('background') || imgField === 'image'"
                                @update:model-value="updateImage(imgField, $event)"
                            />
                        </template>
                    </template>
                </div>

                <!-- Concept Block Editor (for concept section) -->
                <div v-if="getSectionFields.conceptEditor" class="field-group">
                    <h3 class="group-title">Content</h3>
                    <ConceptBlockEditor
                        :model-value="{ blocks: formData.blocks || [], counters: formData.counters || [] }"
                        :current-lang="currentLang"
                        @update:model-value="formData.blocks = $event.blocks; formData.counters = $event.counters; emit('change')"
                    />
                </div>

                <!-- Repeater Fields -->
                <template v-for="repeater in getSectionFields.repeaterFields" :key="repeater.key">
                    <div class="field-group">
                        <RepeaterField
                            v-if="formData[repeater.key]"
                            :model-value="formData[repeater.key]"
                            :label="repeater.label"
                            :item-label="repeater.itemLabel"
                            :fields="repeater.fields"
                            :default-item="repeater.defaultItem"
                            :section-type="sectionKey"
                            :current-lang="currentLang"
                            @update:model-value="updateRepeater(repeater.key, $event)"
                        />
                    </div>
                </template>

                <!-- Nested Menu Editor (for header) -->
                <div v-if="getSectionFields.nestedMenuField && formData[getSectionFields.nestedMenuField.key]" class="field-group">
                    <NestedMenuEditor
                        :model-value="formData[getSectionFields.nestedMenuField.key]"
                        :label="getSectionFields.nestedMenuField.label"
                        :current-lang="currentLang"
                        @update:model-value="updateRepeater(getSectionFields.nestedMenuField.key, $event)"
                    />
                </div>

                <!-- Footer Menu Editor -->
                <div v-if="getSectionFields.footerFields" class="field-group">
                    <h3 class="group-title">Footer Menus & Links</h3>
                    <FooterMenuEditor
                        :menu-columns="formData[getSectionFields.footerFields.menuColumns] || []"
                        :contact-info="formData[getSectionFields.footerFields.contactInfo] || { title_en: '', title_ar: '', items: [] }"
                        :social="formData[getSectionFields.footerFields.social] || { title_en: '', title_ar: '', links: [] }"
                        :current-lang="currentLang"
                        @update:menu-columns="formData[getSectionFields.footerFields.menuColumns] = $event; emit('change')"
                        @update:contact-info="formData[getSectionFields.footerFields.contactInfo] = $event; emit('change')"
                        @update:social="formData[getSectionFields.footerFields.social] = $event; emit('change')"
                    />
                </div>

                <!-- Variant Selector -->
                <div v-if="getSectionFields.variantField" class="field-group">
                    <h3 class="group-title">Layout Style</h3>
                    <div class="variant-selector">
                        <label class="field-label">{{ formatLabel(getSectionFields.variantField.key) }}</label>
                        <div class="variant-options">
                            <label 
                                v-for="option in getSectionFields.variantField.options" 
                                :key="option.value"
                                class="variant-option"
                                :class="{ 'active': formData[getSectionFields.variantField.key] === option.value }"
                            >
                                <input 
                                    type="radio"
                                    :name="getSectionFields.variantField.key"
                                    :value="option.value"
                                    :checked="formData[getSectionFields.variantField.key] === option.value"
                                    @change="formData[getSectionFields.variantField.key] = option.value; emit('change')"
                                />
                                <span class="option-label">{{ option.label }}</span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="sidebar-footer">
            <Button variant="outline" @click="close">
                Cancel
            </Button>
            <Button variant="primary" @click="save">
                <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Save Changes
            </Button>
        </div>
    </div>
</template>

<style scoped>
.sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9998;
}

.edit-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    min-width: 560px;
    max-width: 960px;
    background-color: #ffffff;
    box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

.sidebar-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.header-content {
    flex: 1;
}

.sidebar-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.25rem 0;
}

.section-type {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
}

.close-btn {
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
    flex-shrink: 0;
}

.close-btn:hover {
    background-color: #f3f4f6;
    color: #111827;
}

.close-btn svg {
    width: 1.25rem;
    height: 1.25rem;
}

.sidebar-body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
}

.language-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0.25rem;
    background-color: #f3f4f6;
    border-radius: 6px;
}

.lang-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s;
}

.lang-tab:hover {
    color: #111827;
}

.lang-tab.active {
    background-color: #ffffff;
    color: var(--color-primary, #004F4C);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.flag-icon {
    width: 1.25rem;
    height: auto;
}

.content-fields {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.field-group {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
}

.field-group:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
}

.group-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.sidebar-footer {
    display: flex;
    gap: 0.75rem;
    padding: 1.5rem;
    border-top: 1px solid #e5e7eb;
    background-color: #f9fafb;
}

.icon {
    width: 1.25rem;
    height: 1.25rem;
}

/* Variant Selector Styles */
.variant-selector {
    margin-bottom: 1rem;
}

.variant-selector .field-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
}

.variant-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.variant-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.15s ease;
    background-color: #fff;
}

.variant-option:hover {
    border-color: var(--color-primary, #004F4C);
    background-color: #f9fafb;
}

.variant-option.active {
    border-color: var(--color-primary, #004F4C);
    background-color: rgba(0, 79, 76, 0.05);
}

.variant-option input[type="radio"] {
    accent-color: var(--color-primary, #004F4C);
    width: 1rem;
    height: 1rem;
}

.variant-option .option-label {
    font-size: 0.875rem;
    color: #374151;
    font-weight: 500;
}
</style>
