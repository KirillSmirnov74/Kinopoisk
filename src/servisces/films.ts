import { get } from '../config/http-client'
import { API } from '../config/api'
import { FilmsResponse } from '../types'

export async function requestFilms(page:number = 1, type: string = 'FILM'): Promise<FilmsResponse> {
    const response = await get(API.films,{
        params: {
            page,
            type,
        }
    })
    return response.data
}