/**
 * Website initialization module
 * This module handles all website-specific initialization (sliders, animations, etc.)
 * It's loaded once and cached by the browser.
 * 
 * Performance optimizations:
 * - Swiper and AOS are dynamically imported only when needed
 * - Initialization is deferred to improve TBT
 */

// Lazy load Swiper and AOS only when needed
let Swiper = null;
let SwiperModules = null;
let AOS = null;

// Track if already initialized
let isInitialized = false;
let swiperInstances = [];
let librariesLoaded = false;

/**
 * Load heavy libraries dynamically
 */
async function loadLibraries() {
    if (librariesLoaded) return;
    
    const [swiperModule, aosModule] = await Promise.all([
        import('swiper').then(m => m.default),
        import('aos').then(m => m.default)
    ]);
    
    // Load Swiper modules
    const modules = await import('swiper/modules');
    SwiperModules = modules;
    Swiper = swiperModule;
    AOS = aosModule;
    
    // Import CSS (these are small and will be code-split)
    await Promise.all([
        import('swiper/css'),
        import('swiper/css/navigation'),
        import('swiper/css/pagination'),
        import('aos/dist/aos.css')
    ]);
    
    librariesLoaded = true;
}

/**
 * Initialize all Swiper sliders on the page
 */
export async function initSwipers() {
    // Ensure libraries are loaded
    if (!librariesLoaded) {
        await loadLibraries();
    }
    
    const { Navigation, Pagination, Autoplay, Mousewheel } = SwiperModules;
    
    // Destroy existing instances
    swiperInstances.forEach(instance => {
        if (instance && typeof instance.destroy === 'function') {
            instance.destroy(true, true);
        }
    });
    swiperInstances = [];

    // Hero Slider Thumbnails
    const heroThumb = document.querySelector('.hero-slide-thumb');
    if (heroThumb) {
        swiperInstances.push(new Swiper('.hero-slide-thumb', {
            modules: [Autoplay],
            loop: true,
            centeredSlides: true,
            spaceBetween: 10,
            rtl: document.dir === 'rtl',
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            speed: 1000,
            slidesPerView: 4,
            breakpoints: {
                0: { slidesPerView: 1 },
                320: { slidesPerView: 1 },
                450: { slidesPerView: 1 },
                575: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
            },
        }));
    }

    // Concept Slider
    const conceptThumb = document.querySelector('.concept-thumbnails');
    if (conceptThumb) {
        swiperInstances.push(new Swiper('.concept-thumbnails', {
            modules: [],
            loop: true,
            centeredSlides: true,
            spaceBetween: 15,
            speed: 1000,
            slidesPerView: 1,
            breakpoints: {
                0: { slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                320: { slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                450: { slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                575: { slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                992: { spaceBetween: 15, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                1200: { spaceBetween: 24, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
            },
        }));
    }

    // Outer Work Swiper
    const outerWork = document.querySelector('.outer-work-swiper');
    if (outerWork) {
        swiperInstances.push(new Swiper('.outer-work-swiper', {
            modules: [],
            slidesPerView: 2,
            spaceBetween: 20,
            rtl: false,
            loop: true,
            speed: 800,
            breakpoints: {
                0: { slidesPerView: 1, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                992: { slidesPerView: 2, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                1200: { slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                1450: { slidesOffsetBefore: 0, slidesOffsetAfter: 70 },
            },
        }));
    }

    // Work Single Sliders (multiple)
    document.querySelectorAll('.work-single-wrap').forEach((slider, index) => {
        const pagination = slider.parentElement?.querySelector('.swiper-pagination');
        if (pagination) {
            const uniquePaginationClass = `inner-pagination-${index}`;
            pagination.classList.add(uniquePaginationClass);

            swiperInstances.push(new Swiper(slider, {
                modules: [Pagination, Mousewheel],
                loop: true,
                centeredSlides: true,
                spaceBetween: 20,
                rtl: document.dir === 'rtl',
                speed: 1000,
                slidesPerView: 1,
                mousewheel: {
                    forceToAxis: true,
                    sensitivity: 1,
                },
                pagination: {
                    el: `.${uniquePaginationClass}`,
                    clickable: true,
                },
            }));
        }
    });

    // Team Card Swiper
    const teamCards = document.querySelector('.team-card-wrap');
    if (teamCards) {
        swiperInstances.push(new Swiper('.team-card-wrap', {
            modules: [Pagination],
            slidesPerView: 4,
            spaceBetween: 24,
            loop: true,
            speed: 600,
            effect: 'slide',
            grabCursor: true,
            pagination: {
                el: '.team-pagination',
                clickable: true,
                dynamicBullets: false,
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                320: { slidesPerView: 1 },
                450: { slidesPerView: 1 },
                575: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1450: { slidesPerView: 3 },
                1600: { slidesPerView: 4 },
            },
        }));
    }

    // Brand Logos Slider
    const brandLogos = document.querySelector('.brand-logos-slide');
    if (brandLogos) {
        swiperInstances.push(new Swiper('.brand-logos-slide', {
            modules: [],
            loop: true,
            centeredSlides: true,
            rtl: document.dir === 'rtl',
            spaceBetween: 10,
            speed: 1000,
            slidesPerView: 7,
            breakpoints: {
                0: { slidesPerView: 2, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                320: { slidesPerView: 2, slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
                450: { slidesPerView: 3, slidesOffsetBefore: 40, slidesOffsetAfter: 40 },
                575: { slidesPerView: 4, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                1450: { slidesPerView: 6, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
                1600: { slidesPerView: 7, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
            },
        }));
    }
}

/**
 * Initialize AOS animations
 */
export async function initAOS() {
    // Only initialize if we're in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Ensure libraries are loaded
    if (!librariesLoaded) {
        await loadLibraries();
    }
    
    try {
        AOS.init({
            mirror: true,
            duration: 1200,
            initClassName: 'aos-init',
            once: true,
            offset: 0,
            delay: 0,
            startEvent: 'DOMContentLoaded',
            useClassNames: false,
            disableMutationObserver: false,
            anchorPlacement: 'top-bottom',
        });
    } catch (e) {
        console.warn('AOS init skipped:', e.message);
    }
}

/**
 * Refresh AOS (call after dynamic content changes)
 */
export async function refreshAOS() {
    // Only refresh if we're in the browser and have AOS elements
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Only refresh if AOS is already loaded
    if (!AOS) return;
    
    try {
        // Check if there are any AOS elements before refreshing
        const aosElements = document.querySelectorAll('[data-aos]');
        if (aosElements.length > 0) {
            AOS.refresh();
        }
    } catch (e) {
        // Silently handle cases where elements don't exist yet
        console.warn('AOS refresh skipped:', e.message);
    }
}

/**
 * Initialize language selector functionality
 */
export function initLanguageSelector() {
    const listItems = document.querySelectorAll('.select-box__list li');
    listItems.forEach((item) => {
        item.addEventListener('click', () => {
            listItems.forEach((li) => li.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

/**
 * Full initialization - call on first page load
 */
export async function initWebsite() {
    if (isInitialized) {
        // Re-initialize components that need refresh on navigation
        await refreshComponents();
        return;
    }

    initLanguageSelector();
    await initSwipers();
    await initAOS();
    
    isInitialized = true;
}

/**
 * Refresh components after Inertia navigation
 */
export async function refreshComponents() {
    // Re-initialize swipers on new pages with proper DOM timing
    requestAnimationFrame(async () => {
        await initSwipers();
        initLanguageSelector();
        
        // Delay AOS refresh to ensure DOM is fully ready
        setTimeout(() => {
            refreshAOS();
        }, 100);
    });
}

// Export for use in Vue components
export default {
    initWebsite,
    refreshComponents,
    initSwipers,
    initAOS,
    refreshAOS,
    initLanguageSelector,
    loadLibraries,
};
