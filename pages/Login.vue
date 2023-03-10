<template>
  <h1 class="eSHwvX">Sign in</h1>
  <form @submit.prevent="login">
    <div class="jGQTZC">
      <label class="iJLvzO">
        <div class="fdCSlG">
          <input class="cmCuLh" type="text" placeholder="Email address" v-model="email" />
        </div>
      </label>
      <label class="iJLvzO">
        <div class="fdCSlG">
          <input class="cmCuLh" type="password" placeholder="Password" v-model="password" />
        </div>
      </label>
    </div>
    <div class="jGQTZC">
      <button class="gZMQdu" type="submit">
        <div class="bjhGPG">Sign in</div>
      </button>
      <NuxtLink to="forgot-password" class="fTZPOV">Forgot your password?</NuxtLink>
    </div>
  </form>
  <div class="jGQTZC">
    <p class="dEDhcH">Don’t have a SupaAuth account?</p>
    <NuxtLink to="register">
      <button class="lcqpaS">
        <div class="bjhGPG">Create new account</div>
      </button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
});
const email = ref('')
const password = ref('')
const client = useSupabaseAuthClient()

const login = async () => {
  const { error }  = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    return alert('Something went wrong !')
  }
  navigateTo('/')
}
</script>
