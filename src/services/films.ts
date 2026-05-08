import { get } from '../config/http-client'
import { API } from '../config/api'
import { FilmBudgetResponse, FilmResponse, FilmsResponse, SimilarsFilmsResponse, StaffResponse } from '../types'

export async function requestFilms(page:number = 1, type: string = 'FILM'): Promise<FilmsResponse> {
    const response = await get(API.films,{
        params: {
            page,
            type,
        }
    })
    return response.data
}

export async function requestFilm(filmId: number): Promise<FilmResponse> {
    const response = await get(`${API.films}/${filmId}`)
    return response.data
}

export async function requestFilmBudget(filmId: number) : Promise<FilmBudgetResponse> {
    const response = await get(`${API.films}/${filmId}/box_office`)
    return response.data
}

export async function requestSimilarsFilms(filmId:number) : Promise<SimilarsFilmsResponse> {
    const response = await get(`${API.films}/${filmId}/relations`)
    return response.data
}

export async function requestFilmStaff(filmId: number) : Promise<StaffResponse> {
    const response = await get(API.staff,{
        params: {
            filmId
        }
    })
    return response.data
}



