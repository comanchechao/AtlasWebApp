<template>
  <head>
    <title dir="rtl">دوره های عمومی منظومه آموزشی و فرهنگی اطلس</title>
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
          <span>عمومی</span>
          <span>دوره های</span>
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 flex w-full pt-4 h-full items-center justify-center"
        >
          <LazyImageGallery />
        </div>
        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-end justify-start lg:justify-start p-3 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <NuxtLink :to="'articledetail/' + latestarticle.id">
            <h2
              class="lg:text-3xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
            >
              دوره آموزش زبان انگلیسی بزرگسالان
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-10"
          >
            <span class="leading-loose text-gray-600">
              در عصر جدید ، روند پر شتاب رشد و تکامل علوم و در پی آن تحولات پی
              در پی سیستم های آموزشی ایجاب نموده است که آموزشگاه اطلس همچون سایر
              مراکز آموزش ، خودرا به آخرین متدها ، روش ها ، سیستم ها و متون
              آموزشی روز تجهیز نماید.از این رو دراواخر سال 1398 طبق برنامه ریزی
              انجام شده در آموزشگاه تصمیم گرفته شد با بهره گیری از کتب آموزشی
              Top Notch از این متون در آموزش زبان انگلیسی بزرگسالان برای دوره
              های Elementaryتا Intermediate استفاده گردد وبرای دوره های Upper
              Intermediate تا Advanced سری کتاب های Summit در نظر گرفته شده است.
              کتب انتخاب شده از محبوب ترین دوره های آموزش زبان انگلیسی امریکایی
              در جهان است که توسط انتشارات پیرسون لانگمن منتشر شده و شامل 4 کتاب
              می باشد. تاپ ناچ زبان‌ آموزان را از سطح A1 به B1 می رساند و در
              ادامه کتاب های سامیت در ادامه تاپ ناچ تدریس می شود که شامل دو کتاب
              است و زبان آموزان را از سطح B2 به C1 می رساند. طبق اعلام موسسه
              پیرسون تاکنون بیش از 3 میلیون نفر در سراسر جهان با این کتاب با
              زبان انگلیسی آشنا شده اند. </span
            ><span class="leading-loose text-gray-600">
              سطح اول این مجموعه به نام Top Notch Fundamentals دارای 14 درس است
              و سایر کتاب های این مجموعه هر کدام 10 درس دارند. ویرایش سوم Top
              Notch در سال 2016 منتشر شد چهار مهارت اصلی شنیداری (Listening)،
              گفتاری (Speaking)، درک مطلب (Reading)، و نوشتاری (Writing) را
              تقویت می کند. اهداف دوره بزگسالان آموزش سیستماتیک 4 مهارت زبانی (
              Speaking،Writing،Listening،(Reading تمرکز ویژه و مضاعف بر توانایی
              های ارتباطی (Communication) در قالب مهارت صحبت کردن (Speaking)
              آشنایی با کاربرد های اجتماعی و روزمره (Functions/ Speech Acts)
              آموزش کاربردی زبان در قالب موقعیت های واقعی (Real Life
              Situations)در بسترهای قابل درک (Contextualized Learning) استفاده
              از مکالمات متداول روزمره به منظور الگو سازی و بالا بردن اعتماد به
              نفس زبان آموزان در برخورد با موقعیت های مشابه سیستم امورشی
              آموزشگاه زبان اطلس تسلط بر داشتن این 4 مهارت اصلی کمک بزرگی به
              زبان آموز می کند که خود را به ابزار کار آمد زبان مجهز نماید. سیستم
              آموزشی بزرگسالان آموزشگاه زبان اطلس برای رده سنی بالای 15 سال به
              صورت ترمیک می باشد .</span
            >
          </h3>
          <h3 class="text-xs text-black">
            <span class="font-bold">نوع دوره </span><span>:</span>
            <span>عمومی عمومی(۷ تا ۱۲ سال)</span>
          </h3>
          <NuxtLink to="/preSignUp">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>پیش ثبت نام</span>
              <PhGraduationCap :size="20" weight="fill" />
            </button>
          </NuxtLink>
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w-full h-96 lg:h-96 bg-white rounded-lg"
        >
          <Skeleton width="full" height="24rem"></Skeleton>
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w- h-auto lg:h-full flex flex-col items-end justify-start lg:justify-center p-3 lg:p-10 space-y-6"
        >
          <Skeleton height="5rem" width="28rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
      </div>
      <div
        class="lg:h-dialog lg:mt-14 h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-full lg:h-full flex flex-col items-end justify-start lg:justify-start p-2 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <h2
            dir="rtl"
            class="lg:text-3xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            سیستم آموزشی اطلس
          </h2>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-2"
          >
            <span class="leading-loose text-gray-600"
              >یادگیری زبان دوم به‌ویژه زبان انگلیسی در سنین پایین کودکان سیستم
              آموزشی ترمیک بزرگسالان به مدت 30 ترم آموزشی به صورت دوروز در هفته
              و زبان آموزدر هر هفته 3.5 ساعت آموزشی فراگیری می کند که در مجموع
              یک ترم 16 جلسه 90 دقیقه ای حدود 60 روز( دو ماه ) می باشد.</span
            ><span class="leading-loose text-gray-600"> مزایای دوره ترمیک</span>
            <span class="leading-loose text-gray-600"> انسجام دردوره ها</span>
            <span class="leading-loose text-gray-600">
              امکان یادگیری مطابق با استاندارهای بین المللی</span
            >
            <span class="leading-loose text-gray-600">
              اساتید متخصص در حوزه زبان</span
            >
            <span class="leading-loose text-gray-600">
              برگزاری امتحانات جامع آخر هر کتاب (Comprehensive)</span
            >
          </h3>
          <NuxtLink to="/preSignUp">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>پیش ثبت نام</span>
              <PhGraduationCap :size="20" weight="fill" />
            </button>
          </NuxtLink>
        </div>
        <div
          class="lg:w-1/2 w-full h-96 lg:h-96 flex items-center justify-center bg-white rounded-sm border-2 border-mainRed"
        >
          <img
            class="w-full h-full object-contain"
            src="../../assets/images/Big-English-Book-Series-min.png"
            alt=""
          />
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w- h-auto lg:h-full flex flex-col items-end justify-start lg:justify-center p-3 lg:p-10 space-y-6"
        >
          <Skeleton height="5rem" width="28rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w-full h-96 lg:h-96 bg-white rounded-lg"
        >
          <Skeleton width="full" height="24rem"></Skeleton>
        </div>
      </div>
      <div
        class="w-screen h-full flex flex-col items-center space-y-6 justify-center px-6 lg:px-44"
      >
        <div
          class="h-auto w-full text-darkBlue bg-opacity-80 p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-end space-x-0 lg:space-y-0 lg:space-x-4"
        >
          <h2
            class="lg:text-2xl text-lg flex items-center justify-center space-x-2 lg:my-0 my-5 border-b-8 rounded-lg border-mainYellow"
          >
            <span> شهریه کلاس زبان اطلس عمومی </span>
          </h2>
          <PhArticle size="39" />
        </div>
        <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-500">
          <span>
            در جدول زیر می‌توانید، شهریه دوره‌ها را به تفکیک هر سطح مشاهده کنید:
          </span>
          <img
            class="w-full h-full object-contain"
            src="../../assets/images/AdultTax.jpg"
            alt=""
          />
        </h2>
        <NuxtLink to="/preSignUp">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>پیش ثبت نام</span>
            <PhGraduationCap :size="20" weight="fill" />
          </button>
        </NuxtLink>
      </div>
      <div
        class="w-screen h-full mb-12 flex flex-col items-end lg:px-44 px-6 space-y-6 justify-end"
      >
        <div
          class="h-auto w-full text-darkBlue bg-opacity-80 p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-end space-x-0 lg:space-y-0 lg:space-x-4"
        >
          <h2
            class="text-2xl flex items-center justify-center space-x-2 lg:my-0 my-5 border-b-8 rounded-lg border-mainYellow"
          >
            <span> سوالات متداول </span>
          </h2>
          <PhArticle size="39" />
        </div>
        <Accordion dir="rtl" :activeIndex="0">
          <AccordionTab
            v-for="tab in tabs"
            :key="tab.title"
            :header="tab.title"
          >
            <p class="m-0">{{ tab.content }}</p>
          </AccordionTab>
        </Accordion>
      </div>
      <!-- <img
        class="h-44 w-screen transform rotate-180 my-10"
        src="../../assets/images/WaveDivide.webp"
        alt=""
      /> -->
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
