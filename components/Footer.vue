<template>
  <div
    class="w-screen h-96 bg-mainBlue p-20 flex items-start justify-around space-x-8"
  >
    <div class="flex flex-col items-end space-y-2">
      <h2 class="text-xl font-bold text-mainWhite flex items-center space-x-2">
        <span>خدمات آموزشی اطلس</span>
        <PhGraduationCap weight="fill" :size="30" />
      </h2>
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
      <h2
        class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
      >
        خدمات آموزشی اطلس
      </h2>
    </div>
    <div class="h-full flex flex-col items-center justify-between">
      <div class="flex items-center justify-center space-x-5">
        <div class="flex items-end flex-col justify-center space-y-3">
          <h2 class="text-4xl text-mainWhite font-bold">
            موسسه آموزشی و فرهنگی اصلس
          </h2>
          <h3 class="text-xl text-mainWhite">
            لورم ایپسوم متنی ایست که اصلیست
          </h3>
        </div>
        <img
          class="object-contain w-24"
          src="../assets/images/Logo.webp"
          alt=""
        />
      </div>
      <div class="flex items-center justify-center space-x-5">
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-3 hover:text-mainBlue rounded-md"
        >
          <PhInstagramLogo weight="fill" :size="60" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-3 hover:text-mainBlue rounded-md"
        >
          <PhFacebookLogo weight="fill" :size="60" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-3 hover:text-mainBlue rounded-md"
        >
          <PhTelegramLogo weight="fill" :size="60" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-3 hover:text-mainBlue rounded-md"
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
