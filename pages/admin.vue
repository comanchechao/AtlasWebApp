<template>
  <head>
    <title>مدیریت اطلس</title>
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
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div1"
          v-show="showDiv1"
        >
          <div
            class="w-full h-auto rounded-md border-2 border-dashed border-mainBlue flex items-center flex-col p-5 bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت مقالات
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div2"
          v-show="showDiv2"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت تازه های اطلس
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
                <h3 class="text-darkBlue text-lg">
                  تعداد تازه های اطلس آپلود شده
                </h3>
              </div>
              <LazyNewsManagement />
            </div>
            <LazyNewsAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div3"
          v-show="showDiv3"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت ویدیوها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div5"
          v-show="showDiv5"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت کتاب ها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div6"
          v-show="showDiv6"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت کتب صوتی
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div7"
          v-show="showDiv7"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت افتخارات ها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
                    {{ announcementsCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد افتخارات آپلود شده</h3>
              </div>
              <LazyAnnouncementsManage />
            </div>
            <LazyAnnouncementAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div8"
          v-show="showDiv8"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت برنامه ها
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
        <div
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div9"
          v-show="showDiv9"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت گالری عکس
            </h2>
            <div
              class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-center space-x-6"
            >
              <div
                class="w-64 rounded-md cursor-pointer flex-col transition text-mainWhite border-2 border-mainBlue border-dashed h-20 bg-white flex items-center justify-center"
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
                    {{ imageGalleryCount }}
                  </h1>
                </div>
                <h3 class="text-darkBlue text-lg">تعداد گالری عکس آپلود شده</h3>
              </div>
              <LazyImageGalleryManage />
            </div>
            <LazyImageGalleryAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div10"
          v-show="showDiv10"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت گروه ها
            </h2>
            <div class="flex pt-9 items-center justify-end w-full">
              <LazyFilesManage />
            </div>
            <LazyFileAdd />
          </div>
        </div>
        <div
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div11"
          v-show="showDiv11"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              مدیریت تصاویر صفحه ی اول
            </h2>
            <div class="flex pt-9 items-center justify-end w-full">
              <!-- <LazyCarouselManage /> -->
            </div>
            <div class="flex pt-9 items-center justify-end w-full">
              <LazyCarouselAdd />
            </div>
          </div>
        </div>
        <div
          class="w-full h-full flex items-center pb-14 lg:pt-0 pt-10 sm:pt-14"
          id="div12"
          v-show="showDiv12"
        >
          <div
            class="w-full h-auto rounded-md flex items-center flex-col p-5 border-2 border-dashed border-mainBlue bg-white"
          >
            <h2
              class="lg:text-3xl self-end text-2xl text-darkBlue border-b-8 pb-1 rounded-md border-mainYellow"
            >
              پیش ثبت نام و فرم همکاری
            </h2>
            <div class="flex pt-9 items-center space-x-4 justify-end w-full">
              <LazyCoopManage /> <LazyPreSignUpManage />
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-full w-full lg:w-1/4 flex text-sm items-center justify-center flex-col space-y-1"
      >
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv12"
        >
          <span>ثبت نام و همکاری </span>
          <PhStudent weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv11"
        >
          <span>تصاویر صفحه اول </span>
          <PhHouse weight="fill" :size="25" />
        </button>
        <button
          @click="toggleDiv1"
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
        >
          <span>مقالات</span>
          <PhArticle weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv2"
        >
          <span> تازه های اطلس </span>
          <PhArticle weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv3"
        >
          <span> ویدیوها </span>
          <PhVideo weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv5"
        >
          <span> کتاب ها </span>
          <PhBook weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv6"
        >
          <span> کتب صوتی </span>
          <PhMusicNote weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv7"
        >
          <span> افتخارات </span>
          <PhTrophy weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv8"
        >
          <span> برنامه ها </span>
          <PhCalendar weight="fill" :size="25" />
        </button>

        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv9"
        >
          <span> گالری عکس </span>
          <PhPictureInPicture weight="fill" :size="25" />
        </button>
        <button
          class="w-48 rounded-sm space-x-2 cursor-pointer transition text-mainWhite border-2 border-transparent hover:border-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-10 bg-mainBlue flex items-center justify-end pr-6"
          @click="toggleDiv10"
        >
          <span>منابع آموزشی </span>
          <PhStudent weight="fill" :size="25" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

import { storeToRefs } from "pinia";
import { useManagementStore } from "../stores/management";
import {
  PhArticle,
  PhBook,
  PhCalendar,
  PhTrophy,
  PhMusicNote,
  PhVideo,
  PhPictureInPicture,
  PhStudent,
  PhHouse,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const showDiv1 = ref(true);
const showDiv2 = ref();
const showDiv3 = ref();
const showDiv4 = ref();
const showDiv5 = ref();
const showDiv6 = ref();
const showDiv7 = ref();
const showDiv8 = ref();
const showDiv9 = ref();
const showDiv10 = ref();
const showDiv11 = ref();
const showDiv12 = ref();

const managementStore = useManagementStore();
function toggleDiv1() {
  showDiv1.value = true;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}

function toggleDiv2() {
  showDiv1.value = false;
  showDiv2.value = true;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv3() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = true;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}

function toggleDiv5() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = true;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv6() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = true;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv7() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = true;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv8() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = true;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv9() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = true;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv10() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = true;
  showDiv11.value = false;
  showDiv12.value = false;
}
function toggleDiv11() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = true;
  showDiv12.value = false;
}
function toggleDiv12() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
  showDiv5.value = false;
  showDiv6.value = false;
  showDiv7.value = false;
  showDiv8.value = false;
  showDiv9.value = false;
  showDiv10.value = false;
  showDiv11.value = false;
  showDiv12.value = true;
}
watch(
  [
    showDiv1,
    showDiv2,
    showDiv3,
    showDiv4,
    showDiv5,
    showDiv6,
    showDiv7,
    showDiv8,
    showDiv9,
    showDiv10,
    showDiv11,
    showDiv12,
  ],
  (values) => {
    const [
      div1Visible,
      div2Visible,
      div3Visible,
      div4Visible,
      div5Visible,
      div6Visible,
      div7Visible,
      div8Visible,
      div9Visible,
      div10Visible,
      div11Visible,
      div12Visible,
    ] = values;
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
    } else if (div6Visible) {
      TL.fromTo(
        "#div6",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else if (div7Visible) {
      TL.fromTo(
        "#div7",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else if (div8Visible) {
      TL.fromTo(
        "#div8",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else if (div9Visible) {
      TL.fromTo(
        "#div9",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else if (div10Visible) {
      TL.fromTo(
        "#div10",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else if (div11Visible) {
      TL.fromTo(
        "#div11",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else if (div12Visible) {
      TL.fromTo(
        "#div12",
        { opacity: 0, y: 40 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    }
  }
);
const {
  articleCount,
  newsCount,
  scheduleCount,
  videosCount,
  booksCount,
  audioBooksCount,
  loading,
  announcementsCount,
  imageGalleryCount,
} = storeToRefs(managementStore);
onMounted(() => {
  $gsap.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
  $gsap.to(".LoadingDiv", {
    display: "none",
    delay: 0.9,
  });
});
</script>

<style lang="scss" scoped></style>
