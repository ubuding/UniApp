import Http, { type HttpRequestConfig } from "luch-request";
import { useGlobalStore } from "@/store";

/** @Example http.post("/user/login",{}) */
export const http = new Http({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  header: {
    "Content-Type": "multipart/form-data;application/json;charset=UTF-8;",
  },
});

http.interceptors.request.use(
  (config: HttpRequestConfig) => {
    const global = useGlobalStore();
    if (global.token) {
      if (config?.header) config.header.Authorization = global.token;
    }
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

http.interceptors.response.use(
  (resp) => {
    const data = resp.data;
    if (data.code) {
      uni.showToast({
        icon: "none",
        title: data.msg || "请求错误",
      });
      return Promise.reject(resp);
    } else {
      return Promise.resolve(data.data);
    }
  },
  (error) => {
    if (error.statusCode == 401) {
      const global = useGlobalStore();
      global.token = "";
      // uni.navigateTo({ url: "/pages/login/index" });
    }
    const { errMsg } = error;
    uni.showToast({
      title: errMsg,
      duration: 2000,
    });
    return Promise.resolve(error);
  }
);
