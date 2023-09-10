<template>
  <div
    class="flex items-center flex-col justify-center space-y-3 w-full h-full border-b border-mainRed pb-3"
  >
    <div
      class="w-full h-full grid grid-cols-4 place-items-center text-center text-darkBlue"
    >
      <div
        class="text-lg flex p-2 border-2 border-dashed cursor-pointer transition duration-200 ease-in hover:bg-mainRed hover:text-mainWhite border-mainRed rounded-md items-center text-red-500"
      >
        <PhTrash @click="removeSchedule" :size="20" weight="fill" class="" />
      </div>
      <h2 class="text-lg">دوشنبه 19 تیر 1402</h2>
      <h2 class="text-lg">{{ schedule.title }}</h2>

      <h2 class="text-sm">{{ schedule.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["schedule"]);
import { ref, onMounted } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

const managementStore = useManagementStore();

const removeSchedule = async function () {
  await $fetch(
    `http://localhost:3333/management/scheduleremove/${props.schedule.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then((response, error) => {
      alert("deleted");
      managementStore.changeState();
    })
    .catch((error) => {
      console.log(error.data);
    });
};
</script>

<style lang="scss" scoped></style>
