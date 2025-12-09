<script setup>
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-[#f6fbf7] via-[#eff6f1] to-[#dfeee5] text-gray-800">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="w-full max-w-md bg-white/95 backdrop-blur-sm border border-[#dbe9df] shadow-xl shadow-[#0b8a4610] rounded-2xl px-8 py-10">
                <slot />
            </div>
        </div>
    </div>
</template>
