<template>
  <div class="h-full w-screen bg-mainWhite overflow-hidden">
    <Navbar />
    <div class="w-full h-auto justify-center flex-col flex items-center">
      <img src="../assets/images/Wave1.webp" class="w-full" alt="" />
      <div
        class="flex lg:flex-row flex-col items-center justify-around w-full h-auto lg:h-full lg:px-32"
      >
        <img
          src="../assets/images/MainPage.webp"
          class="lg:h-rem34 h-dialog object-contain"
          alt=""
        />
        <div class="flex flex-col items-center space-y-7">
          <h2 class="text-xl text-darkBlue">منظومه آموزشی و فرهنگی</h2>
          <h1
            class="text-7xl border-b-4 rounded-lg pb-7 border-mainBlue font-bold text-mainBlue"
          >
            اطلس
          </h1>
          <NuxtLink to="/exam">
            <button
              class="px-12 py-3 text-xl border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-md"
            >
              <span>آزمون خلاقیت</span>
            </button>
          </NuxtLink>
        </div>
      </div>

      <img src="../assets/images/Wave2.webp" class="w-full" alt="" />
    </div>
    <div
      class="w-screen h-full space-y-10 lg:space-y-24 flex flex-col items-center justify-around p-10 lg:p-20"
    >
      <h2
        class="text-3xl font-bold text-darkBlue border-b-2 border-mainBlue pb-2 rounded-md text-center"
      >
        جدید ترین ها در اطلس
      </h2>
      <ImageGallery class="h-full Carousel" />
      <h1
        class="text-3xl text-mainBlue text-center border-b-2 font-bold rounded-md p-4 border-mainBlue"
      >
        خدمات منظومه ی آموزشی و فرهنگی اطلس
      </h1>
      <div
        class="h-full w-full flex items-center justify-center space-x-0 space-y-12 lg:space-y-0 lg:flex-row flex-col lg:space-x-16"
      >
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
            <h2 class="text-sm px-3 text-center text-mainWhite">
              آزمون خلاقیت برای فرزندان شما
            </h2>
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
    <div
      class="h-auto lg:my-10 w-full flex items-center flex-col justify-start space-y-10 px-14 lg:px-40 py-20"
    >
      <h2
        class="text-4xl text-darkBlue font-bold lg:text-right text-center lg:self-end"
      >
        درباره ی منظومه آموزشی و فرهنگی اطلس
      </h2>
      <h2 class="text-xl text-right">
        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </h2>
      <h2 class="text-xl text-right">
        حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
        دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
        نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
        موجود طراحی اساسا مورد استفاده قرار گیرد
      </h2>
    </div>
    <div
      class="w-full h-auto lg:mb-0 mb-12 lg:h-dialog px-14 lg:px-40 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-full flex items-center lg:flex-row flex-col-reverse justify-between"
      >
        <button
          class="px-12 py-2 border-2 my-5 lg:my-0 items-center border-mainBlue text-lg active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مشاهده همه</span> <PhArticle />
        </button>
        <h2
          class="text-4xl text-darkBlue font-bold flex items-center space-x-2"
        >
          <span>اخرین مقالات</span>
          <PhArticle />
        </h2>
      </div>
      <div
        class="h-full lg:flex-row flex-col space-y-12 lg:space-y-0 space-x-0 my-20 w-full flex items-center justify-center lg:space-x-16"
      >
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-6"
        ></div>
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-6"
        ></div>
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-14"
        ></div>
        <div
          @mouseenter="startAnimation"
          @mouseleave="resetAnimation"
          class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainWhite relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-md p-6"
        ></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { PhArticle } from "@phosphor-icons/vue";
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
