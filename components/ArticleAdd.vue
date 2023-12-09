<template>
  <div>
    <div
      class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
    >
      <h2
        class="lg:text-3xl text-2xl text-mainBlue border-b-8 rounded-md border-mainYellow"
      >
        اضافه کردن مقاله
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-4"
      >
        <div class="flex items-end flex-col space-y-3">
          <label class="text-xl text-mainBlue" for="title">عنوان مقاله</label>
          <InputText
            id="title"
            v-model="articleTitle"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-xl text-mainBlue" for="authur">نام نویسنده</label>
          <InputText
            id="authur"
            v-model="articleAuthur"
            aria-describedby="username-help"
          />
        </div>
        <label
          for="articleImage"
          label="Show"
          class="text-xl cursor-pointer bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:bg-mainBlue hover:text-mainYellow text-darkBlue"
        >
          <span> آپلود عکس </span>
          <PhKeyhole :size="25" />
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
          id="articleImage"
        />
        <div class="flex items-end flex-col space-y-3">
          <label class="text-xl text-mainBlue" for="username"
            >تاریخ مقاله</label
          >
          <InputMask
            mask="9999/99/99"
            id="username"
            v-model="loginUsername"
            aria-describedby="username-help"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 lg:place-self-end flex-col space-y-3"
        >
          <label class="text-xl text-mainBlue" for="firstHeader"
            >سر تیتر اول</label
          >
          <InputText
            id="firstHeader"
            v-model="articleFirstHeader"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-xl text-mainBlue" for="firstBody"
            >پاراگراف اول
          </label>
          <Textarea
            id="firstBody"
            class="w-full"
            autoResize
            v-model="articleFirstBody"
            rows="6"
            cols="90"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 lg:place-self-end flex-col space-y-3"
        >
          <label class="text-xl text-mainBlue" for="secondHeader"
            >سر تیتر دوم</label
          >
          <InputText
            id="secondHeader"
            v-model="articleSecondHeader"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-xl text-mainBlue" for="secondBody"
            >پاراگراف دوم
          </label>
          <Textarea
            id="secondBody"
            class="w-full"
            autoResize
            v-model="articleSecondBody"
            rows="6"
            cols="90"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
        >
          <label class="text-xl text-mainBlue" for="thirdHeader"
            >سر تیتر سوم</label
          >
          <InputText
            id="thirdHeader"
            v-model="articleThirdHeader"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-xl text-mainBlue" for="thridBody"
            >پاراگراف سوم
          </label>
          <Textarea
            id="thridBody"
            class="w-full"
            autoResize
            v-model="articleThirdBody"
            rows="6"
            cols="90"
          />
        </div>
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
      <Message class="w-full" v-show="message" severity="success">
        <span class="text-2xl">مقاله اضافه شد</span>
      </Message>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="addArticle()"
          class="text-xl bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
        >
          <span> اضافه کردن مقاله </span>
          <PhKeyhole :size="25" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

// asign store

const managementStore = useManagementStore();

// defults

const visible = ref(false);
const loading = ref(false);
const message = ref(false);
const addArticleError = ref(false);
const errorMessage = ref("");
// article information

const articleImage = ref(null);

const articleId = ref(null);

const articleTitle = ref("");
const articleFirstBody = ref("");
const articleFirstHeader = ref("");
const articleSecondHeader = ref("");
const articleSecondBody = ref("");
const articleThirdHeader = ref("");
const articleThirdBody = ref("");
const articleAuthur = ref("");

const eventFile = ref(null);

// add article to DB

const addArticle = async function () {
  loading.value = true;
  const data = new URLSearchParams({
    title: articleTitle.value,
    first_header: articleFirstHeader.value,
    first_body: articleFirstBody.value,
    second_header: articleSecondHeader.value,
    second_body: articleSecondBody.value,
    third_header: articleThirdHeader.value,
    third_body: articleThirdBody.value,
    authur: articleAuthur.value,
  });

  await $fetch("http://localhost:3333/management/addarticle", {
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
      articleId.value = response.article.id;
      if (response.article) {
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

const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("articleId", articleId.value);
  console.log(eventFile.value);
  console.log(articleId.value);
  await $fetch("http://localhost:3333/management/articleimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
