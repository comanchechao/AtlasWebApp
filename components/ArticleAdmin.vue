<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-full border-b border-mainRed pb-3"
  >
    <div
      class="w-full h-full grid grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <div
        class="text-lg flex p-2 border-2 border-dashed cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <PhTrash :size="20" weight="fill" class="" />
      </div>
      <h2 class="text-lg">دوشنبه 19 تیر 1402</h2>
      <h2 class="text-lg">{{ article.authur }}</h2>

      <h2 class="text-sm">{{ article.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["article"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
