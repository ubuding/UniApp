<template>
  <view class="flex-1 flex-col">
    <Navbar class="w-full" />

    <view class="flex-center h-full">{{ $t("overview.introduction") }}</view>
  </view>
</template>
<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>
