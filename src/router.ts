import { createBrowserRouter } from 'react-router'
import { Layout } from '../src/components/Layout'
import type { RouteObject } from 'react-router'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Main } from './pages/Main'
import { MoviePage } from './pages/MoviePage'
import { TopMovies } from './pages/TopMovies'
import { ResultOfSearch } from './pages/ResultOfSearch'
import { StaffMember } from './pages/StaffMember'
import { FavoritesFilms } from './pages/FavoritesFilms'
import { ActivationLinkParser } from './components/ActivationLinkParser'
import { Activation } from './components/Activation'


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
        path: 'films/favorites',
        Component: FavoritesFilms
      },
      {
        path: 'films/top-250',
        Component: TopMovies,
      },
      {
        path: 'search', 
        Component: ResultOfSearch,
      },
      { 
        path: 'films/search', 
        Component: ResultOfSearch 
      },
      {
        path: 'staff/:staffId',
        Component: StaffMember,
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
        path: '/auth/activate/link-parser',
        Component: ActivationLinkParser,
      },
       {
        path: '/auth/activate/:uid/:token',
        Component: Activation,
      },
      {
        path: '/film/:filmId',
        Component: MoviePage
      }
    ]
  },
]

export const router = createBrowserRouter(routes)