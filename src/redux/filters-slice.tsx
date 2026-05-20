import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersResponse, FiltersState } from "../types";
import { requestFilters } from "../services/filters";


export const fetchFilters = createAsyncThunk('filters/fetchFilters', async (_, { rejectWithValue }) => {
    try {
        const filters = await requestFilters()
        return filters
    } catch (error) {
        return rejectWithValue(error as Error)
    }
})


const initialState: FiltersState = {
    countries: [],
    genres: [],
    loading: false,
    error: false,
};

export const FiltersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchFilters.pending, (state: FiltersState) => {
            state.loading = true
        })
        builder.addCase(fetchFilters.fulfilled, (state: FiltersState, action: PayloadAction<FiltersResponse>) => {
            state.loading = false
            state.countries = action.payload.countries
            state.genres = action.payload.genres
        })
        builder.addCase(fetchFilters.rejected, (state: FiltersState) => {
            state.loading = false
            state.error = true
        })
    },
});
export const FiltersReducer = FiltersSlice.reducer