<template>
  <div class="h-full w-full px-5 lg:px-36">
    <swiper
      :navigation="true"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :slidesPerView="1"
      class="mySwiper w-full px-44"
    >
      <PhCaretDoubleRight :size="60" weight="fill" class="text-mainRed" />

      <swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/01.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پیش دبستانی</h2>
        </div> </swiper-slide
      ><swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/02.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پایه اول</h2>
        </div> </swiper-slide
      ><swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/03.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پایه دوم</h2>
        </div> </swiper-slide
      ><swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/04.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پایه سوم</h2>
        </div> </swiper-slide
      ><swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/05.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پایه چهارم</h2>
        </div> </swiper-slide
      ><swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/06.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پایه پنجم</h2>
        </div> </swiper-slide
      ><swiper-slide>
        <div
          class="h-44 cursor-pointer rounded-md p-3 bg-mainWhite hover:bg-mainBlue hover:text-mainWhite text-mainBlue border-transparent transition ease-in-out duration-300 w-44 flex flex-col items-center justify-center space-y-4"
        >
          <img
            src="../assets/images/07.png"
            class="h-24 object-contain"
            alt=""
          />
          <h2 class="text-xl">پایه ششم</h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { Autoplay } from "swiper/modules";
import { PhCaretDoubleRight } from "@phosphor-icons/vue";

// Import Swiper styles
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
// register product store
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  text-align: center;

  /* Center slide text vertically */
  display: block;
  justify-content: center;
  align-items: center;
}
</style>
