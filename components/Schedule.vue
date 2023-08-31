<template>
  <div class="card flex justify-center">
    <div
      @click="visible = true"
      class="w-72 cursor-pointer flex flex-col items-center justify-between pt-5 rounded-md h-72 bg-white shadow-lg shadow-mainYellow"
    >
      <h2
        class="lg:text-4xl text-2xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
      >
        برنامه کلاسی
      </h2>
      <div class="flex items-center space-x-2">
        <h3 class="text-darkBlue text-xl font-bol lg:text-2xl">1402/05/2</h3>
        <span> : </span>
        <h3 class="text-darkBlue text-xl lg:text-2xl">تاریخ</h3>
      </div>
      <div class="flex items-center space-x-2">
        <h3 class="text-darkBlue text-xl font-bol lg:text-2xl">دوم دوازده</h3>
        <span> : </span>
        <h3 class="text-darkBlue text-xl lg:text-2xl">کلاس</h3>
      </div>
      <div class="h-24 w-full bg-mainBlue flex items-center justify-center">
        <h1 class="text-3xl lg:text-3xl text-mainWhite">کلیک کنید</h1>
      </div>
    </div>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '40vw', backgroundColor: '#f9f5ff', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex items-center p-4 lg:p-3 flex-col space-y-4"
      >
        <h2
          class="lg:text-4xl text-3xl font-bold text-darkBlue border-b-8 pb-4 rounded-xl border-mainYellow"
        >
          برنامه کلاسی
        </h2>
        <div class="flex items-center space-x-2">
          <h3 class="text-darkBlue text-xl font-bol lg:text-2xl">1402/05/2</h3>
          <span> : </span>
          <h3 class="text-darkBlue text-xl lg:text-2xl">تاریخ</h3>
        </div>
        <div class="flex items-center space-x-2">
          <h3 class="text-darkBlue text-xl font-bol lg:text-2xl">دوم دوازده</h3>
          <span> : </span>
          <h3 class="text-darkBlue text-xl lg:text-2xl">کلاس</h3>
        </div>
        <h2 class="lg:text-2xl text-xl text-mainBlue">کلاس دوم 12</h2>
        <div class="h-rem22 w-full bg-white shadow-lg shadow-mainBlue"></div>
        <button
          @click="visible = false"
          class="px-4 py-2 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>دانلود برنامه کلاسی</span>
          <PhCalendar :size="20" weight="fill" />
        </button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";

const visible = ref(false);
</script>
<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
