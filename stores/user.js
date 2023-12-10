import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    isLogged: false,
    isManager: false,
  }),
  actions: {
    setLogState() {
      this.isLogged = true;
    },

    setManager() {
      this.isManager = true;
      this.isLogged = true;
    },
  },
});
