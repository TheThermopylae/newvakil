<template>
  <form @submit.prevent class="w-full mt-5 relative">
    <!-- <div class="relative mb-1">
      <input
        type="text"
        id="phone-email"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="ایمیل | شماره تلفن"
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
          d="M17.2676 9.06116L13.0022 12.4954C12.1949 13.1283 11.0634 13.1283 10.2562 12.4954L5.9541 9.06116"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <button class="text-primary underline mb-3 text-xs">
      ارسال مججد کد ورود
    </button> -->
    <div class="relative mb-4">
      <input
        type="password"
        id="password"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="رمز عبور جدید"
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
          d="M12.3749 2.50177C15.2949 2.50177 17.6729 4.87977 17.6729 7.80277L17.6728 9.37937C19.448 9.99718 20.725 11.6872 20.725 13.6706V17.9596C20.725 20.4646 18.688 22.5016 16.183 22.5016H8.542C6.037 22.5016 4 20.4646 4 17.9596V13.6706C4 11.6876 5.27652 9.99782 7.05121 9.37972L7.0519 7.80277C7.0579 6.36277 7.6149 5.03377 8.6199 4.03777C9.6259 3.04077 10.9539 2.46377 12.3749 2.50177ZM16.183 10.6286H8.542C6.864 10.6286 5.5 11.9926 5.5 13.6706V17.9596C5.5 19.6376 6.864 21.0016 8.542 21.0016H16.183C17.86 21.0016 19.225 19.6376 19.225 17.9596V13.6706C19.225 11.9926 17.86 10.6286 16.183 10.6286ZM12.3623 13.9544C12.7763 13.9544 13.1123 14.2904 13.1123 14.7044V16.9254C13.1123 17.3394 12.7763 17.6754 12.3623 17.6754C11.9483 17.6754 11.6123 17.3394 11.6123 16.9254V14.7044C11.6123 14.2904 11.9483 13.9544 12.3623 13.9544ZM12.3719 4.00177H12.3559C11.3429 4.00177 10.3939 4.39177 9.6769 5.10277C8.9549 5.81677 8.5559 6.76977 8.5519 7.78577L8.551 9.128H16.172L16.1729 7.80277C16.1729 5.70677 14.4679 4.00177 12.3719 4.00177Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
    <div class="relative mb-4">
      <input
        type="password"
        id="password"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="تکرار رمز عبور"
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
          d="M12.3749 2.50177C15.2949 2.50177 17.6729 4.87977 17.6729 7.80277L17.6728 9.37937C19.448 9.99718 20.725 11.6872 20.725 13.6706V17.9596C20.725 20.4646 18.688 22.5016 16.183 22.5016H8.542C6.037 22.5016 4 20.4646 4 17.9596V13.6706C4 11.6876 5.27652 9.99782 7.05121 9.37972L7.0519 7.80277C7.0579 6.36277 7.6149 5.03377 8.6199 4.03777C9.6259 3.04077 10.9539 2.46377 12.3749 2.50177ZM16.183 10.6286H8.542C6.864 10.6286 5.5 11.9926 5.5 13.6706V17.9596C5.5 19.6376 6.864 21.0016 8.542 21.0016H16.183C17.86 21.0016 19.225 19.6376 19.225 17.9596V13.6706C19.225 11.9926 17.86 10.6286 16.183 10.6286ZM12.3623 13.9544C12.7763 13.9544 13.1123 14.2904 13.1123 14.7044V16.9254C13.1123 17.3394 12.7763 17.6754 12.3623 17.6754C11.9483 17.6754 11.6123 17.3394 11.6123 16.9254V14.7044C11.6123 14.2904 11.9483 13.9544 12.3623 13.9544ZM12.3719 4.00177H12.3559C11.3429 4.00177 10.3939 4.39177 9.6769 5.10277C8.9549 5.81677 8.5559 6.76977 8.5519 7.78577L8.551 9.128H16.172L16.1729 7.80277C16.1729 5.70677 14.4679 4.00177 12.3719 4.00177Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
    <button
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB"
    >
      ورود
    </button>
    <p class="mt-5 text-center">
      حساب کاربری ندارید؟
      <NuxtLink to="/auth/register" class="text-primary underline">
        ثبت نام</NuxtLink
      >
    </p>
  </form>
</template>

<script setup></script>

<style scoped>
.icon-inp {
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
