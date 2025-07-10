<template>
  <form @submit.prevent class="w-full mt-5 relative">
    <h1 class="text-2xl mb-3" v-if="route.path == '/auth/lawyer-register'">تایید رمز عبور</h1>
    <div class="relative mb-3">
      <input
        type="number"
        id="otp-code"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="کد ورود"
      />
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer icon-inp"
      >
        <path
          d="M4.31248 13.379C4.31248 19.783 11.9845 22.106 11.9845 22.106C11.9845 22.106 19.6565 19.783 19.6565 13.379C19.6565 6.974 19.9345 6.474 19.3195 5.858C18.7035 5.242 12.9905 3.25 11.9845 3.25C10.9785 3.25 5.26548 5.242 4.65048 5.858C4.1377 6.37079 4.24453 5.67473 4.2947 9.5"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.38574 12.3746L11.2777 14.2696L15.1757 10.3696"
          stroke="#1E1E1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="relative mb-3">
      <input
        type="password"
        id="password"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="رمز عبور"
      />
      <svg
        width="17"
        height="21"
        viewBox="0 0 17 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer icon-inp"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.3749 0.501767C11.2949 0.501767 13.6729 2.87977 13.6729 5.80277L13.6728 7.37937C15.448 7.99718 16.725 9.68718 16.725 11.6706V15.9596C16.725 18.4646 14.688 20.5016 12.183 20.5016H4.542C2.037 20.5016 0 18.4646 0 15.9596V11.6706C0 9.68755 1.27652 7.99782 3.05121 7.37972L3.0519 5.80277C3.0579 4.36277 3.6149 3.03377 4.6199 2.03777C5.6259 1.04077 6.9539 0.463767 8.3749 0.501767ZM12.183 8.62857H4.542C2.864 8.62857 1.5 9.99257 1.5 11.6706V15.9596C1.5 17.6376 2.864 19.0016 4.542 19.0016H12.183C13.86 19.0016 15.225 17.6376 15.225 15.9596V11.6706C15.225 9.99257 13.86 8.62857 12.183 8.62857ZM8.3623 11.9544C8.7763 11.9544 9.1123 12.2904 9.1123 12.7044V14.9254C9.1123 15.3394 8.7763 15.6754 8.3623 15.6754C7.9483 15.6754 7.6123 15.3394 7.6123 14.9254V12.7044C7.6123 12.2904 7.9483 11.9544 8.3623 11.9544ZM8.3719 2.00177H8.3559C7.3429 2.00177 6.3939 2.39177 5.6769 3.10277C4.9549 3.81677 4.5559 4.76977 4.5519 5.78577L4.551 7.128H12.172L12.1729 5.80277C12.1729 3.70677 10.4679 2.00177 8.3719 2.00177Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
    <div class="relative mb-3">
      <input
        type="password"
        id="password"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="تکرار رمز عبور"
      />
      <svg
        width="17"
        height="21"
        viewBox="0 0 17 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer icon-inp"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.3749 0.501767C11.2949 0.501767 13.6729 2.87977 13.6729 5.80277L13.6728 7.37937C15.448 7.99718 16.725 9.68718 16.725 11.6706V15.9596C16.725 18.4646 14.688 20.5016 12.183 20.5016H4.542C2.037 20.5016 0 18.4646 0 15.9596V11.6706C0 9.68755 1.27652 7.99782 3.05121 7.37972L3.0519 5.80277C3.0579 4.36277 3.6149 3.03377 4.6199 2.03777C5.6259 1.04077 6.9539 0.463767 8.3749 0.501767ZM12.183 8.62857H4.542C2.864 8.62857 1.5 9.99257 1.5 11.6706V15.9596C1.5 17.6376 2.864 19.0016 4.542 19.0016H12.183C13.86 19.0016 15.225 17.6376 15.225 15.9596V11.6706C15.225 9.99257 13.86 8.62857 12.183 8.62857ZM8.3623 11.9544C8.7763 11.9544 9.1123 12.2904 9.1123 12.7044V14.9254C9.1123 15.3394 8.7763 15.6754 8.3623 15.6754C7.9483 15.6754 7.6123 15.3394 7.6123 14.9254V12.7044C7.6123 12.2904 7.9483 11.9544 8.3623 11.9544ZM8.3719 2.00177H8.3559C7.3429 2.00177 6.3939 2.39177 5.6769 3.10277C4.9549 3.81677 4.5559 4.76977 4.5519 5.78577L4.551 7.128H12.172L12.1729 5.80277C12.1729 3.70677 10.4679 2.00177 8.3719 2.00177Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
    <button
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB"
    >
      ثبت نام
    </button>
    <!-- <ClientOnly>
      <svg
        class="hidden lg:block absolute -left-5 -translate-x-full -top-5 z-[-10]"
        width="237"
        height="98"
        viewBox="0 0 237 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-13.1" y="-13.1" width="263.2" height="124.2"
          ><div
            xmlns="http://www.w3.org/1999/xhtml"
            style="
              backdrop-filter: blur(6.55px);
              clip-path: url(#bgblur_0_1342_825_clip_path);
              height: 100%;
              width: 100%;
            "
          ></div
        ></foreignObject>
        <path
          data-figma-bg-blur-radius="13.1"
          d="M237 14C237 6.26801 230.732 0 223 0H34C15.2223 0 0 15.2223 0 34V64C0 82.7777 15.2223 98 34 98H166.5C205.436 98 237 66.4361 237 27.5V14Z"
          fill="#6C6CFF"
          fill-opacity="0.12"
        />
        <defs>
          <clipPath
            id="bgblur_0_1342_825_clip_path"
            transform="translate(13.1 13.1)"
          >
            <path
              d="M237 14C237 6.26801 230.732 0 223 0H34C15.2223 0 0 15.2223 0 34V64C0 82.7777 15.2223 98 34 98H166.5C205.436 98 237 66.4361 237 27.5V14Z"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        class="hidden lg:block absolute -bottom-5 -left-32 -translate-x-1/2 z-[-10]"
        width="271"
        height="141"
        viewBox="0 0 271 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-13.1" y="-13.1" width="297.2" height="167.2"
          ><div
            xmlns="http://www.w3.org/1999/xhtml"
            style="
              backdrop-filter: blur(6.55px);
              clip-path: url(#bgblur_0_1342_813_clip_path);
              height: 100%;
              width: 100%;
            "
          ></div
        ></foreignObject>
        <path
          data-figma-bg-blur-radius="13.1"
          d="M0 34C0 15.2223 15.2223 0 34 0H243.761C258.805 0 271 12.1952 271 27.2386C271 90.0673 220.067 141 157.239 141H34C15.2223 141 0 125.778 0 107V34Z"
          fill="#6C6CFF"
          fill-opacity="0.12"
        />
        <defs>
          <clipPath
            id="bgblur_0_1342_813_clip_path"
            transform="translate(13.1 13.1)"
          >
            <path
              d="M0 34C0 15.2223 15.2223 0 34 0H243.761C258.805 0 271 12.1952 271 27.2386C271 90.0673 220.067 141 157.239 141H34C15.2223 141 0 125.778 0 107V34Z"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        class="hidden lg:block absolute -right-32 bottom-1/2 -translate-y-1/2 z-[-10]"
        width="177"
        height="91"
        viewBox="0 0 177 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-13.1" y="-13.1" width="297.2" height="117.2"
          ><div
            xmlns="http://www.w3.org/1999/xhtml"
            style="
              backdrop-filter: blur(6.55px);
              clip-path: url(#bgblur_0_1342_815_clip_path);
              height: 100%;
              width: 100%;
            "
          ></div
        ></foreignObject>
        <path
          data-figma-bg-blur-radius="13.1"
          d="M0 14C0 6.26801 6.26801 0 14 0H237C255.778 0 271 15.2223 271 34V57C271 75.7777 255.778 91 237 91H70.5C31.5639 91 0 59.4361 0 20.5V14Z"
          fill="#6C6CFF"
          fill-opacity="0.12"
        />
        <defs>
          <clipPath
            id="bgblur_0_1342_815_clip_path"
            transform="translate(13.1 13.1)"
          >
            <path
              d="M0 14C0 6.26801 6.26801 0 14 0H237C255.778 0 271 15.2223 271 34V57C271 75.7777 255.778 91 237 91H70.5C31.5639 91 0 59.4361 0 20.5V14Z"
            />
          </clipPath>
        </defs>
      </svg>
    </ClientOnly> -->
  </form>
</template>

<script setup>
let route = useRoute()
</script>

<style scoped>
.icon-inp {
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
