<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import Button from './Button.vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    accept: {
        type: String,
        default: 'image/*',
    },
});

const emit = defineEmits(['update:modelValue']);

const fileInput = ref(null);
const uploading = ref(false);
const previewUrl = ref(props.modelValue);

const openFileDialog = () => {
    if (!props.disabled) {
        fileInput.value.click();
    }
};

const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
        previewUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);

    // Upload to server
    uploading.value = true;
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch(route('media.upload.image'), {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            },
            body: formData,
        });

        if (!response.ok) throw new Error('Upload failed');

        const data = await response.json();
        emit('update:modelValue', data.path);
    } catch (error) {
        console.error('Upload error:', error);
        previewUrl.value = props.modelValue;
    } finally {
        uploading.value = false;
    }
};

const removeImage = () => {
    previewUrl.value = '';
    emit('update:modelValue', '');
    fileInput.value.value = '';
};
</script>

<template>
    <div class="form-field">
        <label v-if="label" class="form-label">
            {{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        
        <div class="image-upload">
            <input
                ref="fileInput"
                type="file"
                :accept="accept"
                :disabled="disabled"
                class="image-upload-input"
                @change="handleFileChange"
            />

            <div v-if="previewUrl" class="image-preview">
                <img :src="previewUrl" alt="Preview" class="preview-img" />
                <button
                    v-if="!disabled"
                    type="button"
                    class="remove-btn"
                    @click="removeImage"
                >
                    <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <button
                v-else
                type="button"
                class="upload-placeholder"
                :disabled="disabled || uploading"
                @click="openFileDialog"
            >
                <svg v-if="!uploading" class="upload-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
                <span v-if="uploading" class="spinner"></span>
                <span class="upload-text">
                    {{ uploading ? 'Uploading...' : 'Click to upload' }}
                </span>
            </button>
        </div>

        <span v-if="error" class="form-error">{{ error }}</span>
    </div>
</template>

<style scoped>
.form-field {
    margin-bottom: 1rem;
}

.form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
}

.text-danger {
    color: #dc2626;
}

.image-upload {
    position: relative;
}

.image-upload-input {
    display: none;
}

.image-preview {
    position: relative;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #d1d5db;
}

.preview-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.remove-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    background-color: rgba(220, 38, 38, 0.9);
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.15s;
}

.remove-btn:hover {
    background-color: #dc2626;
}

.remove-btn .icon {
    width: 1rem;
    height: 1rem;
}

.upload-placeholder {
    width: 100%;
    height: 200px;
    border: 2px dashed #d1d5db;
    border-radius: 6px;
    background-color: #f9fafb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s;
}

.upload-placeholder:hover:not(:disabled) {
    border-color: #004F4C;
    background-color: #E3ECEB;
}

.upload-placeholder:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.upload-icon {
    width: 3rem;
    height: 3rem;
    color: #9ca3af;
    margin-bottom: 0.5rem;
}

.upload-text {
    font-size: 0.875rem;
    color: #6b7280;
}

.spinner {
    width: 2rem;
    height: 2rem;
    border: 3px solid #d1d5db;
    border-top-color: #004F4C;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    margin-bottom: 0.5rem;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.form-error {
    display: block;
    margin-top: 0.375rem;
    font-size: 0.75rem;
    color: #dc2626;
}
</style>
