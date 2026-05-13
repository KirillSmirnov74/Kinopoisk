import { useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { fetchFilms } from "../redux/films-slice";
import { getFilmsWithPoster } from "../helpers";
import { useParams } from "react-router";
import { Pagination } from "../components/Pagination";

export function Main() {
    const { data: films, totalPages } = useAppSelector((state) => state.films);
    const dispatch = useAppDispatch()
    const { pageNumber } = useParams()

    const currentPage = pageNumber ? Number(pageNumber) : 1
    const validFilms = getFilmsWithPoster(films)

    useEffect(() => {
        dispatch(fetchFilms(currentPage));
        window.scrollTo(0, 0);
    }, [dispatch, currentPage]);

    return (
        <div className="flex flex-col items-center min-h-screen w-full">
            <div className="w-full max-w-7xl">
                <MovieList data={validFilms} />
                <div className="mt-10">
                    <Pagination currentPage={currentPage} totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
}