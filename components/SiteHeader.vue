<template>
  <header>
    <button @click="logout">Log out</button>
  </header>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>