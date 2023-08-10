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
          inputId="ingredient1"
          name="pizza"
          value="1"
          @click="returnCalculation(torenceTest)"
        />
        <label for="ingredient1" class="ml-2 text-lg lg:text-xl cursor-pointer">
          {{ question.answer1 }}</label
        >
      </template>
      <template #choice2>
        <RadioButton
          v-model="question.choice"
          inputId="ingredient2"
          name="pizza"
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
          name="pizza"
          value="3"
          @click="returnCalculation(torenceTest)"
        />
        <label for="ingredient3" class="ml-2 text-lg lg:text-xl cursor-pointer">
          {{ question.answer3 }}
        </label></template
      >
    </ExamTemp>

    <ExamTemp>
      <template #title>
        برای توصیف چیزی با چه سهولتی به کلمات دست پیدا میکند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >معمولا این کار برایم دشوار است
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredien11"
          name="pizza"
          value="Mushroom4"
        />
        <label for="ingredien11" class="ml-2 text-lg lg:text-xl cursor-pointer">
          گاهی این کار برایم آسان است
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient12"
          name="pizza"
          value="Potato4"
        />
        <label
          for="ingredient12"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          اغلب این کار برایم آسان است
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        توشتن تعداد زیادی داستان تازه چقدر برایتان آسان است؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >این کار برایم دشوار است
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredien11"
          name="pizza"
          value="Mushroom4"
        />
        <label for="ingredien11" class="ml-2 text-lg lg:text-xl cursor-pointer">
          می توانم چند داستان بنویسم
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient12"
          name="pizza"
          value="Potato4"
        />
        <label
          for="ingredient12"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          میتوانم داستان های بسیار بنویسم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        در طراحی اسباب بازی های جدید برای کودکان موفق میشوید؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >چندان موفق نخواهم شد
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredien11"
          name="pizza"
          value="Mushroom4"
        />
        <label for="ingredien11" class="ml-2 text-lg lg:text-xl cursor-pointer">
          شاید بتوانم چند طرح ارائه کند
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient12"
          name="pizza"
          value="Potato4"
        />
        <label
          for="ingredient12"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          میتوانم طرح های زیادی ارائه کند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        اگر به ناچار به اجرای یک سخنرانی باشد، تا چه اندازه از عهده آن بر می
        آیید؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >به طور کامل از روی یادداشتهایم میخوانم
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredien11"
          name="pizza"
          value="Mushroom4"
        />
        <label for="ingredien11" class="ml-2 text-lg lg:text-xl cursor-pointer">
          بیشتر از روی یادداشتهایم میخوانم
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient12"
          name="pizza"
          value="Potato4"
        />
        <label
          for="ingredient12"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          گاهی به یادداشتهایم نگاه میکند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title> چقدر از ساختن چیزهای جدید لذت میبرد؟ </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >معمولا از ساختن چیزهای جدید لذت می برد
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredien11"
          name="pizza"
          value="Mushroom4"
        />
        <label for="ingredien11" class="ml-2 text-lg lg:text-xl cursor-pointer">
          گاهی از ساختن چیزهای جدید لذت می برد
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient12"
          name="pizza"
          value="Potato4"
        />
        <label
          for="ingredient12"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          اغلب از ساختن چیزهای جدید لذت می برد
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        با افرادی که به سختی متقاعد میشوند، چگونه رفتار میکند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >در یافتن دلایل متقاعد کننده اشکال دارد
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredien11"
          name="pizza"
          value="Mushroom4"
        />
        <label for="ingredien11" class="ml-2 text-lg lg:text-xl cursor-pointer">
          سعی میکند برای متقاعد کردن آنها دلایل مختلف بیابم
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient12"
          name="pizza"
          value="Potato4"
        />
        <label
          for="ingredient12"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          برای متقاعد کردن آنان دلایل بسیار میابم
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

const torenceTest = ref([
  {
    id: 1,
    question: "وقتی فرزندتون با یک مسئله مهم رو به میشه، معمولا چیکار میکنه؟",
    answer1: "گریه میکنه، چون نمیتونه مسئله رو حل کنه",
    answer2: "گریه نمیکنه، ولی ناراحت میشه",
    answer3: "سعی میکنه راه حل مناسبی برای مسئله پیدا کنه",
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
  },
  {
    id: 11,
    question: "آیا فرزندتون  معمولا دوست داره کار های تازه انجام بده؟",
    answer1: "معمولا دوست نداره به کارهای تازه دست بزنه",
    answer2: "بعضی وقت ها دوست داره به کارهای تازه دست بزنه",
    answer3: "همیشه دوست داره به کارهای تازه دست بزنه",
  },
  {
    id: 12,
    question: "آیا فرزندتون از تجربه های جدید لذت میبره؟",
    answer1: "معمولا از تجربه های جدید لذت نمیبره",
    answer2: "بعضی وقت ها از تجربه های جدید لذت میبره",
    answer3: "همیشه از تجربه های جدید لذت میبره",
  },
  {
    id: 13,
    question: "آیا فرزندتون تاحالا غرق در رویا شده؟",
    answer1: "نه، هیچوقت به رویا فرو نمیره",
    answer2: "بعضی وقت ها به رویا فرو میره",
    answer3: "اکثر وقت ها به رویا فرو میره",
  },
  {
    id: 14,
    question: "قدرت بیان فرزندتون تا چه حد خوب هست؟",
    answer1: "افکارش رو به خوبی بیان نمیکنه",
    answer2: "بعضی وقت ها افکارش رو به خوبی بیان میکننه",
    answer3: "اکثر وقت ها افکارش رو به خوبی بیان میکننه",
  },
  {
    id: 15,
    question:
      "تا چه حدی فرزندتون در توصیف کردن، کلمات مد نظرش رو راحت پیدا میکنه",
    answer1: "معمولا براش بسیار سخت  هست کلمات مورد نظرش رو پیدا کنه",
    answer2: "بعضی وقت ها براش راحت هست کلمات مورد نظرش رو پیدا کنه",
    answer3: "اکثر وقت ها  براش راحت هست کلمات مورد نظرش رو پیدا کنه",
  },
  {
    id: 16,
    question:
      "نوشتن تعداد زیادی داستان کوتاه تازه چقدر برای فرزندتون راحت هست؟",
    answer1: "نوشتن داستان کوتاه تازه براش بسیار سخت هست",
    answer2: "بعضی وقت ها نوشتن داستان کوتاه تازه براش بسیار راحت هست",
    answer3: "همیشه نوشتن داستان کوتاه تازه براش بسیار راحت هست",
  },
  {
    id: 17,
    question:
      "نوشتن تعداد زیادی داستان کوتاه تازه چقدر برای فرزندتون راحت هست؟",
    answer1: "نوشتن داستان کوتاه تازه براش بسیار سخت هست",
    answer2: "بعضی وقت ها نوشتن داستان کوتاه تازه براش بسیار راحت هست",
    answer3: "همیشه نوشتن داستان کوتاه تازه براش بسیار راحت هست",
  },
]);
const ingredient = ref("");

const returnCalculation = (test) => {
  let totalscore = 0;
  test.forEach((question, i) => {
    console.log(question.id, ":", Number(question.choice));
    totalscore = totalscore + Number(question.choice);
    console.log("total score is ", " : ", totalscore);
  });
};
watch(
  () => torenceTest.choice,
  (choes) => {
    console.log(choice1);
  }
);
</script>
<style lang="scss" scoped></style>
