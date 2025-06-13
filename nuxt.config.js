// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    // head: {
    //   link: [
    //     {
    //       rel: "stylesheet",
    //       href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
    //     },
    //   ],
    // },
  },
  css: ["~/assets/css/font.css"],
  plugins: ["~/plugins/heroicons.client.js"],
});
