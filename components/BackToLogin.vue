<template>
  <div class="gxYQch">
    <NuxtLink class="jjabJD" to="/login">
      <div class="fvEvSO">
        <svg viewBox="0 0 20 20" fill="none" class="jXTFjD">
          <path d="M11.6667 6.66663L8.33334 9.99996L11.6667 13.3333" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--icon-color)"></path>
        </svg>
        Back
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="postcss">
.gxYQch {
  @apply z-10 fixed left-0 top-0 right-0 p-6 box-border flex items-center justify-between transition-all duration-200
}
.jjabJD svg {
  --icon-color: currentColor;
  --icon-size: 20px;
  @apply flex-[0_0_20px]
}
.jXTFjD {
  @apply w-[var(--icon-size)] h-[var(--icon-size)]
}
.fvEvSO {
  @apply relative z-10 flex items-center gap-2 min-h-[20px] transition duration-200
}
.jjabJD {
  @apply text-sleet relative text-sm font-[inherit] tracking-[-0.125px] py-[10px] pr-4 pl-3 font-semibold scale-[var(--button-scale,1)] transition duration-200 opacity-100;
  &:hover {
    @apply text-blue-sari
  }
  &:active {
    --button-scale: 0.975
  }
}
.jjabJD.router-link-exact-active {
  @apply opacity-0
}
</style>