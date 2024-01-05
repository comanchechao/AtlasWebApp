<template>
  <div>
    <div
      class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
    >
      <h2
        class="lg:text-2xl text-2xl text-mainBlue border-b-8 rounded-xl border-mainYellow"
      >
        اضافه کردن ویدیو
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-9"
      >
        <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
          <label class="text-lg text-mainBlue" for="title">عنوان ویدیو</label>
          <InputText
            id="title"
            v-model="title"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-lg text-mainBlue" for="username"
            >نام آپلودکننده</label
          >
          <InputText
            id="username"
            v-model="loginUsername"
            aria-describedby="username-help"
          />
        </div>
        <label
          for="video"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>  انتخاب ویدیو </span>
          <PhVideo :size="25" />
        </label>

        <input
          @change="
            (event) => {
              eventFile = event.target.files[0];
            }
          "
          type="file"
          id="video"
          class="hidden"
        />

        <label
          for="image"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>  انتخاب تصاویر </span>
          <PhPictureInPicture :size="25" />
        </label>

        <input
          @change="
            (event) => {
              eventImage = event.target.files[0];
            }
          "
          type="file"
          id="image"
          class="hidden"
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
        <span class="text-2xl">ویدیو اضافه شد</span>
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
          <span> اضافه کردن ویدیو </span>
          <PhPlus :size="25" />
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
import { PhVideo, PhPictureInPicture, PhPlus } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";

const loading = ref(false);
const message = ref(false);
const managementStore = useManagementStore();

const uploadError = ref(false);
const uploadErrorMessage = ref("");

const { stateChange } = storeToRefs(managementStore);
const visible = ref(false);

const eventFile = ref(null);
const videos = ref();
const title = ref("");
const description = ref("");

const uploadVideo = async function (event) {
  loading.value = true;
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("title", title.value);
  formData.append("description", description.value);
  console.log(eventFile.value);
  await $fetch("http://localhost:3333/management/addvideo", {
    method: "POST",
    credentials: "include",
    withCredentials: true,

    body: formData,
  })
    .then((response) => {
      console.log(response);
      videoId.value = response.video.id;
      loading.value = false;
      uploadImage();
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
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
const videoId = ref();

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.append("file", eventImage.value);
  formData.append("videoId", videoId.value);
  await $fetch("http://localhost:3333/management/videoimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      console.log(response);
      imageAdded.value = true;
      managementStore.changeVideoState();
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
