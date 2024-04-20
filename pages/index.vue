<template>
    <header>
        <LangSwitcher />
    </header>

    <div>
        <h1>{{ $t('welcome') }}</h1>
        <button @click="callToast">Show Success Toast</button>
    </div>
</template>

<script setup lang="ts">

    import useToast from "../composables/useToast";
    import { POSITION } from "vue-toastification";

    
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

</style>