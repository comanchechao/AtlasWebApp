<template>
  <div
    class="w-screen h-auto lg:h-72 text-right bg-mainBlue p-14 lg:space-y-0 lg:px-20 flex lg:flex-row flex-col-reverse items-center lg:items-start justify-around space-x-0 lg:space-x-8"
  >
    <div
      class="flex flex-col items-center lg:my-0 my-10 lg:border-none border-t border-mainWhite border-dashed pt-8 lg:items-end space-y-2"
    >
      <h2 class="text-xl font-bold text-mainWhite flex items-center space-x-2">
        <span>دسترسی سریع</span>
        <PhGraduationCap weight="fill" :size="30" />
      </h2>
      <div class="flex items-center justify-center flex-col lg:items-end px-8">
        <NuxtLink to="/exam">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            آزمون خلاقیت اطلس
          </h2>
        </NuxtLink>
        <NuxtLink to="/articles">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            مقالات
          </h2>
        </NuxtLink>
        <NuxtLink to="/schedule">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            برنامه کلاسی
          </h2>
        </NuxtLink>
        <NuxtLink to="/activities">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            فعالیت ها
          </h2>
        </NuxtLink>
        <NuxtLink to="/contactUs">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            تماس با ما
          </h2>
        </NuxtLink>
        <NuxtLink to="/aboutUs">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            درباره ی ما
          </h2>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex flex-col items-center lg:my-0 my-10 lg:border-none border-t border-mainWhite border-dashed pt-8 lg:items-end space-y-2"
    >
      <h2 class="text-xl font-bold text-mainWhite flex items-center space-x-2">
        <span>لینک های مفید</span>
        <PhGraduationCap weight="fill" :size="30" />
      </h2>
      <div class="flex items-center justify-center flex-col lg:items-end px-8">
        <a href="https://www.roshd.ir">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            سایت رشد
          </h2>
        </a>
        <a href="https://www.sanjesh.org">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            سایت سازمان سنجش
          </h2>
        </a>
        <a href="https://www.ut.ac.ir">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            سایت دانشگاه تهران
          </h2>
        </a>
        <NuxtLink to="/activities">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            گروه شرکت های همگام
          </h2>
        </NuxtLink>
        <NuxtLink to="/contactUs">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            سایت اداره آموزش و پرورش
          </h2>
        </NuxtLink>
        <NuxtLink to="/aboutUs">
          <h2
            class="text-sm transition ease-in hover:text-mainBlue hover:bg-white p-1 duration-150 cursor-pointer text-mainWhite"
          >
            سایت تبیان
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
            <span class="text-lg font-normal Nas">منظومه آموزشی و فرهنگی</span>
            <span>اطلس</span>
          </h2>
        </div>
        <NuxtLink to="/">
          <img
            class="object-contain w-16 cursor-pointer transition ease-in duration-200 hover:bg-mainWhite"
            src="../assets/images/Logo.webp"
            alt=""
          />
        </NuxtLink>
      </div>
      <div
        class="flex items-center lg:text-right text-center p-5 lg:p-0 text-mainWhite text-sm my-6 justify-center space-y-2 flex-col"
      >
        <h2><span dir="rtl"> : 044-33661021</span>شماره تلفن</h2>
        آدرس : خیابان سعدی(رودکی) - خیابان باباطاهر - پلاک 88
      </div>
      <div class="flex items-center justify-center space-x-2 lg:my-0 my-6">
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-2 hover:text-mainBlue"
        >
          <PhInstagramLogo weight="fill" :size="40" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-2 hover:text-mainBlue"
        >
          <PhWhatsappLogo weight="fill" :size="40" />
        </button>
        <button
          class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-2 hover:text-mainBlue"
        >
          <PhTelegramLogo weight="fill" :size="40" />
        </button>
        <a href="https://maps.app.goo.gl/M96KiAWLpxTxakZr7">
          <button
            class="text-mainWhite cursor-pointer transition ease-in-out duration-150 hover:bg-mainWhite p-1 lg:p-2 hover:text-mainBlue"
          >
            <PhMapPin eight="fill" :size="40" />
          </button>
        </a>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between px-6 w-screen bg-mainBlue pt-7">
    <h2 class="text-mainWhite space-x-2 px-4 py-3">
      <a
        href="https://www.instagram.com/acapulcoCrew/?hl=en"
        class="Chao text-sm text-mainWhite px-1 transition ease-in duration-300 border-2 border-dashed border-mainGreen hover:bg-mainGreen rounded-sm lg:px-2"
      >
        Acapulco Crew⛱️
      </a>

      <span class="text-sm"> طراحی و پیاده سازی </span>
    </h2>
    <h2 class="text-mainWhite text-right space-x-1 text-sm">
      <span>1402</span>
      <span>-</span>
      <span>
        .تمامی حقوق مادی و معنوی متعلق به منظومه آموزشی فرهنگی اطلس میباشد
      </span>
    </h2>
  </div>
</template>

<script setup>
import {
  PhWhatsappLogo,
  PhGraduationCap,
  PhInstagramLogo,
  PhTelegramLogo,
  PhMapPin,
} from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
