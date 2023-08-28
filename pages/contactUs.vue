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
        class="lg:h-dialog h-full shadow-lg shadow-mainBlue mt-5 object-contain"
        alt=""
      />
      <div
        class="h-auto py-16 flex flex-col items-end space-y-8 w-full px-10 lg:px-32"
      >
        <h2
          class="lg:text-4xl text-3xl border-b-8 border-mainYellow pb-3 rounded-xl text-darkBlue lg:text-right text-center lg:self-end"
        >
          نحوه تماس با ما
        </h2>
        <div
          class="h-auto w-full p-10 flex space-y-8 items-center lg:items-end flex-col justify-center bg-gray-100 rounded-md shadow-lg shadow-mainYellow"
        >
          <h2 class="lg:text-2xl text-lg text-mainBlue text-right">
            در صورت بروز هرگونه مشکل، سوال یا درخواست مشاوره و یا راهنمایی، لطفا
            از طریق ایمیل با ما در ارتباط باشید
          </h2>
          <h2 class="lg:text-2xl text-lg text-mainBlue text-right">
            تمامی ایمیل های دریافتی توسط واحد مشاوره بررسی و تا حد اکثر 7 روز
            کاری پاسخ داده میشود، و در صورت لزوم، به شما وقت مراجعه حضوری داده
            خواهد شد
          </h2>
          <div
            class="rounded-md border-4 border-dashed flex lg:flex-row flex-col-reverse text-center items-center lg:space-y-0 space-y-4 space-x-0 lg:space-x-5 p-4 border-mainYellow"
          >
            <h2 class="text-xl text-black font-bold">Atlasurmia@gmail.com</h2>
            <span>:</span>
            <h2 class="lg:text-xl text-lg text-darkBlue">
              آدرس ایمیل منظومه آموزشی اطلس
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: " آزمون خلاقیت منظومه آموزشی و فرهنگی اطلس در آکادمی اطلس",
  title: "Atlas Academy",

  meta: [
    {
      name: "منظومه آموزشی و فرهنگی اطلس در ارومیه، رسالت ما آموزش مهارت های ضروری، علوم و دانش های روز به فرزندان شماست",
      content:
        "منظومه آموزشی و فرهنگی اطلس در ارومیه، رسالت ما آموزش مهارت های ضروری، علوم و دانش های روز به فرزندان شماست",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
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
</script>

<style></style>
