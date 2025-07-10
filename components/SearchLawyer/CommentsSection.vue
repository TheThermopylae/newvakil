<template>
  <section class="mt-5 rounded-10 bg-white p-3">
    <div class="flex justify-between items-center">
      <div
        class="flex items-center p-1.5 rounded gap-2 text-2sm font-yekB bg-main"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.8961 6.16667C3.8961 6.35453 3.97073 6.5347 4.10356 6.66753C4.2364 6.80037 4.41657 6.875 4.60443 6.875C4.79229 6.875 4.97246 6.80037 5.1053 6.66753C5.23814 6.5347 5.31276 6.35453 5.31276 6.16667V5.45833H6.0211C6.20896 5.45833 6.38913 5.38371 6.52197 5.25087C6.6548 5.11803 6.72943 4.93786 6.72943 4.75C6.72943 4.56214 6.6548 4.38197 6.52197 4.24913C6.38913 4.11629 6.20896 4.04167 6.0211 4.04167H5.31276V3.33333C5.31276 3.14547 5.23814 2.9653 5.1053 2.83247C4.97246 2.69963 4.79229 2.625 4.60443 2.625C4.41657 2.625 4.2364 2.69963 4.10356 2.83247C3.97073 2.9653 3.8961 3.14547 3.8961 3.33333V4.04167H3.18776C2.9999 4.04167 2.81974 4.11629 2.6869 4.24913C2.55406 4.38197 2.47943 4.56214 2.47943 4.75C2.47943 4.93786 2.55406 5.11803 2.6869 5.25087C2.81974 5.38371 2.9999 5.45833 3.18776 5.45833H3.8961V6.16667ZM13.1044 4.04167H8.85443C8.66657 4.04167 8.4864 4.11629 8.35356 4.24913C8.22073 4.38197 8.1461 4.56214 8.1461 4.75C8.1461 4.93786 8.22073 5.11803 8.35356 5.25087C8.4864 5.38371 8.66657 5.45833 8.85443 5.45833H13.1044C13.2923 5.45833 13.4725 5.53296 13.6053 5.6658C13.7381 5.79864 13.8128 5.9788 13.8128 6.16667V13.0517L12.7007 12.0246C12.57 11.9023 12.398 11.834 12.219 11.8333H6.0211C5.83324 11.8333 5.65307 11.7587 5.52023 11.6259C5.38739 11.493 5.31276 11.3129 5.31276 11.125V9C5.31276 8.81214 5.23814 8.63197 5.1053 8.49913C4.97246 8.36629 4.79229 8.29167 4.60443 8.29167C4.41657 8.29167 4.2364 8.36629 4.10356 8.49913C3.97073 8.63197 3.8961 8.81214 3.8961 9V11.125C3.8961 11.6886 4.11998 12.2291 4.5185 12.6276C4.91701 13.0261 5.45751 13.25 6.0211 13.25H11.9428L14.0678 15.1837C14.1912 15.2996 14.352 15.3675 14.5211 15.375C14.6182 15.3739 14.7143 15.3547 14.8044 15.3183C14.9311 15.263 15.0389 15.1719 15.1144 15.0561C15.1899 14.9403 15.2299 14.8049 15.2294 14.6667V6.16667C15.2294 5.60308 15.0055 5.06258 14.607 4.66406C14.2085 4.26555 13.668 4.04167 13.1044 4.04167Z"
            fill="black"
          />
        </svg>
        نظرات
      </div>
      <svg
        class="cursor-pointer transition-all"
        :class="open ? 'rotate-0' : 'rotate-180'"
        @click="open = !open"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="24"
          y="24"
          width="24"
          height="24"
          rx="3"
          transform="rotate(-180 24 24)"
          fill="#F7F7F7"
        />
        <path
          d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
    <div v-if="open">
      <div class="my-5">
        <article
          v-for="item in comments"
          :key="item.user"
          class="text-2sm border-b border-notactive pb-2.5 mb-2.5 last:border-0 last:pb-0 last:mb-0"
        >
          <div class="flex items-center">
            <img
              src="/searchlawyer/law1.svg"
              class="size-[30px] ml-2"
              alt="comment-avatar"
            />
            <h4 class="font-yekB ml-3">{{ item.user }}</h4>
            <p class="text-secondary-text">1:30 بعد از ظهر</p>
          </div>
          <p class="mr-[38px] text-secondary-text">
            {{ item.text }}
          </p>
        </article>
      </div>
      <div
        class="bg-[#EEEEEE] rounded-full pl-[5px] py-2 pr-5 flex justify-between items-center"
      >
        <input
          @keyup.{keyAlias}.enter="sendComment"
          v-model="commentText"
          type="text"
          placeholder="نظر خود را بنویسید"
          class="placeholder:text-secondary-text placeholder:text-2sm text-2sm text-secondary-text"
        />
        <button
          class="flex items-center gap-1 px-2 py-1.5 bg-white rounded-full text-2sm cursor-pointer"
          @click="sendComment"
        >
          ارسال
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9533 14.3276C18.2133 16.6616 15.8103 18.3756 13.6873 17.3696L1.74332 11.7116C-0.544678 10.6286 -0.544678 7.37257 1.74332 6.28957L13.6873 0.630571C15.8103 -0.375429 18.2123 1.33857 17.9533 3.67257L17.4733 8.00057L9.35532 8.00057C9.09011 8.00057 8.83575 8.10593 8.64822 8.29347C8.46068 8.481 8.35532 8.73536 8.35532 9.00057C8.35532 9.26579 8.46068 9.52014 8.64822 9.70768C8.83575 9.89522 9.09011 10.0006 9.35532 10.0006H17.4723L17.9533 14.3276Z"
              fill="#3739FE"
            />
          </svg>
        </button>
      </div>
    </div>
    <Toast />
  </section>
</template>

<script setup>
let open = ref(true)

let commentText = ref('')

let comments = ref([
  {
    user: 'احمد نوروزی',
    text: 'خلاقیت، کلید نوآوری و پیشرفت است.'
  },
  {
    user: 'امیر برزگر',
    text: 'نظری ندارم بنظر که خوبه'
  },
  {
    user: ' اصغر اکبری',
    text: 'وکیل خوبیه کارمو راه انداخت'
  }
])

const toast = useToast()

function sendComment () {
  if (!commentText.value) {
    toast.add({
      severity: 'error',
      summary: 'خطا',
      detail: 'لطفا اول نظر خود را بنویسید',
      life: 5000
    })
    return
  } else {
    comments.value.push({
      user: 'نمیدونم',
      text: commentText.value
    })
    commentText.value = ''
    toast.add({
      severity: 'success',
      summary: 'موفقیت آمیز',
      detail: 'نظر شما با موفقیت ثبت شد',
      life: 5000
    })
  }
}
</script>

<style scoped>
section {
  box-shadow: 0 0 42px 3px #79797914;
}
</style>
