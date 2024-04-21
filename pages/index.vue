<template>

    <header>
        <LangSwitcher />
    </header>

    <main class="content">
        <div class="welcome-container">
            <h1>{{ $t('welcome') }}</h1>
            <button @click="callToast">Show Success Toast</button>
        </div>
    </main>

    <footer>
        <p>&copy; {{ year }} - Fed Venturino  - MIT License</p>
    </footer>

</template>

<script setup lang="ts">

    import useToast from "../composables/useToast";
    import { POSITION } from "vue-toastification";

    const year = new Date().getFullYear();

    function callToast(): void {
      
        useToast().success("This is a success toast message", {
            position: POSITION.TOP_CENTER,
            hideProgressBar: true,
            closeButton: false,
            toastClassName: "my-custom-toast-class"
        });

    }

</script>

<style scoped>

    header {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
    }

    .welcome-container {
        margin: 125px auto;
        width: 300px;
        background: var(--color-primary-2);
        border-radius: 0.25rem;
        text-align: center;
        padding: 1.5rem;
        border: 1px solid var(--color-primary-3);
    }

    footer {
        text-align: center;
        padding: 1rem;
        bottom: 0;
        position: absolute;
        width: 100%;
        color: var(--color-primary-6);
    }

</style>