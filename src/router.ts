import { createBrowserRouter } from 'react-router'
import { Layout } from '../src/components/Layout'
import { MovieList } from './components/MovieList'
import type { RouteObject } from 'react-router'


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