<script setup>
import { ref, computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const storageConfig = computed(() => page.props.storage);

const file = ref(null);
const uploading = ref(false);
const result = ref(null);
const error = ref(null);
const testResults = ref([]);

const handleFileSelect = (event) => {
    file.value = event.target.files[0];
    result.value = null;
    error.value = null;
};

const uploadImage = async () => {
    if (!file.value) {
        error.value = 'Please select a file first';
        return;
    }

    uploading.value = true;
    error.value = null;
    result.value = null;

    const formData = new FormData();
    formData.append('image', file.value);
    formData.append('section_type', 'test-upload');
    formData.append('size', 'original');

    try {
        const response = await window.axios.post(route('media.upload.image'), formData);
        result.value = response.data;
        testResults.value.unshift({
            success: true,
            timestamp: new Date().toLocaleTimeString(),
            data: response.data,
        });
    } catch (err) {
        error.value = err.response?.data?.message || err.message || 'Upload failed';
        testResults.value.unshift({
            success: false,
            timestamp: new Date().toLocaleTimeString(),
            error: error.value,
        });
    } finally {
        uploading.value = false;
    }
};

const deleteTestImage = async (path) => {
    try {
        await window.axios.delete(route('media.delete'), {
            data: { path },
        });
        testResults.value = testResults.value.filter(r => r.data?.path !== path);
    } catch (err) {
        error.value = 'Delete failed: ' + (err.response?.data?.message || err.message);
    }
};
</script>

<template>
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="bg-white shadow rounded-lg p-6">
                <h1 class="text-2xl font-bold text-gray-900 mb-6">
                    OCI Storage Test
                </h1>

                <!-- Storage Status -->
                <div class="mb-6 p-4 rounded-lg" :class="storageConfig?.isCloud ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'">
                    <div class="flex items-center gap-2">
                        <span class="text-lg">{{ storageConfig?.isCloud ? '☁️' : '💾' }}</span>
                        <div>
                            <p class="font-medium" :class="storageConfig?.isCloud ? 'text-green-800' : 'text-yellow-800'">
                                {{ storageConfig?.isCloud ? 'Using OCI Cloud Storage' : 'Using Local Storage' }}
                            </p>
                            <p class="text-sm text-gray-600">
                                Base URL: {{ storageConfig?.baseUrl }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Upload Form -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Select Image to Upload
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        @change="handleFileSelect"
                        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                <button
                    @click="uploadImage"
                    :disabled="!file || uploading"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span v-if="uploading" class="flex items-center gap-2">
                        <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                    </span>
                    <span v-else>Upload Test Image</span>
                </button>

                <!-- Error Message -->
                <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p class="text-red-800">{{ error }}</p>
                </div>

                <!-- Success Result -->
                <div v-if="result" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p class="text-green-800 font-medium mb-2">✓ Upload Successful!</p>
                    <div class="space-y-2 text-sm">
                        <p><strong>Path:</strong> {{ result.path }}</p>
                        <p><strong>URL:</strong> <a :href="result.url" target="_blank" class="text-blue-600 hover:underline break-all">{{ result.url }}</a></p>
                        <p><strong>Size:</strong> {{ (result.size / 1024).toFixed(2) }} KB</p>
                        <p v-if="result.width && result.height"><strong>Dimensions:</strong> {{ result.width }}x{{ result.height }}</p>
                    </div>
                    <div class="mt-3">
                        <img :src="result.url" alt="Uploaded" class="max-w-full h-auto max-h-48 rounded border" />
                    </div>
                </div>

                <!-- Test History -->
                <div v-if="testResults.length > 0" class="mt-8">
                    <h2 class="text-lg font-medium text-gray-900 mb-4">Upload History</h2>
                    <div class="space-y-3">
                        <div
                            v-for="(test, index) in testResults"
                            :key="index"
                            class="p-3 rounded-lg border text-sm"
                            :class="test.success ? 'bg-gray-50 border-gray-200' : 'bg-red-50 border-red-200'"
                        >
                            <div class="flex justify-between items-start">
                                <div>
                                    <span class="text-gray-500">{{ test.timestamp }}</span>
                                    <span v-if="test.success" class="ml-2 text-green-600">✓</span>
                                    <span v-else class="ml-2 text-red-600">✗ {{ test.error }}</span>
                                </div>
                                <button
                                    v-if="test.success && test.data?.path"
                                    @click="deleteTestImage(test.data.path)"
                                    class="text-red-600 hover:text-red-800 text-xs"
                                >
                                    Delete
                                </button>
                            </div>
                            <div v-if="test.success && test.data" class="mt-2 flex items-center gap-3">
                                <img :src="test.data.url" alt="" class="w-12 h-12 object-cover rounded" />
                                <a :href="test.data.url" target="_blank" class="text-blue-600 hover:underline text-xs break-all">
                                    {{ test.data.path }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Instructions -->
                <div class="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                    <h3 class="font-medium text-gray-900 mb-2">How to test:</h3>
                    <ol class="list-decimal list-inside space-y-1">
                        <li>Check the storage status above (Local vs OCI Cloud)</li>
                        <li>Select an image file</li>
                        <li>Click "Upload Test Image"</li>
                        <li>Verify the image loads from the URL</li>
                        <li>If using OCI, the URL should point to OCI Object Storage</li>
                    </ol>
                    <p class="mt-3">
                        <strong>To switch storage:</strong> Set <code class="bg-gray-200 px-1 rounded">STORAGE_DISK=oci</code> in .env
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
