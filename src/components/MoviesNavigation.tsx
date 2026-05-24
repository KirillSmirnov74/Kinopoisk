import React from 'react'
import { Link } from 'react-router'
import Home from '../assets/icons/Home.svg?react'
import Favorites from '../assets/icons/Favorite.svg?react'
import Trends from '../assets/icons/Trends.svg?react'

export function MovieNavigation(): React.ReactElement {
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
            <Home className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" fill="white" />
            <span className="text-gray-400">Главная</span>
          </Link>
        </li>

        <li>
          <Link
            to="/films/favorites"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 
                       hover:text-black hover:bg-white/60 
                       transition-all duration-200"
          >
            <Favorites className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" fill="white" />
            <span className="text-gray-400">Избранное</span>
          </Link>
        </li>

        <li>
          <Link
            to="/films/top-rated"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 
                       hover:text-black hover:bg-white/60 
                       transition-all duration-200"
          >
            <Trends className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" fill="white" />
            <span className="text-gray-400">Топ чарт</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}