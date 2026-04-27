import KinopoiskLogo from '../logo/kinopoisk.svg';
import { FormField } from './FormField';

export function Header() {
  return (
    <header>
      <div className='flex items-center gap-5  mb-4 py-3 px-2'>
        <div className='flex gap-2 mr-35'>
          <img className='w-7 h-7' src={KinopoiskLogo} alt='kinopoisk' />
          <h1 className='text-xl text-white font-medium'>KИНОПОИСК </h1>
        </div>
        <FormField />
      </div>
    </header>
  );
}
