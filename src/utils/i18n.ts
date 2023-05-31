/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 09:58:40
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 09:58:50
 * @FilePath: /valgood/src/utils/i18n.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import i18n from 'i18next'
import enUS from '@/assets/locales/en-US'
import zhCN from '@/assets/locales/zh-CN'
import { defaultSetting } from '@/default-setting'

i18n.init({
  resources: {
    en: {
      translation: enUS,
    },
    zh: {
      translation: zhCN,
    },
  },
  lng: defaultSetting.defaultLang || 'zh',
  fallbackLng: defaultSetting.defaultLang || 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export function t(key: string) {
  return i18n.t(key) || key
}

export { i18n }
