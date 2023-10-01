<template>
  <div>
    <div
      @click="visible = true"
      class="w-64 rounded-md cursor-pointer transition text-mainWhite shadow-lg shadow-transparent hover:shadow-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-20 bg-mainBlue flex items-center justify-center"
    >
      <h2 class="text-2xl flex items-center space-x-3">
        <span> اضافه کردن برنامه </span>
        <PhArticle :size="25" weight="fill" />
      </h2>
    </div>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '100vw', backgroundColor: '#f9f5ff', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10 border-4 border-dashed border-darkBlue overflow-y-scroll"
      >
        <h2
          class="lg:text-4xl text-2xl text-mainBlue font-bold border-b-8 pb-3 rounded-xl border-mainYellow"
        >
          اضافه کردن برنامه
        </h2>
        <div
          class="flex justify-center align-center items-center place-items-center justify-items-center gap-4"
        >
          <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
            <label class="text-xl text-mainBlue" for="title"
              >عنوان برنامه</label
            >
            <InputText
              id="title"
              v-model="scheduleTitle"
              aria-describedby="username-help"
            />
          </div>
          <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
            <label class="text-xl text-mainBlue">تصویر برنامه</label>
            <label
              for="scheduleImage"
              class="text-xl bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
            >
              <span> آپلود عکس برنامه </span>
              <PhKeyhole :size="25" />
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
        <div
          class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
        >
          <button
            label="Show"
            @click="addSchedule()"
            class="text-xl bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
          >
            <span> اضافه کردن برنامه </span>
            <PhKeyhole :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

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
