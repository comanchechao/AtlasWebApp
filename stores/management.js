import { defineStore } from "pinia";
export const useManagementStore = defineStore("managementStore", {
  state: () => ({
    stateChange: false,
    loading: true,
    articleCount: 0,
    scheduleCount: 0,
    videosCount: 0,
  }),

  actions: {
    async changeState() {
      this.stateChange = !this.stateChange;
    },
    async setLoading() {
      this.loading = true;
      console.log("this should be loading", this.loading);
    },
    async falseLoading() {
      this.loading = false;
      console.log("this should be loading", this.loading);
    },
    async setArticleLength(count) {
      this.articleCount = count;
    },
    async setScheduleLength(count) {
      this.scheduleCount = count;
    },
    async setVideosLength(count) {
      this.videosCount = count;
    },
  },
});
