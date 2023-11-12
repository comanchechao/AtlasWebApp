<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div
      v-if="loading"
      class="w-full h-full bg-mainWhite flex flex-col space-y-10 items-center lg:pt-20 lg:px-44 p-5"
    >
      <Skeleton height="5rem" width="28rem" class="mb-2"></Skeleton>

      <div v-if="imageLoading" class="h-dialog w-full bg-white my-10">
        <Skeleton height="32rem" width="full" class="mb-2"></Skeleton>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <Skeleton height="3rem" width="36rem" class="mb-2"></Skeleton>

        <Skeleton class="mb-2"></Skeleton>
        <Skeleton class="mb-2"></Skeleton>
        <Skeleton width="10rem" class="mb-2"></Skeleton>
      </div>
    </div>
    <div
      v-if="!loading"
      class="w-full h-full bg-mainWhite flex flex-col space-y-3 lg:space-y-10 items-center lg:pt-20 lg:px-44 p-5"
    >
      <h2
        class="lg:text-5xl text-4xl rounded-md border-b-8 border-mainYellow p-4 font-bold text-darkBlue leading-snug text-center lg:text-right"
      >
        {{ article.title }}
      </h2>
      <div
        class="lg:h-dialog h-96 w-full bg-white flex items-center justify-center lg:my-10"
      >
        <img
          v-if="!imageLoading"
          class="lg:h-full h-96 object-contain"
          :src="image"
          alt=""
        />
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2
          class="lg:text-3xl text-xl font-bold p-3 border-b-8 border-mainYellow rounded-lg text-darkBlue leading-snug text-right"
        >
          {{ article.first_header }}
        </h2>
        <h3 class="text-lg text-right bg-white text-gray-900 p-3">
          {{ article.first_body }}
        </h3>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2
          class="lg:text-3xl text-xl font-bold p-3 border-b-8 border-mainYellow rounded-lg text-darkBlue leading-snug text-right"
        >
          {{ article.second_header }}
        </h2>
        <h3 class="text-lg text-right bg-white text-gray-900 p-3">
          {{ article.second_body }}
        </h3>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2
          class="lg:text-3xl text-xl font-bold p-3 border-b-8 border-mainYellow rounded-lg text-darkBlue leading-snug text-right"
        >
          {{ article.third_header }}
        </h2>
        <h3 class="text-lg text-right bg-white text-gray-900 p-3">
          {{ article.third_body }}
        </h3>
      </div>
    </div>

    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-full flex items-center lg:flex-row flex-col-reverse justify-end"
      >
        <Skeleton
          v-if="loading"
          height="3rem"
          width="22rem"
          class="mb-2"
        ></Skeleton>

        <h2
          v-if="!loading"
          class="text-4xl text-darkBlue font-bold flex items-center space-x-2"
        >
          <span>آخرین مقالات</span>
          <PhArticle />
        </h2>
      </div>
      <div v-show="loading" class="flex justify-center align-center">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 place-items-center">
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col space-y-12 lg:space-y-0 space-x-0 w-full flex items-center justify-center lg:space-x-16"
      >
        <div
          v-if="!articles.length && !loading"
          class="flex justify-center items-center"
        >
          <h1
            class="text-2xl text-mainBlue p-4 rounded-md border-mainYellow border-4 border-dashed"
          >
            مقاله ای برای نمایش وجود ندارد
          </h1>
        </div>
        <div
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="flex w-64 h-full flex-col items-center space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border-b-8 bg-white border-mainBlue ease-in duration-100 hover:border-mainYellow relative hover:shadow-mainOrange cursor-pointer shadow-md flex items-center justify-center shadow-transparent rounded-sm"
          >
            <ArticleImage :articleId="article.ArticleImage" alt="" />
          </div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            {{ article.title }}
          </h2>
          <h3 class="text-lg text-right">
            {{ article.first_header }}
          </h3>
          <NuxtLink :to="'/articledetail/' + article.id">
            <button
              class="px-12 py-3 lg:my-0 text-xl font-bold border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-md"
            >
              <PhArticle :size="29" />
              <span> ادامه ی مقاله </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup>
import { PhArticle } from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const article = ref({});
const loading = ref(true);
const imageLoading = ref(true);

const image = ref();

const router = useRoute();
const getArticle = async () => {
  console.log(router);
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/articles/${router.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      article.value = response.article;
      console.log(article.value.ArticleImage[0].id);
      if (response.article) {
        getArticleImage();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  loading.value = false;
};

const getArticleImage = async () => {
  console.log(article);
  const { data } = await $fetch(
    `http://localhost:3333/articles/image/${article.value.ArticleImage[0].id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      image.value = response.image;
      imageLoading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const articles = ref(false);
const getLastFour = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/articles/fourarticle", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.articles);
      articles.value = response.articles;
      loading.value = false;

      getArticleImage();
    })
    .catch(function (error) {
      console.error(error);
    });
  loading.value = false;
};

onMounted(() => {
  getLastFour();

  getArticle();
});
</script>
<style>
.p-message-wrapper {
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}
.p-message-close.p-link {
  margin-right: auto;
  margin-left: 2rem;
}
.p-message.p-message-error .p-message-close {
  margin-left: 0;
}
.p-message .p-message-icon {
  margin-left: 2rem;
}
</style>
