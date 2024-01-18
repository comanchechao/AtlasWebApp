<template>
  <div class="w-screen h-full flex-col flex items-center justify-center">
    <div
      class="lg:h-32 Navbar1 h-20 flex bg-mainBlue px-3 lg:bg-mainWhite w-screen items-center justify-between lg:px-40"
    >
      <div class="items-center hidden lg:flex justify-center space-x-8">
        <div class="flex items-end justify-end flex-col">
          <span class="text-sm text-gray-400">شبکه های اجتماعی</span>

          <div class="flex items-center justify-center space-x-1 lg:my-0 my-6">
            <a href="https://www.instagram.com/English.atlas/?hl=en">
              <button
                class="text-mainBlue cursor-pointer transition ease-in-out duration-150 hover:bg-mainBlue p-1 lg:p-1 hover:text-mainWhite rounded-sm"
              >
                <PhInstagramLogo weight="fill" :size="30" />
              </button>
            </a>
            <button
              class="text-mainBlue cursor-pointer transition ease-in-out duration-150 hover:bg-mainBlue p-1 lg:p-1 hover:text-mainWhite rounded-sm"
            >
              <PhWhatsappLogo weight="fill" :size="30" />
            </button>
            <button
              class="text-mainBlue cursor-pointer transition ease-in-out duration-150 hover:bg-mainBlue p-1 lg:p-1 hover:text-mainWhite rounded-sm"
            >
              <PhTelegramLogo weight="fill" :size="30" />
            </button>
            <a href="https://maps.app.goo.gl/M96KiAWLpxTxakZr7">
              <button
                class="text-mainBlue cursor-pointer transition ease-in-out duration-150 hover:bg-mainBlue p-1 lg:p-1 hover:text-mainWhite rounded-sm"
              >
                <PhMapPin weight="fill" :size="30" />
              </button>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-3">
          <h2 class="flex items-end justify-end flex-col text-mainYellow">
            <span class="text-sm text-gray-400">آدرس</span>
            <span dir="rtl" class="text-sm text-black"
              >ارومیه - خیابان سعدی (رودکی) - خیابان باباطاهر - پلاک 88
            </span>
          </h2>
          <a
            class="transition ease-in-out duration-150 text-mainBlue rounded-sm hover:bg-mainBlue hover:text-white"
            href="https://maps.app.goo.gl/M96KiAWLpxTxakZr7"
          >
            <PhMapPin class="" weight="fill" size="40" />
          </a>
        </div>
        <div class="flex items-center justify-center space-x-3">
          <h2 class="flex items-end justify-end flex-col text-mainYellow">
            <span class="text-sm text-gray-400">تلفن</span>
            <span class="text-lg text-black">04433661021</span>
          </h2>
          <PhPhone class="text-mainBlue" weight="fill" size="40" />
        </div>
      </div>
      <div class="flex items-center justify-center space-x-3">
        <h2
          class="hidden lg:flex items-center lg:space-x-0 space-x-3 lg:space-y-1 flex-row-reverse lg:flex-col text-black"
        >
          <span class="text-sm lg:text-black text-mainYellow"
            >منظومه فرهنگی و آموزشی</span
          >
          <span
            class="lg:text-4xl text-sm font-bold text-mainWhite lg:text-mainBlue"
            >اطلس</span
          >
        </h2>
        <a href="/">
          <img
            src="../assets/images/Logo.webp"
            class="lg:w-16 w-10 object-contain"
            alt=""
          />
        </a>
      </div>
      <LazyLogin class="lg:hidden flex" />
      <LazyPhoneNavbar class="flex lg:hidden" />
      <button
        v-if="isLogged === true"
        @click="logout()"
        class="px-3 py-1 border-2 flex lg:hidden items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 space-x-2 rounded-sm"
      >
        <span> خروج </span>
        <PhLockKey weight="fill" :size="20" />
      </button>
    </div>
    <div
      class="w-screen Navbar2 h-14 lg:h-14 text-sm lg:flex hidden px-20 z-30 bg-mainWhite space-x-2 items-center justify-center"
    >
      <div class="flex items-center justify-end lg:space-x-2 Navbar w-full">
        <div class="lg:flex items-center justify-center space-x-2 hidden">
          <NuxtLink to="/preSignUp">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>پیش ثبت نام</span>
              <PhGraduationCap :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <a href="https://portal.atlasurmia.ir/">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>ورود به پرتال</span>
              <PhMonitor :size="20" weight="fill" />
            </button>
          </a>
          <a href="https://cafebazaar.ir/app/com.lanmis.app">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span> آموزشگاه من</span>
              <PhMonitor :size="20" weight="fill" />
            </button>
          </a>
          <!-- <NuxtLink to="/aboutUs">
            <button
              class="px-2 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>افتخارات</span>
              <PhTranslate :size="20" weight="fill" />
            </button>
          </NuxtLink> -->

          <NuxtLink to="/commonQuestions">
            <button
              class="px-2 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>سوالات متداول</span>
              <PhPhoneCall :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-2 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>دوره های آموزشی</span>
              <PhChalkboardTeacher :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-44"
            >
              <li>
                <NuxtLink to="/courses/public">
                  <span>دوره های عمومی</span>
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/courses/public">
                  <span>مکالمه سریع</span>
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/courses/public">
                  <span>دوره های آیلتس و تافل</span>
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-2 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>کتب آموزشی</span>
              <PhBook :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li>
                <NuxtLink to="/books"
                  ><span>کتب آموزشی</span> <PhBook :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/audioBooks">
                  <span>صدای شما</span>
                  <PhMusicNote :size="20" weight="fill" />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- <NuxtLink to="/exam">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>آزمون خلاقیت </span>
              <PhExam :size="20" weight="fill" />
            </button>
          </NuxtLink> -->
          <div class="dropdown dropdown-hover">
            <NuxtLink to="/courses/tutorial">
              <button
                tabindex="0"
                class="px-2 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
              >
                <PhCaretDown :size="20" />

                <span>منابع آموزشی</span>
                <PhStudent :size="20" weight="fill" />
              </button>
            </NuxtLink>

            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li>
                <NuxtLink to="/courses/tutorial">
                  <span> آیلتس </span>
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/courses/classDetail/"
                  >تافل
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-2 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>واحد ها</span>
              <PhBuildings :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li>
                <NuxtLink to="/">
                  <span>موسسه زبان اطلس</span>
                  <PhBuildings :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/"
                  ><span>دبستان دخترانه اطلس</span>
                  <PhBuildings :size="20" weight="fill" />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <NuxtLink to="/">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>خانه</span>
              <PhHouse :size="20" weight="fill" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="w-screen Navbar3 h-14 lg:h-14 lg:flex bg-mainBlue shadow-sm space-x-4 shadow-mainBlue hidden items-center px-2 justify-between lg:pr-20"
    >
      <div class="flex items-center justify-end lg:space-x-4 Navbar w-full">
        <LazyLogin class="flex" />
        <div class="lg:flex items-center justify-center space-x-3 hidden">
          <button
            v-if="isLogged === true"
            @click="logout()"
            label="Show"
            class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> خروج </span>
            <PhLockKey weight="fill" :size="20" />
          </button>
          <NuxtLink to="/aboutUs">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>درباره ما</span>
              <PhTranslate :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-2 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>ارتباط با ما</span>
              <PhArticle :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li><NuxtLink to="/contactUs">تماس با موسسه</NuxtLink></li>
              <li><NuxtLink to="/coopForm">فرم همکاری</NuxtLink></li>
            </ul>
          </div>
          <NuxtLink to="/honors">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>افتخارات</span>
              <PhTrophy :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <NuxtLink to="/gallery/pictureGallery">
            <button
              class="px-2 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>گالری تصاویر</span>
              <PhCamera :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <!-- <NuxtLink to="/schedule">
            <button
              class="px-2 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>برنامه کلاسی</span>
              <PhCalendar :size="20" weight="fill" />
            </button>
          </NuxtLink> -->
          <NuxtLink to="/videoPlayer">
            <button
              class="px-2 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>ویدیوهای آموزشی</span>
              <PhVideo :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/articles">
            <button
              class="px-2 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>مقالات</span>
              <PhArticle :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <NuxtLink to="/exam">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span> خلاقیت </span>
              <PhExam :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/news?category=atlasnews">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>تازه های اطلس</span>
              <PhArticle :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink v-show="isManager" to="/admin">
            <button
              class="px-2 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainYellow hover:bg-mainWhite hover:text-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>مدیریت</span>
              <PhGlobeStand :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <!-- <NuxtLink to="/">
            <button
              class="px-2 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>خانه</span>
              <PhHouse :size="20" weight="fill" />
            </button>
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  PhTrophy,
  PhHouse,
  PhExam,
  PhArticle,
  PhPhoneCall,
  PhTranslate,
  PhCalendar,
  PhGlobeStand,
  PhVideo,
  PhBackpack,
  PhPhone,
  PhMapPin,
  PhWhatsappLogo,
  PhGraduationCap,
  PhInstagramLogo,
  PhTelegramLogo,
  PhTwitterLogo,
  PhBuildings,
  PhCaretDown,
  PhChalkboardTeacher,
  PhBook,
  PhCamera,
  PhStudent,
  PhMonitor,
  PhLockKey,
  PhMusicNote,
} from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const { $gsap } = useNuxtApp();

// asign user store

const userStore = useUserStore();
const { isManager, isLogged } = storeToRefs(userStore);

// is auth

async function isAuth() {
  await $fetch("http://localhost:3333/ischeck", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  }).then(function (response) {
    console.log(response);
    if (response.check) {
      userStore.setManager();
    }
  });
}

const logout = async function () {
  userStore.setLogout();

  await $fetch("http://localhost:3333/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  }).then(function (response) {
    console.log(response);
  });
};
const isHomePage = computed(() => {
  return window.location.pathname === "/";
});
onMounted(() => {
  isAuth();
  if (isHomePage.value) {
    const TM = $gsap.timeline();

    TM.from(".Navbar1", { opacity: 0, duration: 0.6, delay: 1.8 });
    TM.from(".Navbar2", { opacity: 0, duration: 0.6 });
    TM.from(".Navbar3", { opacity: 0, duration: 0.6 });
  }
  // TM.from(".Navbar1", ".Navbar1".classList.remove("Navbar1"));
  // TM.from(".Navbar2", ".Navbar2".classList.remove("Navbar2"));
  // TM.from(".Navbar3", ".Navbar3".classList.remove("Navbar3"));
});
// onActivated(() => {
//   if (!this.$isMounted) {
//     const TM = $gsap.timeline();

//     // Add your animation sequence here
//     TM.from(".Navbar1", { opacity: 0, duration: 0.6, delay: 1.8 });
//     TM.from(".Navbar2", { opacity: 0, duration: 0.6 });
//     TM.from(".Navbar3", { opacity: 0, duration: 0.6 });
//   }
// });
</script>
<style>
@font-face {
  font-family: "Nas";
  src: url("../assets/fonts/IranNastaliq.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
.Nas {
  font-family: "Nas";
}
</style>
