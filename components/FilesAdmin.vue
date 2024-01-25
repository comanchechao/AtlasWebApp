<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 overflow-hidden w-full h-48 lg:h-20 rounded-md border-2 p-3 lg:p-2 border-mainBlue"
  >
    <Message class="w-full absolute" v-if="message" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full absolute" v-if="dltError" severity="success">
      <span class="text-xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full grid grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <div
        class="text-lg flex p-2 border-2 border-dashed cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 20px; height: 20px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <PhTrash
          v-if="!loading"
          @click="removeFile()"
          :size="20"
          weight="fill"
          class=""
        />
      </div>
      <h2 class="text-lg">{{ file.date }}</h2>
      <h2 class="text-lg">{{ file.group }}</h2>

      <h2 class="text-sm">{{ file.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["file"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const dltError = ref(false);
const errorMessage = ref("");

const managementStore = useManagementStore();
const loading = ref(false);
const message = ref(false);

const removeFile = async function () {
  loading.value = true;
  await $fetch(
    `http://localhost:3333/files/management/removefile/${props.file.id}`,
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
      loading.value = false;
      message.value = true;

      managementStore.changeFileState();
    })
    .catch((error) => {
      console.log(error.data);
      dltError.value = true;
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
