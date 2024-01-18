<template>
  <div>
    <div class="w-full h-full flex items-end flex-col space-y-4">
      <h2
        class="lg:text-2xl text-2xl text-mainBlue border-b-8 pb-1 rounded-md border-mainYellow"
      >
        اضافه کردن تصاویر
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4">
        <div class="flex items-end flex-col space-y-3">
          <label
            for="thirdImage"
            class="px-3 py-1 border-2 cursor-pointer items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> 3 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                thirdImage = event.target.files[0];
              }
            "
            type="file"
            class="hidden"
            id="thirdImage"
          />
          <label
            v-show="thirdImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label
            for="secondImage"
            class="px-3 py-1 border-2 cursor-pointer items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> 2 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                secondImage = event.target.files[0];
              }
            "
            type="file"
            class="hidden"
            id="secondImage"
          />
          <label
            v-show="secondImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label
            for="firstImage"
            class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس 1 </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                firstImage = event.target.files[0];
              }
            "
            type="file"
            class="hidden"
            id="firstImage"
          />
          <label
            v-show="firstImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-end w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="submit()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> اضافه کردن تصاویر </span>
          <PhHouse :size="25" />
        </button>
      </div>
      <Message class="w-full" v-show="addSchduleError" severity="error">
        <span class="text-2xl">{{ errorMessage }}</span>
      </Message>

      <Message class="w-full" v-show="imageUploadError" severity="error">
        <span class="text-2xl">{{ uploadErrorMessage }}</span>
      </Message>
      <Message class="w-full" v-show="imageAdded" severity="success">
        <span class="text-2xl">عکس اول اضافه شد</span>
      </Message>
      <Message class="w-full" v-show="imageTwoAdded" severity="success">
        <span class="text-2xl">عکس دوم اضافه شد</span>
      </Message>
      <Message class="w-full" v-show="imageThreeAdded" severity="success">
        <span class="text-2xl">عکس سوم اضافه شد</span>
      </Message>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhArticle,
  PhCalendar,
  PhHouse,
  PhCheckCircle,
} from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { PhPictureInPicture } from "@phosphor-icons/vue";

// assign store

const managementStore = useManagementStore();
const visible = ref(false);

const eventFile = ref(null);

const firstImage = ref(null);
const secondImage = ref(null);
const thirdImage = ref(null);

const imageTwoAdded = ref(false);
const imageThreeAdded = ref(false);

const scheduleId = ref(null);
const addSchduleError = ref(false);
const errorMessage = ref("");
const loading = ref(false);
const message = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");
const imageAdded = ref(false);
const scheduleTitle = ref("");

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.append("file", firstImage.value);
  await $fetch("http://localhost:3333/management/firstimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      console.log(response);
      imageAdded.value = true;
    })
    .catch((error) => {
      imageUploadError.value = true;
      console.log(error.data.statusCode);
      if (error.data.statusCode === 422) {
        uploadErrorMessage.value = "فایل انتخاب نشده";
      }
      setTimeout(() => {
        imageUploadError.value = false;
      }, 3000);
    });
};
const uploadImage2 = async function (event) {
  const formData = new FormData();

  formData.append("file", secondImage.value);
  await $fetch("http://localhost:3333/management/secondimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      console.log(response);
      imageTwoAdded.value = true;
    })
    .catch((error) => {
      imageUploadError.value = true;
      if (error.data.statusCode === 422) {
        uploadErrorMessage.value = "فایل انتخاب نشده";
      }
      setTimeout(() => {
        imageUploadError.value = false;
      }, 3000);
    });
};
const uploadImage3 = async function (event) {
  const formData = new FormData();

  formData.append("file", thirdImage.value);
  await $fetch("http://localhost:3333/management/thirdimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      console.log(response);
      imageThreeAdded.value = true;
    })
    .catch((error) => {
      imageUploadError.value = true;
      if (error.data.statusCode === 422) {
        uploadErrorMessage.value = "فایل انتخاب نشده";
      }
      setTimeout(() => {
        imageUploadError.value = false;
      }, 3000);
    });
};
const submit = async function () {
  if (firstImage) {
    uploadImage();
  }
  if (secondImage) {
    uploadImage2();
  }
  if (thirdImage) {
    uploadImage3();
  }
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
