import { get } from '../config/http-client'
import { API } from '../config/api'
import { FilmBudgetResponse, FilmResponse, FilmsResponse, SimilarsFilmsResponse, StaffResponse,SearchFilmsResponse } from '../types'

export async function requestFilms(page: number,type: string =  'TOP_POPULAR_MOVIES'): Promise<FilmsResponse> {
    const response = await get(`${API.films}/collections`,{
        params: {
            page,
            type,
        }
    })
    return response.data
}

export async function requestTop250Films(page: number,type: string =  'TOP_250_MOVIES'): Promise<FilmsResponse> {
    const response = await get(`${API.films}/collections`,{
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

export async function requestFilmsByKeyword(page: number,keyword:string) : Promise<SearchFilmsResponse> {
    const response = await get(`${API.films}`,{
        params: {
            page,
            keyword
        }
    })
    return response.data
}



