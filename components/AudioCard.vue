<template>
  <div
    class="h-60 w-96 border-2 border-dashed border-mainBlue p-3 rounded-md flex items-center flex-col"
  >
    <div class="w-full h-3/5 flex items-center justify-center">
      <img
        src="../assets/images/audiobook.webp"
        class="h-full object-contain"
        alt=""
      />
    </div>
    <div class="w-full h-2/5 flex-col flex items-center justify-center">
      <audio controls src="../assets/audio/test.mp3"></audio>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
