import { PosterS } from "./PosterS"
export function MovieCardS() {
    return (
        <div className='flex items-center gap-3 hover:bg-gray-400 py-2 px-2'>
            <PosterS />
            <div />
            <p className='text-base font-bold text-black'>Star Wars</p>
        </div>
    )
}