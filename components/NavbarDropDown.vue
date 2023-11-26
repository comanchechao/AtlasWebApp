<template>
  <div class="dropdown dropdown-hover">
    <button
      tabindex="0"
      class="px-3 py-1 items-center text-md active:bg-mainBlue active:text-mainWhite bg-mainWhite border-2 border-transparent hover:border-mainBlue text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
    >
      <PhCaretDown :size="20" />

      <span>ارتباط با ما</span>
      <PhArticle :size="20" weight="fill" />
    </button>
    <ul
      tabindex="0"
      class="dropdown-content z-50 text-mainBlue flex items-end justify-end menu p-2 shadow bg-mainWhite rounded-md w-52"
    >
      <li><a>ارتباط با موسسه</a></li>
      <li><a>فرم همکاری</a></li>
    </ul>
  </div>
</template>

<script setup>
import { PhArticle, PhCaretDown } from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
