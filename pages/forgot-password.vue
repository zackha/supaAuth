<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <BackToLogin />
        <div class="fNAZQD">
          <div class="dgrFox">
            <div class="DaoRb">
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
const email = ref('')
const client = useSupabaseAuthClient()

const resetPassword = async () => {
  const { error }  = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/new-password`
  })
  if (error) {
    return alert('Something went wrong !')
  }
}
</script>
