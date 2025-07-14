<template>
  <TheBreadCrumbs class="mb-4" :title="'داشبورد'" />
  <UserPanelDashboardTopSection />
  <UserPanelDashboardChartsSection />
  <div class="flex flex-col md:flex-row justify-between mt-5 gap-3 items-start">
    <UserPanelDashboardPaymentInformation />
    <UserPanelDashboardTransactionTable />
  </div>
</template>
