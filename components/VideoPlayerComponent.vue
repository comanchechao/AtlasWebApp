<template>
  <div class="flex justify-center align-center">
    <video type="video/mp4" class="w-full h-full" controls :src="video"></video>
  </div>
</template>

<script setup>
const props = defineProps(["video"]);
const image = ref("");

const video = ref("");

const loading = ref(false);

const getVideo = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/videos/${props.video.id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      const uint8Array = new Uint8Array(response.file.data);
      const blob = new Blob([uint8Array], { type: "video/mp4" });
      video.value = URL.createObjectURL(blob);
      console.log(video.value);
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
