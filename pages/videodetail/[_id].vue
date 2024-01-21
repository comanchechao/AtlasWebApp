<template>
  <head>
    <title v-if="!loading">اطلس | {{ video.title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div
      class="w-full h-full bg-mainWhite flex flex-col space-y-10 items-center pt-20 lg:px-44 p-5"
    >
      <Skeleton
        v-if="loading"
        height="5rem"
        width="28rem"
        class="mb-2"
      ></Skeleton>

      <h2
        v-if="!loading"
        class="lg:text-5xl text-3xl font-bold text-darkBlue leading-snug text-center lg:text-right"
      >
        {{ video.title }}
      </h2>
      <h2
        class="lg:text-md self-end text-md text-darkBlue leading-snug text-center lg:text-right"
      >
        تاریخ : 1402/05/29
      </h2>
      <div
        class="h-dialog w-full bg-white flex items-center justify-center my-10"
      >
        <video
          v-show="videoFile"
          v-if="!loading"
          type="video/mp4"
          class="w-full h-full"
          controls
          :src="videoFile"
        ></video>
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
        class="w-full h-full flex flex-col items-end text-right space-y-5"
      >
        <Skeleton height="3rem" width="36rem" class="mb-2"></Skeleton>

        <Skeleton class="mb-2"></Skeleton>
        <Skeleton class="mb-2"></Skeleton>
        <Skeleton width="10rem" class="mb-2"></Skeleton>
      </div>
      <div
        v-if="video"
        class="w-full h-full flex flex-col items-end text-right space-y-5"
      >
        <h3 class="text-lg text-right">
          {{ video.description }}
        </h3>
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
          v-for="video in videos"
          :key="video.id"
          :video="video"
          class="flex w-64 h-full flex-col items-end space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border border-transparent border-b-mainRed border-b-8 ease-in duration-100 hover:border-mainBlue relative cursor-pointer flex items-center justify-center shadow-transparent rounded-sm"
          >
            <NuxtLink :to="'/videodetail/' + video.id">
              <LazyVideoImage :videoImage="video.image_buffer" />
            </NuxtLink>
          </div>
          <NuxtLink :to="'/videodetail/' + video.id">
            <h2
              v-show="video"
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
              <PhVideo :size="29" />
              <span> دیدن ویدیو </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup>
import { PhVideo } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const video = ref();
const loading = ref(true);

const videoFile = ref("");

// asign router

const router = useRoute();

const getVideo = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/videos/${router.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      video.value = response.video;
      const uint8Array = new Uint8Array(response.video.file.data);
      const blob = new Blob([uint8Array], { type: "video/mp4" });
      videoFile.value = URL.createObjectURL(blob);
      getVideos();
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
  loading.value = false;
};

const videos = ref();

const getVideos = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/videos/videos", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      videos.value = response.videos;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
  getVideo();
});
</script>
<style lang="scss" scoped></style>
