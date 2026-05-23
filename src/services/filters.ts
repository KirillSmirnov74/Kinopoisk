import { get } from '../config/http-client-kinopoisk'
import { API } from '../config/api'
import { FiltersResponse,FilmsResponse } from '../types'
import { FilmApiParams } from '../types'

export async function requestFilters(): Promise<FiltersResponse> {
    const response = await get(`${API.films}/filters`)
    return response.data
}

export async function requestFilmsFilters(data: FilmApiParams ): Promise<FilmsResponse> {
    const response = await get(`${API.films}`,{
        params : {
            ...data
        }
    })
    return response.data
}

