import { defineStore } from "pinia";
export const useManagementStore = defineStore("managementStore", {
  state: () => ({
    stateChange: false,
    booksStateChange: false,
    audioBooksState: false,
    announcementsState: false,
    imageGalleryState: false,
    loading: true,
    articleCount: 0,
    audioBooksCount: 0,
    announcementsCount: 0,
    imageGalleryCount: 0,
    booksCount: 0,
    scheduleCount: 0,
    videosCount: 0,
    newsCount: 0,
  }),

  actions: {
    async changeState() {
      this.stateChange = !this.stateChange;
    },
    async changeBooksState() {
      this.booksStateChange = !this.booksStateChange;
    },
    async changeAnnouncementsState() {
      this.announcementsState = !this.announcementsState;
    },
    async changeAudioBooksState() {
      this.audioBooksState = !this.audioBooksState;
    },
    async changeImageGalleryState() {
      this.imageGalleryState = !this.imageGalleryState;
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
    async setBooksCount(count) {
      this.booksCount = count;
    },
    async setImageGalleryCount(count) {
      this.imageGalleryCount = count;
    },
    async setAnnouncementsCount(count) {
      this.announcementsCount = count;
    },
    async setAudioBooksCount(count) {
      this.audioBooksCount = count;
    },
    async setNewsLength(count) {
      this.newsCount = count;
    },
    async setScheduleLength(count) {
      this.scheduleCount = count;
    },
    async setVideosLength(count) {
      this.videosCount = count;
    },
  },
});
