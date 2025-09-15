// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  devServer: {
    port: 6009,
  },
  experimental: {
    emitRouteChunkError: "automatic",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Panel 17",
      titleTemplate: "%s - Panel 17",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Panel 17.",
        },
        { name: "og:title", content: "Panel 17" },
        { name: "twitter:title", content: "Panel 17" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "og:title",
          content: "Panel 17",
        },
        {
          name: "twitter:title",
          content: "Panel 17",
        },
        { name: "og:image", content: "https://Panel17.spotverge.com/logo.png" },
        { name: "twitter:image", content: "https://Panel17.spotverge.com/logo.png" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      script: [
        //{ hid: "stripe", src: "https://js.stripe.com/v3/", defer: true, async: true },
        //{ hid: "umami", src: "https://analytics.eu.umami.is/script.js", "data-website-id": "", defer: true, async: true },
      ],
    },
  },

  css: ["@/styles.scss", "@/styles.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      MEDIA_URL: process.env.MEDIA_URL,
      BACKEND_URL: process.env.BACKEND_URL,
    },
  },

  imports: {
    dirs: ["store"],
  },

  modules: [
    "@nuxtjs/google-fonts",
    //    "nuxt-snackbar",
    //    "@pinia/nuxt", //"@vite-pwa/nuxt",
    "@nuxt/icon",
  ],

  tailwindcss: {
    viewer: false, // optional, disables Tailwind inspector
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
