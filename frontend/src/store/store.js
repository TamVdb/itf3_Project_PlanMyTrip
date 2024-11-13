import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import userReducer from './users/user.slice';
import modalReducer from './modal/modal.slice';
import tripReducer from './trip/trip.slice';

export const store = configureStore({
   reducer: {
      auth: authReducer,
      user: userReducer,
      modal: modalReducer,
      trips: tripReducer,
   },
});

export default store;