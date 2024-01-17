<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-44 lg:h-16 border-b border-dashed border-mainBlue pb-3"
  >
    <Message class="w-full" v-if="message" severity="success">
      <span class="text-2xl">با موفقیت پاک شد</span>
    </Message>
    <div
      class="w-full h-full grid grid-cols-5 place-items-center text-center text-darkBlue"
    >
      <div
        @click="removeArticleImage()"
        class="text-lg flex p-2 border-2 cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <h2 v-if="!loading" class="text-sm lg:flex hidden">پاک کردن</h2>

        <PhTrash v-if="!loading" :size="20" weight="fill" class="" />
      </div>
      <h2 class="lg:text-lg text-sm">{{ article.date }}</h2>
      <h2 class="lg:text-sm text-xs">{{ article.category }}</h2>
      <h2 class="lg:text-lg text-sm">{{ article.authur }}</h2>
      <h2 class="lg:text-sm text-xs">{{ article.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["article"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();
const loading = ref(false);
const message = ref(false);

const errorMessage = ref("");

const removeArticleImage = async function () {
  loading.value = true;
  await $fetch(
    `http://localhost:3333/management/articleimageremove/${props.article.ArticleImage[0].id}`,
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
      removeArticle();
    })
    .catch((error) => {
      removeArticle();
      console.log(error.data);
    });
};

const removeArticle = async function () {
  loading.value = true;

  await $fetch(
    `http://localhost:3333/management/articleremove/${props.article.id}`,
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
      managementStore.changeState();
    })
    .catch((error) => {
      console.log(error.data);
      loading.value = false;
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب کاربری شوید";
      }
    });
};
</script>
