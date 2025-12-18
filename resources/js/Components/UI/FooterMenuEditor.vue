<template>
    <div class="footer-menu-editor">
        <!-- Menu Columns Section -->
        <div v-if="showMenuColumns" class="editor-section">
            <div class="section-header">
                <h4 class="section-title">Menu Columns</h4>
                <button type="button" class="add-btn" @click="addMenuColumn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Column
                </button>
            </div>
            
            <div ref="menuColumnsContainer" class="columns-list">
                <div v-for="(column, colIndex) in localMenuColumns" :key="colIndex" class="column-item" :data-index="colIndex">
                    <div class="column-header" @click="toggleColumn(colIndex)">
                        <div class="column-drag-handle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <line x1="8" y1="6" x2="16" y2="6"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                <line x1="8" y1="18" x2="16" y2="18"></line>
                            </svg>
                        </div>
                        <span class="column-title">{{ getColumnTitle(column, colIndex) }}</span>
                        <span class="links-badge">{{ column.links?.length || 0 }} links</span>
                        <svg :class="['chevron', { rotated: expandedColumns[colIndex] }]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <button type="button" class="remove-btn" @click.stop="removeMenuColumn(colIndex)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    
                    <div v-if="expandedColumns[colIndex]" class="column-content">
                        <!-- Column Title Fields -->
                        <div class="field-row">
                            <div class="field-half">
                                <label class="field-label">Title (EN)</label>
                                <TextInput
                                    :modelValue="column.title_en || ''"
                                    @update:modelValue="updateColumnField(colIndex, 'title_en', $event)"
                                    placeholder="Column title (EN)"
                                />
                            </div>
                            <div class="field-half">
                                <label class="field-label">Title (AR)</label>
                                <TextInput
                                    :modelValue="column.title_ar || ''"
                                    @update:modelValue="updateColumnField(colIndex, 'title_ar', $event)"
                                    placeholder="Column title (AR)"
                                    dir="rtl"
                                />
                            </div>
                        </div>
                        
                        <!-- Links -->
                        <div class="links-section">
                            <div class="links-header">
                                <span class="links-title">Links</span>
                                <button type="button" class="add-link-btn" @click="addLink(colIndex)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add Link
                                </button>
                            </div>
                            
                            <div :ref="el => linkContainers[colIndex] = el" class="links-list">
                                <div v-for="(link, linkIndex) in column.links || []" :key="linkIndex" class="link-item" :data-index="linkIndex">
                                    <div class="link-drag-handle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <circle cx="9" cy="5" r="1"></circle>
                                            <circle cx="9" cy="12" r="1"></circle>
                                            <circle cx="9" cy="19" r="1"></circle>
                                            <circle cx="15" cy="5" r="1"></circle>
                                            <circle cx="15" cy="12" r="1"></circle>
                                            <circle cx="15" cy="19" r="1"></circle>
                                        </svg>
                                    </div>
                                    <div class="link-fields">
                                        <TextInput
                                            :modelValue="link.label_en || ''"
                                            @update:modelValue="updateLinkField(colIndex, linkIndex, 'label_en', $event)"
                                            placeholder="Label (EN)"
                                            class="link-input"
                                        />
                                        <TextInput
                                            :modelValue="link.label_ar || ''"
                                            @update:modelValue="updateLinkField(colIndex, linkIndex, 'label_ar', $event)"
                                            placeholder="Label (AR)"
                                            dir="rtl"
                                            class="link-input"
                                        />
                                        <TextInput
                                            :modelValue="link.url_en || ''"
                                            @update:modelValue="updateLinkField(colIndex, linkIndex, 'url_en', $event)"
                                            placeholder="URL (EN)"
                                            class="link-input url-input"
                                        />
                                        <TextInput
                                            :modelValue="link.url_ar || ''"
                                            @update:modelValue="updateLinkField(colIndex, linkIndex, 'url_ar', $event)"
                                            placeholder="URL (AR)"
                                            dir="rtl"
                                            class="link-input url-input"
                                        />
                                    </div>
                                    <button type="button" class="remove-link-btn" @click="removeLink(colIndex, linkIndex)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Contact Info Section -->
        <div v-if="showContactInfo" class="editor-section">
            <div class="section-header">
                <h4 class="section-title">Contact Info</h4>
                <span class="fixed-notice">Fixed 4 items (Phone, WhatsApp, Email, Location)</span>
            </div>
            
            <!-- Contact Section Title -->
            <div class="field-row">
                <div class="field-half">
                    <label class="field-label">Section Title (EN)</label>
                    <TextInput
                        :modelValue="localContactInfo.title_en || ''"
                        @update:modelValue="updateContactTitle('title_en', $event)"
                        placeholder="Contact title (EN)"
                    />
                </div>
                <div class="field-half">
                    <label class="field-label">Section Title (AR)</label>
                    <TextInput
                        :modelValue="localContactInfo.title_ar || ''"
                        @update:modelValue="updateContactTitle('title_ar', $event)"
                        placeholder="Contact title (AR)"
                        dir="rtl"
                    />
                </div>
            </div>
            
            <!-- Contact Items (Fixed - No Add/Remove) -->
            <div class="contact-items-section">
                <div class="links-header">
                    <span class="links-title">Contact Items</span>
                    <span class="items-count">{{ (localContactInfo.items || []).length }} / 4 items</span>
                </div>
                
                <div ref="contactItemsContainer" class="contact-items-list">
                    <div v-for="(item, itemIndex) in localContactInfo.items || []" :key="itemIndex" class="contact-item contact-item-fixed" :data-index="itemIndex">
                        <div class="contact-item-drag-handle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                        </div>
                        <div class="contact-item-fields">
                            <TextInput
                                :modelValue="item.icon || ''"
                                @update:modelValue="updateContactItemField(itemIndex, 'icon', $event)"
                                placeholder="Icon URL"
                                class="contact-input"
                            />
                            <TextInput
                                :modelValue="item.text || ''"
                                @update:modelValue="updateContactItemField(itemIndex, 'text', $event)"
                                placeholder="Display Text"
                                class="contact-input"
                            />
                            <TextInput
                                :modelValue="item.url || ''"
                                @update:modelValue="updateContactItemField(itemIndex, 'url', $event)"
                                placeholder="Link URL"
                                class="contact-input"
                            />
                        </div>
                        <!-- No delete button for fixed items -->
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Social Links Section -->
        <div v-if="showSocial" class="editor-section">
            <div class="section-header">
                <h4 class="section-title">Social Links</h4>
            </div>
            
            <!-- Social Section Title -->
            <div class="field-row">
                <div class="field-half">
                    <label class="field-label">Section Title (EN)</label>
                    <TextInput
                        :modelValue="localSocial.title_en || ''"
                        @update:modelValue="updateSocialTitle('title_en', $event)"
                        placeholder="Social title (EN)"
                    />
                </div>
                <div class="field-half">
                    <label class="field-label">Section Title (AR)</label>
                    <TextInput
                        :modelValue="localSocial.title_ar || ''"
                        @update:modelValue="updateSocialTitle('title_ar', $event)"
                        placeholder="Social title (AR)"
                        dir="rtl"
                    />
                </div>
            </div>
            
            <!-- Social Items -->
            <div class="social-items-section">
                <div class="links-header">
                    <span class="links-title">Social Icons</span>
                    <button type="button" class="add-link-btn" @click="addSocialItem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add Social
                    </button>
                </div>
                
                <div ref="socialItemsContainer" class="social-items-list">
                    <div v-for="(item, itemIndex) in localSocial.links || []" :key="itemIndex" class="social-item" :data-index="itemIndex">
                        <div class="social-item-drag-handle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                        </div>
                        <div class="social-item-fields">
                            <TextInput
                                :modelValue="item.icon || ''"
                                @update:modelValue="updateSocialItemField(itemIndex, 'icon', $event)"
                                placeholder="Icon URL/Path"
                                class="social-input"
                            />
                            <TextInput
                                :modelValue="item.url || ''"
                                @update:modelValue="updateSocialItemField(itemIndex, 'url', $event)"
                                placeholder="Profile URL"
                                class="social-input"
                            />
                        </div>
                        <button type="button" class="remove-link-btn" @click="removeSocialItem(itemIndex)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue';
import TextInput from './TextInput.vue';
import Sortable from 'sortablejs';

const props = defineProps({
    menuColumns: {
        type: Array,
        default: () => []
    },
    contactInfo: {
        type: Object,
        default: () => ({ title_en: '', title_ar: '', items: [] })
    },
    social: {
        type: Object,
        default: () => ({ title_en: '', title_ar: '', links: [] })
    },
    currentLang: {
        type: String,
        default: 'en'
    }
});

const emit = defineEmits(['update:menuColumns', 'update:contactInfo', 'update:social']);

// Local state
const localMenuColumns = ref(JSON.parse(JSON.stringify(props.menuColumns || [])));
const localContactInfo = ref(JSON.parse(JSON.stringify(props.contactInfo || { title_en: '', title_ar: '', items: [] })));
const localSocial = ref(JSON.parse(JSON.stringify(props.social || { title_en: '', title_ar: '', links: [] })));

const expandedColumns = reactive({});
const linkContainers = ref({});
const menuColumnsContainer = ref(null);
const contactItemsContainer = ref(null);
const socialItemsContainer = ref(null);

// Show sections conditionally
const showMenuColumns = computed(() => props.menuColumns !== undefined);
const showContactInfo = computed(() => props.contactInfo !== undefined);
const showSocial = computed(() => props.social !== undefined);

// Watch for prop changes
watch(() => props.menuColumns, (val) => {
    localMenuColumns.value = JSON.parse(JSON.stringify(val || []));
}, { deep: true });

watch(() => props.contactInfo, (val) => {
    localContactInfo.value = JSON.parse(JSON.stringify(val || { title_en: '', title_ar: '', items: [] }));
}, { deep: true });

watch(() => props.social, (val) => {
    localSocial.value = JSON.parse(JSON.stringify(val || { title_en: '', title_ar: '', links: [] }));
}, { deep: true });

// Get column title based on current language
const getColumnTitle = (column, index) => {
    const title = props.currentLang === 'ar' ? column.title_ar : column.title_en;
    return title || `Column ${index + 1}`;
};

// Toggle column expansion
const toggleColumn = (index) => {
    expandedColumns[index] = !expandedColumns[index];
    nextTick(() => initLinksSortable(index));
};

// Menu Columns operations
const addMenuColumn = () => {
    localMenuColumns.value.push({
        title_en: '',
        title_ar: '',
        links: []
    });
    const newIndex = localMenuColumns.value.length - 1;
    expandedColumns[newIndex] = true;
    emit('update:menuColumns', localMenuColumns.value);
};

const removeMenuColumn = (index) => {
    localMenuColumns.value.splice(index, 1);
    emit('update:menuColumns', localMenuColumns.value);
};

const updateColumnField = (colIndex, field, value) => {
    localMenuColumns.value[colIndex][field] = value;
    emit('update:menuColumns', localMenuColumns.value);
};

// Links operations
const addLink = (colIndex) => {
    if (!localMenuColumns.value[colIndex].links) {
        localMenuColumns.value[colIndex].links = [];
    }
    localMenuColumns.value[colIndex].links.push({
        label_en: '',
        label_ar: '',
        url_en: '#',
        url_ar: '#'
    });
    emit('update:menuColumns', localMenuColumns.value);
};

const removeLink = (colIndex, linkIndex) => {
    localMenuColumns.value[colIndex].links.splice(linkIndex, 1);
    emit('update:menuColumns', localMenuColumns.value);
};

const updateLinkField = (colIndex, linkIndex, field, value) => {
    localMenuColumns.value[colIndex].links[linkIndex][field] = value;
    emit('update:menuColumns', localMenuColumns.value);
};

// Contact Info operations
const updateContactTitle = (field, value) => {
    localContactInfo.value[field] = value;
    emit('update:contactInfo', localContactInfo.value);
};

const addContactItem = () => {
    if (!localContactInfo.value.items) {
        localContactInfo.value.items = [];
    }
    localContactInfo.value.items.push({
        icon: '',
        text: '',
        url: '#'
    });
    emit('update:contactInfo', localContactInfo.value);
};

const removeContactItem = (index) => {
    localContactInfo.value.items.splice(index, 1);
    emit('update:contactInfo', localContactInfo.value);
};

const updateContactItemField = (index, field, value) => {
    localContactInfo.value.items[index][field] = value;
    emit('update:contactInfo', localContactInfo.value);
};

// Social operations
const updateSocialTitle = (field, value) => {
    localSocial.value[field] = value;
    emit('update:social', localSocial.value);
};

const addSocialItem = () => {
    if (!localSocial.value.links) {
        localSocial.value.links = [];
    }
    localSocial.value.links.push({
        icon: '',
        url: '#'
    });
    emit('update:social', localSocial.value);
};

const removeSocialItem = (index) => {
    localSocial.value.links.splice(index, 1);
    emit('update:social', localSocial.value);
};

const updateSocialItemField = (index, field, value) => {
    localSocial.value.links[index][field] = value;
    emit('update:social', localSocial.value);
};

// Sortable initialization
const initLinksSortable = (colIndex) => {
    const container = linkContainers.value[colIndex];
    if (container && container._sortable === undefined) {
        container._sortable = Sortable.create(container, {
            animation: 150,
            handle: '.link-drag-handle',
            onEnd: (evt) => {
                const items = [...localMenuColumns.value[colIndex].links];
                const [movedItem] = items.splice(evt.oldIndex, 1);
                items.splice(evt.newIndex, 0, movedItem);
                localMenuColumns.value[colIndex].links = items;
                emit('update:menuColumns', localMenuColumns.value);
            }
        });
    }
};

onMounted(() => {
    // Initialize sortable for menu columns
    if (menuColumnsContainer.value) {
        Sortable.create(menuColumnsContainer.value, {
            animation: 150,
            handle: '.column-drag-handle',
            onEnd: (evt) => {
                const items = [...localMenuColumns.value];
                const [movedItem] = items.splice(evt.oldIndex, 1);
                items.splice(evt.newIndex, 0, movedItem);
                localMenuColumns.value = items;
                emit('update:menuColumns', localMenuColumns.value);
            }
        });
    }
    
    // Initialize sortable for contact items
    if (contactItemsContainer.value) {
        Sortable.create(contactItemsContainer.value, {
            animation: 150,
            handle: '.contact-item-drag-handle',
            onEnd: (evt) => {
                const items = [...localContactInfo.value.items];
                const [movedItem] = items.splice(evt.oldIndex, 1);
                items.splice(evt.newIndex, 0, movedItem);
                localContactInfo.value.items = items;
                emit('update:contactInfo', localContactInfo.value);
            }
        });
    }
    
    // Initialize sortable for social items
    if (socialItemsContainer.value) {
        Sortable.create(socialItemsContainer.value, {
            animation: 150,
            handle: '.social-item-drag-handle',
            onEnd: (evt) => {
                const items = [...localSocial.value.links];
                const [movedItem] = items.splice(evt.oldIndex, 1);
                items.splice(evt.newIndex, 0, movedItem);
                localSocial.value.links = items;
                emit('update:social', localSocial.value);
            }
        });
    }
    
    // Expand first column by default if exists
    if (localMenuColumns.value.length > 0) {
        expandedColumns[0] = true;
        nextTick(() => initLinksSortable(0));
    }
});
</script>

<style scoped>
.footer-menu-editor {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.editor-section {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fafafa;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.section-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.add-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-primary, #004F4C);
    background-color: #fff;
    border: 1px solid var(--color-primary, #004F4C);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s;
}

.add-btn:hover {
    background-color: var(--color-primary, #004F4C);
    color: #fff;
}

.columns-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.column-item {
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
}

.column-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background-color: #f9fafb;
    cursor: pointer;
    user-select: none;
}

.column-header:hover {
    background-color: #f3f4f6;
}

.column-drag-handle {
    cursor: grab;
    color: #9ca3af;
    display: flex;
    align-items: center;
}

.column-drag-handle:active {
    cursor: grabbing;
}

.column-title {
    flex: 1;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}

.links-badge {
    font-size: 0.75rem;
    color: #6b7280;
    background-color: #e5e7eb;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
}

.chevron {
    color: #6b7280;
    transition: transform 0.2s;
}

.chevron.rotated {
    transform: rotate(180deg);
}

.remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    border-radius: 4px;
}

.remove-btn:hover {
    background-color: #fee2e2;
    color: #dc2626;
}

.column-content {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
}

.field-row {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.field-half {
    flex: 1;
}

.field-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    margin-bottom: 0.25rem;
}

.links-section,
.contact-items-section,
.social-items-section {
    margin-top: 1rem;
}

.links-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
}

.links-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.add-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    color: #6b7280;
    background-color: #fff;
    border: 1px dashed #d1d5db;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s;
}

.add-link-btn:hover {
    border-color: var(--color-primary, #004F4C);
    color: var(--color-primary, #004F4C);
}

.fixed-notice {
    font-size: 0.75rem;
    color: #6b7280;
    background-color: #fef3c7;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
}

.items-count {
    font-size: 0.75rem;
    color: #6b7280;
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
}

.links-list,
.contact-items-list,
.social-items-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.link-item,
.contact-item,
.social-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
}

.contact-item-fixed {
    background-color: #f0fdf4;
    border-color: #86efac;
}

.link-drag-handle,
.contact-item-drag-handle,
.social-item-drag-handle {
    cursor: grab;
    color: #9ca3af;
    display: flex;
    align-items: center;
    padding: 0.25rem;
}

.link-drag-handle:active,
.contact-item-drag-handle:active,
.social-item-drag-handle:active {
    cursor: grabbing;
}

.link-fields,
.contact-item-fields,
.social-item-fields {
    flex: 1;
    display: flex;
    gap: 0.5rem;
}

.link-input,
.contact-input,
.social-input {
    flex: 1;
    min-width: 0;
}

.url-input {
    flex: 0.8;
}

.remove-link-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    border-radius: 4px;
    flex-shrink: 0;
}

.remove-link-btn:hover {
    background-color: #fee2e2;
    color: #dc2626;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .link-fields,
    .contact-item-fields,
    .social-item-fields {
        flex-direction: column;
    }
    
    .field-row {
        flex-direction: column;
    }
}
</style>
