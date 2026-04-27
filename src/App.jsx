import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { MovieNavigation } from './components/MoviesNavigation';
import { MovieList } from './components/Movielist';
import { Layout } from './components/Loyaut';

export function App() {
  return (
    <>
      <Layout />
    </>
  );

  // ) <RouterProvider router={router} />;
}
