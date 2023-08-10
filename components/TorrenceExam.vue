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
        <span>
          وقتی فرزندتان با مسئله تازه‌ای روبرو می‌شود معمولا چه میکند؟
        </span>
        <span>.6</span>
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          از کسی میخواهم آن را برایم حل کند
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
          سعی میکند با کمک کسی دیگر آن را حل کند
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
          سعی میکند اطلاعات بیشتری بدست آورم تا بتوانم خودم آن را حل کند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        اگر درگیر حل مسئله مشکل ریاضی باشد، چه میکند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          از معلم یا شخصی میخواهم به او کمک کند
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
          یک کتاب ریاضی مربوط به مسئله را میخوانم
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
          از اوابعی که در دسترس دارد استفاده میکند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        وقتی در گروهی برای حل مسئله ای کار میکند، اعضای گروه چگونه از نظرات
        مبتکرانه شما استقبال میکنند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          به ندرت از نظرات مبتکرانه او استقبال میکنند
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
          گاهی از نظرات مبتکرانه او استقبال میکنند
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
          اغلب با نظرات مبتکرانه او استقبال میکنند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        وقتی با مشکلی غیرعادی مواجه میشوید، معمولا آن را چگونه رفع میکند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          اغلب از کسی کمک میگیرم
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
          قبل از اینکه از کسی کمک بگیرم مدت کوتاهی تلاش میکند تا خودم آن را حل
          کند
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
          مدتی بسیار طولانی تلاش میکند خودم آن را حل کند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        آیا به نظر دیگران شما سوالات مشکلی طرح میکند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          خیر، اینطور فکر میکنند
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
          گاهی اینطور فکر میکنند
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
          اغلب اینطور فکر میکنند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        آیا معمولا دوست دارید به کارهای تازه دست بزنید؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          معمولا به کارهای تازه دست نمیزنم
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
          گاهی به کارهای تازه دست میزنم
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
          اغلب به کارهای تازه دست میزنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title> آیا از تجارت تازه لذت میبرد؟ </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          از تجارب تازه لذت نمی برد
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
          گاهی از تجارب تازه لذت می برد
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
          اغلب از تجارب تازه لذت می برد
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title> آیا هرگز به رویا فرو میروید؟ </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          خیر، او به رویا فرو نمیروم
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
          گاهی، اگر وقت داشته باشم به رویا فرو میروم
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
          اغلب به رویا فرو میروم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title> بیان شما تا چه حد خوب است؟ </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label
          for="ingredient10"
          class="ml-2 text-lg lg:text-xl cursor-pointer"
        >
          مطالبم را به خوبی بیان نمیکند
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
          گاهی مطالبم را به خوبی بیان میکند
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
          اغلب مطالبم را به خوبی بیان میکند
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
  },
  {
    id: 3,
    question:
      "  وقتی فرزندتون تو یه مکان عمومی حضور داره، آیا سعی میکنه حدس بزنه افرادی که دورتون هستن درباره چه چیزی صحبت میکنن؟",
    answer1: "هرگز علاقه مند نیست حدس بزنه بقیه راجع به چی بحث میکنن",
    answer2: "بعضی وقت ها دوست داره حدس بزنه دیگران راجع به چی صحبت میکنن",
    answer3: "همیشه علاقه داره حدس بزنه دیگران راجع به چه موضوعی صحبت میکنن",
  },
  {
    id: 4,
    question: "آیا فرزندتون از حل مسائل سخت لذت می‌بره؟",
    answer1: "نه، از حل کردن مسائل سخت لذت نمی‌بره",
    answer2: "بعضی وقت ها از حل مسائل مشکل لذت می‌بره",
    answer3: "همیشه از حل مسائل سخت لذت می‌بره",
  },
  {
    id: 5,
    question:
      "اگه فرزندتون  عضو گروهی  باشه و مجبور شه همراه با گروه  مسئله‌ای رو با همکاری حل کنه، چیکار میکنه؟",
    answer1: "خودش کاری نمیکنه، میذاره اعضای گروه مسئله رو حل کنن",
    answer2: "بعضی وقت ها تو کاری که گروه انجام میده شرکت میکنه",
    answer3: "همیشه به طور فعال تو کاری که گروه انجام میده شرکت میکنه",
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
