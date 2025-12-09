<script setup>
import { useForm } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({ layout: AuthLayout });

const props = defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <div class="space-y-6">
        <div class="space-y-2 text-center">
            <p class="text-xs uppercase tracking-[0.35em] text-[#0b8a46]">Account recovery</p>
            <h1 class="text-2xl font-semibold text-gray-800">Reset your password</h1>
            <p class="text-sm text-gray-500">Enter your email and we will send you a reset link.</p>
        </div>

        <div v-if="status" class="rounded-xl border border-[#cde6d6] bg-[#f4fbf6] px-4 py-3 text-sm text-[#0b8a46] font-medium">
            {{ status }}
        </div>

        <form class="space-y-5" @submit.prevent="submit">
            <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-[#0b8a46] focus:ring-2 focus:ring-[#0b8a46]/30 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400"
                    v-model="form.email"
                    required
                    autofocus
                />
                <div v-if="form.errors.email" class="text-red-600 text-xs">{{ form.errors.email }}</div>
            </div>

            <button
                class="w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-[#0b8a46] text-white font-semibold text-sm shadow-md shadow-[#0b8a4620] hover:bg-[#0a7a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b8a46] transition"
                :class="{ 'opacity-50 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                Send reset link
            </button>
        </form>
    </div>
</template>
