<template>
  <head>
    <title>پیش ثبت نام منظومه آموزشی فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-60 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          پیش ثبت نام
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="h-auto flex-col w-screen flex items-center justify-center mb-10 px-5 lg:px-52"
      >
        <div
          class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-10 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
        >
          <Dropdown
            dir="rtl"
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="نوع متقاضی"
            class="w-60 md:w-60 lg:col-span-2"
          />
          <InputMask
            placeholder="تاریخ تولد"
            id="email"
            mask="9999-99-99"
            v-model="email"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="نام و نام خانوادگی"
            id="fullname"
            v-model="fullname"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />

          <InputMask
            placeholder="شماره همراه"
            v-model="phoneNumber"
            mask="9999-999-9999"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputMask
            placeholder="شماره ثابت"
            v-model="phoneNumber"
            mask="9999-999-9999"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />

          <InputText
            placeholder="آدرس منزل"
            id="address"
            v-model="address"
            class="w-full rounded-lg h-11 col-span-2"
            aria-describedby="username-help"
          />
        </div>
        <button
          class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>ارسال</span>
          <PhArticle :size="20" weight="fill" />
        </button>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(true);
const selectedCity = ref();
const cities = ref([
  { name: "کلاس زبان" },
  { name: "پیش دبستانی" },
  { name: "پایه اول دبستان" },
  { name: "پایه دوم دبستان" },
  { name: "پایه سوم دبستان" },
  { name: "پایه چهارم دبستان" },
  { name: "پایه پنجم دبستان" },
  { name: "پایه ششم دبستان" },
]);
onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
</script>
