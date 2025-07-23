<template>
  <ul class="mt-2">
    <li class="mb-6">
      <NuxtLink
        to="/user-dashboard/dashboard"
        class="flex items-center gap-3 px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/user-dashboard/dashboard'"
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
        to="/user-dashboard/profile"
        class="flex items-center gap-3 px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/user-dashboard/profile'"
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
            d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"
            color="currentColor"
          />
        </svg>
        پروفایل
      </NuxtLink>
    </li>
    <li class="mb-6">
      <NuxtLink
        to="/user-dashboard/subscribe"
        class="flex items-center gap-3 px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/user-dashboard/subscribe'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6 8h4"
            />
            <path
              stroke-width="1.5"
              d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z"
            />
            <path
              stroke-width="1.5"
              d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.991 12h.01"
            />
          </g>
        </svg>
        اشتراک
      </NuxtLink>
    </li>
    <li class="mb-6">
      <NuxtLink
        to="/user-dashboard/subscribe"
        class="flex items-center px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/user-dashboard/subscribe'"
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
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9c.053-.83.053-1.69 0-2.52c-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9a20 20 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184c.467.845.159 1.9-.328 2.823c-.35.665-.526.997-.385 1.237c.14.24.455.248 1.084.263c1.245.03 2.084-.322 2.75-.813c.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34c1.425.094 2.914.094 4.342 0M11.995 12h.01m3.986 0H16m-8 0h.009"
              color="currentColor"
            />
          </svg>
          پیام ها
        </div>
        <span
          class="px-4 py-1 rounded-full primary absolute left-6 w-[55px] flex justify-center"
          >5+</span
        >
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/user-dashboard/subscribe"
        class="flex items-center px-6 relative text-secondary-text"
      >
        <div
          v-show="route.path == '/user-dashboard/subscribe'"
          class="w-1.5 h-10 absolute rounded-l-full bg-primary right-0"
        ></div>
        <div class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            >
              <path
                d="M3.5 6.5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2"
              />
              <path d="m5.5 7.5l5 3l5-3" />
            </g>
          </svg>
          تعاملات
        </div>
        <span
          class="px-4 py-1 rounded-full primary absolute left-6 w-[55px] flex justify-center"
          >12+</span
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
