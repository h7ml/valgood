/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 13:02:31
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-29 13:09:55
 * @FilePath: /valgood/src/pages/Home/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import useCounterStore from '@/stores/counter'

function Home() {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return (
    <div>
      <div>Home Page</div>
      <button onClick={() => increase(1)}> counter: {counter} </button>
    </div>
  )
}

export default Home
