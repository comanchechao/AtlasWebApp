<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-72 h-32 border-2 border-dashed border-mainBlue rounded-sm pb-3"
  >
    <div
      dir="rtl"
      class="w-full p-2 h-full flex items-center justify-around text-right text-darkBlue"
    >
      <div class="flex w-1/2 flex-col h-full justify-around">
        <h2 class="text-md font-bold">پیش دبستانی</h2>
        <h2 class="text-md">1387/05/04</h2>
        <h2 class="text-md">334243344</h2>
        <h2 class="text-md">0914637564</h2>
      </div>
      <div class="flex w-1/2 flex-col h-full justify-around">
        <h2 class="text-md">
          ناحیه: 1 محله: نیاوران خیابان: نیاوران شماره پلاک: 123
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["book"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();
const loading = ref(false);
const message = ref(false);

const removeBookImage = async function () {
  loading.value = true;
  if (props.book.BooksImages[0]) {
    await $fetch(
      `http://localhost:3333/books/management/bookimageremove/${props.book.BooksImages[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        withCredentials: true,
      }
    )
      .then((response, error) => {
        removeBook();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
  } else {
    removeBook();
  }
};

const removeBook = async function () {
  await $fetch(
    `http://localhost:3333/books/management/bookremove/${props.book.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      withCredentials: true,
    }
  )
    .then((response, error) => {
      loading.value = false;
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 2000);
      managementStore.changeBooksState();
    })
    .catch((error) => {
      console.log(error.data);
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
