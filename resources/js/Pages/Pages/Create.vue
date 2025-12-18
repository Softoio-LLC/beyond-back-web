<script setup>
import { ref, watch } from 'vue';
import { Link, router, useForm } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { useSlugify } from '@/composables/useSlugify';
import saFlag from '@/../assets/sa-flag.svg';
import usFlag from '@/../assets/us-flag.svg';

defineOptions({ layout: DashboardLayout });

const { generateSlug, formatAsSlug } = useSlugify();

// Form using Inertia useForm
const form = useForm({
    // English fields
    name_en: '',
    url_slug_en: '',
    meta_title_en: '',
    h1_title_en: '',
    og_title_en: '',
    hreflang_en: '',
    meta_description_en: '',
    og_description_en: '',
    og_image_en: null,
    // Arabic fields
    name_ar: '',
    url_slug_ar: '',
    meta_title_ar: '',
    h1_title_ar: '',
    og_title_ar: '',
    hreflang_ar: '',
    meta_description_ar: '',
    og_description_ar: '',
    og_image_ar: null,
});

const ogImageEnPreview = ref(null);
const ogImageArPreview = ref(null);
const slugManuallyEditedEn = ref(false);
const slugManuallyEditedAr = ref(false);

// Auto-generate English slug from name
watch(() => form.name_en, (newName) => {
    if (!slugManuallyEditedEn.value && newName) {
        form.url_slug_en = generateSlug(newName, 'en');
    }
});

// Auto-generate Arabic slug from name
watch(() => form.name_ar, (newName) => {
    if (!slugManuallyEditedAr.value && newName) {
        form.url_slug_ar = generateSlug(newName, 'ar');
    }
});

// Format English slug when manually edited
const handleEnglishSlugInput = () => {
    slugManuallyEditedEn.value = true;
};

const handleEnglishSlugBlur = () => {
    if (form.url_slug_en) {
        form.url_slug_en = formatAsSlug(form.url_slug_en, 'en');
    }
};

// Format Arabic slug when manually edited
const handleArabicSlugInput = () => {
    slugManuallyEditedAr.value = true;
};

const handleArabicSlugBlur = () => {
    if (form.url_slug_ar) {
        form.url_slug_ar = formatAsSlug(form.url_slug_ar, 'ar');
    }
};

const handleImageUpload = (event, lang) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (lang === 'en') {
                form.og_image_en = file;
                ogImageEnPreview.value = e.target.result;
            } else {
                form.og_image_ar = file;
                ogImageArPreview.value = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
};

const handleDrop = (event, lang) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (lang === 'en') {
                form.og_image_en = file;
                ogImageEnPreview.value = e.target.result;
            } else {
                form.og_image_ar = file;
                ogImageArPreview.value = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
};

const handleDragOver = (event) => {
    event.preventDefault();
};

const cancel = () => {
    router.visit(route('pages.index'));
};

const save = () => {
    form.post(route('pages.store'), {
        forceFormData: true,
        preserveScroll: true,
    });
};
</script>

<template>
    <div class="add-new-page">
        <!-- Page Header -->
        <div class="page-header">
            <h1 class="page-title">Add New Page</h1>
        </div>

        <!-- Form Container -->
        <div class="form-container card">
            <div class="form-grid">
                <!-- English Column (Left) -->
                <div class="form-column">
                    <!-- Page Name -->
                    <div class="form-group">
                        <label class="form-label">
                            Page Name
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.name_en"
                            placeholder=""
                        />
                        <div v-if="form.errors.name_en" class="form-error">{{ form.errors.name_en }}</div>
                    </div>

                    <!-- URL Slug -->
                    <div class="form-group">
                        <label class="form-label">
                            URL Slug
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.url_slug_en"
                            @input="handleEnglishSlugInput"
                            @blur="handleEnglishSlugBlur"
                            placeholder="auto-generated-from-page-name"
                        />
                        <div class="form-hint">The English URL slug can only contain lowercase letters, numbers, and hyphens.</div>
                        <div v-if="form.errors.url_slug_en" class="form-error">{{ form.errors.url_slug_en }}</div>
                    </div>

                    <!-- Meta Title -->
                    <div class="form-group">
                        <label class="form-label">
                            Meta Title
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.meta_title_en"
                            placeholder=""
                        />
                        <div v-if="form.errors.meta_title_en" class="form-error">{{ form.errors.meta_title_en }}</div>
                    </div>

                    <!-- H1 Title -->
                    <div class="form-group">
                        <label class="form-label">
                            H1 Title
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.h1_title_en"
                            placeholder=""
                        />
                        <div v-if="form.errors.h1_title_en" class="form-error">{{ form.errors.h1_title_en }}</div>
                    </div>

                    <!-- OG Title -->
                    <div class="form-group">
                        <label class="form-label">
                            OG Title
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.og_title_en"
                            placeholder=""
                        />
                        <div v-if="form.errors.og_title_en" class="form-error">{{ form.errors.og_title_en }}</div>
                    </div>

                    <!-- Hreflang -->
                    <div class="form-group">
                        <label class="form-label">
                            Hreflang
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.hreflang_en"
                            placeholder=""
                        />
                        <div v-if="form.errors.hreflang_en" class="form-error">{{ form.errors.hreflang_en }}</div>
                    </div>

                    <!-- Meta Description -->
                    <div class="form-group">
                        <label class="form-label">
                            Meta Description
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <textarea 
                            class="form-textarea" 
                            v-model="form.meta_description_en"
                            placeholder=""
                            rows="4"
                        ></textarea>
                        <div v-if="form.errors.meta_description_en" class="form-error">{{ form.errors.meta_description_en }}</div>
                    </div>

                    <!-- OG Description -->
                    <div class="form-group">
                        <label class="form-label">
                            OG Description
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <textarea 
                            class="form-textarea" 
                            v-model="form.og_description_en"
                            placeholder=""
                            rows="4"
                        ></textarea>
                        <div v-if="form.errors.og_description_en" class="form-error">{{ form.errors.og_description_en }}</div>
                    </div>

                    <!-- OG Image -->
                    <div class="form-group">
                        <label class="form-label">
                            OG Image
                            <img :src="usFlag" alt="US" class="label-flag" />
                        </label>
                        <div 
                            class="upload-area"
                            @drop="handleDrop($event, 'en')"
                            @dragover="handleDragOver"
                            @click="$refs.fileInputEn.click()"
                        >
                            <input 
                                type="file" 
                                ref="fileInputEn"
                                class="hidden-input"
                                accept="image/*"
                                @change="handleImageUpload($event, 'en')"
                            />
                            <div v-if="ogImageEnPreview" class="image-preview">
                                <img :src="ogImageEnPreview" alt="Preview" />
                            </div>
                            <div v-else class="upload-placeholder">
                                <svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="upload-text">Drop files here or click to upload.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Arabic Column (Right) -->
                <div class="form-column">
                    <!-- Page Name -->
                    <div class="form-group">
                        <label class="form-label">
                            Page Name
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.name_ar"
                            placeholder=""
                        />
                        <div v-if="form.errors.name_ar" class="form-error">{{ form.errors.name_ar }}</div>
                    </div>

                    <!-- URL Slug -->
                    <div class="form-group">
                        <label class="form-label">
                            URL Slug
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.url_slug_ar"
                            @input="handleArabicSlugInput"
                            @blur="handleArabicSlugBlur"
                            placeholder="يتم-إنشاؤها-تلقائيا-من-اسم-الصفحة"
                            dir="rtl"
                        />
                        <div class="form-hint">Arabic slug with readable Arabic characters.</div>
                        <div v-if="form.errors.url_slug_ar" class="form-error">{{ form.errors.url_slug_ar }}</div>
                    </div>

                    <!-- Meta Title -->
                    <div class="form-group">
                        <label class="form-label">
                            Meta Title
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.meta_title_ar"
                            placeholder=""
                        />
                        <div v-if="form.errors.meta_title_ar" class="form-error">{{ form.errors.meta_title_ar }}</div>
                    </div>

                    <!-- H1 Title -->
                    <div class="form-group">
                        <label class="form-label">
                            H1 Title
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.h1_title_ar"
                            placeholder=""
                        />
                        <div v-if="form.errors.h1_title_ar" class="form-error">{{ form.errors.h1_title_ar }}</div>
                    </div>

                    <!-- OG Title -->
                    <div class="form-group">
                        <label class="form-label">
                            OG Title
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.og_title_ar"
                            placeholder=""
                        />
                        <div v-if="form.errors.og_title_ar" class="form-error">{{ form.errors.og_title_ar }}</div>
                    </div>

                    <!-- Hreflang -->
                    <div class="form-group">
                        <label class="form-label">
                            Hreflang
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <input 
                            type="text" 
                            class="form-input" 
                            v-model="form.hreflang_ar"
                            placeholder=""
                        />
                        <div v-if="form.errors.hreflang_ar" class="form-error">{{ form.errors.hreflang_ar }}</div>
                    </div>

                    <!-- Meta Description -->
                    <div class="form-group">
                        <label class="form-label">
                            Meta Description
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <textarea 
                            class="form-textarea" 
                            v-model="form.meta_description_ar"
                            placeholder=""
                            rows="4"
                        ></textarea>
                        <div v-if="form.errors.meta_description_ar" class="form-error">{{ form.errors.meta_description_ar }}</div>
                    </div>

                    <!-- OG Description -->
                    <div class="form-group">
                        <label class="form-label">
                            OG Description
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <textarea 
                            class="form-textarea" 
                            v-model="form.og_description_ar"
                            placeholder=""
                            rows="4"
                        ></textarea>
                        <div v-if="form.errors.og_description_ar" class="form-error">{{ form.errors.og_description_ar }}</div>
                    </div>

                    <!-- OG Image -->
                    <div class="form-group">
                        <label class="form-label">
                            OG Image
                            <img :src="saFlag" alt="SA" class="label-flag" />
                        </label>
                        <div 
                            class="upload-area"
                            @drop="handleDrop($event, 'ar')"
                            @dragover="handleDragOver"
                            @click="$refs.fileInputAr.click()"
                        >
                            <input 
                                type="file" 
                                ref="fileInputAr"
                                class="hidden-input"
                                accept="image/*"
                                @change="handleImageUpload($event, 'ar')"
                            />
                            <div v-if="ogImageArPreview" class="image-preview">
                                <img :src="ogImageArPreview" alt="Preview" />
                            </div>
                            <div v-else class="upload-placeholder">
                                <svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="upload-text">Drop files here or click to upload.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form Actions -->
            <div class="form-actions">
                <button class="btn-cancel" @click="cancel" :disabled="form.processing">
                    <svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Cancel
                </button>
                <button class="btn-save" @click="save" :disabled="form.processing">
                    <svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{ form.processing ? 'Saving...' : 'Save' }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.add-new-page {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-container {
    padding: 24px;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.form-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-dark);
}

.label-flag {
    width: 20px;
    height: 20px;
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    transition: border-color var(--transition-fast);
}

.form-input:focus {
    outline: none;
    border-color: var(--color-primary);
}

.form-textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    resize: vertical;
    min-height: 100px;
    transition: border-color var(--transition-fast);
}

.form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.upload-area {
    border: 1px dashed var(--color-border);
    border-radius: 6px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color var(--transition-fast), background-color var(--transition-fast);
    min-height: 120px;
}

.upload-area:hover {
    border-color: var(--color-primary);
    background-color: var(--color-secondary);
}

.hidden-input {
    display: none;
}

.upload-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.upload-icon {
    width: 48px;
    height: 48px;
    color: var(--color-text-muted);
}

.upload-text {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--color-text-muted);
}

.image-preview {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-preview img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
    border-radius: 4px;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--color-border-light);
}

.btn-cancel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid #E3ECEB;
    border-radius: 6px;
    background-color: #E3ECEB;
    color: var(--color-text-dark);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.btn-cancel:hover {
    background-color: #d4e0df;
    border-color: #d4e0df;
    color: var(--color-text-dark);
}

.btn-save {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.btn-save:hover {
    background-color: #003D3A;
}

.btn-icon-svg {
    width: 16px;
    height: 16px;
}

.form-error {
    color: var(--color-danger);
    font-size: 12px;
    margin-top: 4px;
}

.form-hint {
    color: var(--color-text-muted);
    font-size: 12px;
    margin-top: 4px;
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Responsive */
@media (max-width: 1024px) {
    .form-grid {
        grid-template-columns: 1fr;
    }
}
</style>
