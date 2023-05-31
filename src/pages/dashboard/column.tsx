/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-31 09:56:10
 * @lastModified  2023-05-31 10:07:01
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 09:56:10
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 10:07:01
 * @FilePath: /valgood/src/pages/dashboard/column.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useEffect, useState } from 'react'
import { Column } from '@ant-design/plots'

import columnDarkTheme from './theme/dark-column-theme.json'
import columnLightTheme from './theme/light-column-theme.json'
import { useSettingsStore } from '@/stores'

function DemoColumn() {
  const [data, setData] = useState([])

  const { darkMode } = useSettingsStore()

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }

  const config: any = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    height: 460,
    legend: {
      position: 'bottom',
    },
  }
  return <Column theme={darkMode ? columnDarkTheme : columnLightTheme} {...config} />
}

export default DemoColumn
