<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { usePage } from '@inertiajs/vue3';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: 'URL',
    },
    placeholder: {
        type: String,
        default: 'Enter URL or type / for internal pages',
    },
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'ar'].includes(value),
    },
});

const emit = defineEmits(['update:modelValue']);

const page = usePage();
const inputValue = ref(props.modelValue);
const showSuggestions = ref(false);
const selectedIndex = ref(-1);
const inputRef = ref(null);
const dropdownRef = ref(null);

// Get slugs from shared props
const pageSlugs = computed(() => {
    return page.props.slugs || [];
});

// Generate suggestions based on input
const suggestions = computed(() => {
    if (!inputValue.value || inputValue.value.length < 1) {
        return [];
    }

    const value = inputValue.value.toLowerCase().trim();

    // If user types "/", show all internal pages
    if (value === '/') {
        return pageSlugs.value.map(slug => ({
            url: `/${props.lang === 'en' ? slug.en : slug.ar}`,
            label: props.lang === 'en' ? slug.en : slug.ar,
            type: 'internal',
        }));
    }

    // If input starts with "/", filter internal pages
    if (value.startsWith('/')) {
        const searchTerm = value.substring(1).toLowerCase();
        return pageSlugs.value
            .filter(slug => {
                const slugValue = props.lang === 'en' ? slug.en : slug.ar;
                return slugValue && slugValue.toLowerCase().includes(searchTerm);
            })
            .map(slug => ({
                url: `/${props.lang === 'en' ? slug.en : slug.ar}`,
                label: props.lang === 'en' ? slug.en : slug.ar,
                type: 'internal',
            }));
    }

    // If input starts with "#", show anchor suggestions
    if (value.startsWith('#')) {
        const commonAnchors = ['#contact', '#about', '#services', '#gallery', '#team', '#pricing'];
        return commonAnchors
            .filter(anchor => anchor.includes(value))
            .map(anchor => ({
                url: anchor,
                label: anchor,
                type: 'anchor',
            }));
    }

    // For external URLs, no suggestions
    return [];
});

// Show/hide suggestions based on focus and input
watch(() => inputValue.value, (newValue) => {
    emit('update:modelValue', newValue);
    
    if (newValue && (newValue.startsWith('/') || newValue.startsWith('#'))) {
        showSuggestions.value = true;
        selectedIndex.value = -1;
    } else {
        showSuggestions.value = false;
    }
});

watch(() => props.modelValue, (newValue) => {
    inputValue.value = newValue;
});

// Handle input focus
const handleFocus = () => {
    if (inputValue.value && (inputValue.value.startsWith('/') || inputValue.value.startsWith('#'))) {
        showSuggestions.value = true;
    }
};

// Handle input blur with delay to allow click on suggestion
const handleBlur = () => {
    setTimeout(() => {
        showSuggestions.value = false;
        selectedIndex.value = -1;
    }, 200);
};

// Select a suggestion
const selectSuggestion = (suggestion) => {
    inputValue.value = suggestion.url;
    emit('update:modelValue', suggestion.url);
    showSuggestions.value = false;
    selectedIndex.value = -1;
};

// Handle keyboard navigation
const handleKeyDown = (event) => {
    if (!showSuggestions.value || suggestions.value.length === 0) {
        return;
    }

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        selectedIndex.value = Math.min(selectedIndex.value + 1, suggestions.value.length - 1);
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        selectedIndex.value = Math.max(selectedIndex.value - 1, -1);
    } else if (event.key === 'Enter' && selectedIndex.value >= 0) {
        event.preventDefault();
        selectSuggestion(suggestions.value[selectedIndex.value]);
    } else if (event.key === 'Escape') {
        showSuggestions.value = false;
        selectedIndex.value = -1;
    }
};

// Click outside to close
const handleClickOutside = (event) => {
    if (
        inputRef.value &&
        dropdownRef.value &&
        !inputRef.value.contains(event.target) &&
        !dropdownRef.value.contains(event.target)
    ) {
        showSuggestions.value = false;
        selectedIndex.value = -1;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div class="url-autocomplete">
        <label v-if="label" class="autocomplete-label">{{ label }}</label>
        <div class="autocomplete-input-wrapper">
            <input
                ref="inputRef"
                v-model="inputValue"
                type="text"
                class="autocomplete-input"
                :placeholder="placeholder"
                @focus="handleFocus"
                @blur="handleBlur"
                @keydown="handleKeyDown"
            />
            
            <!-- Suggestions Dropdown -->
            <div
                v-if="showSuggestions && suggestions.length > 0"
                ref="dropdownRef"
                class="autocomplete-dropdown"
            >
                <div
                    v-for="(suggestion, index) in suggestions"
                    :key="index"
                    class="autocomplete-item"
                    :class="{ 'is-selected': index === selectedIndex }"
                    @click="selectSuggestion(suggestion)"
                >
                    <svg
                        v-if="suggestion.type === 'internal'"
                        class="item-icon"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.33333 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <svg
                        v-else-if="suggestion.type === 'anchor'"
                        class="item-icon"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 3.33333V16.6667M10 3.33333C8.61929 3.33333 7.5 4.45262 7.5 5.83333C7.5 7.21405 8.61929 8.33333 10 8.33333M10 3.33333C11.3807 3.33333 12.5 4.45262 12.5 5.83333C12.5 7.21405 11.3807 8.33333 10 8.33333M10 8.33333C7.23858 8.33333 5 10.5719 5 13.3333V15.8333H15V13.3333C15 10.5719 12.7614 8.33333 10 8.33333Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span class="item-label">{{ suggestion.label }}</span>
                    <span class="item-type">{{ suggestion.type }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.url-autocomplete {
    position: relative;
    width: 100%;
}

.autocomplete-label {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #1A1A1A;
    margin-bottom: 8px;
}

.autocomplete-input-wrapper {
    position: relative;
}

.autocomplete-input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #E3ECEB;
    border-radius: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #1A1A1A;
    background-color: #FFFFFF;
    transition: border-color 0.2s ease;
}

.autocomplete-input:focus {
    outline: none;
    border-color: #00504C;
}

.autocomplete-input::placeholder {
    color: #A8B5B4;
}

.autocomplete-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    border: 1px solid #E3ECEB;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 250px;
    overflow-y: auto;
    z-index: 1000;
}

.autocomplete-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-bottom: 1px solid #F5F5F5;
}

.autocomplete-item:last-child {
    border-bottom: none;
}

.autocomplete-item:hover,
.autocomplete-item.is-selected {
    background-color: #F0F7F6;
}

.item-icon {
    width: 16px;
    height: 16px;
    color: #00504C;
    flex-shrink: 0;
}

.item-label {
    flex: 1;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #1A1A1A;
}

.item-type {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    color: #A8B5B4;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Scrollbar styling */
.autocomplete-dropdown::-webkit-scrollbar {
    width: 6px;
}

.autocomplete-dropdown::-webkit-scrollbar-track {
    background: #F5F5F5;
    border-radius: 3px;
}

.autocomplete-dropdown::-webkit-scrollbar-thumb {
    background: #A8B5B4;
    border-radius: 3px;
}

.autocomplete-dropdown::-webkit-scrollbar-thumb:hover {
    background: #8A9998;
}
</style>
