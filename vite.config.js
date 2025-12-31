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
                        // Heavy UI libraries - loaded on demand
                        if (id.includes('swiper')) {
                            return 'vendor-swiper';
                        }
                        if (id.includes('aos')) {
                            return 'vendor-aos';
                        }
                        // Bootstrap - loaded immediately but separate chunk
                        if (id.includes('bootstrap')) {
                            return 'vendor-bootstrap';
                        }
                        // Vue/Inertia core - needed immediately
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
        // Use esbuild for minification (default, faster than terser)
        minify: 'esbuild',
    },
    // Optimize dependencies - remove swiper/aos from here since they're lazy loaded
    optimizeDeps: {
        include: ['vue', '@inertiajs/vue3', 'bootstrap'],
    },
    // SSR specific configuration
    ssr: {
        // Don't externalize these for SSR
        noExternal: ['@inertiajs/vue3'],
    },
});
