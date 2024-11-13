import { createSlice } from "@reduxjs/toolkit";
import { addTrip, getTrips, deleteTrip } from "./trip.service";

const initialState = {
   trips: [],
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
         });




      //    updateTrip: (state, action) => {
      //       const { id, newName, newDescription, newLocation, newStart_date, newEnd_date, newDays } = action.payload;
      //       state.trips = state.trips.map(trip => {
      //          trip.id === id ? { ...trips, name: newName, description: newDescription, location: newLocation, start_date: newStart_date, end_date: newEnd_date, days: newDays } : trip;
      //       });
      //    },

      //       checkTrip: (state, action) => {
      //          const trip = state.trips.find(trip => trip.id === action.payload);
      //          if (trip) {
      //             trip.isDone = !trip.isDone;
      //          }
      //       },
   },
});

export const { reset } = tripSlice.actions;
export default tripSlice.reducer;