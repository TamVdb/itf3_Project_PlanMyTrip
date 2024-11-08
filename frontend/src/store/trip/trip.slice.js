import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   trips: [
      {
         "id": 1,
         "name": "A week in Barcelona",
         "location": "Barcelona",
         "start_date": "01/11/2024",
         "end_date": "08/11/2024",
         "days": 7,
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
         "id": 2,
         "name": "Madness in London",
         "location": "London",
         "start_date": "02/08/2024",
         "end_date": "05/08/2024",
         "days": 3,
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
         "id": 3,
         "name": "Boat trip in Greece",
         "location": "Greece",
         "start_date": "07/05/2024",
         "end_date": "13/05/2024",
         days: 6,
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
         "id": 4,
         "name": "Adventures in Bali",
         "location": "Bali",
         "start_date": "03/07/2025",
         "end_date": "17/07/2025",
         "days": 14,
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      }
   ],
};

const tripSlice = createSlice({
   name: 'trip',
   initialState,
   reducers: {
      addTrip: (state, action) => {
         const newTrip = {
            id: nanoid(),
            name: action.payload.name,
            description: action.payload.description,
            location: action.payload.location,
            start_date: action.payload.start_date,
            end_date: action.payload.end_date,
            days: action.payload.days,
            isDone: false,
         };
         state.trips.push(newTrip);
      },

      deleteTrip: (state, action) => {
         state.trips = state.trips.filter(trip => trip.id !== action.payload);
      },

      updateTrip: (state, action) => {
         const { id, newName, newDescription, newLocation, newStart_date, newEnd_date, newDays } = action.payload;
         state.trips = state.trips.map(trip => {
            trip.id === id ? { ...trips, name: newName, description: newDescription, location: newLocation, start_date: newStart_date, end_date: newEnd_date, days: newDays } : trip;
         });
      },

      checkTrip: (state, action) => {
         const trip = state.trips.find(trip => trip.id === action.payload);
         if (trip) {
            trip.isDone = !trip.isDone;
         }
      },
   },
});

export const { addTrip, deleteTrip, updateTrip, checkTrip } = tripSlice.actions;
export default tripSlice.reducer;