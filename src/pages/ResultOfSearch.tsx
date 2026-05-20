import React, { useEffect, useMemo } from "react";
import { MovieList } from "../components/MovieList";
import { Pagination } from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getFilmsWithPoster } from "../helpers";
import { useSearchParams } from "react-router";
import { fetchFilmsFilters } from "../redux/films-search-slice";
import { Title } from "../components/Title";
import { FilmApiParams } from "../types";

export function ResultOfSearch(): React.ReactElement {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const { data: resultOfSearch, totalPages, loading, error } = useAppSelector((state) => state.resultsOfSearch);

    const filmsWithPoster = getFilmsWithPoster(resultOfSearch);

    const apiParams = useMemo<FilmApiParams>(() => {
        const raw = Object.fromEntries(searchParams.entries());
        return {
            page: raw.page ? Number(raw.page) : 1,
            keyword: raw.keyword || undefined,
            order: raw.order as 'RATING' | 'YEAR' | undefined,
            genres: raw.genres ? [Number(raw.genres)] : undefined,
            countries: raw.countries ? [Number(raw.countries)] : undefined,
            yearFrom: raw.yearFrom ? Number(raw.yearFrom) : undefined,
            yearTo: raw.yearTo ? Number(raw.yearTo) : undefined,
            ratingFrom: raw.ratingFrom ? Number(raw.ratingFrom) : undefined,
            ratingTo: raw.ratingTo ? Number(raw.ratingTo) : undefined,
        };
    }, [searchParams]);

    useEffect(() => {
        dispatch(fetchFilmsFilters(apiParams));
        window.scrollTo(0, 0);
    }, [dispatch, apiParams]);

    function handlePageChange(newPage: number) {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(newPage));
        setSearchParams(params);
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full py-10">
            <div className="w-full max-w-7xl px-5">
                {apiParams.keyword ? (<div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8 text-center">
                    <Title title='Поиск по запросу:' className="text-3xl font-bold text-white" />
                    <span className="text-3xl font-bold text-black">"{apiParams.keyword}"</span>
                </div>) : null}


                {loading && <p className="text-center text-gray-400 text-lg">Загрузка...</p>}
                {error && <p className="text-center text-red-500 text-lg">Ошибка при поиске</p>}

                {!loading && !error && (
                    <>
                        {filmsWithPoster.length > 0 ? (
                            <>
                                <MovieList data={filmsWithPoster} />
                                <div className="mt-10">
                                    <Pagination
                                        currentPage={apiParams.page ?? 1}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </>
                        ) : (
                            <p className="text-center text-gray-400 text-lg mt-10">
                                Ничего не найдено
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}