<template>
  <div class="relative z-10 max-w-screen-sm">
    <p v-if="user" class="fVeafc in">Hi {{ user.user_metadata.first_name }}</p>
    <p v-else class="fVeafc">unauthenticated</p>
    <h1 class="kKxhrq">
      Nuxt3 + Supabase
      <br />
      Starter Template
    </h1>
    <p class="kRTmDC">
      Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.
    </p>
    <div class="uQxNj" v-if="user">
      <button @click="logout" class="ieMfVH" :disabled="loading">
        <span class="fKlELC" :class="{ loading: loading }">Log out</span>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="jjoFVh" :class="{ loading: loading }">
          <g fill="none" stroke-width="1.5" stroke-linecap="round" class="faEWLr" style="stroke: var(--icon-color)">
            <circle stroke-opacity=".2" cx="8" cy="8" r="6"></circle>
            <circle cx="8" cy="8" r="6" class="VFMrX"></circle>
          </g>
        </svg>
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
          <span class="fKlELC">Sign up</span>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();
const loading = ref(false);

const logout = async () => {
  loading.value = true;
  const { error } = await client.auth.signOut();
  if (error) {
    loading.value = false;
    return alert('Something went wrong !');
  }
};

useHead({
  title: 'supaAuth',
  meta: [
    {
      name: 'description',
      content: 'Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.',
    },
  ],
});
</script>
