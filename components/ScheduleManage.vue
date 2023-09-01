<template>
  <div>
    <div
      @click="visible = true"
      class="w-64 rounded-md cursor-pointer transition text-mainWhite shadow-lg shadow-transparent hover:shadow-mainBlue duration-200 ease-in hover:bg-mainWhite hover:text-mainBlue h-28 bg-mainBlue flex items-center justify-center"
    >
      <h2 class="text-2xl flex items-center space-x-3">
        <span> مدیریت مقالات </span>
        <PhArticle :size="25" weight="fill" />
      </h2>
    </div>
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
          class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
        >
          <LazySignUp />
          <button
            label="Show"
            @click="formSubmit()"
            class="text-xl bg-mainYellow lg:my-0 my-4 active:text-darkPurple active:bg-mainBlue flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-dashed border-mainBlue rounded-sm shadow-md shadow-transparent hover:shadow-mainBlue hover:text-darkBlue text-darkBlue"
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
import { PhArticle } from "@phosphor-icons/vue";
const visible = ref(false);
</script>

<style lang="scss" scoped></style>
