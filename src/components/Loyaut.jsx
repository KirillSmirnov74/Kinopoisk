import React from 'react';
import { Outlet } from 'react-router';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { MovieNavigation } from './MoviesNavigation';
import { MovieList } from './MovieList';
export function Layout() {
  return (
    <div className='flex flex-col bg-red-200 min-h-screen px-5'>
      <Header />
      <div className='flex-1 w-full max-w-7xl'>
        <Main>
          <MovieNavigation />
          <MovieList />

          {/* <Outlet /> */}
        </Main>
      </div>
      <Footer />
    </div>
  );
}
