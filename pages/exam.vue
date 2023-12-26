<template>
  <head>
    <title>تست خلاقیت | منظومه آموزشی و فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen text-right">
    <LazyNavbar />
    <div
      class="lg:h-full h-full w-full bg-mainWhite flex flex-col justify-center items-center py-14"
    >
      <div
        class="h-full w-full lg:flex-row flex-col-reverse flex justify-center items-center lg:px-44"
      >
        <div
          class="flex flex-col items-center justify-center space-y-6 text-right px-14 lg:px-10 w-full lg:w-1/2 h-full"
        >
          <h2 dir="rtl" class="text-mainBlue text-3xl text-center">
            خلاقیت؛ رمز موفقیت دنیای امروز
          </h2>
          <h3 dir="rtl" class="text-gray-500">
            اولیای محترم، تحقیقات نشان داده که کودکان خلاق به دنیا می آیند ولی
            خلاقیت آنها در حدود 10 سالگی افت می‌کند و علت اساسی آن به محیط های
            آموزشی رسمی و غیر رسمی و بی توجهی به آموزش و پرورش پویا و خلاق در
            سنین پیش دبستانی و دبستان برمی گردد.
          </h3>
          <h3 dir="rtl" class="text-gray-500">
            هدف دبستان اطلس از این آزمون ارزیابی صحیح و به موقع کودکان خلاق و
            شرایط مناسب برای پرورش استعداد های آنان توسط مربیان و معلمان ماهر و
            دوره دیده منظومه اطلس می باشد. لذا از شما پدر و مادر محترم خواهش
            میکنیم با پاسخهای دقیق ما را در بررسی هر چه بهتر خلاقیت فرزندتان
            یاری نمایید استفاده قرار گیرد.
          </h3>
          <div class="flex items-center justify center space-x-3">
            <button
              @click="scrollToExam"
              class="px-3 py-2 lg:my-0 text-md items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-mainBlue hover:text-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <span>آزمون خلاقیت</span>
              <PhTestTube :size="20" weight="fill" />
            </button>
            <NuxtLink to="/news">
              <button
                class="px-3 py-2 lg:my-0 text-md items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-mainBlue hover:text-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
              >
                <span>اخبار خلاقیت</span>
                <PhArticle :size="20" weight="fill" />
              </button> </NuxtLink
            ><NuxtLink to="/videoPlayer">
              <button
                class="px-3 py-2 lg:my-0 text-md items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-mainBlue hover:text-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
              >
                <span>ویدیوهای خلاقیت</span>
                <PhVideo :size="20" weight="fill" />
              </button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full lg:px-0 px-16 lg:w-1/2 h-full"
        >
          <img
            class="object-contain w-96"
            src="../assets/images/IQ.webp"
            alt=""
          />
          <h1 class="lg:text-6xl text-5xl my-3 text-center text-mainYellow">
            بخش خلاقیت
          </h1>
          <h3 class="text-mainBlue lg:mb-0 mb-14">
            منظومه آموزشی و فرهنگی اطلس
          </h3>
        </div>
      </div>
      <img
        class="h-44 w-full transform rotate-180 my-10"
        src="../assets/images/WaveDivide.webp"
        alt=""
      />
    </div>

    <div
      ref="ExamDiv"
      class="h-full w-full bg-mainWhite flex flex-col items-center py-10 space-y-14 px-14 lg:px-32"
    >
      <h2
        class="lg:text-6xl text-center text-3xl font-bold text-mainBlue border-b-4 rounded-lg pb-4 border-darkBlue"
      >
        فرزندتون چقدر خلاق هست؟
      </h2>
      <div class="h-full w-full flex flex-col items-center space-y-4">
        <h2 class="text-2xl font-bold text-darkBlue text-center">
          با پاسخ های دقیق به سوالات آزمون اولیه خلاقیت ما، به خلاقیت فرزندتون
          پی ببرید
        </h2>
        <h3 class="text-xl text-blue-500 text-center">
          لطفا برای شروع آزمون اطلاعات مورد نیاز رو وارد کنید*
        </h3>
        <div
          v-show="!isLogged"
          class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:px-36 lg:py-6 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
        >
          <InputText
            placeholder="نام کاربری یا ایمیل"
            id="email"
            v-model="username"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            type="password"
            :feedback="false"
            placeholder="رمز عبور"
            id="password"
            v-model="password"
            class="rounded-lg h-11 w-full"
            aria-describedby="username-help "
          />
          <InputNumber
            showButtons
            :max="25"
            :useGrouping="false"
            placeholder="سن فرزندتان"
            id="age"
            v-model="age"
            class="w-full rounded-lg h-11 self"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="ایمیل"
            id="email"
            v-model="email"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            :class="{ 'p-invalid': phoneNumberErr }"
            :useGrouping="false"
            placeholder="شماره موبایل"
            v-model="phoneNumber"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="نام و نام خانوادگی فرزندتان"
            id="fullname"
            v-model="fullName"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <Dropdown
            v-model="QnA"
            :options="regions"
            @change="showCode = true"
            optionLabel="name"
            placeholder="علت شما برای شرکت در آزمون"
            class="w-full rounded-lg h-11 lg:col-span-2"
          />
        </div>
        <div v-if="Array.isArray(errorSignupMessage)">
          <Message
            v-for="error in errorSignupMessage"
            :key="error"
            class="w-full"
            v-show="signupError"
            severity="error"
          >
            <span class="text-2xl">{{ error }}</span>
          </Message>
        </div>
        <div v-else>
          <Message
            :key="error"
            class="w-full"
            v-show="signupError"
            severity="error"
          >
            <span class="text-2xl">{{ errorSignupMessage }}</span>
          </Message>
        </div>
      </div>
      <div
        class="w-full flex flex-col items-end space-y-7 justify-end lg:px-36"
      >
        <h3
          class="text-lg text-mainRed place-self-end justify-self-end col-span-2 text-center"
        >
          توجه : این تست
          <span class=" ">حدودا '15' تا '20' دقیقه طول خواهد کشید</span>
        </h3>
        <!-- <h3
            class="text-lg text-blue-600 place-self-end justify-self-end col-span-2 text-center"
          >
            با انتخاب گزینه <span class="text-mainRed">"هر سه مورد"</span> یک کد
            تخفیف ده درصدی به شما تعلق میگیره
          </h3> -->
        <h3
          v-if="showCode"
          class="text-lg text-darkBlue p-2 border-2 border-dashed border-mainRed rounded-md place-self-end justify-self-end col-span-2 text-center"
        >
          ❤ متشکر از انتخاب شما
        </h3>
        <div
          class="w-44 h-20 bg-mainYellow rounded-md justify-start flex items-center border-4 border-yellow-700 border-dashed"
        >
          <div
            class="w-16 h-16 bg-mainWhite rounded-full -translate-x-7 border-r-4 border-yellow-700 border-dashed"
          ></div>
          <h2
            v-if="showCode"
            class="text-black text-center justify-center font-bold text-2xl font-sans"
          >
            {{ discountCode }}
          </h2>
        </div>
        <h3
          v-if="showCode"
          class="text-lg text-darkBlue p-2 border-2 border-dashed border-mainRed rounded-md place-self-end justify-self-end col-span-2 text-center"
        >
          این شماره رو یادداشت کنید و زمان ثبت نام به ما تحویل بدید
        </h3>
        <h3 v-if="!isLogged" class="text-xl text-blue-500 text-center">
          لطفا برای شروع آزمون اطلاعات مورد نیاز رو وارد کنید*
        </h3>
        <h3 v-if="isLogged" class="text-xl text-blue-500 text-center">
          شما وارد سایت شده اید
        </h3>
      </div>
    </div>
    <div
      class="flex bg-mainWhite items-center justify-center lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-5"
    >
      <button
        @click="handleSignup()"
        class="px-12 py-3 lg:my-0 text-lg border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>ثبت نام و شروع آزمون</span>
      </button>
      <h3 class="text-xl">یا</h3>
      <LazyLoginExam class="flex" />
    </div>

    <div class="h-full w-full bg-mainWhite">
      <img
        ref="ExamStart"
        class="h-44 w-screen"
        src="../assets/images/WaveDivide.webp"
        alt=""
      />
      <div v-show="loading" class="flex justify-center align-center">
        <ProgressSpinner></ProgressSpinner>
      </div>
      <div
        v-if="isLogged"
        class="h-full w-full space-y-14 px-10 lg:px-32 py-10 flex flex-col items-center"
      >
        <LazyResult />
        <LazyTorrenceExam></LazyTorrenceExam>
      </div>
      <div
        class="h-full w-full space-y-14 px-10 lg:px-32 py-10 flex flex-col items-center"
        v-else
      >
        <p
          class="text-lg text-darkBlue p-2 border-2 border-dashed border-mainRed rounded-md place-self-end justify-self-end col-span-2 text-center"
        >
          لطفا اطلاعات مورد نیاز در بالا رو وارد کرده و روی "شروع آزمون" کلیک
          کنید
        </p>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
import { useExamStore } from "../stores/exam";
import Message from "primevue/message";
import {
  PhArticle,
  PhSignature,
  PhTestTube,
  PhVideo,
} from "@phosphor-icons/vue";
import { ref, watch } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const selectedCity = ref();
const errorMessage = ref("شماره واقعی خود را وارد کنید");
const errorSignupMessage = ref("");
const signupError = ref(false);

const loading = ref(false);

// register user store

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);

// log state

// tweak the log state , loading , anmation or whatever with this refrence state below

// gathering signup information
const message = ref(false);

const email = ref("");
const password = ref("");
const username = ref("");
const age = ref(null);
const phoneNumber = ref("");
const QnA = ref("");
const fullName = ref("");
const showCode = ref(false);

// phone number validation

const discountCode = ref("48534257452");

const phoneNumberErr = ref(false);

const generateNumber = () => {
  let num = Math.random(43234234, 999999999);
  discountCode.value = num;
};

watch(showCode, (current, old) => {
  if (showCode === true) {
    generateNumber();
  }
});

watch(phoneNumber, (current, old) => {
  if (current.length === 12) {
    phoneNumberErr.value = true;
    setTimeout(() => {
      phoneNumberErr.value = false;
    }, 3000);
  } else {
    phoneNumberErr.value = false;
  }
});

// handing signup for test and login after that

const handleSignup = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    email: email.value,
    password: password.value,
    username: username.value,
    age: age.value,
    fullname: fullName.value,
    phonenumber: phoneNumber.value,
    QnA: QnA.value.name,
  });

  await $fetch("http://localhost:3333/signupwithinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((response, error) => {
      loginFunction();
      message.value = true;
      StartExam();
      setTimeout(() => {
        message.value = false;
      }, 5000);
    })
    .catch((error) => {
      signupError.value = true;
      errorSignupMessage.value = error.data.message;

      setTimeout(() => {
        signupError.value = false;
      }, 3000);
    });
  loading.value = false;
};

async function loginFunction() {
  loading.value = true;
  const data = new URLSearchParams({
    email: email.value,
    password: password.value,
    username: username.value,
  });
  await $fetch("http://localhost:3333/signin", {
    method: "POST",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then(function (response) {
      if (response) {
        isLogged.value = true;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  loading.value = false;
}

watchEffect(() => {
  if (QnA.value === "هر سه مورد") {
    showCode.value = true;
  }
});

watch(phoneNumberErr, (current, old) => {
  if (phoneNumberErr.value === true) {
    signupError.value = true;
    errorSignupMessage.value = "شماره همراه خود را چک کنید";
  }
  setTimeout(() => {
    signupError.value = false;
  }, 3000);
});

const validateNumber = function () {};

const StartExam = () => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: ExamStart.value.offsetTop,
      autoKill: false,
    },
    ease: "power4.out",
  });
};
const setInfomation = async () => {
  const data = new URLSearchParams({
    age: age.value,
    phonenumber: phoneNumber.value,
    QnA: QnA.value,
    fullname: fullName.value,
  });
  await $fetch("https://auth.atlasacademy.ir/user/setInfo", {
    method: "POST",
    body: data,
    withCredentials: true,
    credentials: "include",
  });
};

const cities = ref([
  { name: "تهران", code: "NY" },
  { name: "تبریز", code: "RM" },
  { name: "ارومیه", code: "LDN" },
  { name: "شیراز", code: "IST" },
]);
const selectedRegion = ref();
const regions = ref([
  { name: "سنجش خلاقیت", code: "NY" },
  { name: "ثبت نام در آموزشگاه", code: "RM" },
  { name: "ثبت نام در دبستان", code: "LDN" },
  { name: "هر سه مورد", code: "IST" },
]);
const result = 5555;

const examStore = useExamStore();
const ingredient = ref("");
const ExamDiv = ref(null);
const ExamStart = ref(null);

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

const calculateResult = () => {
  let totalScore = 0;
  questions.forEach((question) => {
    if ((question.answer = "a")) {
      totalScore = totalScore + 0;
    } else if ((question.answer = "b")) {
      totalScore = totalScore + 1;
    } else if ((question.answer = "c")) {
      totalScore = totalScore + 2;
    }

    return totalScore;
  });
};
</script>

<style>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #020225;
}
.p-dropdown .p-dropdown-label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-inputtext {
  text-align: end;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
}
.p-dropdown {
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
  flex-direction: row-reverse;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  background-color: #fbf8ff;
  color: #0a001a;
}

.p-dropdown-panel
  .p-dropdown-items
  .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #0e0e52;
  color: #fbf8ff;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: #f7f7e1;
  color: #0e0e52;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-container .p-inputtext {
  padding: 0;
}
input::placeholder,
textarea::placeholder {
  background-color: #fbf8ff;
  color: #7878bc;
}
</style>
