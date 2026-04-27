import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Loyaut'
import type { RouteObject } from 'react-router'
import { MovieList } from './components/Movielist'

const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: MovieList,
      },
     
    ]
  },
]

export const router = createBrowserRouter(routes)