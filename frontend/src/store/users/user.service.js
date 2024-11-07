import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearCredentials } from '../auth/auth.slice';

const API_URL = `${import.meta.env.VITE_APP_URL}/api/users`;

// Action pour l'inscription
export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
   try {
      const response = await axios.post(`${API_URL}/signup`, userData);
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
   }
});

// Action pour la connexion
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
   try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
   }
});

// Action pour la déconnexion
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
   try {
      await axios.post(`${API_URL}/logout`);
      thunkAPI.dispatch(clearCredentials()); // Mise à jour du state
   } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
   }
});