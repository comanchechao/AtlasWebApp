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
            v-model="selectedCategory"
            :options="cities"
            optionLabel="name"
            placeholder="نوع متقاضی"
            class="w-60 md:w-60 lg:col-span-2"
          />
          <InputMask
            placeholder="تاریخ تولد"
            id="birthDate"
            mask="9999-99-99"
            v-model="birthDate"
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
            v-model="lineNumber"
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
          v-if="!loading"
          @click="addRegistration()"
          class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>ارسال</span>
          <PhArticle :size="20" weight="fill" />
        </button>
        <ProgressSpinner
          v-if="loading"
          style="width: 50px; height: 50px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
      </div>
      <Message class="w-full" v-show="success" severity="success">
        <span class="text-2xl">درخواست اضافه شد</span>
      </Message>
      <div class="flex flex-col w-full">
        <Message
          v-for="error in errorMessages"
          :key="error.id"
          class="w-full"
          severity="error"
        >
          <span class="text-2xl">{{ error }}</span>
        </Message>
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

const errorMessages = ref([]);

const success = ref(false);

const loading = ref(false);
const selectedCategory = ref("");
const address = ref("");
const fullname = ref("");
const phoneNumber = ref("");
const lineNumber = ref("");
const birthDate = ref("");
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

const addRegistration = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    fullName: fullname.value,
    phoneNumber: phoneNumber.value,
    lineNumber: lineNumber.value,
    address: address.value,
    birthDate: birthDate.value,
    category: selectedCategory.value.name,
  });

  await $fetch("http://localhost:3333/registrations/addregistration", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
    body: data,
  })
    .then((response, error) => {
      console.log(response);
      if (response.registration) {
        success.value = true;
        errorMessages.value = [];
      }
    })
    .catch((error) => {
      console.log(error.data);
      errorMessages.value = error.data.message;
      loading.value = false;
    });
  loading.value = false;
};
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
