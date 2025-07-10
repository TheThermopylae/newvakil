<template>
  <section class="mt-5">
    <div class="flex justify-between items-center container mb-3">
      <TitleSection :line="true">
        <template #fa>
          <h2 class="font-yekB text-4xl">وکلای برتر</h2>
        </template>
      </TitleSection>
      <NuxtLink to="/" class="underline text-sm">مشاهده همه</NuxtLink>
    </div>
    <MainBestLawyersSlider />
  </section>
</template>
