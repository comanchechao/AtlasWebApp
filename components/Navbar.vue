<template>
  <div class="w-screen h-full flex-col flex items-center justify-center">
    <div
      class="lg:h-32 Navbar1 h-20 flex bg-mainBlue px-3 lg:bg-mainWhite w-screen items-center justify-between lg:px-40"
    >
      <div class="items-center hidden lg:flex justify-center space-x-8">
        <div class="flex items-end justify-end flex-col">
          <span class="text-sm text-gray-400">شبکه های اجتماعی</span>

          <div class="flex items-center justify-center space-x-1 lg:my-0 my-6">
            <button
              class="text-mainBlue cursor-pointer transition ease-in-out duration-150 hover:bg-mainBlue p-1 lg:p-1 hover:text-mainWhite rounded-sm"
            >
              <PhInstagramLogo weight="fill" :size="30" />
            </button>
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
            <button
              class="text-mainBlue cursor-pointer transition ease-in-out duration-150 hover:bg-mainBlue p-1 lg:p-1 hover:text-mainWhite rounded-sm"
            >
              <PhTwitterLogo weight="fill" :size="30" />
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-3">
          <h2 class="flex items-end justify-end flex-col text-mainYellow">
            <span class="text-sm text-gray-400">آدرس</span>
            <span class="text-sm text-black"
              >خیابان سعدی - خیابان باباطاهر - پلاک 88
            </span>
          </h2>
          <PhMapPin class="text-mainBlue" weight="fill" size="40" />
        </div>
        <div class="flex items-center justify-center space-x-3">
          <h2 class="flex items-end justify-end flex-col text-mainYellow">
            <span class="text-sm text-gray-400">تلفن</span>
            <span class="text-lg text-black">33661029</span>
          </h2>
          <PhPhone class="text-mainBlue" weight="fill" size="40" />
        </div>
      </div>
      <div class="flex items-center justify-center space-x-3">
        <h2
          class="flex items-center lg:space-x-0 space-x-3 lg:space-y-3 flex-row-reverse lg:flex-col text-black"
        >
          <span class="text-sm Nas lg:text-black text-mainYellow"
            >منظومه فرهنگی و آموزشی</span
          >
          <span class="lg:text-3xl text-sm Nas text-mainWhite lg:text-mainBlue"
            >اطلس</span
          >
        </h2>
        <img
          src="../assets/images/Logo.webp"
          class="lg:w-24 w-12 object-contain"
          alt=""
        />
      </div>
      <LazyPhoneNavbar class="flex lg:hidden" />
    </div>
    <div
      class="w-screen Navbar2 h-14 lg:h-14 text-sm lg:flex hidden px-20 z-30 bg-mainWhite space-x-2 items-center justify-center"
    >
      <div class="flex items-center justify-end lg:space-x-2 Navbar w-full">
        <div class="lg:flex items-center justify-center space-x-2 hidden">
          <NuxtLink to="/preSignUp">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>پیش ثبت نام</span>
              <PhGraduationCap :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <!-- <NuxtLink to="/aboutUs">
            <button
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>افتخارات</span>
              <PhTranslate :size="20" weight="fill" />
            </button>
          </NuxtLink> -->
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-3 py-1 items-center text-md active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
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
          <NuxtLink to="/commonQuestions">
            <button
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>سوالات متداول</span>
              <PhPhoneCall :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <NuxtLink to="/activities">
            <button
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>آکادمی زبان</span>
              <PhBackpack :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>دوره های آموزشی</span>
              <PhChalkboardTeacher :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-44"
            >
              <li><NuxtLink to="/courses/public">دوره های عمومی</NuxtLink></li>
              <li><NuxtLink to="/courses/kids">دوره کودکان</NuxtLink></li>
              <li><NuxtLink to="/courses/women">دوره بانوان</NuxtLink></li>
              <li><NuxtLink to="/courses/IELTS">دوره های آیلتس</NuxtLink></li>
              <li>
                <NuxtLink to="/courses/FCE">
                  <span>FCE</span> <span>دوره های</span></NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>کتب آموزشی</span>
              <PhBook :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li><NuxtLink to="/books">کتب آموزشی</NuxtLink></li>
              <li><NuxtLink to="/audioBooks">صدای شما</NuxtLink></li>
            </ul>
          </div>

          <!-- <NuxtLink to="/exam">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>آزمون خلاقیت </span>
              <PhExam :size="20" weight="fill" />
            </button>
          </NuxtLink> -->
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>گروه ها</span>
              <PhStudent :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li>
                <NuxtLink to="/school/groups/preschool">
                  <span> پیش دبستانی </span>
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/groups/grade1/"
                  >پایه اول
                  <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/groups/grade2/"
                  >پایه دوم <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/groups/grade3/"
                  >پایه سوم <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/groups/grade4/"
                  >پایه چهارم <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/groups/grade5/"
                  >پایه پنجم <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/school/groups/grade6/"
                  >پایه ششم <PhChalkboardTeacher :size="20" weight="fill" />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <button
              tabindex="0"
              class="px-3 py-1 items-center active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhCaretDown :size="20" />

              <span>واحد ها</span>
              <PhBuildings :size="20" weight="fill" />
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
            >
              <li><NuxtLink to="/">موسسه زبان اطلس</NuxtLink></li>
              <li><NuxtLink to="/school/">دبستان دخترانه اطلس</NuxtLink></li>
            </ul>
          </div>
          <NuxtLink to="/">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>خانه</span>
              <PhHouse :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink v-show="isManager" to="/admin">
            <button
              class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>مدیریت</span>
              <PhGlobeStand :size="20" weight="fill" />
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
          <NuxtLink to="/aboutUs">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>درباره ما</span>
              <PhTranslate :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <NuxtLink to="/honors">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>افتخارات</span>
              <PhTrophy :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <NuxtLink to="/activities">
            <button
              class="px-3 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>فعالیت ها</span>
              <PhBackpack :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/Gallery/pictureGallery">
            <button
              class="px-3 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>گالری تصاویر</span>
              <PhCamera :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/schedule">
            <button
              class="px-3 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>برنامه کلاسی</span>
              <PhCalendar :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/videoPlayer">
            <button
              class="px-3 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>ویدیوهای آموزشی</span>
              <PhVideo :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/articles">
            <button
              class="px-3 py-1 border-2 border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>مقالات</span>
              <PhArticle :size="20" weight="fill" />
            </button>
          </NuxtLink>

          <NuxtLink to="/exam">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>آزمون خلاقیت </span>
              <PhExam :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <NuxtLink to="/news">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>اخبار</span>
              <PhArticle :size="20" weight="fill" />
            </button>
          </NuxtLink>
          <!-- <NuxtLink to="/">
            <button
              class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
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
} from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const { $gsap } = useNuxtApp();

// asign user store

const userStore = useUserStore();

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

const { isManager } = storeToRefs(userStore);
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
