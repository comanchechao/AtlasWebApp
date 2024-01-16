<template>
  <div
    class="h-60 overflow-hidden cursor-pointer duration-200 transition ease-linear hover:border-mainYellow w-80 border-2 border-mainBlue rounded-sm flex items-center flex-col"
  >
    <NuxtLink
      class="w-full h-3/5 flex items-center justify-center"
      to="/gallery/SchoolYear"
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

    <div class="w-full h-2/5 flex-col flex items-center justify-center">
      <NuxtLink to="/gallery/SchoolYear">
        <h2
          class="border-b-4 text-md hover:text-blue-600 hover:border-mainYellow cursor-pointer transition ease-linear duration-200 border-mainRed text-darkBlue text-right rounded-sm"
        >
          {{ gallery.title }}
        </h2>
      </NuxtLink>
    </div>
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
