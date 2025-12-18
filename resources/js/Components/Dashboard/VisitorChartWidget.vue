<script setup>
import { computed } from 'vue';

const props = defineProps({
    analytics: {
        type: Object,
        default: () => ({}),
    },
    gaEnabled: {
        type: Boolean,
        default: false,
    },
    gaMeasurementId: {
        type: String,
        default: '',
    },
});

const chartData = computed(() => props.analytics.chart_data || {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    visitors: [0, 0, 0, 0, 0, 0, 0],
    pageviews: [0, 0, 0, 0, 0, 0, 0],
});

const summary = computed(() => props.analytics.summary || {
    total_visitors: 0,
    total_pageviews: 0,
    avg_session_duration: '0m 0s',
    bounce_rate: '0%',
});

const isPlaceholder = computed(() => !props.gaEnabled || props.analytics.placeholder);

// Calculate max value for chart scaling
const maxValue = computed(() => {
    const allValues = [...chartData.value.visitors, ...chartData.value.pageviews];
    return Math.max(...allValues, 1);
});

// Calculate bar height as percentage
const getBarHeight = (value) => {
    return (value / maxValue.value) * 100;
};
</script>

<template>
    <div class="visitor-chart-widget">
        <div class="widget-header">
            <div class="widget-title-section">
                <h3 class="widget-title">Visitor Analytics</h3>
                <span v-if="isPlaceholder" class="placeholder-badge">Placeholder Data</span>
                <span v-else class="live-badge">
                    <span class="live-dot"></span>
                    Live
                </span>
            </div>
            <div class="widget-period">Last 7 days</div>
        </div>

        <!-- Summary Stats -->
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">{{ summary.total_visitors.toLocaleString() }}</div>
                <div class="stat-label">Total Visitors</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">{{ summary.total_pageviews.toLocaleString() }}</div>
                <div class="stat-label">Page Views</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">{{ summary.avg_session_duration }}</div>
                <div class="stat-label">Avg. Duration</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">{{ summary.bounce_rate }}</div>
                <div class="stat-label">Bounce Rate</div>
            </div>
        </div>

        <!-- Chart -->
        <div class="chart-container">
            <div class="chart-legend">
                <div class="legend-item">
                    <span class="legend-color legend-visitors"></span>
                    <span class="legend-text">Visitors</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color legend-pageviews"></span>
                    <span class="legend-text">Page Views</span>
                </div>
            </div>
            
            <div class="chart">
                <div class="chart-bars">
                    <div 
                        v-for="(label, index) in chartData.labels" 
                        :key="label" 
                        class="chart-bar-group"
                    >
                        <div class="bars">
                            <div 
                                class="bar bar-visitors" 
                                :style="{ height: getBarHeight(chartData.visitors[index]) + '%' }"
                                :title="`Visitors: ${chartData.visitors[index]}`"
                            ></div>
                            <div 
                                class="bar bar-pageviews" 
                                :style="{ height: getBarHeight(chartData.pageviews[index]) + '%' }"
                                :title="`Page Views: ${chartData.pageviews[index]}`"
                            ></div>
                        </div>
                        <div class="bar-label">{{ label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.visitor-chart-widget {
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.widget-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.widget-title-section {
    display: flex;
    align-items: center;
    gap: 12px;
}

.widget-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text-dark);
    margin: 0;
}

.placeholder-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background-color: #FEF3C7;
    color: #92400E;
    font-size: 11px;
    font-weight: 500;
    border-radius: 12px;
}

.live-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background-color: #D1FAE5;
    color: #065F46;
    font-size: 11px;
    font-weight: 500;
    border-radius: 12px;
}

.live-dot {
    width: 6px;
    height: 6px;
    background-color: #10B981;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.widget-period {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: var(--color-text-muted);
}

/* GA Notice */
.ga-notice {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 16px;
    background-color: #FEF3C7;
    border-radius: 8px;
    margin-bottom: 20px;
}

.ga-notice-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: #92400E;
}

.ga-notice-icon svg {
    width: 100%;
    height: 100%;
}

.ga-notice-content {
    flex: 1;
}

.ga-notice-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #92400E;
    margin: 0 0 4px 0;
}

.ga-notice-text {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #A16207;
    margin: 0;
    line-height: 1.5;
}

.ga-notice-text code {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 11px;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
}

.stat-item {
    text-align: center;
    padding: 16px;
    background-color: var(--color-bg-main);
    border-radius: 8px;
}

.stat-value {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: var(--color-text-dark);
    margin-bottom: 4px;
}

.stat-label {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: var(--color-text-muted);
}

/* Chart */
.chart-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.chart-legend {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 16px;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
}

.legend-visitors {
    background-color: var(--color-primary, #004F4C);
}

.legend-pageviews {
    background-color: #93C5FD;
}

.legend-text {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: var(--color-text-muted);
}

.chart {
    flex: 1;
    min-height: 150px;
}

.chart-bars {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    padding-top: 20px;
}

.chart-bar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 80px;
}

.bars {
    display: flex;
    gap: 4px;
    align-items: flex-end;
    height: 120px;
    width: 100%;
    justify-content: center;
}

.bar {
    width: 20px;
    min-height: 4px;
    border-radius: 4px 4px 0 0;
    transition: height 0.3s ease;
    cursor: pointer;
}

.bar:hover {
    opacity: 0.8;
}

.bar-visitors {
    background-color: var(--color-primary, #004F4C);
}

.bar-pageviews {
    background-color: #93C5FD;
}

.bar-label {
    margin-top: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: var(--color-text-muted);
}

@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .stat-value {
        font-size: 18px;
    }

    .bar {
        width: 14px;
    }
}

@media (max-width: 480px) {
    .widget-header {
        flex-direction: column;
        gap: 8px;
    }

    .bars {
        height: 80px;
    }
}
</style>
