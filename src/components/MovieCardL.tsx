import { PosterL } from "./PosterL"
export function MovieCardL() {
    return (
        <article className=' relative w-full rounded-2xl flex flex-col'>
            <PosterL />
            <p className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                7.6
            </p>
            <div className="pl-3">
                <h3 className="text-base font-bold text-black">Star Wars</h3>
                <span className="text-xs text-gray-500">2026, Fantasy</span>
            </div>
        </article>
    )
}