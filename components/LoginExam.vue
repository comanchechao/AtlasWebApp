<template>
  <div class="card flex justify-center">
    <button
      v-show="!isLogged"
      label="Show"
      @click="visible = true"
      class="text-lg flex active:text-mainWhite active:bg-mainBlue items-center space-x-2 lg:w-auto w-full px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-mainBlue text-mainBlue"
    >
      <span> ورود </span>
      <PhLockKey weight="fill" :size="20" />
    </button>
    <NuxtLink v-show="isManager" to="/admin">
      <button
        v-show="isLogged"
        label="Show"
        class="text-lg flex active:text-mainWhite active:bg-mainBlue items-center space-x-2 lg:w-auto w-full px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-mainBlue text-mainBlue"
      >
        <span> مدیریت </span>

        <PhUser weight="fill" :size="20" />
      </button>
    </NuxtLink>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: 'auto', backgroundColor: '#f9f5ff', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-6"
      >
        <div
          class="grid grid-cols-1 place-items-center justify-items-center gap-2"
        >
          <div class="flex items-end flex-col space-y-3">
            <label class="text-md text-mainBlue" for="email">ایمیل</label>
            <InputText
              size="small"
              id="email"
              v-model="loginEmail"
              aria-describedby="username-help"
              style="width: 230px"
            />
          </div>
          <div class="flex items-end flex-col space-y-3">
            <label class="text-md text-mainBlue" for="username"
              >نام کاربری</label
            >
            <InputText
              size="small"
              id="username"
              v-model="loginUsername"
              aria-describedby="username-help"
              style="width: 230px"
            />
          </div>
          <div class="flex items-end flex-col space-y-3">
            <label class="text-md text-mainBlue" for="password">رمز عبور</label>

            <Password
              size="small"
              id="password"
              type="password"
              aria-describedby="username-help"
              :feedback="false"
              v-model="loginPassword"
              toggleMask
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
          class="h-auto flex-col justify-center w-full flex items-center self-center lg:space-y-4"
        >
          <button
            label="Show"
            @click="formSubmit()"
            class="text-xl bg-mainYellow lg:my-0 my-4 w-full justify-center active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-mainBlue rounded-md shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
          >
            <span> ورود </span>
            <PhKeyhole :size="25" />
          </button>
          <LazySignUp class="w-full" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhLockKey, PhKeyhole, PhUser } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const visible = ref(false);

// manage state

const { isManager } = storeToRefs(userStore);

// log state

const { isLogged } = storeToRefs(userStore);

const errorLogin = ref(false);
const errorLoginMessage = ref("");

// const config = useRuntimeConfig();
const message = ref(false);
const loginEmail = ref("");
const loginPassword = ref(null);
const loginUsername = ref("");

async function testFunction() {
  await $fetch("http://localhost:3333/ischeck", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  }).then(function (response) {
    console.log(response);
    if (response.check) {
      userStore.setManager();
    }
  });
}

async function formSubmit() {
  const data = new URLSearchParams({
    email: loginEmail.value,
    password: loginPassword.value,
    username: loginUsername.value,
  });

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
      if (response) {
        userStore.setLogState();
        message.value = true;
        testFunction();
      }
    })
    .catch((error) => {
      console.log(error.message);
      errorLogin.value = true;
      errorLoginMessage.value = "مشخصات خود را چک کنید";
      setTimeout(() => {
        errorLogin.value = false;
      }, 2000);
      setTimeout(() => {
        visible.value = false;
      }, 2000);
    });
}
</script>
<style>
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: 100% !important;
    height: auto !important;
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
