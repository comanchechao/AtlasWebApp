<template>
  <div class="h-full w-screen">
    <Navbar />
    <div
      class="lg:h-screen h-auto w-full bg-mainWhite flex flex-col justify-center items-center py-14"
    >
      <div
        class="h-full w-full lg:flex-row flex-col-reverse flex justify-center items-center lg:px-44"
      >
        <div
          class="flex flex-col items-center justify-center space-y-6 text-right px-14 lg:px-20 w-full lg:w-1/2 h-full"
        >
          <h2 class="text-mainBlue text-4xl text-center">
            معرفی

            <span class="text-mainYellow">آزمون هوش</span>
            اطلس
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
            class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون خلاقیت</span>
          </button>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full lg:px-0 px-16 lg:w-1/2 h-full"
        >
          <img
            class="object-contain w-96"
            src="../assets/images/IQ.webp"
            alt=""
          />
          <h1 class="lg:text-6xl text-5xl my-3 text-center text-mainYellow">
            آزمون هوش
          </h1>
          <h3 class="text-mainBlue lg:mb-0 mb-14">
            موسسه ی آموزشی و فرهنگی اطلس
          </h3>
        </div>
      </div>
      <img class="h-44 w-full" src="../assets/images/WaveDivide.webp" alt="" />
    </div>

    <div
      ref="ExamDiv"
      class="h-auto w-full bg-mainWhite flex flex-col items-center py-10 space-y-14 px-32"
    >
      <h2
        class="text-6xl font-bold text-mainBlue border-b-4 rounded-lg pb-4 border-darkBlue"
      >
        (TTCT) تست خلاقیت تورنس
      </h2>
      <div class="h-full w-full flex flex-col items-end space-y-4">
        <h2 class="text-2xl font-bold text-darkBlue">تست خلاقیت تورنس چیست؟</h2>
        <div
          class="h-full space-y-8 text-right rounded-md py-9 px-6 w-full bg-gray-100 shadow-lg shadow-mainBlue"
        >
          <h2>
            تست سنجش خلاقیت تورنس یکی از تست‌های استاندارد جهت سنجش میزان خلاقیت
            افراد از سنین دبستان تا بعد از لیسانس است. اعتبار این آزمون بارها در
            سراسر جهان از جمله ایران سنجیده شده است. این آزمون تاکنون بیش از هر
            آزمون دیگر در پژوهش و اندازه‌گیری‌های تربیتی استفاده شده است. تاکنون
            در بیش از دو هزار پژوهش که در مجلات معتبر علمی چاپ شده است، از آزمون
            تورنس به‌عنوان وسیله اندازه گیری خلاقیت استفاده شده است
          </h2>
          <h2>
            تست خلاقیت در این پرسشنامه هر سؤال مشتمل بر سه گزينه يا پاسخ است که
            شما باید تنها يكي از این پاسخ‌ها را که بیشتر با ویژگی‌های شما تطبیق
            دارد انتخاب کنید. تورنس شامل پرسشنامه‌ای حاوی 60 سؤال است
          </h2>
          <h2>
            پس از پاسخ‌دهی به همه سؤالات می‌توانید نتایج آزمون را در دو بخش
            مشاهده کنید. در بخش اول درصد نمره‌ای را که در چهار خرده آزمون سیالی،
            انعطاف، ابتکار و بسط کسب کرده‌اید، در نمودار به شما نشان داده می‌شود
            که می‌توانید آنها را با هم مقایسه کنید. در بخش دوم نمره خلاقیت شما
            نشان داده می‌شود که از طریق آن می‌توانید بفهمید خلاقیت شما چقدر است
            (خیلی کم، کم، متوسط، زیاد و خیلی زیاد)
          </h2>
        </div>
      </div>
      <button
        @click="StartExam"
        class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>شروع آزمون</span>
      </button>
    </div>
    <div ref="ExamStart" class="h-screen w-full bg-mainWhite">
      <img
        class="h-44 w-screen"
        src="../assets/images/WaveDivide.webp"
        alt=""
      />
      <div class="h-full w-full px-32 py-10 flex flex-col items-center">
        <div>
          <h1 class="text-3xl text-mainBlue">
            وقتی با یک مساله ی خیلی مهم رو به رو میشوید معمولا چه میکنید؟
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
import { ref } from "vue";
const ExamDiv = ref(null);
const ExamStart = ref(null);
const StartExam = () => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: ExamStart.value.offsetTop,
      autoKill: false,
    },
    ease: "power4.out",
  });
};
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
