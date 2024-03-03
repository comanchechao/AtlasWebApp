<template>
  <head>
    <title dir="rtl">دوره های نوجوانان منظومه آموزشی و فرهنگی اطلس</title>
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
          <span>نوجوانان</span>
          <span>دوره های</span>
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-96 lg:h-96 flex items-center justify-center bg-white rounded-sm border-2 border-mainRed"
        >
          <img
            class="w-full h-full object-contain"
            src="../../assets/images/kids4.jpg"
            alt=""
          />
        </div>
        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-end justify-start lg:justify-start p-3 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <NuxtLink :to="'articledetail/' + latestarticle.id">
            <h2
              class="lg:text-3xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
            >
              دوره آموزش زبان انگلیسی نوجوانان اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-10"
          >
            <span class="leading-loose text-gray-600">
              دوران نوجوانی را می توان دوران الگوپذیری و یا به عبارتی دوران
              تکوین شخصیت و شکل گیری نام برد. دوره نوجوانی دوره ای است که آنان
              از لحاظ شناخت اجتماعی و جهانی از کودکی به سوی بزرگسالی حرکت می
              کنند، بعبارتی این دوره شکوفا شدن توانمندیهاست و دوره سازندگی هر
              فرد است.آموزش موثر و سرشار از تنوع و جاذبه از یک سو و گسترش افق
              دید و آموزش های مدرن و شخصیت ساز برای عرصه های بعدی آموزشی و مقاطع
              تحصیلی عالی نقش اساسی در پرورش و تربیت نسل جدید یا جوانان عزیز
              دارد . آموزشگاه زبان اطلس با بهره گیری از آخرین دستاوردهای آکادمیک
              برای فرزندان شما آموزش هایی را پیش بینی نموده است. </span
            ><span class="leading-loose text-gray-600">
              سیستم آموزشی آموزشگاه زبان اطلس برای نوجوانان مخصوص رده سنی 13 الی
              15 در قالب 10 ترم آموزشی هر ترم 16 جلسه 90 دقیقه ایست. و به صورت
              ترمیک دوروز در هفته و زبان آموزدر هر هفته 3.5 ساعت آموزشی فراگیری
              می کند که در مجموع یک ترم 28ساعت آموزشی حدود 60 روز( دو ماه ) می
              باشد. برای این دوره از مجموعه کتب بیگ انگلیش کتاب های 3 – 4 – 5 در
              نظر گرفت شده که توسط موسسه پیرسون Pearson منتشر شده است</span
            >
          </h3>
          <h3 class="text-xs text-black">
            <span class="font-bold">نوع دوره </span><span>:</span>
            <span>عمومی نوجوانان</span>
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
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-end justify-start lg:justify-start p-3 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <NuxtLink :to="'articledetail/' + latestarticle.id">
            <h2
              dir="rtl"
              class="lg:text-3xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
            >
              درباره دوره های آموزشی نوجوانان اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-2"
          >
            <span class="leading-loose text-gray-600"
              >یکی از مزایای این کتاب آموزش با استفاده از تصاویر است که بسیار
              مورد استقبال قرار گرفته و زبان آموزان را در مسیر یادگیری راحت تر
              زبان همراهی می کند. این مجموعه شامل کتاب دانش آموز، کتاب کار، کتاب
              معلم، فایل های صوتی دانش آموزش و تمرین، فایل های تصویری و نرم
              افزار است. در این کتاب از ویژگی CLI و یا Language Integrated
              Learning استفاده شده است.نویسندگان این کتاب ، محتوای با کیفیت بالا
              را برای Big English 2nd Edition نگارش کرده اند که برای الهام
              بخشیدن و ایجاد انگیزه در دانش آموزان ابتدایی برای یادگیری زبان
              انگلیسی طراحی شده است.</span
            >
            <span class="leading-loose text-gray-600">اهداف:</span>
            <span class="leading-loose text-gray-600"
              >• آموزش صحیح و هدفمند زبان انگلیسی به نوجوانان</span
            >
            <span class="leading-loose text-gray-600"
              >• ایجاد انگیزه و علاقه در نوجوانان به ادامه و استمرار در یادگیری
              زبان دوم</span
            >
            <span class="leading-loose text-gray-600"
              >• آشنایی نوجوانان با انگلیسی و کاربرد های روزمره</span
            >
            <span class="leading-loose text-gray-600"
              >• آشنایی نوجوانان با متون ساده انگلیسی بر مبنای دروس عمومی مدارس
              بر حسب نیاز</span
            >
            <span class="leading-loose text-gray-600"
              >• آشنایی نوجوانان با موارد فرهنگی مورد نیاز در برخوردهای
              اجتماعی</span
            >
            <span class="leading-loose text-gray-600"
              >• ایجاد اعتماد به نفس در استفاده از زبان دوم</span
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
            <span> شهریه کلاس زبان اطلس نوجوانان </span>
          </h2>
          <PhArticle size="39" />
        </div>
        <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-500">
          <span>
            در جدول زیر می‌توانید، شهریه دوره‌ها را به تفکیک هر سطح مشاهده کنید:
          </span>
          <img
            class="w-full h-full object-contain"
            src="../../assets/images/teensTax.jpg"
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
  {
    title: "کتاب اصلی که در این دوره به فرزندم تدریس خواهد شد چیست؟",
    content: "Big English 5 /Big English 4/ Big English3 کتابهای",
  },
  {
    title: "پس از گذراندن دوره های نوجوانان فرزند من به چه سطحی خواهد رسید؟",
    content: "Content 2",
  },
  {
    title: "واحد دبستان دخترانه",
    content: "بعد از تعیین سطح به دوره بزرگسالان ارتقا خواهد یافت",
  },
  {
    title: "فرزند من چند ترم در دوره نوجوانان تحصیل خواهد کرد؟ ",
    content: "طی 3 کتاب در 9 ترم",
  },
  {
    title: "هر ترم چند جلسه است؟ ",
    content: "هر ترم شامل ۱۶ جلسه آموزشی ۹۰ دقیقه ای است.",
  },

  {
    title:
      "عملکرد فرزند من به چه صورتی ارزیابی خواهد شد؟ نوع امتحانات به چه صورت است؟ ",
    content:
      "در هر ترم آموزشی ۲ امتحان  که آزمون میان ترم جلسه 8 و پایان ترم جلسه 16 برگزار می گردد.  نمره هر کدام از 20 محاسبه می گردد و مهارت صحبت کردن و استفاده از مطالب که تا کنون یاد گرفته و همچنین فعال بودن زبان آموز در کلاس ،انجام تکالیف  پیشرفت زبان آموز و در طول ترم توسط استاد مربوطه ارزیابی شده که از 40  نمره محاسبه میگردد. و 20 نمره برای موارد انضباطی در نظر گرفته شده که در مجموع نمرات زبان آموز نوجوان از ۱۰۰  محاسبه میگردد",
  },
  {
    title: "چگونه می‌توانم از روند پیشرفت تحصیلی فرزندم آگاه شوم؟",
    content:
      "شما با نصب ' اپلیکیشن آموزشگاه من'  و ورود به قسمت  مشاهده نمرات هر 5 جلسه یکبار می توانید نمرات فرزند خود را چک کنید. ",
  },
  {
    title:
      "اگر فرزند من به هر دلیل نتواند برای مدتی در کلاس ها ثبت نام نماید وضعیت تحصیلی او به چه صورت خواهد بود؟ ",
    content:
      "فرزند شما می تواند دو ترم متوالی معادل ۶۰ روز(از زمان آخرین امتحان پایان‌ترم تا ثبت‌نام بعدی) از مرخصی تحصیلی استفاده نماید ولی اگر میزان مرخصی بیشتر از ۶۰ روز باشد ایشان باید مجددا تعیین سطح شوند و سپس می توانند برای ثبت نام اقدام نمایند.",
  },
  {
    title:
      "اگر فرزند من به هر دلیل نتواند برای در آزمون میان‌ترم/پایان ترم شرکت نماید، نمره ایشان چگونه محاسبه می‌گردد",
    content:
      "در صورتیکه دانشجو موفق به حضور در جلسه میان ترم نشود، نمره نهایی ایشان از ۸۰ محاسبه می‌گردد مگر با بررسی سوابق و صلاحدید استاد مربوطه نصف نمره پایان ترم در نظر گرفته میشود..در صورتیکه زبان آموز موفق به حضور در جلسه امتحان پایان ترم نگردد، ، نمره نهایی ایشان از ۸۰ محاسبه می‌گردد.",
  },
  {
    title: "چگونه می‌توانم فرزندم را آنلاین ثبت‌نام کنم؟ ",
    content:
      "به دو طریق  ۱.از طریق اپلیکیشن ' آموزشگاه من' ورود به قسمت پرداخت بدهی  ۲.از طریق سامانه portal.atlasurmia.ir و ورود به قسمت پرداخت بدهی",
  },
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
