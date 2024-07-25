<template>
  <UModule title="Hot">
    <view class="center flex-1">Hot</view>
  </UModule>
  <!-- <view class="center flex-1">Hot</view> -->
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";

const show = ref(false);
onLoad(() => {
  show.value = true;

  setTimeout(() => {
    show.value = false;
  }, 500);
});
</script>

<route lang="json">
{
  "layout": "default",
  "style": {
    "navigationStyle": "custom"
  }
}
</route>
