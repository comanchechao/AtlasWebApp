<template>
  <div class="h-full w-screen">
    <Navbar />
    <!-- <div
      class="h-screen w-full bg-mainWhite flex flex-col justify-center items-center py-14"
    >
      test env
      {{ exam }}
      <button @click="clickTOGet()" class="bg-mainBlue rounded shadow-3xl">
        {{ data }}
      </button>
    </div>

    <div class="flex justify-center items-center">
      <button
        @click="getTestResults()"
        class="bg-yellow-400 rounded"
        type="button"
      >
        <p v-if="!torrenceResults">get results</p>
        <p v-else>{{ torrenceResults }}</p>
      </button>
    </div> -->

    <div
      ref="ExamDiv"
      class="h-full w-full bg-mainWhite flex items-center flex-col justify-center"
    >
      <img
        src="../assets/images/ContactUs.webp"
        class="h-dialog shadow-lg shadow-mainBlue mt-5 object-contain"
        alt=""
      />
    </div>
    <div class="h-full w-full px-10 lg:px-32">
      <h2
        class="text-4xl text-darkBlue font-bold lg:text-right text-center lg:self-end"
      >
        نحوه تماس با ما
      </h2>
    </div>
  </div>
</template>

<!-- <script setup>
const { $gsap } = useNuxtApp();
import { ref } from "vue";
const ExamDiv = ref(null);
const data = ref("not fetched");
const scrollToExam = () => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: ExamDiv.value.offsetTop,
      autoKill: false,
    },
    ease: "power4.out",
  });
};
const { data: exam } = await useFetch("http://localhost:3333/exam/highschool");
const clickTOGet = async () => {
  const { data: me } = await $fetch("http://localhost:3333/user/me", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response);
      data.value = response.msg;
    })
    .catch(function (error) {
      console.error(error);
    });

  console.log(me);
};

const torrenceResults = ref(null);

const getTestResults = async () => {
  const { data: me } = await $fetch("http://localhost:3333/user/myinfo", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log("this is login response", response.TorrenceTestResult);
      torrenceResults.value = response.TorrenceTestResult;
    })
    .catch(function (error) {
      console.error(error);
    });

  console.log(me);
};
</script> -->

<style></style>
