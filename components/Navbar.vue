<template>
  <div
    class="h-32 bg-mainWhite w-screen flex items-center justify-between lg:px-40"
  >
    <div class="flex items-center justify-center space-x-8">
      <div class="flex items-center justify-center space-x-3">
        <h2 class="flex items-end justify-end flex-col text-mainYellow">
          <span class="text-sm text-gray-400">آدرس</span>
          <span class="text-sm text-black"
            >خیابان سعدی - خیابان باباطاهر - پلاک 88
          </span>
        </h2>
        <PhMapPin class="text-mainBlue" weight="fill" size="40" />
      </div>
      <div class="flex items-center justify-center space-x-3">
        <h2 class="flex items-end justify-end flex-col text-mainYellow">
          <span class="text-sm text-gray-400">تلفن</span>
          <span class="text-lg text-black">33661029</span>
        </h2>
        <PhPhone class="text-mainBlue" weight="fill" size="40" />
      </div>
    </div>

    <div class="flex items-center justify-center space-x-3">
      <h2 class="flex items-center space-y-3 flex-col text-black">
        <span class="text-sm Nas">منظومه فرهنگی و آموزشی</span>
        <span class="text-3xl Nas text-mainBlue">اطلس</span>
      </h2>
      <img
        src="../assets/images/Logo.webp"
        class="w-24 object-contain"
        alt=""
      />
    </div>
  </div>
  <div
    class="w-screen h-14 lg:h-20 bg-mainBlue shadow-sm space-x-4 shadow-mainBlue flex items-center justify-between lg:px-10"
  >
    <div class="flex items-center justify-center lg:space-x-6 Navbar w-full">
      <LazyLogin class="flex" />
      <div class="lg:flex items-center justify-center space-x-4 hidden">
        <NuxtLink to="/aboutUs">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>درباره ما</span>
            <PhTranslate :size="20" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink to="/contactUs">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تماس با ما</span>
            <PhPhoneCall :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink v-show="isManager" to="/admin">
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مدیریت</span>
            <PhGlobeStand :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/activities">
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>فعالیت ها</span>
            <PhBackpack :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/schedule">
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>برنامه کلاسی</span>
            <PhCalendar :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/videoPlayer">
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>ویدیوهای آموزشی</span>
            <PhVideo :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/articles">
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مقالات</span>
            <PhArticle :size="20" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink to="/exam">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون خلاقیت </span>
            <PhExam :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink to="/">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>خانه</span>
            <PhHouse :size="20" weight="fill" />
          </button>
        </NuxtLink>
      </div>
      <div
        class="justify-between lg:w-auto w-full items-center lg:flex-row flex-row-reverse space-x-2 lg:space-x-3 flex"
      >
        <LazyPhoneNavbar class="flex lg:hidden" />
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
  PhCalendar,
  PhGlobeStand,
  PhVideo,
  PhBackpack,
  PhPhone,
  PhMapPin,
} from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const { $gsap } = useNuxtApp();

// asign user store

const userStore = useUserStore();

const { isManager } = storeToRefs(userStore);

onMounted(() => {
  $gsap.from(".Navbar", { opacity: 0, duration: 2 });
});
</script>
<style>
@font-face {
  font-family: "Nas";
  src: url("../assets/fonts/IranNastaliq.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
.Nas {
  font-family: "Nas";
}
</style>
