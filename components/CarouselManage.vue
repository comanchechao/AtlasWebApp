<template>
  <div>
    <button
      @click="visible = true"
      class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
    >
      <h2 class="text-md flex items-center space-x-3">
        <span> مدیریت تصاویر </span>
        <PhPictureInPicture :size="25" weight="fill" />
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
          class="w-full h-full hidden lg:grid grid-cols-2 place-items-end lg:place-items-center border-b pb-3 border-mainBlue"
        >
          <h2 class="text-darkBlue text-xs lg:text-lg">تغییرات</h2>
          <h2 class="text-darkBlue text-xs lg:text-lg">تصویر</h2>
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
          class="text-2xl border-2 p-10 text-blue-700 border-blue-700 flex items-center justify center rounded-md"
        >
          <h2 class="flex w-full items-center justify-center">
            <span> موردی برای نشان دادن وجود ندارد </span>
            <PhInfo class="mr-4" :size="44" weight="fill" />
          </h2>
        </div>
        <div
          class="h-16 w-full lg:grid-cols-2 gap-4 grid-cols-1 place-items-center grid"
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
          <div class="h-16 w-16 bg-mainBlue"></div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhPictureInPicture, PhInfo, PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";
const visible = ref(false);
const loading = ref(false);
const isEmpty = ref(false);
const articles = ref([]);

const managementStore = useManagementStore();

const { stateChange } = storeToRefs(managementStore);

watch(stateChange, (old, cur) => {
  getArticles();
});

const getArticles = async () => {
  loading.value = true;
  managementStore.setLoading();
  const { data } = await $fetch("http://localhost:3333/management/articles", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.articles);
      articles.value = response.articles;
      loading.value = false;
      managementStore.setArticleLength(articles.value.length);
      managementStore.falseLoading();
      if (!articles.value.length) {
        isEmpty.value = true;
      }
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
