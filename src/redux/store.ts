import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { filmsReducer } from './films-slice'
import { filmReducer } from './film-slice'
import { top250FilmsReducer } from './filmsTop250-slice'
import { resultsOfSearchReducer } from './films-search-slice'
import { staffMemberReducer } from './staff-slice'
import { FiltersReducer } from './filters-slice'
import { authReducer } from './auth-slice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    top250Films: top250FilmsReducer,
    resultsOfSearch: resultsOfSearchReducer,
    staffMember: staffMemberReducer,
    filters: FiltersReducer,
    auth: authReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()