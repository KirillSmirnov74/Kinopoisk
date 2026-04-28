import Home from '../assets/icons/Home.svg?react';
import Favorites from '../assets/icons/Favorites.svg?react';
import Settings from '../assets/icons/Settings.svg?react';
import Trends from '../assets/icons/Trends.svg?react';

export function MovieNavigation() {
  return (
    <div className=' text-center bg-white max-w-3xs w-full pl-8 pt-5'>
      <nav className='flex flex-col gap-5 py-3 items-center'>
        <ul className='flex flex-col gap-5 w-full p-0 m-0 list-none'>
          <li>
            <a href='#' className='flex items-center gap-3'>
              <Home color='black' width={20} height={20} />
              <span className='text-base'>Home</span>
            </a>
          </li>
          <li>
            <a href='#' className='flex items-center gap-3'>
              <Favorites width={20} height={20} />
              <span className='text-base'>Favorites</span>
            </a>
          </li>
          <li>
            <a href='#' className='flex items-center gap-3'>
              <Trends width={20} height={20} />
              <span className='text-base'>Trends</span>
            </a>
          </li>
          <li>
            <a href='#' className='flex items-center gap-3'>
              <Settings width={20} height={20} />
              <span className='text-base'>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
} 