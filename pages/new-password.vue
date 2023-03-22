<template>
  <div class="DaoRb">
    <h1 class="eSHwvX">New password</h1>
    <form @submit.prevent="updatepassword">
      <div class="jGQTZC">
        <label class="iJLvzO">
          <div class="fdCSlG">
            <input class="cmCuLh" type="password" placeholder="Password" v-model="password" />
          </div>
        </label>
        <label class="iJLvzO">
          <div class="fdCSlG">
            <input class="cmCuLh" type="password" placeholder="Repeat" v-model="passwordConfirm" />
          </div>
        </label>
      </div>
      <div class="jGQTZC">
        <button class="gZMQdu" type="submit" :disabled="loading">
          <div class="bjhGPG" :class="{loading: loading}">Save</div>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="jjoFVh" :class="{loading: loading}">
            <g fill="none" stroke-width="1.5" stroke-linecap="round" class="faEWLr" style="stroke: var(--icon-color);">
              <circle stroke-opacity=".2" cx="8" cy="8" r="6"></circle>
              <circle cx="8" cy="8" r="6" class="VFMrX"></circle>
            </g>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
})
useHead({
  title: 'New Password | supaAuth'
})
const password = ref('')
const passwordConfirm = ref('')
const client = useSupabaseAuthClient()
const loading = ref(false)

const updatepassword = async () => {
  if (password.value !== passwordConfirm.value) {
    alert('password and repeated password mismatch')
    return
  }
  loading.value = true
  const { error }  = await client.auth.updateUser({
    password: password.value
  })
  if (error) {
    loading.value = false
    return alert('Something went wrong !')
  }
  navigateTo('login')
}
</script>
