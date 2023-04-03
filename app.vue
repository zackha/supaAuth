<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
@keyframes fadeIn {
  0% {opacity: 0.001}
  100% {opacity: 1}
}
@keyframes fadeOut {
  0% { opacity: 1}
  100% {opacity: 0.001}
}
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 250ms;
}
.page-enter,
.page-leave-to,
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
.page-enter-active,
.layout-enter-active {
  animation-duration: 250ms;
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}
.page-leave-active,
.layout-leave-active {
  animation-name: fadeOut;
  animation-duration: 0.25s;
}
/* Scale Y */
.scale-y-enter-active,
.scale-y-leave-active {
  transition: all 300ms linear;
  will-change: max-height, opacity;
  max-height: 160px;
  overflow: hidden;
  opacity: 1;
}
.scale-y-enter-from,
.scale-y-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
