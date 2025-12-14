<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue';
import TextInput from '@/Components/UI/TextInput.vue';
import RichTextEditor from '@/Components/UI/RichTextEditor.vue';
import ImageWithAlt from '@/Components/UI/ImageWithAlt.vue';
import Button from '@/Components/UI/Button.vue';
import RepeaterField from '@/Components/UI/RepeaterField.vue';
import NestedMenuEditor from '@/Components/UI/NestedMenuEditor.vue';
import FooterMenuEditor from '@/Components/UI/FooterMenuEditor.vue';
import saFlag from '@/../assets/sa-flag.svg';
import usFlag from '@/../assets/us-flag.svg';

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

// Watch for section changes
watch(() => props.section, () => {
    Object.assign(formData, initFormData());
}, { deep: true });

// Watch for changes
watch(formData, () => {
    emit('change');
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
                basicFields: ['subtitle', 'title', 'description'],
                buttonFields: ['button_text', 'button_url'],
                imageFields: ['background_image'],
                repeaterFields: [{
                    key: 'slides',
                    label: 'Slider Images',
                    itemLabel: 'Slide',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: true }
                    ],
                    defaultItem: { image: '', alt: '', alt_en: '', alt_ar: '' }
                }]
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
                        { key: 'image', label: 'Logo Image', type: 'image', showAlt: true },
                        { key: 'url', label: 'Website URL', type: 'url' }
                    ],
                    defaultItem: { image: '', url: '#', alt: '', alt_en: '', alt_ar: '' }
                }]
            };
            
        case 'concept':
            return {
                basicFields: [],
                buttonFields: [],
                imageFields: ['shape_image', 'bottom_shape_image', 'counter_bg_image'],
                repeaterFields: [
                    {
                        key: 'blocks',
                        label: 'Content Blocks',
                        itemLabel: 'Block',
                        fields: [
                            { key: 'title', label: 'Title', type: 'text', bilingual: true },
                            { key: 'paragraphs', label: 'Content', type: 'richtext', bilingual: true, isArray: true }
                        ],
                        defaultItem: { 
                            title_en: '', title_ar: '', 
                            paragraphs_en: [], paragraphs_ar: [],
                            slides: [],
                            image_on_left: false
                        }
                    },
                    {
                        key: 'counters',
                        label: 'Counter Stats',
                        itemLabel: 'Counter',
                        fields: [
                            { key: 'value', label: 'Value', type: 'text' },
                            { key: 'label', label: 'Label', type: 'text', bilingual: true }
                        ],
                        defaultItem: { value: '', label_en: '', label_ar: '' }
                    }
                ]
            };
            
        case 'services':
            return {
                basicFields: ['title'],
                buttonFields: [],
                imageFields: ['shape_image'],
                repeaterFields: [{
                    key: 'services',
                    label: 'Services',
                    itemLabel: 'Service',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { image: '', title_en: '', title_ar: '', description_en: '', description_ar: '' }
                }]
            };
            
        case 'cta':
            return {
                basicFields: ['title', 'description'],
                buttonFields: ['button_text', 'button_url'],
                imageFields: ['shape_image'],
                repeaterFields: [{
                    key: 'contact_cards',
                    label: 'Contact Cards',
                    itemLabel: 'Card',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true }
                    ],
                    defaultItem: { icon: '', title_en: '', title_ar: '', links: [] }
                }]
            };
            
        case 'projects':
            return {
                basicFields: ['title'],
                buttonFields: [],
                imageFields: ['shape_image', 'work_shape_image'],
                repeaterFields: [{
                    key: 'projects',
                    label: 'Projects',
                    itemLabel: 'Project',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false },
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
                basicFields: ['title'],
                buttonFields: [],
                imageFields: ['shape_image'],
                repeaterFields: [{
                    key: 'members',
                    label: 'Team Members',
                    itemLabel: 'Member',
                    fields: [
                        { key: 'image', label: 'Photo', type: 'image', showAlt: false },
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
                imageFields: ['background_image', 'contact_logo'],
                repeaterFields: [{
                    key: 'cards',
                    label: 'Feature Cards',
                    itemLabel: 'Card',
                    fields: [
                        { key: 'icon', label: 'Icon', type: 'image', showAlt: false },
                        { key: 'title', label: 'Title', type: 'text', bilingual: true },
                        { key: 'description', label: 'Description', type: 'richtext', bilingual: true }
                    ],
                    defaultItem: { icon: '', title_en: '', title_ar: '', description_en: '', description_ar: '' }
                }]
            };
            
        case 'gallery':
            return {
                basicFields: ['title', 'subtitle'],
                buttonFields: ['button_text', 'button_url'],
                imageFields: ['shape_image'],
                repeaterFields: [{
                    key: 'images',
                    label: 'Gallery Images',
                    itemLabel: 'Image',
                    fields: [
                        { key: 'image', label: 'Image', type: 'image', showAlt: false },
                        { key: 'title', label: 'Title/Caption', type: 'text' }
                    ],
                    defaultItem: { image: '', title: '' }
                }]
            };
            
        case 'faq':
            return {
                basicFields: ['title', 'subtitle'],
                buttonFields: [],
                imageFields: ['shape_image'],
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
                basicFields: ['title', 'description'],
                buttonFields: [
                    { key: 'primary_button_text', label: 'Primary Button Text' },
                    { key: 'primary_button_url', label: 'Primary Button URL' },
                    { key: 'secondary_button_text', label: 'Secondary Button Text' },
                    { key: 'secondary_button_url', label: 'Secondary Button URL' }
                ],
                imageFields: ['shape_image', 'image'],
                repeaterFields: []
            };
            
        case 'header':
            return {
                basicFields: [],
                buttonFields: ['contact_button_text', 'contact_button_url'],
                imageFields: ['logo', 'flag_ar', 'flag_en', 'check_icon'],
                repeaterFields: [],
                nestedMenuField: {
                    key: 'menu_items',
                    label: 'Menu Items'
                }
            };
            
        case 'footer':
            return {
                basicFields: ['tagline', 'copyright_text'],
                buttonFields: [],
                imageFields: ['logo', 'shape_image'],
                repeaterFields: [],
                footerFields: {
                    menuColumns: 'menu_columns',
                    contactInfo: 'contact_info',
                    social: 'social'
                }
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
        if (value.alt_en) formData[`${field}_alt_en`] = value.alt_en;
        if (value.alt_ar) formData[`${field}_alt_ar`] = value.alt_ar;
    } else {
        formData[field] = value;
    }
    emit('change');
};

// Get image data for ImageWithAlt
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
                <template v-for="field in getSectionFields.basicFields" :key="field">
                    <RichTextEditor
                        v-if="hasField(field)"
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
                            <TextInput
                                v-else-if="hasField(btnField.key)"
                                :model-value="formData[btnField.key]"
                                :label="btnField.label"
                                :placeholder="`Enter ${btnField.label.toLowerCase()}`"
                                type="url"
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
                            <TextInput
                                v-else-if="hasField(btnField)"
                                :model-value="formData[btnField]"
                                :label="formatLabel(btnField)"
                                :placeholder="`Enter ${formatLabel(btnField).toLowerCase()}`"
                                type="url"
                                @update:model-value="formData[btnField] = $event; emit('change')"
                            />
                        </template>
                    </template>
                </div>

                <!-- Image Fields -->
                <div v-if="getSectionFields.imageFields.length > 0" class="field-group">
                    <h3 class="group-title">Images</h3>
                    <template v-for="imgField in getSectionFields.imageFields" :key="imgField">
                        <ImageWithAlt
                            v-if="hasField(imgField)"
                            :model-value="getImageData(imgField)"
                            :label="formatLabel(imgField)"
                            :section-type="sectionKey"
                            :current-lang="currentLang"
                            :show-alt-fields="imgField.includes('background') || imgField === 'image'"
                            @update:model-value="updateImage(imgField, $event)"
                        />
                    </template>
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
</style>
