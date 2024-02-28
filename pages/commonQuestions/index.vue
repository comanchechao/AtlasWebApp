<template>
  <head>
    <title dir="rtl">سوالات متداول منظومه آموزشی و فرهنگی اطلس</title>
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
          <span>سوالات متداول</span>
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-96 lg:h-96 flex items-center justify-center"
        >
          <img
            class="w-full h-full object-contain"
            src="../../assets/images/CommonQ.webp"
            alt=""
          />
        </div>
        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-end justify-start lg:justify-start p-3 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <h2
            class="lg:text-2xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            سوالات متداول منظومه آموزشی فرهنگی اطلس
          </h2>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-4"
          >
            <span class="leading-loose text-gray-800">
              در اینجا پاسخ به برخی از سوالات متداول در مورد منظومه آموزشی
              فرهنگی اطلس آورده شده است. اگر سوال دیگری دارید، میتوانید :
            </span>
            <NuxtLink to="/contactUs">
              <button
                class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
              >
                <span>با ما تماس بگیرید</span>
                <PhPhoneCall :size="20" weight="fill" />
              </button>
            </NuxtLink>
          </h3>
          <div
            class="w-full h-full mb-12 flex flex-col items-start space-y-6 justify-start"
          >
            <div
              class="h-auto mt-10 w-full text-darkBlue bg-opacity-80 rounded-md flex lg:flex-row flex-col-reverse items-center justify-end space-x-0 lg:space-y-0 lg:space-x-4"
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
    title: "ر کتاب را در چند ترم می گذرانم؟",
    content:
      "دوره بزرگسالان به سه سطح مقدماتی میانی و پیشرفته تقسیم میشود سطح مقدماتی ( دو کتاب(Top Notch1    5ترم    -4ترم Top Notch Fundamental  ) (سطح میانی ( 2 کتاب) Top Notch2- Top Notch3  هرکدام 5 ترم) (سطح پیشرفته 2 کتاب Summit1-summit 2 هر کدام 5 ترم)",
  },
  {
    title: "ظرفیت کلاس ها چند نفر می باشد؟",
    content: "، الحداکثر ۱۳ نفر",
  },
  {
    title: "آیا می توانم در کلاس های فقط مکالمه شرکت کنم؟",
    content: "بله",
  },
  {
    title:
      "هدف من فقط کلاس های مکالمه است و به بحث های گرامری اصلا علاقه ندارم. کلاس های شما چقدر در این جهت میتواند به من کمک کند؟",
    content:
      "با توجه به این مهم که قواعد زبانی از پیش نیازهای پیشرفت مهارت های زبان می باشد، موسسه اطلس تمرکز قابل توجهی به تدریس گرامر به صورت کاربردی دارد",
  },
  {
    title: "استادها آقا هستند یا خانم؟",
    content:
      "کلاس ها به صورت جداگانه برای خانم ها و آقایان برگزار میشود و اساتید هم خانم و هم آقا هستند",
  },
  {
    title: "لهجه ای که در اطلس یاد میگیرم British است یا American؟",
    content: "American",
  },
  {
    title: "آیا استفاده از برنامه آموزشگاه من اجباریست",
    content:
      "شما جهت مشاهده تعداد غیبت ،نمرات و تکالیف و همچنین پرداخت شهریه به این اپلکیشن نیازمندید",
  },
  {
    title: "آیا میتوانم در پایان دوره ها به تدریس مشغول شوم؟ ",
    content: "بله ، بعد از گذراندن دوره تی تی سی اطلس",
  },
  {
    title: "نحوه سطح بندی چگونه است؟",
    content:
      "ترتیب سطوح Elementary (101-109) ، Pri-Intermediate(201-205  Intermediate(301-305) ، Upper-Intermediate(401-405)، Advanced(501-505)",
  },
  {
    title:
      "من چند سال پیش کلاس میرفتم اما خیلی چیزها رو فراموش کردم. امکان شروع از سطوح بالاتر برای من وجود دارد؟ ",
    content:
      "اگر در محیط کلاس قرار بگیرم همه چیز رو به خاطر خواهم آورد. طبق تعیین سطح انجام شده و پاسخگویی شما به سوالات مناسب ترین سطح ممکن برای شما درنظر گرفته خواهد شد. اما دراطلس Upgrade شدن تا جلسه چهارم هر ترم با توجه به نظر استاد و تایید مدیر آموزش امکان پذیر می باشد. به علاوه در صورتی که آخر ترم نمره بالای ۹۸ و تاییدیه استاد را داشته باشید، پس از امتحان مجدد شفاهی میتوانید Upgrade شوید.",
  },
  {
    title: "آیا هم کلاس های من هم سن خودم هستند یا کوچکترند؟",
    content: "دوره های بزرگسالان مناسب زبان آموزان ۱۵ سال به بالاست.",
  },
  {
    title: "زمان بندی آزمون های میان ترم و پایان ترم چگونه است؟ ",
    content:
      "کلاس شما 16 جلسه بوده که جلسه 8 آزمون میانترم و جلسه 16 آزمون پایان ترم برگزار میشود",
  },
  {
    title: "اگر نتوانم در آزمون پایان ترم شرکت کنم، ترم را باید تکرار کنم؟  ",
    content: "اگر جمع نمرات شما به بالای 75 رسید میتوانید ادامه دهید.",
  },
  {
    title: "چگونه میتوانم نمره ی پایان ترمم را ببینم؟  ",
    content: "از نرم افزار آموزشگاه من",
  },
  {
    title: "این موسسه تحت نظر کدام سازمان است؟",
    content: "سازمان آموزش و پرورش",
  },
  {
    title: "کتاب اصلی که در این دوره به فرزندم تدریس خواهد شد چیست؟  ",
    content: " هرکدام در سه سطح Big English 3 الی  5 کتابهای",
  },
  {
    title: "فرزند من چند ترم در دوره نوجوانان تحصیل خواهد کرد؟   ",
    content: "طی 3 کتاب در 9 ترم",
  },
  {
    title: "هر ترم چند جلسه است؟",
    content: " هر ترم شامل ۱۶ جلسه آموزشی ۹۰ دقیقه ای است.",
  },
  {
    title:
      "عملکرد فرزند من به چه صورتی ارزیابی خواهد شد؟ نوع امتحانات به چه صورت است؟  ",
    content:
      "عملکرد فرزند من به چه صورتی ارزیابی خواهد شد؟ نوع امتحانات به چه صورت است؟ در هر ترم آموزشی ۲ امتحان  که آزمون میان ترم جلسه 8 و پایان ترم جلسه 16 برگزار می گردد.  نمره هر کدام از 20 محاسبه می گردد و مهارت صحبت کردن و استفاده از مطالب که تا کنون یاد گرفته و همچنین فعال بودن زبان آموز در کلاس ،انجام تکالیف  پیشرفت زبان آموز و در طول ترم توسط استاد مربوطه ارزیابی شده که از 40  نمره محاسبه میگردد. و 20 نمره برای موارد انضباطی در نظر گرفته شده که در مجموع نمرات زبان آموز نوجوان از ۱۰۰  محاسبه میگردد",
  },
  {
    title: "  میزان شهریه فرزندم به سطح کلاسی چقدر است",
    content: " 5400000 تومان به ازای هر ترم در دوره مقدماتی شروع می شود.",
  },
  {
    title: "چند ترم تا اتمام دوره کودکان طول می کشد؟ ",
    content: " چند ترم تا اتمام دوره کودکان طول می کشد؟ .",
  },
  {
    title: "هر ترم چند جلسه است؟",
    content: " هر ترم شامل ۱۶ جلسه آموزشی ۹۰ دقیقه ای است.",
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
