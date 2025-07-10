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
    <div class="relative mb-4">
      <input
        type="text"
        id="email-phone"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="ایمیل | شماره همراه"
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
          d="M17.2678 9.0611L13.0024 12.4954C12.1952 13.1282 11.0636 13.1282 10.2564 12.4954L5.95435 9.0611"
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
    <!-- <div class="relative mb-4">
      <input
        :type="!showPass ? 'password' : 'text'"
        id="password"
        class="border border-[#2D30FF]/30 p-[22px] w-full bg-field rounded-15 placeholder:text-black placeholder:text-xl text-xl"
        placeholder="رمز عبور"
      />
      <svg
        @click="showPass = true"
        v-if="!showPass"
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="25px"
        viewBox="0 0 24 24"
        class="cursor-pointer icon-inp"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l2.847-2.847c1.367.644 2.94 1.067 4.623 1.067c2.684 0 5.09-1.077 6.82-2.405c.867-.665 1.583-1.407 2.089-2.136c.492-.709.841-1.486.841-2.209s-.35-1.5-.841-2.209c-.506-.729-1.222-1.47-2.088-2.136q-.394-.303-.832-.583zM16.9 8.161l-1.771 1.771a3.75 3.75 0 0 1-5.197 5.197l-1.417 1.416A9.3 9.3 0 0 0 12 17.25c2.287 0 4.38-.923 5.907-2.095c.762-.585 1.364-1.218 1.77-1.801c.419-.604.573-1.077.573-1.354s-.154-.75-.573-1.354c-.406-.583-1.008-1.216-1.77-1.801q-.47-.361-1.008-.684m-5.87 5.87a2.25 2.25 0 0 0 3-3z"
          clip-rule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 5.25c1.032 0 2.024.16 2.951.431a.243.243 0 0 1 .1.407l-.824.825a.25.25 0 0 1-.237.067A9 9 0 0 0 12 6.75c-2.287 0-4.38.923-5.907 2.095c-.762.585-1.364 1.218-1.77 1.801c-.419.604-.573 1.077-.573 1.354s.154.75.573 1.354c.354.51.858 1.057 1.488 1.577c.116.095.127.27.02.377l-.708.709a.246.246 0 0 1-.333.016a9.5 9.5 0 0 1-1.699-1.824C2.6 13.5 2.25 12.723 2.25 12s.35-1.5.841-2.209c.506-.729 1.222-1.47 2.088-2.136C6.91 6.327 9.316 5.25 12 5.25"
        />
        <path
          fill="currentColor"
          d="M12 8.25q.178 0 .351.016c.197.019.268.254.129.394l-1.213 1.212a2.26 2.26 0 0 0-1.395 1.395L8.66 12.48c-.14.14-.375.068-.394-.129A3.75 3.75 0 0 1 12 8.25"
        />
      </svg>
      <svg
        @click="showPass = false"
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="25px"
        viewBox="0 0 512 512"
        class="cursor-pointer icon-inp"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112"
        />
        <circle
          cx="256"
          cy="256"
          r="80"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
      </svg>
    </div> -->
    <button
      @click="$emit('showOtp')"
      class="cursor-pointer primary block text-center w-full py-4.5 rounded-full text-2xl font-yekB"
    >
      ثبت نام
    </button>
    <ClientOnly>
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
    </ClientOnly>

  </form>
</template>

<script setup>
let showPass = ref(false)
</script>
