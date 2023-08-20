<template>
  <div class="">
    <Sidebar position="left" v-model:visible="visible">
      <div
        class="h-full w-full bg-darkPurple flex flex-col items-center justify-start space-y-5 px-16 py-10"
      >
        <NuxtLink class="w-full" to="/">
          <button
            class="w-full justify-center py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>خانه</span>
            <PhHouse :size="20" weight="fill" />
          </button>
        </NuxtLink>

        <NuxtLink class="w-full" to="/exam">
          <button
            class="w-full justify-center py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون هوش</span>
            <PhExam :size="20" weight="fill" />
          </button>
        </NuxtLink>
        <button
          class="w-full justify-center py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مقالات</span>
          <PhArticle :size="20" weight="fill" />
        </button>
        <NuxtLink class="w-full" to="/contactUs">
          <button
            class="w-full justify-center py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تماس با ما</span>
            <PhPhoneCall :size="20" weight="fill" />
          </button>
        </NuxtLink>

        <button
          class="w-full justify-center py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>درباره ما</span>
          <PhTranslate :size="20" weight="fill" />
        </button>
      </div>
    </Sidebar>
    <button
      class="text-xl active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-3 py-1 transition duration-300 ease-in-out border-2 border-transparent hover:border-darkBlue rounded-sm shadow-md shadow-transparent hover:shadow-darkBlue hover:text-darkBlue text-mainBlue"
      @click="visible = true"
    >
      <PhList :size="40" />
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
} from "@phosphor-icons/vue";
const visible = ref(false);
</script>
<style>
.p-sidebar .p-sidebar-content {
  padding: 0;
}
</style>
