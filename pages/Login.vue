<template>
  <form @submit.prevent="login">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

const login = async () => {
  const { error }  = await useSupabaseAuthClient().auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  
  if (error) {
    return alert('Something went wrong !')
  } else {
    navigateTo('/');
  }
}

onMounted(() => {
  watchEffect(() => {
    if (useSupabaseUser().value) {
      navigateTo('/')
    }
  })
})
</script>
