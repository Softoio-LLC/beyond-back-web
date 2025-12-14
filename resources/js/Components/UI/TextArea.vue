<script setup>
import { computed } from 'vue';

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
    rows: {
        type: Number,
        default: 4,
    },
});

const emit = defineEmits(['update:modelValue']);

const textareaId = computed(() => `textarea-${Math.random().toString(36).substr(2, 9)}`);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <div class="form-field">
        <label v-if="label" :for="textareaId" class="form-label">
            {{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <textarea
            :id="textareaId"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :class="['form-textarea', { 'form-textarea-error': error }]"
            @input="updateValue"
        ></textarea>
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

.form-textarea {
    width: 100%;
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #111827;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    resize: vertical;
    font-family: inherit;
}

.form-textarea:focus {
    outline: none;
    border-color: #004F4C;
    box-shadow: 0 0 0 3px rgba(0, 79, 76, 0.1);
}

.form-textarea:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
}

.form-textarea-error {
    border-color: #dc2626;
}

.form-textarea-error:focus {
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.form-error {
    display: block;
    margin-top: 0.375rem;
    font-size: 0.75rem;
    color: #dc2626;
}
</style>
