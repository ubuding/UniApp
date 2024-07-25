export interface ITEM {
  key: string;
  label: string;
  icon: string;
  color: string;
  dot: boolean;
  path: string;
  selected: boolean;
}

export const tabbar: Array<ITEM> = [
  {
    key: "overview",
    label: "首页",
    icon: "home",
    color: "",
    dot: false,
    path: "pages/overview/index",
    selected: false,
  },
  {
    key: "hot",
    label: "热门",
    icon: "hot",
    color: "red",
    dot: true,
    path: "pages/hot/index",
    selected: false,
  },
  {
    key: "mine",
    label: "我的",
    icon: "mine",
    color: "",
    dot: false,
    path: "pages/mine/index",
    selected: false,
  },
];
