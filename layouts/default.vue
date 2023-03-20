<template>
  <main>
    <section class="pt-20 pb-28 min-h-screen flex flex-col justify-center">
      <div class="px-6 w-full mx-auto max-w-6xl">
        <slot />
        <div class="absolute inset-0">
          <div class="background-gradient">
            <div class="background-gradient-pattern"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
