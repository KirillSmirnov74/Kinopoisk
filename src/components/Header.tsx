import KinopoiskLogo from '../assets/icons/Kinopoisk.svg?react';
import { FormField } from './FormField';

export function Header() {
  return (
    <header>
      <div className='flex items-center gap-5  mb-4 py-3 px-2'>
        <div className='flex items-center gap-1 mr-35'>
          <KinopoiskLogo width={40} height={40} />
          <h1 className='text-4xl text-white font-medium mt-auto'>ИНОПОИСК </h1>
        </div>
        <FormField />
      </div>
    </header>
  );
}
