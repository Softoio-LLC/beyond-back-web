<script setup>
import { ref, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';

defineOptions({ layout: DashboardLayout });

const props = defineProps({
    config: {
        type: Object,
        default: () => ({}),
    },
    cmsFiles: {
        type: Object,
        default: () => ({ count: 0, total_size: '0 B' }),
    },
    staticFiles: {
        type: Object,
        default: () => ({ count: 0, total_size: '0 B' }),
    },
    storageLogs: {
        type: Array,
        default: () => [],
    },
});

const page = usePage();
const flash = computed(() => page.props.flash || {});
const errors = computed(() => page.props.errors || {});

// Disk switch state
const isSwitchingDisk = ref(false);
const selectedDisk = ref(props.config.active_disk || 'public');

const switchDisk = (disk) => {
    if (disk === props.config.active_disk || isSwitchingDisk.value) return;
    
    const label = disk === 'oci' ? 'OCI Object Storage' : 'Local Storage';
    if (!confirm(`Switch active storage to ${label}? New uploads will use the selected disk.`)) {
        selectedDisk.value = props.config.active_disk;
        return;
    }
    
    isSwitchingDisk.value = true;
    router.put(route('settings.storage.disk.update'), { disk }, {
        preserveScroll: true,
        onSuccess: () => {
            selectedDisk.value = disk;
        },
        onError: () => {
            selectedDisk.value = props.config.active_disk;
        },
        onFinish: () => {
            isSwitchingDisk.value = false;
        },
    });
};

// Connection test state
const isTestingConnection = ref(false);
const connectionResult = ref(null);

// Dry run state
const isRunningDryRun = ref(false);
const dryRunResult = ref(null);

// Migration state
const isRunningMigration = ref(false);
const migrationResult = ref(null);
const showMigrationConfirm = ref(false);

const testConnection = async () => {
    isTestingConnection.value = true;
    connectionResult.value = null;

    try {
        const { data } = await window.axios.post(route('settings.storage.test-connection'));
        connectionResult.value = data;
    } catch (e) {
        connectionResult.value = {
            success: false,
            message: e.response?.data?.message || 'Request failed: ' + e.message,
        };
    } finally {
        isTestingConnection.value = false;
    }
};

const runDryRun = async () => {
    isRunningDryRun.value = true;
    dryRunResult.value = null;
    showMigrationConfirm.value = false;
    migrationResult.value = null;

    try {
        const { data } = await window.axios.post(route('settings.storage.dry-run'));
        dryRunResult.value = data;
        if (dryRunResult.value.success && dryRunResult.value.summary?.count > 0) {
            showMigrationConfirm.value = true;
        }
    } catch (e) {
        dryRunResult.value = {
            success: false,
            message: e.response?.data?.message || 'Request failed: ' + e.message,
        };
    } finally {
        isRunningDryRun.value = false;
    }
};

const runMigration = async () => {
    isRunningMigration.value = true;
    migrationResult.value = null;
    showMigrationConfirm.value = false;

    try {
        const { data } = await window.axios.post(route('settings.storage.migrate'));
        migrationResult.value = data;
    } catch (e) {
        migrationResult.value = {
            success: false,
            message: e.response?.data?.message || 'Request failed: ' + e.message,
        };
    } finally {
        isRunningMigration.value = false;
    }
};

const isClearingLogs = ref(false);

const clearLogs = () => {
    if (!confirm('Clear all storage logs?')) {
        return;
    }
    isClearingLogs.value = true;
    router.delete(route('settings.storage.logs.clear'), {
        preserveScroll: true,
        onFinish: () => {
            isClearingLogs.value = false;
        },
    });
};

const formatLogTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
};

const logLevelClass = (level) => {
    return {
        error: 'log-error',
        warning: 'log-warning',
        info: 'log-info',
    }[level] || 'log-info';
};

const logLevelLabel = (level) => {
    return {
        error: 'ERROR',
        warning: 'FALLBACK',
        info: 'INFO',
    }[level] || level.toUpperCase();
};

const hasWarningsOrErrors = () => {
    return props.storageLogs.some(log => log.level === 'warning' || log.level === 'error');
};
</script>

<template>
    <div class="settings-page">
        <div class="page-header">
            <div class="header-content">
                <h1 class="page-title">Storage Settings</h1>
                <p class="page-subtitle">
                    Manage OCI Object Storage connection and migrate files from local storage to the cloud bucket.
                </p>
            </div>
        </div>

        <!-- OCI Configuration Overview -->
        <div class="settings-form">
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">Active Storage Disk</h2>
                    <p class="section-description">Choose where new file uploads are stored. Existing files remain on their current disk.</p>
                </div>

                <!-- Flash messages -->
                <div v-if="flash.success" class="result-banner success" style="margin-bottom: 1rem;">
                    {{ flash.success }}
                </div>
                <div v-if="errors.disk" class="result-banner error" style="margin-bottom: 1rem;">
                    {{ errors.disk }}
                </div>

                <div class="disk-switch">
                    <button
                        type="button"
                        class="disk-option"
                        :class="{ active: selectedDisk === 'public', disabled: isSwitchingDisk }"
                        :disabled="isSwitchingDisk"
                        @click="switchDisk('public')"
                    >
                        <div class="disk-option-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </div>
                        <div class="disk-option-text">
                            <span class="disk-option-title">Local Storage</span>
                            <span class="disk-option-desc">Files stored on server disk</span>
                        </div>
                        <span v-if="selectedDisk === 'public'" class="disk-active-badge">Active</span>
                    </button>

                    <button
                        type="button"
                        class="disk-option"
                        :class="{ active: selectedDisk === 'oci', disabled: isSwitchingDisk || !config.has_credentials }"
                        :disabled="isSwitchingDisk || !config.has_credentials"
                        @click="switchDisk('oci')"
                    >
                        <div class="disk-option-icon cloud">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                            </svg>
                        </div>
                        <div class="disk-option-text">
                            <span class="disk-option-title">OCI Object Storage</span>
                            <span class="disk-option-desc">{{ config.has_credentials ? config.bucket || 'Cloud bucket' : 'Credentials not configured' }}</span>
                        </div>
                        <span v-if="selectedDisk === 'oci'" class="disk-active-badge">Active</span>
                        <span v-else-if="!config.has_credentials" class="disk-disabled-badge">No Credentials</span>
                    </button>
                </div>
                <p v-if="isSwitchingDisk" class="switching-text">Switching disk...</p>
            </div>

            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">OCI Configuration</h2>
                    <p class="section-description">Current Object Storage configuration from environment.</p>
                </div>
                <div class="config-grid">
                    <div class="config-item">
                        <span class="config-label">Credentials</span>
                        <span class="config-value" :class="config.has_credentials ? 'text-success' : 'text-danger'">
                            {{ config.has_credentials ? 'Configured' : 'Not configured' }}
                        </span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Region</span>
                        <span class="config-value">{{ config.region || '—' }}</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Bucket</span>
                        <span class="config-value">{{ config.bucket || '—' }}</span>
                    </div>
                    <div class="config-item full-width">
                        <span class="config-label">Endpoint</span>
                        <span class="config-value config-endpoint">{{ config.endpoint || '—' }}</span>
                    </div>
                </div>
            </div>

            <!-- Connection Test -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">Test Connection</h2>
                    <p class="section-description">Verify that the OCI credentials and bucket are accessible.</p>
                </div>
                <div class="action-row">
                    <button
                        type="button"
                        class="btn-primary"
                        :disabled="isTestingConnection || !config.has_credentials"
                        @click="testConnection"
                    >
                        <span v-if="isTestingConnection">Testing...</span>
                        <span v-else>Test Connection</span>
                    </button>
                    <span v-if="!config.has_credentials" class="help-text">
                        Set OCI_ACCESS_KEY_ID and OCI_SECRET_ACCESS_KEY in .env first.
                    </span>
                </div>
                <Transition name="fade">
                    <div v-if="connectionResult" class="result-banner" :class="connectionResult.success ? 'success' : 'error'">
                        {{ connectionResult.message }}
                    </div>
                </Transition>
            </div>

            <!-- Local Files Info -->
            <div class="form-section">
                <div class="section-header">
                    <h2 class="section-title">Local Storage</h2>
                    <p class="section-description">Files currently stored locally that can be migrated to OCI.</p>
                </div>

                <h3 class="subsection-title">CMS Uploads <span class="subsection-hint">storage/app/public</span></h3>
                <div class="config-grid">
                    <div class="config-item">
                        <span class="config-label">File Count</span>
                        <span class="config-value">{{ cmsFiles.count }}</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Total Size</span>
                        <span class="config-value">{{ cmsFiles.total_size }}</span>
                    </div>
                </div>

                <h3 class="subsection-title" style="margin-top: 1.25rem;">Static Assets <span class="subsection-hint">public/assets/img</span></h3>
                <div class="config-grid">
                    <div class="config-item">
                        <span class="config-label">File Count</span>
                        <span class="config-value">{{ staticFiles.count }}</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Total Size</span>
                        <span class="config-value">{{ staticFiles.total_size }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Migration Section -->
        <div class="form-section migration-section">
            <div class="section-header">
                <h2 class="section-title">Migrate to OCI</h2>
                <p class="section-description">
                    Preview files to migrate, then confirm to upload them to OCI Object Storage.
                    Existing files on OCI will be skipped.
                </p>
            </div>

            <!-- Step 1: Dry Run -->
            <div class="migration-step">
                <div class="step-header">
                    <span class="step-number">1</span>
                    <span class="step-title">Preview (Dry Run)</span>
                </div>
                <button
                    type="button"
                    class="btn-secondary"
                    :disabled="isRunningDryRun || !config.has_credentials"
                    @click="runDryRun"
                >
                    <span v-if="isRunningDryRun">Scanning files...</span>
                    <span v-else>Run Dry Run</span>
                </button>
            </div>

            <!-- Dry Run Results -->
            <Transition name="fade">
                <div v-if="dryRunResult" class="dry-run-results">
                    <div class="result-banner" :class="dryRunResult.success ? 'success' : 'error'">
                        {{ dryRunResult.message }}
                    </div>
                    <div v-if="dryRunResult.summary && dryRunResult.summary.count > 0" class="summary-row">
                        <span><strong>{{ dryRunResult.summary.count }}</strong> files</span>
                        <span>·</span>
                        <span><strong>{{ dryRunResult.summary.total_size }}</strong> total</span>
                        <span v-if="dryRunResult.summary.showing < dryRunResult.summary.count">
                            · Showing first {{ dryRunResult.summary.showing }}
                        </span>
                    </div>
                    <div v-if="dryRunResult.files && dryRunResult.files.length > 0" class="file-table-wrapper">
                        <table class="file-table">
                            <thead>
                                <tr>
                                    <th>File</th>
                                    <th>Source</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="file in dryRunResult.files" :key="file.path">
                                    <td class="file-path">{{ file.path }}</td>
                                    <td class="file-source">
                                        <span class="source-badge" :class="file.source">{{ file.source === 'cms' ? 'CMS' : 'Static' }}</span>
                                    </td>
                                    <td class="file-size">{{ file.size }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Transition>

            <!-- Step 2: Confirm & Migrate -->
            <Transition name="fade">
                <div v-if="showMigrationConfirm" class="migration-step">
                    <div class="step-header">
                        <span class="step-number">2</span>
                        <span class="step-title">Confirm & Migrate</span>
                    </div>
                    <div class="confirm-box">
                        <p class="confirm-text">
                            Ready to upload <strong>{{ dryRunResult?.summary?.count }}</strong> files
                            (<strong>{{ dryRunResult?.summary?.total_size }}</strong>) to OCI.
                            Existing files on OCI will be skipped.
                        </p>
                        <button
                            type="button"
                            class="btn-danger"
                            :disabled="isRunningMigration"
                            @click="runMigration"
                        >
                            <span v-if="isRunningMigration">Migrating...</span>
                            <span v-else>Start Migration</span>
                        </button>
                    </div>
                </div>
            </Transition>

            <!-- Migration Result -->
            <Transition name="fade">
                <div v-if="migrationResult" class="migration-output">
                    <div class="result-banner" :class="migrationResult.success ? 'success' : 'error'">
                        {{ migrationResult.message }}
                    </div>
                    <pre v-if="migrationResult.output" class="output-pre">{{ migrationResult.output }}</pre>
                </div>
            </Transition>
        </div>

        <!-- Alert Banner for active fallback issues -->
        <div v-if="hasWarningsOrErrors()" class="alert-banner">
            <svg class="alert-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
            </svg>
            <div class="alert-content">
                <strong>Storage Fallback Active</strong>
                <p>Some uploads failed on the configured bucket and were saved to local storage instead. Check the logs below for details.</p>
            </div>
        </div>

        <!-- Storage Logs Section -->
        <div class="form-section logs-section">
            <div class="section-header">
                <div class="logs-header-row">
                    <div>
                        <h2 class="section-title">Storage Logs</h2>
                        <p class="section-description">Recent storage events, errors, and fallback activity.</p>
                    </div>
                    <button
                        v-if="storageLogs.length > 0"
                        type="button"
                        class="btn-secondary btn-sm"
                        :disabled="isClearingLogs"
                        @click="clearLogs"
                    >
                        {{ isClearingLogs ? 'Clearing...' : 'Clear Logs' }}
                    </button>
                </div>
            </div>

            <div v-if="storageLogs.length === 0" class="empty-logs">
                <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>No storage issues logged. Everything is running smoothly.</p>
            </div>

            <div v-else class="logs-list">
                <div v-for="log in storageLogs" :key="log.id" class="log-entry" :class="logLevelClass(log.level)">
                    <div class="log-header">
                        <span class="log-badge" :class="logLevelClass(log.level)">{{ logLevelLabel(log.level) }}</span>
                        <span class="log-action">{{ log.action }}</span>
                        <span class="log-time">{{ formatLogTime(log.created_at) }}</span>
                    </div>
                    <div v-if="log.file_path" class="log-file">
                        <span class="log-label">File:</span> {{ log.file_path }}
                    </div>
                    <div class="log-disks">
                        <span class="log-label">Tried:</span> <code>{{ log.disk_attempted }}</code>
                        <span v-if="log.disk_attempted !== log.disk_used" class="log-arrow">→</span>
                        <span v-if="log.disk_attempted !== log.disk_used">
                            <span class="log-label">Used:</span> <code>{{ log.disk_used }}</code>
                        </span>
                    </div>
                    <div v-if="log.error_message" class="log-error-msg">
                        {{ log.error_message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.settings-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
}

.page-header {
    margin-bottom: 2rem;
}

.page-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
}

.page-subtitle {
    color: #6b7280;
    font-size: 0.95rem;
}

.settings-form {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.form-section {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.form-section:last-child {
    border-bottom: none;
}

.migration-section {
    background: #f9fafb;
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
}

.section-header {
    margin-bottom: 1.25rem;
}

.section-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
}

.section-description {
    color: #6b7280;
    font-size: 0.875rem;
}

.config-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.config-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.config-item.full-width {
    grid-column: span 2;
}

.config-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.config-value {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
}

.config-endpoint {
    word-break: break-all;
    font-size: 0.8rem;
}

.text-success {
    color: #059669;
}

.text-danger {
    color: #dc2626;
}

.text-muted {
    color: #6b7280;
}

.subsection-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.subsection-hint {
    font-size: 0.7rem;
    font-weight: 400;
    color: #9ca3af;
    font-family: monospace;
}

.source-badge {
    display: inline-block;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.7rem;
    font-weight: 500;
}

.source-badge.cms {
    background: #dbeafe;
    color: #1e40af;
}

.source-badge.static {
    background: #fef3c7;
    color: #92400e;
}

.file-source {
    white-space: nowrap;
}

.action-row {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.help-text {
    font-size: 0.8rem;
    color: #9ca3af;
}

.result-banner {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin-top: 1rem;
}

.result-banner.success {
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    color: #065f46;
}

.result-banner.error {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
}

.btn-primary,
.btn-secondary,
.btn-danger {
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    border: none;
}

.btn-primary {
    background: #0d6d70;
    color: #fff;
}

.btn-primary:hover:not(:disabled) {
    background: #0a5a5c;
}

.btn-secondary {
    background: #fff;
    color: #374151;
    border: 1px solid #d1d5db;
}

.btn-secondary:hover:not(:disabled) {
    background: #f9fafb;
}

.btn-danger {
    background: #dc2626;
    color: #fff;
}

.btn-danger:hover:not(:disabled) {
    background: #b91c1c;
}

.btn-primary:disabled,
.btn-secondary:disabled,
.btn-danger:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.migration-step {
    margin-top: 1.5rem;
}

.step-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.step-number {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #0d6d70;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    flex-shrink: 0;
}

.step-title {
    font-weight: 600;
    color: #111827;
}

.dry-run-results {
    margin-top: 1rem;
}

.summary-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: #374151;
}

.file-table-wrapper {
    margin-top: 0.75rem;
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
}

.file-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;
}

.file-table thead {
    position: sticky;
    top: 0;
    background: #f9fafb;
}

.file-table th {
    padding: 0.5rem 0.75rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
}

.file-table td {
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #f3f4f6;
}

.file-path {
    word-break: break-all;
    color: #374151;
}

.file-size {
    white-space: nowrap;
    color: #6b7280;
    text-align: right;
}

.confirm-box {
    background: #fffbeb;
    border: 1px solid #fde68a;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.confirm-text {
    font-size: 0.875rem;
    color: #92400e;
    margin: 0;
}

.migration-output {
    margin-top: 1rem;
}

.output-pre {
    background: #1f2937;
    color: #e5e7eb;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.5;
    overflow-x: auto;
    margin-top: 0.75rem;
    white-space: pre-wrap;
    word-break: break-word;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 640px) {
    .config-grid {
        grid-template-columns: 1fr;
    }
    .config-item.full-width {
        grid-column: span 1;
    }
    .confirm-box {
        flex-direction: column;
        align-items: flex-start;
    }
    .logs-header-row {
        flex-direction: column;
        gap: 0.75rem;
    }
    .disk-switch {
        flex-direction: column;
    }
}

/* Disk Switch */
.disk-switch {
    display: flex;
    gap: 1rem;
}

.disk-option {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
}

.disk-option:hover:not(:disabled):not(.active) {
    border-color: #9ca3af;
    background: #f9fafb;
}

.disk-option.active {
    border-color: #0d6d70;
    background: #f0fdfa;
}

.disk-option.disabled,
.disk-option:disabled {
    opacity: 0.55;
    cursor: not-allowed;
}

.disk-option-icon {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background: #f3f4f6;
    color: #6b7280;
    flex-shrink: 0;
}

.disk-option.active .disk-option-icon {
    background: #ccfbf1;
    color: #0d6d70;
}

.disk-option-icon.cloud {
    color: #3b82f6;
}

.disk-option.active .disk-option-icon.cloud {
    background: #ccfbf1;
    color: #0d6d70;
}

.disk-option-icon svg {
    width: 1.25rem;
    height: 1.25rem;
}

.disk-option-text {
    flex: 1;
    min-width: 0;
}

.disk-option-title {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
}

.disk-option-desc {
    display: block;
    font-size: 0.75rem;
    color: #6b7280;
    margin-top: 0.125rem;
}

.disk-active-badge {
    padding: 0.2rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.65rem;
    font-weight: 600;
    background: #ccfbf1;
    color: #0d6d70;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.disk-disabled-badge {
    padding: 0.2rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.65rem;
    font-weight: 600;
    background: #fef2f2;
    color: #dc2626;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.switching-text {
    font-size: 0.8rem;
    color: #6b7280;
    margin-top: 0.5rem;
    font-style: italic;
}

/* Alert Banner */
.alert-banner {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-top: 2rem;
    padding: 1rem 1.25rem;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 0.75rem;
}

.alert-icon {
    width: 22px;
    height: 22px;
    color: #dc2626;
    flex-shrink: 0;
    margin-top: 1px;
}

.alert-content {
    font-size: 0.875rem;
    color: #991b1b;
}

.alert-content strong {
    display: block;
    margin-bottom: 0.25rem;
}

.alert-content p {
    margin: 0;
    color: #b91c1c;
}

/* Logs Section */
.logs-section {
    background: #fff;
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
}

.logs-header-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
}

.btn-sm {
    padding: 0.375rem 0.875rem;
    font-size: 0.8rem;
}

.empty-logs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem;
    color: #9ca3af;
    text-align: center;
}

.empty-icon {
    width: 36px;
    height: 36px;
    color: #a7f3d0;
}

.empty-logs p {
    margin: 0;
    font-size: 0.875rem;
}

.logs-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-height: 500px;
    overflow-y: auto;
}

.log-entry {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border-left: 3px solid transparent;
    font-size: 0.8rem;
}

.log-entry.log-error {
    background: #fef2f2;
    border-left-color: #dc2626;
}

.log-entry.log-warning {
    background: #fffbeb;
    border-left-color: #f59e0b;
}

.log-entry.log-info {
    background: #f0fdf4;
    border-left-color: #22c55e;
}

.log-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.375rem;
}

.log-badge {
    display: inline-block;
    padding: 0.1rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.025em;
}

.log-badge.log-error {
    background: #fecaca;
    color: #991b1b;
}

.log-badge.log-warning {
    background: #fde68a;
    color: #92400e;
}

.log-badge.log-info {
    background: #bbf7d0;
    color: #166534;
}

.log-action {
    font-weight: 600;
    color: #374151;
}

.log-time {
    margin-left: auto;
    color: #9ca3af;
    font-size: 0.75rem;
    white-space: nowrap;
}

.log-file {
    color: #374151;
    word-break: break-all;
    margin-bottom: 0.25rem;
}

.log-disks {
    color: #6b7280;
    margin-bottom: 0.25rem;
}

.log-disks code {
    background: rgba(0, 0, 0, 0.05);
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
    font-size: 0.75rem;
}

.log-arrow {
    margin: 0 0.25rem;
    color: #d1d5db;
}

.log-label {
    font-weight: 500;
    color: #6b7280;
}

.log-error-msg {
    color: #991b1b;
    font-family: monospace;
    font-size: 0.75rem;
    background: rgba(0, 0, 0, 0.03);
    padding: 0.375rem 0.5rem;
    border-radius: 0.25rem;
    word-break: break-word;
}
</style>
