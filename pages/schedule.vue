<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-auto h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full bg-mainRed bg-opacity-80 p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold text-mainYellow border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          برنامه کلاسی
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="w-full h-full p-10 flex lg:grid lg:grid-cols-4 lg:place-items-center lg:space-y-0 lg:gap-12 flex-col items-center space-y-12"
      >
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>

        <div
          v-if="!loading"
          v-for="schedule in schedules"
          :key="schedule"
          class=""
        >
          <LazySchedule :schedule="schedule" />
        </div>
        <div
          v-show="noSchedule && !loading"
          class="justify-center align-center items-center"
        >
          برنامه ای موجود نیست
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
const schedules = ref(null);
const noSchedule = ref(false);
const loading = ref(false);

const getSchedule = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/schedules", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.schedules);
      schedules.value = response.schedules;
      loading.value = false;
      if (response.schedules.length === 0) {
        noSchedule.value = true;
      }
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getSchedule();
});
</script>

<style lang="scss" scoped></style>
