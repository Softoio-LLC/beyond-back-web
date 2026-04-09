<script setup>
import { ref } from 'vue';
import Modal from '@/Components/UI/Modal.vue';
import Button from '@/Components/UI/Button.vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    sectionTypes: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(['close', 'add']);

const selectedSection = ref(null);
const hoveredSection = ref(null);
const showPreview = ref(false);
const previewPosition = ref({ x: 0, y: 0 });

const selectSection = (sectionType) => {
    selectedSection.value = sectionType;
};

const handleAdd = () => {
    if (selectedSection.value) {
        emit('add', selectedSection.value.id);
        selectedSection.value = null;
    }
};

const handleClose = () => {
    selectedSection.value = null;
    hidePreview();
    emit('close');
};

const updatePreviewPosition = (event) => {
    // Position preview to the right of the cursor with offset
    const offset = 20;
    let x = event.clientX + offset;
    let y = event.clientY + offset;
    
    // Prevent preview from going off-screen
    const previewWidth = 500;
    const previewHeight = 400;
    
    if (x + previewWidth > window.innerWidth) {
        x = event.clientX - previewWidth - offset;
    }
    
    if (y + previewHeight > window.innerHeight) {
        y = window.innerHeight - previewHeight - 20;
    }
    
    previewPosition.value = { x, y };
};

const showSectionPreview = (sectionType, event) => {
    if (sectionType.preview_image) {
        hoveredSection.value = sectionType;
        updatePreviewPosition(event);
        showPreview.value = true;
    }
};

const hidePreview = () => {
    showPreview.value = false;
    hoveredSection.value = null;
};

const getPreviewImageUrl = (path) => {
    if (!path) return '';
    // Support both storage and direct asset paths
    if (path.startsWith('/assets/') || path.startsWith('http')) {
        return path;
    }
    return `/storage/${path}`;
};
</script>

<template>
    <Modal :show="show" max-width="4xl" @close="handleClose">
        <div class="modal-header">
            <h2 class="modal-title">Choose New Section</h2>
            <button class="close-btn" @click="handleClose">
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        
        <div class="modal-body">
            <div class="sections-grid">
                <div
                    v-for="sectionType in sectionTypes"
                    :key="sectionType.id"
                    :class="['section-card', { 'selected': selectedSection?.id === sectionType.id }]"
                    @click="selectSection(sectionType)"
                    @mouseleave="hidePreview"
                >
                    <!-- Section Icon -->
                    <div class="card-icon">
                        <i v-if="sectionType.icon" :class="sectionType.icon"></i>
                        <svg v-else viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    
                    <!-- Section Name -->
                    <div class="card-name">{{ sectionType.name_en }}</div>
                    <div v-if="sectionType.description_en" class="card-description">{{ sectionType.description_en }}</div>
                    
                    <!-- Info Button (Preview on hover) -->
                    <button
                        v-if="sectionType.preview_image"
                        class="info-btn"
                        @click.stop
                        @mouseenter="showSectionPreview(sectionType, $event)"
                        @mousemove="updatePreviewPosition($event)"
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="modal-footer">
            <Button variant="outline" @click="handleClose">
                Cancel
            </Button>
            <Button 
                variant="primary" 
                :disabled="!selectedSection"
                @click="handleAdd"
            >
                Choose
            </Button>
        </div>

        <!-- Preview Tooltip -->
        <Teleport to="body">
            <Transition name="preview">
                <div
                    v-if="showPreview && hoveredSection && hoveredSection.preview_image"
                    class="preview-tooltip"
                    :style="{
                        left: previewPosition.x + 'px',
                        top: previewPosition.y + 'px'
                    }"
                >
                    <div class="preview-header">
                        <h3 class="preview-title">{{ hoveredSection.name_en }}</h3>
                    </div>
                    <div class="preview-body">
                        <img 
                            :src="getPreviewImageUrl(hoveredSection.preview_image)" 
                            :alt="hoveredSection.name_en" 
                            class="preview-image" 
                        />
                    </div>
                </div>
            </Transition>
        </Teleport>
    </Modal>
</template>

<style scoped>
.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.modal-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
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
}

.close-btn:hover {
    background-color: #f3f4f6;
    color: #111827;
}

.close-btn svg {
    width: 1.25rem;
    height: 1.25rem;
}

.modal-body {
    padding: 2rem;
    max-height: 60vh;
    overflow-y: auto;
}

.sections-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
}

@media (max-width: 900px) {
    .sections-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 700px) {
    .sections-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.section-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.5rem 1rem;
    background-color: #E3ECEB;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.15s;
    min-height: 120px;
}

.section-card:hover {
    background-color: #d1dedd;
    border-color: #004F4C;
}

.section-card.selected {
    background-color: #d1dedd;
    border-color: #004F4C;
    box-shadow: 0 0 0 3px rgba(0, 79, 76, 0.2);
}

.card-icon {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #004F4C;
}

.card-icon svg {
    width: 2rem;
    height: 2rem;
}

.card-icon i {
    font-size: 1.75rem;
}

.card-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #004F4C;
    text-align: center;
}

.card-description {
    font-size: 0.7rem;
    color: #6b7280;
    text-align: center;
    line-height: 1.3;
    margin-top: 0.25rem;
}

.info-btn {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: #004F4C;
    cursor: pointer;
    transition: all 0.15s;
    opacity: 0.6;
}

.info-btn:hover {
    opacity: 1;
}

.info-btn svg {
    width: 1rem;
    height: 1rem;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1.5rem;
    border-top: 1px solid #e5e7eb;
}

/* Preview Tooltip */
.preview-tooltip {
    position: fixed;
    width: 400px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    z-index: 10001;
    overflow: hidden;
    pointer-events: none;
}

.preview-header {
    padding: 0.75rem 1rem;
    background-color: #004F4C;
    color: #ffffff;
}

.preview-title {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
}

.preview-body {
    padding: 0.5rem;
    background-color: #f9fafb;
    max-height: 400px;
    overflow-y: auto;
}

.preview-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
}

/* Transitions */
.preview-enter-active,
.preview-leave-active {
    transition: opacity 0.15s ease;
}

.preview-enter-from,
.preview-leave-to {
    opacity: 0;
}
</style>
