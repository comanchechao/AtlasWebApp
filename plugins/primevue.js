import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import ProgressBar from "primevue/progressbar";
import InputSwitch from "primevue/inputswitch";
import Paginator from "primevue/paginator";
import Galleria from "primevue/galleria";
import Sidebar from "primevue/sidebar";
import Rating from "primevue/rating";
import InputNumber from "primevue/inputnumber";
import Message from "primevue/message";
import ProgressSpinner from "primevue/progressspinner";
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";
import Skeleton from "primevue/skeleton";
import Textarea from "primevue/textarea";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("Paginator", Paginator);
  nuxtApp.vueApp.component("Sidebar", Sidebar);
  nuxtApp.vueApp.component("Galleria", Galleria);
  nuxtApp.vueApp.component("Rating", Rating);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("ProgressBar", ProgressBar);
  nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
  nuxtApp.vueApp.component("Message", Message);
  nuxtApp.vueApp.component("Password", Password);
  nuxtApp.vueApp.component("Skeleton", Skeleton);
  nuxtApp.vueApp.component("Textarea", Textarea);

  nuxtApp.vueApp.component("RadioButton", RadioButton);

  //other components that you need
});
