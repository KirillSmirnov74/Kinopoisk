import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { fetchFavoritesFilmsByids } from '../redux/films-slice'
import { MovieList } from '../components/MovieList'
import { Pagination } from '../components/Pagination'
import { useSearchParams } from 'react-router'

export function FavoritesFilms(): React.ReactElement {
    const dispatch = useAppDispatch()
    const favoritesIds = useAppSelector((store) => store.films.favoritesFilmsIds)
    const films = useAppSelector((store) => store.films.favoritesFilms)

    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const totalPages = Math.ceil(favoritesIds.length / 20)
    const startIndex = (currentPage - 1) * 20
    const endIndex = startIndex + 20
    const idsForCurrentPage = favoritesIds.slice(startIndex, endIndex)

    useEffect(() => {
        if (idsForCurrentPage.length > 0) {
            dispatch(fetchFavoritesFilmsByids(idsForCurrentPage));
        }
    }, [dispatch, currentPage])

    function handlePageChange(newPage: number) {
        const params = new URLSearchParams(searchParams)
        if (newPage === 1) {
            params.delete('page')
        } else {
            params.set('page', String(newPage))
        }
        setSearchParams(params)
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full">
            <div className="w-full max-w-7xl">
                <MovieList data={films} />
                <div className="mt-10">
                    {favoritesIds.length > 20 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
