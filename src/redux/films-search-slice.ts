import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchFilmsResponse, ResultsOfSearchState, FilmApiParams } from "../types";
import { requestFilmsFilters } from "../services/filters";


export const fetchFilmsFilters = createAsyncThunk('resultsOfSearch/fetchFilmsFilters', async (data: FilmApiParams, { rejectWithValue }) => {
    try {
        const filmsFilters = await requestFilmsFilters(data)
        return filmsFilters
    } catch (error) {
        return rejectWithValue(error as Error)
    }
})

const initialState: ResultsOfSearchState = {
  data: [],
  totalPages: 0,
  loading: false,
  error: false,
}

export const resultsOfSearchSlice = createSlice({
  name: 'resultsOfSearch',
  initialState,
  reducers: {
     setTotalPages: (state: ResultsOfSearchState, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
  }, 
  extraReducers: (builder) => {

      builder.addCase(fetchFilmsFilters.pending, (state:ResultsOfSearchState ) => {
        state.loading = true
      })
      builder.addCase(fetchFilmsFilters.fulfilled, (state: ResultsOfSearchState, action: PayloadAction<SearchFilmsResponse>) => {
        state.loading = false
        state.data = action.payload.items
        state.totalPages = action.payload.totalPages
      })
      builder.addCase(fetchFilmsFilters.rejected, (state: ResultsOfSearchState) => {
        state.loading = false
        state.error = true
      })
  },
});
export const { setTotalPages } = resultsOfSearchSlice.actions
export const resultsOfSearchReducer =  resultsOfSearchSlice.reducer