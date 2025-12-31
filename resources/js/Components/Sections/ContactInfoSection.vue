<script setup>
import { computed, ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AppImage from '@/Components/AppImage.vue';

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

// Helper to get proper image URL
const getImageUrl = (img) => {
    if (!img || typeof img !== 'string') return '';
    if (img.startsWith('http') || img.startsWith('/')) return img;
    return `/storage/${img}`;
};

// Localized content
const sectionTitle = computed(() => props.lang === 'ar' ? props.content.section_title_ar : props.content.section_title_en);
const sectionDescription = computed(() => props.lang === 'ar' ? props.content.section_description_ar : props.content.section_description_en);
const generalInfoTitle = computed(() => props.lang === 'ar' ? props.content.general_info_title_ar : props.content.general_info_title_en);
const generalInfoDescription = computed(() => props.lang === 'ar' ? props.content.general_info_description_ar : props.content.general_info_description_en);
const formTitle = computed(() => props.lang === 'ar' ? props.content.form_title_ar : props.content.form_title_en);
const formDescription = computed(() => props.lang === 'ar' ? props.content.form_description_ar : props.content.form_description_en);

// Image URLs
const overlayImageUrl = computed(() => getImageUrl(props.content.overlay_image));

// Process info cards with proper image URLs
const infoCards = computed(() => {
    const cards = props.content.info_cards || [];
    return cards.map(card => ({
        ...card,
        iconUrl: getImageUrl(card.icon)
    }));
});

// Form handling
const form = useForm({
    name: '',
    email: '',
    country_code: '+966',
    phone: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const submitForm = () => {
    isSubmitting.value = true;
    submitError.value = '';
    submitSuccess.value = false;

    form.transform((data) => ({
        ...data,
        phone: data.country_code + data.phone,
        subject: data.subject || (props.lang === 'ar' ? 'رسالة من صفحة التواصل' : 'Message from Contact Page')
    })).post('/contact', {
        preserveScroll: true,
        onSuccess: () => {
            submitSuccess.value = true;
            form.reset();
        },
        onError: (errors) => {
            submitError.value = Object.values(errors).flat().join(', ');
        },
        onFinish: () => {
            isSubmitting.value = false;
        }
    });
};

// Placeholders
const placeholders = computed(() => ({
    name: props.lang === 'ar' ? 'الاسم الكامل' : 'Full Name',
    email: props.lang === 'ar' ? 'البريد الالكتروني' : 'Email Address',
    phone: props.lang === 'ar' ? 'مثال xxxxxxxx5' : 'Example 5xxxxxxxx',
    subject: props.lang === 'ar' ? 'الموضوع' : 'Subject',
    message: props.lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...',
    submit: props.lang === 'ar' ? 'إرسال' : 'Send',
    submitting: props.lang === 'ar' ? 'جاري الإرسال...' : 'Sending...',
    success: props.lang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message was sent successfully!'
}));

// Info items getter
const getInfoItemLabel = (item) => props.lang === 'ar' ? item.label_ar : item.label_en;
const getInfoItemValue = (item) => props.lang === 'ar' ? item.value_ar : item.value_en;
</script>

<template>
    <section class="contact-info-area">
        <AppImage 
            v-if="overlayImageUrl" 
            :src="overlayImageUrl" 
            class="overly-1" 
            alt=""
            loading="lazy"
            
        />
        <div class="container">
            <!-- Contact Info Cards -->
            <div class="row gy-4 mb-5 pb-0 pb-md-5">
                <div 
                    v-for="(card, index) in infoCards" 
                    :key="index"
                    class="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <div class="contact__info--block">
                        <i v-if="card.iconUrl">
                            <AppImage 
                                :src="card.iconUrl" 
                                :alt="lang === 'ar' ? card.title_ar : card.title_en"
                                loading="lazy"
                                
                            />
                        </i>
                        <h3 v-html="lang === 'ar' ? card.title_ar : card.title_en"></h3>
                        <p v-html="lang === 'ar' ? card.content_ar : card.content_en"></p>
                    </div>
                </div>
            </div>

            <!-- General Info + Contact Form -->
            <div class="row">
                <!-- General Information -->
                <div class="col-lg-6">
                    <div class="contact__info--content" data-aos="fade-up">
                        <h1 class="fw-bold" v-html="generalInfoTitle"></h1>
                        <p v-html="generalInfoDescription"></p>
                        <ul>
                            <li v-for="(item, index) in content.info_items" :key="index">
                                <h6 v-html="getInfoItemLabel(item)"></h6>
                                <span v-if="item.type !== 'social'" v-html="getInfoItemValue(item)"></span>
                                <div v-else class="social__link">
                                    <a 
                                        v-for="(social, sIdx) in item.links" 
                                        :key="sIdx" 
                                        :href="social.url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img 
                                            :src="social.icon" 
                                            :alt="social.name || 'Social'"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="col-lg-6">
                    <div class="contact__info--form" data-aos="fade-up" data-aos-delay="100">
                        <h1 class="fw-bold" v-html="formTitle"></h1>
                        <p v-html="formDescription"></p>
                        
                        <!-- Success Message -->
                        <div v-if="submitSuccess" class="alert alert-success mb-4">
                            {{ placeholders.success }}
                        </div>

                        <!-- Error Message -->
                        <div v-if="submitError" class="alert alert-danger mb-4">
                            {{ submitError }}
                        </div>

                        <form @submit.prevent="submitForm">
                            <input 
                                v-model="form.name"
                                type="text" 
                                :placeholder="placeholders.name"
                                required
                                :class="{ 'is-invalid': form.errors.name }"
                            />
                            <div v-if="form.errors.name" class="invalid-feedback d-block">
                                {{ form.errors.name }}
                            </div>

                            <input 
                                v-model="form.email"
                                type="email" 
                                :placeholder="placeholders.email"
                                required
                                :class="{ 'is-invalid': form.errors.email }"
                            />
                            <div v-if="form.errors.email" class="invalid-feedback d-block">
                                {{ form.errors.email }}
                            </div>

                            <div class="d-flex gap-3">
                                <input 
                                    v-model="form.country_code"
                                    type="text" 
                                    style="max-width: 100px"
                                    readonly
                                />
                                <input 
                                    v-model="form.phone"
                                    type="text" 
                                    :placeholder="placeholders.phone"
                                    :class="{ 'is-invalid': form.errors.phone }"
                                />
                            </div>
                            <div v-if="form.errors.phone" class="invalid-feedback d-block">
                                {{ form.errors.phone }}
                            </div>

                            <input 
                                v-model="form.subject"
                                type="text" 
                                :placeholder="placeholders.subject"
                                :class="{ 'is-invalid': form.errors.subject }"
                            />
                            <div v-if="form.errors.subject" class="invalid-feedback d-block">
                                {{ form.errors.subject }}
                            </div>

                            <textarea 
                                v-model="form.message"
                                :placeholder="placeholders.message"
                                required
                                :class="{ 'is-invalid': form.errors.message }"
                            ></textarea>
                            <div v-if="form.errors.message" class="invalid-feedback d-block">
                                {{ form.errors.message }}
                            </div>

                            <button 
                                type="submit" 
                                class="theme-btn btn btn-success"
                                :disabled="isSubmitting || form.processing"
                            >
                                {{ isSubmitting ? placeholders.submitting : placeholders.submit }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact__info--form input:disabled,
.contact__info--form button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.is-invalid {
    border-color: #dc3545 !important;
}

.invalid-feedback {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
}

.alert {
    padding: 1rem;
    border-radius: 8px;
}

.alert-success {
    background-color: #d1e7dd;
    color: #0f5132;
    border: 1px solid #badbcc;
}

.alert-danger {
    background-color: #f8d7da;
    color: #842029;
    border: 1px solid #f5c2c7;
}
</style>
