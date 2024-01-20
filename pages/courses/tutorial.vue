<template>
  <head>
    <title dir="rtl">منابع آموزشی منظومه آموزشی و فرهنگی اطلس</title>
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
          <span>منابع آموزشی</span>
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          v-if="!loading"
          class="lg:w-1/2 w-full h-96 lg:h-96 flex items-center justify-center bg-white rounded-sm border-2 border-mainRed"
        >
          <ProgressSpinner
            v-if="imageLoading"
            style="width: 50px; height: 50px"
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
          <img
            v-show="!imageLoading"
            class="w-full h-full object-contain"
            :src="latestArticleImage"
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
              منابع آموزش زبان انگلیسی اطلس
            </h2>
          </NuxtLink>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-10"
          >
            <span class="leading-loose text-gray-600">
              منابع آموزشی اطلس، مجموعه‌ای گسترده از فایل‌های آموزشی پی دی اف
              است که برای تمام سنین و سطوح تحصیلی طراحی شده‌اند. این منابع، شامل
              کتاب‌های آموزشی، آزمون‌ها و مقالات هستند. </span
            ><span class="leading-loose text-gray-600">
              منابع آموزشی اطلس، برای تمام افرادی که به دنبال یادگیری هستند،
              مناسب هستند. این منابع، به کاربران کمک می‌کنند تا در زمینه‌های
              مختلف، به دانش و مهارت‌های مورد نیاز خود دست پیدا کنند..</span
            >
          </h3>

          <button
            @click="scrollToDiv"
            class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> دسته بندی ها</span>
            <PhCaretDown :size="20" weight="fill" />
          </button>
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
        ref="ScrollDiv"
        class="w-screen h-full flex flex-col items-center space-y-6 justify-center px-6 lg:px-44"
      >
        <div
          class="h-auto w-full text-darkBlue bg-opacity-80 p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-end space-x-0 lg:space-y-0 lg:space-x-4"
        >
          <h2
            dir="rtl"
            class="lg:text-2xl text-lg flex items-center justify-center space-x-2 lg:my-0 my-5 border-b-8 rounded-lg border-mainYellow"
          >
            <span> دانلود منابع آموزشی </span>
          </h2>
          <PhArticle size="39" />
        </div>
        <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-500">
          <span>
            در دسته بندی زیر می‌توانید، منابع آموزشی را به تفکیک هر سطح مشاهده
            کنید:
          </span>
        </h2>
        <div
          class="w-full text-mainWhite lg:h-10 h-auto flex flex-wrap lg:space-y-0 space-y-3 space-x-3 lg:items-center items-end justify-center bg-mainWhite text-md"
        >
          <button
            :class="{
              'bg-mainWhite': category === 'ielts',
              'text-mainBlue': category === 'ielts',
            }"
            @click="category = 'ielts'"
            class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آیلتس</span></button
          ><button
            :class="{
              'bg-mainWhite': category === 'toffle',
              'text-mainBlue': category === 'toffle',
            }"
            @click="category = 'toffle'"
            class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تافل</span></button
          ><button
            :class="{
              'bg-mainWhite': category === 'adults',
              'text-mainBlue': category === 'adults',
            }"
            @click="category = 'adults'"
            class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>بزرگسالان</span></button
          ><button
            :class="{
              'bg-mainWhite': category === 'children',
              'text-mainBlue': category === 'children',
            }"
            @click="category = 'children'"
            class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>کودکان</span></button
          ><button
            :class="{
              'bg-mainWhite': category === 'ielts',
              'text-mainBlue': category === 'ielts',
            }"
            @click="category = 'ielts'"
            class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آیلتس</span>
          </button>
        </div>
        <div
          class="h-dialog w-full flex items-center justify-center p-5 lg:p-14"
        >
          <LazyDownloadBox :files="files" />
        </div>
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
import { PhArticle, PhGraduationCap, PhCaretDown } from "@phosphor-icons/vue";

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
const ScrollDiv = ref(null);
const category = ref("adults");

watch(category, (cur, old) => {
  getFiles();
});

const files = ref([]);

const getFiles = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/files/bycategory/${category.value}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.files);
      files.value = response.files;

      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const scrollToDiv = () => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: ScrollDiv.value.offsetTop,
      autoKill: false,
    },
    ease: "power4.out",
  });
};
onMounted(() => {
  getFiles();
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
