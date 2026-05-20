import { useRef, useEffect, useState } from 'react';
import Filters from '../assets/icons/Filters.svg?react';
import { useNavigate } from 'react-router';
import { FilterPanel } from './FIlterPanel';
import { createPortal } from 'react-dom';

interface FormFieldProps {
  onClose?: () => void;
}

export function FormFieldForHeader({ onClose }: FormFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState<string>('')
  const [isOpenFilterPanel, setisOpenFilterPanel] = useState<boolean>(false)

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }


  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (searchValue.trim()) {
      const params = new URLSearchParams();
      params.set('keyword', searchValue.trim());
      navigate(`/films/search?${params.toString()}`);

      if (onClose) onClose();
    }
  }


  function handleClickFilterIcon(event?: React.MouseEvent<HTMLButtonElement>) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
      setisOpenFilterPanel(!isOpenFilterPanel)
    }
  }

  function closeFilterPanel() {
    setisOpenFilterPanel(false)
  }

  return (
    <div className="absolute left-[245px] right-[230px] top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out">
      <form onSubmit={handleSubmit} className='relative'>
        <input
          ref={inputRef}
          type='text'
          value={searchValue}
          onChange={handleChange}
          placeholder='Поиск фильмов...'
          className='w-full pl-4 pr-10 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-md border-0 focus:outline-none text-sm placeholder-gray-400'
        />

        <button
          type='button'
          className='absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-colors'
          onClick={handleClickFilterIcon}
        >
          <Filters width={16} height={16} className='fill-current' />
        </button>
      </form>

      {isOpenFilterPanel && createPortal(
        <div className="fixed top-0 right-0 h-screen max-w-md
        bg-gray-900 shadow-2xl z-[300]
        overflow-y-auto m-0 p-0">
          <FilterPanel closeFilterPanel={closeFilterPanel} />
        </div>,
        document.body
      )}
    </div>
  );
}
