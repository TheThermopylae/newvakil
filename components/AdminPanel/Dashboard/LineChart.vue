<template>
  <div
    class="rounded-[20px] bg-white p-5 mt-4 overflow-auto custom-shadow w-full"
  >
    <div
      class="flex justify-between items-end mb-3 border-b pb-3 border-[#E5E5EF]"
    >
      <div>
        <h3 class="text-[#9291A5] text-xs md:text-[16px]">
          کاربران جدید این هفته
        </h3>
        <span class="font-yekB text-2sm md:text-xs">6,345</span>
      </div>
      <div class="text-xs md:text-[16px]">
        <span class="flex items-center gap-1 font-yekB">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.1735" cy="12.1904" r="11.256" fill="#04CE00" />
            <path
              d="M14.7006 10.9912L14.3985 11.2932C12.7823 12.9094 11.166 14.5258 9.54947 16.1423C9.22246 16.4693 8.83608 16.5409 8.45018 16.3623C8.0784 16.1875 7.87438 15.8676 7.92856 15.4807C7.97725 15.2012 8.10912 14.9429 8.30693 14.7395C9.86988 13.1483 11.4531 11.5773 13.0302 10.0003L13.3289 9.70152C13.2325 9.68504 13.1353 9.67372 13.0377 9.6676C12.4054 9.66477 11.7726 9.67089 11.1407 9.66288C10.6403 9.65723 10.2949 9.31279 10.2883 8.83405C10.2817 8.31197 10.5951 7.96187 11.1185 7.95857C12.573 7.94915 14.0266 7.94805 15.4795 7.95528C16.067 7.95857 16.3978 8.27616 16.4086 8.85714C16.4353 10.2993 16.4512 11.7416 16.4562 13.1841C16.4581 13.7128 16.1141 14.0238 15.5888 14.0195C15.0931 14.0148 14.767 13.6963 14.7519 13.1827C14.7359 12.573 14.7345 11.9628 14.7255 11.3526C14.7237 11.2565 14.7114 11.1622 14.7006 10.9912Z"
              fill="white"
            />
          </svg>
          1,3%
        </span>
        <h3 class="text-[#615E83]">رشد نسبت به هفته گذشته</h3>
      </div>
    </div>
    <canvas ref="myChart"></canvas>
    <div class="mt-5">
      <div class="text-xs flex items-center gap-2 mb-2">
        <div class="size-3 bg-done rounded-full"></div>
        کاربران
      </div>
      <div class="text-xs flex items-center gap-2">
        <div class="size-3 bg-primary rounded-full"></div>
        وکلا
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'

let myChart = ref(null)

onMounted(() => {
  new Chart(myChart.value, {
    type: 'line',
    data: {
      labels: [
        'جمعه',
        'پنج شنبه',
        'چهارشنبه',
        'سه شنبه',
        'دو شنبه',
        'یک شنبه',
        'شنبه'
      ],
      datasets: [
        {
          data: [4_000, 2_300, 3_500, 1_250, 1_632, 2_052, 3_125],
          borderColor: '#00FF40'
        },
        {
          data: [3_000, 1_600, 1_700, 850, 1_032, 3_352, 2_225],
          borderColor: '#3739FE'
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
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
        x: {
          ticks: {
            font: {
              family: 'YekanBakhFaNum-Regular',
              size: 10
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
