<template>
  <head>
    <title>مدرسه دخترانه ی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div
    class="w-screen z-50 h-screen absolute LoadingDiv bg-mainWhite flex items-center justify-center"
  >
    <ProgressSpinner
      class="bg-mainWhite"
      style="width: 80px; height: 80px"
      strokeWidth="8"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
  <div class="h-full w-screen bg-mainWhite overflow-hidden">
    <LazyNavbar />
    <div
      class="w-full h-auto relative justify-center flex-col flex items-center"
    >
      <LazyMainPageCarousel />
      <div
        class="w-full z-30 h-full lg:absolute flex lg:flex-row flex-col items-center lg:items-end pb-14 justify-center lg:space-y-0 space-y-6 lg:space-x-10"
      >
        <div
          class="h-32 w-96 flex space-x-3 items-center justify-center p-5 cursor-pointer border-b-8 border-transparent hover:border-mainBlue transition rounded-md bg-mainBlue ease-linear duration-150 hover:bg-mainWhite text-mainWhite hover:text-mainBlue"
        >
          <div class="flex items-center justify-center space-x-3">
            <div class="flex flex-col items-end justify-center space-y-1">
              <h2 class="text-xl font-bold">موسسه زبان اطلس</h2>
              <h2 class="text-lg">مجتمع فرهنگی و آموزشی</h2>
            </div>
          </div>
          <PhBooks size="73" class=" " weight="thin" />
        </div>
        <div
          class="h-32 w-96 flex space-x-3 items-center justify-center p-5 cursor-pointer border-b-8 border-transparent hover:border-mainBlue transition rounded-md bg-mainBlue ease-linear duration-150 hover:bg-mainWhite text-mainWhite hover:text-mainBlue"
        >
          <div class="flex items-center justify-center space-x-3">
            <div class="flex flex-col items-end justify-center space-y-1">
              <h2 class="text-xl font-bold">دبستان دخترانه اطلس</h2>
              <h2 class="text-lg">دبستان و پیش دبستان</h2>
            </div>
          </div>
          <PhBackpack size="73" class=" " weight="thin" />
        </div>
      </div>
    </div>

    <div
      class="w-full h-auto lg:h-screen firstPhaseTrigger flex items-center justify-around px-6 space-y-7 lg:space-y-0 flex-col-reverse lg:flex-row lg:px-52 lg:space-x-10 py-14"
    >
      <div class="lg:w-1/2 w-auto firstPhase h-full">
        <img class="h-full" src="../../assets/images/atlas4.jpg" alt="" />
      </div>
      <div
        class="lg:w-1/2 firstPhase w-full flex flex-col items-end space-y-4 h-full"
      >
        <h2
          class="lg:text-lg p-2 text-2xl text-darkBlue border-r-8 bg-mainYellow bg-opacity-40 border-mainYellow pb-1 rounded-md text-center"
        >
          درباره ما
        </h2>
        <h2 class="text-right text-darkBlue text-2xl font-bold leading-loose">
          منظومه فرهنگی و آموزشی اطلس
        </h2>
        <h2 dir="rtl" class="text-right text-darkBlue leading-loose">
          منظومه فرهنگی و آموزشی اطلس در سال ١٣٧٤ توسط سرکار خانم طاهره پاشایی
          با هدف ارائه ی خدمات ویژه فرهنگی - آموزشی تاسیس گردید. آموزش مدرن بر
          پایه تئوری های آموزشی روز دنیا، کسب جایگاه نخست در رقابت های علمی -
          آموزشی شهر ارومیه، تربیت اسلامی بر پایه های اخلاق انسانی، ایجاد نگرش و
          بینش الهـی و تعمیـق روحیــه ی تـحقیـق و پژوهــش در دانش آموزان، شرکت
          در مسابقات علمی بین المللی و امکان رقابت با مدارس خوب دنیا از جمله
          اهداف این موسسه است، که با عنایت خداوند منان بخش عمده ای از این اهداف
          حاصل گردیده است.
        </h2>
        <Timeline :value="events" align="right" class="w-full flex items-end">
          <template #content="slotProps">
            <span class="text-darkBlue text-md font-bold">
              {{ slotProps.item.status }}
            </span>
          </template>
        </Timeline>
        <NuxtLink to="/aboutUs">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>درباره ما</span>
            <PhTranslate :size="20" weight="fill" />
          </button>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex items-center justify-center my-24 w-full bg-darkBlue lg:px-48 content-center h-52 lg:h-52"
    >
      <button
        class="px-3 py-1 items-center text-md active:bg-mainBlue active:text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <PhCaretLeft :size="60" weight="fill" class="text-mainRed" />
      </button>
      <SchoolCarousel />
      <button
        class="px-3 py-1 items-center text-md active:bg-mainBlue active:text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <PhCaretRight :size="60" weight="fill" class="text-mainRed" />
      </button>
    </div>
    <div
      class="w-screen h-full space-y-10 lg:space-y-6 flex flex-col items-center justify-around p-10 lg:p-20"
    >
      <h1
        class="lg:text-2xl thirdTrig text-2xl text-darkBlue border-b-8 border-mainYellow pb-1 rounded-md text-center"
      >
        اخبار دبستان اطلس
      </h1>
      <div
        class="h-full w-full grid place-items-center mt-12 lg-mt-0 lg:grid-cols-3 grid-cols-1 gap-8"
      >
        <NuxtLink class="third" to="/articles">
          <div
            class="lg:w-96 w-72 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="@/assets/images/Grades.webp"
              class="w-52 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">جشن قرآن پایه پنجم</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/articles">
          <div
            class="lg:w-96 w-72 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="@/assets/images/Grades.webp"
              class="w-52 bgmain object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">جشن قرآن پایه پنجم</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/articles">
          <div
            class="lg:w-96 w-72 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="@/assets/images/Grades.webp"
              class="w-52 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">جشن قرآن پایه پنجم</h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink to="/news">
        <button
          class="px-5 py-2 lg:my-10 text-md items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-mainBlue hover:text-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مشاهده اخبار بیشتر</span>
          <PhArticle :size="20" weight="fill" />
        </button>
      </NuxtLink>
    </div>

    <!-- <div
      class="w-screen h-full space-y-10 lg:space-y-6 flex flex-col items-center justify-around p-10 lg:p-20"
    >
      <h1
        class="lg:text-2xl text-2xl text-darkBlue border-b-8 border-mainYellow pb-2 rounded-md text-center"
      >
        برترین های منظومه ی آموزشی و فرهنگی اطلس
      </h1>
      <div
        class="w-screen h-full bg-darkBlue flex items-center justify-center py-10 px-44"
      >
        <div
          class="h-full w-auto gap-10 grid grid-cols-1 lg:grid-cols-3 place-items-center content-center"
        >
          <div
            class="w-72 transition ease-in-out duration-300 cursor-pointer hover:bg-mainYellow bg-white drop-shadow-xl border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 cursor-pointer hover:bg-mainYellow bg-white drop-shadow-xl border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 cursor-pointer hover:bg-mainYellow bg-white drop-shadow-xl border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 cursor-pointer hover:bg-mainYellow bg-white drop-shadow-xl border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 cursor-pointer hover:bg-mainYellow bg-white drop-shadow-xl border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
          <div
            class="w-72 transition ease-in-out duration-300 cursor-pointer hover:bg-mainYellow bg-white drop-shadow-xl border-2 border-darkBlue h-28 rounded-md flex items-center justify-around"
          >
            <div class="flex flex-col items-end justify-center">
              <h2 class="text-lg text-darkBlue">رتبه دوم ریاضی</h2>
              <h2 class="text-sm text-gray-700">ایمان پرک</h2>
            </div>
            <img
              src="../../assets/images/Grad.webp"
              class="w-20 object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div
      class="w-screen h-full space-y-10 lg:space-y-6 flex flex-col items-center justify-around p-10 lg:p-20"
    >
      <h1
        class="lg:text-2xl secondPhaseTrigger text-2xl text-darkBlue border-b-8 border-mainYellow pb-2 rounded-md text-center"
      >
        خدمات منظومه ی آموزشی و فرهنگی اطلس
      </h1>
      <div
        class="h-full w-full flex items-center justify-center space-x-0 space-y-12 lg:space-y-0 lg:flex-row flex-col lg:space-x-16"
      >
        <NuxtLink class="secondPhase" to="/articles">
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/Exam.webp"
              class="w-36 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">مقالات اطلس</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="secondPhase" to="/videoPlayer">
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/Learning.webp"
              class="w-44 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">ویدیوهای آموزشی</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="secondPhase" to="/schedule">
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/Calender.webp"
              class="w-full object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">برنامه کلاسی</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="secondPhase" to="/exam">
          <div
            class="w-64 h-64 Card border-4 border-dashed hover:border-mainRed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/IQTest.webp"
              class="w-full object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              ref="Blue"
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md px-3 text-center text-mainWhite">
                آزمون اولیه خلاقیت
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div> -->
    <!-- <div
      class="h-auto lg:my-10 w-full flex items-center flex-col justify-start space-y-4 px-14 lg:px-40 py-20"
    >
      <h2
        class="lg:text-2xl text-2xl mb-5 rounded-lg text-center border-b-8 border-mainYellow pb-4 text-darkBlue"
      >
        رسالت ما آموزش مهارت های ضروری، علوم و دانش های روز به فرزندان شماست
      </h2>
      <h2 class="lg:text-2xl text-2xl text-darkBlue text-right lg:self-end">
        درباره ی منظومه آموزشی و فرهنگی اطلس
      </h2>
      <h2 class="text-lg text-right self-end text-gray-500">
        اطلس را تاسیس کردیم تا محیطی آموزشی و پرورشی سالم، شاد، صمیمی و خلاق
        ایجاد کنیم
      </h2>
      <h2 class="lg:text-2xl text-2xl text-darkBlue text-right lg:self-end">
        فرزندانی خلاق، پویا، شریف، مسئولیت پذیر و توانمند
      </h2>
      <h2 class="text-lg text-right self-end text-gray-500">
        میخواهیم فرزندانمان را با مهارت های کاربری و اساسی برای داشتن زندگی
        اجتماعی موفق و آینده ی مالی و تحصیلی شایسته پرورش دهیم
      </h2>
      <h2 class="lg:text-2xl text-2xl text-darkBlue text-right self-end">
        مدرسان اطلس
      </h2>
      <h2 class="text-lg text-right self-end text-gray-500">
        جوان، پرانرژی، خلاق و مجرب
      </h2>
      <div class="flex flex-col self-end justify-end space-y-4 text-gray-500">
        <h2
          class="lg:text-2xl text-2xl text-darkBlue lg:text-right text-right lg:self-end"
        >
          نحوه جذب مدرسان
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> مراجعه حضوری و تکمیل فرم استخدام </span> <span>.1</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> بررسی فرم و دعوت به مصاحبه </span> <span>.2</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> مصاحبه حضوری و ارائه رزومه </span> <span>.3</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> ارائه نمونه تدریس برای ورود به دوره های آموزشی </span>
          <span>.4</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> شرکت در دوره ی های روانشناسی منظومه اطلس </span>
          <span>.5</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> حضور در دوره های آموزشی مدرسان </span> <span>.6</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> کسب رتبه مطلوب در آزمون عملی مدرسین </span> <span>.7</span>
        </h2>
        <h2 class="text-lg text-right self-end flex items-start space-x-3">
          <span> عقد قرارداد و استخدام </span> <span>.8</span>
        </h2>
      </div>
    </div> -->
    <div
      class="w-screen h-full space-y-10 lg:space-y-6 flex flex-col items-center justify-around p-10 lg:p-20"
    >
      <h1
        class="lg:text-2xl thirdTrig text-2xl text-darkBlue border-b-8 border-mainYellow pb-1 rounded-md text-center"
      >
        کتب آموزشی پیشنهادی اطلس
      </h1>
      <div
        class="h-full w-full flex items-center justify-center space-x-0 space-y-12 lg:space-y-0 lg:flex-row flex-col lg:space-x-16"
      >
        <NuxtLink class="third" to="/articles">
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/Learning.webp"
              class="w-36 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">کتاب های اطلس</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/videoPlayer">
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/book3.webp"
              class="w-44 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">کتاب های آیلتس</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/schedule">
          <div
            class="w-64 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/book2.webp"
              class="w-full object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">کتاب های داستان</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/exam">
          <div
            class="w-64 h-64 Card border-4 border-dashed hover:border-mainRed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="../../assets/images/book1.webp"
              class="w-full object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              ref="Blue"
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md px-3 text-center text-mainWhite">
                کتاب های دبستان
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="w-screen h-full space-y-10 lg:space-y-6 flex flex-col items-center justify-around p-10 lg:p-20"
    >
      <h1
        class="lg:text-2xl thirdTrig text-2xl text-darkBlue border-b-8 border-mainYellow pb-1 rounded-md text-center"
      >
        گالری تصاویر دبستان اطلس
      </h1>
      <div
        class="h-full w-full grid place-items-center mt-12 lg-mt-0 lg:grid-cols-3 grid-cols-1 gap-8"
      >
        <NuxtLink class="third" to="/articles">
          <div
            class="lg:w-96 w-72 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="@/assets/images/Grades.webp"
              class="w-52 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">تصاویر سال 1403</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/articles">
          <div
            class="lg:w-96 w-72 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="@/assets/images/Grades.webp"
              class="w-52 bgmain object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">جشن نوروز</h2>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="third" to="/articles">
          <div
            class="lg:w-96 w-72 h-64 Card transition border-4 hover:border-mainRed border-dashed ease-out duration-300 border-mainBlue bg-mainWhite relative cursor-pointer flex items-center justify-center rounded-md p-6"
          >
            <img
              src="@/assets/images/Grades.webp"
              class="w-52 object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
            <div
              class="absolute w-44 rounded-md flex items-center justify-center bottom-0 h-10 top-56 Blue bg-mainBlue"
            >
              <h2 class="text-md text-mainWhite">روز 22 بهمن</h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink to="/news">
        <button
          class="px-5 py-2 lg:my-10 text-md items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-mainBlue hover:text-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مشاهده اخبار بیشتر</span>
          <PhArticle :size="20" weight="fill" />
        </button>
      </NuxtLink>
    </div>
    <div
      class="w-full h-full lg:mb-12 mb-12 lg:h-full mt-5 mb px-14 lg:px-44 flex flex-col items-center justify-start space-y-10"
    >
      <div
        class="w-screen flex bg-mainBlue lg:px-60 p-6 rounded-md items-center lg:flex-row flex-col-reverse justify-end"
      >
        <Skeleton
          v-if="loading"
          height="3rem"
          width="22rem"
          class="mb-2"
        ></Skeleton>

        <h2
          v-if="!loading"
          class="text-lg lg:text-2xl bg-mainBlue rounded-lg text-mainWhite flex items-center space-x-2"
        >
          <span>آخرین مقالات</span>
          <PhArticle />
        </h2>
      </div>
      <div v-show="loading" class="flex justify-center align-center">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 place-items-center">
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
          <Skeleton width="18rem" height="17rem"></Skeleton>
        </div>
      </div>
      <div class="h-full grid lg:grid-cols-4 grid-cols-1 gap-y-8 w-full">
        <div
          v-if="!articles.length && !loading"
          class="flex justify-center items-center"
        >
          <h1
            class="text-2xl text-mainBlue p-4 rounded-md border-mainYellow border-4 border-dashed"
          >
            مقاله ای برای نمایش وجود ندارد
          </h1>
        </div>
        <div
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="flex w-64 h-full flex-col items-end space-y-6 bg-white"
        >
          <div
            class="w-64 h-64 Card transition border border-transparent border-b-mainRed border-b-8 bg-white ease-in duration-100 hover:border-mainBlue relative cursor-pointer flex items-center justify-center shadow-transparent rounded-sm"
          >
            <ProgressSpinner
              v-show="imageLoading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
            <ArticleImage
              v-if="!imageLoading"
              :articleId="article.ArticleImage"
              alt=""
            />
          </div>
          <h2
            class="text-lg cursor-pointer duration-200 transition ease-in-out hover:text-blue-600 text-darkBlue leading-snug text-right"
          >
            {{ article.title }}
          </h2>
          <h3 class="text-sm text-gray-400 text-right">
            {{ article.first_header }}
          </h3>
          <NuxtLink :to="'articledetail/' + article.id">
            <button
              class="px-7 w-full py-1 lg:my-0 text-sm border-2 items-center border-mainYellow active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
            >
              <PhArticle :size="29" />
              <span> ادامه ی مقاله </span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <img
      class="h-44 w-full transform rotate-180 my-10"
      src="../../assets/images/WaveDivide.webp"
      alt=""
    />
    <div
      class="w-full mb-20 h-auto lg:h-screen flex lg:flex-row flex-col-reverse items-center justify-around lg:px-52 space-x-10 lg:py-14"
    >
      <div class="w-1/2 flex flex-col items-end space-y-4 h-full">
        <h2
          class="lg:text-lg p-2 text-2xl text-mainWhite border-r-8 bg-mainBlue bg-opacity-40 border-mainBlue pb-1 rounded-md text-center"
        >
          تماس با ما
        </h2>
        <h2 class="text-right text-darkBlue text-2xl font-bold">
          مراجعه حضوری به واحدهای منظومه فرهنگی و آموزشی اطلس
        </h2>
        <Accordion dir="rtl" :activeIndex="0">
          <AccordionTab
            v-for="tab in tabs"
            :key="tab.title"
            :header="tab.title"
          >
            <p class="m-0">{{ tab.content }}</p>
          </AccordionTab>
        </Accordion>

        <NuxtLink to="/contactUs">
          <button
            class="px-3 py-1 border-2 items-center border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>تماس با ما</span>
            <PhTranslate :size="20" weight="fill" />
          </button>
        </NuxtLink>
      </div>
      <div class="w-1/2 flex items-center justify-center h-dialog py-10">
        <img
          src="../../assets/images/mainPageContact.webp"
          class="h-full object-contain"
          alt=""
        />
      </div>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import {
  PhStudent,
  PhIdentificationCard,
  PhExam,
  PhMedalMilitary,
  PhTranslate,
  PhBooks,
  PhBackpack,
  PhCaretRight,
  PhCaretLeft,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
const tabs = ref([
  {
    title: "واحد آموزشگاه",
    content:
      "شماره تلفن : 33661029 - 33661021 آدرس : خیابان سعدی - خیابان باباطاهر - پلاک 88",
  },
  {
    title: "سوابق کاری و تحصیلی مدیریت و تیم آموزشی مدرسه چگونه است؟",
    content:
      "در بخش درباره ما و صفحه کادر اجرایی و آموزشی، مختصری از سوابق و اطلاعات و عکس همکاران سال جاری درج شده است. البته تاکید می شود اگر چه برای مدرسه حفظ معلمان توانمند مهم است اما روی اشخاص تعهد نمی دهد بلکه روی کیفیت و اصول کار تاکید داریم و متعهد به آن هستیم. به تجربه دیده ایم که ممکن است معلمی برای دوره بعدی به دلایل مختلف امکان تداوم همکاری نداشته باشد. اما حفظ معلمان توانمد را ارزش و اعتبار می دانیم .",
  },
  {
    title: "تعداد دانش آموزان کلاس چقدراست؟",
    content:
      "براساس ابعاد کلاس ها و توانمندی خوبی که معلمان مدرسه دارند، امکان حضور بین ۱۰ تا۲۰ نفر در هر کلاس فراهم است. کلاس‌ها دارای پنجره و نور و تهویه مناسب هستند .",
  },
  {
    title: "ایمنی وساختمان در چه سطحی است؟",
    content:
      "با توجه به نظارت سازمان نوسازی مدارس و سازمان آتش‌نشانی و آموزش و پرورش، تلاش شده حداکثر موارد توصیه شده، در نظر گرفته شود و تمامی موارد برای ایمنی بهتر رعایت شود.",
  },

  {
    title: "آیا  کمک معلم یا مربی اضافی در کنار معلم کار میکنند؟",
    content:
      "با توجه به اینکه دانش‌آموزان این دوره از دوره کودکی گذشته‌اند و کم کم باید به استقلال برسند، ضرورتی برای حضور معلمان و مربیان کمکی دیده نمی‌شود.البته در کلاس‌هایی که نیاز به حضور کمک معلم باشد، شورای مدرسه تصمیم گیری موردی خواهد کرد.",
  },
  {
    title: "محتوای برنامه مدرسه چیست؟",
    content:
      "محتوای برنامه درسی دانش‌آموزان بعد از کارشناسی و لحاظ کردن نیازهای دانش‌آموزان و خواست والدین به صورت مشترک تدوین و به اجرا در آمده .تلاش همیشگی ما این است که ساعات مصوب آموزش و پرورش را با کیفیت بالاتر برگزار کنیم و نسبت به تعمیق و تثبیت یادگیری توجه ویژه داشته باشیم.ساعات مصوب ۲۵ زنگ آموزشی در هفته، شامل دروس ریاضی، علوم، مجموعه ادبیات فارسی، هدیه‌ها، قرآن، اجتماعی ( بعضی پایه ها)، تربیت بدنی، هنر است که با حضور و همکاری معلمانی توانمند، نتیجه آموزش این دروس بسیار رضایتبخش بوده است.",
  },
  {
    title: "اردوها علمی و تفریحی در برنامه سالانه وجود دارد؟",
    content:
      "اصولا اردوها و بازدیدهای علمی فرصتی برای تجربه آموزه‌ها و تثبیت و تعمیق یادگیری هستند فلذا در نظر ما ارزشمند هستند و برای هر پایه تحصیلی  اردوی علمی یا تفریحی طراحی و اجرا می کنیم . ",
  },
  {
    title: "برای کلاس تربیت بدنی چه اهداف و برنامه‌هایی دارید؟",
    content: "Content 2",
  },
  {
    title: "برای زنگ هنر چه مواردی در نظر میگیرید؟",
    content:
      "تلاش ما همواره این بوده که محصول کلاس‌هاعلاوه بر ایجاد نشاط، اصلاح یا ایجاد نگرش و فرهنگ صحیح نیز در نظر گرفته شود. با تاکید بر عبارت «تربیت بدنی» تلاش داریم همکاران ما همواره توجهشان بر ضرورت های آموزشی در حوزه ورزشی برای این سن جلب شود و کلاس هایی را طراحی کنند که علاوه بر ایجاد نشاط، به ارتقای توانمندی‌های حرکتی و رشد عضلات ریز و درشت و ارتباط لازم عصب و عضله و همچنین چالاکی در آن مد نظر باشد. همچنین در حد توان و بضاعت به فرهنگ پهلوانی و کار گروهی و همچنین ارتقاع سطح دانش در مورد رشته‌های ورزشی پرداخته خواهد شد.با توجه به محدودیت‌های فضاهای مدارس، برنامه کاری اصلی برای همه پایه یکی بوده و در کنار آن در حد محدود به ورزش‌های دیگر نیز پرداخته می‌شود. اما برای عزیزانی که ورزش‌هایی را تخصصی پیگیری می‌کرده‌اند، فرصت های شرکت در مسابقات منطقه فراهم می‌کنیم و یا در مدارس به صورت اتفاق جشنواره‌ای به آن می‌پردازیم.",
  },
  {
    title: "واحد دبستان دخترانه",
    content:
      "هنر یعنی بالا بردن خلاقیت ما با استفاده از نیروهای مجرب و کار آزموده و با استفاده از تکنیک های جدید در بحث بالا بردن ذهن خلاق با استفاده از کتاب داستان،شعر،تماشای کارتون و ... به کشیدن نقاشی میپردازیم و از داستان نویسی و شعر گفتن در کارها استفاده میکنیم،هدف اصلی ما گام به گام نبودن هنر و لذت بردن کودکان از زنگ هنر و کاربردی کردن کارهای انجام شده و نمایشگاه گذاشتن از آثار هنرمندان مدرسه و حتی به فروش رساند این آثار است.",
  },
]);
const events = ref([
  {
    status:
      "کسب نتایج مطلوب در کنکور سراسری، امتحانات نهایی ، المپیادها و مسابقات علمی",
  },
  {
    status:
      "پذیرش دانش آموز از پـایه پـیش دبـستـانی تا پـیش دانشـگاهی در ٤ واحـد آموزشی",
  },
  {
    status:
      "پذیرش از طریق آزمـون ورودی و مصاحبــه های علمی، فرهنگی و روانشناسی",
  },
]);
const loading = ref(true);
const articles = ref(false);
const imageLoading = ref(true);
const getArticles = async () => {
  const { data } = await $fetch("http://localhost:3333/articles", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.articles);
      articles.value = response.articles;
      loading.value = false;

      getArticleImage();
    })
    .catch(function (error) {
      console.error(error);
      imageLoading.value = false;
    });
};

function formatNumber(value, decimals) {
  let s = (+value).toLocaleString("en-US").split(".");
  return decimals
    ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
    : s[0];
}
onMounted(() => {
  $gsap.to(".LoadingDiv", {
    display: "none",
    delay: 0.9,
  });
  const items = document.querySelectorAll(".counts");
  $gsap.from(items, {
    textContent: "0",
    duration: 2,
    ease: "power1.inOut",
    modifiers: {
      textContent: (value) => formatNumber(value, 0),
    },
    scrollTrigger: {
      trigger: ".trigger",
      start: "100px 80%",
      end: "+=100",
      toggleActions: "play none none  none",
    },
  });
  const Groups = document.querySelectorAll(".Groups");

  $gsap.from(Groups, {
    duration: 0.7,
    ease: "power1.inOut",
    opacity: 0,
    x: 100,
    stagger: 0.2,

    scrollTrigger: {
      trigger: ".trigger",
      start: "100px 80%",
      end: "+=100",
      toggleActions: "play none none none",
    },
  });
  $gsap.from(".firstPhase", {
    duration: 0.6,
    ease: "power1.inOut",
    opacity: 0,
    x: 150,
    stagger: 0.3,

    scrollTrigger: {
      trigger: ".firstPhaseTrigger",
      start: "100px 80%",
      end: "+=100",
      toggleActions: "play none none none",
    },
  });
  $gsap.from(".secondPhase", {
    duration: 0.9,
    ease: "power1.inOut",
    opacity: 0,
    y: 100,
    stagger: 0.3,

    scrollTrigger: {
      trigger: ".secondPhaseTrigger",
      start: "100px 80%",
      end: "+=100",
      toggleActions: "play none none none",
    },
  });
  $gsap.from(".third", {
    duration: 0.9,
    ease: "power1.inOut",
    opacity: 0,
    y: 100,
    stagger: 0.3,

    scrollTrigger: {
      trigger: ".thirdTrig",
      start: "100px 80%",
      end: "+=100",
      toggleActions: "play none none none",
    },
  });
  // $gsap.from(items, {
  //   textContent: 0,
  //   duration: 3,
  //   opacity: 0,
  //   ease: "power1.in",
  //   scrollTrigger: {
  //     trigger: ".trigger",
  //     start: "100px 80%",
  //     end: "+=100",
  //     toggleActions: "play none none reverse",
  //     markers: true,
  //   },
  //   snap: { textContent: 1 },
  //   onUpdate: function () {
  //     this.targets()[0].innerHTML = numberWithCommas(
  //       Math.ceil(this.targets()[0].textContent)
  //     );
  //   },
  //   stagger: {
  //     each: 0.1,
  //   },
  // });
  getArticles();
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});

import { PhArticle } from "@phosphor-icons/vue";
import { ref } from "vue";
// const { $gsap } = useNuxtApp();
// const TM = $gsap.timeline();
// const startAnimation = () => {
//   TM.to(".Card", { y: 200, duration: 1 });
// };
// const resetAnimation = () => {
//   TM.to(".Card", { y: 0, duration: 1 });
// };

const { data: exam } = await useFetch("http://localhost:3333/exam/highschool");
console.log(exam);
</script>
<style>
.p-timeline-event-opposite {
  display: none;
}
.p-timeline .p-timeline-event-marker {
  background-color: blue;
}
.p-accordion
  .p-accordion-header
  .p-accordion-header-link
  .p-accordion-toggle-icon {
  display: none;
}
.p-accordion .p-accordion-header,
.p-accordion-header-link,
.p-accordion .p-accordion-content {
  text-align: right;
}
</style>
