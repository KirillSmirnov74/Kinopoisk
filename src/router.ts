import { createBrowserRouter } from 'react-router'
import { Layout } from '../src/components/Layout'
import { MovieList } from './components/MovieList'
import type { RouteObject } from 'react-router'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'


const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: MovieList,
      },
      {
        path: '/auth/sign-in',
        Component: SignIn,
      },
      {
        path: '/auth/sign-up',
        Component: SignUp
      }
    ]
  },
]

export const router = createBrowserRouter(routes)