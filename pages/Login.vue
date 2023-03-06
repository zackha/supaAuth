<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <div class="fNAZQD">
          <div class="dgrFox">
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
                  <button class="gZMQdu" type="submit">
                    <div class="bjhGPG">Sign in</div>
                  </button>
                  <NuxtLink to="/forget-password" class="fTZPOV">Forgot your password?</NuxtLink>
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

<style lang="postcss">
.buJnuC {
  @apply bg-emptiness text-kuroi-black h-full
}
.fvfNpo {
  @apply bg-emptiness text-kuroi-black h-screen overflow-y-auto relative
}
.uXyMu {
  @apply relative min-h-screen flex justify-center items-center box-border p-custom-clamp;
}
.fNAZQD {
  @apply relative flex-grow
}
.dgrFox {
  @apply max-w-xxs w-full my-0 mx-auto py-0 px-5 box-border 
}
.DaoRb {
  @apply grid gap-8 text-center
}
.jGQTZC {
  @apply grid gap-4 [&:not(:last-child)]:mb-6
}
.iJLvzO {
  @apply text-blue-sari bg-[var(--input-background,#f7f7f7)] block relative rounded-sm-two py-2.25 px-3 text-base cursor-text transition-all duration-200;
  box-shadow: inset 0 0 0 var(--input-border,1px) var(--input-border-color,#f1f1f2), 0 0 0 var(--input-outline,0px) var(--input-outline-color,transparent);
  &:hover {
    --input-background: #f1f1f2;
    --input-border-color: #e3e3e5
  }
  &:focus-within {
    --input-background: #fff;
    --input-border-color: #5c89de;
    --input-outline: 2px;
    --input-outline-color: #5c89de26
  }
}
.iJLvzO input {
  @apply placeholder:transition-all placeholder:duration-200 placeholder:text-pico-metal hover:placeholder-sleet placeholder:focus-within:text-sleet
}
.fdCSlG {
  @apply relative flex items-center
}
.cmCuLh {
  @apply w-full block h-[22px] leading-[22px] m-0 p-0 text-inherit tracking-[-0.125px] appearance-none bg-[initial] border-none outline-none
}
.gZMQdu {
  box-shadow: 0 0 0 var(--button-outline,0px) var(--button-outline-color,#5c89de4d), inset 0 -1px 1px 0px var(--button-inner-shadow,rgba(38 38 44 / 15%)), inset 0 var(--button-shine-y,1px) 0 0 var(--button-shine,rgba(255 255 255 / 25%)), 0 1px 2px 0 var(--button-shadow,rgba(38 38 44 / 25%));
  @apply text-white bg-[var(--button-background,#5c89de)] table border-none relative font-semibold text-sm m-0 outline-none select-none whitespace-nowrap text-center appearance-none rounded-[5px] leading-5 tracking-[-0.125px] py-[10px] px-6 cursor-pointer transition scale-[var(--button-scale,1)] w-full duration-200;
  &:hover {
    --button-shadow: rgba(38 38 44 / 50%);
    --button-background: #3577da
  }
  &:active {
    --button-outline: 3px;
    --button-scale: 0.975
  }
}
.bjhGPG {
  @apply relative z-10 flex justify-center items-center gap-2 min-h-[1.25rem]
}
.fTZPOV {
  @apply no-underline transition-colors duration-200 text-xs font-medium m-0 leading-normal text-[#b3b5b9] hover:text-[#91949b]
}
.eSHwvX {
  @apply font-[inherit] m-0 leading-[1.4] tracking-[-0.125px] text-[#12161e] font-semibold text-xl
}
.dEDhcH {
  @apply m-0 leading-normal text-[#656976] text-sm font-medium
}
.lcqpaS {
  --button-border-radius: 5px;
  @apply text-[#656976] bg-[var(--button-background,#eeefef)] table border-none relative font-semibold text-sm m-0 outline-none select-none whitespace-nowrap text-center appearance-none rounded-[var(--button-border-radius)] leading-5 tracking-[-0.125px] py-[10px] px-6 cursor-pointer transition scale-[var(--button-scale,1)] w-full duration-300;
  &:before {
    @apply bg-white absolute inset-[1.34px] rounded-[calc(var(--button-border-radius)-1px)] shadow-[rgba(38,38,44,10%)_0_2px_4px] content-['']
  }
  &:hover {
    --button-background: #e3e3e5
  }
  &:active {
  --button-scale: 0.975
  }
}
.cyDNyc {
  @apply transition duration-200 m-0 absolute z-10 left-2/4 text-center translate-x-[-50%] bottom-6 text-[10px] max-w-[260px] text-[#c2c3c7]
}
.cyDNyc a {
  @apply no-underline	transition duration-200 text-[#a3a5ab] hover:text-[#656976]
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
