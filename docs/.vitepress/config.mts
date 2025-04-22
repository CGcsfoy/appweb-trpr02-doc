import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/appweb-trpr02-doc/",
  title: "Travail Pratique 2 - Doc",
  description:
    "Documentation du Travail Pratique 2 par Mathieu Côté & Cédric Gourdes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Markdown Cedric", link: "/revue-cedric" },
      { text: "Revue Mathieu", link: "/revue-mathieu" },
    ],
    sidebar: [],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
