<template>
  <div
    class="border-2 border-primary p-1 rounded-2xl grid grid-cols-2 w-full text-center text-2xl gap-1 mb-5"
  >
    <NuxtLink
      to="/auth/lawyer-login"
      class="p-3 rounded-10 cursor-pointer transition-all"
      active-class="primary"
    >
      وکیل
    </NuxtLink>
    <NuxtLink
      to="/auth/login"
      class="p-3 rounded-10 cursor-poifnter transition-all"
      active-class="primary"
    >
      کاربر
    </NuxtLink>
  </div>
</template>
