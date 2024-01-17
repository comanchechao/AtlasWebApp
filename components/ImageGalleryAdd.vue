<template>
  <div>
    <div
      class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
    >
      <h2
        class="lg:text-3xl text-2xl text-mainBlue border-b-8 rounded-md border-mainYellow"
      >
        اضافه کردن گالری عکس
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-4"
      >
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="title"
            >عنوان گالری عکس</label
          >
          <InputText
            id="title"
            v-model="galleryTitle"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
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
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="galleryImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
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
            id="galleryImage"
          />
          <label
            v-show="eventFile"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image4"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile4 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image4"
          />
          <label
            v-show="eventFile4"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image3"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile3 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image3"
          />
          <label
            v-show="eventFile3"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image2"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile2 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image2"
          />
          <label
            v-show="eventFile2"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" class="text-black" />
          </label>
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="username"
            >تاریخ آپلود</label
          >
          <InputMask
            mask="9999/99/99"
            id="username"
            v-model="loginUsername"
            aria-describedby="username-help"
          />
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="addArticle()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> اضافه کردن به گالری </span>
          <PhPlus :size="25" />
        </button>
      </div>
      <Message class="w-full" v-show="addArticleError" severity="error">
        <span class="text-2xl">{{ errorMessage }}</span>
      </Message>
      <div v-if="Array.isArray(errorMessage)">
        <Message
          v-for="error in errorMessage"
          :key="error"
          class="w-full"
          v-show="signupError"
          severity="error"
        >
          <span class="text-2xl">{{ error }}</span>
        </Message>
      </div>
      <div v-else>
        <Message
          :key="error"
          class="w-full"
          v-show="signupError"
          severity="error"
        >
          <span class="text-2xl">{{ errorMessage }}</span>
        </Message>
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
import { PhPictureInPicture, PhPlus } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

// asign store

const managementStore = useManagementStore();

// defults

const visible = ref(false);
const loading = ref(false);
const message = ref(false);
const addArticleError = ref(false);
const errorMessage = ref("");

// gallery information

const articleImage = ref(null);

const galleryId = ref(null);

const galleryTitle = ref("");
const eventFile = ref(null);
const eventFile2 = ref(null);
const eventFile3 = ref(null);
const eventFile4 = ref(null);
const selectedCategory = ref(null);

const category = ref([
  { name: "سال های تحصیلی", code: "public" },
  { name: "مناسبت ها", code: "events" },
  { name: "خلاقیت", code: "creativity" },
  { name: "مدرسه", code: "school" },
  { name: "آموزشگاه", code: "institude" },
]);

// add gallery to DB

const addArticle = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    title: galleryTitle.value,
  });

  await $fetch("http://localhost:3333/image-gallery/management/addgallery", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
    body: data,
  })
    .then((response, error) => {
      console.log(response);
      galleryId.value = response.gallery.id;
      if (response.gallery) {
        imageUploadLoading.value = true;
        uploadImage();
        managementStore.changeState();
      }
    })
    .catch((error) => {
      addArticleError.value = true;
      errorMessage.value = error.data.message;
      console.log(error.data);

      setTimeout(() => {
        addArticleError.value = false;
      }, 5000);
    });
  loading.value = false;
};

// uploading image

const imageUploadLoading = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("galleryId", galleryId.value);
  console.log(eventFile.value);
  console.log(galleryId.value);
  await $fetch("http://localhost:3333/image-gallery/management/galleryimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      if (response) {
        imageUploadLoading.value = false;
        managementStore.changeImageGalleryState();
        message.value = true;

        setTimeout(() => {
          message.value = false;
        }, 3000);
      }
    })
    .catch((error) => {
      imageUploadError.value = true;
      loading.value = false;
      uploadErrorMessage.value = error.data.message;
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
