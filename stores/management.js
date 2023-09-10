import { defineStore } from "pinia";
export const useManagementStore = defineStore("managementStore", {
  state: () => ({
    stateChange: false,
    articleCount: 0,
    scheduleCount: 0,
  }),

  actions: {
    async changeState() {
      this.stateChange = !this.stateChange;
    },
    async setArticleLength(count) {
      this.articleCount = count;
    },
    async setScheduleLength(count) {
      this.scheduleCount = count;
    },
  },
});
