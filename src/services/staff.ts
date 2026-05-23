import { get } from '../config/http-client-kinopoisk'
import { API } from '../config/api'
import { StaffDetailsResponse, StaffResponse } from '../types'

export async function requestFilmStaff(filmId: number) : Promise<StaffResponse> {
    const response = await get(API.staff,{
        params: {
            filmId
        }
    })
    return response.data
}

export async function requestStaffMemberDetails(id: number) : Promise<StaffDetailsResponse> {
    const response = await get(`${API.staff}/${id}`)
    return response.data
}
