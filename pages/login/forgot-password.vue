<template>
  <div class="DaoRb">
    <h1 class="eSHwvX">Forgot password</h1>
    <form @submit.prevent="resetpassword">
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
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const resetpassword = async () => {
  const { error }  = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'http://localhost:3000/login/new-password',
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
