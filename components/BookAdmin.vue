<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 overflow-hidden w-full h-48 lg:h-20 rounded-md border-2 p-3 lg:p-2 border-mainBlue"
  >
    <Message class="w-full absolute" v-if="message" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full absolute" v-show="dltError" severity="error">
      <span class="text-xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full grid grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <div
        class="text-lg flex p-2 border-2 border-dashed cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 20px; height: 20px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <PhTrash
          v-if="!loading"
          @click="removeBookImage()"
          :size="20"
          weight="fill"
          class=""
        />
      </div>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ book.description }}
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ book.category }}
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ book.title }}
      </h2>
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
const dltError = ref(false);
const errorMessage = ref("");

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
        if (error.data.statusCode === 403) {
          dltError.value = true;
          errorMessage.value = "وارد حساب ادمین شوید";
        }
        setTimeout(() => {
          dltError.value = false;
        }, 2000);
      });
  } else {
    removeBook();
  }
};

const removeBook = async function () {
  loading.value = true;
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
      if (error.data.statusCode === 403) {
        dltError.value = true;
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      setTimeout(() => {
        dltError.value = false;
      }, 2000);
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
