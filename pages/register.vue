<template>
  <h1 class="eSHwvX">Create an account</h1>
  <form @submit.prevent="signUp">
    <div class="jGQTZC">
      <label class="iJLvzO">
        <div class="fdCSlG">
          <input class="cmCuLh" type="text" placeholder="First name" v-model="name" />
        </div>
      </label>
      <label class="iJLvzO">
        <div class="fdCSlG">
          <input class="cmCuLh" type="text" placeholder="Last name" v-model="lastname" />
        </div>
      </label>
      <label class="iJLvzO">
        <div class="fdCSlG">
          <input class="cmCuLh" type="text" placeholder="Company (Optional)" v-model="company" />
        </div>
      </label>
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
        <div class="bjhGPG">Sign up</div>
      </button>
      <div class="xxEKN">
        By signing up you agree to our
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="bkFclS">
          <span>API Terms of Service</span>
        </a>
        and
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="bkFclS">
          <span>Privacy Policy</span>
        </a>.
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
});
const email = ref('')
const password = ref('')
const name = ref('')
const lastname = ref('')
const company = ref('')
const client = useSupabaseAuthClient()

const signUp = async () => {
  const { error }  = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
        company: company.value
      }
    }
  })
  if (error) {
    return alert('Something went wrong !')
  }
}
</script>
