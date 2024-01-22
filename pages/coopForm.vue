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
          <div class="flex flex-col justify-center items-center space-y-3">
            <label
              for="pdf"
              label="Show"
              class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span> انتخاب فایل کتاب </span>
              <PhBook :size="25" />
            </label>

            <input
              @change="
                (event) => {
                  resumeFile = event.target.files[0];
                }
              "
              type="file"
              id="pdf"
              class="hidden"
            />
            <label
              v-show="resumeFile"
              label="Show"
              class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
            >
              <span> انتخاب شد </span>
              <PhCheckCircle :size="25" weight="fill" />
            </label>
          </div>
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
        <Message class="w-full" v-show="uploadError" severity="error">
          <span class="text-2xl">{{ uploadErrorMessage }}</span>
        </Message>
        <div class="flex flex-col w-full">
          <Message v-show="addError" severity="error">
            <span class="text-2xl">{{ errorMessages }}</span>
          </Message>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhUpload, PhCheckCircle } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(false);
const errorMessages = ref("");
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

const addError = ref(false);

const resumeFile = ref("");
const colleageId = ref("");

const addRequest = async function () {
  addError.value = false;
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

  if (resumeFile.value === "") {
    addError.value = true;
    errorMessages.value = "فایل رزومه را آپلود کنید";
  }

  if (fullname.value === "") {
    addError.value = true;
    errorMessages.value = "نام کامل خود را وارد کنید";
  }

  if (address.value === "") {
    addError.value = true;
    errorMessages.value = "ادرس منزل خود را وارد کنید";
  }

  if (personalId.value === "") {
    addError.value = true;
    errorMessages.value = "کد ملی خود را وارد کنید";
  }

  if (phoneNumber.value === "") {
    addError.value = true;
    errorMessages.value = "شماره همراه خود را وارد کنید";
  }

  if (birthDate.value === "") {
    addError.value = true;
    errorMessages.value = "تاریخ تولد خود را وارد کنید";
  }

  if (birthPlace.value === "") {
    addError.value = true;
    errorMessages.value = "محل تولد خود را وارد کنید";
  }

  if (status.value === "") {
    addError.value = true;
    errorMessages.value = "وضعیت تاهل خود را وارد کنید";
  }

  if (lineNumber.value === "") {
    addError.value = true;
    errorMessages.value = "شماره ثابت خود را وارد کنید";
  }

  if (resumeFile.value === "") {
    addError.value = true;
    errorMessages.value = "فایل رزومه را آپلود کنید";
  }

  if (
    resumeFile.value !== "" &&
    status.value !== "" &&
    birthPlace.value !== "" &&
    birthDate.value !== "" &&
    phoneNumber.value !== "" &&
    personalId.value !== "" &&
    address.value !== "" &&
    fullname.value !== ""
  ) {
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
        if (response.request) {
          success.value = true;
          colleageId.value = response.request.id;
          errorMessages.value = [];
        }
        if (resumeFile.value !== "") {
          addResume();
        }
      })
      .catch((error) => {
        console.log(error.data);
        errorMessages.value = error.data.message;
        loading.value = false;
      });
  }
  loading.value = false;
};

const message = ref(false);
const uploadError = ref(false);
const uploadErrorMessage = ref("");

const addResume = async () => {
  const formData = new FormData();
  formData.append("file", resumeFile.value);
  formData.append("name", fullname.value);
  formData.append("colleageId", colleageId.value);
  await $fetch("http://localhost:3333/registrations/attachresume", {
    method: "POST",
    credentials: "include",
    withCredentials: true,

    body: formData,
  })
    .then((response) => {
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
    })
    .catch((error) => {
      console.log(error.data);
      loading.value = false;
      if (error.data) {
        uploadError.value = true;
        if (error.data.statusCode === 422) {
          uploadErrorMessage.value = "لطفا فایل ویدیو را انتخاب کنید";
        }
        setTimeout(() => {
          uploadError.value = false;
        }, 3000);
      }
    });
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
