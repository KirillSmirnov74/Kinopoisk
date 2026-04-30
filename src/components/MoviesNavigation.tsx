import Home from '../assets/icons/Home.svg?react';
import Favorites from '../assets/icons/Favorites.svg?react';
import Settings from '../assets/icons/Settings.svg?react';
import Trends from '../assets/icons/Trends.svg?react';

export function MovieNavigation() {
  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Favorites, label: 'Favorites', href: '#' },
    { icon: Trends, label: 'Trends', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <nav>
      <ul className="flex items-center gap-1">
        {navItems.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl 
                         text-sm font-medium text-gray-600 
                         hover:text-black hover:bg-white/60 
                         transition-all duration-200"
            >
              <Icon className="w-5 h-5 fill-current text-gray-500 group-hover:text-black transition-colors" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}