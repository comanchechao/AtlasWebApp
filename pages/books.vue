<template>
  <head>
    <title>کتب آموزشی منظومه آموزشی فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-60 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          کتب آموزشی
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="h-auto lg:space-x-14 lg:flex-row flex-col-reverse w-screen flex items-center justify-center my-20 px-5 lg:px-52"
      >
        <div
          class="h-full w-full grid place-items-center mt-12 lg-mt-0 lg:grid-cols-3 grid-cols-1 gap-8"
        >
          <LazyBookCard v-for="book in books" :key="book.id" :book="book" />
        </div>

        <div
          class="bg-mainWhite border-mainBlue border-2 border-dashed rounded-sm w-72 h-44"
        >
          <div
            class="w-full h-1/3 text-darkBlue px-4 space-x-2 flex items-center justify-end cursor-pointer transition ease-in duration-300 hover:bg-mainYellow"
          >
            <h2 class="text-md">کتاب های مدرسه</h2>
            <PhBook :size="20" weight="fill" />
          </div>
          <div
            class="w-full h-1/3 text-darkBlue px-4 space-x-2 flex items-center justify-end cursor-pointer transition ease-in duration-300 hover:bg-mainYellow"
          >
            <h2 class="text-md">کتاب های زبان</h2>
            <PhBook :size="20" weight="fill" />
          </div>
          <div
            class="w-full h-1/3 text-darkBlue px-4 space-x-2 flex items-center justify-end cursor-pointer transition ease-in duration-300 hover:bg-mainYellow"
          >
            <h2 class="text-md">کتاب های غیردرسی</h2>
            <PhBook :size="20" weight="fill" />
          </div>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhBook } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const books = ref([]);
const latestBook = ref();

const getBooks = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/books/", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response);
      books.value = response.books;

      latestBook.value = response.books[0];

      getArticleImage();
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const loading = ref(true);

onMounted(() => {
  getBooks();
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
</script>
