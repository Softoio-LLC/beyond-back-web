<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary', // primary, secondary, danger, outline
        validator: (value) => ['primary', 'secondary', 'danger', 'outline', 'ghost'].includes(value),
    },
    size: {
        type: String,
        default: 'md', // sm, md, lg
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
    },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
    emit('click', event);
};
</script>

<template>
    <button
        :type="type"
        :disabled="disabled || loading"
        :class="['btn', `btn-${variant}`, `btn-${size}`, { 'btn-loading': loading }]"
        @click="handleClick"
    >
        <span v-if="loading" class="btn-spinner"></span>
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 500;
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    font-family: inherit;
    white-space: nowrap;
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Sizes */
.btn-sm {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
}

.btn-md {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
}

.btn-lg {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    line-height: 1.75rem;
}

/* Variants */
.btn-primary {
    background-color: #004F4C;
    color: #ffffff;
    border-color: #004F4C;
}

.btn-primary:hover:not(:disabled) {
    background-color: #003a38;
}

.btn-secondary {
    background-color: #E3ECEB;
    color: #004F4C;
    border-color: #E3ECEB;
}

.btn-secondary:hover:not(:disabled) {
    background-color: #d1dedd;
}

.btn-danger {
    background-color: #dc2626;
    color: #ffffff;
    border-color: #dc2626;
}

.btn-danger:hover:not(:disabled) {
    background-color: #b91c1c;
}

.btn-outline {
    background-color: transparent;
    color: #004F4C;
    border-color: #004F4C;
}

.btn-outline:hover:not(:disabled) {
    background-color: #E3ECEB;
}

.btn-ghost {
    background-color: transparent;
    color: #6b7280;
    border-color: transparent;
}

.btn-ghost:hover:not(:disabled) {
    background-color: #f3f4f6;
    color: #111827;
}

/* Loading */
.btn-loading {
    position: relative;
}

.btn-spinner {
    width: 1rem;
    height: 1rem;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
