import { createBrowserRouter } from 'react-router'
import { Layout } from '../src/components/Layout'
import type { RouteObject } from 'react-router'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Main } from './pages/Main'
import { MoviePage } from './pages/MoviePage'
import { TopMovies } from './pages/TopMovies'
import { ResultOfSearch } from './pages/ResultOfSearch'


const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
       {
        index: true, 
        Component: Main,
      },
      {
        path: 'films',
        Component: Main,
      },
      {
        path: 'films/top-250',
        Component: TopMovies,
      },
      { 
        path: "films/page/:pageNumber", 
        Component: Main,
      },
      { 
        path: 'films/top-250/page/:pageNumber',
        Component: TopMovies,
      },
      {
        path: 'search', 
        Component: ResultOfSearch,
      },
      {
        path: 'films/search/:keyword/page/:pageNumber',
        Component: ResultOfSearch,
      },
      { 
        path: 'films/search/:keyword', 
        Component: ResultOfSearch 
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