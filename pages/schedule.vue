<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-full h-auto lg:h-screen flex items-center flex-col">
      <img
        src="../assets/images/SchoolCalender.webp"
        class="lg:h-carousel h-full object-contain"
        alt=""
      />
      <h2
        class="lg:text-4xl my-5 text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
      >
        برنامه کلاسی اطلس
      </h2>
    </div>
    <div
      class="w-full h-full p-10 flex lg:grid lg:grid-cols-4 lg:place-items-center lg:space-y-0 lg:gap-12 flex-col items-center space-y-12"
    >
      <div v-for="schedule in schedules" :key="schedule" class="">
        <LazySchedule :schedule="schedule" />
      </div>
      <div v-show="noSchedule" class="justify-center align-center items-center">
        برنامه ای موجود نیست
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
