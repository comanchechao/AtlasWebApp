<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 overflow-hidden w-full h-48 lg:h-20 rounded-md border-2 p-3 lg:p-2 border-mainBlue"
  >
    <Message class="w-full" v-if="message" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <div
      class="w-full h-full flex space-y-2 items-end flex-col-reverse lg:grid lg:grid-cols-3 lg:place-items-center text-center text-darkBlue"
    >
      <button
        @click="removeAnnouncement()"
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
        <h2
          @click="removeAnnouncement()"
          v-if="!loading"
          class="text-sm lg:flex hidden"
        >
          پاک کردن
        </h2>
        <PhTrash v-if="!loading" :size="20" weight="fill" class="" />
      </button>

      <h2
        class="lg:text-md text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
      >
        {{ announce.winner }}
      </h2>

      <h2 class="text-sm">{{ announce.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["announce"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();
const loading = ref(false);
const message = ref(false);

// const removeBookImage = async function () {
//   loading.value = true;
//   if (props.announce.BooksImages[0]) {
//     await $fetch(
//       `http://localhost:3333/announcements/management/bookimageremove/${props.announce.BooksImages[0].id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         credentials: "include",
//         withCredentials: true,
//       }
//     )
//       .then((response, error) => {
//         removeBook();
//       })
//       .catch((error) => {
//         console.log(error.data);
//         loading.value = false;
//       });
//   } else {
//     removeBook();
//   }
// };

const removeAnnouncement = async function () {
  await $fetch(
    `http://localhost:3333/announcements/management/bookremove/${props.announce.id}`,
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
      setTimeout(() => {
        message.value = false;
      }, 2000);
      managementStore.changeAnnouncementsState();
    })
    .catch((error) => {
      console.log(error.data);
      loading.value = false;
    });
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
