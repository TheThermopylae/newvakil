<template>
  <NuxtLayout name="auth">
    <div class="flex items-center justify-between flex-col w-full lg:w1/3">
      <p class="text-2xl font-yekB my-10">به وکیل من خوش آمدید</p>
      <h1 class="text-2xl font-yekB mb-5">ثبت نام کنید</h1>
      <AuthFormOtpReg v-if="showOtp" />
      <AuthUserRegForm v-else @showOtp="showOtp = true" />
      <div class="flex gap-2 items-center mt-3">
        <Checkbox v-model="checked" binary />
        <p class="text-sm">
          <NuxtLink to="/" class="text-primary underline"
            >شرایط و قوانین</NuxtLink
          >
          استفاده وکیل من را میپذریم
        </p>
      </div>
      <p class="text-sm mt-2">
        حساب کاربری دارید؟
        <NuxtLink to="/auth/login" class="text-primary underline"
          >وارد شوید</NuxtLink
        >
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: '| ساخت حساب'
})

let checked = ref()
let showOtp = ref(false)
</script>

<style>
.icon-inp {
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
