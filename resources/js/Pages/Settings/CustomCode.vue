<script setup>
import { ref, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    headerCode: {
        type: String,
        default: '',
    },
    footerCode: {
        type: String,
        default: '',
    },
    warnings: {
        type: Array,
        default: () => [],
    },
});

const page = usePage();

const form = ref({
    header_code: props.headerCode || '',
    footer_code: props.footerCode || '',
});

const isSaving = ref(false);
const showSuccessMessage = ref(false);

const hasChanges = computed(() => {
    return form.value.header_code !== (props.headerCode || '') ||
           form.value.footer_code !== (props.footerCode || '');
});

const saveSettings = () => {
    isSaving.value = true;
    router.post(route('settings.custom-code.update'), form.value, {
        preserveScroll: true,
        onSuccess: () => {
            showSuccessMessage.value = true;
            setTimeout(() => {
                showSuccessMessage.value = false;
            }, 3000);
        },
        onFinish: () => {
            isSaving.value = false;
        },
    });
};

const resetForm = () => {
    form.value.header_code = props.headerCode || '';
    form.value.footer_code = props.footerCode || '';
};
</script>

<template>
    <div class="settings-page">
        <div class="page-header">
            <div class="header-content">
                <h1 class="page-title">Custom Code</h1>
                <p class="page-subtitle">
                    Add custom scripts, meta tags, and tracking codes to your website's header and footer.
                </p>
            </div>
        </div>

        <!-- Security Warning -->
        <div class="warning-banner">
            <div class="warning-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 6.66667V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="10" cy="13.3333" r="0.833333" fill="currentColor"/>
                </svg>
            </div>
            <div class="warning-content">
                <h3 class="warning-title">Security Notice</h3>
                <p class="warning-text">
                    Only add code from trusted sources. Malicious scripts can compromise your website's security and user data. 
                    PHP code is automatically removed for security purposes.
                </p>
            </div>
        </div>

        <!-- Validation Warnings -->
        <div v-if="warnings && warnings.length > 0" class="validation-warnings">
            <div class="validation-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 6.66667V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="10" cy="13.3333" r="0.833333" fill="currentColor"/>
                </svg>
            </div>
            <div class="validation-content">
                <h3 class="validation-title">Code Warnings</h3>
                <ul class="validation-list">
                    <li v-for="(warning, index) in warnings" :key="index">{{ warning }}</li>
                </ul>
            </div>
        </div>

        <!-- Success Message -->
        <Transition name="fade">
            <div v-if="showSuccessMessage" class="success-banner">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.3333 7.5L8.75 12.0833L6.66667 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Settings saved successfully!
            </div>
        </Transition>

        <form @submit.prevent="saveSettings" class="settings-form">
            <!-- Header Code -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">Header Code</h2>
                    <p class="section-description">
                        Code added here will be injected into the <code>&lt;head&gt;</code> section of every page.
                        Common uses include Google Analytics, meta verification tags, custom fonts, and CSS.
                    </p>
                </div>
                <div class="code-input-wrapper">
                    <label for="header_code" class="code-label">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 15L18.3333 10L13.3333 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.66667 5L1.66667 10L6.66667 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        &lt;head&gt;
                    </label>
                    <textarea
                        id="header_code"
                        v-model="form.header_code"
                        class="code-textarea"
                        rows="8"
                        placeholder="<!-- Paste your header code here -->&#10;&lt;script&gt;...&lt;/script&gt;&#10;&lt;meta name=&quot;verification&quot; content=&quot;...&quot;&gt;"
                        spellcheck="false"
                    ></textarea>
                </div>
                <div class="section-hints">
                    <span class="hint-item">
                        <span class="hint-icon">✓</span> Google Analytics tracking code
                    </span>
                    <span class="hint-item">
                        <span class="hint-icon">✓</span> Meta verification tags
                    </span>
                    <span class="hint-item">
                        <span class="hint-icon">✓</span> Custom fonts / CSS
                    </span>
                </div>
            </div>

            <!-- Footer Code -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">Footer Code</h2>
                    <p class="section-description">
                        Code added here will be injected just before the closing <code>&lt;/body&gt;</code> tag on every page.
                        Common uses include chat widgets, conversion tracking, and other scripts that should load after page content.
                    </p>
                </div>
                <div class="code-input-wrapper">
                    <label for="footer_code" class="code-label">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 15L18.3333 10L13.3333 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.66667 5L1.66667 10L6.66667 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        &lt;/body&gt;
                    </label>
                    <textarea
                        id="footer_code"
                        v-model="form.footer_code"
                        class="code-textarea"
                        rows="8"
                        placeholder="<!-- Paste your footer code here -->&#10;&lt;script&gt;...&lt;/script&gt;"
                        spellcheck="false"
                    ></textarea>
                </div>
                <div class="section-hints">
                    <span class="hint-item">
                        <span class="hint-icon">✓</span> Chat widget scripts
                    </span>
                    <span class="hint-item">
                        <span class="hint-icon">✓</span> Conversion tracking
                    </span>
                    <span class="hint-item">
                        <span class="hint-icon">✓</span> JSON-LD schema markup
                    </span>
                </div>
            </div>

            <!-- Actions -->
            <div class="form-actions">
                <button 
                    type="button" 
                    class="btn btn-secondary" 
                    @click="resetForm"
                    :disabled="!hasChanges || isSaving"
                >
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66667 3.33333V8.33333H6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.92501 12.5C3.46558 13.9264 4.43918 15.1499 5.70632 16.0002C6.97347 16.8505 8.47018 17.2834 9.99199 17.2381C11.5138 17.1928 12.9825 16.6716 14.1975 15.7473C15.4125 14.8229 16.3137 13.5409 16.7705 12.0843C17.2273 10.6277 17.2175 9.06689 16.7424 7.61601C16.2673 6.16513 15.3502 4.89471 14.1237 3.98551C12.8972 3.07631 11.4219 2.57316 9.90018 2.54637C8.37849 2.51958 6.88647 2.97054 5.62917 3.83583L1.66667 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Reset
                </button>
                <button 
                    type="submit" 
                    class="btn btn-primary" 
                    :disabled="isSaving"
                >
                    <svg v-if="!isSaving" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.3333L17.5 6.66667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.1667 17.5V10.8333H5.83333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83333 2.5V6.66667H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg v-else class="spinner" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.5V5.83333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.7" d="M10 14.1667V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.5" d="M4.10833 4.10833L6.46667 6.46667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.3" d="M13.5333 13.5333L15.8917 15.8917" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.2" d="M2.5 10H5.83333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.9" d="M14.1667 10H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.4" d="M4.10833 15.8917L6.46667 13.5333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path opacity="0.6" d="M13.5333 6.46667L15.8917 4.10833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    {{ isSaving ? 'Saving...' : 'Save Changes' }}
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.settings-page {
    max-width: 800px;
    margin: 0 auto;
}

/* Page Header */
.page-header {
    margin-bottom: 24px;
}

.page-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: var(--color-text-dark);
    margin: 0 0 8px 0;
}

.page-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0;
}

/* Warning Banner */
.warning-banner {
    display: flex;
    gap: 16px;
    padding: 16px 20px;
    background-color: #FEF3C7;
    border: 1px solid #FCD34D;
    border-radius: 10px;
    margin-bottom: 20px;
}

.warning-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: #D97706;
}

.warning-icon svg {
    width: 100%;
    height: 100%;
}

.warning-content {
    flex: 1;
}

.warning-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #92400E;
    margin: 0 0 4px 0;
}

.warning-text {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #B45309;
    margin: 0;
    line-height: 1.5;
}

/* Validation Warnings */
.validation-warnings {
    display: flex;
    gap: 16px;
    padding: 16px 20px;
    background-color: #FEE2E2;
    border: 1px solid #FCA5A5;
    border-radius: 10px;
    margin-bottom: 20px;
}

.validation-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: #DC2626;
}

.validation-icon svg {
    width: 100%;
    height: 100%;
}

.validation-content {
    flex: 1;
}

.validation-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #991B1B;
    margin: 0 0 8px 0;
}

.validation-list {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #B91C1C;
    margin: 0;
    padding-left: 20px;
    line-height: 1.6;
}

/* Success Banner */
.success-banner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    background-color: #D1FAE5;
    border: 1px solid #6EE7B7;
    border-radius: 10px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #065F46;
}

.success-banner svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

/* Form */
.settings-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.form-section {
    background-color: var(--color-bg-white);
    border-radius: 12px;
    border: 1px solid var(--color-border-light);
    padding: 24px;
}

.section-header {
    margin-bottom: 20px;
}

.section-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text-dark);
    margin: 0 0 8px 0;
}

.section-description {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0;
    line-height: 1.6;
}

.section-description code {
    background-color: var(--color-bg-main);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 12px;
    color: var(--color-primary);
}

/* Code Input */
.code-input-wrapper {
    position: relative;
}

.code-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 12px;
    color: var(--color-text-muted);
    margin-bottom: 8px;
}

.code-label svg {
    width: 16px;
    height: 16px;
}

.code-textarea {
    width: 100%;
    padding: 16px;
    border: 1px solid var(--color-border-light);
    border-radius: 8px;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-text-dark);
    background-color: #1E1E1E;
    color: #D4D4D4;
    resize: vertical;
    min-height: 150px;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.code-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 77, 72, 0.1);
}

.code-textarea::placeholder {
    color: #6A6A6A;
}

/* Hints */
.section-hints {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-border-light);
}

.hint-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: var(--color-text-muted);
}

.hint-icon {
    color: #10B981;
    font-weight: 600;
}

/* Form Actions */
.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding-top: 8px;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all var(--transition-fast);
    border: none;
}

.btn svg {
    width: 18px;
    height: 18px;
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-secondary {
    background-color: var(--color-bg-main);
    color: var(--color-text-dark);
    border: 1px solid var(--color-border-light);
}

.btn-secondary:not(:disabled):hover {
    background-color: var(--color-secondary);
    border-color: var(--color-primary);
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:not(:disabled):hover {
    background-color: #003D3A;
}

/* Spinner Animation */
.spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive */
@media (max-width: 640px) {
    .form-section {
        padding: 16px;
    }

    .form-actions {
        flex-direction: column-reverse;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .section-hints {
        flex-direction: column;
        gap: 8px;
    }
}
</style>
