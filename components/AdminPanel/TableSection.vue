<template>
  <section class="overflow-auto bg-white rounded-[20px] p-5 pb-0 custom-shadow">
    <table class="min-w-[800px] w-full text-2sm">
      <thead>
        <tr class="text-[#7D7D7D] font-yekB">
          <th class="text-right p-2">
            <Checkbox v-model="checked" binary class="ml-2" />
            کاربران
          </th>
          <th class="text-right">شغل</th>
          <th class="text-right">شماره تلفن</th>
          <th class="text-right">تخصص</th>
          <th class="text-right">وضعیت</th>
          <th class="text-right">تاریخ عضویت</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <AdminPanelTableRow v-for="item in 5" />
      </tbody>
    </table>
  </section>
</template>

<script setup>
const checked = ref(false)
</script>

<style scoped>
:deep(.p-select-list) {
  padding: 0 !important;
}
</style>
