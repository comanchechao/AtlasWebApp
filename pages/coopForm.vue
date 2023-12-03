<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-60 pt-12">
      <div
        class="h-auto w-full bg-mainRed bg-opacity-80 text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          فرم همکاری
        </h2>
        <PhArticle size="55" />
      </div>
      <div class="w-screen flex items-end justify-end px-5 lg:px-60 mt-10">
        <h2
          class="text-xl lg:my-0 my-5 border-b-4 rounded-sm border-mainYellow text-darkBlue"
        >
          اطلاعات فردی
        </h2>
      </div>
      <div
        class="h-auto w-screen flex-col mb-20 flex items-center justify-center px-5 lg:px-52"
      >
        <LazyInfoForm />
        <div class="flex items-center justify-center space-x-4">
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>ارسال</span>
            <PhArticle :size="20" weight="fill" />
          </button>
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>بارگذاری فایل رزومه</span>
            <PhUpload :size="20" weight="fill" />
          </button>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhUpload } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(true);

onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
</script>
