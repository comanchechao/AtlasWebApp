<template>
  <div>
    <div
      @click="visible = true"
      class="w-64 rounded-md cursor-pointer transition text-mainWhite shadow-lg shadow-transparent hover:shadow-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-28 bg-mainBlue flex items-center justify-center"
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
            <label class="text-xl text-mainBlue" for="password"
              >عنوان برنامه</label
            >
            <InputText
              id="password"
              v-model="loginPassword"
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
            <input type="file" class="hidden" id="scheduleImage" />
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
            @click="formSubmit()"
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
const visible = ref(false);

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.set("file", event.target.files[0]);
  console.log(event.target.files);
  console.log(formData.entries);
  await $fetch("http://localhost:3333/management/articleimage", {
    method: "POST",

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
