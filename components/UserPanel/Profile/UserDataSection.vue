<template>
  <section class="p-3 rounded-20 custom-shadow bg-white my-5">
    <div class="md:flex justify-between items-center">
      <div class="flex items-center gap-3 mb-3 md:mb-0">
        <img
          src="/searchlawyer/law1.svg"
          alt="avatar"
          class="size-[70px] rounded-full"
        />
        <div>
          <h3 class="text-lg md:text-2xl font-yekB">حسین رضایی</h3>
          <p class="text-xs md:text-lg text-secondary-text">
            تهران / وکیل پایه یک دادگستری
          </p>
        </div>
      </div>
      <button
        @click="$emit('toggleForm')"
        class="border flex items-center gap-2.5 rounded-full p-2.5 transition-all hover:bg-primary hover:text-white hover:border-primary"
        :class="{
          'text-secondary-text border-secondary-text':
            !props.showInformationForm,
          'text-white border-primary bg-primary': props.showInformationForm
        }"
      >
        ویرایش
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M92.69 208H48v-44.69l88-88L180.69 120ZM192 108.69L147.32 64l24-24L216 84.69Z"
          />
        </svg>
      </button>
    </div>
    <form @submit.prevent v-if="props.showInformationForm">
      <div class="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="md:items-center flex-col md:flex-row gap-3 md:gap-10">
          <label class="block mb-2">نام :</label>
          <InputText
            pt:root="!w-full !p-3 border-[#E1E1F1] !rounded-[10px]"
            type="text"
          />
        </div>
        <div class="md:items-center flex-col md:flex-row gap-3 md:gap-10">
          <label class="block mb-2">نام خانوادگی :</label>
          <InputText
            pt:root="!w-full !p-3 border-[#E1E1F1] !rounded-[10px]"
            type="text"
          />
        </div>
        <div class="md:items-center flex-col md:flex-row gap-3 md:gap-10">
          <label class="block mb-2">شماره همراه :</label>
          <InputText
            pt:root="!w-full !p-3 border-[#E1E1F1] !rounded-[10px]"
            type="number"
          />
        </div>
        <div class="md:items-center flex-col md:flex-row gap-3 md:gap-10">
          <label class="block mb-2">نام کاربری :</label>
          <InputText
            pt:root="!w-full !p-3 border-[#E1E1F1] !rounded-[10px]"
            type="text"
          />
        </div>
        <div class="md:items-center flex-col md:flex-row gap-3 md:gap-10">
          <label class="block mb-2">شماره ثابت :</label>
          <InputText
            pt:root="!w-full !p-3 border-[#E1E1F1] !rounded-[10px]"
            type="number"
          />
        </div>
        <div class="md:items-center flex-col md:flex-row gap-3 md:gap-10">
          <label class="block mb-2"> آدرس :</label>
          <InputText
            pt:root="!w-full !p-3 border-[#E1E1F1] !rounded-[10px]"
            type="texxt"
          />
        </div>
        <div
          class="md:items-center flex-col md:flex-row gap-3 md:gap-10 md:col-span-2"
        >
          <label class="block mb-2"> درباره من :</label>
          <textarea
            class="w-full p-3 border border-[#E1E1F1] rounded-[10px] resize-none placeholder:text-black placeholder:text-xs text-xs"
            rows="5"
            placeholder="من کصکش وکیل ...."
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="border text-secondary-text border-secondary-text flex items-center gap-2.5 rounded-full p-2.5 transition-all hover:bg-primary hover:text-white hover:border-primary"
        >
          ذخیره
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M92.69 208H48v-44.69l88-88L180.69 120ZM192 108.69L147.32 64l24-24L216 84.69Z"
            />
          </svg>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
let props = defineProps(['showInformationForm'])
</script>
