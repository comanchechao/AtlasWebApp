<template>
  <div class="flex justify-center align-center">
    <img :src="image" class="w-full h-full" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["newsId"]);
const image = ref("");

const getNewsImage = async () => {
  console.log(props.newsId[0].id);
  const { data } = await $fetch(
    `http://localhost:3333/news/image/${props.newsId[0].id}`,
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
  getNewsImage();
});
</script>
