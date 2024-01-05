<template>
  <head>
    <title>تماس با ما | منظومه آموزشی فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen">
    <LazyNavbar />

    <div
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
          class="lg:text-4xl font-bold text-3xl border-b-8 border-mainYellow pb-3 rounded-xl text-darkBlue lg:text-right text-center lg:self-end"
        >
          نحوه تماس با ما
        </h2>
        <div
          class="h-auto w-full p-10 flex space-y-3 items-center lg:items-end flex-col justify-center bg-white rounded-md border-2 border-mainYellow"
        >
          <h2 dir="rtl" class="lg:text-xl text-lg text-mainBlue text-right">
            در صورت بروز هرگونه مشکل، سوال یا درخواست مشاوره و یا راهنمایی، لطفا
            از طریق ایمیل با ما در ارتباط باشید.
          </h2>
          <h2 dir="rtl" class="lg:text-xl text-lg text-mainBlue text-right">
            تمامی ایمیل های دریافتی توسط واحد مشاوره بررسی و تا حد اکثر 7 روز
            کاری پاسخ داده میشود، و در صورت لزوم، به شما وقت مراجعه حضوری داده
            خواهد شد.
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2112.3270051317677!2d45.04996563463304!3d37.50993567723312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40055228d647ddef%3A0x4e726a205f0b9b5d!2z2KLZhdmI2LLYtNqv2KfZhyDYstio2KfZhiDYp9i32YTYsw!5e0!3m2!1sen!2sno!4v1703631939997!5m2!1sen!2sno"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="self-center"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const data = ref("not fetched");
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
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
