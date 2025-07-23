<template>
  <ul class="mt-2">
    <li class="mb-6">
      <NuxtLink
        @click="$emit('changePage')"
        to="/admin-dashboard/dashboard"
        class="flex items-center gap-3 px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/admin-dashboard/dashboard'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932m0 10.75h-3.875a1.94 1.94 0 0 0-1.942 1.933v3.875a1.94 1.94 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942v-3.875a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"
          />
        </svg>
        داشبورد
      </NuxtLink>
    </li>
    <li class="mb-6">
      <NuxtLink
        @click="$emit('changePage')"
        to="/admin-dashboard/users"
        class="flex items-center gap-3 px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/admin-dashboard/users'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89a8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.84 8a57 57 0 0 0-98.16 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8"
          />
        </svg>
        مدیریت کاربران
      </NuxtLink>
    </li>
    <li class="mb-6">
      <NuxtLink
        @click="$emit('changePage')"
        to="/admin-dashboard/lawyers"
        class="flex items-center gap-3 px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/admin-dashboard/lawyers'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path
              d="m16.658 13l2.772 2.38c.583.501.875.751 1.12 1.034c.39.451.697.967.903 1.522c.128.346.205.715.358 1.454c.154.744.189 2.11.189 2.61M7.342 13L4.57 15.38c-.583.501-.874.751-1.119 1.034a5 5 0 0 0-.903 1.522c-.129.346-.205.715-.358 1.454C2.036 20.134 2 21.5 2 22"
            />
            <path
              d="M16.5 11c0 2.762-2.015 5-4.5 5s-4.5-2.239-4.5-5m9 0c0-2.058-.783-4.592-2.5-4.592c-.783 0-1 1.092-2 1.092s-1.217-1.092-2-1.092c-1.717 0-2.5 2.534-2.5 4.592m9 0v1a2 2 0 1 0 3.16-1.63A2.5 2.5 0 0 0 18 6c0-2.21-2.5-4-6-4S6 3.79 6 6a2.5 2.5 0 0 0-1.66 4.37A2 2 0 1 0 7.5 12v-1m6.53 5l1.138 3.367c.71 2.098.376 2.633-1.925 2.633h-2.486c-2.301 0-2.634-.535-1.925-2.633L9.971 16"
            />
          </g>
        </svg>
        مدیریت وکلا
      </NuxtLink>
    </li>
    <li class="mb-6">
      <NuxtLink
        @click="$emit('changePage')"
        to="/"
        class="flex items-center px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <div class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3.5 5A2.5 2.5 0 0 1 6 2.5h10A2.5 2.5 0 0 1 18.5 5v5.5a.5.5 0 0 1-1 0V5A1.5 1.5 0 0 0 16 3.5H6A1.5 1.5 0 0 0 4.5 5v14A1.5 1.5 0 0 0 6 20.5h7a.5.5 0 0 1 0 1H6A2.5 2.5 0 0 1 3.5 19z"
            />
            <path
              fill="currentColor"
              d="M18 13.5a.5.5 0 0 1 .5.5v.667h.169c.95 0 1.831.684 1.831 1.666a.5.5 0 1 1-1 0c0-.31-.306-.666-.831-.666h-1.506c-.43 0-.663.293-.663.516c0 .213.052.285.083.318c.046.049.139.106.35.169l2.417.701c.263.078.565.198.796.444c.247.263.354.604.354 1.002c0 .898-.811 1.516-1.663 1.516H18.5V21a.5.5 0 0 1-1 0v-.667h-.169c-.95 0-1.831-.684-1.831-1.666a.5.5 0 1 1 1 0c0 .31.306.666.831.666h1.506c.43 0 .663-.293.663-.516c0-.213-.052-.285-.083-.318c-.046-.049-.139-.106-.35-.169l-2.417-.701c-.263-.078-.565-.198-.796-.444c-.247-.263-.354-.604-.354-1.002c0-.898.811-1.516 1.663-1.516h.337V14a.5.5 0 0 1 .5-.5M6.5 11a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-3 3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5m-3 3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M6.784 4.5h8.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a5 5 0 0 1-.353.009H6.784c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385a5 5 0 0 1-.009-.353V5.784c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1a5 5 0 0 1 .353-.009m-.278 1.006v.006c-.006.059-.006.14-.006.288v1.4a4 4 0 0 0 .006.294h.006c.059.006.14.006.288.006h8.4c.148 0 .23 0 .288-.005h.006v-.007A4 4 0 0 0 15.5 7.2V5.8a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 15.2 5.5H6.8a4 4 0 0 0-.294.006"
            />
          </svg>
          مدیریت پلن ها
        </div>
      </NuxtLink>
    </li>
    <li class="mb-6">
      <NuxtLink
        @click="$emit('changePage')"
        to="/"
        class="flex items-center px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <div class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m10.5 7.5l2 3l-2 3h-3l-2-3l2-3z"
                stroke-width="1"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.5 4.5l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3m-12-15l2 3m5 9l-1 1.5m-4-4.5l-1 1.5m-1-4.5h-1m13 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"
                stroke-width="1"
              />
              <circle cx="10.5" cy="19.5" r=".5" fill="currentColor" />
              <circle cx="5.5" cy="16.5" r=".5" fill="currentColor" />
              <circle cx="2.5" cy="10.5" r=".5" fill="currentColor" />
            </g>
          </svg>
          وکلای جدید
        </div>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex items-center px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <div class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path
                d="M14.186 2.753v3.596c0 .487.195.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"
              />
              <path
                d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189M7.647 7.647h3.265M7.647 12h8.706m-8.706 4.353h8.706"
              />
            </g>
          </svg>
          گذارشات
        </div>
        <span
          class="px-4 py-1 rounded-full primary absolute left-6 w-[55px] flex justify-center"
          >2+</span
        >
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
let route = useRoute()
</script>

<style scoped>
.router-link-active {
  color: #3738fe;
}
</style>
