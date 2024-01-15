<template>
  <head>
    <title dir="rtl">سوالات متداول منظومه آموزشی و فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="lg:text-5xl text-3xl flex items-center justify-center space-x-2 lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          <span>سوالات متداول</span>
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-96 lg:h-96 flex items-center justify-center"
        >
          <img
            class="w-full h-full object-contain"
            src="../assets/images/CommonQ.webp"
            alt=""
          />
        </div>
        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-end justify-start lg:justify-start p-3 lg:p-7 space-y-3"
          v-if="!loading"
        >
          <h2
            class="lg:text-2xl duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            سوالات متداول منظومه آموزشی فرهنگی اطلس
          </h2>

          <h3
            dir="rtl"
            class="lg:text-sm leading-loose text-md text-right flex flex-col space-y-4"
          >
            <span class="leading-loose text-gray-800">
              در اینجا پاسخ به برخی از سوالات متداول در مورد منظومه آموزشی
              فرهنگی اطلس آورده شده است. اگر سوال دیگری دارید، میتوانید :
            </span>
            <NuxtLink to="/contactUs">
              <button
                class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
              >
                <span>با ما تماس بگیرید</span>
                <PhPhoneCall :size="20" weight="fill" />
              </button>
            </NuxtLink>
          </h3>
          <div
            class="w-full h-full mb-12 flex flex-col items-start space-y-6 justify-start"
          >
            <div
              class="h-auto mt-10 w-full text-darkBlue bg-opacity-80 rounded-md flex lg:flex-row flex-col-reverse items-center justify-end space-x-0 lg:space-y-0 lg:space-x-4"
            >
              <h2
                class="text-2xl flex items-center justify-center space-x-2 lg:my-0 my-5 border-b-8 rounded-lg border-mainYellow"
              >
                <span> سوالات متداول </span>
              </h2>
              <PhArticle size="39" />
            </div>
            <Accordion dir="rtl" :activeIndex="0">
              <AccordionTab
                v-for="tab in tabs"
                :key="tab.title"
                :header="tab.title"
              >
                <p class="m-0">{{ tab.content }}</p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w-full h-96 lg:h-96 bg-white rounded-lg"
        >
          <Skeleton width="full" height="24rem"></Skeleton>
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w- h-auto lg:h-full flex flex-col items-end justify-start lg:justify-center p-3 lg:p-10 space-y-6"
        >
          <Skeleton height="5rem" width="28rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
      </div>

      <!-- <img
          class="h-44 w-screen transform rotate-180 my-10"
          src="../../assets/images/WaveDivide.webp"
          alt=""
        /> -->
    </div>

    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhGraduationCap } from "@phosphor-icons/vue";

const tabs = ref([
  {
    title: "واحد آموزشگاه",
    content:
      "شماره تلفن : 33661029 - 33661021 آدرس : خیابان سعدی - خیابان باباطاهر - پلاک 88",
  },
  { title: "واحد دبستان دخترانه", content: "Content 2" },
]);
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(false);
const latestarticle = ref([]);
const imageLoading = ref(true);

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
<style></style>
