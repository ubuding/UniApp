import { defineStore } from "pinia";

interface State {
  mode: "light" | "dark";
  tabIndex: number;
  tabLoaded: boolean;
  token: string;
}

export const useGlobalStore = defineStore("global", {
  state: (): State => {
    return {
      mode: "light",
      tabIndex: 0,
      tabLoaded: true,
      token: "",
    };
  },
  actions: {
    setModel(mode: "light" | "dark") {
      this.mode = mode;
      if (mode === "light") {
        uni.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#ffffff",
        });
      } else {
        uni.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#000000",
        });
      }
    },
  },
  persist: {
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync,
    },
  },
});
