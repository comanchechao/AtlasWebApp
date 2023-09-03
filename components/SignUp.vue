<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-xl bg-mainYellow active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
    >
      <span> ثبت نام </span>
      <PhSignature :size="25" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '40vw', backgroundColor: '#f9f5ff', height: '100vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex items-center p-7 lg:p-16 flex-col space-y-10"
      >
        <div class="flex flex-col space-y-7 items-center">
          <h2 class="text-6xl text-mainBlue">ثبت نام</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainBlue" for="username"
                >نام کاربری</label
              >
              <InputText
                id="username"
                v-model="signupUsername"
                aria-describedby="username-help"
              />
              <small class="text-sm text-darkBlue" id="username-help"
                >نام کاربری خود را وارد کنید</small
              >
            </div>

            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainBlue" for="password"
                >رمز عبور</label
              >
              <InputText
                id="password"
                type="password"
                v-model="signupPassword"
                aria-describedby="username-help"
              />
              <small class="text-sm text-darkBlue" id="username-help"
                >رمز عبور خودتون رو وارد کنید</small
              >
            </div>
            <div class="flex items-end flex-col space-y-4 lg:col-span-2">
              <label class="text-xl text-mainBlue" for="email">ایمیل</label>
              <InputText
                id="email"
                v-model="signupEmail"
                aria-describedby="username-help"
              />
              <small class="text-sm text-darkBlue" id="username-help"
                >ایمیل خودتون رو وارد کنید</small
              >
            </div>
          </div>
          <button
            label="Show"
            @click="formSubmit()"
            class="text-xl flex items-center space-x-2 px-10 py-2 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-darkBlue hover:border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-mainBlue"
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
import { PhSignature } from "@phosphor-icons/vue";
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

  await $fetch("https://auth.atlasacademy.ir/signup", {
    method: "POST",
    body: data,
  }).then(() => {
    loginFunction();
  });
}

async function loginFunction() {
  await $fetch("https://auth.atlasacademy.ir/signin", {
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
