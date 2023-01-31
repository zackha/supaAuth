<template>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
onMounted(() => {
  watchEffect(() => {
    if (!useSupabaseUser().value) {
      navigateTo('/login')
    }
  })
})
</script>