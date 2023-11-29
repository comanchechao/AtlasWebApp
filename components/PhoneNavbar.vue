<template>
  <div class="">
    <Sidebar position="right" v-model:visible="visible">
      <div
        class="h-full w-full bg-mainBlue flex flex-col items-end justify-start space-y-5 px-4 py-20"
      >
        <NuxtLink class="w-full" to="/">
          <button
            class="w-full justify-end px-4 py-2 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>خانه</span>
            <PhHouse :size="20" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink class="w-full" to="/exam">
          <button
            class="w-full justify-end px-4 py-2 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون خلاقیت</span>
            <PhExam :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/articles">
          <button
            class="w-full justify-end px-4 py-2 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مقالات</span>
            <PhArticle :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/videoPlayer">
          <button
            class="w-full justify-end px-4 py-2 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>ویدیوهای آموزشی</span>
            <PhVideo :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/schedule">
          <button
            class="w-full justify-end px-4 py-2 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>برنامه کلاسی</span>
            <PhCalendar :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/activities">
          <button
            class="w-full justify-end px-4 py-2 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>فعالیت ها</span>
            <PhBackpack :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink v-show="isManager" class="w-full" to="/admin">
          <button
            class="w-full justify-end px-4 py-2 border-2 border-mainYellow text-md active:bg-mainYellow active:text-mainWhite bg-mainYellow hover:bg-mainWhite hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>مدیریت</span>
            <PhGlobeStand :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/contactUs">
          <button
            class="w-full justify-end px-4 py-2 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تماس با ما</span>
            <PhPhoneCall :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/aboutUs">
          <button
            class="w-full justify-end px-4 py-2 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>درباره ما</span>
            <PhTranslate :size="20" weight="fill" />
          </button>
        </NuxtLink>
      </div>
    </Sidebar>
    <button
      class="text-xl active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-3 py-2 transition duration-300 ease-in-out rounded-sm hover:text-darkBlue hover:bg-mainWhite text-mainWhite"
      @click="visible = true"
    >
      <PhList :size="36" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhHouse,
  PhExam,
  PhArticle,
  PhPhoneCall,
  PhTranslate,
  PhList,
  PhCalendar,
  PhGlobeStand,
  PhVideo,
  PhBackpack,
} from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const visible = ref(false);

const userStore = useUserStore();

const { isManager } = storeToRefs(userStore);
</script>
<style>
.p-sidebar .p-sidebar-content {
  padding: 0;
}
.p-sidebar .p-sidebar-header {
  background-color: #2b20a3;
}
</style>
