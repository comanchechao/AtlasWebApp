<template>
  <div class="">
    <Sidebar position="right" v-model:visible="visible">
      <div
        class="h-full w-full bg-mainBlue flex flex-col items-end justify-start text-md px-4"
      >
        <NuxtLink class="w-full" to="/">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>خانه</span>
            <PhHouse :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <a href="https://cafebazaar.ir/app/com.lanmis.app">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آموزشگاه من</span>
            <PhMonitor :size="23" weight="fill" />
          </button>
        </a>
        <a href="https://portal.atlasurmia.ir/">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>ورود به پرتال</span>
            <PhMonitor :size="23" weight="fill" />
          </button>
        </a>
        <NuxtLink v-show="isManager" class="w-full" to="/admin">
          <button
            class="w-full justify-end px-4 py-1 border-2 border-mainYellow active:bg-mainYellow active:text-mainWhite bg-mainYellow hover:bg-mainWhite hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مدیریت</span>
            <PhGlobeStand :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/exam">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> خلاقیت</span>
            <PhExam :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/gallery/pictureGallery">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> گالری تصاویر</span>
            <PhExam :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/school/groups/">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> منابع آموزشی</span>
            <PhExam :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <div class="dropdown dropdown-hover">
          <button
            tabindex="0"
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <PhCaretDown :size="23" />

            <span>دوره های آموزشی</span>
            <PhChalkboardTeacher :size="23" weight="fill" />
          </button>
          <ul
            tabindex="0"
            class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-44"
          >
            <li><NuxtLink to="/courses/public">دوره های عمومی</NuxtLink></li>
            <li><NuxtLink to="/courses/women">مکالمه سریع</NuxtLink></li>
            <li dir="rtl">
              <NuxtLink to="/courses/IELTS">دوره های آیلتس و تافل</NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink class="w-full" to="/news">
          <button
            class="w-full justify-end px-4 py-1 border-2 border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تازه های اطلس</span>
            <PhArticle :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/articles">
          <button
            class="w-full justify-end px-4 py-1 border-2 border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مقالات</span>
            <PhArticle :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/videoPlayer">
          <button
            class="w-full justify-end px-4 py-1 border-2 border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>ویدیوهای آموزشی</span>
            <PhVideo :size="23" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink class="w-full" to="/books">
          <button
            class="w-full justify-end px-4 py-1 border-2 border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>کتب آموزشی</span>
            <PhBackpack :size="23" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink class="w-full" to="/contactUs">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تماس با موسسه</span>
            <PhPhoneCall :size="23" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/aboutUs">
          <button
            class="w-full justify-end px-4 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>درباره ما</span>
            <PhTranslate :size="23" weight="fill" />
          </button>
        </NuxtLink>
      </div>
    </Sidebar>
    <button
      class="text-xl active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-3 py-1 transition duration-300 ease-in-out rounded-sm hover:text-darkBlue hover:bg-mainWhite text-mainWhite"
      @click="visible = true"
    >
      <PhList :size="36" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhCaretDown,
  PhHouse,
  PhExam,
  PhArticle,
  PhPhoneCall,
  PhTranslate,
  PhList,
  PhMonitor,
  PhGlobeStand,
  PhVideo,
  PhBackpack,
  PhChalkboardTeacher,
} from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const visible = ref(false);

const userStore = useUserStore();

const { isManager } = storeToRefs(userStore);

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

onMounted(() => {
  isAuth();
});
</script>
<style>
.p-sidebar .p-sidebar-content {
  padding: 0;
}
.p-sidebar .p-sidebar-header {
  background-color: #112476;
}
</style>
