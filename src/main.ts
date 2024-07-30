import { createSSRApp } from "vue";
import "virtual:uno.css";
import App from "./App.vue";
import pinia from "@/store";
import { i18n } from "@/i18n/index";
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(i18n);
  return {
    app,
  };
}
