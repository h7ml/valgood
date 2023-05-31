/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-31 09:54:53
 * @lastModified  2023-05-31 09:54:59
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 09:54:53
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 09:54:54
 * @FilePath: /valgood/src/pages/dashboard/tiny-area.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { TinyArea } from '@ant-design/plots'

function DemoTinyArea() {
  const data = [0, 300, 438, 287, 309, 600, 900, 575, 563, 300, 200]
  const config = {
    height: 95,
    data,
    smooth: true,
    areaStyle: {
      fill: 'l(360) 1:rgba(98,0,234,0.65)  0.5:rgba(177,128,245,0.5)  0.5:rgba(177,128,245,0.5)',
    },
  }
  return (
    <TinyArea
      {...config}
      renderer="svg"
      line={{ color: '#6200ea' }}
      appendPadding={[0, -24, 0, -16]}
    />
  )
}

export default DemoTinyArea
