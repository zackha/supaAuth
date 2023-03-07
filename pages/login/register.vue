<template>
  <div class="DaoRb">
    <h1 class="eSHwvX">Create an account</h1>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>