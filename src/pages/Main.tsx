import { useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { fetchFilms } from "../redux/films-slice";

export function Main() {
    const { data: films } = useAppSelector((state) => state.films)
    const dispatch = useAppDispatch()
    console.log(films)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    return <MovieList data={films} />

}