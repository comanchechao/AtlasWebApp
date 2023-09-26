<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div
      class="w-full h-full px-4 py-7 lg:p-32 space-y-11 flex flex-col items-center"
    >
      <div
        class="w-full h-full rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-gray-100"
      >
        <h2
          class="lg:text-4xl self-end text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
        >
          مدیریت مقالات
        </h2>
        <div
          class="flex lg:flex-row flex-col items-center w-full my-8 lg:space-y-0 space-y-8 justify-around"
        >
          <div
            class="flex flex-col items-center rounded-md shadow-md lg:self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
                {{ articleCount }}
              </h1>
            </div>
            <h3 class="text-darkBlue text-lg">تعداد مقالات آپلود شده</h3>
          </div>
          <LazyArticleAdd />
          <LazyArticleManage />
        </div>
      </div>
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
              <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
                {{ scheduleCount }}
              </h1>
            </div>
            <h3 class="text-darkBlue text-lg">تعداد برنامه های آپلود شده</h3>
          </div>
          <LazyScheduleAdd />
          <LazyScheduleManage />
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
              <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
                {{ videosCount }}
              </h1>
            </div>
            <h3 class="text-darkBlue text-lg">تعداد ویدیوهای آپلود شده</h3>
          </div>
          <LazyVideoAdd />
          <LazyVideoManage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();

const { articleCount, scheduleCount, videosCount } =
  storeToRefs(managementStore);
</script>

<style lang="scss" scoped></style>
