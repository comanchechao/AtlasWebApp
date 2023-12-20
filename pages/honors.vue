<template>
  <head>
    <title dir="rtl">افتخارات منظومه آموزشی و فرهنگی اصلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="lg:text-5xl text-3xl flex items-center justify-center space-x-2 lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          <span>افتخارات</span>
        </h2>
        <PhArticle size="55" />
      </div>

      <div
        class="w-full h-full flex-col lg:h-auto text-center space-y-2 flex items-center justify-start py-6"
      >
        <img
          class="w-full h-44 object-contain"
          src="../assets/images/trophy.webp"
          alt=""
        />
        <h2
          class="lg:text-2xl duration-200 transition ease-in-out hover:text-blue-600 text-xl lg:my-0 text-darkBlue leading-snug text-center"
        >
          افتخارات منظومه آموزشی فرهنگی اطلس
        </h2>
      </div>

      <div
        class="w-screen h-full space-y-10 lg:space-y-6 flex flex-col items-center justify-around px-10 py-10 lg:px-20"
      >
        <h1
          class="lg:text-2xl text-lg text-darkBlue border-b-8 border-mainYellow pb-2 rounded-md text-center"
        >
          برترین های منظومه ی آموزشی و فرهنگی اطلس
        </h1>
        <div
          dir="rtl"
          class="h-full w-auto gap-10 grid grid-cols-1 lg:grid-cols-3 place-items-center content-center"
        >
          <div
            class="w-72 transition ease-in-out duration-300 hover:border-mainRed cursor-pointer hover:bg-mainYellow bg-white border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 hover:border-mainRed cursor-pointer hover:bg-mainYellow bg-white border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 hover:border-mainRed cursor-pointer hover:bg-mainYellow bg-white border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 hover:border-mainRed cursor-pointer hover:bg-mainYellow bg-white border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhGraduationCap } from "@phosphor-icons/vue";

const tabs = ref([
  {
    title: "واحد آموزشگاه",
    content:
      "شماره تلفن : 33661029 - 33661021 آدرس : خیابان سعدی - خیابان باباطاهر - پلاک 88",
  },
  { title: "واحد دبستان دخترانه", content: "Content 2" },
]);
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(false);
const latestarticle = ref([]);
const imageLoading = ref(true);

onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
</script>
<style></style>
