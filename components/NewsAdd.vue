<template>
  <div class="w-full h-full flex items-end p-7 lg:p-16 flex-col space-y-10">
    <h2
      class="lg:text-2xl text-2xl text-mainBlue border-b-8 rounded-md border-mainYellow"
    >
      اضافه کردن خبر
    </h2>
    <div
      class="grid w-full grid-cols-1 lg:grid-cols-2 place-items-center justify-items-end gap-4"
    >
      <div class="flex items-end flex-col space-y-1">
        <label class="text-md text-mainBlue" for="title">عنوان خبر</label>
        <InputText
          id="title"
          v-model="articleTitle"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex items-end flex-col space-y-1">
        <label class="text-md text-mainBlue" for="authur">نام نویسنده</label>
        <InputText
          id="authur"
          v-model="articleAuthur"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex items-end flex-col space-y-1">
        <label class="text-md text-mainBlue" for="username">تاریخ خبر</label>
        <InputMask
          mask="9999/99/99"
          id="username"
          v-model="date"
          aria-describedby="username-help"
        />
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
        class="flex lg:col-span-2 mb-6 flex-col space-y-2 items-center justify-center"
      >
        <label
          for="newsImage"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> انتخاب عکس </span>
          <PhPictureInPicture :size="25" />
        </label>
        <input
          @change="
            (event) => {
              newsImage = event.target.files[0];
              console.log(newsImage);
            }
          "
          type="file"
          class="hidden"
          id="newsImage"
        />
        <label
          v-show="newsImage"
          label="Show"
          class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
        >
          <span> انتخاب شد </span>
          <PhCheckCircle :size="25" weight="fill" class="text-black" />
        </label>
      </div>

      <div
        class="flex items-end lg:col-span-2 lg:place-self-end flex-col space-y-1"
      >
        <label class="text-md text-mainBlue" for="firstHeader"
          >سر تیتر اول</label
        >
        <InputText
          id="firstHeader"
          v-model="articleFirstHeader"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex items-end lg:col-span-2 flex-col space-y-4">
        <label class="text-md text-mainBlue" for="firstBody"
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
        class="flex items-end lg:col-span-2 lg:place-self-end flex-col space-y-1"
      >
        <label class="text-md text-mainBlue" for="secondHeader"
          >سر تیتر دوم</label
        >
        <InputText
          id="secondHeader"
          v-model="articleSecondHeader"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex items-end lg:col-span-2 flex-col space-y-4">
        <label class="text-md text-mainBlue" for="secondBody"
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
        class="flex items-end lg:col-span-2 place-self-end flex-col space-y-1"
      >
        <label class="text-md text-mainBlue" for="thirdHeader"
          >سر تیتر سوم</label
        >
        <InputText
          id="thirdHeader"
          v-model="articleThirdHeader"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex items-end lg:col-span-2 flex-col space-y-4">
        <label class="text-md text-mainBlue" for="thridBody"
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
    <div
      class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
    >
      <button
        label="Show"
        @click="addNews()"
        class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
      >
        <span v-if="!imageUploadLoading"> اضافه کردن تازه های اطلس </span>
        <PhPlus v-if="!imageUploadLoading" :size="25" />
        <ProgressSpinner
          v-if="imageUploadLoading"
          style="width: 20px; height: 20px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
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
      <span class="text-2xl">به تازه های اطلس اضافه شد</span>
    </Message>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPictureInPicture, PhPlus, PhCheckCircle } from "@phosphor-icons/vue";
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

const newsId = ref(null);

const articleTitle = ref("");
const articleFirstBody = ref("");
const articleFirstHeader = ref("");
const articleSecondHeader = ref("");
const articleSecondBody = ref("");
const articleThirdHeader = ref("");
const articleThirdBody = ref("");
const articleAuthur = ref("");
const date = ref();
const newsImage = ref(null);

const selectedCategory = ref("");

const category = ref([
  { name: "تازه های اطلس", code: "atlasnews" },
  { name: "خلاقیت", code: "creativity" },
  { name: "عمومی", code: "public" },
]);

// add news to DB

const addNews = async function () {
  loading.value = true;
  console.log(selectedCategory.value);
  const data = new URLSearchParams({
    title: articleTitle.value,
    first_header: articleFirstHeader.value,
    first_body: articleFirstBody.value,
    second_header: articleSecondHeader.value,
    second_body: articleSecondBody.value,
    third_header: articleThirdHeader.value,
    third_body: articleThirdBody.value,
    authur: articleAuthur.value,
    category: selectedCategory.value.code,
    date: date.value,
  });

  await $fetch("http://localhost:3333/management/addnews", {
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
      newsId.value = response.news.id;
      if (response.news) {
        imageUploadLoading.value = true;
        uploadImage();
        managementStore.changeState();
      }
    })
    .catch((error) => {
      addArticleError.value = true;
      errorMessage.value = error.data.message;
      console.log(error.data);

      addArticleError.value = false;
    });
  loading.value = false;
};

// uploading image

const imageUploadLoading = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (event) {
  const formData = new FormData();

  console.log(newsImage.value);
  formData.append("file", newsImage.value);
  formData.append("newsId", newsId.value);
  console.log(newsId.value);
  await $fetch("http://localhost:3333/management/newsimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      imageUploadLoading.value = false;
      message.value = true;
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
