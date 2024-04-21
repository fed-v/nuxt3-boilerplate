<template>

    <header>
        <LangSwitcher />
    </header>

    <main class="content">
        <div class="welcome-container">
            <h1>{{ $t('welcome') }}</h1>
            <p>{{ $t('description') }}</p>
            <button @click="callToast">{{ $t('homeButton') }}</button>
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

    // Grab the translated values t
	const { t } = useI18n();
    
    function callToast(): void {
      
        useToast().success( t('successToastMessage'), {
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
        width: 450px;
        background: var(--color-primary-2);
        border-radius: 0.25rem;
        text-align: center;
        padding: 1.5rem;
        border: 1px solid var(--color-primary-3);
    }

    .welcome-container h1 {
        color: var(--color-primary-4);
    }

    .welcome-container p {
        margin-bottom: 1.5rem;
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