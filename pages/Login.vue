<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <div class="fNAZQD">
          <div class="dgrFox">
            <div class="DaoRb">
              <form @submit.prevent="login">
                <div class="jGQTZC">
                  <input type="text" placeholder="Email address" v-model="email" />
                  <input type="password" placeholder="Password" v-model="password" />
                </div>
                <button type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.buJnuC {
  @apply bg-emptiness text-kuroi-black h-full
}
.fvfNpo {
  @apply bg-emptiness text-kuroi-black h-screen overflow-y-auto relative
}
.uXyMu {
  @apply relative min-h-screen flex justify-center items-center box-border;
  padding: clamp(92px, 16vh, 200px) 0px
}
.fNAZQD {
  @apply relative flex-grow
}
.dgrFox {
  @apply max-w-[18.75rem] w-full my-0 mx-auto py-0 px-5 box-border 
}
.DaoRb {
  @apply grid gap-8 text-center
}
.jGQTZC {
  @apply grid gap-4 [&:not(:last-child)]:mb-6
}
</style>

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
