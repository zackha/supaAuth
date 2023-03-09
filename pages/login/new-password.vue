<template>
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
      <button class="gZMQdu" type="submit">
        <div class="bjhGPG">Save</div>
      </button>
      <NuxtLink to="/login" class="fTZPOV">Back to sign in</NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
const password = ref('')
const passwordConfirm = ref('')
const client = useSupabaseAuthClient()

const updatepassword = async () => {
  if (password.value !== passwordConfirm.value) {
    alert('password and repeated password mismatch')
    return
  }
  const { error }  = await client.auth.updateUser({
    password: password.value
  })
  if (error) {
    return alert('Something went wrong !')
  }
  navigateTo('/login')
}
</script>
