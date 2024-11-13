import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = `${import.meta.env.VITE_APP_URL}/api/trips`;

// Action to create a trip
export const addTrip = createAsyncThunk('trips/add', async (tripData, { rejectWithValue }) => {
   try {
      const response = await axios.post(`${API_URL}/add`, tripData, { withCredentials: true });
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
   }
});

// Action to read trips
export const getTrips = createAsyncThunk('trips/get', async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get(`${API_URL}/get`, { withCredentials: true });

      // Mapping => Convertir les données de l'API en format adapté a l'app
      const data = response.data.map(trip => ({
         id: trip._id,
         name: trip.name,
         description: trip.description,
         location: trip.location,
         start_date: trip.start_date,
         end_date: trip.end_date,
         days: trip.days
      }));

      console.log(data);
      return data;
   } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
   }
});

// // Action to update a trip
// export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
//    try {
//       const response = await axios.post(`${API_URL}/login`, credentials, { withCredentials: true });
//       return response.data;
//    } catch (error) {
//       return rejectWithValue(error.response?.data || 'An error occurred');
//    }
// });

// Action to uptdate a trip

// Action to delete a trip
export const deleteTrip = createAsyncThunk('trip/delete', async (id, { rejectWithValue }) => {
   try {
      const response = await axios.delete(`${API_URL}/delete/${id}`, { withCredentials: true });
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
   }
});