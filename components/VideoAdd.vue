<template>
  <div>
    <div
      @click="visible = true"
      class="w-64 rounded-md cursor-pointer transition text-mainWhite shadow-lg shadow-transparent hover:shadow-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-28 bg-mainBlue flex items-center justify-center"
    >
      <h2 class="text-2xl flex items-center space-x-3">
        <span> مدیریت ویدیو </span>
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
          اضافه کردن ویدیو
        </h2>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-9"
        >
          <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
            <label class="text-xl text-mainBlue" for="title">عنوان ویدیو</label>
            <InputText
              id="title"
              v-model="title"
              aria-describedby="username-help"
            />
          </div>
          <div class="flex items-end flex-col space-y-3">
            <label class="text-xl text-mainBlue" for="username"
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
            @click="formSubmit()"
            class="text-xl col-span-2 bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
          >
            <span> آپلود ویدیو </span>
            <PhKeyhole :size="25" />
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

          <div class="flex items-end col-span-2 flex-col space-y-4">
            <label class="text-2xl text-mainBlue" for="description"
              >توضیحات اضافه
            </label>
            <Textarea
              class="w-full text-right text-2xl py-3"
              autoResize
              v-model="productDescription"
              rows="9"
              cols="90"
            />
          </div>
        </div>
        <Message class="w-full" v-show="errorLogin" severity="error">
          <span class="text-2xl">{{ errorLoginMessage }}</span>
        </Message>
        <Message class="w-full" v-show="message" severity="success">
          <span class="text-2xl">ورود موفقیت آمیز بود</span>
        </Message>
        <div
          v-if="!message"
          class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
        >
          <button
            label="Show"
            @click="uploadVideo()"
            class="text-xl bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
          >
            <span> اضافه کردن ویدیو </span>
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
import { storeToRefs } from "pinia";

const loading = ref(false);

const managementStore = useManagementStore();

const { stateChange } = storeToRefs(managementStore);
const visible = ref(false);

const eventFile = ref(null);
const videos = ref();
const title = ref("");
const description = ref("");

const uploadVideo = async function (event) {
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("title", title.value);
  console.log(eventFile.value);
  await $fetch("http://localhost:3333/management/addvideo", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      console.log(response);
      useManagementStore.stateChange();
    })
    .catch((error) => {
      console.log(error.data.message);
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
