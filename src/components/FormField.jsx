export function FormField() {
  return (
    <form className=''>
      <div className='relative'>
        <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        <input
          type='text'
          placeholder='Поиск фильмов...'
          className='
            w-md
            pl-10 pr-4 py-3
            bg-white border border-gray-300 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
            transition-all duration-200
            placeholder-gray-400
            text-base
            shadow-sm
            hover:shadow
            '
        />
      </div>
    </form>
  );
}
