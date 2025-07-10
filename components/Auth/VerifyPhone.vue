<template>
  <form @submit.prevent class="w-full relative">
    <h1 class="text-2xl mb-3">تایید شماره تلفن</h1>
    <div class="relative mb-4">
      <input
        type="text"
        id="phone"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="شماره تلفن"
      />
      <svg
        class="icon-inp"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7348 20.191C12.4232 20.0525 12.1163 19.9034 11.8148 19.744C10.3128 18.895 8.93348 17.8453 7.71481 16.624C6.13291 15.135 4.83363 13.3719 3.87981 11.42C3.36958 10.3711 3.02482 9.24944 2.85781 8.095C2.63134 6.92901 2.76024 5.72188 3.22781 4.63C3.51681 4.16 3.86481 3.73 4.26281 3.351C4.42432 3.16984 4.62079 3.02321 4.84041 2.91993C5.06003 2.81665 5.29828 2.75885 5.54081 2.75C6.04581 2.826 6.50281 3.09 6.81881 3.492C7.50881 4.259 8.24881 4.949 8.97781 5.678C9.26481 5.924 9.44381 6.273 9.47581 6.65C9.46381 6.967 9.34181 7.27 9.13081 7.507C8.88881 7.814 8.59481 8.095 8.31381 8.389C8.1444 8.55279 8.01482 8.75327 7.93507 8.97501C7.85532 9.19674 7.82752 9.43383 7.85381 9.668C8.03022 10.2156 8.33187 10.7144 8.73481 11.125C9.22081 11.79 9.70581 12.405 10.2548 13.056C11.2423 14.1965 12.4126 15.1647 13.7178 15.921C13.8983 16.0571 14.1117 16.1429 14.3362 16.1698C14.5607 16.1967 14.7883 16.1636 14.9958 16.074C15.4303 15.8321 15.8159 15.5113 16.1328 15.128C16.4078 14.793 16.8018 14.578 17.2318 14.527C17.6148 14.547 17.9758 14.711 18.2418 14.987C18.5858 15.281 18.8798 15.627 19.1998 15.946C19.5188 16.266 19.7748 16.496 20.0428 16.79C20.3641 17.0733 20.6665 17.376 20.9498 17.698C21.1698 17.982 21.2738 18.338 21.2438 18.695C21.1298 19.1223 20.8838 19.5027 20.5408 19.782C20.0586 20.2838 19.4727 20.6742 18.8239 20.9261C18.1752 21.1779 17.4793 21.285 16.7848 21.24C15.3789 21.1602 14.0026 20.8038 12.7348 20.191Z"
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
        id="codemeli"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="کد ملی"
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
          d="M9 11.5C10.1046 11.5 11 10.6046 11 9.5C11 8.39543 10.1046 7.5 9 7.5C7.89543 7.5 7 8.39543 7 9.5C7 10.6046 7.89543 11.5 9 11.5Z"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M13 15.5C13 16.605 13 17.5 9 17.5C5 17.5 5 16.605 5 15.5C5 14.395 6.79 13.5 9 13.5C11.21 13.5 13 14.395 13 15.5Z"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M2 12.5C2 8.729 2 6.843 3.172 5.672C4.344 4.501 6.229 4.5 10 4.5H14C17.771 4.5 19.657 4.5 20.828 5.672C21.999 6.844 22 8.729 22 12.5C22 16.271 22 18.157 20.828 19.328C19.656 20.499 17.771 20.5 14 20.5H10C6.229 20.5 4.343 20.5 3.172 19.328C2.001 18.156 2 16.271 2 12.5Z"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M19 12.5H15M19 9.5H14M19 15.5H16"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="relative mb-4">
      <input
        type="text"
        id="shomare-parvane"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="شماره پروانه وکالت"
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
          d="M4 17.5V7.5L11 17.5V7.5M15 17.5H20M15 10.5C15 11.2956 15.2634 12.0587 15.7322 12.6213C16.2011 13.1839 16.837 13.5 17.5 13.5C18.163 13.5 18.7989 13.1839 19.2678 12.6213C19.7366 12.0587 20 11.2956 20 10.5C20 9.70435 19.7366 8.94129 19.2678 8.37868C18.7989 7.81607 18.163 7.5 17.5 7.5C16.837 7.5 16.2011 7.81607 15.7322 8.37868C15.2634 8.94129 15 9.70435 15 10.5Z"
          stroke="#1E1E1E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <button
      @click="$emit('stepThree')"
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB"
    >
      ادامه
    </button>
  </form>
</template>

<script setup>
let showPass = ref(false)
</script>
