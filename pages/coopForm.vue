<template>
  <head>
    <title>فرم همکاری | منظومه آموزشی فرهنگی اطلس</title>
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
          فرم همکاری
        </h2>
        <PhArticle size="55" />
      </div>
      <div class="w-screen flex items-end justify-end px-5 lg:px-60 mt-10">
        <h2
          class="text-xl lg:my-0 my-5 border-b-4 rounded-sm border-mainYellow text-darkBlue"
        >
          اطلاعات فردی
        </h2>
      </div>
      <div
        class="h-auto w-screen flex-col mb-20 flex items-center justify-center px-5 lg:px-52"
      >
        <div
          class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-10 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
        >
          <InputText
            placeholder="نام پدر"
            id="fatherName"
            v-model="fatherName"
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
          <Dropdown
            v-model="status"
            :options="genders"
            optionLabel="name"
            inputId="dd-city"
            placeholder="وضعیت تاهل"
            class="w-full rounded-lg h-11"
          /><InputMask
            placeholder="کد ملی"
            id="personalId"
            mask="9999999999"
            v-model="personalId"
            class="w-full rounded-lg h-11 self"
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

          <InputMask
            placeholder="تاریخ تولد"
            id="birthDate"
            mask="9999-99-99"
            v-model="birthDate"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="محل تولد"
            id="birthPlace"
            v-model="birthPlace"
            class="w-full rounded-lg h-11 self"
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
        <div class="flex items-center justify-center space-x-4">
          <button
            v-if="!loading"
            @click="addRequest()"
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>ارسال</span>
            <PhArticle :size="20" weight="fill" />
          </button>
          <button
            class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>بارگذاری فایل رزومه</span>
            <PhUpload :size="20" weight="fill" />
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
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhUpload } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(false);
const errorMessages = ref([]);
const success = ref(false);

const fullname = ref("");
const fatherName = ref("");
const birthPlace = ref("");
const status = ref("");
const phoneNumber = ref("");
const personalId = ref("");
const address = ref("");
const birthDate = ref("");
const lineNumber = ref("");

const addRequest = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    fullName: fullname.value,
    fatherName: fatherName.value,
    birthPlace: birthPlace.value,
    personalId: personalId.value,
    phoneNumber: phoneNumber.value,
    lineNumber: lineNumber.value,
    address: address.value,
    birthDate: birthDate.value,
    status: status.value.name,
  });

  await $fetch("http://localhost:3333/registrations/cooprequest", {
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

const genders = ref([{ name: "مجرد" }, { name: "متاهل" }]);

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
