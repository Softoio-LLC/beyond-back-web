<script setup>
import { ref, computed } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const successMessage = computed(() => page.props.flash?.success);

const showPasswordFields = ref(false);
const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    current_password: '',
    password: '',
    password_confirmation: '',
});

const togglePasswordFields = () => {
    showPasswordFields.value = !showPasswordFields.value;
    if (!showPasswordFields.value) {
        form.current_password = '';
        form.password = '';
        form.password_confirmation = '';
    }
};

const submit = () => {
    form.put(route('profile.update'), {
        preserveScroll: true,
        onSuccess: () => {
            if (showPasswordFields.value) {
                form.current_password = '';
                form.password = '';
                form.password_confirmation = '';
                showPasswordFields.value = false;
            }
        },
    });
};
</script>

<template>
    <div class="profile-page">
        <!-- Page Header -->
        <div class="page-header">
            <h1 class="page-title">Edit Profile</h1>
        </div>

        <!-- Success Message -->
        <Transition name="fade">
            <div v-if="successMessage" class="alert alert-success">
                <svg class="alert-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ successMessage }}
            </div>
        </Transition>

        <!-- Profile Form Card -->
        <div class="profile-card card">
            <form @submit.prevent="submit" class="profile-form">
                <!-- Profile Avatar Section -->
                <div class="profile-avatar-section">
                    <div class="profile-avatar-large">
                        <span>{{ user.name?.charAt(0).toUpperCase() || 'U' }}</span>
                    </div>
                    <div class="profile-avatar-info">
                        <h2 class="profile-avatar-name">{{ user.name }}</h2>
                        <p class="profile-avatar-email">{{ user.email }}</p>
                    </div>
                </div>

                <div class="form-divider"></div>

                <!-- Basic Information Section -->
                <div class="form-section">
                    <h3 class="form-section-title">Basic Information</h3>
                    
                    <div class="form-grid">
                        <!-- Name Field -->
                        <div class="form-group">
                            <label for="name" class="form-label">Full Name</label>
                            <div class="input-wrapper">
                                <svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.75 17.5V15.8333C3.75 14.9493 4.10119 14.1014 4.72631 13.4763C5.35143 12.8512 6.19928 12.5 7.08333 12.5H12.9167C13.8007 12.5 14.6486 12.8512 15.2737 13.4763C15.8988 14.1014 16.25 14.9493 16.25 15.8333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="form-input"
                                    :class="{ 'input-error': form.errors.name }"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <p v-if="form.errors.name" class="error-text">{{ form.errors.name }}</p>
                        </div>

                        <!-- Email Field -->
                        <div class="form-group">
                            <label for="email" class="form-label">Email Address</label>
                            <div class="input-wrapper">
                                <svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33334 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33334C2.41668 16.6667 1.66668 15.9167 1.66668 15V5.00001C1.66668 4.08334 2.41668 3.33334 3.33334 3.33334Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.3333 5L10 10.8333L1.66668 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="form-input"
                                    :class="{ 'input-error': form.errors.email }"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <p v-if="form.errors.email" class="error-text">{{ form.errors.email }}</p>
                        </div>
                    </div>
                </div>

                <div class="form-divider"></div>

                <!-- Password Section -->
                <div class="form-section">
                    <div class="form-section-header">
                        <h3 class="form-section-title">Password</h3>
                        <button 
                            type="button" 
                            class="toggle-password-btn"
                            @click="togglePasswordFields"
                        >
                            <svg v-if="!showPasswordFields" class="toggle-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg v-else class="toggle-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {{ showPasswordFields ? 'Cancel' : 'Change Password' }}
                        </button>
                    </div>
                    
                    <Transition name="slide">
                        <div v-if="showPasswordFields" class="password-fields">
                            <!-- Current Password -->
                            <div class="form-group">
                                <label for="current_password" class="form-label">Current Password</label>
                                <div class="input-wrapper">
                                    <svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3.33334" y="9.16667" width="13.3333" height="9.16667" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.83334 9.16667V5.83334C5.83334 3.53216 7.69883 1.66667 10 1.66667C12.3012 1.66667 14.1667 3.53216 14.1667 5.83334V9.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <input
                                        id="current_password"
                                        v-model="form.current_password"
                                        :type="showCurrentPassword ? 'text' : 'password'"
                                        class="form-input"
                                        :class="{ 'input-error': form.errors.current_password }"
                                        placeholder="Enter your current password"
                                    />
                                    <button 
                                        type="button" 
                                        class="password-toggle" 
                                        @click="showCurrentPassword = !showCurrentPassword"
                                    >
                                        <svg v-if="!showCurrentPassword" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg v-else viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <p v-if="form.errors.current_password" class="error-text">{{ form.errors.current_password }}</p>
                            </div>

                            <div class="form-grid">
                                <!-- New Password -->
                                <div class="form-group">
                                    <label for="password" class="form-label">New Password</label>
                                    <div class="input-wrapper">
                                        <svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3.33334" y="9.16667" width="13.3333" height="9.16667" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.83334 9.16667V5.83334C5.83334 3.53216 7.69883 1.66667 10 1.66667C12.3012 1.66667 14.1667 3.53216 14.1667 5.83334V9.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <input
                                            id="password"
                                            v-model="form.password"
                                            :type="showNewPassword ? 'text' : 'password'"
                                            class="form-input"
                                            :class="{ 'input-error': form.errors.password }"
                                            placeholder="Enter new password"
                                        />
                                        <button 
                                            type="button" 
                                            class="password-toggle" 
                                            @click="showNewPassword = !showNewPassword"
                                        >
                                            <svg v-if="!showNewPassword" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg v-else viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <p v-if="form.errors.password" class="error-text">{{ form.errors.password }}</p>
                                </div>

                                <!-- Confirm Password -->
                                <div class="form-group">
                                    <label for="password_confirmation" class="form-label">Confirm New Password</label>
                                    <div class="input-wrapper">
                                        <svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3.33334" y="9.16667" width="13.3333" height="9.16667" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.83334 9.16667V5.83334C5.83334 3.53216 7.69883 1.66667 10 1.66667C12.3012 1.66667 14.1667 3.53216 14.1667 5.83334V9.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <input
                                            id="password_confirmation"
                                            v-model="form.password_confirmation"
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            class="form-input"
                                            :class="{ 'input-error': form.errors.password_confirmation }"
                                            placeholder="Confirm new password"
                                        />
                                        <button 
                                            type="button" 
                                            class="password-toggle" 
                                            @click="showConfirmPassword = !showConfirmPassword"
                                        >
                                            <svg v-if="!showConfirmPassword" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg v-else viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>

                <div class="form-divider"></div>

                <!-- Form Actions -->
                <div class="form-actions">
                    <button 
                        type="submit" 
                        class="btn-primary btn-lg"
                        :disabled="form.processing"
                    >
                        <svg v-if="form.processing" class="btn-spinner" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="50.26" stroke-dashoffset="25.13"/>
                        </svg>
                        {{ form.processing ? 'Saving...' : 'Save Changes' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.profile-page {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Alert Styles */
.alert {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
}

.alert-success {
    background-color: #D1FAE5;
    color: #065F46;
    border: 1px solid #A7F3D0;
}

.alert-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

/* Profile Card */
.profile-card {
    padding: 0;
    overflow: hidden;
}

.profile-form {
    display: flex;
    flex-direction: column;
}

/* Profile Avatar Section */
.profile-avatar-section {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 32px;
    background: linear-gradient(135deg, var(--color-primary) 0%, #006560 100%);
}

.profile-avatar-large {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 32px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    flex-shrink: 0;
}

.profile-avatar-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.profile-avatar-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: white;
    margin: 0;
}

.profile-avatar-email {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

/* Form Sections */
.form-section {
    padding: 24px 32px;
}

.form-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.form-section-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: var(--color-text-dark);
    margin: 0 0 20px 0;
}

.form-section-header .form-section-title {
    margin: 0;
}

.form-divider {
    height: 1px;
    background-color: var(--color-border-light);
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

@media (max-width: 640px) {
    .form-grid {
        grid-template-columns: 1fr;
    }
}

/* Form Group */
.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-label {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-dark);
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-icon {
    position: absolute;
    left: 14px;
    width: 20px;
    height: 20px;
    color: var(--color-text-muted);
    pointer-events: none;
}

.form-input {
    width: 100%;
    padding: 12px 14px 12px 44px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    transition: all var(--transition-fast);
}

.form-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 79, 76, 0.1);
}

.form-input.input-error {
    border-color: var(--color-danger);
}

.form-input::placeholder {
    color: var(--color-text-muted);
}

.password-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.password-toggle svg {
    width: 20px;
    height: 20px;
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
}

.password-toggle:hover svg {
    color: var(--color-primary);
}

.error-text {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-danger);
    margin: 0;
}

/* Toggle Password Button */
.toggle-password-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-primary);
    background-color: var(--color-secondary);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.toggle-password-btn:hover {
    background-color: #D1DFDE;
}

.toggle-icon {
    width: 16px;
    height: 16px;
}

/* Password Fields Animation */
.password-fields {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 4px;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Form Actions */
.form-actions {
    padding: 24px 32px;
    display: flex;
    justify-content: flex-end;
}

.btn-lg {
    padding: 14px 32px;
    font-size: 15px;
}

.btn-spinner {
    width: 18px;
    height: 18px;
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

/* Fade Animation */
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
    .profile-avatar-section {
        flex-direction: column;
        text-align: center;
        padding: 24px;
    }

    .profile-avatar-large {
        width: 64px;
        height: 64px;
        font-size: 24px;
    }

    .profile-avatar-name {
        font-size: 20px;
    }

    .form-section {
        padding: 20px;
    }

    .form-actions {
        padding: 20px;
    }

    .form-section-header {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }
}
</style>
