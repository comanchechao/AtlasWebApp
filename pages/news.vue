<template>
  <head>
    <title>تازه های اطلس | منظومه آموزشی فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          تازه های اطلس
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        v-if="isEmpty"
        class="h-96 w-screen flex items-center justify-center"
      >
        <div
          class="lg:text-2xl text-lg p-5 border-2 lg:p-10 text-blue-700 border-blue-700 flex items-center justify center rounded-md"
        >
          <h2 class="flex w-full items-center justify-center">
            <span> موردی برای نشان دادن وجود ندارد </span>
            <PhInfo class="mr-4" :size="44" weight="fill" />
          </h2>
        </div>
      </div>
      <h2
        v-if="!isEmpty"
        dir="rtl"
        class="lg:text-lg text-sm my-5 text-gray-600"
      >
        <span>
          در دسته بندی زیر می‌توانید، تازه های اطلس را به تفکیک هر موضوع مشاهده
          کنید:
        </span>
      </h2>
      <div
        v-if="!isEmpty"
        class="w-full text-mainWhite lg:h-10 h-auto flex flex-wrap lg:space-y-0 space-y-3 space-x-3 lg:items-center items-end justify-center bg-mainWhite text-md"
      >
        <button
          @click="category = 'atlasnews'"
          :class="{
            'bg-mainWhite': category === 'atlasnews',
            'text-mainBlue': category === 'atlasnews',
          }"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>آموزشگاه</span></button
        ><button
          @click="category = 'school'"
          :class="{
            'bg-mainWhite': category === 'school',
            'text-mainBlue': category === 'school',
          }"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مدرسه</span></button
        ><button
          @click="category = 'creativity'"
          :class="{
            'bg-mainWhite': category === 'creativity',
            'text-mainBlue': category === 'creativity',
          }"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>خلاقیت</span>
        </button>
      </div>
      <div
        v-if="!isEmpty"
        dir="rtl"
        class="lg:h-dialog h-full lg:flex-row flex-col w-full flex items-center justify-around py-10"
      >
        <div
          v-if="loading"
          class="lg:w-1/2 w-full h-96 lg:h-96 bg-white rounded-lg"
        >
          <Skeleton width="full" height="24rem"></Skeleton>
        </div>
        <div
          v-if="loading"
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-start justify-start lg:justify-center p-3 lg:p-10 space-y-6"
        >
          <Skeleton height="5rem" width="28rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>

        <div
          v-if="!loading"
          class="lg:w-1/2 w-full h-96 lg:h-96 flex items-center justify-center bg-white rounded-sm border border-mainBlue"
        >
          <ProgressSpinner
            v-if="imageLoading"
            style="width: 50px; height: 50px"
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
          <img
            v-show="!imageLoading"
            class="w-full h-full object-contain"
            :src="latestArticleImage"
            alt=""
          />
        </div>

        <div
          class="lg:w-1/2 w-full h-auto lg:h-full flex flex-col items-start justify-start lg:justify-center p-3 lg:p-10 space-y-2"
          v-if="!loading"
        >
          <NuxtLink :to="'newsdetail/' + latestarticle.id">
            <h2
              v-show="latestarticle"
              class="lg:text-2xl cursor-pointer duration-200 transition ease-in-out hover:text-blue-600 text-2xl lg:my-0 font-bold text-darkBlue leading-snug text-right"
            >
              {{ latestarticle.title }}
            </h2>
          </NuxtLink>

          <h3 class="lg:text-lg text-md text-right">
            {{ latestarticle.first_header }}
          </h3>
          <NuxtLink :to="'newsdetail/' + latestarticle.id">
            <button
              class="px-7 w-full py-1 lg:my-0 text-sm border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhArticle class="ml-2" :size="23" />
              <span> ادامه ی خبر </span>
            </button>
          </NuxtLink>
        </div>
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
          <span>جدیدترین مقالات</span>
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
          v-if="!allNews.length && !loading"
          class="flex justify-center items-center"
        >
          <div
            class="lg:text-2xl text-lg p-5 border-2 lg:p-10 text-blue-700 border-blue-700 flex items-center justify center rounded-md"
          >
            <h2 class="flex w-full items-center justify-center">
              <span> موردی برای نشان دادن وجود ندارد </span>
              <PhInfo class="mr-4" :size="44" weight="fill" />
            </h2>
          </div>
        </div>
        <div
          v-if="allNews.length"
          v-for="news in allNews"
          :key="news.id"
          :news="news"
          class="flex w-64 h-full flex-col items-end space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border border-transparent border-b-mainRed border-b-8 bg-white ease-in duration-100 hover:border-mainBlue relative cursor-pointer flex items-center justify-center shadow-transparent rounded-sm"
          >
            <ProgressSpinner
              v-show="imageLoading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
            <LazyNewsImage
              v-if="!imageLoading"
              :newsId="news.NewsImages"
              alt=""
            />
          </div>
          <h2
            v-show="allNews.length"
            class="text-lg duration-200 transition ease-in-out hover:text-blue-600 text-darkBlue leading-snug text-right"
          >
            {{ news.title }}
          </h2>
          <h3 v-show="allNews.length" class="text-sm text-gray-400 text-right">
            {{ news.first_header }}
          </h3>
          <NuxtLink v-show="allNews.length" :to="'newsdetail/' + news.id">
            <button
              class="px-7 w-full py-1 lg:my-0 text-sm border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhArticle :size="29" />
              <span> ادامه ی خبر </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhInfo } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

// assign route

const route = useRoute();
const router = useRouter();

const category = ref(route.query.category);

const currenctCat = ref();

watch(route.query.category, (cur, odl) => {
  currenctCat.value = cur;
  console.log(currenctCat.value);
});

watch(category, (cur, old) => {
  getNews();
});

const allNews = ref([]);
const loading = ref(true);
const latestarticle = ref([]);
const imageLoading = ref(true);
const isEmpty = ref(false);
const latestArticleImage = ref("");

const getNews = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/news/category/${category.value}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.news);
      allNews.value = response.news;

      latestarticle.value = response.news[0];
      if (!response.news.length) {
        isEmpty.value = true;
      }
      getNewsImage();
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const getNewsImage = async () => {
  console.log("see me ", latestarticle.value.NewsImages[0]);
  const { data } = await $fetch(
    `http://localhost:3333/news/image/${latestarticle.value.NewsImages[0].id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      imageLoading.value = false;

      latestArticleImage.value = response.image;
      if (!latestArticleImage.value.length) {
        isEmpty.value = true;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });

  getNews();
  console.log(route.query.category);
});
</script>
