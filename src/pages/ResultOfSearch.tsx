import React, { useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { Pagination } from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getFilmsWithPoster } from "../helpers";
import { useParams } from "react-router";
import { fetchResultsOfSearch } from "../redux/films-search-slice";
import { Title } from "../components/Title";

export function ResultOfSearch(): React.ReactElement {
    const { data: resultOfSearch, totalPages, loading, error } = useAppSelector((state) => state.resultsOfSearch);

    const filmsWithPoster = getFilmsWithPoster(resultOfSearch || []);
    const dispatch = useAppDispatch();
    const { keyword, pageNumber } = useParams();
    const currentPage = pageNumber ? Number(pageNumber) : 1;

    useEffect(() => {
        if (keyword) {
            dispatch(fetchResultsOfSearch({
                page: currentPage,
                keyword: keyword
            }));
            window.scrollTo(0, 0);
        }

    }, [dispatch, keyword, currentPage]);

    return (
        <div className="flex flex-col items-center min-h-screen w-full py-10">
            <div className="w-full max-w-7xl px-5">


                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8 text-center">
                    <Title
                        title='Поиск по запросу:'
                        className="text-3xl font-bold text-white"
                    />
                    <span className="text-3xl font-bold text-black">
                        "{keyword}"
                    </span>
                </div>

                {loading && <p className="text-center text-gray-400 text-lg">Загрузка...</p>}

                {error && <p className="text-center text-red-500 text-lg">Ошибка при поиске</p>}

                {!loading && !error && (
                    <>
                        {filmsWithPoster.length > 0 ? (
                            <>
                                <MovieList data={filmsWithPoster} />

                                <div className="mt-10">
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        basePath={`/films/search/${keyword}`}
                                    />
                                </div>
                            </>
                        ) : (
                            <p className="text-center text-gray-400 text-lg mt-10">
                                Ничего не найдено по запросу "{keyword}"
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}