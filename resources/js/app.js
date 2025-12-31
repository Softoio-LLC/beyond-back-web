import './bootstrap';
import { createSSRApp, h } from 'vue'
import { createInertiaApp, router } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy-js';

// Import Bootstrap JS (bundled with Vite)
import * as bootstrap from 'bootstrap';

// Import website initialization module
import websiteInit from './libs/website-init';

// Make bootstrap available globally for components that need it
window.bootstrap = bootstrap;

// Inject critical CSS immediately to prevent FOUC
const injectCriticalCSS = () => {
    if (document.getElementById('critical-fouc-css')) return;
    
    const criticalCSS = `
        html.loading { visibility: hidden !important; opacity: 0 !important; }
        html.loaded { visibility: visible !important; opacity: 1 !important; transition: opacity 0.2s ease-in; }
        html { animation: fouc-fallback 0s 0.1s forwards; }
        @keyframes fouc-fallback { to { visibility: visible; opacity: 1; } }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.id = 'critical-fouc-css';
    styleElement.textContent = criticalCSS;
    document.head.insertBefore(styleElement, document.head.firstChild);
};

// Inject critical CSS before anything else
injectCriticalCSS();

// Track if first load is complete
let isFirstLoadComplete = false;

createInertiaApp({
    title: title => title ? `${title} - Beyond` : 'Beyond',
    progress: {
        color: '#4B5563',
        delay: 250,
        includeCSS: true,
        showSpinner: false,
    },
    resolve: name => {
        // Lazy load pages for better code splitting and faster initial load
        const pages = import.meta.glob('./Pages/**/*.vue')
        return pages[`./Pages/${name}.vue`]()
    },
    setup({ el, App, props, plugin }) {
        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
        
        // Suppress hydration mismatch warnings in production
        app.config.warnHandler = (msg, instance, trace) => {
            // Ignore hydration warnings - they're expected for dynamic content injection
            if (msg.includes('Hydration') || msg.includes('hydration')) {
                return;
            }
            console.warn(msg, trace);
        };
        
        app.mount(el)
        
        // Initialize website components after first render using requestIdleCallback
        // This defers non-critical work to improve TBT
        if (!isFirstLoadComplete) {
            const initFn = () => {
                websiteInit.initWebsite();
                isFirstLoadComplete = true;
            };
            
            if ('requestIdleCallback' in window) {
                requestIdleCallback(initFn, { timeout: 500 });
            } else {
                setTimeout(initFn, 200);
            }
        }
        
        return app;
    },
})

// Handle Inertia navigation events
router.on('finish', () => {
    // Re-initialize components after navigation
    if (isFirstLoadComplete) {
        websiteInit.refreshComponents();
    }
    
    // Ensure loading class is removed
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('loaded');
});

// Remove loading class on first render
router.on('navigate', () => {
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('loaded');
});
