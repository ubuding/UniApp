<template>
  <UConfigurator>
    <view
      v-if="global.tabLoaded"
      class="flex flex-1 flex-col w-full h-full overflow-hidden bg-page"
    >
      <view
        class="bg-navigation text-color text-center pb-16px"
        :style="{
          paddingTop: (safeAreaInsets!.top + 10) + 'px',
        }"
      >
        <slot name="header">
          {{ title }}
        </slot>
      </view>
      <view class="flex flex-1 overflow-hidden bg-page text-color">
        <slot>route-view</slot>
      </view>
      <UTabbar ref="customTabBar" class="order-bot" />
    </view>

    <view
      v-else
      class="flex flex-1 flex-col w-full h-full overflow-hidden center bg-#562b90"
    >
      <image
        class="w-300px h-300px rounded-full"
        src="./images/animation.gif"
      />
    </view>
  </UConfigurator>
</template>
<script setup lang="ts">
import { useGlobalStore } from "@/store";
const { safeAreaInsets } = uni.getSystemInfoSync();
const global = useGlobalStore();

defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
