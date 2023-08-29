<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div class="h-auto w-full flex items-center flex-col space-y-4">
        <h2 class="text-xl text-darkBlue">خوش اومدین به بخش</h2>
        <h2
          class="text-7xl font-bold text-yellow-500 border-b-8 rounded-3xl pb-4 border-darkBlue"
        >
          مقالات
        </h2>
        <h2 class="text-4xl text-darkBlue">اطلس</h2>
      </div>
      <div class="h-dialog w-full flex items-center justify-around py-10">
        <div
          class="w-1/2 h-full bg-goldie rounded-lg shadow-lg shadow-mainYellow"
        ></div>
        <div
          class="w-1/2 h-full flex flex-col items-end justify-center p-10 space-y-6"
        >
          <h2 class="text-4xl font-bold text-darkBlue leading-snug text-right">
            شروع سال تحصیلی از شهریور امسال
          </h2>
          <h3 class="text-lg text-right">
            لوزم ایپسوم متنی است که اختراع شده تا جاهای خالی در طراحی گرافیک پر
            شود و خالی نمایند متشکرم ازتون
          </h3>
          <button
            class="px-12 py-3 lg:my-0 text-lg border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            ادامه ی مقاله
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-full flex items-center lg:flex-row flex-col-reverse justify-between"
      >
        <button
          class="px-12 py-2 border-2 my-5 lg:my-0 items-center border-mainBlue text-lg active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مشاهده همه</span> <PhArticle />
        </button>
        <h2
          class="text-4xl text-darkBlue font-bold flex items-center space-x-2"
        >
          <span>آخرین مقالات</span>
          <PhArticle />
        </h2>
      </div>
      <div
        class="h-full lg:flex-row flex-col space-y-12 lg:space-y-0 space-x-0 w-full flex items-center justify-center lg:space-x-16"
      >
        <div class="flex w-64 h-full flex-col items-center space-y-6">
          <div
            class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainRed relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-lg"
          ></div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            شروع سال تحصیلی از شهریور امسال
          </h2>
          <h3 class="text-lg text-right">
            لوزم ایپسوم متنی است که اختراع شده تا جاهای خالی در طراحی گرافیک پر
            شود و خالی نمایند متشکرم ازتون
          </h3>
        </div>
        <div class="flex w-64 h-full flex-col items-center space-y-6">
          <div
            class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainRed relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-lg"
          ></div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            شروع سال تحصیلی از شهریور امسال
          </h2>
          <h3 class="text-lg text-right">
            لوزم ایپسوم متنی است که اختراع شده تا جاهای خالی در طراحی گرافیک پر
            شود و خالی نمایند متشکرم ازتون
          </h3>
        </div>
        <div class="flex w-64 h-full flex-col items-center space-y-6">
          <div
            class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainRed relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-lg"
          ></div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            شروع سال تحصیلی از شهریور امسال
          </h2>
          <h3 class="text-lg text-right">
            لوزم ایپسوم متنی است که اختراع شده تا جاهای خالی در طراحی گرافیک پر
            شود و خالی نمایند متشکرم ازتون
          </h3>
        </div>
        <div class="flex w-64 h-full flex-col items-center space-y-6">
          <div
            class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-mainRed relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-lg"
          ></div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            شروع سال تحصیلی از شهریور امسال
          </h2>
          <h3 class="text-lg text-right">
            لوزم ایپسوم متنی است که اختراع شده تا جاهای خالی در طراحی گرافیک پر
            شود و خالی نمایند متشکرم ازتون
          </h3>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
