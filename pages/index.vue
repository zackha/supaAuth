<template>
  <div>
    <AppHeader />
    <div v-if="user">
      <p>{{ user.user_metadata.first_name }} {{ user.user_metadata.last_name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>