<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <div class="fNAZQD">
          <div class="dgrFox">
            <div class="DaoRb">
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
                </div>
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
.iJLvzO {
  @apply text-blue-sari bg-[var(--input-background,#f7f7f7)] block relative rounded-[5px] py-[9px] px-3 text-base cursor-text transition-all duration-200;
  box-shadow: inset 0 0 0 var(--input-border,1px) var(--input-border-color,#f1f1f2), 0 0 0 var(--input-outline,0px) var(--input-outline-color,transparent)
}
.iJLvzO:hover {
  --input-background: #f1f1f2;
  --input-border-color: #e3e3e5
}
.iJLvzO:focus-within {
  --input-background: #fff;
  --input-border-color: #5c89de;
  --input-outline: 2px;
  --input-outline-color: #5c89de26
}
.iJLvzO input {
  @apply placeholder:transition-all placeholder:duration-200 placeholder:text-[#c2c3c7] hover:placeholder-[#91949b] placeholder:focus-within:text-[#91949b]
}
.fdCSlG {
  @apply relative flex items-center
}
.cmCuLh {
  @apply w-full block h-[22px] leading-[22px] m-0 p-0;
  color: inherit;
  letter-spacing: -0.125px;
  appearance: none;
  background: none;
  border: none;
  outline: none
}
.gZMQdu {
  box-shadow: 0 0 0 var(--button-outline,0px) var(--button-outline-color,#5c89de4d), inset 0 -1px 1px 0px var(--button-inner-shadow,rgba(38 38 44 / 15%)), inset 0 var(--button-shine-y,1px) 0 0 var(--button-shine,rgba(255 255 255 / 25%)), 0 1px 2px 0 var(--button-shadow,rgba(38 38 44 / 25%));
  @apply text-white bg-[var(--button-background,#5c89de)] table border-none relative font-semibold text-sm m-0 outline-none select-none whitespace-nowrap transition scale-[var(--button-scale,1)]
  text-center appearance-none rounded-[5px] leading-5 py-[10px] px-6 cursor-pointer tracking-[-0.125px] w-full duration-200
}
.gZMQdu:hover {
  --button-shadow: rgba(38 38 44 / 50%);
  --button-background: #3577da;
}
.gZMQdu:active {
  --button-outline: 3px;
  --button-scale: 0.975
}
.bjhGPG {
  @apply relative z-10 flex justify-center items-center gap-2 min-h-[1.25rem]
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
