<template>
  <div class="h-full w-screen">
    <Navbar />
    <div
      class="h-screen w-full bg-mainWhite flex flex-col justify-center items-center py-14"
    >
      test env
      {{ exam }}
      <button @click="clickTOGet()" class="bg-mainBlue rounded shadow-3xl">
        {{ data }}
      </button>
    </div>

    <div ref="ExamDiv" class="h-screen w-full bg-mainWhite"></div>
  </div>
</template>

<script setup>
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
</script>

<style></style>
