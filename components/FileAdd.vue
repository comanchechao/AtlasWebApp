<template>
  <div>
    <div
      class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
    >
      <h2
        class="lg:text-3xl text-2xl text-mainBlue border-b-8 rounded-md border-mainYellow"
      >
        اضافه کردن فایل
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-4"
      >
        <Dropdown
          :options="regions"
          @change="showCode = true"
          optionLabel="name"
          placeholder="پایه "
          class="w-full rounded-lg h-11 lg:col-span-2"
        /><Dropdown
          v-model="QnA"
          :options="regions"
          @change="showCode = true"
          optionLabel="name"
          placeholder="شماره کلاس"
          class="w-full rounded-lg h-11 lg:col-span-2"
        />

        <Dropdown
          v-model="group"
          :options="category"
          @change="showCode = true"
          optionLabel="name"
          placeholder="دسته بندی"
          class="w-full rounded-lg h-11 lg:col-span-2"
        />

        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="title">عنوان فایل</label>
          <InputText
            id="title"
            v-model="title"
            aria-describedby="username-help"
          />
        </div>

        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="authur"
            >نام آپلود کننده</label
          >
          <InputText
            id="authur"
            v-model="articleAuthur"
            aria-describedby="username-help"
          />
        </div>
        <label
          for="groupFile"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> انتخاب فایل ها</span>
          <PhFile :size="25" />
        </label>
        <input
          @change="
            (event) => {
              eventFile = event.target.files[0];
              console.log(eventFile);
            }
          "
          type="file"
          class="hidden"
          id="groupFile"
        />
        <label
          v-show="eventFile"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
        >
          <span> انتخاب شد </span>
          <PhCheckCircle :size="25" weight="fill" />
        </label>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="username"
            >تاریخ آپلود</label
          >
          <InputMask
            mask="9999/99/99"
            id="username"
            v-model="date"
            aria-describedby="username-help"
          />
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="uploadFile()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> اضافه کردن </span>
          <PhPlus :size="25" />
        </button>
      </div>
      <Message class="w-full" v-show="uploadError" severity="error">
        <span class="text-2xl">{{ uploadErrorMessage }}</span>
      </Message>

      <Message v-show="addError" class="w-full" severity="error">
        <span class="text-2xl">{{ errorMessage }}</span>
      </Message>

      <div v-show="loading" class="card">
        {{ `${minutes} دقیقه و ${seconds} ثانیه ` }}
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
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
      <Message class="w-full" v-show="message" severity="success">
        <span class="text-2xl">مقاله اضافه شد</span>
      </Message>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhFile, PhPictureInPicture, PhPlus } from "@phosphor-icons/vue";
const regions = ref([
  { name: "پیش  دبستان", code: "NY" },
  { name: "پایه اول", code: "RM" },
  { name: "پایه دوم", code: "LDN" },
  { name: "پایه  سوم", code: "IST" },
  { name: "پایه  چهارم", code: "IST" },
  { name: "پایه  پنجم", code: "IST" },
  { name: "پایه  ششم", code: "IST" },
]);
import { useManagementStore } from "../stores/management";

const selectedCategory = ref(null);

const category = ref([
  { name: "آیلتس", code: "eilts" },
  { name: "بزرگسالان", code: "adults" },
  { name: "تافل", code: "toffle" },
  { name: "کودکان", code: "children" },
  { name: "مدرسه", code: "school" },
]);

// regiser main store

const managementStore = useManagementStore();

// defults

const visible = ref(false);
const loading = ref(false);
const message = ref(false);
const addArticleError = ref(false);
const errorMessage = ref("");

const eventFile = ref("");
const title = ref("");
const group = ref("");
const date = ref("");

const minutes = ref("");
const seconds = ref("");

const addError = ref(false);
const uploadErrorMessage = ref("");
const uploadError = ref(false);

const uploadFile = async function (event) {
  addError.value = false;
  errorMessage.value = "";
  uploadError.value = false;
  loading.value = true;

  const uploadTimeSeconds = eventFile.value.size / 1000000;
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
  }, 1000);

  if (title.value === "") {
    addError.value = true;
    errorMessage.value = "عنوان را وارد کنید";
  }
  if (group.value === "") {
    addError.value = true;
    errorMessage.value = "دسته بندی را وارد کنید";
  }

  if (eventFile.value === "") {
    addError.value = true;
    errorMessage.value = "فایل را انتخاب کنید";
  }

  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("title", title.value);
  formData.append("group", group.value.name);
  formData.append("date", date.value);
  if (title.value !== "" && group.value !== "" && eventFile.value !== "") {
    await $fetch("http://localhost:3333/files/management/addfile", {
      method: "POST",
      credentials: "include",
      withCredentials: true,

      body: formData,
    })
      .then((response) => {
        console.log(response);
        managementStore.changeFileState();
        loading.value = false;
        message.value = true;
        setTimeout(() => {
          message.value = false;
        }, 3000);
      })
      .catch((error) => {
        console.log(error.data);
        uploadError.value = true;
        if (error.data.statusCode === 403) {
          uploadErrorMessage.value = "وارد حساب ادمین شوید";
        }
        if (error.data.statusCode === 422) {
          uploadErrorMessage.value = "فایل را انتخاب کنید";
        }
        loading.value = false;
        uploadErrorMessage.value = "مشکلی رخ داد دوباره امتحان کنید";
        setTimeout(() => {
          addError.value = false;
          uploadError.value = false;
        }, 3000);
      });
  } else {
    loading.value = false;
    addError.value = true;
    errorMessage.value = "اتفاقی رخ داد دوباره امتحان کنید";

    setTimeout(() => {
      addError.value = false;
    }, 2000);
  }
  loading.value = false;
};
</script>

<style>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #020225;
}
.p-dropdown .p-dropdown-label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-inputtext {
  text-align: end;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
}
.p-dropdown {
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
  flex-direction: row-reverse;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  background-color: #fbf8ff;
  color: #0a001a;
}

.p-dropdown-panel
  .p-dropdown-items
  .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #0e0e52;
  color: #fbf8ff;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: #f7f7e1;
  color: #0e0e52;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-container .p-inputtext {
  padding: 0;
}
input::placeholder,
textarea::placeholder {
  background-color: #fbf8ff;
  color: #7878bc;
}
</style>
