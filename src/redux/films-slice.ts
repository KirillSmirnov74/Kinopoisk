import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestFilms, requestSimilarsFilms } from "../services/films";
import { FilmsResponse, FilmsState, SimilarsFilmsResponse } from "../types";

export const fetchFilms = createAsyncThunk('films/fetchFilms',async (page: number, { rejectWithValue }) => {
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

const initialState: FilmsState = {
  data: [],
  totalPages: 0,
  similarsFilms: [],
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
  },
});
export const { setTotalPages } = filmsSlice.actions
export const filmsReducer =  filmsSlice.reducer