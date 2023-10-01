<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <div
          class="h-auto w-full bg-mainRed bg-opacity-80 p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
        >
          <h2
            class="lg:text-5xl text-3xl lg:my-0 my-5 text-center font-bold text-yellow-500 border-b-8 rounded-lg pb-2 border-darkBlue"
          >
            ویدیوهای آموزشی
          </h2>
          <PhVideo size="55" />
        </div>
      </div>
      <div
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          class="lg:w-1/2 w-full h-96 lg:h-full bg-white flex items-center justify-center rounded-lg"
        >
          <video
            v-show="!loading"
            type="video/mp4"
            class="w-full h-full"
            controls
            :src="latestVideoFile"
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
          <h2
            v-if="!loading"
            class="lg:text-4xl text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
          >
            {{ latestVideo.title }}
          </h2>
          <h3 v-if="!loading" class="lg:text-lg text-md text-right">
            {{ latestVideo.description }}
          </h3>
          <NuxtLink v-if="!loading" :to="'videodetail/' + latestVideo.id">
            <button
              class="px-12 py-3 lg:my-0 text-xl font-bold border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-md"
            >
              <PhVideo :size="29" />
              <span> دیدن ویدیو </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <img
      class="h-44 w-full transform rotate-180 my-10"
      src="../assets/images/WaveDivide.webp"
      alt=""
    />
    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-full flex items-center lg:flex-row flex-col-reverse justify-end"
      >
        <Skeleton
          v-if="loading"
          height="3rem"
          width="22rem"
          class="mb-2"
        ></Skeleton>

        <h2
          v-if="!loading"
          class="text-4xl pb-2 border-b-8 border-mainRed rounded-lg text-darkBlue font-bold flex items-center space-x-2"
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
          v-if="video.length === 0 && !loading"
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
          class="flex w-64 h-full flex-col items-center space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border border-transparent border-b-mainRed border-b-8 bg-white ease-in duration-100 hover:border-mainBlue relative cursor-pointer flex items-center justify-center shadow-transparent rounded-sm"
          >
            <VideoPlayerComponent :video="video"></VideoPlayerComponent>
          </div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            {{ video.title }}
          </h2>
          <h3 class="text-lg text-right">
            {{ video.description }}
          </h3>
          <NuxtLink :to="'/videodetail/' + video.id">
            <button
              class="px-12 py-3 lg:my-0 text-xl font-bold border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-md"
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

const video = ref("");

const getVideo = async () => {
  const { data } = await $fetch("http://localhost:3333/videos/4", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      const uint8Array = new Uint8Array(response.file.data);
      const blob = new Blob([uint8Array], { type: "video/mp4" });
      video.value = URL.createObjectURL(blob);
      console.log(video.value);
    })
    .catch(function (error) {
      console.error(error);
      getVideos();
    });
};

const videos = ref();
const latestVideo = ref();
const latestVideoFile = ref();

const getVideos = async () => {
  const { data } = await $fetch("http://localhost:3333/videos", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.videos);
      videos.value = response.videos;

      latestVideo.value = response.videos[0];

      const uint8Array = new Uint8Array(response.videos[0].file.data);
      const blob = new Blob([uint8Array], { type: "video/mp4" });
      latestVideoFile.value = URL.createObjectURL(blob);
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};
onMounted(() => {
  getVideo();
});
</script>
