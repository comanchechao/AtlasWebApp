<template>
  <div
    class="border-b-2 border-darkBlue w-full flex flex-col items-end justify-end border-dashed py-7"
  >
    <h1 class="lg:text-3xl text-xl text-mainBlue flex items-start space-x-3">
      <slot name="title"> </slot>
    </h1>
    <div
      class="grid grid-cols-1 grid-flow-col grid-rows-3 place-items-center justify-items-end gap-6 my-7"
    >
      <div
        class="flex items-center space-x-4 border-2 cursor-pointer border-mainBlue border-dashed p-3 rounded-md"
      >
        <slot name="choice1"> </slot>
      </div>
      <div
        class="flex items-center space-x-4 border-2 cursor-pointer border-mainBlue border-dashed p-3 rounded-md"
      >
        <slot name="choice2"> </slot>
      </div>
      <div
        class="flex items-center space-x-4 border-2 cursor-pointer border-mainBlue border-dashed p-3 rounded-md"
      >
        <slot name="choice3"> </slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
