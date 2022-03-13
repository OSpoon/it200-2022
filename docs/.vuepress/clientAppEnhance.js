import { defineClientAppEnhance } from "@vuepress/client";
import contentPage from "./component/ContentPage.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("content-page", contentPage);
});
