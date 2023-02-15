<template>
  <div class="bg-emptiness text-kuroi-black h-full">
    <div class="bg-emptiness text-kuroi-black h-screen overflow-y-auto relative">
      <div class="relative">
        <form @submit.prevent="login">
          <input type="text" placeholder="Email address" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const login = async () => {
  const { error }  = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    return alert('Something went wrong !')
  }
}

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>
