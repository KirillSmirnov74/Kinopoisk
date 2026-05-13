import React, { useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { Pagination } from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchTop250Films } from "../redux/filmsTop250-slice";
import { getFilmsWithPoster } from "../helpers";
import { useParams } from "react-router";

export function TopMovies(): React.ReactElement {
    const dispatch = useAppDispatch()
    const { pageNumber } = useParams()
    const { data: top250Films, totalPages } = useAppSelector((store) => store.top250Films)
    const filmsWithPoster = getFilmsWithPoster(top250Films)
    const currentPage = pageNumber ? Number(pageNumber) : 1


    useEffect(() => {
        dispatch(fetchTop250Films(currentPage))
    }, [currentPage, dispatch])

    return (
        <div className="flex flex-col items-center min-h-screen w-full">
            <div className="w-full max-w-7xl">
                <MovieList data={filmsWithPoster} />
                <div className="mt-10">
                    <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/films/top-250" />
                </div>
            </div>
        </div>
    );
}