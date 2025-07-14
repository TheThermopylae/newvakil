<template>
  <main class="container">
    <SearchLawyerTheBanner />
    <div class="xl:flex justify-between gap-5">
      <div class="xl:w-1/4">
        <SearchLawyerDetails :lawyer="selectedLawyer" />
        <SearchLawyerCommentsSection />
      </div>
      <div class="xl:w-3/4">
        <!-- <SearchLawyerFilterSection /> -->
        <SearchLawyerCard
          v-for="item in lawyers"
          :key="item.name"
          :data="item"
          :selectedLawyer="selectedLawyer"
          @click="selectedLawyer = item"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: '| جستجوی وکیل'
})

let lawyers = ref([
  {
    id: 1,
    name: 'محمد رضایی',
    img: '/searchlawyer/law1.svg',
    des: 'سلام من محمد رضایی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی', 'تجاری', 'بین الملل'],
    rate: 5,
    cities: ['تهران', 'شیراز', 'اصفهان'],
    price: 5
  },
  {
    id: 2,
    name: 'سارا احمدی',
    img: '/searchlawyer/law2.svg',
    des: 'سلام من سارا احمدی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی', 'تجاری', 'بین الملل'],
    rate: 3,
    cities: ['تهران', 'شیراز', 'اصفهان'],
    price: 3
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  },
  {
    id: 3,
    name: 'علی کریمی',
    img: '/searchlawyer/law3.svg',
    des: 'سلام من علی کریمی هستم و اینجا برای کمک به شما آماده ام',
    specialties: ['حقوقی'],
    rate: 1,
    cities: ['تهران'],
    price: 1
  }
])

let selectedLawyer = ref(lawyers.value[0])
</script>
