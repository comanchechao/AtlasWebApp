<template>
  <div class="h-full w-full lg:px-20 flex flex-col items-center space-y-8">
    <ExamTemp v-for="question in torenceTest" :key="question.id">
      <template #title>
        <span>
          {{ question.question }}
        </span>
        <span>.{{ question.id }}</span>
      </template>
      <template #choice1>
        <RadioButton
          v-model="question.choice"
          inputId="ingredient"
          name="pizza1"
          value="1"
          @click="returnCalculation(torenceTest)"
        />
        <label for="ingredient" class="ml-2 text-lg lg:text-xl cursor-pointer">
          {{ question.answer1 }}</label
        >
      </template>
      <template #choice2>
        <RadioButton
          v-model="question.choice"
          inputId="ingredient2"
          name="pizza2"
          value="2"
          @click="returnCalculation(torenceTest)"
        />
        <label for="ingredient2" class="ml-2 text-lg lg:text-xl cursor-pointer">
          {{ question.answer2 }}</label
        >
      </template>
      <template #choice3>
        <RadioButton
          v-model="question.choice"
          inputId="ingredient3"
          name="pizza3"
          value="3"
          @click="returnCalculation(torenceTest)"
        />
        <label for="ingredient3" class="ml-2 text-lg lg:text-xl cursor-pointer">
          {{ question.answer3 }}
        </label></template
      >
    </ExamTemp>
  </div>
</template>

<style>
.p-radiobutton-box.p-highlight .p-radiobutton-icon {
  transform: translateZ(0) scale(0, 0);
}
.p-radiobutton .p-radiobutton-box.p-highlight {
  background-color: greenyellow;
  border-color: darkgreen;
}

.p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
  background-color: yellow;
  border-color: yellowgreen;
}
</style>
<script setup>
import { ref, watch } from "vue";
import { useExamStore } from "../stores/exam";

const choice1 = 0;
const choice2 = 0;
const choice3 = 0;
const choice4 = null;
const choice5 = null;
const choice6 = null;
const choice7 = null;
const choice8 = null;
const choice9 = null;
const choice10 = null;
const choice11 = null;
const choice12 = null;
const choice13 = null;
const choice14 = null;
const choice15 = null;
const choice16 = null;
const choice17 = null;
const choice18 = null;
const choice19 = null;
const choice20 = null;
const choice21 = null;
const choice22 = null;
const choice23 = null;
const choice24 = null;
const choice25 = null;
const choice26 = null;
const choice27 = null;
const choice28 = null;
const choice29 = null;
const choice30 = null;
const choice31 = null;
const choice32 = null;
const choice33 = null;
const choice34 = null;
const choice35 = null;
const choice36 = null;
const choice37 = null;
const choice38 = null;
const choice39 = null;
const choice40 = null;
const torenceTest = ref([
  {
    id: 1,
    question: "وقتی فرزندتون با یک مسئله مهم رو به میشه، معمولا چیکار میکنه؟",
    answer1: "گریه میکنه، چون نمیتونه مسئله رو حل کنه",
    answer2: "گریه نمیکنه، ولی ناراحت میشه",
    answer3: "سعی میکنه راه حل مناسبی برای مسئله پیدا کنه",
    label: "pizza1",
    choice: choice1,
  },
  {
    id: 2,
    question:
      "اگر فرزندتون سرگرم ساختن وسیله‌ای باشه، وقتی متوجه بشه قطعه‌ای از اون رو گم کرده، چیکار میکنه؟",
    answer1: "کار رو متوقف میکنه",
    answer2:
      "سعی میکنه قطعه رو پیدا کنه و اگه نتونه قطعه رو پیدا کنه، کار رو متوقف میکنه",
    answer3:
      "قطعه گم شده رو پیدا میکنه، اگه نتونه قطعه رو پیدا کنه یکی دیگه میسازه",
    label: "pizza2",

    choice: choice2,
  },
  {
    id: 3,
    question:
      "  وقتی فرزندتون تو یه مکان عمومی حضور داره، آیا سعی میکنه حدس بزنه افرادی که دورتون هستن درباره چه چیزی صحبت میکنن؟",
    answer1: "هرگز علاقه مند نیست حدس بزنه بقیه راجع به چی بحث میکنن",
    answer2: "بعضی وقت ها دوست داره حدس بزنه دیگران راجع به چی صحبت میکنن",
    answer3: "همیشه علاقه داره حدس بزنه دیگران راجع به چه موضوعی صحبت میکنن",
    choice: choice3,
  },
  {
    id: 4,
    question: "آیا فرزندتون از حل مسائل سخت لذت می‌بره؟",
    answer1: "نه، از حل کردن مسائل سخت لذت نمی‌بره",
    answer2: "بعضی وقت ها از حل مسائل مشکل لذت می‌بره",
    answer3: "همیشه از حل مسائل سخت لذت می‌بره",
    choice: choice4,
  },
  {
    id: 5,
    question:
      "اگه فرزندتون  عضو گروهی  باشه و مجبور شه همراه با گروه  مسئله‌ای رو با همکاری حل کنه، چیکار میکنه؟",
    answer1: "خودش کاری نمیکنه، میذاره اعضای گروه مسئله رو حل کنن",
    answer2: "بعضی وقت ها تو کاری که گروه انجام میده شرکت میکنه",
    answer3: "همیشه به طور فعال تو کاری که گروه انجام میده شرکت میکنه",
    choice: choice5,
  },
  {
    id: 6,
    question:
      "وقتی فرزندتون با مسئله تازه‌ای رو به رو میشه، معمولا چیکار میکنه؟",
    answer1: "از فرد دیگه ای میخواد   مسئله رو براش حل کنه",
    answer2: "سعی میکنه با کمک کس دیگه ای   مسئله رو حل کنه",
    answer3:
      "سعی میکنه اطلاعات بیشتری بدست بیاره  تا بتونه خودش مسئله رو حل کنه",
    choice: choice6,
  },
  {
    id: 7,
    question: "اگر فرزندتون درگیر حل مسئله بسیار سخت ریاضی باشه، چیکار میکنه؟",
    answer1: "از معلم یا فرد دیگه ای میخواد که بهش کمک کنه",
    answer2: "یه کتاب ریاضی مربوط به مسئله رو میخونه",
    answer3: "از منابعی که توی دسترسش هست  استفاده میکنه",
    choice: choice7,
  },
  {
    id: 8,
    question:
      "وقتی فرزندتون با مشکلی غیرعادی مواجه میشه، معمولا چطور سعی میکنه مشکل رو رفع کنه؟",
    answer1: "اکثر وقت ها از فرد دیگه ای کمک میگیره",
    answer2:
      "قبل از اینکه از فرد دیگه ای کمک بگیره، به مدت کوتاهی تلاش میکنه تا خودش مشکل رو حل کنه",
    answer3: "زمان زیادی رو صرف حل کردن مشکل به تنهایی میکنه",
    choice: choice8,
  },
  {
    id: 9,
    question:
      "وقتی فرزندتون در گروهی حضور داره، و یک ایده ی مبتکرانه پیشنهاد میده، باقی اعضای گروه چه واکنشی نسبت بهش دارن؟",
    answer1: "به ندرت از ایده های مبتکرانه ش استقبال میکنن",
    answer2: "بعضی وقت ها از ایده های مبتکرانه ش استفاده میکنن",
    answer3: "همیشه از ایده  های مبتکرانه ش استقبال میکنن",
    choice: choice9,
  },
  {
    id: 10,
    question: "آیا فرزندتون  سوالات مشکل مطرح میکنه؟",
    answer1: "نه، سوالات مشکلی مطرح نمیکنه",
    answer2: "بعضی وقت ها سوالات مشکلی مطرح میکنه",
    answer3: "همیشه سوالات مشکلی مطرح میکنه",
    choice: choice10,
  },
  {
    id: 11,
    question: "آیا فرزندتون  معمولا دوست داره کار های تازه انجام بده؟",
    answer1: "معمولا دوست نداره به کارهای تازه دست بزنه",
    answer2: "بعضی وقت ها دوست داره به کارهای تازه دست بزنه",
    answer3: "همیشه دوست داره به کارهای تازه دست بزنه",
    choice: choice11,
  },
  {
    id: 12,
    question: "آیا فرزندتون از تجربه های جدید لذت میبره؟",
    answer1: "معمولا از تجربه های جدید لذت نمیبره",
    answer2: "بعضی وقت ها از تجربه های جدید لذت میبره",
    answer3: "همیشه از تجربه های جدید لذت میبره",
    choice: choice12,
  },
  {
    id: 13,
    question: "آیا فرزندتون تاحالا غرق در رویا شده؟",
    answer1: "نه، هیچوقت به رویا فرو نمیره",
    answer2: "بعضی وقت ها به رویا فرو میره",
    answer3: "اکثر وقت ها به رویا فرو میره",
    choice: choice13,
  },
  {
    id: 14,
    question: "قدرت بیان فرزندتون تا چه حد خوب هست؟",
    answer1: "افکارش رو به خوبی بیان نمیکنه",
    answer2: "بعضی وقت ها افکارش رو به خوبی بیان میکننه",
    answer3: "اکثر وقت ها افکارش رو به خوبی بیان میکننه",
    choice: choice14,
  },
  {
    id: 15,
    question:
      "تا چه حدی فرزندتون در توصیف کردن، کلمات مد نظرش رو راحت پیدا میکنه",
    answer1: "معمولا براش بسیار سخت  هست کلمات مورد نظرش رو پیدا کنه",
    answer2: "بعضی وقت ها براش راحت هست کلمات مورد نظرش رو پیدا کنه",
    answer3: "اکثر وقت ها  براش راحت هست کلمات مورد نظرش رو پیدا کنه",
    choice: choice15,
  },
  {
    id: 16,
    question:
      "نوشتن تعداد زیادی داستان کوتاه تازه چقدر برای فرزندتون راحت هست؟",
    answer1: "نوشتن داستان کوتاه تازه براش بسیار سخت هست",
    answer2: "بعضی وقت ها نوشتن داستان کوتاه تازه براش بسیار راحت هست",
    answer3: "همیشه نوشتن داستان کوتاه تازه براش بسیار راحت هست",
    choice: choice16,
  },
  {
    id: 17,
    question:
      "آیا فرزندتون در طراحی اسباب بازی های جدید برای کودکان موفق میشه؟",
    answer1: "فکر نمیکنم موفق بشه",
    answer2: "امکانش  هست بتونه چند تا ایده مطرح کنه",
    answer3: "فکر میکنم میتونه طرح های زیادی ارائه بده",
    choice: choice17,
  },
  {
    id: 18,
    question:
      "اگر فرزندتون به ناچار مجبور بشه یک سخنرانی عمومی بکنه، فکر میکنید چقدر موفق خواهد شد؟",
    answer1: "فکر میکنم به طور کامل از رو یادداشت ها بخونه",
    answer2: "فکر میکنم اکثر سخنرانی رو از روی یادداشت ها بخونه",
    answer3: "فکر میکنم به ندرت به یادداشت ها نگاه کنه",
    choice: choice18,
  },
  {
    id: 19,
    question: "فرزندتون چقدر از ساختن چیزهای جدید لذت میبره؟",
    answer1: "معمولا از ساختن چیزهای جدید لذت نمیبره",
    answer2: "بعضی وقت ها از ساختن چیزهای جدید لذت  میبره",
    answer3: "همیشه از ساختن چیزهای جدید لذت  میبره",
    choice: choice19,
  },
  {
    id: 20,
    question: "فرزندتون با افرادی که به سختی متقاعد میشن، چطور رفتار میکنه؟",
    answer1: "فکر میکنم در پیدا کردن دلایل قانع کننده با مشکل مواجه میشه",
    answer2: "سعی میکنه برای متقاعد کردن، دلایل متفاوت بیاره",
    answer3: "همیشه برای متقاعد کردن، دلایل بسیار و متفاوت میاره ",
    choice: choice20,
  },
  {
    id: 21,
    question:
      "وقتی فرزندتون با موقعیت هایی رو به رو میشه که از عهده شون برنمیاد، چه واکنشی نشون میده؟",
    answer1: "اکثر وقت ها به دیگران متوسل میشه",
    answer2: "بعضی وقت ها به دیگران متوسل میشه",
    answer3: "همیشه سعی میکنه متکی بر خود عمل کنه ",
    choice: choice21,
  },
  {
    id: 22,
    question: "فرزندتون به آنچه به طور مستقل انجام میده چقدر اعتماد داره؟",
    answer1: "به کاری که خودش مستقلا انجام میده اعتماد زیادی نداره",
    answer2: "به کاری که خودش مستقلا انجام میده تا حدودی اعتماد داره",
    answer3: "به کاری که خودش انجام میده اعتماد زیادی داره ",
    choice: choice22,
  },
  {
    id: 23,
    question: "آیا فرزندتون از انجام آزمایش های علمی لذت میبره؟",
    answer1: "نه، از انجام آزمایش های علمی لذت نمیبره",
    answer2: "از انجام آزمایش های علمی تا حدودی لذت میبره",
    answer3: "از انجام آزمایش های علمی خیلی لذت میبره",
    choice: choice23,
  },
  {
    id: 24,
    question: "آیا فرزندتون در نوشتن ماهر هست؟",
    answer1: "زیاد در نوشتن ماهر نیست",
    answer2: "بعضی وقت ها در نوشتن ماهر هست",
    answer3: "همیشه در نوشتن ماهره هست",
    choice: choice24,
  },
  {
    id: 25,
    question:
      "وقتی فرزندتون به چیزی علاقه مند میشه، چقدر به جزئیات اون اهمیت میده؟",
    answer1: "به ندرت به جزئیات اهمیت میده",
    answer2: "بعضی وقت ها به جزئیات اهمیت میده",
    answer3: "همیشه به جزئیات اهمیت میده",
    choice: choice25,
  },
  {
    id: 26,
    question:
      "وقتی فرزندتون سعی بر انجام دادن کار پیچیده ای داره، کدوم روش رو انتخاب میکنه؟",
    answer1: "یک روش واحد رو انتخاب میکنه",
    answer2: "چند روش متفاوت رو امتحان میکنه",
    answer3: "روش های خیلی متفاوتی رو امتحان میکنه",
    choice: choice26,
  },
  {
    id: 27,
    question: "فرزندتون معمولا کدوم نوع کار رو ترجیح میده؟",
    answer1: "کاری که تمام مراحلش از پیش تعیین شده باشه",
    answer2: "کاری که نصف از پیش تعیین شده و نصف نیازمند ابتکار باشه",
    answer3: "کاری که اکثر مراحلش نیازمند ابتکار باشه",
    choice: choice27,
  },
  {
    id: 28,
    question: "فرزندتون معمولا کدوم نوع کار رو ترجیح میده؟",
    answer1: "کاری که تمام مراحلش از پیش تعیین شده باشه",
    answer2: "کاری که نصف از پیش تعیین شده و نصف نیازمند ابتکار باشه",
    answer3: "کاری که اکثر مراحلش نیازمند ابتکار باشه",
    choice: choice28,
  },
  {
    id: 29,
    question:
      "وقتی فرزندتون موسیقی گوش میکنه، به  محتوای شعری  که گوش میده توجه میکنه؟",
    answer1: "هیچوقت به محتوای شعر توجه نمیکنه",
    answer2: "بعضی وقت ها به محتوای شعر توجه میکنه",
    answer3: "همیشه به محتوای شعر توجه میکنه",
    choice: choice29,
  },
  {
    id: 30,
    question: "وقتی فرزندتون کاری رو انجام میده، کدوم نوع کار رو ترجیح میده؟",
    answer1: "کاری های ساده و سرراست رو ترجیح میده",
    answer2: "کار هایی که یک مقدار پیچیده هستند رو ترجیح میده",
    answer3: "کاری های خیلی پیچیده هستند رو ترجیح میده",
    choice: choice30,
  },
  {
    id: 31,
    question:
      "وقتی فرزندتون کتابی رو میخونه، آیا اونچه میخونه رو  در ذهن خودش مجسم میکنه؟",
    answer1: "اونچه رو که میخونه رو در ذهنش مجسم نمیکنه",
    answer2: "بعضی وقت ها اونچه رو که میخونه رو تو ذهنش تصور میکنه",
    answer3: "همیشه اونچه رو که میخونه رو تو ذهنش تصور میکنه",
    choice: choice31,
  },
  {
    id: 32,
    question:
      "وقتی فرزندتون با یک حادثه عجیب مواجه شه، چه واکنشی از خودش نشون  میده؟",
    answer1: "بهش توجهی نمیکنه",
    answer2: "سعی میکنه چند علل برای اتفاق رو پیدا کنه",
    answer3: "همیشه سعی میکنه تمام علل های اصلی اتفاق رو پیدا کنه",
    choice: choice32,
  },
  {
    id: 33,
    question:
      "وقتی فرزندتون با یک حادثه عجیب مواجه شه، چه واکنشی از خودش نشون  میده؟",
    answer1: "بهش توجهی نمیکنه",
    answer2: "سعی میکنه چند علل برای اتفاق رو پیدا کنه",
    answer3: "همیشه سعی میکنه تمام علل های اصلی اتفاق رو پیدا کنه",
    choice: choice33,
  },
  {
    id: 34,
    question:
      "آیا پیدا کردن مترادف برای کلمه ی 'سریع' برای فرزندتون کار راحتی هست؟",
    answer1: "فکر میکنم براش کار سختی باشه",
    answer2: "بعضی وقت ها براش کار راحتی هست",
    answer3: "همیشه براش کار راحتی هست",
    choice: choice34,
  },
  {
    id: 35,
    question:
      "آیا پیدا کردن مترادف برای کلمه ی 'سریع' برای فرزندتون کار راحتی هست؟",
    answer1: "فکر میکنم براش کار سختی باشه",
    answer2: "بعضی وقت ها براش کار راحتی هست",
    answer3: "همیشه براش کار راحتی هست",
    choice: choice35,
  },
  {
    id: 36,
    question:
      "آیا فرزندتون در بیان افکارش، پیدا کردن مترادف های مختلف براش کار آسانی هست؟",
    answer1: "فکر میکنم کار بسیار سختی باشه",
    answer2: "فکر میکنم براش کار نسبتا آسانی باشه ",
    answer3: "فکر میکنم براش کار بسیار آسانی باشه",
    choice: choice36,
  },
]);
const ingredient = ref("");

const examStore = useExamStore();
const returnCalculation = (test) => {
  let totalscore = 0;
  test.forEach((question, i) => {
    console.log(question.id, ":", Number(question.choice));
    totalscore = totalscore + Number(question.choice);
    console.log("total score is ", " : ", totalscore);
  });
  examStore.submitResult(totalscore);
};

// watch(
//   () => torenceTest.choice,
//   (choes) => {
//     console.log(choice1);
//   }
// );
</script>
<style lang="scss" scoped></style>
