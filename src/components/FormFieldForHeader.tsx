import { useRef, useEffect } from 'react';
import Filters from '../assets/icons/Filters.svg?react';

interface FormFieldProps {
  onClose?: () => void;
  label?: string,
  placeHolder?: string
}

export function FormFieldForHeader({ onClose }: FormFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  function handleClickFiltersIcon(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    console.log('Фильтр нажат');
  }

  function handleInputBlur(event: React.FocusEvent<HTMLInputElement>) {
    const target = event.relatedTarget as HTMLElement | null;

    if (target && target.tagName === 'BUTTON') {
      return;
    }
    if (onClose)
      onClose();
  }

  return (
    <div
      className={`
        absolute 
        left-[245px] right-[230px] top-1/2 -translate-y-1/2
        z-40
        transition-all duration-500 ease-out
      `}
    >
      <div className='relative'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Поиск фильмов...'
          onBlur={handleInputBlur}
          className='
            w-full pl-4 pr-10 py-2
            bg-white/70 backdrop-blur-sm rounded-lg
            shadow-md border-0
            focus:outline-none focus:ring-0 
            text-sm placeholder-gray-400
          '
        />

        <button
          type='button'
          onClick={handleClickFiltersIcon}
          className='
            absolute right-2 top-1/2 -translate-y-1/2
            p-1 rounded
            text-gray-400 hover:text-pink-500 hover:bg-pink-50
            transition-colors duration-200
          '
        >
          <Filters width={16} height={16} className='fill-current' />
        </button>
      </div>
    </div>
  );
}
