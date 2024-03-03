<template>
  <head>
    <title dir="rtl">دوره های کودکان منظومه آموزشی و فرهنگی اطلس</title>
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
          <span>کودکان</span>
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
            src="../../assets/images/kids3.jpg"
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
              دوره آموزش زبان انگلیسی کودکان اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-10"
          >
            <span class="leading-loose text-gray-600">
              دوران نوجوانی را می توان دوران الگوپذیری و یا به عبارتی کودکان در
              دنیایی آمیخته از تنوع ، جاذبه و سرشار از شادی و حرکت بسر می برند
              از این رو آموزش زبان انگلیسی کودکان از ظرافت ها و حساسیت های خاصی
              برخوردار می باشد.سیستم آموزشی آموزشگاه اطلس با توجه به عوامل فوق
              در محیطی شاد و زیبا و پر انرژی با تکیه بر اصول تربیتی و متناسب با
              روانشناسی رشد برای کودکان برنامه های درسی زیر را تدارک نموده است. </span
            ><span class="leading-loose text-gray-600">
              این دوره برای کودکان8 (کلاس اول تمام کرده) تا 12 سال در قالب 9 ترم
              آموزشی هر ترم 16 جلسه 90 دقیقه ای به صورت دو روز در هفته و زبان
              آموزدر هر هفته 3.5 ساعت آموزشی فراگیری می کند .که در مجموع یک ترم
              28 ساعت آموزشی حدود 60 روز (دو ماه ) می باشد</span
            >
          </h3>
          <h3 class="text-xs text-black">
            <span class="font-bold">نوع دوره </span><span>:</span>
            <span>عمومی کودکان</span>
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
              درباره دوره های آموزشی کودکان اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-2"
          >
            <span class="leading-loose text-gray-600"
              >برای این دوره از مجموعه کتاب های بیگ انگلیش starter – 1 در نظر
              گرفته شده که توسط موسسه پیرسون منتشر شده است. یکی از مزایای این
              کتب آموزش با استفاده از تصاویر است که بسیار مورد استقبال قرار
              گرفته و زبان آموزان را در مسیر یادگیری راحت تر زبان همراهی می کند.
              این مجموعه شامل کتاب دانش آموز، کتاب کار، کتاب معلم، فایل های صوتی
              دانش آموزش و تمرین، فایل های تصویری و نرم افزار است. در این کتاب
              از ویژگی CLI و یا Language Integrated Learning استفاده شده
              است.</span
            >
            <span class="leading-loose text-gray-600">اهداف:</span>
            <span class="leading-loose text-gray-600"
              >• آشنایی کودکان با زبان انگلیسی در محیطی جذاب و هدفمند</span
            >
            <span class="leading-loose text-gray-600"
              >• تقویت توانایی برقراری ارتباط در آنان توسط اساتید مجرب می
              باشد.</span
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
            <span> شهریه کلاس زبان اطلس کودکان </span>
          </h2>
          <PhArticle size="39" />
        </div>
        <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-500">
          <span>
            در جدول زیر می‌توانید، شهریه دوره‌ها را به تفکیک هر سطح مشاهده کنید:
          </span>
          <img
            class="w-full h-full object-contain"
            src="../../assets/images/kidsTax.jpg"
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
    title: "هر کتاب در چند ترم به فرزندم آموزش داده می‌شود؟",
    content:
      "سری کتابهایBig English starter Big English1 Big English 2 در 9 ترم   که هر کتاب در طول 3 ترم آموزشی به فرزند شما آموزش داده می‌شود. ",
  },
  {
    title: "یا قواعد ساختاری به فرزندم تدریس می‌شود؟",
    content: "بله، اما ساختار های ساده و کوتاه، در قالب مکالمه و شعر.",
  },
  {
    title: "نحوه سطح بندی فرزندم چگونه هست؟",
    content:
      "فرزندتان پس از شرکت در آزمون تعیین سطح، در سطح مناسب قرار می گیرند.",
  },
  {
    title: " در هر ترم چند درس به فرزندم ارائه می‌شود؟ ",
    content:
      "در طول هر ترم 3 درس به آموزش داده خواهد شد و در پایان هر ترم نیز فرزندتان با امتحان پایان ترمی که برگزار می شود مورد ارزیابی قرار خواهند گرفت.",
  },
  {
    title: "تعیین سطح به‌صورت کتبی انجام می‌شود یا شفاهی؟",
    content: "برای سنجش مهارت گفتاری، تعیین سطح به صورت شفاهی صورت می پذیرد.",
  },
  {
    title: "در تعیین سطح فرزند من چه سوالاتی مطرح می‌شود؟",
    content:
      "در این تعیین سطح که به صورت شفاهی برگزار می شود، سوالات روزمره با هدف استفاده از دستور زبانی از ایشان پرسیده می شود.",
  },
  {
    title: "گرفتن تعیین سطح فرزندم چند دقیقه طول می‌کشد؟",
    content: "حداقل ۲۰ و حداکثر ۴۰ دقیقه زمان می‌برد.",
  },
  {
    title: "آیا برای تعیین سطح فرزندم باید از قبل وقت بگیرم؟ ",
    content:
      "تعیین سطح در هر زمان از حضور شما به همراه فرزندتان در موسسه امکان پذیر است، لذا جهت تسریع در این امر شما می توانید از قبل به صورت تلفنی زمان مناسب برای تعیین سطح را از طریق شماره تلفن ۰۴۴۳۳۶۶۱۰۲۱ جویا شده و در زمان تعیین شده در آموزشگاه حضور یابید.",
  },
  {
    title: "چگونه می‌توانم از اشکالات امتحانی فرزندم آگاه شوم؟",
    content:
      "در صورت تمایل شما می‌توانید از طریق ارتباط با تیم آموزش ، از نقاط ضعف و اشکالات امتحانی فرزندتان آگاه شوید.",
  },
  {
    title: "نحوه نمره دادن به فرزندم در طول ترم چگونه هست؟ ",
    content:
      "در هر ترم آموزشی ۲ امتحان  که آزمون میان ترم جلسه 8 و پایان ترم جلسه 16 برگزار می گردد.  نمره هر کدام از 20 محاسبه می گردد و مهارت صحبت کردن و استفاده از مطالب که تا کنون یاد گرفته و همچنین فعال بودن زبان آموز در کلاس ،انجام تکالیف  پیشرفت زبان آموز و در طول ترم توسط استاد مربوطه ارزیابی شده که از 40  نمره محاسبه میگردد. و 20 نمره برای موارد انضباطی در نظر گرفته شده که در مجموع نمرات زبان آموز نوجوان از ۱۰۰  محاسبه میگردد",
  },
  {
    title: "از کجا می‌توانم بفهمم که نمره این ترم فرزندم چند شده است؟",
    content:
      "شما با نصب ' اپلیکیشن آموزشگاه من'  و ورود به قسمت  مشاهده نمرات هر 5 جلسه یکبار می توانید نمرات فرزند خود را چک کنید.",
  },

  {
    title: "نمره حد نصاب برای قبولی فرزندم و رفتن به ترم بعد چگونه هست؟",
    content: "حداقل نمره برای قبولی در هر ترم برای فرزندتان نمره 75 می باشد.",
  },
  {
    title: "آیا در پایان هر ترم کارنامه‌ای به فرزندم می‌دهید؟",
    content:
      "بله کارنامه و سوابق آموزشی در سامانه portal.atlasurmia.ir  بخش سوابق آموزشی قابل دسترس خواهد بود.",
  },
  {
    title:
      "آیا کلاس های آموزشی شما تضمینی برای کسب نمرات مناسب در سیستم آموزشی مدارس هست؟ ",
    content:
      "بله، انتظار می رود که با حضور موثر و مداوم در کلاس های اطلس، فرزندتان قادر به کسب نمرات قابل قبول در امتحانات و ارزیابی های تحصیلی مدارس باشد.",
  },
  {
    title:
      "آیا نحوه‌ی تدریس اساتیدی که فرزندم در این موسسه خواهد داشت با هم تفاوت دارد؟ ",
    content:
      "اساتید آموزشگاه طی شرکت در ورکشاپ های آموزشی بصورت هماهنگ در کلاس تدریس میکنند",
  },
  {
    title: "آیا همکلاسی های فرزندم از لحاظ سنی با او در یک رده سنی می باشند؟ ",
    content:
      "بله، تمام افرادی که در کلاس های موسسه شرکت می کنند از لحاظ سنی در یک بازه ی سنی مشخص قرار دارند.",
  },
  {
    title:
      "چگونه می‌توانم به تاریخ‌های شروع و پایان کلاس فرزندم در هر ترم دسترسی داشته باشم؟ ",
    content: "با مراجعه به پرتال",
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
