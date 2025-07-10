<template>
  <form @submit.prevent class="w-full relative">
    <AuthChangePageLog />
    <div class="relative mb-4">
      <input
        type="text"
        id="email-phone"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="شماره تلفن"
      />
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon-inp"
      >
        <path
          d="M12.7348 20.691C12.4232 20.5525 12.1163 20.4034 11.8148 20.244C10.3128 19.395 8.93348 18.3453 7.71481 17.124C6.13291 15.635 4.83363 13.8719 3.87981 11.92C3.36958 10.8711 3.02482 9.74944 2.85781 8.595C2.63134 7.42901 2.76024 6.22188 3.22781 5.13C3.51681 4.66 3.86481 4.23 4.26281 3.851C4.42432 3.66984 4.62079 3.52321 4.84041 3.41993C5.06003 3.31665 5.29828 3.25885 5.54081 3.25C6.04581 3.326 6.50281 3.59 6.81881 3.992C7.50881 4.759 8.24881 5.449 8.97781 6.178C9.26481 6.424 9.44381 6.773 9.47581 7.15C9.46381 7.467 9.34181 7.77 9.13081 8.007C8.88881 8.314 8.59481 8.595 8.31381 8.889C8.1444 9.05279 8.01482 9.25327 7.93507 9.47501C7.85532 9.69674 7.82752 9.93383 7.85381 10.168C8.03022 10.7156 8.33187 11.2144 8.73481 11.625C9.22081 12.29 9.70581 12.905 10.2548 13.556C11.2423 14.6965 12.4126 15.6647 13.7178 16.421C13.8983 16.5571 14.1117 16.6429 14.3362 16.6698C14.5607 16.6967 14.7883 16.6636 14.9958 16.574C15.4303 16.3321 15.8159 16.0113 16.1328 15.628C16.4078 15.293 16.8018 15.078 17.2318 15.027C17.6148 15.047 17.9758 15.211 18.2418 15.487C18.5858 15.781 18.8798 16.127 19.1998 16.446C19.5188 16.766 19.7748 16.996 20.0428 17.29C20.3641 17.5733 20.6665 17.876 20.9498 18.198C21.1698 18.482 21.2738 18.838 21.2438 19.195C21.1298 19.6223 20.8838 20.0027 20.5408 20.282C20.0586 20.7838 19.4727 21.1742 18.8239 21.4261C18.1752 21.6779 17.4793 21.785 16.7848 21.74C15.3789 21.6602 14.0026 21.3038 12.7348 20.691Z"
          stroke="black"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
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
  </form>
</template>
