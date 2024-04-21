<template>

    <select v-model="language">
        <option v-for="item in locales" :key="item" :value="item.code">
            {{ item.name }}
        </option>
    </select>
    
</template>

<script setup>

    const { locales, locale, setLocale } = useI18n();

    const language = computed({
        get: () => locale.value,
        set: (value) => {
            setLocale(value);
        }
    });

</script>

<style scoped>

    select {
        padding: 0.2rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        background-color: var(--color-primary-3);
        color: var(--color-primary-4);
        border: 1px solid var(--color-primary-4);
    }

</style>