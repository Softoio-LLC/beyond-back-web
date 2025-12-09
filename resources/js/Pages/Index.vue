<template>
    <main class="index-page">
        <div class="card">
            <h1>Index Page</h1>
            <p class="muted">This is a placeholder for the Index page. Implement page content here.</p>
            <div class="actions">
                <button @click="reload" class="btn">Reload</button>
                <button @click="goBack" class="btn outline">Back</button>
            </div>
        </div>
    </main>
</template>

<script setup>
function reload() {
    location.reload();
}
function goBack() {
    history.back();
}
</script>

<style scoped>
.index-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7fafc;
    padding: 24px;
    box-sizing: border-box;
}

.card {
    width: 100%;
    max-width: 720px;
    background: #ffffff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 6px 18px rgba(20, 25, 30, 0.06);
    text-align: center;
}

h1 {
    margin: 0 0 8px;
    font-size: 28px;
    color: #111827;
}

.muted {
    margin: 0 0 20px;
    color: #6b7280;
}

.actions {
    display: flex;
    gap: 12px;
    justify-content: center;
}

.btn {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    background: #2563eb;
    color: white;
    cursor: pointer;
    font-weight: 600;
}

.btn.outline {
    background: transparent;
    color: #374151;
    border: 1px solid #e5e7eb;
}
</style>