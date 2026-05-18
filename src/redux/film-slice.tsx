import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestFilm, requestFilmBudget } from "../services/films";
import { requestFilmStaff } from "../services/staff";
import { FilmBudgetResponse, FilmResponse, FilmState, StaffResponse } from "../types";

export const fetchFilm = createAsyncThunk<FilmResponse, number>('film/fetchFilm', async (id: number, { rejectWithValue }) => {
    try {
        const film = await requestFilm(id)
        return film
    } catch (error) {
        return rejectWithValue(error as Error)
    }
}
)

export const fetchFilmBudget = createAsyncThunk('film/fetchFilmBudget', async (id: number, { rejectWithValue }) => {
    try {
        const filmBudget = await requestFilmBudget(id)
        return filmBudget
    } catch (error) {
        return rejectWithValue(error as Error)
    }
})

export const fetchFilmStaff = createAsyncThunk('film/fetchFilmStaff', async (id: number, { rejectWithValue }) => {
    try {
        const filmstaff = await requestFilmStaff(id)
        return filmstaff
    } catch (error) {
        return rejectWithValue(error as Error)
    }
})

const initialState: FilmState = {
    data: null,
    filmBudget: null,
    filmStaff: [],
    loading: false,
    error: false,
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        clearFilm: (state: FilmState) => {
            state.data = null
            state.filmBudget = null
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchFilm.pending, (state: FilmState) => {
            state.loading = true
        })
        builder.addCase(fetchFilm.fulfilled, (state: FilmState, action: PayloadAction<FilmResponse>) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchFilm.rejected, (state: FilmState) => {
            state.loading = false
            state.error = true
        })


        builder.addCase(fetchFilmBudget.pending, (state: FilmState) => {
            state.loading = true
        })
        builder.addCase(fetchFilmBudget.fulfilled, (state: FilmState, action: PayloadAction<FilmBudgetResponse>) => {
            state.loading = false
            state.filmBudget = action.payload
        })
        builder.addCase(fetchFilmBudget.rejected, (state: FilmState) => {
            state.loading = false
            state.error = true
        })


        builder.addCase(fetchFilmStaff.pending, (state: FilmState) => {
            state.loading = true
        })
        builder.addCase(fetchFilmStaff.fulfilled, (state: FilmState, action: PayloadAction<StaffResponse>) => {
            state.loading = false
            state.filmStaff = action.payload
        })
        builder.addCase(fetchFilmStaff.rejected, (state: FilmState) => {
            state.loading = false
            state.error = true
        })
    },
});

export const { clearFilm } = filmSlice.actions
export const filmReducer = filmSlice.reducer