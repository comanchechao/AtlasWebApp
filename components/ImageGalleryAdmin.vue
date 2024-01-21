<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-24 border-b border-mainBlue pb-3"
  >
    <Message class="w-full absolute" v-if="message" severity="success">
      <span class="text-xl">با موفقیت پاک شد</span>
    </Message>
    <Message class="w-full" v-if="dltError" severity="error">
      <span class="text-2xl">{{ errorMessage }}</span>
    </Message>
    <div
      class="w-full h-full grid grid-cols-5 place-items-center text-center text-darkBlue"
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
          @click="removeGalleryImage"
          :size="20"
          weight="fill"
          class=""
        />
      </div>
      <h2 class="lg:text-lg text-sm">دوشنبه 19 تیر 1402</h2>
      <h2 class="text-lg">{{ gallery.category }}</h2>
      <h2 class="text-lg">{{ gallery.authur }}</h2>

      <h2 class="text-sm">{{ gallery.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["gallery"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();
const loading = ref(false);
const message = ref(false);
const dltError = ref(false);
const errorMessage = ref("");

const removeGalleryImage = async function () {
  dltError.value = false;
  loading.value = true;
  console.log(props.gallery.GalleryImages);
  props.gallery.GalleryImages.forEach((image) => {
    remove(image);
  });

  async function remove(image) {
    console.log(image, "we are deleting ");
    await $fetch(
      `http://localhost:3333/image-gallery/management/galleryimageremove/${image.id}`,
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
        removeGallery();
        loading.value = false;
      })
      .catch((error) => {
        console.log(error.data);
        dltError.value = true;
        if (error.data.statusCode === 403) {
          errorMessage.value = "وارد حساب ادمین شوید";
        }
        setTimeout(() => {
          dltError.value = false;
        }, 2000);
        loading.value = false;
      });
  }

  removeGallery();
};

const removeGallery = async function () {
  await $fetch(
    `http://localhost:3333/image-gallery/management/galleryremove/${props.gallery.id}`,
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
      managementStore.changeImageGalleryState();
    })
    .catch((error) => {
      console.log(error.data);
      dltError.value = true;
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      setTimeout(() => {
        dltError.value = false;
      }, 2000);
      loading.value = false;
    });
};
</script>
