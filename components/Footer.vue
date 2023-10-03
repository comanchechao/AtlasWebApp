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
      <div class="flex items-center justify-center flex-col lg:items-end px-8">
        <NuxtLink to="/exam">
          <h2
            class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            آزمون خلاقیت اطلس
          </h2>
        </NuxtLink>
        <NuxtLink to="/articles">
          <h2
            class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            مقالات
          </h2>
        </NuxtLink>
        <NuxtLink to="/schedule">
          <h2
            class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            برنامه کلاسی
          </h2>
        </NuxtLink>
        <NuxtLink to="/contactUs">
          <h2
            class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            تماس با ما
          </h2>
        </NuxtLink>
        <NuxtLink to="/aboutUs">
          <h2
            class="text-lg transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            درباره ی ما
          </h2>
        </NuxtLink>
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
  <h2
    class="text-mainWhite text-right space-x-3 items-center w-full bg-mainBlue flex justify-end p-4"
  >
    <span>2023</span>
    <span>-</span>
    <span> تمامی حقوق مادی و معنوی متعلق به مجموعه آموزشی اطلس میباشد </span>
  </h2>
  <h2
    class="text-mainWhite space-x-3 w-full bg-mainBlue flex justify-end px-4 py-2"
  >
    <a
      href="https://www.instagram.com/comanchechao/?hl=en"
      class="Chao text-lg text-mainWhite px-1 transition ease-in duration-300 border-2 border-dashed border-mainRed hover:bg-mainRed rounded-sm lg:px-2"
    >
      🧙Chao
    </a>
    <span className="text-mainWhite text-xl">و</span>
    <a
      href="https://www.instagram.com/just_greez/?hl=en"
      class="Greez text-lg text-mainWhite px-1 transition ease-in duration-300 border-2 border-dashed border-mainRed hover:bg-mainRed rounded-sm lg:px-2"
    >
      🐻Greez
    </a>
    <span>:</span>
    <span> طراحی و پیاده سازی </span>
  </h2>
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
