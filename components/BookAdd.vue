<template>
  <div>
    <div
      class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
    >
      <h2
        class="lg:text-2xl text-2xl text-mainBlue border-b-8 rounded-xl border-mainYellow"
      >
        اضافه کردن کتاب
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-9"
      >
        <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
          <label class="text-lg text-mainBlue" for="title">عنوان کتاب</label>
          <InputText
            id="title"
            v-model="title"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-lg text-mainBlue" for="authur">نام نویسنده</label>
          <InputText
            id="authur"
            v-model="author"
            aria-describedby="username-help"
          />
          <Dropdown
            :options="category"
            @change="showCode = true"
            optionLabel="name"
            placeholder="دسته بندی"
            class="w-full rounded-lg h-11 lg:col-span-2"
          />
        </div>
        <label
          for="pdf"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> آپلود فایل کتاب </span>
          <PhBook :size="25" />
        </label>

        <input
          @change="
            (event) => {
              eventFile = event.target.files[0];
            }
          "
          type="file"
          id="pdf"
          class="hidden"
        />

        <label
          for="bookImage"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> آپلود عکس </span>
          <PhPictureInPicture :size="25" />
        </label>
        <input
          @change="
            (event) => {
              eventImage = event.target.files[0];
              console.log(eventImage);
            }
          "
          type="file"
          class="hidden"
          id="bookImage"
        />

        <div class="flex items-end col-span-2 flex-col space-y-4">
          <label class="text-lg text-mainBlue" for="description"
            >توضیحات اضافه
          </label>
          <Textarea
            id="description"
            class="w-full text-right text-2xl py-3"
            autoResize
            v-model="description"
            rows="9"
            cols="90"
          />
        </div>
      </div>
      <Message class="w-full" v-show="uploadError" severity="error">
        <span class="text-2xl">{{ uploadErrorMessage }}</span>
      </Message>
      <Message class="w-full" v-show="message" severity="success">
        <span class="text-2xl">کتاب اضافه شد</span>
      </Message>
      <Message class="w-full" v-show="imageUploadError" severity="error">
        <span class="text-2xl">{{ uploadImageErrorMessage }}</span>
      </Message>
      <Message class="w-full" v-show="imageAdded" severity="success">
        <span class="text-2xl">عکس اضافه شد</span>
      </Message>

      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          v-show="!loading"
          label="Show"
          @click="uploadVideo()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> اضافه کردن کتاب </span>
          <PhBook :size="25" />
        </button>
        <div v-show="loading" class="card">
          <ProgressSpinner
            style="width: 50px; height: 50px"
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";
import { PhBook, PhPictureInPicture } from "@phosphor-icons/vue";

// register mainStore
const mainStore = useManagementStore();

const loading = ref(false);
const message = ref(false);
const managementStore = useManagementStore();

const uploadError = ref(false);
const uploadErrorMessage = ref("");

const { stateChange } = storeToRefs(managementStore);
const visible = ref(false);

const eventFile = ref(null);
const videos = ref();
const author = ref();
const title = ref("");
const description = ref("");

const uploadVideo = async function (event) {
  loading.value = true;
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("title", title.value);
  formData.append("author", author.value);
  formData.append("description", description.value);
  await $fetch("http://localhost:3333/books/management/addbook", {
    method: "POST",
    credentials: "include",
    withCredentials: true,

    body: formData,
  })
    .then((response) => {
      console.log(response);
      bookId.value = response.book.id;
      loading.value = false;
      uploadImage();
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
      mainStore.changeBooksState();
    })
    .catch((error) => {
      console.log(error.data);
      if (error.data) {
        uploadError.value = true;
        uploadErrorMessage.value = "مشکلی رخ داد دوباره امتحان کنید";
        setTimeout(() => {
          uploadError.value = false;
        }, 3000);
      }
    });
  loading.value = false;
};

const eventImage = ref();
const imageAdded = ref(false);
const imageUploadError = ref();
const uploadImageErrorMessage = ref();
const bookId = ref();

watch(eventImage, (ccu, old) => {
  console.log(eventImage.value);
});

const selectedCategory = ref("");

const category = ref([
  { name: "ایلتس", code: "NY" },
  { name: "عمومی", code: "RM" },
  { name: "کودکانه", code: "LDN" },
  { name: "مخصوص اطلس", code: "IST" },
  { name: "سطح بالا", code: "IST" },
]);

const uploadImage = async function (event) {
  const formData = new FormData();

  console.log(eventImage.value);
  formData.append("file", eventImage.value);
  formData.append("bookId", bookId.value);
  await $fetch("http://localhost:3333/books/management/bookimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      console.log(response);
      imageAdded.value = true;
      setTimeout(() => {
        imageAdded.value = false;
      }, 3000);
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadImageErrorMessage.value = error.data.message;
      setTimeout(() => {
        uploadImageErrorMessage.value = false;
      }, 3000);
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
