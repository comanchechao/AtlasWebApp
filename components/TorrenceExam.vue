<template>
  <div class="h-full w-full lg:px-20 flex flex-col items-center space-y-8">
    <ExamTemp>
      <template #title>
        وقتی با یک مسئله ی خیلی مهم رو به رو میشوید معمولا چه میکنید؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient1"
          name="pizza"
          value="Cheese"
        />
        <label for="ingredient1" class="ml-2 text-lg lg:text-xl cursor-pointer">
          گریه میکنم، چون نمیتوانم مسئله را حل کنم</label
        >
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient2"
          name="pizza"
          value="Mushroom"
        />
        <label for="ingredient2" class="ml-2 text-lg lg:text-xl cursor-pointer">
          گریه نمیکنم اما ناراحت میشوم</label
        >
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient3"
          name="pizza"
          value="Potato"
        />
        <label for="ingredient3" class="ml-2 text-lg lg:text-xl cursor-pointer">
          سعی میکنم راه حل مناسبی برای مسئله پیدا کنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        اگر سرگرم ساختن وسیله ای باشید، ناگهان دریابید قطعه ای از آن را گم کرده
        اید، چه میکنید؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient4"
          name="pizza"
          value="Ham"
        />
        <label for="ingredient4" class="ml-2 text-lg lg:text-xl cursor-pointer">
          کار را موقف میکنم</label
        >
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient5"
          name="pizza"
          value="Mushroom2"
        />
        <label for="ingredient5" class="ml-2 text-lg lg:text-xl cursor-pointer">
          سعی میکنم قطعه گم شده را پیدا کنم و اگر نتوانم آن را پیدا کنم کار را
          متوقف میکنم
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient6"
          name="pizza"
          value="Potato2"
        />
        <label for="ingredient6" class="ml-2 text-lg lg:text-xl cursor-pointer">
          قطعه گم شده را پیدا میکنم و اگر نتوانم آن را پیدا کنم یکی دیگر میسازم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        وقتی در مکانی عمومی هستید، آیا سعی میکنید حدس بزنید افرادی که دور شما
        هستند درباره چه چیزی صحبت میکنند؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient7"
          name="pizza"
          value="Ham2"
        />
        <label for="ingredient7" class="ml-2 text-lg lg:text-xl cursor-pointer">
          هرگز علاقه مند نیستم حدس بزنم دیگران درباره ی من چه بحثی میکنند
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient8"
          name="pizza"
          value="Mushroom3"
        />
        <label for="ingredient8" class="ml-2 text-lg lg:text-xl cursor-pointer">
          گاهی دوست دارم حدس بزنم دیگران درباره ی من چه بحثی میکنند
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient9"
          name="pizza"
          value="Potato3"
        />
        <label for="ingredient9" class="ml-2 text-lg lg:text-xl cursor-pointer">
          همیشه دوست دارم حدس بزنم دیگران درباره ی من چه بحثی میکنند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title> ایا از حل مسایل دشوار لذت میبرید؟ </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient7"
          name="pizza"
          value="Ham2"
        />
        <label for="ingredient7" class="ml-2 text-lg lg:text-xl cursor-pointer">
          خیر، از حل مسایل دشوار لذت نمیبرم
        </label>
      </template>
      <template #choice2>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient8"
          name="pizza"
          value="Mushroom3"
        />
        <label for="ingredient8" class="ml-2 text-lg lg:text-xl cursor-pointer">
          به ندرت از حل مسایل دشوار لذت میبرم
        </label>
      </template>
      <template #choice3>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient9"
          name="pizza"
          value="Potato3"
        />
        <label for="ingredient9" class="ml-2 text-lg lg:text-xl cursor-pointer">
          اغلب از حل مسایل دشوار لذت میبرم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        اگر عضو گروهی باشید و باید مسئله ای را با همکاری حل کنند، چه میکنید؟
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
          خودم کاری نمیکنم و میگذارم دیگر اعضای گروه مسئله را حل کنند
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
          گاهی در آنچه گروه انجام میدهد، شرکت میکنم
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
          به طور فعال در آنچه گروه انجام میدهد، شرکت میکنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        وقتی که با مسئله تازه ای روبرو میشوید معمولا چه میکنید؟
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
          سعی میکنم با کمک کسی دیگر آن را حل کنم
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
          سعی میکنم اطلاعات بیشتری بدست آورم تا بتوانم خودم آن را حل کنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        اگر درگیر حل مسئله مشکل ریاضی باشید، چه میکنید؟
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
          از معلم یا شخصی میخواهم به من کمک کند
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
          از منابعی که در دسترس دارم استفاده میکنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        وقتی در گروهی برای حل مسئله ای کار میکنید، اعضای گروه چگونه از نظرات
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
          به ندرت از نظرات مبتکرانه من استقبال میکنند
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
          گاهی از نظرات مبتکرانه من استقبال میکنند
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
          اغلب با نظرات مبتکرانه من استقبال میکنند
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        وقتی با مشکلی غیرعادی مواجه میشوید، معمولا آن را چگونه رفع میکنید؟
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
          قبل از اینکه از کسی کمک بگیرم مدت کوتاهی تلاش میکنم تا خودم آن را حل
          کنم
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
          مدتی بسیار طولانی تلاش میکنم خودم آن را حل کنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        آیا به نظر دیگران شما سوالات مشکلی طرح میکنید؟
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
      <template #title> آیا از تجارت تازه لذت میبرید؟ </template>
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
          از تجارب تازه لذت نمیبرم
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
          گاهی از تجارب تازه لذت میبرم
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
          اغلب از تجارب تازه لذت میبرم
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
          خیر، من به رویا فرو نمیروم
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
          مطالبم را به خوبی بیان نمیکنم
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
          گاهی مطالبم را به خوبی بیان میکنم
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
          اغلب مطالبم را به خوبی بیان میکنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        برای توصیف چیزی با چه سهولتی به کلمات دست پیدا میکنید؟
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
          شاید بتوانم چند طرح ارائه کنم
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
          میتوانم طرح های زیادی ارائه کنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        اگر به ناچار به اجرای یک سخنرانی باشید، تا چه اندازه از عهده آن بر می
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
          گاهی به یادداشتهایم نگاه میکنم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title> چقدر از ساختن چیزهای جدید لذت میبرید؟ </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >معمولا از ساختن چیزهای جدید لذت میبرم
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
          گاهی از ساختن چیزهای جدید لذت میبرم
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
          اغلب از ساختن چیزهای جدید لذت میبرم
        </label></template
      >
    </ExamTemp>
    <ExamTemp>
      <template #title>
        با افرادی که به سختی متقاعد میشوند، چگونه رفتار میکنید؟
      </template>
      <template #choice1>
        <RadioButton
          v-model="ingredient"
          inputId="ingredient10"
          name="pizza"
          value="Ham3"
        />
        <label for="ingredient10" class="ml-2 text-lg lg:text-xl cursor-pointer"
          >در یافتن دلایل متقاعد کننده اشکال دارم
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
          سعی میکنم برای متقاعد کردن آنها دلایل مختلف بیابم
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

<script setup>
import { ref } from "vue";

const torenceTest = [
  {
    question: "  با افرادی که به سختی متقاعد میشوند، چگونه رفتار میکنید؟",
    answer1: "در یافتن دلایل متقاعد کننده اشکال دارم",
    answer2: "سعی میکنم برای متقاعد کردن آنها دلایل مختلف بیابم",
    answer3: "برای متقاعد کردن آنان دلایل بسیار میابم",
  },
];
const ingredient = ref("");
</script>
<style lang="scss" scoped></style>
