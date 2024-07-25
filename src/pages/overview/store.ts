import { defineStore } from "pinia";

interface State {
  count: number;
}

export const useOverviewStore = defineStore("overview", {
  state: (): State => {
    return {
      count: 0,
    };
  },
  actions: {
    func(args: any) {},
  },
});
