<template>
  <ClientOnly>
    <div class="container py-3 lg:flex justify-between gap-5">
      <AdminPanelSideBar />
      <div class="lg:w-2/3 xl:w-3/4">
        <PanelHeader />
        <div class="bg-main p-4 rounded-2xl">
          <slot />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
