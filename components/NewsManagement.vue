<template>
  <div>
    <button
      @click="visible = true"
      class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
    >
      <h2 class="text-md flex items-center space-x-3">
        <span> مدیریت تازه های اطلس </span>
        <PhArticle :size="25" weight="fill" />
      </h2>
    </button>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '70vw', backgroundColor: '#f9f5ff', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex mb-24 items-center p-2 lg:p-10 flex-col space-y-7"
      >
        <div
          class="w-full h-full grid grid-cols-4 place-items-end lg:place-items-center border-b pb-3 border-mainBlue"
        >
          <h2 class="text-darkBlue text-xs lg:text-lg">تغییرات</h2>
          <h2 class="text-darkBlue text-xs lg:text-lg">تاریخ آپلود</h2>
          <h2 class="text-darkBlue text-xs lg:text-lg">نام نویسنده</h2>
          <h2 class="text-darkBlue text-xs lg:text-lg">عنوان خبر</h2>
        </div>
        <div
          v-if="loading"
          class="w-full h-full flex flex-col items-center space-y-5"
        >
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
        </div>
        <div
          v-show="isEmpty"
          class="lg:text-2xl text-lg p-5 border-2 lg:p-10 text-blue-700 border-blue-700 flex items-center justify center rounded-md"
        >
          <h2 class="flex w-full items-center justify-center">
            <span> موردی برای نشان دادن وجود ندارد </span>
            <PhInfo class="mr-4" :size="44" weight="fill" />
          </h2>
        </div>
        <LazyNewsAdmin v-for="news in allNews" :key="news.id" :news="news" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhInfo } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";
const visible = ref(false);
const loading = ref(false);

const allNews = ref([]);
const isEmpty = ref(false);
const managementStore = useManagementStore();

const { stateChange } = storeToRefs(managementStore);

watch(stateChange, (old, cur) => {
  getNews();
});

const getNews = async () => {
  loading.value = true;
  managementStore.setLoading();
  const { data } = await $fetch("http://localhost:3333/management/news", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.news);
      allNews.value = response.news;
      loading.value = false;
      managementStore.setNewsLength(allNews.value.length);
      managementStore.falseLoading();
      if (!response.news.length) {
        isEmpty.value = true;
      } else {
        isEmpty.value = false;
      }
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getNews();
});
</script>

<style lang="scss" scoped></style>
