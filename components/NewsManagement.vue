<template>
  <div>
    <div
      @click="visible = true"
      class="w-64 rounded-md cursor-pointer transition text-mainWhite shadow-lg shadow-transparent hover:shadow-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-20 bg-mainBlue flex items-center justify-center"
    >
      <h2 class="text-2xl flex items-center space-x-3">
        <span> مدیریت اخبار </span>
        <PhArticle :size="25" weight="fill" />
      </h2>
    </div>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '70vw', backgroundColor: '#f9f5ff', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex mb-24 items-center p-7 lg:p-10 flex-col space-y-7"
      >
        <h2
          class="lg:text-4xl text-2xl text-mainBlue font-bold border-b-8 pb-3 rounded-xl border-mainYellow"
        >
          مدیریت اخبار
        </h2>
        <div
          class="w-full h-full grid grid-cols-4 place-items-end lg:place-items-center border-b pb-3 border-mainBlue"
        >
          <h2 class="text-darkBlue font-bold text-xs lg:text-lg">تغییرات</h2>
          <h2 class="text-darkBlue font-bold text-xs lg:text-lg">
            تاریخ آپلود
          </h2>
          <h2 class="text-darkBlue font-bold text-xs lg:text-lg">
            نام نویسنده
          </h2>
          <h2 class="text-darkBlue font-bold text-xs lg:text-lg">
            عنوان مقاله
          </h2>
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
        <LazyNewsAdmin v-for="news in allNews" :key="news.id" :news="news" />
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

const allNews = ref([]);

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
