<template>
  <div
    class="h-60 overflow-hidden cursor-pointer duration-200 transition ease-linear hover:border-mainYellow w-80 border-2 border-mainBlue rounded-sm flex items-center flex-col"
  >
    <NuxtLink class="w-full h-full flex items-center justify-center">
      <div class="">
        <ProgressSpinner
          v-if="loading"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <img
          v-if="!loading"
          @click="showFullSize = !showFullSize"
          :src="image"
          class="w-full object-fill"
          :class="{ 'full-size': showFullSize }"
          alt=""
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["galleryImage"]);
const loading = ref();
const image = ref("");

const showFullSize = ref(false);

const getGalleryImages = async () => {
  loading.value = true;
  console.log(props.galleryImage);
  const { data } = await $fetch(
    `http://localhost:3333/image-gallery/image/${props.galleryImage.id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      loading.value = false;

      image.value = response.image;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getGalleryImages();
});
</script>

<style scoped>
.full-size {
  width: 80%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

@media (max-width: 768px) {
  .full-size {
    width: 90%;
  }
}
</style>
