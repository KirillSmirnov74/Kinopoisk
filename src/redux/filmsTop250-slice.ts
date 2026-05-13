import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  requestTop250Films } from "../services/films";
import { FilmsResponse, Top250FilmsState } from "../types";


export const fetchTop250Films = createAsyncThunk('top250Films/fetchTop250Films',async (page: number, { rejectWithValue }) => {
    try {
      const films = await requestTop250Films(page)
      return films
    } catch (error) {
      return rejectWithValue(error as Error)
    }
  }
)

const initialState: Top250FilmsState = {
  data: [],
  totalPages: 0,
  loading: false,
  error: false,
}

export const top250FilmsSlice = createSlice({
  name: 'top250Films',
  initialState,
  reducers: {
     setTotalPages: (state: Top250FilmsState, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
  }, 
  extraReducers: (builder) => {

      builder.addCase(fetchTop250Films.pending, (state:Top250FilmsState ) => {
        state.loading = true
      })
      builder.addCase(fetchTop250Films.fulfilled, (state: Top250FilmsState, action: PayloadAction<FilmsResponse>) => {
        state.loading = false
        state.data = action.payload.items
        state.totalPages = action.payload.totalPages
      })
      builder.addCase(fetchTop250Films.rejected, (state: Top250FilmsState) => {
        state.loading = false
        state.error = true
      })

  },
});
export const { setTotalPages } = top250FilmsSlice.actions
export const top250FilmsReducer =  top250FilmsSlice.reducer