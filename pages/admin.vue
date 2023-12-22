<template>
  <head>
    <title>مدیریت اصلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div
    class="w-screen z-50 h-screen absolute LoadingDiv bg-mainWhite flex items-center justify-center"
  >
    <ProgressSpinner
      class="bg-mainWhite"
      style="width: 80px; height: 80px"
      strokeWidth="8"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div
      class="w-full h-auto lg:h-full pt-10 lg:px-28 px-4 py-6 lg:flex-row flex-col-reverse flex items-start justify-center lg:space-y-0 space-y-6 lg:space-x-9"
    >
      <div class="h-full w-full flex-col flex items-center justify-center">
        <div
          class="w-full h-full flex items-center py-14"
          id="div1"
          v-show="showDiv1"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
            >
              مدیریت مقالات
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-4 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
              >
                <div class="flex items-center space-x-3 Stat1">
                  <ProgressSpinner
                    v-if="loading"
                    style="width: 30px; height: 30px"
                    strokeWidth="8"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                  />
                  <h1
                    v-if="!loading"
                    class="lg:text-2xl text-4xl text-mainRed Text font-bold"
                  >
                    {{ articleCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد مقالات آپلود شده</h3>
              </div>
              <LazyArticleManage />
            </div>
            <LazyArticleAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center py-14"
          id="div2"
          v-show="showDiv2"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
            >
              مدیریت اخبار
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-4 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
              >
                <div class="flex items-center space-x-3 Stat1">
                  <ProgressSpinner
                    v-if="loading"
                    style="width: 30px; height: 30px"
                    strokeWidth="8"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                  />
                  <h1
                    v-if="!loading"
                    class="lg:text-2xl text-4xl text-mainRed Text font-bold"
                  >
                    {{ newsCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد اخبار آپلود شده</h3>
              </div>
              <LazyNewsManagement />
            </div>
            <LazyNewsAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center py-14"
          id="div3"
          v-show="showDiv3"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
            >
              مدیریت ویدیوها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-4 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
              >
                <div class="flex items-center space-x-3 Stat1">
                  <ProgressSpinner
                    v-if="loading"
                    style="width: 30px; height: 30px"
                    strokeWidth="8"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                  />
                  <h1
                    v-if="!loading"
                    class="lg:text-2xl text-4xl text-mainRed Text font-bold"
                  >
                    {{ videosCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد ویدیوهای آپلود شده</h3>
              </div>
              <LazyVideoManage />
            </div>
            <LazyVideoAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center py-14"
          id="div5"
          v-show="showDiv5"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
            >
              مدیریت کتاب ها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-4 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
              >
                <div class="flex items-center space-x-3 Stat1">
                  <ProgressSpinner
                    v-if="loading"
                    style="width: 30px; height: 30px"
                    strokeWidth="8"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                  />
                  <h1
                    v-if="!loading"
                    class="lg:text-2xl text-4xl text-mainRed Text font-bold"
                  >
                    {{ booksCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد کتب آپلود شده</h3>
              </div>
              <LazyBooksManage />
            </div>
            <LazyBookAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center py-14"
          id="div5"
          v-show="showDiv6"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
            >
              مدیریت کتب صوتی
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-4 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
              >
                <div class="flex items-center space-x-3 Stat1">
                  <ProgressSpinner
                    v-if="loading"
                    style="width: 30px; height: 30px"
                    strokeWidth="8"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                  />
                  <h1
                    v-if="!loading"
                    class="lg:text-2xl text-4xl text-mainRed Text font-bold"
                  >
                    {{ audioBooksCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد کتب صوتی آپلود شده</h3>
              </div>
              <LazyAudioBooksManage />
            </div>
            <LazyAudioBookAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center py-14"
          id="div4"
          v-show="showDiv4"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
            >
              مدیریت برنامه ها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-4 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
              >
                <div class="flex items-center space-x-3 Stat1">
                  <ProgressSpinner
                    v-if="loading"
                    style="width: 30px; height: 30px"
                    strokeWidth="8"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                  />
                  <h1
                    v-if="!loading"
                    class="lg:text-2xl text-4xl text-mainRed Text font-bold"
                  >
                    {{ scheduleCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد ویدیوهای آپلود شده</h3>
              </div>
              <LazyScheduleManage />
            </div>
            <LazyScheduleAdd />
          </div>
        </div>
      </div>
      <div
        class="h-full w-full lg:w-1/4 flex items-center justify-center flex-col space-y-2"
      >
        <button
          @click="toggleDiv1"
          class="w-56 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-14 bg-mainBlue flex items-center justify-end pr-6"
        >
          <span>مقالات</span>
          <PhArticle weight="fill" :size="25" />
        </button>
        <button
          class="w-56 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-14 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv2"
        >
          <span> اخبار </span>
          <PhArticle weight="fill" :size="25" />
        </button>
        <button
          class="w-56 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-14 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv3"
        >
          <span> ویدیوها </span>
          <PhVideo weight="fill" :size="25" />
        </button>
        <button
          class="w-56 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-14 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv5"
        >
          <span> کتاب ها </span>
          <PhVideo weight="fill" :size="25" />
        </button>
        <button
          class="w-56 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-14 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv6"
        >
          <span> کتب صوتی </span>
          <PhVideo weight="fill" :size="25" />
        </button>
        <button
          class="w-56 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-14 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv4"
        >
          <span> برنامه ها </span>
          <PhVideo weight="fill" :size="25" />
        </button>
      </div>
    </div>
    <!-- <div
      class="w-full h-full px-4 py-7 lg:p-32 space-y-11 flex flex-col items-center"
    >
      <div
        class="w-full h-full rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-gray-100"
      >
        <h2
          class="lg:text-4xl self-end text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
        >
          مدیریت برنامه ها
        </h2>
        <div
          class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-around"
        >
          <div
            class="flex flex-col items-center rounded-md shadow-md lg:self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <ProgressSpinner
                v-if="loading"
                style="width: 50px; height: 50px"
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
              <h1
                v-if="!loading"
                class="lg:text-6xl text-4xl text-mainRed Text font-bold"
              >
                {{ scheduleCount }}
              </h1>
            </div>
            <h3 class="text-darkBlue text-lg">تعداد برنامه های آپلود شده</h3>
          </div>
          <LazyScheduleManage />
          <LazyScheduleAdd />
        </div>
      </div>
      <div
        class="w-full h-full rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-gray-100"
      >
        <h2
          class="lg:text-4xl self-end text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
        >
          مدیریت ویدیو ها
        </h2>
        <div
          class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-around"
        >
          <div
            class="flex flex-col items-center rounded-md shadow-md lg:self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <ProgressSpinner
                v-show="loading"
                style="width: 50px; height: 50px"
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
              <h1
                v-if="!loading"
                class="lg:text-6xl text-4xl text-mainRed Text font-bold"
              >
                {{ videosCount }}
              </h1>
            </div>
            <h3 class="text-darkBlue text-lg">تعداد ویدیوهای آپلود شده</h3>
          </div>
          <LazyVideoManage />
          <LazyVideoAdd />
        </div>
      </div>
      <div
        class="w-full h-full rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-gray-100"
      >
        <h2
          class="lg:text-4xl self-end text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
        >
          مدیریت اخبار
        </h2>
        <div
          class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-around"
        >
          <div
            class="flex flex-col items-center rounded-md shadow-md lg:self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <ProgressSpinner
                v-if="loading"
                style="width: 50px; height: 50px"
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
              <h1
                v-if="!loading"
                class="lg:text-6xl text-4xl text-mainRed Text font-bold"
              >
                {{ newsCount }}
              </h1>
            </div>
            <h3 class="text-darkBlue text-lg">تعداد اخبار آپلود شده</h3>
          </div>
          <LazyNewsManagement />
          <LazyNewsAdd />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

import { storeToRefs } from "pinia";
import { useManagementStore } from "../stores/management";
import { PhArticle, PhVideo } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const showDiv1 = ref(true);
const showDiv2 = ref();
const showDiv3 = ref();
const showDiv4 = ref();
const showDiv5 = ref();
const showDiv6 = ref();

const managementStore = useManagementStore();
function toggleDiv1() {
  showDiv1.value = true;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
}

function toggleDiv2() {
  showDiv1.value = false;
  showDiv2.value = true;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
}
function toggleDiv3() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = true;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
}
function toggleDiv4() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = true;
  showDiv5.value = false;
  showDiv6.value = false;
}
function toggleDiv5() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = true;
  showDiv6.value = false;
}
function toggleDiv6() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = true;
}
watch([showDiv1, showDiv2, showDiv3, showDiv4], (values) => {
  const [div1Visible, div2Visible, div3Visible, div4Visible, div5Visible] =
    values;
  const TL = $gsap.timeline();
  if (div1Visible) {
    TL.fromTo(
      "#div1",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div2Visible) {
    TL.fromTo(
      "#div2",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div3Visible) {
    TL.fromTo(
      "#div3",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div4Visible) {
    TL.fromTo(
      "#div4",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div5Visible) {
    TL.fromTo(
      "#div5",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  }
});
const {
  articleCount,
  newsCount,
  scheduleCount,
  videosCount,
  booksCount,
  audioBooksCount,
  loading,
} = storeToRefs(managementStore);
onMounted(() => {
  $gsap.to(".LoadingDiv", {
    display: "none",
    delay: 0.9,
  });
});
</script>

<style lang="scss" scoped></style>
