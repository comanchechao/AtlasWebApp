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
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-end w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="uploadImage()"
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
        <span class="text-2xl">عکس اضافه شد</span>
      </Message>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhArticle, PhCalendar, PhHouse } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { PhPictureInPicture } from "@phosphor-icons/vue";

// assign store

const managementStore = useManagementStore();
const visible = ref(false);

const eventFile = ref(null);

const firstImage = ref(null);
const secondImage = ref(null);
const thirdImage = ref(null);

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
      uploadImage2();
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
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
      imageAdded.value = true;
      uploadImage3();
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
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
      imageAdded.value = true;
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
      setTimeout(() => {
        imageUploadError.value = false;
      }, 3000);
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
