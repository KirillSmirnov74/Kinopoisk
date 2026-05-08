import React, { useEffect } from "react";
import { useParams } from "react-router";
import { SwiperComponent } from "../components/Swiper";
import { Title } from "../components/Title";
import { PosterL } from "../components/PosterL";
import { MovieInfo } from "../components/MovieInfo";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearFilm, fetchFilm, fetchFilmBudget, fetchFilmStaff } from "../redux/film-slice";
import { fetchSimilarsFilms } from "../redux/films-slice";
import { validFilmsWithPoster } from "../helpers";

export function MoviePage(): React.ReactElement {

    const { filmId } = useParams()
    const dispatch = useAppDispatch()

    const film = useAppSelector((store) => store.film.data)
    const filmBudget = useAppSelector((store) => store.film.filmBudget)
    const similarsFilms = useAppSelector((store) => store.films.similarsFilms)
    const filmStaff = useAppSelector((store) => store.film.filmStaff)

    const filterSimilarsFilmsWithPoster = validFilmsWithPoster(similarsFilms)

    console.log(filmStaff)
    console.log(similarsFilms)

    const budgetData = filmBudget && filmBudget.total !== 0
        ? filmBudget.items
        : null;

    useEffect(() => {
        dispatch(clearFilm())

        dispatch(fetchFilm(Number(filmId)))
        dispatch(fetchFilmBudget(Number(filmId)))
        dispatch(fetchSimilarsFilms(Number(filmId)))
        dispatch(fetchFilmStaff(Number(filmId)))

        window.scrollTo(0, 0);
    }, [dispatch, filmId])

    if (!film) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="flex px-12 gap-12 w-full max-w-7xl mx-auto py-10">
            <PosterL posterUrl={film?.posterUrl} />
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
                />
                {similarsFilms.length <= 1 ? null : (<div className="max-w-3xl w-full mb-10">
                    <Title title="Recomendation" className="text-3xl font-bold text-white mb-8 " />
                    <SwiperComponent data={filterSimilarsFilmsWithPoster} />
                </div>)}
            </div>
        </div>
    )
}