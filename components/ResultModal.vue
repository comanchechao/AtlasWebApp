<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="px-12 py-3 lg:my-0 text-xl border-2 items-center border-mainYellow text-md active:bg-mainYellow active:text-white bg-mainYellow hover:bg-white hover:text-darkBlue shadow-md shadow-transparent hover:shadow-mainYellow text-darkBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
    >
      <span> نشان دادن نتایج </span>
      <PhLockKey weight="fill" :size="20" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '40vw', backgroundColor: '#f9f5ff', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div class="w-full h-full flex items-center p-16 flex-col space-y-10">
        <h2
          class="lg:text-6xl text-2xl text-mainBlue border-b-8 border-mainYellow pb-7 rounded-xl"
        >
          نتایج آزمون شما
        </h2>
        <div class="h-full w-full flex flex-col items-center space-y-9">
          <div
            class="flex items-center space-x-4 text-lg lg:text-2xl text-mainBlue"
          >
            <span>امتیاز</span>
            <span class="text-mainBlue">1249</span>
            <span>:</span>
            <h2 class="text-mainBlue">امتیاز شما</h2>
          </div>
          <div
            class="h-72 w-full border-8 flex-col space-y-10 p-3 lg:p-10 flex items-center justify-center border-mainOrange rounded-md border-dashed"
          >
            <h2 class="text-mainBlue text-2xl lg:text-6xl">
              <slot name="result"></slot>
            </h2>
            <h3 class="text-mainBlue text-right lg:text-center">
              اگر مایل هستید فرزندتان با جزئیات بیشتری مورد بررسی قرار گیرد، ما
              در اطلس پک کاملی را اجرا می نماییم
            </h3>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="scss" scoped></style>
