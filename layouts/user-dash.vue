<template>
  <ClientOnly>
    <div class="container py-3 flex justify-between gap-5">
      <UserPanelSideBar />
      <div class="flex-grow">
        <UserPanelTheHeader />
        <div class="bg-main p-3 rounded-2xl">
          <slot />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
