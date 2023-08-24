export default defineNuxtConfig({
  modules: ["@hypernym/nuxt-gsap", "@pinia/nuxt", "nuxt-simple-sitemap"],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true,
      scrollTo: true,
    },
  },
  runtimeConfig: {
    hostUrl: process.env.HOST_URL,
  },
  pages: true,
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: { url: "https://atlasacademy.ir" },
});
