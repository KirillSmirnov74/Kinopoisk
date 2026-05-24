export const baseUrlKinopoisk = 'https://kinopoiskapiunofficial.tech'
export const baseUrlAuth = 'https://studapi.teachmeskills.by'

const filmsEndpoint = '/api/v2.2/films' // AllFilms
const staffEndpoint = '/api/v1/staff'

// Auth
const authSignInEndpoint = '/auth/jwt/create/'
const authUsersEndpoint = '/auth/users/'
const authUsersActivateEndpoint = '/auth/users/activation/'
const authRefreshTokenEndpoint = '/auth/jwt/refresh/'
const authAboutMeEndpoint = '/auth/users/me'

export const API = {
  films: filmsEndpoint,
  staff: staffEndpoint,
  authSignIn: authSignInEndpoint,
  authUsers: authUsersEndpoint,
  authUsersActivate: authUsersActivateEndpoint,
  authRefreshToken: authRefreshTokenEndpoint,
  authAboutMe: authAboutMeEndpoint,
}