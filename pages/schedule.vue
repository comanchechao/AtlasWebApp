<template>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-full h-auto lg:h-screen flex items-center flex-col">
      <img
        src="../assets/images/SchoolCalender.webp"
        class="h-carousel object-contain"
        alt=""
      />
      <h2
        class="lg:text-4xl my-5 text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
      >
        برنامه کلاسی اطلس
      </h2>
    </div>
    <div
      class="w-full h-full p-10 flex lg:grid lg:grid-cols-4 lg:place-items-center lg:space-y-0 lg:gap-12 flex-col items-center space-y-12"
    >
      <LazySchedule /> <LazySchedule />
      <LazySchedule />
      <LazySchedule />
      <LazySchedule />
      <LazySchedule />
    </div>
    <LazyFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
