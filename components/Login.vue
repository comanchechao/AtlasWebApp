<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-lg flex active:text-mainWhite active:bg-mainBlue items-center space-x-2 lg:w-auto w-full px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-mainBlue text-mainBlue"
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
      <div
        class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
      >
        <h2 class="lg:text-6xl text-4xl text-mainBlue">ورود به سایت</h2>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-9"
        >
          <div class="flex items-end flex-col space-y-3 order-1 lg:-order-none">
            <label class="text-xl text-mainBlue" for="password">رمز عبور</label>
            <InputText
              type="password"
              id="password"
              v-model="loginPassword"
              aria-describedby="username-help"
            />
            <small class="text-sm text-darkBlue" id="username-help"
              >رمز عبورتون رو وارد کنید</small
            >
          </div>
          <div class="flex items-end flex-col space-y-3">
            <label class="text-xl text-mainBlue" for="username"
              >نام کاربری</label
            >
            <InputText
              id="username"
              v-model="loginUsername"
              aria-describedby="username-help"
            />
            <small class="text-sm text-darkBlue" id="username-help"
              >نام کاربریتون رو وارد کنید</small
            >
          </div>
          <div
            class="flex items-end flex-col space-y-3 lg:col-span-2 place-self-end"
          >
            <label class="text-xl text-mainBlue" for="email">ایمیل</label>
            <InputText
              id="email"
              v-model="loginEmail"
              aria-describedby="username-help"
            />
            <small class="text-sm text-darkBlue" id="username-help"
              >ایمیلتون رو وارد کنید</small
            >
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
          class="h-full justify-center w-full flex items-center self-center space-x-5"
        >
          <LazySignUp />
          <button
            label="Show"
            @click="formSubmit()"
            class="text-xl bg-mainYellow active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
          >
            <span> ورود </span>
            <PhKeyhole :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhLockKey, PhKeyhole } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const visible = ref(false);

const errorLogin = ref(false);
const errorLoginMessage = ref("");

// const config = useRuntimeConfig();
const message = ref(false);
const loginEmail = ref("");
const loginPassword = ref(null);
const loginUsername = ref("");

async function testFunction() {
  await $fetch("http://localhost:3333/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      credentials: "include",
    },
  });
}

async function formSubmit() {
  const data = new URLSearchParams({
    email: loginEmail.value,
    password: loginPassword.value,
    username: loginUsername.value,
  });

  await $fetch("http:localhost:3333/signin", {
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
    .catch((error) => {
      console.log(error.message);
      errorLogin.value = true;
      errorLoginMessage.value = "مشخصات خود را چک کنید";
    });
}
</script>
<style>
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(100% - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(100% - 46px) !important;
  }
}
</style>
