<template>
  <div class="w-full h-full rounded-md overflow-y-scroll lg:px-11 md:px-14">
    <div
      class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-4"
    >
      <h3 class="text-darkBlue text-sm">دانلود</h3>
      <h3 class="text-darkBlue text-sm">نام آپلود کننده</h3>
      <h3 class="text-darkBlue text-sm">تاریخ ایجاد</h3>
      <h3 class="text-darkBlue text-sm">نام فایل</h3>
    </div>

    <div
      class="w-full grid p-2 bg-Indigo-200 grid-cols-4 border-y-4 border-mainWhite place-items-center text-center text-darkBlue"
    >
      <button
        class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span> دانلود فایل </span>
        <PhFile :size="20" weight="fill" />
      </button>
      <h2 class="text-sm">4</h2>
      <h2 class="lg:text-sm text-sm">دوشنبه 19 تیر 1402</h2>

      <h2 class="text-sm">نام خریدار</h2>
    </div>
    <div
      class="w-full grid p-2 bg-Indigo-200 grid-cols-4 border-y-4 border-mainWhite place-items-center text-center text-darkBlue"
    >
      <button
        class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span> دانلود فایل </span>
        <PhFile :size="20" weight="fill" />
      </button>
      <h2 class="text-sm">4</h2>
      <h2 class="lg:text-sm text-sm">دوشنبه 19 تیر 1402</h2>

      <h2 class="text-sm">نام خریدار</h2>
    </div>
    <div
      class="w-full grid p-2 bg-Indigo-200 border-y-4 border-mainWhite grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <button
        class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span> دانلود فایل </span>
        <PhFile :size="20" weight="fill" />
      </button>
      <h2 class="text-sm">4</h2>
      <h2 class="lg:text-sm text-sm">دوشنبه 19 تیر 1402</h2>

      <h2 class="text-sm">نام خریدار</h2>
    </div>
  </div>
</template>

<script setup>
import { PhFile, PhTrash } from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
