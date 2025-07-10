<template>
  <article
    class="bg-white p-5 flex flex-col gap-4 rounded-2xl relative group hover:!shadow-md transition-all"
  >
    <div v-html="props.data.icon"></div>
    <h3 class="text-3xl font-yekB">{{ props.data.title }}</h3>
    <p class="text-[13px]">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است
    </p>
    <div
      class="w-10/11 h-1/2 absolute bg-primary rounded-2xl top-0 opacity-0 -rotate-z-[5deg] -z-20 shadow-md shadow-primary group-hover:-top-4 group-hover:opacity-100 transition-all"
    ></div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
</script>

<style scoped>
article {
  box-shadow: 0 -70px 50px 15px #00000010;
}
</style>
