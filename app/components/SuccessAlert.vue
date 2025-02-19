<template>
  <Transition name="scale-y">
    <div v-if="successMsg">
      <div class="cOKwvVs">
        <div class="ckmpXq">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="jXTFjD">
            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--icon-color);"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5321 12.5927C11.825 12.8856 12.2998 12.8856 12.5927 12.5927C12.8856 12.2998 12.8856 11.825 12.5927 11.5321L11.0607 10L12.5927 8.46799C12.8856 8.17509 12.8856 7.70022 12.5927 7.40733C12.2998 7.11443 11.825 7.11443 11.5321 7.40733L10 8.93937L8.46795 7.40729C8.17506 7.1144 7.70019 7.1144 7.40729 7.40729C7.1144 7.70019 7.1144 8.17506 7.40729 8.46795L8.93937 10L7.40729 11.5321C7.1144 11.825 7.1144 12.2999 7.40729 12.5928C7.70019 12.8857 8.17506 12.8857 8.46795 12.5928L10 11.0607L11.5321 12.5927Z" style="fill: var(--icon-color);"></path>
          </svg>
        </div>
        <p class="cAmQly">{{successMsg}}</p>
        <div class="dgcJHV">
          <div class="dVKHAC" @click="clearSuccess">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="jXTFjD">
              <path d="M13.5355 6.46448L6.46445 13.5355" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--icon-color);"></path>
              <path d="M13.5355 13.5355L6.46442 6.46445" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--icon-color);"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ successMsg: String }>()
const emit = defineEmits(['clearSuccess'])
const clearSuccess = () => {
  emit('clearSuccess');
};
</script>

<style lang="postcss">
.cOKwvVs {
  @apply mb-4 gap-2 text-left flex relative;
  padding: 8px 20px 8px 8px;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  box-shadow: inset 0 0 0 9999px var(--notification-pale),inset 0 0 0 1px var(--notification-light), 0 2px 6px var(--notification-shadow);
  color: var(--notification-dark);
  transition: opacity 0.2s ease 0s;
  --notification-color: #44B48B;
  --notification-dark: #00a165;
  --notification-light: #44b48b66;
  --notification-shadow: #44b48b26;
  --notification-shadow-light: #44b48b14;
  --notification-pale: #44b48b1a;
  --notification-transparent: #44b48b00;
  &::before {
    @apply w-40 absolute left-0 top-0 bottom-0 pointer-events-none;
    content: '';
    border-radius: 5px 0px 0px 5px;
    background-image: linear-gradient(120deg,var(--notification-color) 0%,var(--notification-transparent) 55%);
    opacity: 0.15;
  }
}
.ckmpXq {
  @apply w-6 h-6 flex justify-center items-center;
  & svg{
    --icon-color: var(--notification-dark);
    --icon-size: 18px;
  }
}
.cAmQly {
  @apply m-0 leading-6 text-sm font-medium;
}
.dgcJHV {
  @apply ml-auto flex;
  gap: 5px;
}
.dVKHAC {
  @apply cursor-pointer w-6 h-6 p-1 box-border ml-auto -mr-3;
  border-radius: 3px;
  transition: background-color 0.2s ease 0s, transform 0.2s ease 0s;
  & svg{
    --icon-size: 16px;
    --icon-color: var(--notification-dark);
  }
  &:hover{
    background-color: var(--notification-pale);
  }
  &:active{
    transform: scale(0.975);
  }
}
</style>
