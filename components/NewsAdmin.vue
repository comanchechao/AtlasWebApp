<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 overflow-hidden w-full h-48 lg:h-20 rounded-md border-2 p-3 lg:p-2 border-mainBlue"
  >
    <Message class="w-full absolute" v-show="succuss" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full absolute" v-show="addError" severity="error">
      <span class="text-2xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full flex space-y-2 items-end flex-col-reverse lg:grid lg:grid-cols-4 lg:place-items-center text-center text-darkBlue"
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
        <h2
          @click="removeArticleImage()"
          v-if="!loading"
          class="text-sm lg:flex hidden"
        >
          پاک کردن
        </h2>
        <PhTrash
          v-if="!loading"
          @click="removeNewsImage"
          :size="20"
          weight="fill"
          class=""
        />
      </div>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        دوشنبه 19 تیر 1402
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ news.authur }}
      </h2>
      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ news.title }}
      </h2>
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
