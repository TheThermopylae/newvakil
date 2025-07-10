<template>
  <NuxtLayout name="auth">
    <div class="flex items-center justify-between flex-col w-full">
      <div v-if="step == 0" class="text-center">
        <p class="text-2xl font-yekB my-10">به وکیل من خوش آمدید</p>
        <h1 class="text-2xl font-yekB mb-5">ثبت نام کنید</h1>
      </div>
      <div v-else-if="step == 1" class="bg-[#6C6CFF1F] p-3 rounded-10 my-20">
        شماره تلفن وارد شده بایستی به نام کدملی وارد شده باشد
      </div>
      <AuthLawRegForm @stepTwo="step = 1" v-if="step == 0" />
      <AuthVerifyPhone @stepThree="step = 2" v-if="step == 1" />
      <AuthFormOtpReg v-if="step == 2" />
      <p class="text-sm mt-5 text-center">
        حساب کاربری دارید؟
        <NuxtLink to="/auth/login" class="text-primary underline"
          >وارد شوید
        </NuxtLink>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: '| ثبت نام وکیل'
})

let step = ref(0)
</script>
