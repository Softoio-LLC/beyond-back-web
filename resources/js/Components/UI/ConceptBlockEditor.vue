<script setup>
import { ref, watch } from 'vue';
import TextInput from './TextInput.vue';
import RichTextEditor from './RichTextEditor.vue';

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        // Expected: { blocks: [], counters: [] }
    },
    currentLang: {
        type: String,
        default: 'en',
    },
});

const emit = defineEmits(['update:modelValue']);

// Internal state
const data = ref(JSON.parse(JSON.stringify(props.modelValue)));
const expandedBlocks = ref(new Set([0])); // First block expanded by default
const expandedCounters = ref(new Set());

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
    data.value = JSON.parse(JSON.stringify(newVal));
}, { deep: true });

// Block management
const toggleBlock = (index) => {
    if (expandedBlocks.value.has(index)) {
        expandedBlocks.value.delete(index);
    } else {
        expandedBlocks.value.add(index);
    }
    expandedBlocks.value = new Set(expandedBlocks.value);
};

const isBlockExpanded = (index) => expandedBlocks.value.has(index);

const getBlockTitle = (block) => {
    const title = block[`title_${props.currentLang}`] || block.title_en || block.title_ar || '';
    return title || 'Untitled Block';
};

// Block field updates
const updateBlockField = (blockIndex, field, value) => {
    data.value.blocks[blockIndex][field] = value;
    emitUpdate();
};

// Paragraphs management (array of strings)
const getParagraphs = (block) => {
    return block[`paragraphs_${props.currentLang}`] || [];
};

const updateParagraph = (blockIndex, paraIndex, value) => {
    const key = `paragraphs_${props.currentLang}`;
    if (!data.value.blocks[blockIndex][key]) {
        data.value.blocks[blockIndex][key] = [];
    }
    data.value.blocks[blockIndex][key][paraIndex] = value;
    emitUpdate();
};

const addParagraph = (blockIndex) => {
    const key = `paragraphs_${props.currentLang}`;
    if (!data.value.blocks[blockIndex][key]) {
        data.value.blocks[blockIndex][key] = [];
    }
    data.value.blocks[blockIndex][key].push('');
    emitUpdate();
};

const removeParagraph = (blockIndex, paraIndex) => {
    const key = `paragraphs_${props.currentLang}`;
    if (data.value.blocks[blockIndex][key]?.length > 1) {
        data.value.blocks[blockIndex][key].splice(paraIndex, 1);
        emitUpdate();
    }
};

// Slides management
const addSlide = (blockIndex) => {
    if (!data.value.blocks[blockIndex].slides) {
        data.value.blocks[blockIndex].slides = [];
    }
    data.value.blocks[blockIndex].slides.push({
        image: '',
        alt: '',
        radius_class: 'radious-bottom-left'
    });
    emitUpdate();
};

const removeSlide = (blockIndex, slideIndex) => {
    data.value.blocks[blockIndex].slides.splice(slideIndex, 1);
    emitUpdate();
};

const updateSlide = (blockIndex, slideIndex, field, value) => {
    data.value.blocks[blockIndex].slides[slideIndex][field] = value;
    emitUpdate();
};

// Handle slide image upload
const handleSlideUpload = async (event, blockIndex, slideIndex) => {
    const file = event.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert('Image must be less than 5MB');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('section_type', 'concept');
        formData.append('size', 'medium');

        const response = await fetch(route('media.upload.image'), {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
                'Accept': 'application/json',
            },
        });

        const result = await response.json();

        if (result.success) {
            updateSlide(blockIndex, slideIndex, 'image', result.path);
        } else {
            alert(result.message || 'Upload failed');
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
    }
    
    event.target.value = '';
};

// Counter management
const toggleCounter = (index) => {
    if (expandedCounters.value.has(index)) {
        expandedCounters.value.delete(index);
    } else {
        expandedCounters.value.add(index);
    }
    expandedCounters.value = new Set(expandedCounters.value);
};

const isCounterExpanded = (index) => expandedCounters.value.has(index);

const updateCounter = (index, field, value) => {
    data.value.counters[index][field] = value;
    emitUpdate();
};

// Emit update
const emitUpdate = () => {
    emit('update:modelValue', JSON.parse(JSON.stringify(data.value)));
};

// Radius class options
const radiusOptions = [
    { value: 'radious-bottom-left', label: 'Bottom Left' },
    { value: 'radious-top-right', label: 'Top Right' },
    { value: 'radious-bottom-right', label: 'Bottom Right' },
    { value: 'radious-top-left', label: 'Top Left' },
];
</script>

<template>
    <div class="concept-editor">
        <!-- Content Blocks Section -->
        <div class="editor-section">
            <div class="section-header">
                <h3 class="section-title">Content Blocks</h3>
                <span class="item-count">{{ data.blocks?.length || 0 }} blocks</span>
            </div>

            <div class="items-list">
                <div
                    v-for="(block, blockIndex) in data.blocks"
                    :key="blockIndex"
                    class="editor-item"
                    :class="{ 'is-expanded': isBlockExpanded(blockIndex) }"
                >
                    <div class="item-header" @click="toggleBlock(blockIndex)">
                        <span class="block-number">{{ blockIndex + 1 }}</span>
                        <span class="item-title">{{ getBlockTitle(block) }}</span>
                        <div class="item-actions">
                            <button type="button" class="action-btn expand" :class="{ 'rotated': isBlockExpanded(blockIndex) }">
                                <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div v-if="isBlockExpanded(blockIndex)" class="item-content">
                        <!-- Title -->
                        <TextInput
                            :model-value="block[`title_${currentLang}`]"
                            :label="`Title (${currentLang.toUpperCase()})`"
                            placeholder="Enter block title"
                            @update:model-value="updateBlockField(blockIndex, `title_${currentLang}`, $event)"
                        />

                        <!-- Paragraphs -->
                        <div class="sub-section">
                            <div class="sub-header">
                                <span class="sub-label">Paragraphs ({{ currentLang.toUpperCase() }})</span>
                                <button type="button" class="add-btn-small" @click="addParagraph(blockIndex)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                            <div class="paragraphs-list">
                                <div
                                    v-for="(para, paraIndex) in getParagraphs(block)"
                                    :key="paraIndex"
                                    class="paragraph-item"
                                >
                                    <RichTextEditor
                                        :model-value="para"
                                        :label="`Paragraph ${paraIndex + 1}`"
                                        @update:model-value="updateParagraph(blockIndex, paraIndex, $event)"
                                    />
                                    <button
                                        v-if="getParagraphs(block).length > 1"
                                        type="button"
                                        class="remove-para-btn"
                                        @click="removeParagraph(blockIndex, paraIndex)"
                                    >
                                        <svg viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Slides -->
                        <div class="sub-section">
                            <div class="sub-header">
                                <span class="sub-label">Slides</span>
                                <button type="button" class="add-btn-small" @click="addSlide(blockIndex)">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                    Add Slide
                                </button>
                            </div>
                            <div class="slides-grid">
                                <div
                                    v-for="(slide, slideIndex) in block.slides"
                                    :key="slideIndex"
                                    class="slide-item"
                                >
                                    <div class="slide-preview">
                                        <img v-if="slide.image" :src="slide.image" :alt="slide.alt" />
                                        <label v-else class="slide-upload">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                @change="handleSlideUpload($event, blockIndex, slideIndex)"
                                                class="hidden-input"
                                            />
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>Upload</span>
                                        </label>
                                        <button
                                            v-if="slide.image"
                                            type="button"
                                            class="slide-remove"
                                            @click="removeSlide(blockIndex, slideIndex)"
                                        >
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="slide-fields">
                                        <TextInput
                                            :model-value="slide.alt"
                                            label="Alt Text"
                                            placeholder="Describe the image"
                                            @update:model-value="updateSlide(blockIndex, slideIndex, 'alt', $event)"
                                        />
                                        <div class="select-field">
                                            <label>Corner Style</label>
                                            <select
                                                :value="slide.radius_class"
                                                @change="updateSlide(blockIndex, slideIndex, 'radius_class', $event.target.value)"
                                            >
                                                <option v-for="opt in radiusOptions" :key="opt.value" :value="opt.value">
                                                    {{ opt.label }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p v-if="!block.slides?.length" class="empty-msg">No slides added</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Counters Section -->
        <div class="editor-section">
            <div class="section-header">
                <h3 class="section-title">Counter Stats</h3>
                <span class="item-count">{{ data.counters?.length || 0 }} counters</span>
            </div>

            <div class="items-list counters-list">
                <div
                    v-for="(counter, counterIndex) in data.counters"
                    :key="counterIndex"
                    class="editor-item counter-item"
                    :class="{ 'is-expanded': isCounterExpanded(counterIndex) }"
                >
                    <div class="item-header" @click="toggleCounter(counterIndex)">
                        <span class="counter-value">{{ counter.value || '0' }}</span>
                        <span class="counter-label">{{ counter[`label_${currentLang}`] || 'Counter' }}</span>
                        <div class="item-actions">
                            <button type="button" class="action-btn expand" :class="{ 'rotated': isCounterExpanded(counterIndex) }">
                                <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div v-if="isCounterExpanded(counterIndex)" class="item-content">
                        <div class="fields-row">
                            <TextInput
                                :model-value="counter.value"
                                label="Value"
                                placeholder="e.g., 50+"
                                @update:model-value="updateCounter(counterIndex, 'value', $event)"
                            />
                            <TextInput
                                :model-value="counter[`label_${currentLang}`]"
                                :label="`Label (${currentLang.toUpperCase()})`"
                                placeholder="e.g., Our Projects"
                                @update:model-value="updateCounter(counterIndex, `label_${currentLang}`, $event)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.concept-editor {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.editor-section {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1rem;
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
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
}

.item-count {
    font-size: 0.75rem;
    color: #6b7280;
    background-color: #e5e7eb;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
}

.items-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.editor-item {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
}

.editor-item.is-expanded {
    border-color: var(--color-primary, #004F4C);
}

.editor-item.sortable-ghost {
    opacity: 0.4;
}

.item-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    cursor: pointer;
}

.item-header:hover {
    background-color: #f9fafb;
}

.drag-handle {
    cursor: grab;
    color: #9ca3af;
    display: flex;
}

.drag-handle svg {
    width: 1rem;
    height: 1rem;
}

.block-number {
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--color-primary, #004F4C);
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;
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

.layout-badge {
    font-size: 0.625rem;
    color: #6b7280;
    background-color: #f3f4f6;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
}

.item-actions {
    display: flex;
    gap: 0.25rem;
}

.action-btn {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 4px;
    color: #6b7280;
    cursor: pointer;
}

.action-btn:hover {
    background-color: #e5e7eb;
}

.action-btn.delete:hover {
    color: #ef4444;
    background-color: #fee2e2;
}

.action-btn svg {
    width: 0.875rem;
    height: 0.875rem;
}

.action-btn.expand.rotated {
    transform: rotate(180deg);
}

.item-content {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
    background-color: #fafafa;
}

.toggle-field {
    margin-bottom: 1rem;
}

.toggle-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
}

.toggle-options {
    display: flex;
    gap: 0.5rem;
}

.toggle-btn {
    flex: 1;
    padding: 0.5rem;
    background-color: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s;
}

.toggle-btn.active {
    background-color: var(--color-primary, #004F4C);
    border-color: var(--color-primary, #004F4C);
    color: #ffffff;
}

.sub-section {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px dashed #e5e7eb;
}

.sub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
}

.sub-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
}

.add-btn-small {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    background: transparent;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #6b7280;
    cursor: pointer;
}

.add-btn-small:hover {
    border-color: var(--color-primary, #004F4C);
    color: var(--color-primary, #004F4C);
}

.add-btn-small svg {
    width: 0.75rem;
    height: 0.75rem;
}

.paragraphs-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.paragraph-item {
    position: relative;
}

.remove-para-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fee2e2;
    border: none;
    border-radius: 4px;
    color: #ef4444;
    cursor: pointer;
}

.remove-para-btn svg {
    width: 0.875rem;
    height: 0.875rem;
}

.slides-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.slide-item {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 0.75rem;
}

.slide-preview {
    position: relative;
    width: 100%;
    height: 80px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
    background-color: #f3f4f6;
}

.slide-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-upload {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
    border: 2px dashed #d1d5db;
    border-radius: 4px;
    background-color: #f9fafb;
}

.slide-upload:hover {
    border-color: var(--color-primary, #004F4C);
    background-color: var(--color-secondary, #E3ECEB);
}

.slide-upload svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #9ca3af;
}

.slide-upload span {
    font-size: 0.625rem;
    color: #6b7280;
}

.hidden-input {
    display: none;
}

.slide-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #9ca3af;
}

.slide-remove {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(239, 68, 68, 0.9);
    border: none;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
}

.slide-remove svg {
    width: 0.75rem;
    height: 0.75rem;
}

.slide-fields {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.select-field label {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.25rem;
}

.select-field select {
    width: 100%;
    padding: 0.375rem 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.75rem;
    background-color: #ffffff;
}

.empty-msg {
    font-size: 0.75rem;
    color: #9ca3af;
    text-align: center;
    padding: 1rem;
    margin: 0;
}

/* Counters */
.counter-item .item-header {
    gap: 0.5rem;
}

.counter-value {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-primary, #004F4C);
    min-width: 50px;
}

.counter-label {
    flex: 1;
    font-size: 0.875rem;
    color: #6b7280;
}

.fields-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.add-item-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.75rem;
    background: transparent;
    border: 2px dashed #d1d5db;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
}

.add-item-btn:hover {
    border-color: var(--color-primary, #004F4C);
    color: var(--color-primary, #004F4C);
    background-color: var(--color-secondary, #E3ECEB);
}

.add-item-btn svg {
    width: 1rem;
    height: 1rem;
}
</style>
