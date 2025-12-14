<script setup>
import { ref, watch, onMounted } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: 'Enter content...',
    },
    error: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const content = ref(props.modelValue);

// Quill toolbar options - only bold, italic, underline, and quote
const toolbarOptions = [
    ['bold', 'italic', 'underline'],
    ['blockquote'],
    ['clean'], // remove formatting
];

const editorOptions = {
    modules: {
        toolbar: toolbarOptions,
    },
    placeholder: props.placeholder,
    readOnly: props.disabled,
    theme: 'snow',
};

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
    if (newVal !== content.value) {
        content.value = newVal;
    }
});

// Emit changes
const onUpdate = (value) => {
    content.value = value;
    emit('update:modelValue', value);
};
</script>

<template>
    <div class="rich-text-editor" :class="{ 'has-error': error }">
        <label v-if="label" class="editor-label">
            {{ label }}
            <span v-if="required" class="required-indicator">*</span>
        </label>
        
        <div class="editor-wrapper">
            <QuillEditor
                :content="content"
                content-type="html"
                :options="editorOptions"
                @update:content="onUpdate"
            />
        </div>
        
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<style scoped>
.rich-text-editor {
    margin-bottom: 1rem;
}

.editor-label {
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

.editor-wrapper {
    border: 1px solid #d1d5db;
    border-radius: 6px;
    overflow: hidden;
    transition: border-color 0.15s, box-shadow 0.15s;
}

.editor-wrapper:focus-within {
    border-color: var(--color-primary, #004F4C);
    box-shadow: 0 0 0 3px rgba(0, 79, 76, 0.1);
}

.has-error .editor-wrapper {
    border-color: #ef4444;
}

.has-error .editor-wrapper:focus-within {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
    font-size: 0.75rem;
    color: #ef4444;
    margin: 0.375rem 0 0 0;
}

/* Quill customizations */
:deep(.ql-container) {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    min-height: 120px;
}

:deep(.ql-editor) {
    min-height: 120px;
    padding: 0.75rem;
}

:deep(.ql-editor.ql-blank::before) {
    font-style: normal;
    color: #9ca3af;
}

:deep(.ql-toolbar) {
    border: none !important;
    border-bottom: 1px solid #e5e7eb !important;
    background-color: #f9fafb;
    padding: 0.5rem;
}

:deep(.ql-toolbar .ql-formats) {
    margin-right: 0.5rem;
}

:deep(.ql-toolbar button) {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

:deep(.ql-toolbar button:hover) {
    background-color: #e5e7eb;
}

:deep(.ql-toolbar button.ql-active) {
    background-color: var(--color-secondary, #E3ECEB);
    color: var(--color-primary, #004F4C);
}

:deep(.ql-container) {
    border: none !important;
}

:deep(.ql-snow .ql-stroke) {
    stroke: #6b7280;
}

:deep(.ql-snow .ql-fill) {
    fill: #6b7280;
}

:deep(.ql-snow button:hover .ql-stroke),
:deep(.ql-snow button.ql-active .ql-stroke) {
    stroke: var(--color-primary, #004F4C);
}

:deep(.ql-snow button:hover .ql-fill),
:deep(.ql-snow button.ql-active .ql-fill) {
    fill: var(--color-primary, #004F4C);
}
</style>
