<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-lg flex active:text-mainWhite active:bg-mainBlue items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-mainBlue text-mainBlue"
    >
      <span> ورود </span>
      <PhLockKey weight="fill" :size="20" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '40vw', backgroundColor: '#f9f5ff', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div class="w-full h-full flex items-center p-16 flex-col space-y-10">
        <h2 class="text-6xl text-mainBlue">ورود</h2>
        <div class="flex flex-col items-center space-y-4">
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainBlue" for="email">ایمیل</label>
            <InputText
              id="email"
              v-model="value"
              aria-describedby="username-help"
            />
            <small class="text-sm text-darkBlue" id="username-help"
              >ایمیل خودتون رو وارد کنید</small
            >
          </div>
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainBlue" for="email">رمز عبور</label>
            <InputText
              id="email"
              v-model="value"
              aria-describedby="username-help"
            />
            <small class="text-sm text-darkBlue" id="username-help"
              >رمز عبور خودتون رو وارد کنید</small
            >
          </div>
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <button
            label="Show"
            @click="formSubmit()"
            class="text-lg flex active:text-mainWhite active:bg-mainBlue items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-mainBlue text-mainBlue"
          >
            <span> ورود </span>
            <PhKeyhole :size="25" />
          </button>
          <SignUp />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import SignUp from "./SignUp.vue";
import { ref } from "vue";
import { PhLockKey } from "@phosphor-icons/vue";
const visible = ref(false);

async function formSubmit() {
  const data = new URLSearchParams({
    email: "newgreezx@gmail.com",
    password: "test123456",
    username: "dfg",
  });

  await $fetch(
    "http://localhost:3333/signin",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    },
    { withCredentials: true }
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
</script>
