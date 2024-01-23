<template>
  <div>
    <div class="w-full h-full flex items-end p-7 lg:p-16 flex-col space-y-10">
      <h2
        class="lg:text-2xl text-2xl text-mainBlue border-b-8 rounded-xl border-mainYellow"
      >
        اضافه کردن ویدیو
      </h2>
      <h2
        dir="rtl"
        class="lg:text-sm text-sm text-mainRed border-2 border-dashed p-1 rounded-md border-mainRed"
      >
        *حجم فایل ها نباید از 15 مگابایت بیشتر باشد.
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-end gap-9"
      >
        <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
          <label class="text-md text-mainBlue" for="title">عنوان ویدیو</label>
          <InputText
            id="title"
            v-model="title"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="username"
            >نام آپلودکننده</label
          >
          <InputText
            id="username"
            v-model="loginUsername"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex-col items-center justify-center space-y-3">
          <label
            for="image"
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
              }
            "
            type="file"
            id="image"
            class="hidden"
          />
          <label
            v-show="eventImage !== ''"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
            label="Show"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle class=" " :size="25" weight="fill" />
          </label>
        </div>
        <div class="flex items-end flex-col space-y-1">
          <label class="text-md text-mainBlue" for="username">دسته بندی</label>

          <Dropdown
            v-model="selectedCategory"
            :options="category"
            @change="showCode = true"
            optionLabel="name"
            placeholder="دسته بندی"
            class="rounded-lg w-48 h-14"
          />
        </div>
        <div
          class="flex-col items-center justify-center lg:col-span-2 space-y-3"
        >
          <label
            for="video"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب ویدیو </span>
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
            v-show="eventFile !== ''"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
            label="Show"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle class=" " :size="25" weight="fill" />
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
        <span class="text-xl">{{ uploadErrorMessage }}</span>
      </Message>
      <Message class="w-full" v-show="message" severity="success">
        <span class="text-xl">ویدیو اضافه شد</span>
      </Message>
      <Message class="w-full" v-show="imageUploadError" severity="error">
        <span class="text-xl">{{ uploadImageErrorMessage }}</span>
      </Message>
      <Message class="w-full" v-show="imageAdded" severity="success">
        <span class="text-xl">عکس اضافه شد</span>
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
        <div v-show="loading" class="card w-full h-10 px-24">
          <div
            class="flex text-mainBlue items-end justify-end space-x-2 w-full text-opacity-70"
          >
            <span dir="rtl">{{ `${seconds} ثانیه ` }}</span> <span>و</span>
            <span dir="rtl"> {{ `${minutes} دقیقه` }}</span>
          </div>
          <ProgressBar
            mode="indeterminate"
            style="height: 6px  width:24px"
          ></ProgressBar>
        </div>
        <div>
          <Message
            class="space-x-4 flex items-center justify-center"
            severity="info"
            v-show="imageUploadLoading"
          >
            <span class="text-right mx-3"> درحال بارگذاری عکس ها</span>
            <ProgressSpinner
              style="width: 20px; height: 20px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </Message>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhVideo,
  PhPictureInPicture,
  PhPlus,
  PhCheckCircle,
} from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";

const loading = ref(false);
const message = ref(false);
const managementStore = useManagementStore();

const uploadError = ref(false);
const uploadErrorMessage = ref("");

const { stateChange } = storeToRefs(managementStore);
const visible = ref(false);

const eventFile = ref("");
const videos = ref();
const title = ref("");
const description = ref("");

const minutes = ref("");
const seconds = ref("");

const selectedCategory = ref("");

const eventImage = ref("");
const imageAdded = ref(false);
const imageUploadError = ref();
const uploadImageErrorMessage = ref();
const imageUploadLoading = ref(false);
const videoId = ref();

const category = ref([
  { name: "مدرسه", code: "school" },
  { name: "آموزشگاه", code: "atlas" },
  { name: "خلاقیت", code: "creativity" },
]);

const uploadVideo = async function (event) {
  minutes.value = "";
  seconds.value = "";
  uploadError.value = false;
  uploadErrorMessage.value = "";
  loading.value = true;
  const formData = new FormData();

  const uploadTimeSeconds = eventFile.value.size / 50000;
  // Convert upload time to minutes and seconds
  minutes.value = Math.floor(uploadTimeSeconds / 60);
  seconds.value = Math.round(uploadTimeSeconds % 60);
  console.log(`${minutes.value} minutes and ${seconds.value} seconds`);

  if (minutes.value !== "") {
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
      if (minutes.value < 0) {
        console.log("Upload complete!");
        minutes.value = "لطفا صبر کنید ....";
        seconds.value = "";
        clearInterval(countdown);
      }
    }, 1000); // Run the countdown every 1 second
  }
  if (title.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "عنوان ویدیو را انتخاب کنید";
  }
  if (selectedCategory.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "دسته بندی ویدیو را انتخاب کنید";
  }
  if (eventFile.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "فایل ویدیو را انتخاب کنید";
  }
  if (eventImage.value === "") {
    uploadError.value = true;
    uploadErrorMessage.value = "عکس ویدیو را انتخاب کنید";
  }
  formData.append("file", eventFile.value);
  formData.append("title", title.value);
  formData.append("category", selectedCategory.value.code);
  formData.append("description", description.value);
  console.log(eventFile.value);
  if (
    eventFile.value !== "" &&
    title.value !== "" &&
    selectedCategory.value !== "" &&
    eventImage.value !== ""
  ) {
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
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
        if (error.data) {
          uploadError.value = true;
          if (error.data.statusCode === 422) {
            uploadErrorMessage.value = "لطفا فایل ویدیو را انتخاب کنید";
          }
        }
      });
  } else {
    uploadError.value = true;
  }

  loading.value = false;
};

const uploadImage = async function (event) {
  const formData = new FormData();
  imageUploadLoading.value = true;

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
      imageUploadLoading.value = false;
      setTimeout(() => {
        imageAdded.value = false;
      }, 3000);
    })
    .catch((error) => {
      imageUploadError.value = true;
      imageUploadLoading.value = false;
      if (error.data.statusCode === 422) {
        uploadImageErrorMessage.value = "فایل عکس را انتخاب کنید";
      }
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
