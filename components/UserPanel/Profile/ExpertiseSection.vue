<template>
  <section class="p-3 rounded-20 custom-shadow bg-white my-5">
    <div class="md:flex justify-between items-center">
      <h2 class="font-yekB text-2xl">تخصص</h2>
      <button
        @click="$emit('toggleForm')"
        class="border flex items-center gap-2.5 rounded-full p-2.5 transition-all hover:bg-primary hover:text-white hover:border-primary"
        :class="{
          'text-secondary-text border-secondary-text': !props.showExpertiseForm,
          'text-white border-primary bg-primary': props.showExpertiseForm
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
    <form @submit.prevent v-if="props.showExpertiseForm">
      <div class="mt-7 grid md:grid-cols-2 gap-5 text-center">
        <div>
          <label class="block mb-2">دسته بندی شغلی :</label>
          <Select
            v-model="selectFilter"
            :options="filters"
            optionLabel="name"
            placeholder="انتخاب کنید"
            :pt="{
              option: ({ context }) => ({
                class: context.selected
                  ? '!bg-[#D9D9D9] !text-black !justify-center'
                  : '!justify-center'
              }),
              root: '!w-full xl:max-w-[300px] !bg-[#9293FF26] !border-none !py-2',
              label: '!text-black !font-yekB',
              dropdown: '!hidden',
              overlay: '!border-none !shadow !mt-1 !w-[132px] !font-yekB'
            }"
          >
          </Select>
        </div>
        <div>
          <label class="block mb-2">آپلود مدارک وکالت :</label>
          <Button
            type="button"
            pt:root="!bg-main !border-none !text-black !font-yekB !w-full !max-w-[300px] !h-[56px]"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            label="آپلود مدارک"
          />
          <Menu
            ref="menu"
            id="overlay_menu"
            :model="items"
            :popup="true"
            pt:submenuLabel="!hidden"
          />
        </div>
        <div>
          <label class="block mb-2">شهر قابل خدمت :</label>
          <MultiSelect
            v-model="selectedCities"
            :options="cities"
            optionLabel="name"
            filter
            placeholder="انتخاب کنید"
            pt:root="!w-full
          xl:max-w-[300px] !bg-[#9293FF26] !border-none !py-2"
            pt:label="!text-black !font-yekB !text-center !justify-center"
            pt:dropdown="!hidden"
            pt:overlay="!border-none !shadow !mt-1 !w-[132px] !font-yekB"
          />
        </div>
        <div>
          <label class="block mb-2">وضعیت تایید حساب :</label>
          <Select
            v-model="selectFilter"
            :options="filters"
            optionLabel="name"
            placeholder="انتخاب کنید"
            :pt="{
              option: ({ context }) => ({
                class: context.selected
                  ? '!bg-[#D9D9D9] !text-black !justify-center'
                  : '!justify-center'
              }),
              root: '!w-full xl:max-w-[300px] !bg-main !border-none !py-2',
              label: '!text-black !font-yekB',
              dropdown: '!hidden',
              overlay: '!border-none !shadow !mt-1 !w-[132px] !font-yekB'
            }"
          >
          </Select>
        </div>
        <div>
          <label class="block mb-2">نوع فعالیت :</label>
          <Select
            v-model="selectFilter"
            :options="filters"
            optionLabel="name"
            placeholder="انتخاب کنید"
            :pt="{
              option: ({ context }) => ({
                class: context.selected
                  ? '!bg-[#D9D9D9] !text-black !justify-center'
                  : '!justify-center'
              }),
              root: '!w-full xl:max-w-[300px] !bg-[#9293FF26] !border-none !py-2',
              label: '!text-black !font-yekB',
              dropdown: '!hidden',
              overlay: '!border-none !shadow !mt-1 !w-[132px] !font-yekB'
            }"
          >
          </Select>
        </div>
        <div>
          <label class="block mb-2"> شماره پروانه وکالت :</label>
          <Select
            v-model="selectFilter"
            :options="filters"
            optionLabel="name"
            placeholder="انتخاب کنید"
            :pt="{
              option: ({ context }) => ({
                class: context.selected
                  ? '!bg-[#D9D9D9] !text-black !justify-center'
                  : '!justify-center'
              }),
              root: '!w-full xl:max-w-[300px] !bg-main !border-none !py-2',
              label: '!text-black !font-yekB',
              dropdown: '!hidden',
              overlay: '!border-none !shadow !mt-1 !w-[132px] !font-yekB'
            }"
          >
          </Select>
        </div>
        <div class="md:col-start-2">
          <label class="block mb-2">تاریخ صدور پروانه :</label>
          <Select
            v-model="selectFilter"
            :options="filters"
            optionLabel="name"
            placeholder="انتخاب کنید"
            :pt="{
              option: ({ context }) => ({
                class: context.selected
                  ? '!bg-[#D9D9D9] !text-black !justify-center'
                  : '!justify-center'
              }),
              root: '!w-full xl:max-w-[300px] !bg-main !border-none !py-2',
              label: '!text-black !font-yekB',
              dropdown: '!hidden',
              overlay: '!border-none !shadow !mt-1 !w-[132px] !font-yekB'
            }"
          >
          </Select>
        </div>
      </div>
      <div class="flex justify-end mt-5">
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
      <input type="file" ref="fileInput" class="hidden" accept="image/*" />
      <input type="file" ref="codeMeli" class="hidden" accept="image/*" />
    </form>
  </section>
</template>

<script setup>
let props = defineProps(['showExpertiseForm'])

const selectFilter = ref()
const filters = ref([
  {
    name: 'اداری'
  },
  {
    name: 'تست'
  },
  {
    name: 'تست دو'
  }
])

const selectedCities = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const fileInput = ref(null)
const codeMeli = ref(null)

const menu = ref()
const items = ref([
  {
    items: [
      {
        label: 'تصویر پروانه وکالت',
        command: () => {
          fileInput.value.click()
        }
      },
      {
        label: 'کارت ملی',
        command: () => {
          codeMeli.value.click()
        }
      }
    ]
  }
])

const toggle = event => {
  menu.value.toggle(event)
}
</script>

<style>
.p-menu-item-link {
  justify-content: center !important;
}
</style>
