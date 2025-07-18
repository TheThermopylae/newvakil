<template>
  <div class="w-full rounded-20 bg-white p-4 custom-shadow">
    <h2 class="font-yekB text-[22px]">چارت درآمد کل</h2>
    <p class="text-xs my-3">میانگین درآمد در این ماه : 000</p>
    <canvas ref="myChart"></canvas>
    <section
      class="border-t-2 border-dashed border-[#E6E6E6] mt-4 pt-4 text-xs"
    >
      <h4 class="text-left text-secondary-text mb-4 text-lg">تعداد فروش</h4>
      <article
        class="flex justify-between items-center text-secondary-text mb-4 text-lg"
      >
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-[#962DFF]"></div>
          <h5 class="text-[#615E83] font-yekB text-xl">اشتراک پایه</h5>
        </div>
        85
      </article>
      <article
        class="flex justify-between items-center text-secondary-text mb-4 text-lg"
      >
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-[#C6D2FD]"></div>
          <h5 class="text-[#615E83] font-yekB text-xl">اشتراک طلایی</h5>
        </div>
        111
      </article>
      <article
        class="flex justify-between items-center text-secondary-text mb-4 text-lg"
      >
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-[#E0C6FD]"></div>
          <h5 class="text-[#615E83] font-yekB text-xl">اشتراک نقره ای</h5>
        </div>
        220
      </article>
      <article class="flex justify-between items-center text-secondary-text">
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-primary"></div>
          <h5 class="text-[#615E83] font-yekB text-xl">اشتراک برنزی</h5>
        </div>
        80
      </article>
    </section>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'

let myChart = ref(null)

onMounted(() => {
  new Chart(myChart.value, {
    type: 'doughnut',
    data: {
      labels: ['اشتراک پایه', 'اشتراک طلایی', 'اشتراک نقره ای', 'اشتراک برنزی'],
      datasets: [
        {
          data: [85, 111, 220, 80],
          backgroundColor: ['#962DFF', '#C6D2FD', '#E0C6FD', '#4A3AFF']
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          usePointStyle: false, // غیرفعال کردن نمایش رنگ در تولتیپ
          displayColors: false,
          backgroundColor: '#D9D9D9', // رنگ پس‌زمینه تولتیپ
          titleColor: '#000', // رنگ عنوان
          bodyColor: '#000', // رنگ متن اصلی
          borderWidth: 2, // ضخامت حاشیه
          padding: 10, // فاصله داخلی
          titleAlign: 'center',
          bodyAlign: 'center',
          bodyFont: {
            size: 14, // سایز فونت متن
            family: 'YekanBakhFaNum-Regular'
          },
          titleFont: {
            size: 16,
            family: 'YekanBakhFaNum-Regular'
          }
        },
        legend: {
          display: false // لیجن (و لیبل‌های آن) حذف می‌شود
        }
      }
    }
  })
})
</script>

<!-- <style scoped>
div {
    background: #2f32ff95;
}
</style> -->
