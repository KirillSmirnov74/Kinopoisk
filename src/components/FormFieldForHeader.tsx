import { useRef, useEffect, useState } from 'react';
import Filters from '../assets/icons/Filters.svg?react';
import { useNavigate } from 'react-router';

interface FormFieldProps {
  onClose?: () => void;
}

export function FormFieldForHeader({ onClose }: FormFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('');

  // Фокус при открытии
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Просто обновляем стейт при вводе, БЕЗ диспатча и консоли
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  // Срабатывает ТОЛЬКО при нажатии Enter или клике на кнопку
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (searchValue.trim()) {
      navigate(`/films/search/${searchValue}`)
      if (onClose) onClose()
    }
  }

  function handleBlur() {
    setTimeout(() => {
      if (onClose) onClose();
    }, 200);
  }

  return (
    <div className="absolute left-[245px] right-[230px] top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out">
      <form onSubmit={handleSubmit} className='relative'>
        <input
          ref={inputRef}
          type='text'
          value={searchValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Поиск фильмов...'
          className='w-full pl-4 pr-10 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-md border-0 focus:outline-none text-sm placeholder-gray-400'
        />

        <button
          type='submit'
          className='absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-colors'
        >
          <Filters width={16} height={16} className='fill-current' />
        </button>
      </form>
    </div>
  );
}
