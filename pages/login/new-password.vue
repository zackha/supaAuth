<template>
  <div class="DaoRb">
    <h1 class="eSHwvX">New password</h1>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

watchEffect(() => {
  if (!user.value) {
    navigateTo('/login')
  }
})
</script>