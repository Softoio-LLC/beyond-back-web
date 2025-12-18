<script setup>
import { ref, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    settings: {
        type: Object,
        default: () => ({
            mail_mailer: 'smtp',
            mail_host: '',
            mail_port: '587',
            mail_username: '',
            mail_password: '',
            mail_encryption: 'tls',
            mail_from_address: '',
            mail_from_name: 'Beyond',
            admin_email: '',
        }),
    },
});

const page = usePage();

const form = ref({
    mail_mailer: props.settings.mail_mailer || 'smtp',
    mail_host: props.settings.mail_host || '',
    mail_port: props.settings.mail_port || '587',
    mail_username: props.settings.mail_username || '',
    mail_password: '', // Never pre-fill password
    mail_encryption: props.settings.mail_encryption || 'tls',
    mail_from_address: props.settings.mail_from_address || '',
    mail_from_name: props.settings.mail_from_name || 'Beyond',
    admin_email: props.settings.admin_email || '',
});

const testEmailForm = ref({
    test_email: '',
});

const isSaving = ref(false);
const isTesting = ref(false);
const showSuccessMessage = ref(false);
const testSuccessMessage = ref('');
const testErrorMessage = ref('');

const hasPassword = computed(() => !!props.settings.mail_password);

const saveSettings = () => {
    isSaving.value = true;
    router.put(route('settings.email.update'), form.value, {
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

const sendTestEmail = () => {
    if (!testEmailForm.value.test_email) return;
    
    isTesting.value = true;
    testSuccessMessage.value = '';
    testErrorMessage.value = '';
    
    router.post(route('settings.email.test'), testEmailForm.value, {
        preserveScroll: true,
        onSuccess: () => {
            testSuccessMessage.value = 'Test email sent successfully!';
            setTimeout(() => {
                testSuccessMessage.value = '';
            }, 5000);
        },
        onError: (errors) => {
            testErrorMessage.value = errors.test_email || 'Failed to send test email';
        },
        onFinish: () => {
            isTesting.value = false;
        },
    });
};

const resetForm = () => {
    form.value = {
        mail_mailer: props.settings.mail_mailer || 'smtp',
        mail_host: props.settings.mail_host || '',
        mail_port: props.settings.mail_port || '587',
        mail_username: props.settings.mail_username || '',
        mail_password: '',
        mail_encryption: props.settings.mail_encryption || 'tls',
        mail_from_address: props.settings.mail_from_address || '',
        mail_from_name: props.settings.mail_from_name || 'Beyond',
        admin_email: props.settings.admin_email || '',
    };
};
</script>

<template>
    <div class="settings-page">
        <div class="page-header">
            <div class="header-content">
                <h1 class="page-title">Email Settings</h1>
                <p class="page-subtitle">
                    Configure SMTP settings for sending emails from your website, including contact form notifications.
                </p>
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
            <!-- SMTP Settings -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">SMTP Settings</h2>
                    <p class="section-description">
                        Configure your SMTP server credentials.
                    </p>
                </div>
                <div class="form-grid two-columns">
                    <div class="form-group">
                        <label for="mail_host" class="form-label">SMTP Host</label>
                        <input 
                            type="text" 
                            id="mail_host" 
                            v-model="form.mail_host" 
                            class="form-input"
                            placeholder="smtp.example.com"
                        />
                    </div>
                    <div class="form-group">
                        <label for="mail_port" class="form-label">SMTP Port</label>
                        <input 
                            type="text" 
                            id="mail_port" 
                            v-model="form.mail_port" 
                            class="form-input"
                            placeholder="587"
                        />
                    </div>
                    <div class="form-group">
                        <label for="mail_username" class="form-label">SMTP Username</label>
                        <input 
                            type="text" 
                            id="mail_username" 
                            v-model="form.mail_username" 
                            class="form-input"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div class="form-group">
                        <label for="mail_password" class="form-label">
                            SMTP Password
                            <span v-if="hasPassword" class="password-hint">(leave empty to keep existing)</span>
                        </label>
                        <input 
                            type="password" 
                            id="mail_password" 
                            v-model="form.mail_password" 
                            class="form-input"
                            placeholder="••••••••"
                        />
                    </div>
                    <div class="form-group">
                        <label for="mail_encryption" class="form-label">Encryption</label>
                        <select id="mail_encryption" v-model="form.mail_encryption" class="form-select">
                            <option value="tls">TLS</option>
                            <option value="ssl">SSL</option>
                            <option value="null">None</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- From Address Settings -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">From Address</h2>
                    <p class="section-description">
                        Configure the sender information for outgoing emails.
                    </p>
                </div>
                <div class="form-grid two-columns">
                    <div class="form-group">
                        <label for="mail_from_address" class="form-label">From Email Address</label>
                        <input 
                            type="email" 
                            id="mail_from_address" 
                            v-model="form.mail_from_address" 
                            class="form-input"
                            placeholder="noreply@yourdomain.com"
                        />
                    </div>
                    <div class="form-group">
                        <label for="mail_from_name" class="form-label">From Name</label>
                        <input 
                            type="text" 
                            id="mail_from_name" 
                            v-model="form.mail_from_name" 
                            class="form-input"
                            placeholder="Beyond"
                        />
                    </div>
                </div>
            </div>

            <!-- Admin Email -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">Admin Notifications</h2>
                    <p class="section-description">
                        This email will receive contact form submissions and other notifications.
                    </p>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="admin_email" class="form-label">Admin Email Address</label>
                        <input 
                            type="email" 
                            id="admin_email" 
                            v-model="form.admin_email" 
                            class="form-input"
                            placeholder="admin@yourdomain.com"
                        />
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div class="form-actions">
                <button type="button" @click="resetForm" class="btn-secondary">
                    Reset
                </button>
                <button type="submit" class="btn-primary" :disabled="isSaving">
                    <span v-if="isSaving">Saving...</span>
                    <span v-else>Save Settings</span>
                </button>
            </div>
        </form>

        <!-- Test Email Section -->
        <div class="form-section test-section">
            <div class="section-header">
                <h2 class="section-title">Test Email Configuration</h2>
                <p class="section-description">
                    Send a test email to verify your settings are working correctly. Save your settings first!
                </p>
            </div>

            <!-- Test Success/Error Messages -->
            <Transition name="fade">
                <div v-if="testSuccessMessage" class="success-banner small">
                    {{ testSuccessMessage }}
                </div>
            </Transition>
            <Transition name="fade">
                <div v-if="testErrorMessage" class="error-banner small">
                    {{ testErrorMessage }}
                </div>
            </Transition>

            <div class="test-form">
                <div class="form-group">
                    <label for="test_email" class="form-label">Test Email Address</label>
                    <div class="input-with-button">
                        <input 
                            type="email" 
                            id="test_email" 
                            v-model="testEmailForm.test_email" 
                            class="form-input"
                            placeholder="Enter email to send test"
                        />
                        <button 
                            type="button" 
                            @click="sendTestEmail" 
                            class="btn-primary"
                            :disabled="isTesting || !testEmailForm.test_email"
                        >
                            <span v-if="isTesting">Sending...</span>
                            <span v-else>Send Test</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.settings-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
}

.page-header {
    margin-bottom: 2rem;
}

.page-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
}

.page-subtitle {
    color: #6b7280;
    font-size: 0.95rem;
}

.info-banner,
.success-banner,
.error-banner {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
}

.info-banner {
    background: #eff6ff;
    border: 1px solid #bfdbfe;
}

.success-banner {
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    color: #065f46;
}

.error-banner {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
}

.info-icon,
.success-banner svg {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    color: #3b82f6;
}

.success-banner svg {
    color: #059669;
}

.info-title {
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 0.25rem;
}

.info-text {
    color: #3b82f6;
    font-size: 0.875rem;
}

.settings-form {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.form-section {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.form-section:last-child {
    border-bottom: none;
}

.test-section {
    background: #f9fafb;
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-header {
    margin-bottom: 1.25rem;
}

.section-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
}

.section-description {
    color: #6b7280;
    font-size: 0.875rem;
}

.form-grid {
    display: grid;
    gap: 1.25rem;
}

.form-grid.two-columns {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 640px) {
    .form-grid.two-columns {
        grid-template-columns: 1fr;
    }
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}

.password-hint {
    font-weight: 400;
    color: #9ca3af;
    font-size: 0.75rem;
}

.form-input,
.form-select {
    padding: 0.625rem 0.875rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    transition: border-color 0.15s, box-shadow 0.15s;
}

.form-input:focus,
.form-select:focus {
    outline: none;
    border-color: #0d6d70;
    box-shadow: 0 0 0 3px rgba(13, 109, 112, 0.1);
}

.form-select {
    background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e") right 0.5rem center/1.5em no-repeat;
    padding-right: 2.5rem;
    appearance: none;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.5rem 2rem;
    background: #f9fafb;
}

.btn-primary,
.btn-secondary {
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
}

.btn-primary {
    background: #0d6d70;
    color: #fff;
    border: none;
}

.btn-primary:hover:not(:disabled) {
    background: #0a5a5c;
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-secondary {
    background: #fff;
    color: #374151;
    border: 1px solid #d1d5db;
}

.btn-secondary:hover {
    background: #f9fafb;
}

.test-form {
    margin-top: 1rem;
}

.input-with-button {
    display: flex;
    gap: 0.75rem;
}

.input-with-button .form-input {
    flex: 1;
}

.small {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
