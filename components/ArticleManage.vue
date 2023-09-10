<template>
  <div>
    <div
      @click="visible = true"
      class="w-64 rounded-md cursor-pointer transition text-mainWhite shadow-lg shadow-transparent hover:shadow-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-28 bg-mainBlue flex items-center justify-center"
    >
      <h2 class="text-2xl flex items-center space-x-3">
        <span> مدیریت مقالات </span>
        <PhArticle :size="25" weight="fill" />
      </h2>
    </div>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '70vw', backgroundColor: '#f9f5ff', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex mb-24 items-center p-7 lg:p-10 flex-col space-y-7"
      >
        <h2
          class="lg:text-4xl text-2xl text-mainBlue font-bold border-b-8 pb-3 rounded-xl border-mainYellow"
        >
          مدیریت مقالات
        </h2>
        <div
          class="w-full h-full grid grid-rows-4 lg:grid-cols-4 place-items-end lg:place-items-center border-b pb-3 border-mainRed"
        >
          <h2 class="text-darkBlue font-bold text-lg">تغییرات</h2>
          <h2 class="text-darkBlue font-bold text-lg">تاریخ آپلود</h2>
          <h2 class="text-darkBlue font-bold text-lg">نام نویسنده</h2>
          <h2 class="text-darkBlue font-bold text-lg">عنوان مقاله</h2>
        </div>
        <div v-show="loading" class="flex justify-center align-center">
          <ProgressSpinner></ProgressSpinner>
        </div>
        <LazyArticleAdmin
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";
const visible = ref(false);
const loading = ref(false);

const articles = ref([]);

const managementStore = useManagementStore();

const { stateChange } = storeToRefs(managementStore);

watch(stateChange, (old, cur) => {
  getArticles();
});

const getArticles = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/articles", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.articles);
      articles.value = response.articles;
      loading.value = false;
      managementStore.setArticleLength(articles.value.length);
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getArticles();
});
</script>

<style lang="scss" scoped></style>
