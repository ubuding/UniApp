<template>
  <view class="w-full h-120px center flex-col relative bg-navigation">
    <view class="text-36px mt-26px animate-bounce"> Uni.App </view>
    <view class="absolute left-12px top-0 flex">
      <view @click="onSetModel">
        {{ global.mode === "light" ? "☀️" : "🔮" }}
      </view>

      <view class="mx-12px">en</view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "@/store";
const global = useGlobalStore();

const onSetModel = () => {
  global.setModel(global.mode === "light" ? "dark" : "light");
};
</script>
