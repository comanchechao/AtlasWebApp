<template>
  <div class="flex justify-center align-center">
    <img :src="image" class="w-full h-full" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["videoImage"]);
const image = ref(`data:image/jpeg;base64,${props.videoImage}`);
</script>
