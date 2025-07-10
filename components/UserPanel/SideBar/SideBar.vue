<template>
  <section
    class="bg-main rounded-2xl py-4 px6 w-1/4 flex flex-col h-[calc(100vh-25px)] overflow-y-auto"
  >
    <img class="block m-auto mt-3 mb-6" src="/logo.svg" alt="logo" />
    <h4 class="text-secondary-text mr-6">منو</h4>
    <div class="flex flex-col flex-1 justify-between gap-5">
      <UserPanelSideBarMenuLinks />
      <UserPanelSideBarOptionsLinks />
      <UserPanelSideBarUpgradeSub />
    </div>
  </section>
</template>
