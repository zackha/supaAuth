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
</script>

<style lang="postcss">
.EjuRYu {
  @apply font-SuisseIntl;
  font-feature-settings: "salt" 2;
}
.fVeafc {
  @apply text-base leading-5 font-semibold mb-3 text-232730;
  letter-spacing: -.01em;
  &:before {
    @apply w-2 h-4 mr-2 inline-block relative top-0.5;
    border-radius: 1px;
    background: linear-gradient(165deg,#cd4545 0%,#e97e7e 92%);
    content: '';
  }
  &.in::before {
    background: linear-gradient(165deg,#50cd45 0%,#82e97e 92%);
  }
}
.kKxhrq {
  @apply text-7xl text-12161e font-semibold mt-8;
  line-height: 4.5rem;
  letter-spacing: -.03em;
}
.kRTmDC {
  @apply text-2xl leading-8 text-575a64 mt-2;
  letter-spacing: -.01em;
  font-weight: inherit;
}
.uQxNj {
  @apply flex gap-3 mt-4;
}
.bQRHNT {
  @apply relative text-white rounded-lg px-4 h-9 m-px font-medium outline-none whitespace-nowrap 
  cursor-pointer text-center leading-4 items-center justify-center inline-flex;
  background-color: rgba(17,26,74,1);
  box-shadow: 0 0 0 1px rgba(17,26,74,1),0 2px 4px rgba(0,0,0,0.25),0 1px 2px rgba(0,0,0,0.25);
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s, border-color 0.2s ease 0s;
  min-height: 36px;
  &::after {
    @apply inset-0 absolute opacity-10 rounded-lg block;
    content: '';
    background-image: linear-gradient(180deg,rgba(255,255,255,1),rgba(255,255,255,0) 100%);
    transition: opacity 0.5s ease 0s;
  }
  &:hover {
    @apply cursor-pointer;
    .chevron, .stem {
      transform: translateX(0px);
    }
    .stem {
      stroke-dashoffset: 0;
    }
    &::after {
      opacity: 0.15;
    }
  }
  &:active {
    box-shadow: 0 0 0 1px rgba(17,26,74,1),0 1px 3px rgba(0,0,0,0.15),0 0 0 0 rgba(212,227,247,1);
    .chevron, .stem {
      transform: translateX(2px);
    }
    &::after {
      opacity: 0.05;
    }
  }
}
.fKlELC {
  @apply text-sm gap-1 items-center flex z-10 relative mt-0.5;
}
.taKtSf {
  @apply h-4 stroke-current inline-block -mr-1 mb-0.5;
  .chevron {
    transform: translateX(-3px);
    transition: transform 0.15s ease 0s;
  }
  .stem {
    stroke-dasharray: 10;
    stroke-dashoffset: 10;
    transform: translateX(-3px);
    transition: stroke-dashoffset 0.15s ease 0s, transform 0.15s ease 0s;
  }
}
.ieMfVH {
  @apply relative text-232730 rounded-lg px-4 h-9 m-px font-medium outline-none whitespace-nowrap 
  cursor-pointer text-center leading-4 items-center justify-center inline-flex;
  background-color: rgba(255,255,255,0.5);
  backdrop-filter: blur(2px);
  box-shadow: 0 1px 1px rgba(255,255,255,0),0 0 0 1px rgba(87,90,100,0.12);
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s, border-color 0.2s ease 0s;
  &:hover {
    background-color: rgba(255,255,255,1);
    box-shadow: 0 1px 1px rgba(0,0,0,0.15),0 0 0 1px rgba(87,90,100,0.2);
  }
}
.background-gradient {
  @apply absolute top-1/2 hue-rotate-0;
  width: 150vw;
  left: 80%;
  height: 1024px;
  transform: translate3d(-50%, -50%, 0px);
  -webkit-mask-image: radial-gradient(farthest-side at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  mask-image: radial-gradient(farthest-side at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  background-image: linear-gradient(90deg,rgba(126,167,233,1),rgba(148,239,183,1));
  animation-name: background-gradient-animation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  @keyframes background-gradient-animation {
	  0% {filter: hue-rotate(15deg)}
	  50% {filter: hue-rotate(-80deg)}
	  100% {filter: hue-rotate(15deg)}
  }
}
.background-gradient-pattern {
  @apply absolute inset-0 mix-blend-overlay;
  background-image: url('~/assets/img/guilloche.svg');
  background-size: 20px;
}
</style>
