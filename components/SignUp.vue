<template>
  <div class="card flex items-center justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-md bg-mainWhite active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 py-2 transition duration-150 ease-in-out border-2 border-darkBlue rounded-md w-52 justify-center shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
    >
      <span> ثبت نام </span>
      <PhSignature :size="25" />
    </button>

    <Dialog
      :showHeader="false"
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: 'auto', backgroundColor: '#112476', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#112476' }"
    >
      <div
        class="w-full justify-center h-full flex items-center p-5 lg:p-12 flex-col"
      >
        <div class="flex flex-col space-y-6 items-center">
          <div dir="rtl" class="grid grid-cols-2 place-items-center gap-3">
            <div class="flex items-start flex-col space-y-1">
              <label class="text-md text-mainWhite" for="username">ایمیل</label>
              <input
                id="email"
                v-model="signupEmail"
                aria-describedby="username-help"
                type="text"
                class="input bg-white border-2 border-mainBlue border-opacity-60 input-xl p-2 rounded-md input-bordered w-full max-w-xs"
              />
            </div>
            <div class="flex items-start flex-col space-y-1">
              <label class="text-md text-mainWhite" for="username"
                >نام کاربری</label
              >
              <input
                id="username"
                v-model="signupUsername"
                aria-describedby="username-help"
                type="text"
                class="input bg-white border-2 border-mainBlue border-opacity-60 input-xl p-2 rounded-md input-bordered w-full max-w-xs"
              />
            </div>

            <div class="flex items-start flex-col space-y-1">
              <label class="text-md text-mainWhite" for="password"
                >رمز عبور</label
              >
              <input
                id="password"
                v-model="signupPassword"
                aria-describedby="username-help"
                class="input bg-white border-2 border-mainBlue border-opacity-60 input-xl p-2 rounded-md input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <button
            label="Show"
            @click="formSubmit()"
            class="text-md bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 w-52 ease-in-out border-2 border-mainBlue rounded-md shadow-md shadow-transparent hover:shadow-mainBlue justify-center hover:text-darkBlue text-darkBlue"
          >
            <span> ثبت نام </span>
            <PhSignature :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhInfo, PhSignature } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
const visible = ref(false);

const userStore = useUserStore();

const signupEmail = ref("");
const signupPassword = ref(null);
const signupUsername = ref("");

async function formSubmit() {
  const data = new URLSearchParams({
    email: signupEmail.value,
    password: signupPassword.value,
    username: signupUsername.value,
  });
  console.log(data);

  await $fetch("http://localhost:3333/signup", {
    method: "POST",
    body: data,
  }).then(() => {
    loginFunction();
  });
}

async function loginFunction() {
  await $fetch("http://localhost:3333/signin", {
    method: "POST",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then(function (response) {
      console.log(response);
      if (response) {
        userStore.setLogState();
        message.value = true;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}
</script>
<style>
.p-dialog .p-dialog-header {
  background-color: #112476;
  padding: 0.5rem;
}
.p-dialog .p-dialog-content {
  padding: 0;
}
</style>
