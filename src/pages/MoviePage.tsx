import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { SwiperComponent } from '../components/Swiper'
import { PosterL } from '../components/PosterL'
import { MovieInfo } from '../components/MovieInfo'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { clearFilm, fetchFilm, fetchFilmBudget, fetchFilmStaff } from '../redux/film-slice'
import { addFavoriteFilms, clearSimilarsFilms, fetchSimilarsFilms, removeFavoriteFilm } from '../redux/films-slice'
import { getFilmsWithPoster } from '../helpers'
import Favorite from '../assets/icons/Favorite.svg?react'
import FavoriteDefault from '../assets/icons/Favorire-default.svg?react'
import { addFavoriteId, getFavoriteIds, removeFavoriteId } from '../utils/favoritesFilms'

export function MoviePage(): React.ReactElement {
    const { filmId } = useParams()
    const dispatch = useAppDispatch()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const { data: film, loading } = useAppSelector((store) => store.film)
    const filmBudget = useAppSelector((store) => store.film.filmBudget)
    const similarsFilms = useAppSelector((store) => store.films.similarsFilms)
    const filmStaff = useAppSelector((store) => store.film.filmStaff)

    const filterSimilarsFilmsWithPoster = getFilmsWithPoster(similarsFilms)

    const budgetData = filmBudget && filmBudget.total !== 0
        ? filmBudget.items
        : null

    useEffect(() => {
        dispatch(clearFilm())
        dispatch(clearSimilarsFilms())

        if (filmId) {
            const id = Number(filmId)
            dispatch(fetchFilm(id))
            dispatch(fetchFilmBudget(id))
            dispatch(fetchSimilarsFilms(id))
            dispatch(fetchFilmStaff(id))
            const isFavorite = getFavoriteIds().includes(id)
            setIsFavorite(isFavorite)
        }
        window.scrollTo(0, 0)
    }, [dispatch, filmId])

    function handleClickFavoriteIcon() {
        const id = Number(filmId)
        if (!id || isNaN(id)) return

        const isCurrentlyFavorite = getFavoriteIds().includes(id)

        if (isCurrentlyFavorite) {
            removeFavoriteId(id)
            dispatch(removeFavoriteFilm(id))
            setIsFavorite(false)
        } else {
            addFavoriteId(id)
            dispatch(addFavoriteFilms(id))
            setIsFavorite(true)
        }
    }

    if (loading || !film) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <p className="text-gray-400 text-lg">Загрузка...</p>
            </div>
        )
    }

    return (
        <div className="flex px-12 gap-12 w-full max-w-7xl mx-auto py-10">
            <div>
                <PosterL posterUrl={film.posterUrl} />
                <div className="flex mt-5 items-center justify-center">
                    <span className="text-md text-semibold text-white mr-8">Добавить в избранное</span>
                    <button onClick={handleClickFavoriteIcon}>
                        {isFavorite
                            ? (<Favorite width={30} height={30} fill='white' />)
                            : (<FavoriteDefault width={30} height={30} fill='gray' />)
                        }
                    </button>
                </div>
            </div>

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
                        <span className="text-3xl font-bold text-white">Похожие на этот</span>
                        <SwiperComponent data={filterSimilarsFilmsWithPoster} />
                    </div>
                )}
            </div>
        </div>
    )
}