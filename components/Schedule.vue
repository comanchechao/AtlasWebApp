<template>
  <div class="card flex justify-center">
    <div
      @click="visible = true"
      class="w-72 cursor-pointer border-4 border-mainBlue flex flex-col items-center justify-between rounded-md h-72 bg-white"
    >
      <!-- <h2
        class="lg:text-2xl text-center text-2xl font-bold flex items-center justify-center text-darkBlue bg-mainRed w-full h-14 border-b-8 pb-2 border-mainYellow"
      >
        {{ schedule.title }}
      </h2> -->
      <div class="w-full h-full flex flex-col items-end justify-around px-6">
        <div class="flex items-center space-x-4">
          <h1
            class="text-xl font-bold p-2 rounded-md border-2 border-dashed border-mainRed text-darkBlue"
          >
            {{ schedule.title }}
          </h1>

          <h1 class="text-xl text-darkBlue">کلاس</h1>
        </div>
        <div class="flex items-center space-x-4">
          <h1
            class="text-xl font-bold p-2 rounded-md border-2 border-dashed border-mainRed text-darkBlue"
          >
            1402/05/18
          </h1>

          <h1 class="text-xl text-darkBlue">تاریخ</h1>
        </div>
      </div>
      <div class="h-14 w-full bg-mainBlue flex items-center justify-center">
        <h1 class="text-xl text-mainWhite">کلیک کنید</h1>
      </div>
    </div>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '40vw', backgroundColor: '#f9f5ff', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex items-center p-4 lg:p-3 justify-center flex-col space-y-4"
      >
        <div
          class="w-full h-full flex flex-col items-end justify-around px-6 space-y-4"
        >
          <div class="flex items-center space-x-4">
            <h1
              class="text-xl font-bold p-2 rounded-md border-2 border-dashed border-mainRed text-darkBlue"
            >
              1402/05/18
            </h1>

            <h1 class="text-xl text-darkBlue">تاریخ</h1>
          </div>
        </div>

        <div
          class="h-auto w-full bg-white items-center flex justify-center space-x-6"
        >
          <ProgressSpinner
            v-show="loading"
            style="width: 50px; height: 50px"
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
          <img class="h-44 w-44" v-if="!loading" :src="imageDataURL" alt="" />
        </div>
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
const props = defineProps(["schedule"]);
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";

const imageDataURL = ref(
  `data:image/jpeg;base64,${props.schedule.image_buffer}`
);

const visible = ref(false);
</script>
<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
