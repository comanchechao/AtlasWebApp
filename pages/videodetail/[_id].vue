<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div
      class="w-full h-full bg-mainWhite flex flex-col space-y-10 items-center pt-20 lg:px-44 p-5"
    >
      <h2
        class="lg:text-5xl text-3xl font-bold text-darkBlue leading-snug text-center lg:text-right"
      >
        شروع سال تحصیلی از شهریور امسال
      </h2>
      <div class="h-dialog w-full bg-white shadow-lg shadow-mainBlue my-10">
        <video
          type="video/mp4"
          class="w-full h-full"
          controls
          :src="videoFile"
        ></video>
      </div>
      <div
        v-if="video"
        class="w-full h-full flex flex-col items-end text-right space-y-5"
      >
        <h2 class="text-3xl font-bold text-darkBlue leading-snug text-right">
          {{ video.title }}
        </h2>
        <h3 class="text-lg text-right">
          {{ video.description }}
        </h3>
      </div>
    </div>

    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-full flex items-center lg:flex-row flex-col-reverse justify-end"
      >
        <h2
          class="text-4xl text-darkBlue font-bold flex items-center space-x-2"
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
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col space-y-12 lg:space-y-0 space-x-0 w-full flex items-center justify-center lg:space-x-16"
      >
        <div
          v-for="video in videos"
          :key="video.id"
          :video="video"
          class="flex w-64 h-full flex-col items-center space-y-6"
        >
          <div
            class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-white relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-lg"
          >
            <VideoPlayerComponent :video="video"></VideoPlayerComponent>
          </div>
          <h2
            v-show="video"
            class="text-2xl font-bold text-darkBlue leading-snug text-right"
          >
            {{ video.title }}
          </h2>
          <h3 class="text-lg text-right">
            {{ video.description }}
          </h3>
          <NuxtLink :to="'/videodetail/' + video.id">
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
    <LazyFooter />
  </div>
</template>

<script setup>
import { PhVideo } from "@phosphor-icons/vue";

const video = ref();
const loading = ref(true);

const videoFile = ref("");

// asign router

const router = useRoute();

const getVideo = async () => {
  console.log(router);
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
      loading.value = false;
      const uint8Array = new Uint8Array(response.file.data);
      const blob = new Blob([uint8Array], { type: "video/mp4" });
      videoFile.value = URL.createObjectURL(blob);
      console.log(video.value);
      if (response.video) {
        getArticleImage();
      }
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
  loading.value = false;
};

// const articles = ref(false);
// const getLastFour = async () => {
//   loading.value = true;
//   const { data } = await $fetch("http://localhost:3333/articles/fourarticle", {
//     headers: {},
//     withCredentials: true,
//     credentials: "include",
//   })
//     .then(function (response) {
//       console.log(response.articles);
//       articles.value = response.articles;
//       loading.value = false;

//       getArticleImage();
//     })
//     .catch(function (error) {
//       console.error(error);
//       loading.value = false;
//     });
// };

const videos = ref();

const getVideos = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/videos", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.videos);
      videos.value = response.videos;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getVideo();
  getVideos();
});
</script>
<style lang="scss" scoped></style>