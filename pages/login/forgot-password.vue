<template>
  <h1 class="eSHwvX">Forgot password</h1>
  <form @submit.prevent="resetPassword">
    <div class="jGQTZC">
      <label class="iJLvzO">
        <div class="fdCSlG">
          <input class="cmCuLh" type="text" placeholder="Email address" v-model="email">
        </div>
      </label>
    </div>
    <button class="gZMQdu" type="submit">
      <div class="bjhGPG">Request</div>
    </button>
  </form>
</template>

<script setup lang="ts">
const email = ref('')
const client = useSupabaseAuthClient()

const resetPassword = async () => {
  const { error }  = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/login/new-password`
  })
  if (error) {
    return alert('Something went wrong !')
  }
}
</script>
