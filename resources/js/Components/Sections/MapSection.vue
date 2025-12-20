<script setup>
import { computed } from 'vue';

const props = defineProps({
    content: {
        type: Object,
        required: true
    },
    lang: {
        type: String,
        required: true
    }
});

// Build Google Maps embed URL from coordinates or address
const mapSrc = computed(() => {
    if (props.content.embed_url) {
        return props.content.embed_url;
    }
    
    const baseUrl = 'https://maps.google.com/maps';
    const params = new URLSearchParams({
        width: '100%',
        height: props.content.height || '500',
        hl: props.lang,
        t: '', // Map type
        z: props.content.zoom || '15',
        ie: 'UTF8',
        iwloc: 'B',
        output: 'embed'
    });

    // Use coordinates if provided, otherwise use address
    if (props.content.latitude && props.content.longitude) {
        params.set('q', `${props.content.latitude},${props.content.longitude}`);
    } else if (props.content.address) {
        params.set('q', props.content.address);
    } else {
        // Default location
        params.set('q', 'Riyadh, Saudi Arabia');
    }

    // Add business name if provided
    if (props.content.business_name) {
        const q = params.get('q');
        params.set('q', `${q}+(${props.content.business_name})`);
    }

    return `${baseUrl}?${params.toString()}`;
});

const mapHeight = computed(() => props.content.height || 500);
</script>

<template>
    <section class="map-area pb-0 pb-md-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Section Title (Optional) -->
                    <div 
                        v-if="content.title_ar || content.title_en" 
                        class="section-title text-center mb-4"
                        data-aos="fade-up"
                    >
                        <h2>{{ lang === 'ar' ? content.title_ar : content.title_en }}</h2>
                        <p v-if="content.subtitle_ar || content.subtitle_en">
                            {{ lang === 'ar' ? content.subtitle_ar : content.subtitle_en }}
                        </p>
                    </div>
                    
                    <!-- Map Container -->
                    <div 
                        class="map-container" 
                        style="width: 100%"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <iframe 
                            width="100%" 
                            :height="mapHeight" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0" 
                            :src="mapSrc"
                            :title="lang === 'ar' ? 'خريطة الموقع' : 'Location Map'"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.map-container {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
    display: block;
}
</style>
