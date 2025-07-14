<template>
  <div class="bg-white flex rounded p-2 w-fit text-xs font-yekB">
    <span>منو</span>
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5918 14.2279C12.5918 14.2279 7.35087 11.1253 7.35087 8.98702C7.35087 6.84947 12.5918 3.74609 12.5918 3.74609"
        stroke="#1E1E1E"
        stroke-width="1.12306"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>{{ props.title }}</span>
  </div>
</template>

<script setup>
let props = defineProps(['title'])
</script> 