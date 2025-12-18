import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        tailwindcss(),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        },
    },
    build: {
        // Chunk splitting for better caching (only for client build)
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Only apply chunking for client-side build
                    if (id.includes('node_modules')) {
                        if (id.includes('bootstrap') || id.includes('swiper') || id.includes('aos')) {
                            return 'vendor-ui';
                        }
                        if (id.includes('vue') || id.includes('@inertiajs')) {
                            return 'vendor-vue';
                        }
                    }
                },
            },
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        // Enable source maps for production debugging (optional)
        sourcemap: false,
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['vue', '@inertiajs/vue3', 'bootstrap', 'swiper', 'aos'],
    },
    // SSR specific configuration
    ssr: {
        // Don't externalize these for SSR
        noExternal: ['@inertiajs/vue3'],
    },
});
