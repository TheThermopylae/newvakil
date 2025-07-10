<template>
  <NuxtLayout name="auth">
    <div class="flex items-center justify-between flex-col w-full lg:w1/3">
      <h1 class="text-2xl font-yekB my-5">بازیابی رمز عبور</h1>
      <AuthForgetForm />
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: '| بازیابی رمز عبور'
})

</script>
