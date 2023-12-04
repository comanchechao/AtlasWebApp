<template>
  <div class="flex justify-center items-center">
    <img :src="image" class="w-full object-cover" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["articleId"]);
const image = ref("");

const getArticleImage = async () => {
  console.log(props.articleId[0].id);
  const { data } = await $fetch(
    `http://localhost:3333/articles/image/${props.articleId[0].id}`,
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
  getArticleImage();
});
</script>
