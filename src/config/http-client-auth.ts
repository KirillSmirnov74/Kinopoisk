import axios from 'axios'
import { baseUrlAuth } from './api'
import { API } from './api'
import { store } from '../redux/store'
import { jwtApi } from '../utils/jwt'
import { refreshToken } from '../redux/auth-slice'

export const authHttpClient = axios.create({
  baseURL: baseUrlAuth
})

authHttpClient.interceptors.request.use(async (config) => {
  if (config.url?.includes(API.authRefreshToken)) {
    return config
  }

  let { jwt } = store.getState().auth
  
  if (jwt) {
    if (jwtApi.isAccessTokenExpired(jwt.access)) {
      try {
          await store.dispatch(refreshToken({ refresh: jwt.refresh }))
          const state = store.getState().auth
        if (state.jwt) {
          jwt = state.jwt
        } else {
          jwt = null 
        }
      } catch (error) {
        jwt = null 
      }
    }
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt.access}`
    }
  }

  return config
})

export const getAuth = authHttpClient.get
export const postAuth = authHttpClient.post
