import { createSlice, current } from "@reduxjs/toolkit";
import { addTrip, getTrips, getTrip, deleteTrip, updateTrip, checkTrip } from "./trip.service";

const initialState = {
   trips: [],
   currentTrip: null,
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: ''
};

const tripSlice = createSlice({
   name: 'trip',
   initialState,
   reducers: { reset: (state) => initialState },
   extraReducers: (builder) => {
      builder
         .addCase(addTrip.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(addTrip.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.trips.push(action.payload);
         })
         .addCase(addTrip.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(getTrips.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getTrips.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.trips = action.payload;
         })
         .addCase(getTrips.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(getTrip.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getTrip.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.currentTrip = action.payload;
         })
         .addCase(getTrip.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(deleteTrip.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(deleteTrip.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.trips = state.trips.filter(trip => trip.id !== action.payload.id);
         })
         .addCase(deleteTrip.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(updateTrip.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(updateTrip.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.trips = state.trips.map(trip =>
               trip.id === action.payload.id ? action.payload : trip
            );
         })
         .addCase(updateTrip.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(checkTrip.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(checkTrip.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            const updatedTrip = action.payload.updatedTrip;
            state.trips = state.trips.map(trip =>
               trip.id === updatedTrip.id ? updatedTrip : trip
            );
         })
         .addCase(checkTrip.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         });
   },
});


export const { reset } = tripSlice.actions;
export default tripSlice.reducer;