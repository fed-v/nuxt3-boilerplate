<template>
  <NuxtPage />
</template>

<script setup>
  // Keep <html lang> in sync with the active i18n locale, so screen readers
  // pronounce the page correctly (WCAG 3.1.1 Language of Page).
  const { locale } = useI18n();

  useHead({
    htmlAttrs: {
      lang: locale,
    },
  });
</script>
