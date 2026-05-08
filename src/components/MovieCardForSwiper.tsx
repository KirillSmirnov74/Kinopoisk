import React from "react";
import { MovieCardForSwiperProps } from "../types";
import { useNavigate } from "react-router";

export function MovieCardForSwiper({ kinopoiskId, posterUrl, nameRu }: MovieCardForSwiperProps): React.ReactElement {
    const navigate = useNavigate()

    function handleClickCardFilm(event: React.MouseEvent<HTMLDivElement>) {

        const filmElement = (event.target as HTMLElement).closest('[data-id]');
        if (filmElement) {
            const filmId = (filmElement as HTMLElement).dataset.id;
            console.log(filmId);
            navigate(`/film/${filmId}`)
        }
    }
    return (
        <div onClick={handleClickCardFilm} data-id={kinopoiskId} className="h-80 w-full cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-2">
                <img className="w-full h-80 object-cover rounded-xl" src={posterUrl || ''} />
            </div>
            <span className="text-black text-sm font-medium font-semibold">
                {nameRu}
            </span>
        </div>
    )
}