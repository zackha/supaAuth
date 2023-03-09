<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <BackToLogin class="jfDXjo" />
        <div class="fNAZQD">
          <div class="dgrFox">
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
                  <button class="gZMQdu" type="submit">
                    <div class="bjhGPG">Save</div>
                  </button>
                  <NuxtLink to="/login" class="fTZPOV">Back to sign in</NuxtLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p class="cyDNyc">
          This site is authenticate by supabase.com and the Supabase
          <a target="_blank" href="https://supabase.com/privacy" rel="noreferrer"> Privacy Policy </a>
          and <a target="_blank" href="https://supabase.com/terms" rel="noreferrer"> Terms of Service </a>
          apply.
        </p>
      </div>
    </div>
  </div>
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
  navigateTo('login')
}
</script>
