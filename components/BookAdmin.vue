<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-full border-b border-mainRed pb-3"
  >
    <Message class="w-full" v-if="message" severity="success">
      <span class="text-2xl">با موفقیت پاک شد</span>
    </Message>
    <div
      class="w-full h-full grid grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <div
        class="text-lg flex p-2 border-2 border-dashed cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 20px; height: 20px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <PhTrash
          v-if="!loading"
          @click="removeVIdeo()"
          :size="20"
          weight="fill"
          class=""
        />
      </div>
      <h2 class="text-lg">دوشنبه 19 تیر 1402</h2>
      <h2 class="text-lg">{{ book.description }}</h2>

      <h2 class="text-sm">{{ book.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["book"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();
const loading = ref(false);
const message = ref(false);
// const removeArticleImage = async function () {
//   await $fetch(
//     `http://localhost:3333/management/articleimageremove/${props.article.ArticleImage[0].id}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   )
//     .then((response, error) => {
//       alert("deleted image");
//       removeArticle();
//     })
//     .catch((error) => {
//       console.log(error.data);
//     });
// };

const removeVIdeo = async function () {
  await $fetch(
    `http://localhost:3333/management/videoremove/${props.video.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      withCredentials: true,
    }
  )
    .then((response, error) => {
      loading.value = false;
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 2000);
      managementStore.changeState();
    })
    .catch((error) => {
      console.log(error.data);
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
