import { getRatingColor } from "../helpers";
import { MovieCardLProps } from "../types";
import { PosterM } from "./PosterM";



export function MovieCardL({ nameRu, posterUrl, ratingKinopoisk, year, genres, kinopoiskId, onClickCard }: MovieCardLProps) {
    const colorForRating = getRatingColor(ratingKinopoisk)

    return (
        <div onClick={onClickCard} data-id={kinopoiskId} className='relative w-full rounded-2xl flex flex-col'>
            <PosterM posterUrl={posterUrl} />
            {ratingKinopoisk ? (<p className={`absolute top-4 left-4 ${colorForRating} text-white px-2 py-1 rounded-lg text-xs font-semibold`}>
                {ratingKinopoisk}
            </p>) : null}
            <div className="pl-3">
                <h3 className="text-base font-bold text-black">{nameRu}</h3>
                <span className="text-xs text-gray-500">{year}, {genres[0]?.genre}</span>
            </div>
        </div>
    );
}