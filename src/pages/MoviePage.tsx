import React, { useEffect } from "react";
import { useParams } from "react-router";
import { SwiperComponent } from "../components/Swiper";
import { Title } from "../components/Title";
import { PosterL } from "../components/PosterL";
import { MovieInfo } from "../components/MovieInfo";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearFilm, fetchFilm, fetchFilmBudget, fetchFilmStaff } from "../redux/film-slice";
import { fetchSimilarsFilms } from "../redux/films-slice";
import { getFilmsWithPoster } from "../helpers";

export function MoviePage(): React.ReactElement {
    const { filmId } = useParams();
    const dispatch = useAppDispatch();

    const { data: film, loading } = useAppSelector((store) => store.film);
    const filmBudget = useAppSelector((store) => store.film.filmBudget);
    const similarsFilms = useAppSelector((store) => store.films.similarsFilms);
    const filmStaff = useAppSelector((store) => store.film.filmStaff);

    const filterSimilarsFilmsWithPoster = getFilmsWithPoster(similarsFilms);

    const budgetData = filmBudget && filmBudget.total !== 0
        ? filmBudget.items
        : null;

    useEffect(() => {
        dispatch(clearFilm());

        if (filmId) {
            const id = Number(filmId);
            dispatch(fetchFilm(id));
            dispatch(fetchFilmBudget(id));
            dispatch(fetchSimilarsFilms(id));
            dispatch(fetchFilmStaff(id));
        }

        window.scrollTo(0, 0);
    }, [dispatch, filmId]);

    if (loading || !film) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <p className="text-gray-400 text-lg">Загрузка...</p>
            </div>
        );
    }

    return (
        <div className="flex px-12 gap-12 w-full max-w-7xl mx-auto py-10">
            <PosterL posterUrl={film.posterUrl} />

            <div className="flex-1">
                <MovieInfo
                    title={film.nameRu}
                    ratingKinopoisk={film.ratingKinopoisk}
                    IMDbRating={film.ratingImdb}
                    filmLength={film.filmLength}
                    description={film.description}
                    year={film.year}
                    nameOrg={film.nameOriginal}
                    genres={film.genres}
                    countries={film.countries}
                    budget={budgetData}
                    ratingAge={film.ratingAgeLimits}
                    slogan={film.slogan}
                    staff={filmStaff}
                />

                {filterSimilarsFilmsWithPoster.length > 1 && (
                    <div className="max-w-3xl w-full mb-10 mt-12">
                        <Title
                            title="Похожие на этот"
                            className="text-3xl font-bold text-white mb-8"
                        />
                        <SwiperComponent data={filterSimilarsFilmsWithPoster} />
                    </div>
                )}
            </div>
        </div>
    );
}