<template>
  <div class="h-full w-screen">
    <Navbar />
    <div
      class="h-screen w-full bg-mainWhite flex flex-col justify-center items-center py-14"
    >
      <div class="h-full w-full flex justify-center items-center px-44">
        <div
          class="flex flex-col items-center justify-center space-y-6 text-right px-20 w-1/2 h-full"
        >
          <h2 class="text-mainBlue text-4xl text-center">
            معرفی

            <span class="text-mainYellow">آزمون هوش</span>
            اصلس
          </h2>
          <h3>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </h3>
          <button
            @click="scrollToExam"
            class="px-12 py-3 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-white transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>شروع آزمون</span>
          </button>
        </div>
        <div class="flex flex-col items-center justify-center w-1/2 h-full">
          <img
            class="object-contain w-96"
            src="../assets/images/IQ.webp"
            alt=""
          />
          <h1 class="text-6xl my-3 text-mainYellow">آزمون هوش</h1>
          <h3 class="text-mainBlue">موسسه ی آموزشی و فرهنگی اصلس</h3>
        </div>
      </div>
      <img class="h-44 w-full" src="../assets/images/WaveDivide.webp" alt="" />
    </div>

    <div ref="ExamDiv" class="h-screen w-full bg-mainWhite"></div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
import { ref } from "vue";
const ExamDiv = ref(null);
const scrollToExam = () => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: ExamDiv.value.offsetTop,
      autoKill: false,
    },
    ease: "power4.out",
  });
};
</script>

<style></style>
