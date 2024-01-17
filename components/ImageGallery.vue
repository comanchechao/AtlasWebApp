<template>
  <div class="card">
    <div class="mb-3">
      <Button icon="pi pi-minus" @click="prev" />
      <Button
        icon="pi pi-plus"
        @click="next"
        severity="secondary"
        class="ml-2"
      />
    </div>

    <Galleria
      v-model:activeIndex="activeIndex"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="max-width: 640px"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from "../services/PhotoService";

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const activeIndex = ref(2);
const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);

const next = () => {
  activeIndex.value =
    activeIndex.value === images.value.length - 1
      ? images.value.length - 1
      : activeIndex.value + 1;
};
const prev = () => {
  activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
};
</script>
