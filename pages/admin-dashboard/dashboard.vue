<template>
  <TheBreadCrumbs title="داشبورد ادمین" />
  <div class="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-5 items-start">
    <AdminPanelDashboardDoughnutChart />
    <div class="xl:col-span-2">
      <AdminPanelDashboardMonthData />
      <AdminPanelDashboardLineChart />
    </div>
  </div>
</template>
