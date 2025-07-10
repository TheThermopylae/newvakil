<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: 'Iran Advocate %s'
})
</script>

<!-- :pt="{
        option: ({ context }) => ({
          class: context.selected ? 'bg-secondary !text-white' : ''
        }),
        root: 'hover:!border-[#EFEFEF] !shadow-none !bg-[#F7F7F8]'
      }" -->
