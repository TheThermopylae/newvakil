<template>
  <NuxtLayout name="auth">
    <div class="flex items-center justify-between flex-col w-full lg:w1/3">
      <h1
        class="text-2xl font-yekB my-5"
        v-text="!showOtp ? 'وارد شوید' : 'کد ورود'"
      ></h1>
      <AuthFormOtpLog v-if="showOtp" />
      <AuthLawLogForm v-else @showOtp="showOtp = true" />
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: '| ورود به حساب'
})

let showOtp = ref(false)
</script>
