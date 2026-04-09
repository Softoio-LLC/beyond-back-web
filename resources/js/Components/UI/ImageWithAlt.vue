<script setup>
import { ref, computed, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';
import TextInput from './TextInput.vue';

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({ image: '', alt_en: '', alt_ar: '' }),
    },
    label: {
        type: String,
        default: 'Image',
    },
    sectionType: {
        type: String,
        default: 'general',
    },
    size: {
        type: String,
        default: 'original', // Use original to avoid server-side processing issues
    },
    currentLang: {
        type: String,
        default: 'en',
    },
    showAltFields: {
        type: Boolean,
        default: true,
    },
    error: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
    hint: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const uploading = ref(false);
const uploadError = ref('');
const imageLoadFailed = ref(false);

// Internal state
const imageData = ref({
    image: props.modelValue?.image || props.modelValue || '',
    alt_en: props.modelValue?.alt_en || props.modelValue?.alt || '',
    alt_ar: props.modelValue?.alt_ar || '',
});

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
    imageLoadFailed.value = false;

    if (typeof newVal === 'string') {
        imageData.value.image = newVal;
    } else if (newVal) {
        imageData.value = {
            image: newVal.image || '',
            alt_en: newVal.alt_en || newVal.alt || '',
            alt_ar: newVal.alt_ar || '',
        };
    }
}, { deep: true });

// Computed for display
const imageUrl = computed(() => {
    const img = imageData.value.image;
    if (!img) return '';
    // Handle case where img might be an object
    if (typeof img !== 'string') return '';

    // Support static assets saved without a leading slash (assets/...)
    if (img.startsWith('assets/')) {
        return `/${img}`;
    }

    // Support explicit storage path values (storage/...)
    if (img.startsWith('storage/')) {
        return `/${img}`;
    }

    if (img.startsWith('http') || img.startsWith('/')) return img;
    // Use shared storage base URL (handles OCI vs local automatically)
    const storageConfig = usePage().props.storage;
    if (storageConfig?.baseUrl) {
        return `${storageConfig.baseUrl}/${img}`;
    }
    return `/storage/${img}`;
});

const hasImage = computed(() => {
    const img = imageData.value.image;
    return img && img !== '' && typeof img === 'string' && !imageLoadFailed.value;
});

const handleImageError = () => {
    imageLoadFailed.value = true;
};

const handleImageLoad = () => {
    imageLoadFailed.value = false;
};

// Emit changes
const emitUpdate = () => {
    emit('update:modelValue', { ...imageData.value });
};

// Handle file selection
const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
        uploadError.value = 'Please select a valid image file (JPEG, PNG, GIF, WebP, or SVG)';
        return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
        uploadError.value = 'Image must be less than 5MB';
        return;
    }

    uploadError.value = '';
    uploading.value = true;

    try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('section_type', props.sectionType);
        formData.append('size', props.size);

        const { data } = await window.axios.post(route('media.upload.image'), formData);

        if (data.success) {
            imageData.value.image = data.path;
            emitUpdate();
        } else {
            uploadError.value = data.message || 'Upload failed';
        }
    } catch (error) {
        uploadError.value = error.response?.data?.message || 'Upload failed. Please try again.';
        console.error('Upload error:', error);
    } finally {
        uploading.value = false;
        // Reset input
        event.target.value = '';
    }
};

// Remove image
const removeImage = () => {
    imageData.value.image = '';
    imageLoadFailed.value = false;
    emitUpdate();
};

// Update alt text
const updateAlt = (lang, value) => {
    imageData.value[`alt_${lang}`] = value;
    emitUpdate();
};

// Current alt based on language
const currentAltLabel = computed(() => {
    return props.currentLang === 'ar' ? 'Alt Text (Arabic)' : 'Alt Text (English)';
});

const currentAltValue = computed(() => {
    return props.currentLang === 'ar' ? imageData.value.alt_ar : imageData.value.alt_en;
});
</script>

<template>
    <div class="image-with-alt" :class="{ 'has-error': error }">
        <label class="field-label">
            {{ label }}
            <span v-if="required" class="required-indicator">*</span>
        </label>

        <div class="image-upload-area">
            <!-- Preview -->
            <div v-if="hasImage" class="image-preview">
                <img :src="imageUrl" :alt="currentAltValue" @error="handleImageError" @load="handleImageLoad" />
                <div class="preview-actions">
                    <label class="change-btn" title="Change image">
                        <input
                            type="file"
                            accept="image/*"
                            @change="handleFileSelect"
                            :disabled="uploading"
                            class="hidden-input"
                        />
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </label>
                    <button type="button" class="remove-btn" @click="removeImage" title="Remove image">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Upload Area -->
            <label v-else class="upload-zone" :class="{ 'uploading': uploading }">
                <input
                    type="file"
                    accept="image/*"
                    @change="handleFileSelect"
                    :disabled="uploading"
                    class="hidden-input"
                />
                
                <div v-if="uploading" class="upload-spinner">
                    <svg class="spinner" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    <span>Uploading...</span>
                </div>
                
                <div v-else class="upload-content">
                    <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="upload-text">Click to upload</span>
                    <span class="upload-hint">PNG, JPG, GIF, WebP up to 5MB</span>
                </div>
            </label>
        </div>

        <!-- Size Hint -->
        <p v-if="hint" class="image-size-hint">Recommended: {{ hint }}</p>

        <!-- Upload Error -->
        <p v-if="uploadError" class="error-message">{{ uploadError }}</p>
        <p v-else-if="error" class="error-message">{{ error }}</p>

        <!-- Alt Text Field (only show if image exists and showAltFields is true) -->
        <div v-if="hasImage && showAltFields" class="alt-field">
            <TextInput
                :model-value="currentAltValue"
                :label="currentAltLabel"
                placeholder="Describe the image"
                @update:model-value="updateAlt(currentLang, $event)"
            />
        </div>
    </div>
</template>

<style scoped>
.image-with-alt {
    margin-bottom: 1rem;
}

.field-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
}

.required-indicator {
    color: #ef4444;
    margin-left: 0.25rem;
}

.image-upload-area {
    margin-bottom: 0.5rem;
}

.image-size-hint {
    font-size: 11px;
    color: #9ca3af;
    margin-top: 4px;
    margin-bottom: 0;
}

.image-preview {
    position: relative;
    display: inline-block;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.preview-actions {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    gap: 0.5rem;
}

.image-preview img {
    display: block;
    max-width: 100%;
    max-height: 200px;
    object-fit: cover;
}

.remove-btn {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(239, 68, 68, 0.9);
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.remove-btn:hover {
    background-color: #dc2626;
    transform: scale(1.05);
}

.remove-btn svg {
    width: 1rem;
    height: 1rem;
}

.change-btn {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(59, 130, 246, 0.9);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.change-btn:hover {
    background-color: rgb(37, 99, 235);
    transform: scale(1.05);
}

.change-btn svg {
    width: 1rem;
    height: 1rem;
}

.upload-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border: 2px dashed #d1d5db;
    border-radius: 8px;
    background-color: #f9fafb;
    cursor: pointer;
    transition: all 0.15s;
    min-height: 120px;
}

.upload-zone:hover:not(.uploading) {
    border-color: var(--color-primary, #004F4C);
    background-color: var(--color-secondary, #E3ECEB);
}

.upload-zone.uploading {
    cursor: wait;
    opacity: 0.7;
}

.hidden-input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.upload-icon {
    width: 2.5rem;
    height: 2.5rem;
    color: #9ca3af;
}

.upload-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}

.upload-hint {
    font-size: 0.75rem;
    color: #9ca3af;
}

.upload-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary, #004F4C);
}

.spinner {
    width: 2rem;
    height: 2rem;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.error-message {
    font-size: 0.75rem;
    color: #ef4444;
    margin: 0.375rem 0 0 0;
}

.has-error .upload-zone {
    border-color: #ef4444;
}

.alt-field {
    margin-top: 0.75rem;
}
</style>
