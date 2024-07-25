<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- <Navbar></Navbar>
  <view class="w-full overflow-hidden flex flex-col overflow-hidden">
    <view class="my-26px text-center">A complete uni-app framework</view>
  </view> -->

  <UModule>
    <template v-slot:header>
      <Navbar></Navbar>
    </template>
    <template v-slot>
      <view class="w-full overflow-hidden flex flex-col overflow-hidden">
        <view class="my-26px text-center">A complete uni-app framework</view>
      </view>
    </template>
  </UModule>
</template>

<route type="home" lang="json">
{
  "layout": "modules",
  "style": {
    "navigationStyle": "custom",
    "navigationBarTitleText": "Home"
  }
}
</route>
