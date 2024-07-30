<!-- variable.css uno.config.ts -->
<template>
  <div :class="'w-full h-full bg-page text-color ' + global.mode">
    <slot>u-configurator</slot>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store";
import { onMounted } from "vue";
const global = useGlobalStore();

onMounted(() => {
  global.setModel(global.mode);
});
</script>
