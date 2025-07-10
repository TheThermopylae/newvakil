<template>
  <div
    class="containe flex items-center justify-between lg:gap-10 relative p-5 lg:pr-10 md:h-screen"
  >
    <div class="lg:w-1/3">
      <NuxtLink to="/" class="flex justify-center">
        <img
          src="/logo.svg"
          alt="logo"
          class="w-[110px] z-50 absolute top-14"
        />
      </NuxtLink>
      <slot />
    </div>
    <div class="relative w-1/2 h-full img rounded-2xl rounded-br-[125px]">
      <!-- <img
        src="/auth/image.jpg"
        alt="img"
        class="w-full h-full rounded-2xl rounded-br-[125px] hidden lg:block"
      /> -->
      <p
        class="text-2xl absolute bottom-14 left-1/2 -translate-x-1/2 w-full text-center text-white"
      >
        عدالت همه چیز را حتی با چشم بند می بیند.
      </p>
    </div>
  </div>
</template>

<style scoped>
.img {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url('/auth/image.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
