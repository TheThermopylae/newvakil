<template>
  <section
    class="bg-main rounded-2xl py-4 w-1/3 xl:w-1/4 flex-col h-[calc(100vh-25px)] overflow-y-auto hidden lg:flex sticky top-2"
  >
    <NuxtLink to="/">
      <img class="block m-auto mt-3 mb-6" src="/logo.svg" alt="logo" />
    </NuxtLink>
    <h4 class="text-secondary-text mr-6">منو</h4>
    <div class="flex flex-col flex-1 justify-between gap-5">
      <UserPanelMenuLinks />
      <UserPanelOptionsLinks />
      <UserPanelUpgradeSub />
    </div>
  </section>
</template>
