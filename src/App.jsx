import React from 'react';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { router } from './router';
import { MovieNavigation } from './components/MoviesNavigation';
import { MovieList } from './components/Movielist';
import { Layout } from '../src/components/Layout';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
