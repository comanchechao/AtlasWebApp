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
          <h2 class="text-mainBlue text-4xl text-center">
            معرفی

            <span class="text-mainYellow">آزمون هوش</span>
            اطلس
          </h2>
          <h3>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </h3>
          <button
            @click="scrollToExam"
            class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>آزمون خلاقیت</span>
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
            آزمون هوش
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
          با سوالات دقیق به خلاقیت فرزندتون پی ببرید
        </h2>
        <h3 class="text-xl text-blue-500 text-center">
          لطفا برای شروع آزمون اطلاعات مورد نیاز رو وارد کنید*
        </h3>
        <div
          class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:px-36 lg:py-6 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
        >
          <InputNumber
            placeholder="سن"
            id="email"
            v-model="age"
            class="w-full rounded-lg h-11 self"
            aria-describedby="username-help"
          />
          <InputText
            placeholder="نام و نام خانوادگی"
            id="email"
            v-model="fullName"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <InputNumber
            placeholder="شماره تلفن"
            v-model="phoneNumber"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
          <Dropdown
            v-model="QnA"
            :options="regions"
            optionLabel="name"
            placeholder="علت شما برای شرکت در آزمون"
            class="w-full rounded-lg h-11"
          />
          <h3
            class="text-lg text-blue-400 place-self-end justify-self-end col-span-2 text-center"
          >
            با انتخاب گزینه <span class="text-mainRed">"هر سه مورد"</span> یک
            کوپن تخفیف ده درصدی به شما تعلق میگیره
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
        @click="StartExam"
        class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-mainYellow shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>شروع آزمون</span>
      </button>
    </div>
    <div class="h-full w-full bg-mainWhite">
      <img
        class="h-44 w-screen"
        src="../assets/images/WaveDivide.webp"
        alt=""
      />
      <div
        ref="ExamStart"
        class="h-full w-full space-y-14 px-10 lg:px-32 py-10 flex flex-col items-center"
      >
        <TorrenceExam></TorrenceExam>
        <button
          class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>نشان دادن نتایج</span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
import { useExamStore } from "../stores/exam";
import { ref } from "vue";
const selectedCity = ref();

const age = ref(null);
const phoneNumber = ref(null);
const QnA = ref("");
const fullName = ref("");

const setInfomation = async () => {
  const data = new URLSearchParams({
    age: age.value,
    phonenumber: phoneNumber.value,
    QnA: QnA.value,
    fullname: fullName.value,
  });
  await $fetch("http://localhost:3333/user/setInfo", {
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
  color: #7878bc;
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
