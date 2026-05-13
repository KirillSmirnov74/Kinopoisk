import Home from '../assets/icons/Home.svg?react';
import Favorites from '../assets/icons/Favorites.svg?react';
import Trends from '../assets/icons/Trends.svg?react';
import { Link } from 'react-router';

export function MovieNavigation() {
  return (
    <nav>
      <ul className="flex items-center gap-1">

        <li>
          <Link
            to="/films"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 
                       hover:text-black hover:bg-white/60 
                       transition-all duration-200"
          >
            <Home className="w-5 h-5 fill-current text-gray-500 group-hover:text-black transition-colors" />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/favorites"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 
                       hover:text-black hover:bg-white/60 
                       transition-all duration-200"
          >
            <Favorites className="w-5 h-5 fill-current text-gray-500 group-hover:text-black transition-colors" />
            <span>Favorites</span>
          </Link>
        </li>

        <li>
          <Link
            to="/films/top-250"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 
                       hover:text-black hover:bg-white/60 
                       transition-all duration-200"
          >
            <Trends className="w-5 h-5 fill-current text-gray-500 group-hover:text-black transition-colors" />
            <span>Top 250</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}