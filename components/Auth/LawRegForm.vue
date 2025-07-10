<template>
  <form @submit.prevent class="w-full relative">
    <AuthChangePageReg />
    <div class="relative mb-4">
      <input
        type="text"
        id="full-name"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="نام و نام خانوادگی"
      />
      <svg
        class="icon-inp"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.55851 21.9562C5.88651 21.9562 2.74951 21.4012 2.74951 19.1772C2.74951 16.9532 5.86651 14.9492 9.55851 14.9492C13.2305 14.9492 16.3665 16.9342 16.3665 19.1572C16.3665 21.3802 13.2505 21.9562 9.55851 21.9562Z"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.55861 11.7776C11.9686 11.7776 13.9226 9.82356 13.9226 7.41356C13.9226 5.00356 11.9686 3.04956 9.55861 3.04956C7.14861 3.04956 5.19461 5.00356 5.19461 7.41356C5.18561 9.81556 7.12661 11.7696 9.52761 11.7776H9.55861Z"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.8013 10.5789C18.2043 10.2039 19.2383 8.92488 19.2383 7.40288C19.2393 5.81488 18.1123 4.48888 16.6143 4.18188"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4607 14.1536C19.4487 14.1536 21.1467 15.5016 21.1467 16.7046C21.1467 17.4136 20.5617 18.1416 19.6717 18.3506"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <button
      @click="$emit('stepTwo')"
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB"
    >
      ادامه
    </button>
    <p class="text-sm mt-5 text-center">
      حساب کاربری ندارید؟
      <NuxtLink to="/auth/register" class="text-primary underline"
        >ثبت نام</NuxtLink
      >
    </p>
    <p class="text-sm mt-2 text-center">
      رمز عبور خود را فراموش کردید؟
      <NuxtLink to="/auth/register" class="text-primary underline"
        >بازیابی رمز عبور
      </NuxtLink>
    </p>
  </form>
</template>

<script setup>
let showPass = ref(false)
</script>
