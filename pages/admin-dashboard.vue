<template>
  <ClientOnly>
    <NuxtPage></NuxtPage>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  layout: 'admin-dash'
})

useHead({
  titleTemplate : 'پنل مدیریت %s'
})
</script>
