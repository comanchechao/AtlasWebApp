<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 p-2 w-full h-auto lg:h-44 border-2 border-mainBlue rounded-sm pb-3"
  >
    <div
      dir="rtl"
      class="w-full lg:p-2 h-full grid grid-cols-2 lg:gap-y-0 gap-y-3 place-items-center justify-items-center text-darkBlue"
    >
      <div class="flex items-center justify-start space-x-10 w-full">
        <h2
          class="lg:text-md text-xs border-b-4 ml-3 border-mainYellow rounded-sm"
        >
          نام و نام خانوادگی
        </h2>
        <h2 class="lg:text-md text-xs">{{ registration.fullname }}</h2>
      </div>
      <div class="flex items-center justify-start space-x-10 w-full">
        <h2
          class="lg:text-md text-xs border-b-4 ml-3 border-mainYellow rounded-sm"
        >
          نوع متقاضی
        </h2>
        <h2 class="lg:text-md text-xs">{{ registration.category }}</h2>
      </div>

      <div class="flex items-center justify-start space-x-10 w-full">
        <h2
          class="lg:text-md text-xs border-b-4 ml-3 border-mainYellow rounded-sm"
        >
          شماره ثابت
        </h2>
        <h2 class="lg:text-md text-xs">{{ registration.line_number }}</h2>
      </div>
      <div class="flex items-center justify-start space-x-10 w-full">
        <h2
          class="lg:text-md text-xs border-b-4 ml-3 border-mainYellow rounded-sm"
        >
          شماره همراه
        </h2>
        <h2 class="lg:text-md text-xs">{{ registration.phone_number }}</h2>
      </div>

      <div class="flex items-center justify-start space-x-10 w-full">
        <h2
          class="lg:text-md text-xs border-b-4 ml-3 border-mainYellow rounded-sm"
        >
          تاریخ تولد
        </h2>
        <h2 class="lg:text-md text-xs">{{ registration.birth_date }}</h2>
      </div>
      <div class="flex col-span-2 items-center justify-start space-x-10 w-full">
        <h2
          class="lg:text-md text-xs border-b-4 ml-3 border-mainYellow rounded-sm"
        >
          آدرس منزل
        </h2>
        <h2 class="lg:text-md text-xs">
          {{ registration.address }}
        </h2>
      </div>
      <!-- <div class="flex col-span-2 items-center justify-start space-x-10 w-full">
        <button
          class="px-3 py-1 border-2 items-center border-mainBlue text-sm active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue shadow-md shadow-transparent hover:shadow-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> دانلود رزومه </span>
          <PhFile :size="20" weight="fill" />
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["registration"]);
import { ref, onMounted } from "vue";
import { PhFile } from "@phosphor-icons/vue";
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
