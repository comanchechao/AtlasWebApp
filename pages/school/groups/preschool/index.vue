<template>
  <head>
    <title>پیش دبستانی منظومه آموزشی و فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-60 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          پایه پیش دبستانی
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="h-dialog w-full flex items-center justify-around lg:space-y-0 space-y-7 lg:space-x-4 lg:flex-row flex-col"
      >
        <NuxtLink
          class="third"
          :to="{ path: '/school/classdetail', query: { group: 'preschool' } }"
        >
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../assets/images/Learning.webp"
              class="w-36 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">کتاب های اطلس</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          class="third"
          :to="{ path: '/school/classdetail', query: { group: 'preschool' } }"
        >
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../assets/images/Learning.webp"
              class="w-36 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">کتاب های اطلس</h2>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(true);

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
