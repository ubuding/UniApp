<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useGlobalStore } from "@/store";
const global = useGlobalStore();
onLaunch(() => {
  console.log("App Launch");
  global.tabIndex = 0;
  // global.tabLoaded = true;

  // uni
  //   .switchTab({
  //     url: "/" + "pages/mine/index",
  //   })
  //   .finally(() => {
  //     uni
  //       .switchTab({
  //         url: "/" + "pages/hot/index",
  //       })
  //       .finally(() => {
  //         uni.switchTab({
  //           url: "/" + "pages/overview/index",
  //         });

  //         global.tabLoaded = true;
  //       });
  //   });
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import url("@/style/reset.css");
@import url("@/style/fonts.css");
@import url("@/style/variable.css");
@import url("@/static/iconfont/iconfont.css");
</style>
