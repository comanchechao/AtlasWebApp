<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-full border-b border-mainRed pb-3"
  >
    <Message class="w-full" v-if="message" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full" v-if="deleteError" severity="error">
      <span class="text-xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full flex space-y-2 items-end flex-col-reverse lg:grid lg:grid-cols-5 lg:place-items-center text-center text-darkBlue"
    >
      <button
        @click="removeVIdeo()"
        class="text-lg flex p-2 border-2 cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 20px; height: 20px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <h2
          @click="removeVIdeo()"
          v-if="!loading"
          class="text-sm lg:flex hidden"
        >
          پاک کردن
        </h2>
        <PhTrash v-if="!loading" :size="20" weight="fill" class="" />
      </button>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ video.category }}
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ video.description }}
      </h2>

      <h2 class="lg:text-md text-sm">{{ video.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["video"]);
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

const deleteError = ref(false);
const errorMessage = ref("");

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
      managementStore.changeVideoState();
    })
    .catch((error) => {
      deleteError.value = true;
      console.log(error.data);
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
