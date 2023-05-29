import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import router from './router'
import { useGlobalStore } from '@/stores'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

dayjs.locale('zh-cn')

function App() {
  const { primaryColor } = useGlobalStore()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
