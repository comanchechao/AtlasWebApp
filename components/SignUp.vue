<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-md bg-mainWhite active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 py-2 transition duration-150 ease-in-out border-2 border-darkBlue rounded-md w-full justify-center shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
    >
      <span> ثبت نام </span>
      <PhSignature :size="25" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: 'auto', backgroundColor: '#f9f5ff', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full justify-center h-full flex items-center p-5 lg:p-12 flex-col"
      >
        <div class="flex flex-col space-y-6 items-center">
          <div class="grid grid-cols-1 place-items-center gap-3">
            <div class="flex items-end flex-col space-y-3">
              <label class="text-md text-mainBlue" for="email">ایمیل</label>
              <InputText
                id="email"
                size="small"
                v-model="signupEmail"
                aria-describedby="username-help"
                style="width: 230px"
              />
            </div>
            <div class="flex items-end flex-col space-y-2">
              <label class="text-md text-mainBlue" for="username"
                >نام کاربری</label
              >
              <InputText
                id="username"
                size="small"
                v-model="signupUsername"
                aria-describedby="username-help"
                style="width: 230px"
              />
            </div>
            <div class="flex items-end flex-col space-y-2">
              <label class="text-md text-mainBlue" for="password"
                >رمز عبور</label
              >

              <Password
                :feedback="false"
                size="small"
                id="password"
                type="password"
                aria-describedby="username-help"
                v-model="signupPassword"
                toggleMask
              />
            </div>
          </div>
          <button
            label="Show"
            @click="formSubmit()"
            class="text-md bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-mainBlue rounded-md shadow-md shadow-transparent hover:shadow-mainBlue w-full justify-center hover:text-darkBlue text-darkBlue"
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
  background-color: #f9f5ff;
  padding: 0.5rem;
}
.p-dialog .p-dialog-content {
  padding: 0;
}
</style>
