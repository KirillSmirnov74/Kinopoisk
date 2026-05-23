import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { requestStaffMemberDetails } from '../services/staff'
import { StaffState, StaffDetailsResponse} from '../types'
import { requestFilm } from '../services/films'

export const fetchFilmsDetailsByIds = createAsyncThunk('staff/fetchFilmsDetails',
    async (filmIds: number[], { rejectWithValue }) => {
    try {
      const idsToLoad = filmIds.slice(0, 20)
      // Создаём массив промисов
      const requests = idsToLoad.map(id => requestFilm(id))
      const results = await Promise.all(requests)
      
      return results
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchStaffMemberDetails = createAsyncThunk('staff/fetchStaffMember',async (id: number, { rejectWithValue }) => {
    try {
      const staffMemberDetails = await requestStaffMemberDetails(id)
      return staffMemberDetails
    } catch (error) {
      return rejectWithValue(error as Error)
    }
  }
)

const initialState: StaffState = {
  data: null,
  filmography : [],
  filmsDetails: [],
  loading: false,
  error: false,
}

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    clearStaffMember: (state: StaffState) => {
      state.data = null
      state.filmography = null
      state.filmsDetails = null
    }}, 
  extraReducers: (builder) => {

      builder.addCase(fetchStaffMemberDetails.pending, (state: StaffState) => {
        state.loading = true
      })
      builder.addCase(fetchStaffMemberDetails.fulfilled, (state: StaffState, action: PayloadAction<StaffDetailsResponse>) => {
        state.loading = false
        state.data = action.payload
        state.filmography = action.payload.films
      })
      builder.addCase(fetchStaffMemberDetails.rejected, (state: StaffState) => {
        state.loading = false
        state.error = true
      })

      builder.addCase(fetchFilmsDetailsByIds.pending, (state: StaffState) => {
        state.loading = true
      })
      builder.addCase(fetchFilmsDetailsByIds.fulfilled, (state: StaffState, action) => {
        state.loading = false
        state.filmsDetails = action.payload
      })
      builder.addCase(fetchFilmsDetailsByIds.rejected, (state: StaffState) => {
        state.loading = false
        state.error = true
      })
  },
})

export const { clearStaffMember } = staffSlice.actions
export const staffMemberReducer =  staffSlice.reducer