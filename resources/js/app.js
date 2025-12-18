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
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        const page = pages[`./Pages/${name}.vue`]
        return page.default ? page.default : page
    },
    setup({ el, App, props, plugin }) {
        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el)
        
        // Initialize website components after first render
        if (!isFirstLoadComplete) {
            setTimeout(() => {
                websiteInit.initWebsite();
                isFirstLoadComplete = true;
            }, 100);
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
});
