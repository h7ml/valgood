/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 10:03:15
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 10:06:45
 * @FilePath: /valgood/src/stores/settings.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface State {
  darkMode: boolean
  collapsed: boolean
  lang: string
}

interface Action {
  setDarkMode: (darkMode: State['darkMode']) => void
  setCollapsed: (collapsed: State['collapsed']) => void
  setLang: (lang: State['lang']) => void
}

export const useSettingsStore = create<State & Action>()(
  devtools(
    persist(
      (set) => {
        return {
          darkMode: false,
          collapsed: false,
          lang: 'zh',
          setDarkMode: (darkMode: State['darkMode']) =>
            set({
              darkMode,
            }),
          setCollapsed: (collapsed: State['collapsed']) =>
            set({
              collapsed,
            }),
          setLang: (lang: State['lang']) =>
            set({
              lang,
            }),
        }
      },
      {
        name: 'globalStore',
        storage: createJSONStorage(() => localStorage),
      },
    ),
    { name: 'globalStore' },
  ),
)
export default useSettingsStore
