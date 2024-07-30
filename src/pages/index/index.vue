<script setup lang="ts">
import Tabbar from "./components/tabbar/index.vue";
import Overview from "./components/overview/index.vue";
import Mine from "./components/mine/index.vue";
import Hot from "./components/hot/index.vue";
import { ref } from "vue";
const { safeAreaInsets } = uni.getSystemInfoSync();
const type = ref("overview");
const change = (key: string) => {
  type.value = key;
};
</script>

<template>
  <view class="w-full h-full flex flex-col flex-1 justify-between">
    <view
      class="bg-navigation"
      :style="{
          height: (safeAreaInsets!.top + 10) + 'px',
        }"
    >
    </view>
    <view class="w-full h-full flex flex-1 overflow-hidden">
      <Overview v-show="type === 'overview'" class="w-full" />
      <Hot v-show="type === 'hot'" class="w-full" />
      <Mine v-show="type === 'mine'" class="w-full" />
    </view>
    <Tabbar @change="change" :type="type" />
  </view>
</template>

<route type="home" lang="json">
{
  "style": {
    "navigationStyle": "custom",
    "navigationBarTitleText": "Home"
  }
}
</route>
