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
          v-model="QnA"
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
        <div class="flex items-end flex-col space-y-3">
          <label class="text-lg text-mainBlue" for="title">عنوان فایل</label>
          <InputText
            id="title"
            v-model="galleryTitle"
            aria-describedby="username-help"
          />
        </div>

        <div class="flex items-end flex-col space-y-3">
          <label class="text-lg text-mainBlue" for="authur"
            >نام آپلود کننده</label
          >
          <InputText
            id="authur"
            v-model="articleAuthur"
            aria-describedby="username-help"
          />
        </div>
        <label
          for="galleryImage"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> آپلود فایل ها</span>
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
          id="galleryImage"
        />
        <div class="flex items-end flex-col space-y-3">
          <label class="text-lg text-mainBlue" for="username"
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
          <span> اضافه کردن </span>
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
//   import { useManagementStore } from "../stores/management";

// asign store

//   const managementStore = useManagementStore();

// defults

const visible = ref(false);
const loading = ref(false);
const message = ref(false);
const addArticleError = ref(false);
const errorMessage = ref("");
// article information

//   const galleryId = ref(null);

//   const galleryTitle = ref("");

//   const articleAuthur = ref("");

//   const eventFile = ref(null);

// add article to DB

//   const addArticle = async function () {
//     loading.value = true;
//     const data = new URLSearchParams({
//       title: galleryTitle.value,
//     });

//     await $fetch("http://localhost:3333/image-gallery/management/addgallery", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       credentials: "include",
//       withCredentials: true,
//       body: data,
//     })
//       .then((response, error) => {
//         console.log(response);
//         galleryId.value = response.gallery.id;
//         if (response.gallery) {
//           imageUploadLoading.value = true;
//           uploadImage();
//           managementStore.changeState();
//         }
//       })
//       .catch((error) => {
//         addArticleError.value = true;
//         errorMessage.value = error.data.message;
//         console.log(error.data);

//         setTimeout(() => {
//           addArticleError.value = false;
//         }, 5000);
//       });
//     loading.value = false;
//   };

// uploading image

//   const imageUploadLoading = ref(false);
//   const imageUploadError = ref(false);
//   const uploadErrorMessage = ref("");

//   const uploadImage = async function (event) {
//     const formData = new FormData();

//     formData.append("file", eventFile.value);
//     formData.append("galleryId", galleryId.value);
//     console.log(eventFile.value);
//     console.log(galleryId.value);
//     await $fetch("http://localhost:3333/image-gallery/management/galleryimage", {
//       method: "POST",
//       credentials: "include",
//       withCredentials: true,
//       body: formData,
//     })
//       .then((response) => {
//         if (response) {
//           imageUploadLoading.value = false;
//           managementStore.changeImageGalleryState();
//           message.value = true;

//           setTimeout(() => {
//             message.value = false;
//           }, 3000);
//         }
//       })
//       .catch((error) => {
//         imageUploadError.value = true;
//         loading.value = false;
//         uploadErrorMessage.value = error.data.message;
//       });
//   };
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
