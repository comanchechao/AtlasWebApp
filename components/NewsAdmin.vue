<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-16 border-b border-mainBlue pb-3"
  >
    <Message class="w-full" v-show="succuss" severity="success">
      <span class="text-2xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full" v-show="addError" severity="error">
      <span class="text-2xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full grid grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <div
        class="text-lg flex p-2 border-2 cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <PhTrash
          v-if="!loading"
          @click="removeNewsImage"
          :size="20"
          weight="fill"
          class=""
        />
      </div>
      <h2 class="lg:text-lg text-sm">دوشنبه 19 تیر 1402</h2>
      <h2 class="text-lg">{{ news.authur }}</h2>

      <h2 class="text-sm">{{ news.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["news"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();
const loading = ref(false);
const succuss = ref(false);
const errorMessage = ref("");
const addError = ref(false);

const removeNewsImage = async function () {
  loading.value = true;
  if (props.news.NewsImages.length) {
    await $fetch(
      `http://localhost:3333/management/newsimageremove/${props.news.NewsImages[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        withCredentials: true,
      }
    )
      .then((response, error) => {
        removeNews();
      })
      .catch((error) => {
        if (error.data.statusCode === 403) {
          addError.value = true;
          errorMessage.value = "وارد حساب ادمین شوید";
        }
        setTimeout(() => {
          loading.value = false;
          addError.value = false;
        }, 4000);
      });
  } else {
    removeNews();
  }
};

const removeNews = async function () {
  await $fetch(`http://localhost:3333/management/newsremove/${props.news.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  })
    .then((response, error) => {
      succuss.value = true;
      loading.value = false;

      managementStore.changeState();
    })
    .catch((error) => {
      loading.value = false;
      if (error.data.statusCode === 403) {
        addError.value = true;
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      setTimeout(() => {
        loading.value = false;
        addError.value = false;
      }, 4000);
    });
};
</script>
