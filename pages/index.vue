<template>
  <div class="relative z-10 max-w-screen-sm">
    <p v-if="user" class="fVeafc in">Hi {{ user.user_metadata.first_name }}</p>
    <p v-else class="fVeafc">unauthenticated</p>
    <h1 class="kKxhrq">
      Nuxt3 + Supabase
      <br>
      Starter Template
    </h1>
    <p class="kRTmDC">
      Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.
    </p>
    <div class="uQxNj" v-if="user">
      <button @click="logout" class="ieMfVH">
        <span class="fKlELC">
          Log out
        </span>
      </button>
    </div>
    <div class="uQxNj" v-else>
      <NuxtLink class="bQRHNT" to="/login">
        <span class="fKlELC">
          Login 
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="taKtSf">
            <path class="chevron" d="M8 13L13 8L8 3" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
            <path class="stem" d="M12 8L2 8" stroke-width="1.5"></path>
          </svg>
        </span>
      </NuxtLink>
      <NuxtLink to="/register">
        <button class="ieMfVH">
          <span class="fKlELC">
            Sign up
          </span>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
}

useHead({
  title: 'supaAuth',
  meta: [
    { name: 'description', content: 'Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.' }
  ]
})
</script>
