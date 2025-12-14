<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import TextInput from './TextInput.vue';
import Sortable from 'sortablejs';

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
    label: {
        type: String,
        default: 'Menu Items',
    },
    currentLang: {
        type: String,
        default: 'en',
    },
    maxItems: {
        type: Number,
        default: 20,
    },
    maxChildren: {
        type: Number,
        default: 10,
    },
});

const emit = defineEmits(['update:modelValue']);

// Internal state
const items = ref(JSON.parse(JSON.stringify(props.modelValue)));
const expandedItems = ref(new Set());
const expandedChildren = ref(new Map()); // Map<parentIndex, Set<childIndex>>
const listRef = ref(null);
let sortableInstance = null;

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
    items.value = JSON.parse(JSON.stringify(newVal));
}, { deep: true });

// Initialize sortable
const initSortable = () => {
    if (!listRef.value) return;
    
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

// Get item label
const getItemLabel = (item, index) => {
    const label = item[`label_${props.currentLang}`] || item.label_en || item.label_ar || '';
    return label || `Menu Item ${index + 1}`;
};

// Get child label
const getChildLabel = (child, index) => {
    const label = child[`label_${props.currentLang}`] || child.label_en || child.label_ar || '';
    return label || `Sub Item ${index + 1}`;
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

// Toggle child expansion
const toggleChild = (parentIndex, childIndex) => {
    if (!expandedChildren.value.has(parentIndex)) {
        expandedChildren.value.set(parentIndex, new Set());
    }
    const childSet = expandedChildren.value.get(parentIndex);
    if (childSet.has(childIndex)) {
        childSet.delete(childIndex);
    } else {
        childSet.add(childIndex);
    }
    expandedChildren.value = new Map(expandedChildren.value);
};

const isChildExpanded = (parentIndex, childIndex) => {
    return expandedChildren.value.get(parentIndex)?.has(childIndex) || false;
};

// Add new item
const addItem = () => {
    if (!canAddMore.value) return;
    
    items.value.push({
        label_en: '',
        label_ar: '',
        url: '#',
        children: []
    });
    
    expandedItems.value.add(items.value.length - 1);
    expandedItems.value = new Set(expandedItems.value);
    
    emitUpdate();
};

// Remove item
const removeItem = (index) => {
    items.value.splice(index, 1);
    
    const newExpanded = new Set();
    expandedItems.value.forEach(i => {
        if (i < index) newExpanded.add(i);
        else if (i > index) newExpanded.add(i - 1);
    });
    expandedItems.value = newExpanded;
    
    emitUpdate();
};

// Add child item
const addChild = (parentIndex) => {
    if (!items.value[parentIndex].children) {
        items.value[parentIndex].children = [];
    }
    if (items.value[parentIndex].children.length >= props.maxChildren) return;
    
    items.value[parentIndex].children.push({
        label_en: '',
        label_ar: '',
        url: '#'
    });
    
    // Expand the new child
    if (!expandedChildren.value.has(parentIndex)) {
        expandedChildren.value.set(parentIndex, new Set());
    }
    expandedChildren.value.get(parentIndex).add(items.value[parentIndex].children.length - 1);
    expandedChildren.value = new Map(expandedChildren.value);
    
    emitUpdate();
};

// Remove child item
const removeChild = (parentIndex, childIndex) => {
    items.value[parentIndex].children.splice(childIndex, 1);
    
    // Update expanded children indices
    const childSet = expandedChildren.value.get(parentIndex);
    if (childSet) {
        const newChildSet = new Set();
        childSet.forEach(i => {
            if (i < childIndex) newChildSet.add(i);
            else if (i > childIndex) newChildSet.add(i - 1);
        });
        expandedChildren.value.set(parentIndex, newChildSet);
    }
    
    emitUpdate();
};

// Update item field
const updateItemField = (index, field, value) => {
    items.value[index][field] = value;
    emitUpdate();
};

// Update child field
const updateChildField = (parentIndex, childIndex, field, value) => {
    items.value[parentIndex].children[childIndex][field] = value;
    emitUpdate();
};

// Emit update
const emitUpdate = () => {
    emit('update:modelValue', JSON.parse(JSON.stringify(items.value)));
};

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

watch(items, () => {
    nextTick(() => {
        initSortable();
    });
}, { deep: true });
</script>

<template>
    <div class="nested-repeater">
        <div class="repeater-header">
            <label class="repeater-label">{{ label }}</label>
            <span class="item-count">{{ items.length }} items</span>
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
                    <div class="drag-handle" @click.stop>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"/>
                        </svg>
                    </div>
                    
                    <span class="item-title">{{ getItemLabel(item, index) }}</span>
                    
                    <span v-if="item.children?.length" class="children-badge">
                        {{ item.children.length }} sub
                    </span>
                    
                    <div class="item-actions">
                        <button
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
                    <div class="fields-row">
                        <TextInput
                            :model-value="item[`label_${currentLang}`]"
                            :label="`Label (${currentLang.toUpperCase()})`"
                            placeholder="Enter menu label"
                            @update:model-value="updateItemField(index, `label_${currentLang}`, $event)"
                        />
                        <TextInput
                            :model-value="item.url"
                            label="URL"
                            placeholder="#section or /page"
                            @update:model-value="updateItemField(index, 'url', $event)"
                        />
                    </div>
                    
                    <!-- Children Section -->
                    <div class="children-section">
                        <div class="children-header">
                            <span class="children-label">Sub Menu Items</span>
                            <button
                                type="button"
                                class="add-child-btn"
                                @click="addChild(index)"
                                :disabled="item.children?.length >= maxChildren"
                            >
                                <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                Add Sub Item
                            </button>
                        </div>
                        
                        <div v-if="item.children?.length" class="children-list">
                            <div
                                v-for="(child, childIndex) in item.children"
                                :key="childIndex"
                                class="child-item"
                                :class="{ 'is-expanded': isChildExpanded(index, childIndex) }"
                            >
                                <div class="child-header" @click="toggleChild(index, childIndex)">
                                    <span class="child-title">{{ getChildLabel(child, childIndex) }}</span>
                                    <div class="item-actions">
                                        <button
                                            type="button"
                                            class="action-btn delete"
                                            title="Delete"
                                            @click.stop="removeChild(index, childIndex)"
                                        >
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <button type="button" class="action-btn expand" :class="{ 'rotated': isChildExpanded(index, childIndex) }">
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <div v-if="isChildExpanded(index, childIndex)" class="child-content">
                                    <div class="fields-row">
                                        <TextInput
                                            :model-value="child[`label_${currentLang}`]"
                                            :label="`Label (${currentLang.toUpperCase()})`"
                                            placeholder="Enter sub menu label"
                                            @update:model-value="updateChildField(index, childIndex, `label_${currentLang}`, $event)"
                                        />
                                        <TextInput
                                            :model-value="child.url"
                                            label="URL"
                                            placeholder="#section or /page"
                                            @update:model-value="updateChildField(index, childIndex, 'url', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p v-else class="no-children">No sub menu items</p>
                    </div>
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
            Add Menu Item
        </button>
    </div>
</template>

<style scoped>
.nested-repeater {
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

.children-badge {
    font-size: 0.625rem;
    color: var(--color-primary, #004F4C);
    background-color: var(--color-secondary, #E3ECEB);
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    font-weight: 500;
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

.fields-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

/* Children Section */
.children-section {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px dashed #e5e7eb;
}

.children-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
}

.children-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.add-child-btn {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    background-color: transparent;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s;
}

.add-child-btn:hover:not(:disabled) {
    border-color: var(--color-primary, #004F4C);
    color: var(--color-primary, #004F4C);
}

.add-child-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.add-child-btn svg {
    width: 0.875rem;
    height: 0.875rem;
}

.children-list {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.child-item {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
}

.child-item.is-expanded {
    border-color: #d1d5db;
}

.child-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
}

.child-header:hover {
    background-color: #f3f4f6;
}

.child-title {
    flex: 1;
    font-size: 0.8125rem;
    color: #6b7280;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.child-content {
    padding: 0.75rem;
    padding-top: 0.5rem;
    border-top: 1px solid #e5e7eb;
    background-color: #ffffff;
}

.no-children {
    font-size: 0.75rem;
    color: #9ca3af;
    text-align: center;
    padding: 0.5rem;
    margin: 0;
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
