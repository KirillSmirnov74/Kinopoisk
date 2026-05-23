import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { requestFilms, requestSimilarsFilms, requestFilm } from '../services/films'
import { FilmResponse, FilmsResponse, FilmsState, SimilarsFilmsResponse } from '../types'
import { getFavoriteIds } from '../utils/favoritesFilms'

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (page: number, { rejectWithValue }) => {
  try {
    const films = await requestFilms(page)
    return films
  } catch (error) {
    return rejectWithValue(error as Error)
  }
}
)

export const fetchSimilarsFilms = createAsyncThunk('films/fetchSimilarsFilms', async (id: number, { rejectWithValue }) => {
  try {
    const similarsFilms = await requestSimilarsFilms(id)
    return similarsFilms
  } catch (error) {
    return rejectWithValue(error as Error)
  }
})

export const fetchFavoritesFilmsByids = createAsyncThunk('films/fetchFavoritesFilmsByids',
  async (filmIds: number[], { rejectWithValue }) => {
    try {
      // Создаём массив промисов
      const requests = filmIds.map(id => requestFilm(id))
      const results = await Promise.all(requests)

      return results
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: FilmsState = {
  data: [],
  totalPages: 0,
  similarsFilms: [],
  favoritesFilmsIds: getFavoriteIds(),
  favoritesFilms: [],
  loading: false,
  error: false,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setTotalPages: (state: FilmsState, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
    clearSimilarsFilms: (state: FilmsState) => {
      state.similarsFilms = []
    },
    addFavoriteFilms: (state: FilmsState, action: PayloadAction<number>) => {
      state.favoritesFilmsIds.push(action.payload)
    },
    removeFavoriteFilm: (state: FilmsState, action: PayloadAction<number>) => {
      state.favoritesFilmsIds = state.favoritesFilmsIds.filter(id => id !== action.payload)
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state: FilmsState) => {
      state.loading = true
    })
    builder.addCase(fetchFilms.fulfilled, (state: FilmsState, action: PayloadAction<FilmsResponse>) => {
      state.loading = false
      state.data = action.payload.items
      state.totalPages = action.payload.totalPages
    })
    builder.addCase(fetchFilms.rejected, (state: FilmsState) => {
      state.loading = false
      state.error = true
    })

    builder.addCase(fetchSimilarsFilms.pending, (state: FilmsState) => {
      state.loading = true
    })
    builder.addCase(fetchSimilarsFilms.fulfilled, (state: FilmsState, action: PayloadAction<SimilarsFilmsResponse>) => {
      state.loading = false
      state.similarsFilms = action.payload.items
    })
    builder.addCase(fetchSimilarsFilms.rejected, (state: FilmsState) => {
      state.loading = false
      state.error = true
    })

    builder.addCase(fetchFavoritesFilmsByids.pending, (state: FilmsState) => {
      state.loading = true
    })
    builder.addCase(fetchFavoritesFilmsByids.fulfilled, (state: FilmsState, action: PayloadAction<FilmResponse[]>) => {
      state.loading = false
      state.favoritesFilms = action.payload
    })
    builder.addCase(fetchFavoritesFilmsByids.rejected, (state: FilmsState) => {
      state.loading = false
      state.error = true
    })
  },
})
export const { clearSimilarsFilms, addFavoriteFilms, removeFavoriteFilm } = filmsSlice.actions
export const { setTotalPages } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer