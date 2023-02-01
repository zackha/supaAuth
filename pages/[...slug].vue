<template>
  <main>
    <SiteHeader />
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
