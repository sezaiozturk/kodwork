import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jobs: [],
    favoriteJobs: []
}
const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload
        },
        setFavoriteJobs: (state, action) => {
            state.favoriteJobs.push(action.payload);
        },
        removeJobs: (state, action) => {
            state.favoriteJobs = state.favoriteJobs.filter(job => job.id !== action.payload);
        }
    }
})
export default jobsSlice.reducer;
export const { setJobs, setFavoriteJobs, removeJobs } = jobsSlice.actions;