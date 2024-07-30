import { createI18n } from "vue-i18n";
import { zh } from "./locales/zh";
import { en } from "./locales/en";
type Locales = "en" | "zh";
const defaultLocale: Locales = "en";
const data: { value: Locales } = {
  value: defaultLocale,
};
const locales = new Set<Locales>([defaultLocale, "zh"]);

export const i18n = createI18n({
  locale: defaultLocale,
  messages: {
    en,
    zh,
  },
});

export const useLocales = () => {
  return {
    get value(): Locales {
      return data.value;
    },
    change: (locale: Locales) => {
      if (locale === data.value) return;
      if (locales.has(locale)) {
        data.value = locale;
        i18n.global.locale = locale;
      }
    },
  };
};
