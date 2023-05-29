// router/index.ts
import { Navigate, createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: lazyLoad(Home),
      },
      {
        path: 'about',
        element: lazyLoad(About),
      },
    ],
  },
]

export default createBrowserRouter(routes, {
  basename: '/',
})
