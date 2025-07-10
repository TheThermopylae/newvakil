<template>
  <form @submit.prevent class="w-full relative">
    <AuthChangePageLog />
    <div class="relative mb-4">
      <input
        type="text"
        id="email-phone"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="ایمیل | شماره تلفن"
      />
      <svg
        class="icon-inp"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2678 7.06116L12.0024 10.4954C11.1952 11.1283 10.0636 11.1283 9.25641 10.4954L4.95435 7.06116"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.88787 1.5H15.3158C16.6752 1.51525 17.969 2.08993 18.896 3.0902C19.823 4.09048 20.3022 5.42903 20.222 6.79412V13.322C20.3022 14.6871 19.823 16.0256 18.896 17.0259C17.969 18.0262 16.6752 18.6009 15.3158 18.6161H5.88787C2.96796 18.6161 1 16.2407 1 13.322V6.79412C1 3.87545 2.96796 1.5 5.88787 1.5Z"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="relative mb-4">
      <input
        type="text"
        id="email-phone"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="رمز عبور"
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
          d="M9.76045 14.8668C9.18545 14.2928 8.83545 13.5128 8.83545 12.6378C8.83545 10.8848 10.2474 9.4718 11.9994 9.4718C12.8664 9.4718 13.6644 9.8228 14.2294 10.3968"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.1046 13.199C14.8726 14.489 13.8566 15.507 12.5676 15.741"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.65451 17.9724C5.06751 16.7264 3.72351 14.9064 2.74951 12.6374C3.73351 10.3584 5.08651 8.52835 6.68351 7.27235C8.27051 6.01635 10.1015 5.33435 11.9995 5.33435C13.9085 5.33435 15.7385 6.02635 17.3355 7.29135"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.4475 9.49084C20.1355 10.4048 20.7405 11.4598 21.2495 12.6368C19.2825 17.1938 15.8065 19.9388 11.9995 19.9388C11.1365 19.9388 10.2855 19.7988 9.46753 19.5258"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.8868 4.74963L4.11279 20.5236"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <button
      @click="$emit('showOtp')"
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB mb-5"
    >
      ورود
    </button>
    <p class="text-sm mt-2 text-center">
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
