<template>
  <div class="md:w-1/3 rounded-[20px] bg-white p-4">
    <h4 class="font-yekB mb-3">نمودار درامد</h4>
    <span class="text-2xl font-yekB">13.158.250</span>
    <p class="text-xs mb-2">
      در این ماه | <span class="text-[#27AF27]">10%+</span> نسبت به ماه گذشته
    </p>
    <canvas ref="myChart"></canvas>
    <section
      class="border-t-2 border-dashed border-[#E6E6E6] mt-4 pt-4 text-xs"
    >
      <article class="flex justify-between items-center text-[#474747] mb-4">
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-primary"></div>
          <h5>پرونده ها</h5>
        </div>
        8.500.000
      </article>
      <article class="flex justify-between items-center text-[#474747] mb-4">
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-[#FFB200]"></div>
          <h5>مشاوره</h5>
        </div>
        5.500.000
      </article>
      <article class="flex justify-between items-center text-[#474747]">
        <div class="flex items-center gap-2">
          <div class="size-[15px] rounded-full bg-[#00FFCC]"></div>
          <h5>تعاملات فعال</h5>
        </div>
        2.000.000
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
      labels: ['پرونده ها', 'مشاوره', 'تعاملات فعال'],
      datasets: [
        {
          data: [8_500_000, 5_500_000, 2_000_000],
          backgroundColor: ['#3739FE', '#FFB200', '#00FFCC']
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
