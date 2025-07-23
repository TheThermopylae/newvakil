<template>
  <section
    class="bg-main p-4 rounded-2xl md:flex justify-between items-center mb-4 gap-3"
  >
    <div class="flex items-center gap-3">
      <Button
        icon="pi pi-bars"
        @click="visible = true"
        pt:root="!rounded-full !size-[52px] !bg-white !border-none !text-black !hidden md:!flex lg:!hidden"
      />
      <div
        class="flex gap-3 items-center mb-3 md:mb-0"
        v-if="route.path.startsWith('/user-dashboard/')"
      >
        <img
          src="/searchlawyer/law1.svg"
          alt="avatar"
          class="size-[52px] rounded-full"
        />
        <div>
          <h4 class="text-xl font-yekB">سهیل رضایی</h4>
          <p class="text-secondary-text text-sm">soheilrezdwadaaie@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="flex gap-3">
      <Button
        icon="pi pi-bars"
        @click="visible = true"
        pt:root="!rounded-full !size-[52px] !bg-white !border-none !text-black md:!hidden"
      />
      <NuxtLink to="/" class="size-[52px] rounded-full flex-center bg-white"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.28637 4.97897C7.35847 3.59676 9.01984 2.55151 11.3042 2.55151C13.5881 2.55151 15.2494 3.59679 16.3216 4.97893C17.3769 6.33931 17.8682 8.02952 17.8682 9.4003C17.8682 9.79375 17.8562 10.0859 17.8471 10.3075C17.8453 10.3531 17.8435 10.3956 17.842 10.4355C17.8331 10.674 17.8348 10.7885 17.8532 10.902C17.8949 11.16 18.0269 11.478 18.5544 12.6404C18.5596 12.652 18.5646 12.6638 18.5692 12.6757C18.9503 13.6564 18.8651 14.5586 18.4119 15.3231C17.9793 16.0527 17.2524 16.5899 16.4667 16.9819C14.8953 17.7658 12.818 18.1032 11.3042 18.1032C9.78995 18.1032 7.71243 17.7658 6.14106 16.9819C5.35528 16.5899 4.62835 16.0526 4.19596 15.323C3.74283 14.5584 3.65781 13.6562 4.03915 12.6756C4.04376 12.6637 4.04869 12.652 4.05395 12.6404C4.58141 11.478 4.71343 11.16 4.75512 10.902C4.77345 10.7885 4.77526 10.674 4.76635 10.4355C4.76485 10.3956 4.76311 10.3531 4.76124 10.3075C4.75217 10.0859 4.74021 9.79376 4.74021 9.4003C4.74021 8.0296 5.23115 6.33938 6.28637 4.97897ZM7.38044 5.82758C6.52312 6.93288 6.12483 8.3209 6.12483 9.4003C6.12483 9.76316 6.13552 10.0253 6.14452 10.246C6.14647 10.2936 6.14833 10.3393 6.14999 10.3837C6.15918 10.6292 6.164 10.8629 6.12201 11.1228C6.044 11.6056 5.80685 12.1283 5.33241 13.1738L5.32315 13.1941C5.09342 13.7966 5.16712 14.2459 5.38711 14.6172C5.62988 15.0268 6.09526 15.4117 6.75915 15.7429C8.08712 16.4053 9.93848 16.7185 11.3042 16.7185C12.6694 16.7185 14.5205 16.4053 15.8486 15.7429C16.5124 15.4117 16.9779 15.0268 17.2208 14.6171C17.4409 14.2458 17.5146 13.7965 17.2852 13.1941L17.2759 13.1737C16.8015 12.1283 16.5643 11.6056 16.4863 11.1228C16.4443 10.8629 16.4492 10.6292 16.4584 10.3837C16.46 10.3394 16.4619 10.2936 16.4638 10.246C16.4728 10.0253 16.4836 9.76317 16.4836 9.4003C16.4836 8.32098 16.0851 6.93295 15.2276 5.82762C14.3871 4.74404 13.1126 3.93613 11.3042 3.93613C9.49531 3.93613 8.22086 4.74407 7.38044 5.82758Z"
            fill="#1E1E1E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.71049 19.341C8.99565 19.0863 9.43334 19.111 9.68802 19.3962C10.6163 20.4353 11.9983 20.4257 12.9205 19.3956C13.1755 19.1107 13.6132 19.0865 13.8981 19.3416C14.1829 19.5966 14.2071 20.0342 13.9521 20.3191C12.4849 21.958 10.1395 21.9801 8.65536 20.3186C8.40066 20.0334 8.42533 19.5958 8.71049 19.341Z"
            fill="#1E1E1E"
          />
        </svg>
      </NuxtLink>
      <div class="relative flex-grow">
        <input
          type="text"
          placeholder="جستجوی پرونده"
          class="placeholder:text-xs text-xs p-3 pr-10 rounded-full bg-white h-[52px] md:w-[245px] w-full"
        />
        <svg
          class="absolute top-1/2 -translate-y-1/2 right-3"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.76663 18.7552C14.7309 18.7552 18.7552 14.7309 18.7552 9.76663C18.7552 4.80239 14.7309 0.778076 9.76663 0.778076C4.80239 0.778076 0.778076 4.80239 0.778076 9.76663C0.778076 14.7309 4.80239 18.7552 9.76663 18.7552Z"
            stroke="#1E1E1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0183 16.4852L19.5423 20.0001"
            stroke="#1E1E1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <Drawer
      v-model:visible="visible"
      position="right"
      pt:content="!p-0 !h-screen !flex !flex-col !justify-between"
      pt:header="!pl-4"
    >
      <template #header>
        <NuxtLink to="/">
          <img src="/logo.svg" alt="logo" />
        </NuxtLink>
      </template>
      <div v-if="route.path.startsWith('/admin-dashboard')">
        <AdminPanelMenuLinks @changePage="visible = faslse" />
        <AdminPanelOptionsLinks class="mt-10" />
      </div>
      <div v-else class="h-screen flex flex-col justify-between pb-3 gap-5">
        <UserPanelMenuLinks />
        <UserPanelOptionsLinks />
        <UserPanelUpgradeSub />
      </div>
    </Drawer>
  </section>
</template>

<script setup>
let route = useRoute()

let visible = ref(false)
</script>
