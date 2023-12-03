<template>
  <div class="h-rem26 w-60 p-3 rounded-md flex items-center flex-col">
    <div class="w-full h-3/5 flex items-center justify-center">
      <img
        src="../assets/images/book4.webp"
        class="hw-full object-fill"
        alt=""
      />
    </div>
    <div
      class="w-full h-2/5 flex-col space-y-5 flex items-center justify-center"
    >
      <h2
        class="border-b-4 border-mainRed text-darkBlue text-sm text-right rounded-sm"
      >
        دیکته ی شب کلاس اولی ها
      </h2>
      <button
        class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span>دانلود</span>
        <PhArticle :size="20" weight="fill" />
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
