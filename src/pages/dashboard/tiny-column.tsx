/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-31 09:55:20
 * @lastModified  2023-05-31 09:55:28
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 09:55:20
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 09:55:22
 * @FilePath: /valgood/src/pages/dashboard/tiny-column.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { TinyColumn } from '@antv/g2plot'
import { useLayoutEffect, useRef } from 'react'

function DemoTinyColumn() {
  const container = useRef(null)

  useLayoutEffect(() => {
    const data = [50, 40, 81, 400, 300, 219, 269]

    const tinyColumn = new TinyColumn(container.current!, {
      height: 50,
      autoFit: true,
      data,
      tooltip: {
        customContent(x, data) {
          return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`
        },
      },
    })

    tinyColumn.render()

    return () => {
      tinyColumn.destroy()
    }
  }, [])

  return <div ref={container} className="w-[100%]" />
}

export default DemoTinyColumn
