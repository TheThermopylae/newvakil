<template>
  <section class="container">
    <TitleSection :line="true" class="mb-24">
      <template #en>
        <h2 class="heading-gradiant text-3xl -mb-3">Who We Are</h2>
      </template>
      <template #fa>
        <h2 class="font-yekB text-3xl">ما کی هستیم؟!</h2>
      </template>
    </TitleSection>
    <section class="flex flex-col xl:flex-row justify-between items-center">
      <div class="xl:w-1/2 text-center xl:text-right">
        <h3 class="font-yekB text-[45px]">
          اولین پلتفرم جامع جستجوی وکیل در ایران
        </h3>
        <p class="text-xl leading-[52px] mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>
      <div class="relative mt-24 xl:m-0">
        <img src="/subtract.svg" alt="subtract" />
        <img
          src="/Smallimg.svg"
          alt="Smallimg"
          class="absolute -top-18 -right-12"
        />
      </div>
    </section>
    <div class="mt-32">
      <p class="w-5/6 text-center m-auto text-xl leading-[52px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </p>
      <div class="flex justify-center gap-22 mt-10">
        <div class="flex flex-col justify-center gap-1 text-center text-[24px]">
          <span class="font-yekEB text-[43px]">+150</span>
          پروژه های تکمیل شده
        </div>
        <div class="flex flex-col justify-center gap-1 text-center text-[24px]">
          <span class="font-yekEB text-[43px]">+75</span>
          متقاضی وکیل
        </div>
        <div class="flex flex-col justify-center gap-1 text-center text-[24px]">
          <span class="font-yekEB text-[43px]">+35</span>
          تعداد وکلا
        </div>
        <div class="flex flex-col justify-center gap-1 text-center text-[24px]">
          <span class="font-yekEB text-[43px]">+10</span>
          پروژه ها متوقف شده
        </div>
      </div>
    </div>
  </section>
</template>
