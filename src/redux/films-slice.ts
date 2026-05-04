import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestFilms } from "../servisces/films";
import { FilmsResponse, FilmsState } from "../types";

export const fetchFilms = createAsyncThunk<FilmsResponse>('films/fetchFilms',async (_, { rejectWithValue }) => {
    try {
      const films = await requestFilms()
      return films
    } catch (error) {
      return rejectWithValue(error as Error)
    }
  }
)

const initialState: FilmsState = {
  data: [],
  loading: false,
  error: false,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state: FilmsState) => {
        state.loading = true
      })
      builder.addCase(fetchFilms.fulfilled, (state: FilmsState, action: PayloadAction<FilmsResponse>) => {
        state.loading = false
        state.data = action.payload.items
      })
      builder.addCase(fetchFilms.rejected, (state: FilmsState) => {
        state.loading = false
        state.error = true
      })
  },
});

export const filmsReducer =  filmsSlice.reducer