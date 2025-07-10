<template>
  <form @submit.prevent class="w-full mt-5 relative">
    <div class="relative mb-1">
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
    </button>
    <div class="relative mb-4">
      <input
        type="text"
        id="otp"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="کد ورود"
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
    <button
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB"
    >
      ورود
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
let showPass = ref(false)

let value = ref('')
</script>

<style>
.icon-inp {
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
