<template>
  <div>
    <div class="w-full h-full flex items-end p-7 lg:p-10 flex-col space-y-4">
      <h2
        class="lg:text-xl text-2xl text-mainBlue border-b-8 rounded-sm border-mainYellow"
      >
        اضافه کردن شهریه
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-end gap-4"
      >
        <div class="flex lg:col-span-2 items-end flex-col space-y-3">
          <div class="flex items-end flex-col space-y-1">
            <label class="text-md text-mainBlue" for="username"
              >دسته بندی</label
            >

            <Dropdown
              v-model="selectedCategory"
              :options="category"
              @change="showCode = true"
              optionLabel="name"
              placeholder="دسته بندی"
              class="rounded-lg w-48 h-14"
            />
          </div>
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue">آپلود تصویر شهریه</label>
          <label
            for="scheduleImage"
            class="px-3 py-1 border-2 cursor-pointer items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> 2 انتخاب عکس برنامه </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile = event.target.files[0];
              }
            "
            type="file"
            class="hidden"
            id="scheduleImage"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue">تصویر برنامه</label>
          <label
            for="scheduleImage"
            class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس برنامه </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile = event.target.files[0];
              }
            "
            type="file"
            class="hidden"
            id="scheduleImage"
          />
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="addSchedule()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> اضافه کردن برنامه </span>
          <PhCalendar :size="25" />
        </button>
      </div>
      <Message class="w-full" v-show="addSchduleError" severity="error">
        <span class="text-2xl">{{ errorMessage }}</span>
      </Message>
      <Message class="w-full" v-show="message" severity="success">
        <span class="text-2xl">برنامه اضافه شد</span>
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
import { PhArticle, PhCalendar } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";
import { PhPictureInPicture } from "@phosphor-icons/vue";

// assign store

const managementStore = useManagementStore();
const visible = ref(false);

const eventFile = ref(null);

const scheduleId = ref(null);
const addSchduleError = ref(false);
const errorMessage = ref("");
const loading = ref(false);
const message = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");
const imageAdded = ref(false);
const scheduleTitle = ref("");

const addSchedule = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    title: scheduleTitle.value,
  });

  await $fetch("http://localhost:3333/management/addschedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
    body: data,
  })
    .then((response, error) => {
      message.value = true;
      console.log(response);
      scheduleId.value = response.schedule.id;
      if (response.schedule) {
        uploadImage();
        managementStore.changeState();
      } else {
        addSchduleError.value = true;
        errorMessage.value = "مشکلی رخ داد لطفا دوباره امتحان کنید";
      }
      setTimeout(() => {
        message.value = false;
      }, 3000);
    })
    .catch((error) => {
      addSchduleError.value = true;
      errorMessage.value = error.data.message;
      console.log(error.data);

      setTimeout(() => {
        addSchduleError.value = false;
      }, 5000);
    });
  loading.value = false;
};

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("scheduleId", scheduleId.value);
  console.log(scheduleId.value);
  console.log(eventFile.value);
  await $fetch("http://localhost:3333/management/scheduleimage", {
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
