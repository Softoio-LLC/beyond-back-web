<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
    if (!props.disabled) {
        emit('update:modelValue', !props.modelValue);
    }
};
</script>

<template>
    <div class="toggle-container">
        <button
            type="button"
            :class="['toggle', { 'toggle-active': modelValue, 'toggle-disabled': disabled }]"
            :disabled="disabled"
            @click="toggle"
        >
            <span class="toggle-switch"></span>
        </button>
        <span v-if="label" class="toggle-label">{{ label }}</span>
    </div>
</template>

<style scoped>
.toggle-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.toggle {
    position: relative;
    width: 2.75rem;
    height: 1.5rem;
    background-color: #d1d5db;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.toggle:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 79, 76, 0.1);
}

.toggle-active {
    background-color: #004F4C;
}

.toggle-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.toggle-switch {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 1.25rem;
    height: 1.25rem;
    background-color: #ffffff;
    border-radius: 50%;
    transition: transform 0.2s ease;
}

.toggle-active .toggle-switch {
    transform: translateX(1.25rem);
}

.toggle-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}
</style>
