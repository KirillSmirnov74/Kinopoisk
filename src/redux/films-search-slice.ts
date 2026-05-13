import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  requestFilmsByKeyword } from "../services/films";
import { SearchFilmsResponse, ResultsOfSearchState} from "../types";


export const fetchResultsOfSearch = createAsyncThunk('resultsOfSearch/fetchResultsOfSearch',async ({page,keyword} : {page : number,keyword: string}, { rejectWithValue }) => {
    try {
      const resultOfSearch = await requestFilmsByKeyword(page,keyword)
      return resultOfSearch
    } catch (error) {
      return rejectWithValue(error as Error)
    }
  }
)

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

      builder.addCase(fetchResultsOfSearch.pending, (state:ResultsOfSearchState ) => {
        state.loading = true
      })
      builder.addCase(fetchResultsOfSearch.fulfilled, (state: ResultsOfSearchState, action: PayloadAction<SearchFilmsResponse>) => {
        state.loading = false
        state.data = action.payload.items
        state.totalPages = action.payload.totalPages
      })
      builder.addCase(fetchResultsOfSearch.rejected, (state: ResultsOfSearchState) => {
        state.loading = false
        state.error = true
      })
  },
});
export const { setTotalPages } = resultsOfSearchSlice.actions
export const resultsOfSearchReducer =  resultsOfSearchSlice.reducer