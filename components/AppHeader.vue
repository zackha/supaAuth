<template>
  <header>
    <div style="float:right">
      <NuxtLink v-if="!user" to="login"><button>Log in</button></NuxtLink>
      <button v-else @click="logout">Log out</button>
    </div>
  </header>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
}
</script>