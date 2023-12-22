<template>
  <div class="h-rem26 w-60 p-3 rounded-md flex items-center flex-col">
    <div class="w-full h-3/5 flex items-center justify-center">
      <img :src="bookImage" class="hw-full object-fill" alt="" />
    </div>
    <div
      class="w-full h-2/5 flex-col space-y-5 flex items-center justify-center"
    >
      <h2
        class="border-b-4 border-mainRed text-darkBlue text-sm text-right rounded-sm"
      >
        {{ book.title }}
      </h2>
      <button
        class="px-3 py-1 border-2 border-mainBlue text-md active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span v-if="!loading" @click="dowloadBook">دانلود</span>
        <ProgressSpinner
          v-if="loading"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <PhArticle :size="20" weight="fill" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["book"]);

const loading = ref(false);

const dowloadBook = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/books/file/${props.book.id}`,
    {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
  loading.value = false;
};

const bookImage = ref("");

const getBooksImage = async () => {
  console.log(props.book);
  const { data } = await $fetch(
    `http://localhost:3333/books/image/${props.book.BooksImages[0].id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      bookImage.value = response.image;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getBooksImage();
});
</script>

<style lang="scss" scoped></style>
