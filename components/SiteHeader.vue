<template>
  <header>
    <button @click="client.auth.signOut()">Log out</button>
  </header>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient()
</script>