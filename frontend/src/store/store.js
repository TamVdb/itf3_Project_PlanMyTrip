import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import userReducer from './users/user.slice';

export const store = configureStore({
   reducer: {
      auth: authReducer,
      user: userReducer,
   },
});

export default store;