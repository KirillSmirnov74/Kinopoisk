import { createBrowserRouter } from 'react-router'
import { Layout } from '../src/components/Layout'
import type { RouteObject } from 'react-router'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Main } from './pages/Main'
import { MoviePage } from './pages/MoviePage'


const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Main,
      },
      {
        path: '/auth/sign-in',
        Component: SignIn,
      },
      {
        path: '/auth/sign-up',
        Component: SignUp
      },
      {
        path: '/film/:filmId',
        Component: MoviePage
      }
    ]
  },
]

export const router = createBrowserRouter(routes)