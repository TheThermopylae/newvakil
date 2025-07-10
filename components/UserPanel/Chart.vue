<template>
  <div class="w-2/3 rounded-[20px] bg-white p-4">
    <h4 class="font-yekB mb-3">نمودار درامد</h4>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'

let myChart = ref(null)

onMounted(() => {
  new Chart(myChart.value, {
    type: 'bar',
    data: {
      labels: [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
      ],
      datasets: [
        {
          data: [
            12_000_000, 19_000_000, 3_000_000, 5_000_000, 2_000_000, 3_000_000,
            12_000_000, 19_000_000, 3_000_000, 5_000_000, 2_000_000, 3_000_000
          ],
          backgroundColor: '#2f32ff95',
          hoverBackgroundColor: '#3739FE', // رنگ هنگام هاور
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 0,
            bottomRight: 0
          }
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
      },
      scales: {
        y: {
          display: false
        },
        x: {
          ticks: {
            font: {
              family: 'YekanBakhFaNum-Regular',
              size : 10
            }
          },
          beginAtZero: true
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
