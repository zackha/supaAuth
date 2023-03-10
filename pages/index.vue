<template>
  <div v-if="user">
    <p class="text-xl">Email: {{ user.email }}</p>
    <p class="text-xl">First Name: {{ user.user_metadata.first_name }}</p>
    <p class="text-xl">Last Name: {{ user.user_metadata.last_name }}</p>
    <p class="text-xl">Company: {{ user.user_metadata.company }}</p>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>