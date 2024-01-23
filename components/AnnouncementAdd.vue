<template>
  <div>
    <div class="w-full h-full flex items-end p-7 lg:p-10 flex-col space-y-4">
      <h2
        class="lg:text-2xl text-2xl text-mainBlue border-b-8 pb-1 rounded-md border-mainYellow"
      >
        اضافه کردن افتخار
      </h2>
      <h2
        dir="rtl"
        class="lg:text-sm text-sm text-mainRed border-2 border-dashed p-1 rounded-md border-mainRed"
      >
        *حجم فایل ها نباید از 3 مگابایت بیشتر باشد.
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-end gap-4"
      >
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="title">عنوان افتخار</label>
          <InputText
            id="title"
            v-model="announcementTitle"
            aria-describedby="username-help"
          />
        </div>

        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="title"
            >کسب کننده افتخار</label
          >
          <InputText
            id="title"
            v-model="announcementWinner"
            aria-describedby="username-help"
          />
        </div>
        <div class="h-full lg:col-span-2">
          <button
            label="Show"
            @click="addAnnouncement()"
            class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> اضافه کردن افتخار </span>
            <PhTrophy :size="25" />
          </button>
        </div>
      </div>
      <div>
        <Message
          v-show="errorStatus === 400"
          v-for="error in errorMessage"
          :key="error"
          class="w-full"
          severity="error"
        >
          <span class="text-2xl">{{ error }}</span>
        </Message>
      </div>
      <Message
        class="w-full"
        v-show="addAnnouncementError && errorStatus !== 400"
        severity="error"
      >
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
import { PhArticle, PhTrophy } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

// assign store

const managementStore = useManagementStore();
const visible = ref(false);

const eventFile = ref(null);

const scheduleId = ref(null);
const addAnnouncementError = ref(false);
const errorMessage = ref("");
const loading = ref(false);
const message = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");
const imageAdded = ref(false);
const announcementTitle = ref("");
const announcementWinner = ref("");

const errorStatus = ref("");

const addAnnouncement = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    title: announcementTitle.value,
    winner: announcementWinner.value,
  });

  await $fetch(
    "http://localhost:3333/announcements/management/addannouncements",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      withCredentials: true,
      body: data,
    }
  )
    .then((response, error) => {
      message.value = true;
      console.log(response);

      managementStore.changeAnnouncementsState();

      setTimeout(() => {
        message.value = false;
      }, 3000);
    })
    .catch((error) => {
      if (error.data.statusCode === 403) {
        errorStatus.value = 403;
        addAnnouncementError.value = true;
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      if (error.data.statusCode === 400) {
        errorStatus.value = 400;
        addAnnouncementError.value = true;
        errorMessage.value = error.data.message;
      }
      managementStore.changeAnnouncementsState();
      console.log(error.data);

      setTimeout(() => {
        addAnnouncementError.value = false;
      }, 5000);
    });
  loading.value = false;
};

// const uploadImage = async function (event) {
//   const formData = new FormData();

//   formData.append("file", eventFile.value);
//   formData.append("scheduleId", scheduleId.value);
//   console.log(scheduleId.value);
//   console.log(eventFile.value);
//   await $fetch("http://localhost:3333/management/scheduleimage", {
//     method: "POST",
//     credentials: "include",
//     withCredentials: true,
//     body: formData,
//   })
//     .then((response) => {
//       console.log(response);
//       imageAdded.value = true;
//       setTimeout(() => {
//         imageAdded.value = false;
//       }, 3000);
//     })
//     .catch((error) => {
//       imageUploadError.value = true;
//       uploadErrorMessage.value = error.data.message;
//       setTimeout(() => {
//         imageUploadError.value = false;
//       }, 3000);
//     });
// };
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
