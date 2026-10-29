// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-54QJCHHPPL",
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-54QJCHHPPL');`,
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap",
        },
        // Add these favicon-related links
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon.png",
        },
      ],
    },
  },
  css: ["~/assets/css/font.css"],
  plugins: ["~/plugins/heroicons.client.js"],
  build: {
    transpile: ["@heroicons/vue"],
  },
});
