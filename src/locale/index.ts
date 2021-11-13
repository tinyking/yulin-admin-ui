import { createI18n } from 'vue-i18n';
import el_zh_cn from 'element-plus/lib/locale/lang/zh-cn';
import zh_cn from './lang/zh-cn';

const messages = {
  'zh-cn': {
    el: el_zh_cn,
    ...zh_cn,
  },
};

const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  globalInjection: true,
  messages,
});

export default i18n;
