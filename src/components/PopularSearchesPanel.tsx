import { MovieCardS } from "./MovieCardS";


export function PopularSearchesPanel() {
    return (
        <div className='w-full'>
            <h2 className='text-xl font-bold text-gray-800 mb-6'>Часто ищут</h2>

            <div className='grid grid-cols-4 gap-x-10 gap-y-5 '>
                <MovieCardS />
                <MovieCardS />
                <MovieCardS />
                <MovieCardS />
                <MovieCardS />
                <MovieCardS />
                <MovieCardS />
                <MovieCardS />
            </div>
        </div>
    );
}