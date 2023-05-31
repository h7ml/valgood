/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-31 09:56:36
 * @lastModified  2023-05-31 09:56:41
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 09:56:36
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 09:56:37
 * @FilePath: /valgood/src/pages/dashboard/tiny-line.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { TinyLine } from '@antv/g2plot'
import { useLayoutEffect, useRef } from 'react'

function DemoTinyLine() {
  const container = useRef(null)

  useLayoutEffect(() => {
    const data = [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
      243, 226, 192,
    ]
    const tinyLine = new TinyLine(container.current!, {
      height: 50,
      autoFit: true,
      data,
      smooth: true,
      color: '#ffffff',
    })

    tinyLine.render()

    return () => {
      tinyLine.destroy()
    }
  }, [])

  return <div ref={container} className="w-[100%]" />
}

export default DemoTinyLine
