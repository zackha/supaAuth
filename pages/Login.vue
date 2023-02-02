<template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <div class="fNAZQD">
          <div class="dgrFox">
            <div class="DaoRb cEeawS">
              <svg class="bkxNnD" width="40" height="42" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
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
                    <div class="">Sign in</div>
                  </button>
                  <a class="uzmOa fTZPOV" href="/forgot-password">Forgot your password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p class="cyDNyc biXwGa">
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
.buJnuC,.fvfNpo{background-color:#fcfcfc;color:#12161e}.fNAZQD,.fvfNpo,.uXyMu{position:relative}.dgrFox,.uXyMu{box-sizing:border-box}.eSHwvX,.gZMQdu{font-family:inherit}.DaoRb,.biXwGa,.gZMQdu{text-align:center}.biXwGa a,.fTZPOV{text-decoration:none}body{font-family:Inter,sans-serif;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0}.buJnuC{height:100%}.fvfNpo{height:100vh;overflow-y:auto}.uXyMu{min-height:100vh;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding:clamp(92px,16vh,200px) 0}.fNAZQD{-webkit-box-flex:1;flex-grow:1}.cyDNyc{transition:opacity .15s}.biXwGa{margin:0;position:absolute;z-index:1;left:50%;transform:translateX(-50%);bottom:24px;font-size:10px;max-width:260px;color:#c2c3c7}.fdCSlG,.gZMQdu,.iJLvzO{position:relative}.biXwGa a{color:#a3a5ab;transition:color .2s}.biXwGa a:hover{color:#656976}.dgrFox{max-width:300px;width:100%;margin:auto auto 70px;padding:0 20px;animation:.2s forwards fadeIn}.cEeawS{--panel-y:0px;--panel-s:1;--panel-o:1;transform:translateY(var(--panel-y)) scale(var(--panel-s)) translateZ(0);opacity:var(--panel-o)}.DaoRb{display:grid;gap:32px}.bkxNnD{margin:auto}.eSHwvX{margin:-4px 0 0;line-height:1.4;letter-spacing:-.125px;color:#12161e;font-weight:600;font-size:20px}.jGQTZC:not(:last-child){margin-bottom:24px}.jGQTZC{display:grid;gap:16px}.iJLvzO{color:var(--input-color);background-color:var(--input-background);display:block;border-radius:5px;padding:9px 12px;font-weight:400;font-size:16px;cursor:text;transition:background-color .2s,box-shadow .2s,color .2s,opacity .2s;box-shadow:inset 0 0 0 var(--input-border) var(--input-border-color),0 0 0 var(--input-outline) var(--input-outline-color);--input-color:#656976;--input-background:#f7f7f7;--input-border:1px;--input-border-color:#f1f1f2;--input-outline:0px;--input-outline-color:transparent;--input-placeholder-color:#c2c3c7;--input-line-height:22px}.cmCuLh,.gZMQdu{border:none;outline:0;appearance:none;letter-spacing:-.125px;width:100%;margin:0}.iJLvzO:hover{--input-background:#f1f1f2;--input-border-color:#e3e3e5;--input-placeholder-color:#91949b}.iJLvzO:focus-within{--input-placeholder-color:#91949b;--input-background:#ffffff;--input-border-color:#5C89de;--input-outline:2px;--input-outline-color:#5c89de26}.cmCuLh::placeholder{color:var(--input-placeholder-color);transition:background-color .2s,box-shadow .2s,color .2s,opacity .2s}.fdCSlG{display:flex;-webkit-box-align:center;align-items:center;gap:10px}.cmCuLh{background:0 0;padding:0;color:inherit;line-height:var(--input-line-height);height:var(--input-line-height);display:block}.gZMQdu{color:#fff;background:#5c89de;display:table;font-weight:600;font-size:14px;user-select:none;white-space:nowrap;border-radius:5px;line-height:20px;padding:10px 24px;cursor:pointer;box-shadow:0 0 0 var(--button-outline) var(--button-outline-color),inset 0 -1px 1px 0 var(--button-inner-shadow),inset 0 var(--button-shine-y) 0 0 var(--button-shine),0 1px 2px 0 var(--button-shadow);--button-outline:0px;--button-outline-color:#5c89de4d;--button-inner-shadow:rgba(38 38 44 / 15%);--button-shine-y:1px;--button-shine:rgba(255 255 255 / 25%);--button-shadow:rgba(38 38 44 / 25%);transition:background-color .2s ease-out,box-shadow .2s ease-out}.gZMQdu:hover{background:#3577da;--button-shadow:rgba(38 38 44 / 60%)}.fTZPOV{transition:color .2s}.fTZPOV:hover{color:#91949b}.uzmOa{font-size:12px;font-weight:500;margin:0;line-height:1.5;color:#b3b5b9}
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
