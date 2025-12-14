<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import TextInput from './TextInput.vue';
import RichTextEditor from './RichTextEditor.vue';
import ImageWithAlt from './ImageWithAlt.vue';
import Sortable from 'sortablejs';

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
    label: {
        type: String,
        default: 'Items',
    },
    itemLabel: {
        type: String,
        default: 'Item',
    },
    fields: {
        type: Array,
        required: true,
        // Each field: { key: string, label: string, type: 'text'|'textarea'|'richtext'|'image'|'url', bilingual?: boolean }
    },
    defaultItem: {
        type: Object,
        default: () => ({}),
    },
    sectionType: {
        type: String,
        default: 'general',
    },
    currentLang: {
        type: String,
        default: 'en',
    },
    maxItems: {
        type: Number,
        default: 50,
    },
    minItems: {
        type: Number,
        default: 0,
    },
    collapsible: {
        type: Boolean,
        default: true,
    },
    sortable: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['update:modelValue']);

// Internal state
const items = ref([...props.modelValue]);
const expandedItems = ref(new Set());
const listRef = ref(null);
let sortableInstance = null;

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
    items.value = [...newVal];
}, { deep: true });

// Initialize sortable
const initSortable = () => {
    if (!props.sortable || !listRef.value) return;
    
    if (sortableInstance) {
        sortableInstance.destroy();
    }

    sortableInstance = Sortable.create(listRef.value, {
        handle: '.drag-handle',
        animation: 150,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        onEnd: (evt) => {
            const movedItem = items.value.splice(evt.oldIndex, 1)[0];
            items.value.splice(evt.newIndex, 0, movedItem);
            emitUpdate();
        },
    });
};

// Computed
const canAddMore = computed(() => items.value.length < props.maxItems);
const canRemove = computed(() => items.value.length > props.minItems);

// Get item display title
const getItemTitle = (item, index) => {
    // Try to find a title-like field
    const titleKeys = ['title', 'name', 'label', 'heading', `title_${props.currentLang}`, `name_${props.currentLang}`];
    for (const key of titleKeys) {
        if (item[key]) {
            const text = item[key];
            return text.length > 30 ? text.substring(0, 30) + '...' : text;
        }
    }
    return `${props.itemLabel} ${index + 1}`;
};

// Toggle item expansion
const toggleItem = (index) => {
    if (expandedItems.value.has(index)) {
        expandedItems.value.delete(index);
    } else {
        expandedItems.value.add(index);
    }
    expandedItems.value = new Set(expandedItems.value);
};

const isExpanded = (index) => expandedItems.value.has(index);

// Add new item
const addItem = () => {
    if (!canAddMore.value) return;
    
    const newItem = JSON.parse(JSON.stringify(props.defaultItem));
    items.value.push(newItem);
    
    // Auto-expand new item
    expandedItems.value.add(items.value.length - 1);
    expandedItems.value = new Set(expandedItems.value);
    
    emitUpdate();
};

// Remove item
const removeItem = (index) => {
    if (!canRemove.value) return;
    
    items.value.splice(index, 1);
    
    // Update expanded indices
    const newExpanded = new Set();
    expandedItems.value.forEach(i => {
        if (i < index) newExpanded.add(i);
        else if (i > index) newExpanded.add(i - 1);
    });
    expandedItems.value = newExpanded;
    
    emitUpdate();
};

// Duplicate item
const duplicateItem = (index) => {
    if (!canAddMore.value) return;
    
    const duplicate = JSON.parse(JSON.stringify(items.value[index]));
    items.value.splice(index + 1, 0, duplicate);
    
    // Expand the duplicate
    expandedItems.value.add(index + 1);
    expandedItems.value = new Set(expandedItems.value);
    
    emitUpdate();
};

// Update field value
const updateField = (itemIndex, fieldKey, value) => {
    items.value[itemIndex][fieldKey] = value;
    emitUpdate();
};

// Get bilingual field key
const getFieldKey = (field) => {
    if (field.bilingual) {
        return `${field.key}_${props.currentLang}`;
    }
    return field.key;
};

// Get field value
const getFieldValue = (item, field) => {
    const key = getFieldKey(field);
    return item[key] ?? item[field.key] ?? '';
};

// Set field value
const setFieldValue = (itemIndex, field, value) => {
    const key = getFieldKey(field);
    items.value[itemIndex][key] = value;
    emitUpdate();
};

// Emit update
const emitUpdate = () => {
    emit('update:modelValue', [...items.value]);
};

// Setup sortable when mounted


onMounted(() => {
    nextTick(() => {
        initSortable();
    });
});

onUnmounted(() => {
    if (sortableInstance) {
        sortableInstance.destroy();
    }
});

// Watch for items changes to reinit sortable
watch(items, () => {
    nextTick(() => {
        initSortable();
    });
}, { deep: true });
</script>

<template>
    <div class="repeater-field">
        <div class="repeater-header">
            <label class="repeater-label">{{ label }}</label>
            <span class="item-count">{{ items.length }} {{ items.length === 1 ? itemLabel : itemLabel + 's' }}</span>
        </div>

        <div ref="listRef" class="repeater-list">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="repeater-item"
                :class="{ 'is-expanded': isExpanded(index) }"
            >
                <!-- Item Header -->
                <div class="item-header" @click="toggleItem(index)">
                    <div v-if="sortable" class="drag-handle" @click.stop>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"/>
                        </svg>
                    </div>
                    
                    <span class="item-title">{{ getItemTitle(item, index) }}</span>
                    
                    <div class="item-actions">
                        <button
                            v-if="canAddMore"
                            type="button"
                            class="action-btn duplicate"
                            title="Duplicate"
                            @click.stop="duplicateItem(index)"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"/>
                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"/>
                            </svg>
                        </button>
                        
                        <button
                            v-if="canRemove"
                            type="button"
                            class="action-btn delete"
                            title="Delete"
                            @click.stop="removeItem(index)"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        
                        <button type="button" class="action-btn expand" :class="{ 'rotated': isExpanded(index) }">
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Item Content -->
                <div v-if="isExpanded(index)" class="item-content">
                    <template v-for="field in fields" :key="field.key">
                        <!-- Text Input -->
                        <TextInput
                            v-if="field.type === 'text' || field.type === 'url'"
                            :model-value="getFieldValue(item, field)"
                            :label="field.label"
                            :placeholder="field.placeholder || `Enter ${field.label.toLowerCase()}`"
                            :type="field.type === 'url' ? 'url' : 'text'"
                            @update:model-value="setFieldValue(index, field, $event)"
                        />

                        <!-- Rich Text Editor -->
                        <RichTextEditor
                            v-else-if="field.type === 'richtext' || field.type === 'textarea'"
                            :model-value="getFieldValue(item, field)"
                            :label="field.label"
                            :placeholder="field.placeholder || `Enter ${field.label.toLowerCase()}`"
                            @update:model-value="setFieldValue(index, field, $event)"
                        />

                        <!-- Image with Alt -->
                        <ImageWithAlt
                            v-else-if="field.type === 'image'"
                            :model-value="getImageData(item, field)"
                            :label="field.label"
                            :section-type="sectionType"
                            :current-lang="currentLang"
                            :show-alt-fields="field.showAlt !== false"
                            @update:model-value="setImageData(index, field, $event)"
                        />
                    </template>
                </div>
            </div>
        </div>

        <!-- Add Button -->
        <button
            v-if="canAddMore"
            type="button"
            class="add-item-btn"
            @click="addItem"
        >
            <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            Add {{ itemLabel }}
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        // Helper to get image data from item
        getImageData(item, field) {
            const imageKey = field.key;
            const altEnKey = field.altKey ? `${field.altKey}_en` : `${field.key}_alt_en`;
            const altArKey = field.altKey ? `${field.altKey}_ar` : `${field.key}_alt_ar`;
            
            // Handle both string and object formats
            if (typeof item[imageKey] === 'object' && item[imageKey] !== null) {
                return item[imageKey];
            }
            
            return {
                image: item[imageKey] || item.image || '',
                alt_en: item[altEnKey] || item.alt_en || item.alt || '',
                alt_ar: item[altArKey] || item.alt_ar || '',
            };
        },
        
        // Helper to set image data
        setImageData(index, field, value) {
            const imageKey = field.key;
            const altEnKey = field.altKey ? `${field.altKey}_en` : `${field.key}_alt_en`;
            const altArKey = field.altKey ? `${field.altKey}_ar` : `${field.key}_alt_ar`;
            
            // Store in flat format for compatibility
            this.items[index][imageKey] = value.image;
            this.items[index][altEnKey] = value.alt_en;
            this.items[index][altArKey] = value.alt_ar;
            
            // Also store alt without lang suffix for backward compatibility
            this.items[index].alt = value[`alt_${this.currentLang}`];
            
            this.emitUpdate();
        },
    },
};
</script>

<style scoped>
.repeater-field {
    margin-bottom: 1.5rem;
}

.repeater-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
}

.repeater-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.item-count {
    font-size: 0.75rem;
    color: #6b7280;
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
}

.repeater-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.repeater-item {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.15s;
}

.repeater-item:hover {
    border-color: #d1d5db;
}

.repeater-item.is-expanded {
    border-color: var(--color-primary, #004F4C);
}

.repeater-item.sortable-ghost {
    opacity: 0.4;
    background-color: var(--color-secondary, #E3ECEB);
}

.repeater-item.sortable-drag {
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.item-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    cursor: pointer;
    user-select: none;
}

.item-header:hover {
    background-color: #f3f4f6;
}

.drag-handle {
    cursor: grab;
    color: #9ca3af;
    padding: 0.25rem;
    display: flex;
    align-items: center;
}

.drag-handle:active {
    cursor: grabbing;
}

.drag-handle svg {
    width: 1rem;
    height: 1rem;
}

.item-title {
    flex: 1;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-actions {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.action-btn {
    width: 1.75rem;
    height: 1.75rem;
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
}

.action-btn svg {
    width: 1rem;
    height: 1rem;
}

.action-btn.delete:hover {
    color: #ef4444;
    background-color: #fee2e2;
}

.action-btn.duplicate:hover {
    color: var(--color-primary, #004F4C);
    background-color: var(--color-secondary, #E3ECEB);
}

.action-btn.expand {
    transition: transform 0.2s;
}

.action-btn.expand.rotated {
    transform: rotate(180deg);
}

.item-content {
    padding: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid #e5e7eb;
    background-color: #ffffff;
}

.add-item-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.75rem;
    background-color: transparent;
    border: 2px dashed #d1d5db;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s;
}

.add-item-btn:hover {
    border-color: var(--color-primary, #004F4C);
    color: var(--color-primary, #004F4C);
    background-color: var(--color-secondary, #E3ECEB);
}

.add-item-btn svg {
    width: 1.25rem;
    height: 1.25rem;
}
</style>
