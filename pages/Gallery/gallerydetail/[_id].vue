<template>
  <head>
    <title>گالری تصاویر اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          v-if="gallery"
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          {{ gallery.title }}
        </h2>
        <PhArticle size="55" />
      </div>

      <div
        class="lg:grid lg:grid-cols-3 lg:place-items-end lg:gap-5 h-full w-full lg:p-3 my-10 lg:my-8 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
      >
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <div v-if="!loading">
          <LazyPictureCard
            v-for="image in gallery.GalleryImages"
            :key="image.id"
            :galleryImage="image"
          />
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const route = useRoute();

const loading = ref(true);

const gallery = ref();

const getImageGalleries = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/image-gallery/gallery/${route.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.gallery);
      gallery.value = response.gallery;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getImageGalleries();
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
</script>
