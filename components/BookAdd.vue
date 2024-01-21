<template>
  <div>
    <div class="w-full h-full flex items-end p-7 lg:p-16 flex-col space-y-10">
      <h2
        class="lg:text-2xl text-2xl text-mainBlue border-b-8 rounded-xl border-mainYellow"
      >
        اضافه کردن کتاب
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-end gap-9"
      >
        <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
          <label class="text-md text-mainBlue" for="title">عنوان کتاب</label>
          <InputText
            id="title"
            v-model="title"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="authur">نام نویسنده</label>
          <InputText
            id="authur"
            v-model="author"
            aria-describedby="username-help"
          />
          <Dropdown
            v-model="selectedCategory"
            :options="category"
            @change="showCode = true"
            optionLabel="name"
            placeholder="دسته بندی"
            class="w-full rounded-lg h-11 lg:col-span-2"
          />
        </div>
        <div class="flex flex-col justify-center items-center space-y-3">
          <label
            for="pdf"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب فایل کتاب </span>
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
            v-show="eventFile"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>

        <div class="flex flex-col justify-center items-center space-y-3">
          <label
            for="bookImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس </span>
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
          <label
            v-show="eventImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>

        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-md text-mainBlue" for="description"
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
          {{ `${minutes} دقیقه و ${seconds} ثانیه ` }}
          <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";
import { PhBook, PhPictureInPicture, PhCheckCircle } from "@phosphor-icons/vue";

// register mainStore
const mainStore = useManagementStore();

const loading = ref(false);
const message = ref(false);
const managementStore = useManagementStore();

const uploadError = ref(false);
const uploadErrorMessage = ref("");

const { stateChange } = storeToRefs(managementStore);
const visible = ref(false);

const eventFile = ref("");
const videos = ref();
const author = ref("");
const title = ref("");
const description = ref("");

const selectedCategory = ref("");

const category = ref([
  { name: "کتاب های غیردرسی", code: "NY" },
  { name: "عمومی", code: "RM" },
  { name: "کتاب های زبان", code: "LDN" },
  { name: "کتاب های درسی", code: "IST" },
]);

const minutes = ref(null);
const seconds = ref(null);

const uploadVideo = async function (event) {
  uploadError.value = false;
  uploadErrorMessage.value = "";
  imageUploadError.value = false;
  uploadImageErrorMessage.value = "";
  loading.value = true;
  const formData = new FormData();

  const uploadTimeSeconds = eventFile.value.size / 100000;
  // Convert upload time to minutes and seconds
  minutes.value = Math.floor(uploadTimeSeconds / 60);
  seconds.value = Math.round(uploadTimeSeconds % 60);
  console.log(`${minutes.value} minutes and ${seconds.value} seconds`);

  const countdown = setInterval(() => {
    // Print the current countdown value
    console.log(
      `${minutes.value} minutes and ${seconds.value} seconds remaining`
    );

    // Decrease the seconds by 1
    seconds.value--;

    // If seconds reach 0, decrease the minutes and reset the seconds to 59
    if (seconds.value < 0) {
      minutes.value--;
      seconds.value = 59;
    }

    // If both minutes and seconds reach 0, stop the countdown
    if (minutes.value === 0 && seconds.value === 0) {
      console.log("Upload complete!");
      clearInterval(countdown);
    }
  }, 1000); // Run the countdown every 1 second

  if (eventFile.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "لطفا فایل کتاب را انتخاب کنید";
  }
  if (title.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "لطفا عنوان کتاب را وارد کنید";
  }
  if (description.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "لطفا توضیحات کتاب را وارد کنید";
  }
  if (selectedCategory.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "لطفا دسته بندی کتاب را انتخاب کنید";
  }

  formData.append("file", eventFile.value);
  formData.append("category", selectedCategory.value.name);
  formData.append("title", title.value);
  formData.append("author", author.value);
  formData.append("description", description.value);
  if (
    eventFile.value !== "" &&
    title.value !== "" &&
    description.value !== "" &&
    selectedCategory.value !== ""
  ) {
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
        if (error.data.statusCode === 403) {
          uploadError.value = true;
          uploadErrorMessage.value = "وارد حساب ادمین شوید";
        }
        if (error.data.statusCode === 422) {
          uploadError.value = true;
          uploadErrorMessage.value = "فایل درست کتاب را انتخاب کنید";
        }
        loading.value = false;
        setTimeout(() => {
          uploadError.value = false;
        }, 3000);
      });
  } else {
    loading.value = false;
  }
};

const eventImage = ref();
const imageAdded = ref(false);
const imageUploadError = ref();
const uploadImageErrorMessage = ref();
const bookId = ref();

watch(eventImage, (ccu, old) => {
  console.log(eventImage.value);
});

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
      uploadImageErrorMessage.value = "فایل عکس کتاب را انتخاب کنید";
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
