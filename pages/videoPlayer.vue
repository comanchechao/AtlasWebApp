<template>
  <head>
    <title>ویدیوهای آموزشی منظومه آموزشی فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <div
          class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
        >
          <h2
            class="lg:text-5xl text-3xl lg:my-0 my-5 text-center font-bold text-mainYellow border-b-8 rounded-lg pb-2 border-darkBlue"
          >
            ویدیوهای آموزشی
          </h2>
          <PhVideo size="55" />
        </div>
      </div>
      <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-600">
        <span>
          در دسته بندی زیر می‌توانید، ویدیوهای اطلس را به تفکیک هر موضوع مشاهده
          کنید:
        </span>
      </h2>
      <div
        class="w-full text-mainWhite lg:h-10 h-auto flex flex-wrap lg:space-y-0 space-y-3 space-x-3 lg:items-center items-end justify-center bg-mainWhite text-md"
      >
        <button
          @click="category = 'atlas'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>آموزشگاه</span></button
        ><button
          @click="category = 'school'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مدرسه</span></button
        ><button
          @click="category = 'creativity'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>خلاقیت</span>
        </button>
      </div>
      <div
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-96 lg:h-full bg-white flex items-center justify-center rounded-lg"
        >
          <img
            v-show="!loading"
            class="w-full h-full"
            :src="latestVideoImage"
          />

          <ProgressSpinner
            v-show="loading"
            style="width: 50px; height: 50px"
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w-full h-96 lg:h-full flex flex-col items-center lg:items-end justify-center p-10 space-y-6"
        >
          <Skeleton width="22rem" height="10rem"></Skeleton>

          <Skeleton width="22rem" height="18rem"></Skeleton>

          <Skeleton width="10rem" height="6rem"></Skeleton>
        </div>
        <div
          v-if="latestVideo && !loading"
          class="lg:w-1/2 w-full h-96 lg:h-full flex flex-col items-end justify-center p-10 space-y-6"
        >
          <h2
            v-if="loading"
            class="lg:text-4xl text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            <Skeleton width="full" height="24rem"></Skeleton>
          </h2>
          <h2
            v-if="loading"
            class="lg:text-4xl text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            <Skeleton width="full" height="18rem"></Skeleton>
          </h2>
          <h2
            v-if="loading"
            class="lg:text-4xl text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            <Skeleton width="full" height="28rem"></Skeleton>
          </h2>
          <NuxtLink :to="'videodetail/' + latestVideo.id">
            <h2
              v-if="!loading"
              class="lg:text-2xl cursor-pointer duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
            >
              {{ latestVideo.title }}
            </h2>
          </NuxtLink>

          <h3 v-if="!loading" class="lg:text-lg text-md text-right">
            {{ latestVideo.description }}
          </h3>
          <NuxtLink v-if="!loading" :to="'videodetail/' + latestVideo.id">
            <button
              class="px-7 w-full py-1 lg:my-0 text-sm border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhVideo :size="29" />
              <span> دیدن ویدیو </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-screen flex bg-mainBlue lg:px-60 p-6 rounded-md items-center lg:flex-row flex-col-reverse justify-end"
      >
        <Skeleton
          v-if="loading"
          height="3rem"
          width="22rem"
          class="mb-2"
        ></Skeleton>

        <h2
          v-if="!loading"
          class="text-lg lg:text-2xl bg-mainBlue rounded-lg text-mainWhite flex items-center space-x-2"
        >
          <span>آخرین ویدیوها</span>
          <PhVideo />
        </h2>
      </div>
      <div v-show="loading" class="flex justify-center align-center">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 place-items-center">
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col space-y-12 lg:space-y-0 space-x-0 w-full flex items-center justify-center lg:space-x-16"
      >
        <div
          v-if="!loading && !videos.length"
          class="flex justify-center items-center"
        >
          <h1
            class="text-2xl text-mainBlue p-4 rounded-md border-mainYellow border-4 border-dashed"
          >
            ویدیو ای برای نمایش وجود ندارد
          </h1>
        </div>
        <div
          v-for="video in videos"
          :key="video.id"
          :video="video"
          class="flex w-64 h-full flex-col items-end space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border border-transparent border-b-mainRed border-b-8 ease-in duration-100 hover:border-mainBlue relative cursor-pointer flex items-center justify-center shadow-transparent rounded-sm"
          >
            <LazyVideoImage :videoImage="video.image_buffer" />
          </div>
          <NuxtLink v-if="!loading" :to="'videodetail/' + latestVideo.id">
            <h2
              class="text-lg duration-200 transition ease-in-out hover:text-blue-600 text-darkBlue leading-snug text-right"
            >
              {{ video.title }}
            </h2>
          </NuxtLink>
          <h3 class="text-sm text-gray-400 text-right">
            {{ video.description }}
          </h3>
          <NuxtLink :to="'/videodetail/' + video.id">
            <button
              class="px-7 w-full py-1 lg:my-0 text-sm border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhArticle :size="29" />
              <span> ادامه ی ویدیو </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhVideo } from "@phosphor-icons/vue";
const loading = ref(true);
const category = ref("atlas");
const video = ref("");
const noVideo = ref(false);

const videos = ref();
const latestVideo = ref();
const latestVideoImage = ref();

const getLatest = async () => {
  const { data } = await $fetch("http://localhost:3333/videos/latest", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      latestVideo.value = response.video[0];
      const image = `data:image/jpeg;base64,${response.video[0].image_buffer}`;
      console.log(image);
      latestVideoImage.value = image;
      getVideos();
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

watch(category, (cur, old) => {
  getVideos();
});

const getVideos = async () => {
  const { data } = await $fetch(
    `http://localhost:3333/videos/category/${category.value}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.videos.length);
      videos.value = response.videos;
      noVideo.value = response.videos.length;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};
onMounted(() => {
  getLatest();
});
</script>
