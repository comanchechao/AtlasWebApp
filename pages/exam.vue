<template>
  <div class="h-full w-screen text-right">
    <Navbar />
    <div
      class="lg:h-full h-full w-full bg-mainWhite flex flex-col justify-center items-center py-14"
    >
      <div
        class="h-full w-full lg:flex-row flex-col-reverse flex justify-center items-center lg:px-44"
      >
        <div
          class="flex flex-col items-center justify-center space-y-6 text-right px-14 lg:px-20 w-full lg:w-1/2 h-full"
        >
          <h2 class="text-mainBlue text-3xl text-center">
            به سایت منظومه اطلس خوش آمدید
          </h2>
          <h3>
            اولیای محترم، تحقیقات نشان داده که کودکان خلاق به دنیا می آیند ولی
            خلاقیت آنها در حدود 10 سالگی افت می‌کند و علت اساسی آن به محیط های
            آموزشی رسمی و غیر رسمی و بی توجهی به آموزش و پرورش پویا و خلاق در
            سنین پیش دبستانی و دبستان برمی گردد
          </h3>
          <h3>
            هدف دبستان اطلس از این آزمون ارزیابی صحیح و به موقع کودکان خلاق و
            شرایط مناسب برای پرورش استعداد های آنان توسط مربیان و معلمان ماهر و
            دوره دیده منظومه اطلس می باشد. لذا از شما پدر و مادر محترم خواهش
            میکنیم با پاسخهای دقیق ما را در بررسی هر چه بهتر خلاقیت فرزندتان
            یاری نمایید استفاده قرار گیرد
          </h3>
          <button
            @click="scrollToExam"
            class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون اولیه خلاقیت</span>
          </button>
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
            آزمون اولیه خلاقیت
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
          class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:px-36 lg:py-6 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
        >
          <InputText
            placeholder="رمز عبور"
            id="email"
            v-model="fullName"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="نام کاربری"
            id="email"
            v-model="fullName"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputNumber
            placeholder="سال تولد فرزندتان"
            id="email"
            v-model="age"
            class="w-full rounded-lg h-11 self"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="ایمیل"
            id="email"
            v-model="fullName"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputNumber
            min="01111111111"
            max="99999999999"
            step="0"
            :class="{ 'p-invalid': errorMessage }"
            :useGrouping="false"
            placeholder="شماره موبایل"
            v-model="phoneNumber"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="نام و نام خانوادگی فرزندتان"
            id="email"
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
              welcome to Atlas family
            </h2>
          </div>
          <h3
            v-if="showCode"
            class="text-lg text-darkBlue p-2 border-2 border-dashed border-mainRed rounded-md place-self-end justify-self-end col-span-2 text-center"
          >
            این شماره رو یادداشت کنید و زمان ثبت نام به ما تحویل بدید
          </h3>
          <h3
            class="text-lg text-darkBlue p-2 border-2 border-dashed border-mainRed rounded-md place-self-end justify-self-end col-span-2 text-center"
          >
            برای شروع آزمون لطفا در سایت ثبت نام کنید
          </h3>
        </div>
        <!-- <div
          class="h-full space-y-8 text-right rounded-md py-9 px-6 w-full bg-gray-100 shadow-lg shadow-mainBlue"
        >
          <h2>
            تست سنجش خلاقیت تورنس یکی از تست‌های استاندارد جهت سنجش میزان خلاقیت
            افراد از سنین دبستان تا بعد از لیسانس است. اعتبار این آزمون بارها در
            سراسر جهان از جمله ایران سنجیده شده است. این آزمون تاکنون بیش از هر
            آزمون دیگر در پژوهش و اندازه‌گیری‌های تربیتی استفاده شده است. تاکنون
            در بیش از دو هزار پژوهش که در مجلات معتبر علمی چاپ شده است، از آزمون
            تورنس به‌عنوان وسیله اندازه گیری خلاقیت استفاده شده است
          </h2>
          <h2>
            تست خلاقیت در این پرسشنامه هر سؤال مشتمل بر سه گزينه يا پاسخ است که
            شما باید تنها يكي از این پاسخ‌ها را که بیشتر با ویژگی‌های شما تطبیق
            دارد انتخاب کنید. تورنس شامل پرسشنامه‌ای حاوی 60 سؤال است
          </h2>
          <h2>
            پس از پاسخ‌دهی به همه سؤالات می‌توانید نتایج آزمون را در دو بخش
            مشاهده کنید. در بخش اول درصد نمره‌ای را که در چهار خرده آزمون سیالی،
            انعطاف، ابتکار و بسط کسب کرده‌اید، در نمودار به شما نشان داده می‌شود
            که می‌توانید آنها را با هم مقایسه کنید. در بخش دوم نمره خلاقیت شما
            نشان داده می‌شود که از طریق آن می‌توانید بفهمید خلاقیت شما چقدر است
            (خیلی کم، کم، متوسط، زیاد و خیلی زیاد)
          </h2>
        </div> -->
      </div>

      <button
        label="Show"
        @click="visible = true"
        class="text-xl bg-mainYellow active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
      >
        <span> ثبت نام </span>
        <PhSignature :size="25" />
      </button>
      <button
        @click="setInfomation()"
        class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>شروع آزمون</span>
      </button>
    </div>
    <div class="h-full w-full bg-mainWhite">
      <img
        ref="ExamStart"
        class="h-44 w-screen"
        src="../assets/images/WaveDivide.webp"
        alt=""
      />
      <div
        class="h-full w-full space-y-14 px-10 lg:px-32 py-10 flex flex-col items-center"
      >
        <LazyResult />
        <LazyTorrenceExam></LazyTorrenceExam>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup>
useHead({
  title: " آزمون خلاقیت منظومه آموزشی و فرهنگی اطلس",
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
import { useExamStore } from "../stores/exam";
import { PhSignature } from "@phosphor-icons/vue";
import { ref } from "vue";
const selectedCity = ref();
const errorMessage = ref("شماره واقعی خود را وارد کنید");
const age = ref(null);
const phoneNumber = ref(null);
const QnA = ref("");
const fullName = ref("");
const showCode = ref(false);

watchEffect(() => {
  if (QnA.value === "هر سه مورد") {
    showCode.value = true;
  }
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
  StartExam();
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
