<template>
  <div class="w-full h-full rounded-md overflow-y-scroll lg:px-11 md:px-14">
    <div
      class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-4"
    >
      <h3 class="text-darkBlue text-sm">دانلود</h3>
      <h3 class="text-darkBlue text-sm">نام آپلود کننده</h3>
      <h3 class="text-darkBlue text-sm">تاریخ ایجاد</h3>
      <h3 class="text-darkBlue text-sm">نام فایل</h3>
    </div>

    <div
      v-for="file in files"
      :key="file.id"
      class="w-full grid p-2 bg-Indigo-200 grid-cols-4 border-y-4 border-mainWhite place-items-center text-center text-darkBlue"
    >
      <button
        @click="downloadFile(file.id)"
        class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <a href="">
          <span v-show="!loading"> دانلود فایل </span>
          <PhFile v-show="!loading" :size="20" weight="fill" />
          <ProgressSpinner
            v-show="loading"
            style="width: 20px; height: 20px"
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </a>
      </button>
      <h2 class="text-sm">4</h2>
      <h2 class="lg:text-sm text-sm">دوشنبه 19 تیر 1402</h2>

      <h2 class="text-sm">{{ file.title }}</h2>
    </div>
  </div>
</template>

<script setup>
import { PhFile, PhTrash } from "@phosphor-icons/vue";
const props = defineProps(["files"]);

const loading = ref(false);

const downloadFile = async (fileID) => {
  loading.value = true;
  const { data } = await $fetch(`http://localhost:3333/files/file/${fileID}`, {
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response);
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
