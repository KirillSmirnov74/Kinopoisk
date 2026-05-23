import React, { useEffect } from 'react'
import { MovieList } from '../components/MovieList'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { fetchFilms } from '../redux/films-slice'
import { getFilmsWithPoster } from '../helpers'
import { useSearchParams } from 'react-router'
import { Pagination } from '../components/Pagination'

export function Main(): React.ReactElement {
    const { data: films, totalPages, loading } = useAppSelector((state) => state.films)
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const pageParam = searchParams.get('page')
    const currentPage = pageParam ? Number(pageParam) : 1

    function handlePageChange(newPage: number) {
        const params = new URLSearchParams(searchParams)
        params.set("page", String(newPage))
        setSearchParams(params)
    }

    const validFilms = getFilmsWithPoster(films || [])

    useEffect(() => {
        dispatch(fetchFilms(currentPage))
        window.scrollTo(0, 0)
    }, [dispatch, currentPage])

    if (loading || !films) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <p className="text-gray-400 text-lg">Загрузка...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full">
            <div className="w-full max-w-7xl">
                <MovieList data={validFilms} />
                <div className="mt-10">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}