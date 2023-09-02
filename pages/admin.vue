<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-full h-full p-32 space-y-11 flex flex-col items-center">
      <div
        class="w-full h-full rounded-md flex items-center flex-col p-5 border-dashed border-darkBlue border-4 bg-gray-100"
      >
        <h2
          class="lg:text-4xl self-end text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
        >
          مدیریت مقالات
        </h2>
        <div class="flex items-center w-full my-8 justify-around">
          <div
            class="flex flex-col items-center rounded-md shadow-md self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
                132
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
        <div class="flex items-center w-full my-8 justify-around">
          <div
            class="flex flex-col items-center rounded-md shadow-md self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
                132
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
        <div class="flex items-center w-full my-8 justify-around">
          <div
            class="flex flex-col items-center rounded-md shadow-md self-start shadow-mainBlue p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
                132
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

<script setup></script>

<style lang="scss" scoped></style>
