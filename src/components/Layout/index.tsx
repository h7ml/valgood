/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 13:13:16
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-29 13:13:17
 * @FilePath: /valgood/src/components/Layout/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'

const { Header, Sider, Content } = Layout

const items: MenuProps['items'] = [
  {
    label: 'home',
    path: '/home',
  },
  {
    label: 'about',
    path: '/about',
  },
].map((nav) => ({
  key: nav.path,
  icon: null,
  label: nav.label,
}))

function BasicLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(0, 0, 0, 0.2)',
            zIndex: 200,
          }}
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Button type="text" onClick={() => setCollapsed(!collapsed)}>
            collapsed
          </Button>
        </Header>
        <Content style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
