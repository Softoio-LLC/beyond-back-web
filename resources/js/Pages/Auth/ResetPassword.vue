<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({ layout: AuthLayout });

const props = defineProps({
    token: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const showPassword = ref(false);
const showPasswordConfirmation = ref(false);

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <div class="space-y-6">
        <div class="space-y-2 text-center">
            <p class="text-xs uppercase tracking-[0.35em] text-primary">Account recovery</p>
            <h1 class="text-2xl font-semibold text-gray-800">Create new password</h1>
            <p class="text-sm text-gray-500">Enter your new password below.</p>
        </div>

        <form class="space-y-5" @submit.prevent="submit">
            <!-- Email Field (Hidden but included for form submission) -->
            <input type="hidden" v-model="form.email" />
            <input type="hidden" v-model="form.token" />

            <div class="space-y-2">
                <label for="email-display" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email-display"
                    type="email"
                    class="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 cursor-not-allowed"
                    :value="email"
                    disabled
                    readonly
                />
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
                <div class="relative">
                    <input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 px-4 py-3 pr-12 text-sm shadow-sm placeholder:text-gray-400"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                        placeholder="Enter your new password"
                    />
                    <button
                        type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        @click="showPassword = !showPassword"
                    >
                        <svg v-if="!showPassword" class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg v-else class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div v-if="form.errors.password" class="text-red-600 text-xs">{{ form.errors.password }}</div>
            </div>

            <!-- Password Confirmation Field -->
            <div class="space-y-2">
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <div class="relative">
                    <input
                        id="password_confirmation"
                        :type="showPasswordConfirmation ? 'text' : 'password'"
                        class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 px-4 py-3 pr-12 text-sm shadow-sm placeholder:text-gray-400"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                        placeholder="Confirm your new password"
                    />
                    <button
                        type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        @click="showPasswordConfirmation = !showPasswordConfirmation"
                    >
                        <svg v-if="!showPasswordConfirmation" class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg v-else class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div v-if="form.errors.password_confirmation" class="text-red-600 text-xs">{{ form.errors.password_confirmation }}</div>
            </div>

            <!-- General Error -->
            <div v-if="form.errors.email" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 font-medium">
                {{ form.errors.email }}
            </div>

            <button
                class="w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-md hover:bg-[#003D3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
                :class="{ 'opacity-50 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <svg v-if="form.processing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ form.processing ? 'Resetting password...' : 'Reset password' }}
            </button>
        </form>
    </div>
</template>

<style scoped>
.text-primary {
    color: var(--color-primary);
}

.border-primary {
    border-color: var(--color-primary);
}

.focus\:border-primary:focus {
    border-color: var(--color-primary);
}

.focus\:ring-primary\/30:focus {
    --tw-ring-color: rgba(0, 79, 76, 0.3);
}

.bg-primary {
    background-color: var(--color-primary);
}

.focus\:ring-primary:focus {
    --tw-ring-color: var(--color-primary);
}
</style>
