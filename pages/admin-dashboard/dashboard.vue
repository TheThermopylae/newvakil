<template>
  <TheBreadCrumbs title="داشبورد ادمین" />
  <div class="mt-6 grid xl:grid-cols-3 gap-5">
    <AdminPanelDashboardDoughnutChart />
    <div class="xl:col-span-2">
      <AdminPanelDashboardMonthData />
      <AdminPanelDashboardLineChart />
    </div>
  </div>
</template>
