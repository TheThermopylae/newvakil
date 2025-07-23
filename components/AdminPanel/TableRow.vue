<template>
  <tr
    class="text-ceter border-b border-[#70707021] last:border-0 text-[#707070] text-[13px]"
  >
    <td class="py-3 pr-2 text-black text-[15px]">
      <div class="flex items-center gap-4 font-yekB">
        <Checkbox v-model="checked" binary />
        <img
          src="/public/girl-prof.jpg"
          alt="profile"
          class="size-[43px] rounded-full"
        />
        فرهاد نیکو
      </div>
    </td>
    <td class="py-3 flex items-center h-[72px] gap-2.5">
      وکیل پایه یک دادگستری
    </td>
    <td class="py-3 text-right" style="direction: ltr">+989912345679</td>
    <td class="py-3">شخصی و خصوصی</td>
    <td class="py-3">در حال انجام وظیفه</td>
    <td class="py-3">یک روز قبل</td>
    <td>
      <Button
        type="button"
        icon="pi pi-ellipsis-v"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        unstyled
      >
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1249_219)">
            <ellipse
              cx="11.8451"
              cy="7.98711"
              rx="1.00945"
              ry="1.00945"
              fill="#747474"
            />
            <ellipse
              cx="11.8451"
              cy="13.3709"
              rx="1.00945"
              ry="1.00945"
              fill="#747474"
            />
            <ellipse
              cx="11.8451"
              cy="18.7546"
              rx="1.00945"
              ry="1.00945"
              fill="#747474"
            />
          </g>
          <defs>
            <clipPath id="clip0_1249_219">
              <rect
                width="16.1512"
                height="16.1512"
                fill="white"
                transform="translate(4.10608 4.95874)"
              />
            </clipPath>
          </defs>
        </svg>
      </Button>
      <Menu
        ref="menu"
        id="overlay_menu"
        :model="items"
        :popup="true"
        pt:submenuLabel="!hidden"
        pt:itemIcon="!text-black !bg-red-500"
      />
    </td>
  </tr>
</template>

<script setup>
const checked = ref()

const menu = ref()
const items = ref([
  {
    items: [
      {
        label: 'تایید مدارک',
        icon: 'pi pi-check',
        class:'!text-black'
      },
      {
        label: 'رد مدارک',
        icon: 'pi pi-file-excel'
      },
      {
        label: 'نیاز به ویرایش',
        icon: 'pi pi-file-edit'
      },
      {
        label: 'مسدود کردن',
        icon: 'pi pi-minus-circle'
      }
    ]
  }
])

const toggle = event => {
  menu.value.toggle(event)
}
</script>

<style>
.p-menu-item-icon{
    color : black !important;
}
</style>