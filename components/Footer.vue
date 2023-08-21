<template>
  <div
    class="w-screen h-auto lg:h-96 text-right bg-mainBlue p-14 lg:space-y-0 lg:p-20 flex lg:flex-row flex-col-reverse items-center lg:items-start justify-around space-x-0 lg:space-x-8"
  >
    <div
      class="flex flex-col items-center lg:my-0 my-10 lg:border-none border-t border-mainWhite border-dashed pt-8 lg:items-end space-y-2"
    >
      <h2 class="text-xl font-bold text-mainWhite flex items-center space-x-2">
        <span>خدمات آموزشی اطلس</span>
        <PhGraduationCap weight="fill" :size="30" />
      </h2>
      <div
        class="flex items-center justify-center lg:flex-col lg:items-end px-8 flex-wrap"
      >
        <h2
          class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
        >
          تقویم آموزشی
        </h2>
        <h2
          class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
        >
          آموزش هوش
        </h2>
        <h2
          class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
        >
          دوره های آموزشی
        </h2>
        <h2
          class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
        >
          آموزشی تعیین سطح
        </h2>
      </div>
    </div>
    <div class="h-full flex flex-col items-center justify-between">
      <div class="flex items-center justify-center space-x-5">
        <div class="flex items-end flex-col justify-center space-y-3">
          <h2
            class="text-4xl text-right text-mainWhite flex flex-col font-bold"
          >
            <span class="text-lg font-normal">منظومه آموزشی و فرهنگی</span>
            <span>اطلس</span>
          </h2>
        </div>
        <img
          class="object-contain w-24"
          src="../assets/images/Logo.webp"
          alt=""
        />
      </div>
      <div
        class="flex items-center lg:text-right text-center p-5 lg:p-0 text-mainWhite text-lg my-6 justify-center space-y-2 flex-col"
      >
        <h2>شماره تلفن : 33661029 - 33661021</h2>
        آدرس : خیابان سعدی - خیابان باباطاهر - پلاک 88
      </div>
      <div class="flex items-center justify-center space-x-5 lg:my-0 my-6">
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-3 hover:text-mainBlue rounded-md"
        >
          <PhInstagramLogo weight="fill" :size="60" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-3 hover:text-mainBlue rounded-md"
        >
          <PhFacebookLogo weight="fill" :size="60" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-3 hover:text-mainBlue rounded-md"
        >
          <PhTelegramLogo weight="fill" :size="60" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-3 hover:text-mainBlue rounded-md"
        >
          <PhTwitterLogo weight="fill" :size="60" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhFacebookLogo,
  PhGraduationCap,
  PhInstagramLogo,
  PhTelegramLogo,
  PhTwitterLogo,
} from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
