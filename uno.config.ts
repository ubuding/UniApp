import {
  type Preset,
  type SourceCodeTransformer,
  defineConfig,
  presetAttributify /**       @LINK https://unocss.dev/presets/attributify */,
  transformerVariantGroup /** @LINK https://unocss.dev/transformers/variant-group#installation */,
  transformerDirectives /**   @LINK https://unocss.dev/transformers/directives */,
  presetIcons /**             @LINK https://unocss.dev/presets/icons#install https://icones.js.org/collection/carbon */,
} from "unocss";

import {
  presetApplet,
  presetRemRpx,
  transformerAttributify /** @Effect Enable Attributify mode for applet 为小程序启用 Attributify 模式 */,
} from "unocss-applet"; /**   @LINK https://github.com/unocss-applet/unocss-applet/tree/main */

const isApplet = process.env?.UNI_PLATFORM?.startsWith("mp-") ?? false;

const presets: Preset[] = [];
const transformers: SourceCodeTransformer[] = [];

if (isApplet) {
  presets.push(presetRemRpx());
  transformers.push(transformerAttributify({ ignoreAttributes: ["block"] }));
} else {
  // presets.push(presetRemRpx("rpx2rem"));
}

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--primary-color)",
      color: "var(--text-color)",
      navigation: "var(--navigation)",
      page: "var(--page)",
    },
  },
  shortcuts: [
    {
      center: "flex justify-center items-center",
    },
    // [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],
  presets: [
    presetApplet(),
    presetIcons({
      warn: true,
      extraProperties: {
        display: "inline-block",
      },
    }),
    presetAttributify() /**       @Example text="sm white" */,
    ...presets,
  ],
  transformers: [
    transformerDirectives() /**   @Example --at-apply: text-center my-0 font-medium; */,
    transformerVariantGroup() /** @Example hover:(bg-gray-400 font-medium) */,
    ...transformers,
  ],
});
