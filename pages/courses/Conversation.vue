<template>
  <head>
    <title dir="rtl">دوره های مکالمه سریع منظومه آموزشی و فرهنگی اطلس</title>
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
          <span>مکالمه سریع</span>
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
            src="../../assets/images/conversation-min.jpg"
            alt=""
          />
        </div>
        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-end justify-start lg:justify-start p-3 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <NuxtLink :to="'articledetail/' + latestarticle.id">
            <h2
              dir="rtl"
              class="lg:text-3xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
            >
              دوره آموزش زبان انگلیسی مکالمه سریع اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-10"
          >
            <span class="leading-loose text-gray-600">
              زبان انگلیسی همواره با نام "زبان فرصت ها" شناخته می شود که هم
              اکنون ۸۵۰ میلیون نفر در سراسر جهان به این زبان صحبت می کنند. زبان
              شناسان و جامعه شناسان بر این باورند که در طی چند سال آینده این
              آمار به بیش از ۲ میلیارد نفر خواهد رسید. با توجه به پیشرفت
              روزافزون تکنولوژی و تغییر رویه ی استفاده ابزار کار از سنتی به
              مدرن، یادگیری زبان انگلیسی امری مهم به شمار می رود. شخصی که وظیفه
              ی مادری یعنی تعلیم و ترتبیت فرزندان را بر عهده دارد و یا در آینده
              قرار است این وظیفه را عهده دار شود، با یادگیری زبان انگلیسی فاصله
              ی خود را با پیشرفت تکنولوژی کمتر کرده و این باعث مدیریت بهتر و
              آسان تر فرزندان می شود. فراگیری یک زبان نه تنها باعث پیشرفت
              خانواده بلکه باعث آشنایی با دیگر فرهنگ ها و حتی عامل برقراری
              ارتباط با مردم نقاط مختلف جهان است که این مسئله خود موجب افزایش
              اعتماد به نفس شخص شده و علاوه بر آن با تقویت حافظه مانع از بروز
              بیماری آلزایمر می شود. یادگیری زبان انگلیسی در کلاس های عمومی
              علاوه بر جنبه ی آموزشی، باعث بالا رفتن روحیه و روابط اجتماعی نیز
              می شود. </span
            ><span class="leading-loose text-gray-600">
              همانطور که می دانید اکثر فیلم های پر طرفدار جهان در هالیوود و به
              زبان انگلیسی ساخته می شوند و شما با آموختن این زبان دیگر نیازی به
              زیرنویس و یا دوبله فارسی نخواهید داشت. همینطور گوش دادن به آهنگ
              های متنوع خارجی و بهره مندی از اخبار سراسر جهان را می توان از
              فواید این امر نام برد. حالا انتخاب با شماست که مهمترین گام را در
              ارتقاء کیفیت زندگیتان برداریدو از همین الان شروع کنید.</span
            >
          </h3>
          <h3 class="text-xs text-black">
            <span class="font-bold">نوع دوره </span><span>:</span>
            <span>مکالمه سریع</span>
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
              درباره دوره های مکالمه سریع اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-2"
          >
            <span class="leading-loose text-gray-600"
              >این پک آموزشی نتیجه سالها تجربه و ماه ها تلاش تیم متخصص برای تهیه
              و گرد آوری مطالب و فیلم ها و فایل های صوتی می باشد. بر اساس نیاز
              های شما عزیزان پکی آماده شده که از همان جلسه اول قادر به صحبت
              انگلیسی می کند پس از اتمام دوره نیاز به مترجم نخواهید داشت و سفر
              خارجی آسوده ای تجربه خواهید کرد . </span
            ><span class="leading-loose text-gray-600">
              زمان تشکیل کلاس ها حدالامکان با نظر شما تعیین می شود. هزینه این
              کلاس ها فقط 540 هزار تومان می باشد.این کلاس ها ویژه افراد بالای 20
              سال می باشد که فرصت اندکی برای آموزش مکالمات ضروری دارند.</span
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
            src="../../assets/images/conversation2-min.jpg"
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
            dir="rtl"
            class="lg:text-2xl text-lg flex items-center justify-center space-x-2 lg:my-0 my-5 border-b-8 rounded-lg border-mainYellow"
          >
            <span> شهریه کلاس زبان اطلس مکالمه سریع </span>
          </h2>
          <PhArticle size="39" />
        </div>
        <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-500">
          <span>
            در جدول زیر می‌توانید، شهریه دوره‌ها را به تفکیک هر سطح مشاهده کنید:
          </span>
        </h2>
        <div class="h-44 w-96 bg-mainBlue"></div>
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
