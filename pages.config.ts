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
  tabBar: {
    custom: true,
    color: "#00000000",
    selectedColor: "#00000000",
    list: [
      {
        pagePath: "pages/overview/index",
        iconPath: "static/logo.png",
        selectedIconPath: "static/logo.png",
        text: "",
      },
      {
        pagePath: "pages/hot/index",
        iconPath: "static/logo.png",
        selectedIconPath: "static/logo.png",
        text: "",
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "static/logo.png",
        selectedIconPath: "static/logo.png",
        text: "",
      },
    ],
  },
});
