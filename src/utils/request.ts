import { useGlobalStore } from "@/store";
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }

    options.timeout = 10000;

    const global = useGlobalStore();
    if (global.token) {
      options.header.Authorization = global.token;
    }
  },
};
uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);

/** @TYPE Backend return data format (后端返回数据格式) */
interface Backend<T> {
  data: T;
  code: string | number;
  msg: string;
}

const func = <T>(options: UniApp.RequestOptions) => {
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...options,
      success(resp) {
        const data = resp.data as Backend<T>;
        if (resp.statusCode >= 200 && resp.statusCode < 300) {
          if (data.code) {
            uni.showToast({
              icon: "none",
              title: data.msg || "请求错误",
            });
            reject(resp);
          } else {
            resolve(data.data);
          }
        } else if (resp.statusCode === 401) {
          const global = useGlobalStore();
          global.token = "";
          // uni.navigateTo({ url: "/pages/login/index" });
          reject(resp);
        } else {
          uni.showToast({
            icon: "none",
            title: data.msg || "请求错误",
          });
          reject(resp);
        }
      },
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误，换个网络试试",
        });
        reject(err);
      },
    });
  });
};

type Data = string | AnyObject | ArrayBuffer;
type Config = Exclude<UniApp.RequestOptions, "url">;
interface Request {
  get: <T>(url: string, data?: Data, config?: Config) => Promise<T>;
  post: <T>(url: string, data?: Data, config?: Config) => Promise<T>;
  put: <T>(url: string, data?: Data, config?: Config) => Promise<T>;
}

/** @Example request.post("/user/login",{}) */
export const request: Request = {
  get: (url, data, config) =>
    func({
      method: "GET",
      url,
      data,
      ...config,
    }),
  post: (url, data, config) =>
    func({
      method: "POST",
      url,
      data,
      ...config,
    }),
  put: (url, data, config) =>
    func({
      method: "PUT",
      url,
      data,
      ...config,
    }),
};
