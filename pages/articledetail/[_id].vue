<template>
  <head>
    <title>{{ article.title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
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
      class="w-full h-full bg-mainWhite flex flex-col space-y-3 lg:space-y-5 items-center lg:pt-20 lg:px-44 p-5"
    >
      <h2
        class="lg:text-4xl text-3xl rounded-md border-b-8 border-mainYellow p-1 font-bold text-darkBlue leading-snug text-center lg:text-right"
      >
        {{ article.title }}
      </h2>
      <div class="flex w-full items-center justify-around">
        <h2
          class="lg:text-md self-end text-md text-darkBlue leading-snug text-center lg:text-right"
        >
          تاریخ : {{ article.date }}
        </h2>
        <h2
          class="lg:text-md self-end text-md text-darkBlue leading-snug text-center lg:text-right"
        >
          نویسنده : منظومه فرهنگی آموزشی اطلس
        </h2>
      </div>
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
          class="lg:text-3xl text-xl font-bold p-1 border-b-8 border-mainYellow rounded-lg text-darkBlue leading-snug text-right"
        >
          {{ article.first_header }}
        </h2>
        <h3 class="text-lg text-right bg-white text-gray-900 p-1">
          {{ article.first_body }}
        </h3>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2
          class="lg:text-3xl text-xl font-bold p-1 border-b-8 border-mainYellow rounded-lg text-darkBlue leading-snug text-right"
        >
          {{ article.second_header }}
        </h2>
        <h3 class="text-lg text-right bg-white text-gray-900 p-1">
          {{ article.second_body }}
        </h3>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2
          class="lg:text-3xl text-xl font-bold p-1 border-b-8 border-mainYellow rounded-lg text-darkBlue leading-snug text-right"
        >
          {{ article.third_header }}
        </h2>
        <h3 class="text-lg text-right bg-white text-gray-900 p-1">
          {{ article.third_body }}
        </h3>
      </div>
    </div>

    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-screen flex bg-mainBlue lg:px-60 p-6 rounded-md items-center lg:flex-row flex-col-reverse justify-end"
      >
        <Skeleton
          v-if="loading"
          height="3rem"
          width="22rem"
          class="mb-2"
        ></Skeleton>

        <h2
          v-if="!loading"
          class="text-lg lg:text-2xl bg-mainBlue rounded-lg text-mainWhite flex items-center space-x-2"
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
          class="flex w-64 h-full flex-col items-end space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border border-transparent border-b-mainRed border-b-8 ease-in duration-100 hover:border-mainBlue relative cursor-pointer flex items-center justify-center shadow-transparent rounded-sm"
          >
            <NuxtLink :to="'articledetail/' + article.id">
              <ArticleImage :articleId="article.ArticleImage" alt="" />
            </NuxtLink>
          </div>
          <NuxtLink :to="'articledetail/' + article.id">
            <h2
              class="text-lg duration-200 transition ease-in-out hover:text-blue-600 text-darkBlue leading-snug text-right"
            >
              {{ article.title }}
            </h2>
          </NuxtLink>

          <h3 class="text-sm text-gray-400 text-right">
            {{ article.first_header }}
          </h3>
          <NuxtLink :to="'/articledetail/' + article.id">
            <button
              class="px-7 w-full py-1 lg:my-0 text-sm border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
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
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
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
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
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
