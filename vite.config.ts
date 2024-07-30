import { defineConfig } from "vite"; /**                          @LINK https://vitejs.dev/config */
import Uni from "@dcloudio/vite-plugin-uni"; /**                  @LINK https://github.com/dcloudio/uni-app */
import UniPages from "@uni-helper/vite-plugin-uni-pages"; /**     @LINK https://github.com/uni-helper/vite-plugin-uni-pages */
import ViteRestart from "vite-plugin-restart"; /**                @LINK https://github.com/antfu/vite-plugin-restart */
import UnoCSS from "unocss/vite"; /**                             @LINK https://unocss.dev */
import UniLayouts from "@uni-helper/vite-plugin-uni-layouts";
export default defineConfig({
  plugins: [
    UniLayouts({
      layout: "default",
    }),
    UniPages({
      exclude: ["**/components/**"],
    }),
    Uni(),
    UnoCSS(),
    ViteRestart({
      restart: ["vite.config.ts", "uno.config.ts"],
    }),
  ],
});
