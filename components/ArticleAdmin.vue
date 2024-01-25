<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 overflow-hidden w-full h-48 lg:h-20 rounded-md border-2 p-3 lg:p-2 border-mainBlue"
  >
    <Message class="w-full absolute" v-if="message" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full absolute" v-if="dltError" severity="error">
      <span class="text-xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full flex space-y-2 items-end flex-col-reverse lg:grid lg:grid-cols-5 lg:place-items-center text-center text-darkBlue"
    >
      <button
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
        <h2
          @click="removeArticleImage()"
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
        {{ article.date }}
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ article.category }}
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ article.authur }}
      </h2>
      <h2 class="lg:text-md text-sm">
        {{ article.title }}
      </h2>
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
const dltError = ref(false);
const errorMessage = ref("");

const removeArticleImage = async function () {
  loading.value = true;
  console.log(props.article.ArticleImage[0]);
  if (props.article.ArticleImage[0]) {
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
        loading.value = true;
      })
      .catch((error) => {
        removeArticle();
        console.log(error.data);
        loading.value = true;
      });
  } else {
    removeArticle();
  }
};

const removeArticle = async function () {
  dltError.value = false;
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
      dltError.value = true;
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب کاربری شوید";
      }

      setTimeout(() => {
        dltError.value = false;
      }, 2000);
    });
};
</script>
