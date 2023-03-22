<template>
  <div class="DaoRb">
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
        <button class="gZMQdu" type="submit" :disabled="loading">
          <div class="bjhGPG" :class="{loading: loading}">Sign in</div>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="jjoFVh" :class="{loading: loading}">
            <g fill="none" stroke-width="1.5" stroke-linecap="round" class="faEWLr" style="stroke: var(--icon-color);">
              <circle stroke-opacity=".2" cx="8" cy="8" r="6"></circle>
              <circle cx="8" cy="8" r="6" class="VFMrX"></circle>
            </g>
          </svg>
        </button>
        <NuxtLink to="/forgot-password" class="fTZPOV">Forgot your password?</NuxtLink>
      </div>
    </form>
    <div class="jGQTZC">
      <p class="dEDhcH">Don’t have a SupaAuth account?</p>
      <NuxtLink to="/register">
        <button class="lcqpaS">
          <div class="bjhGPG">Create new account</div>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss">
.gZMQdu svg {
  --icon-color: currentColor;
  --icon-size: 20px;
  flex: 0 0 20px;
}
.jjoFVh {
  @apply absolute left-1/2 top-1/2 opacity-0 block;
  margin: -10px 0px 0px -10px;
  transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
  transform: translateY(-12px) scale(0.75);
  width: var(--icon-size);
  height: var(--icon-size);
  opacity: 0;
  &.loading {
    transform: none;
    opacity: 1;
  }
}
.faEWLr {
  animation: 1s linear 0s infinite normal none running rotate;
  transform-origin: 50% 50%;
  @keyframes rotate {
	  0% {transform: rotate(0deg)}
	  100% {transform: rotate(360deg)}
  }
}
.VFMrX {
  stroke-dasharray: 38px;
  stroke-dashoffset: 114px;
  animation: 2s linear 0s infinite normal none running offset;
  @keyframes offset {
    50% {stroke-dashoffset: 96px}
  }
}
</style>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Login | supaAuth'
})
const user = useSupabaseUser();
const loading = ref(false)
const email = ref('')
const password = ref('')
const client = useSupabaseAuthClient()

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/");
  }
});

const login = async () => {
  loading.value = true
  const { error }  = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    loading.value = false
    return alert('Something went wrong !')
  }
}
</script>
