<template>
  <div
    class="w-screen h-20 bg-mainWhite shadow-sm space-x-7 shadow-mainBlue flex items-center justify-between lg:px-20"
  >
    <div class="lg:flex items-center space-x-7 hidden Navbar">
      <button
        class="px-12 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>درباره ما</span>
        <PhTranslate :size="20" weight="fill" />
      </button>
      <button
        class="px-12 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>تماس با ما</span>
        <PhPhoneCall :size="20" weight="fill" />
      </button>
    </div>
    <div class="lg:flex items-center space-x-7 hidden Navbar">
      <button
        class="px-12 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>مقالات</span>
        <PhArticle :size="20" weight="fill" />
      </button>
      <NuxtLink to="/exam">
        <button
          class="px-12 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>آزمون هوش</span>
          <PhExam :size="20" weight="fill" />
        </button>
      </NuxtLink>
      <button
        class="px-12 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>خانه</span>
        <PhHouse :size="20" weight="fill" />
      </button>
      <div class="justify-around items-center space-x-3 flex">
        <Login />
        <img
          src="../assets/images/Logo.webp"
          class="h-20 object-contain opacity-100 backdrop-blur-3xl transition ease-in duration-300 hover:bg-mainBlue cursor-pointer p-5"
          alt=""
        />
        <PhoneNavbar class="flex lg:hidden" />
      </div>
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
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
onMounted(() => {
  $gsap.from(".Navbar", { opacity: 0, duration: 2 });
});
</script>
