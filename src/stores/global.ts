/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 13:11:59
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-29 13:12:00
 * @FilePath: /valgood/src/stores/global.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GlobalState {
  primaryColor: string
  setColor: (color: string) => void
}

const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      primaryColor: '#00b96b',
      setColor: (color) => set(() => ({ primaryColor: color })),
    }),
    {
      name: 'primaryColor',
      // partialize 过滤属性，存储哪些字段到localStorage
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => ['primaryColor'].includes(key))),
    },
  ),
)

export default useGlobalStore
