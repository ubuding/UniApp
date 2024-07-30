<template>
  <view
    :style="{
      paddingBottom: (safeBottom ? safeBottom : 16) + 'px',
    }"
    class="mt-32px bg-navigation text-color"
  >
    <view class="hidden">{{ safeBottom }}</view>

    <view class="w-full h-52px relative flex justify-between">
      <view
        class="flex-center absolute"
        :style="{
          width: (1 / items.length) * 100 + '%',
          transition: 'left 0.5s',
          left,
        }"
      >
        <view class="indicator"> </view>
      </view>
      <view
        v-for="(item, index) in items"
        :key="item.key"
        @click="onClick(item, index)"
        class="flex flex-1 w-full h-full flex-col items-center justify-end"
      >
        <view
          class="absolute flex-center"
          :style="{
            transition: 'top 0.5s',
            top: item.key === type ? '-12px' : '16px',
          }"
        >
          <view
            :style="
              item.key === type
                ? {
                    transition: 'color 0.25s',
                    color: 'white',
                  }
                : { transition: 'color 0.25s' }
            "
            :class="`iconfont icon-` + item.icon + ' text-22px'"
          />
        </view>
        <view
          style="transition: all 0.5s"
          :class="
            (item.key === type ? 'opacity-100' : 'opacity-0') + ' text-14px'
          "
        >
          {{ item.label }}</view
        >
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { tabbar } from "@/constant/tabbar";

defineProps({
  type: {
    type: String,
    default: "overview",
  },
});

const emit = defineEmits<{
  change: [value: string];
}>();
const items = ref(tabbar);

const index = ref(0);
const left = computed(() => (index.value / items.value.length) * 100 + "%");
const onClick = (item: any, i: number) => {
  index.value = i;
  emit("change", item.key);
};

const safeBottom = ref(0);
onMounted(() => {
  const { safeAreaInsets } = uni.getSystemInfoSync();
  safeBottom.value = safeAreaInsets?.bottom || 0;
});
</script>

<style lang="scss" sponed>
.indicator {
  width: 46px;
  height: 46px;
  position: absolute;
  top: -30px;
  background-color: var(--primary-color);
  border-radius: 50%;
  border: 6px solid var(--page);
}

.indicator::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  border-top-right-radius: 20px;
  box-shadow: 1px -10px 0 0 var(--page);
}
.indicator::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  border-top-left-radius: 20px;
  box-shadow: -1px -10px 0 0 var(--page);
}
</style>
