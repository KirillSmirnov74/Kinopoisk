import { useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { fetchFilms } from "../redux/films-slice";
import { validFilmsWithPoster } from "../helpers";

export function Main() {
    const { data: films } = useAppSelector((state) => state.films)
    const dispatch = useAppDispatch()
    const validFilms = validFilmsWithPoster(films)


    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    return <MovieList data={validFilms} />
}