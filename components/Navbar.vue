<template>
  <div
    class="w-screen h-14 lg:h-20 bg-mainWhite shadow-sm space-x-7 shadow-mainBlue flex items-center justify-between lg:px-20"
  >
    <div class="lg:flex items-center space-x-4 hidden Navbar">
      <button
        class="px-7 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>درباره ما</span>
        <PhTranslate :size="20" weight="fill" />
      </button>
      <NuxtLink to="/contactUs">
        <button
          class="px-7 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>تماس با ما</span>
          <PhPhoneCall :size="20" weight="fill" />
        </button>
      </NuxtLink>
    </div>
    <div
      class="flex items-center justify-between lg:space-x-4 Navbar lg:w-auto w-full"
    >
      <div class="lg:flex items-center space-x-4 hidden">
        <NuxtLink to="/admin">
          <button
            class="px-7 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مدیریت</span>
            <PhGlobeStand :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/schedule">
          <button
            class="px-7 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>برنامه کلاسی</span>
            <PhCalendar :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/articles">
          <button
            class="px-7 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مقالات</span>
            <PhArticle :size="20" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink to="/exam">
          <button
            class="px-7 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون خلاقیت </span>
            <PhExam :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/">
          <button
            class="px-7 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>خانه</span>
            <PhHouse :size="20" weight="fill" />
          </button>
        </NuxtLink>
      </div>
      <div
        class="justify-around items-center lg:flex-row flex-row-reverse space-x-2 lg:space-x-3 flex"
      >
        <LazyLogin class="flex" />
      </div>
      <LazyPhoneNavbar class="flex lg:hidden" />
    </div>
  </div>
</template>
<script setup>
import {
  PhHouse,
  PhExam,
  PhArticle,
  PhPhoneCall,
  PhTranslate,
  PhCalendar,
  PhGlobeStand,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
onMounted(() => {
  $gsap.from(".Navbar", { opacity: 0, duration: 2 });
});
</script>
