<template>
  <div
    class="h-60 overflow-hidden cursor-pointer duration-200 transition ease-linear hover:border-mainYellow w-80 border-2 border-mainBlue rounded-sm flex items-center flex-col"
  >
    <NuxtLink
      class="w-full h-full flex items-center justify-center"
      to="/gallery/galleryDetail"
    >
      <div class="">
        <ProgressSpinner
          v-if="loading"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <img v-if="!loading" :src="image" class="w-full object-fill" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["gallery"]);
const loading = ref();
const image = ref("");

const getGalleryImages = async () => {
  loading.value = true;
  console.log(props.gallery);
  const { data } = await $fetch(
    `http://localhost:3333/image-gallery/image/${props.gallery.GalleryImages[0].id}`,
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

<style lang="scss" scoped></style>
