<template>
  <div class="h-full w-screen bg-mainWhite">
    <Navbar />
    <div class="w-full h-auto justify-center flex-col flex items-center">
      <img src="../assets/images/Wave1.webp" class="w-full" alt="" />
      <div class="flex items-center justify-around w-full h-full px-32">
        <img
          src="../assets/images/MainPage.webp"
          class="h-rem34 object-contain"
          alt=""
        />
        <div class="flex flex-col items-center space-y-7">
          <h2 class="text-xl text-darkBlue">موسسه آموزشی و فرهنگی</h2>
          <h1
            class="text-7xl border-b-4 rounded-lg pb-7 border-mainBlue font-bold text-mainBlue"
          >
            اصلس
          </h1>
          <button
            class="px-12 py-3 text-xl border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-md"
          >
            <span>آزمون هوش</span>
          </button>
        </div>
      </div>

      <img src="../assets/images/Wave2.webp" class="w-full" alt="" />
    </div>
    <div
      class="w-screen h-full space-y-24 flex flex-col items-center justify-around p-20"
    >
      <ImageGallery class="h-full Carousel" />
      <h1
        class="text-3xl text-mainBlue border-b-2 font-bold rounded-md p-4 border-mainBlue"
      >
        خدمات موسسه ی آموزشی و فرهنگی اصلس
      </h1>
      <div class="h-full w-full flex items-center justify-center space-x-16">
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-6"
        >
          <img
            src="../assets/images/Exam.webp"
            class="w-36 object-contain opacity-100 backdrop-blur-3xl"
            alt=""
          />
          <div
            class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-16 top-52 Blue bg-mainBlue"
          >
            <h2 class="text-lg text-mainWhite">آزمون تعیین سطح</h2>
          </div>
        </div>
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-6"
        >
          <img
            src="../assets/images/Learning.webp"
            class="w-44 object-contain opacity-100 backdrop-blur-3xl"
            alt=""
          />
          <div
            class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-16 top-52 Blue bg-mainBlue"
          >
            <h2 class="text-lg text-mainWhite">دوره های آموزشی</h2>
          </div>
        </div>
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-14"
        >
          <img
            src="../assets/images/IQTest.webp"
            class="w-full object-contain opacity-100 backdrop-blur-3xl"
            alt=""
          />
          <div
            ref="Blue"
            class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-16 top-52 Blue bg-mainBlue"
          >
            <h2 class="text-lg text-mainWhite">آزمون هوش</h2>
            {{ exam }}
          </div>
        </div>
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-6"
        >
          <img
            src="../assets/images/Calender.webp"
            class="w-full object-contain opacity-100 backdrop-blur-3xl"
            alt=""
          />
          <div
            class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-16 top-52 Blue bg-mainBlue"
          >
            <h2 class="text-lg text-mainWhite">تقویم آموزشی</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
// const { $gsap } = useNuxtApp();
// const TM = $gsap.timeline();
// const startAnimation = () => {
//   TM.to(".Card", { y: 200, duration: 1 });
// };
// const resetAnimation = () => {
//   TM.to(".Card", { y: 0, duration: 1 });
// };

const { data: exam } = await useFetch("http://localhost:3333/exam/highschool");
console.log(exam);
</script>
