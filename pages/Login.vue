<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <div class="fNAZQD">
          <div class="dgrFox">
            <div class="DaoRb cEeawS">
              <svg class="bkxNnD" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <h1 class="eSHwvX">Sign in</h1>
              <form @submit.prevent="login">
                <div class="">
                  <label class="">
                    <div class="">
                      <input class="" type="text" placeholder="Email address" v-model="email" />
                    </div>
                  </label>
                  <label class="">
                    <div class="">
                      <input class="" type="password" placeholder="password" v-model="password" />
                    </div>
                  </label>
                </div>
                <div class="">
                  <button class="" type="submit">
                    <div class="">Login</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p class="cyDNyc biXwGa">
          This site is protected by reCAPTCHA and the Google
          <a class="" target="_blank" href="#" rel="noreferrer"> Privacy Policy </a>
          and <a class="" target="_blank" href="#" rel="noreferrer"> Terms of Service </a>
          apply.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
.buJnuC {
  background-color: rgb(252, 252, 252);
  color: rgb(18, 22, 30);
  height: 100%;
}
.fvfNpo {
  background-color: rgb(252, 252, 252);
  color: rgb(18, 22, 30);
  height: 100vh;
  overflow-y: auto;
  position: relative;
}
.uXyMu {
  position: relative;
  min-height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: clamp(92px, 16vh, 200px) 0px;
  box-sizing: border-box;
}
.fNAZQD {
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.cyDNyc {
  transition: opacity 0.15s ease 0s;
}
.biXwGa {
  margin: 0px;
  position: absolute;
  z-index: 1;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  bottom: 24px;
  font-size: 10px;
  max-width: 260px;
  color: rgb(194, 195, 199);
}
.biXwGa a {
  color: rgb(163, 165, 171);
  text-decoration: none;
  transition: color 0.2s ease 0s;
}
.biXwGa a:hover {
    color: rgb(101, 105, 118);
}
.dgrFox {
  max-width: 300px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 20px;
  box-sizing: border-box;
  animation: 0.2s ease 0s 1 normal forwards running fadeIn;
}
.cEeawS {
  --panel-y: 0px;
  --panel-s: 1;
  --panel-o: 1;
  transform: translateY(var(--panel-y)) scale(var(--panel-s)) translateZ(0);
  opacity: var(--panel-o);
}
.DaoRb {
  display: grid;
  gap: 32px;
  text-align: center;
}
.bkxNnD {
  margin: auto;
}
.eSHwvX {
  font-family: inherit;
  margin: 0px;
  line-height: 1.4;
  letter-spacing: -0.125px;
  color: rgb(18, 22, 30);
  font-weight: 600;
  font-size: 20px;
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
