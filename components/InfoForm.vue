<template>
  <div
    class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-10 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
  >
    <InputText
      placeholder="نام پدر"
      id="fullname"
      v-model="fullname"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="نام و نام خانوادگی"
      id="fullname"
      v-model="fullname"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <Dropdown
      v-model="selectedGender"
      :options="genders"
      optionLabel="name"
      inputId="dd-city"
      placeholder="وضعیت تاهل"
      class="w-full rounded-lg h-11"
    /><InputMask
      placeholder="کد ملی"
      id="postalCode"
      mask="9999999999"
      v-model="postalCode"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
    <InputMask
      placeholder="شماره همراه"
      v-model="phoneNumber"
      mask="9999-999-9999"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputMask
      placeholder="شماره ثابت"
      v-model="phoneNumber"
      mask="9999-999-9999"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />

    <InputMask
      placeholder="تاریخ تولد"
      id="email"
      mask="9999-99-99"
      v-model="email"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="محل تولد"
      id="email"
      v-model="email"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="آدرس منزل"
      id="address"
      v-model="address"
      class="w-full rounded-lg h-11 col-span-2"
      aria-describedby="username-help"
    />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
// import { useProfileStore } from "../stores/profileStore";
// import { useCheckoutStore } from "../stores/checkoutStore";
// import { storeToRefs } from "pinia";
// import provinces from "../locations/provinces.json";
// import iranCities from "../locations/cities.json";

// register profile store

//   const profileStore = useProfileStore();

//   const { storeFullname } = storeToRefs(profileStore);

// register checkout store

//   const checkoutStore = useCheckoutStore();

// customer information

const fullname = ref("");
const phoneNumber = ref("");
const selectedGender = ref();
const address = ref("");
const postalCode = ref("");
const email = ref("");
const selectedRegion = ref();

// set order information to checkout store to proccess inside checkout page

//   watch(selectedCity, (cur, old) => {
//     checkoutStore.setCity(cur.name);
//   });

//   watch(selectedRegion, (cur, old) => {
//     checkoutStore.setRegion(cur.name);
//   });

//   watch(address, (cur, old) => {
//     checkoutStore.setAddress(cur);
//   });

//   watch(fullname, (cur, old) => {
//     checkoutStore.setFullName(cur);
//   });

//   watch(phoneNumber, (cur, old) => {
//     checkoutStore.setPhoneNumber(cur);
//   });
//   watch(email, (cur, old) => {
//     checkoutStore.setEmail(cur);
//   });

//   watch(postalCode, (cur, old) => {
//     checkoutStore.setPostalCode(cur);
//   });

// values

//   const cities = ref([]);
//   watch(selectedRegion, (cur, old) => {
//     console.log(cur);
//     cities.value = [];
//     iranCities.forEach((element) => {
//       if (cur.id === element.province_id) {
//         cities.value.push(element);
//       }
//     });
//   });

const regions = ref([
  { name: "آذربایجان غربی", code: "NY" },
  { name: "آذربایجان شرقی", code: "RM" },
  { name: "البرز", code: "LDN" },
  { name: "هرمزگان", code: "IST" },
]);
const genders = ref([{ name: "مرد" }, { name: "زن" }]);
// handle information submit
</script>

<script>
export default {
  props: ["isVisible"],
};
</script>
<style>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #150531;
}
.p-dropdown .p-dropdown-label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-inputtext {
  text-align: end;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
}
.p-dropdown {
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
  flex-direction: row-reverse;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  background-color: #fbf8ff;
  color: #150531;
}

.p-dropdown-panel
  .p-dropdown-items
  .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #150531;
  color: #fbf8ff;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: #f36b31;
  color: #150531;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-container .p-inputtext {
  padding: 0;
}
input::placeholder,
textarea::placeholder {
  background-color: #fbf8ff;
  color: #15053190;
}
</style>
