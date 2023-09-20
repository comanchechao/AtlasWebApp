<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <Message v-show="loading">...... در حال دریافت اطلاعات</Message>
    <div
      class="w-full h-full bg-mainWhite flex flex-col space-y-10 items-center pt-20 lg:px-44 p-5"
    >
      <h2
        class="lg:text-5xl text-3xl font-bold text-darkBlue leading-snug text-center lg:text-right"
      >
        {{ article.title }}
      </h2>
      <div class="h-dialog w-full bg-white shadow-lg shadow-mainBlue my-10">
        <img class="w-full object-contain" :src="image" alt="" />
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2 class="text-5xl font-bold text-darkBlue leading-snug text-right">
          {{ article.first_header }}
        </h2>
        <h3 class="text-lg text-right">
          {{ article.first_body }}
        </h3>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2 class="text-5xl font-bold text-darkBlue leading-snug text-right">
          {{ article.second_header }}
        </h2>
        <h3 class="text-lg text-right">
          {{ article.second_body }}
        </h3>
      </div>
      <div class="w-full h-full flex flex-col items-end text-right space-y-5">
        <h2 class="text-5xl font-bold text-darkBlue leading-snug text-right">
          {{ article.third_header }}
        </h2>
        <h3 class="text-lg text-right">
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
        <h2
          class="text-4xl text-darkBlue font-bold flex items-center space-x-2"
        >
          <span>آخرین مقالات</span>
          <PhArticle />
        </h2>
      </div>
      <div
        class="h-full lg:flex-row flex-col space-y-12 lg:space-y-0 space-x-0 w-full flex items-center justify-center lg:space-x-16"
      >
        <div
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="flex w-64 h-full flex-col items-center space-y-6"
        >
          <div
            class="w-64 h-64 Card transition border-2 border-transparent ease-out duration-300 hover:border-mainBlue bg-white relative cursor-pointer shadow-lg flex items-center justify-center shadow-mainBlue rounded-lg"
          >
            <ArticleImage
              class="object-contain h-full"
              :articleId="article.ArticleImage"
              alt=""
            />
          </div>
          <h2 class="text-2xl font-bold text-darkBlue leading-snug text-right">
            {{ article.title }}
          </h2>
          <h3 class="text-lg text-right">
            {{ article.first_header }}
          </h3>
          <NuxtLink :to="'/articleDetail/' + article.id">
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
      loading.value = false;
      console.log(article.value.ArticleImage[0].id);
      if (response.article) {
        getArticleImage();
      }
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
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
      loading.value = false;
    });
};

onMounted(() => {
  getLastFour();

  getArticle();
});
</script>
<style lang="scss" scoped></style>
