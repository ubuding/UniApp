import { defineUniPages } from "@uni-helper/vite-plugin-uni-pages";

export default defineUniPages({
  globalStyle: {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "",
    navigationBarBackgroundColor: "#ffffff",
    backgroundColor: "#ffffff",
  },
  easycom: {
    autoscan: true,
    custom: {
      "^U(.*)": "@/components/U$1/index.vue",
    },
  },
});
