<template>
  <view class="w-full h-120px flex-center flex-col relative bg-navigation">
    <view class="text-36px animate-bounce font-mono flex">
      <view class="text-yellow">{{ $t("origin") }}</view
      ><view class="mx-2">-</view>
      <view class="">{{ $t("branches.name") }}</view>
    </view>
    <view class="absolute left-12px top-0 flex">
      <view @click="onSetModel">
        {{ global.mode === "light" ? "☀️" : "🔮" }}
      </view>

      <view
        class="mx-12px"
        @click="locale.change(locale.value === 'en' ? 'zh' : 'en')"
        >{{ locale.value }}</view
      >
    </view>
  </view>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "@/store";
import { useLocales } from "@/i18n";
const global = useGlobalStore();
const locale = useLocales();
const onSetModel = () => {
  global.setModel(global.mode === "light" ? "dark" : "light");
};
</script>
