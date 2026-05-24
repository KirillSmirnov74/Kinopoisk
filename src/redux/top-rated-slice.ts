import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { requestTop250Films } from '../services/films'
import { FilmsResponse, TopRatedFilmsState } from '../types'

export const fetchTopRatedFilms = createAsyncThunk('topRatedFilms/fetchTopRatedFilms', async (page: number, { rejectWithValue }) => {
  try {
    const films = await requestTop250Films(page)
    return films
  } catch (error) {
    return rejectWithValue(error as Error)
  }
}
)

const initialState: TopRatedFilmsState = {
  data: [],
  totalPages: 0,
  loading: false,
  error: false,
}

export const topRatedFilmsSlice = createSlice({
  name: 'topRatedFilms',
  initialState,
  reducers: {
    setTotalPages: (state: TopRatedFilmsState, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopRatedFilms.pending, (state: TopRatedFilmsState) => {
      state.loading = true
    })
    builder.addCase(fetchTopRatedFilms.fulfilled, (state: TopRatedFilmsState, action: PayloadAction<FilmsResponse>) => {
      state.loading = false
      state.data = action.payload.items
      state.totalPages = action.payload.totalPages
    })
    builder.addCase(fetchTopRatedFilms.rejected, (state: TopRatedFilmsState) => {
      state.loading = false
      state.error = true
    })
  },
})
export const { setTotalPages } = topRatedFilmsSlice.actions
export const topRatedFilmsReducer = topRatedFilmsSlice.reducer