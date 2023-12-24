<template>
  <div
    class="h-60 w-60 border-2 border-dashed border-mainBlue p-3 rounded-md flex items-center flex-col"
  >
    <div class="w-full bg-mainBlue h-3/5 flex items-center justify-center">
      <img :src="image" class="hw-full object-fill" alt="" />
    </div>
    <div class="w-full h-2/5 flex-col flex items-center justify-center">
      <NuxtLink to="/gallery/SchoolYear">
        <h2
          class="border-b-4 hover:text-blue-600 hover:border-mainYellow cursor-pointer transition ease-linear duration-200 border-mainRed text-darkBlue text-sm text-right rounded-sm"
        >
          {{ gallery.title }}
        </h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["gallery"]);

const image = ref("");

const getGalleryImages = async () => {
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
