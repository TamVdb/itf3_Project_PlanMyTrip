import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: false,
   modalType: 'login',
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state, action) => {
         state.isOpen = true;
         state.modalType = action.payload;
      },
      closeModal: (state) => {
         state.isOpen = false;
      },
      swithToLogin: (state) => {
         state.modalType = 'login';
      },
      swithToSignup: (state) => {
         state.modalType = 'signup';
      },
   }
});

export const { openModal, closeModal, swithToLogin, swithToSignup } = modalSlice.actions;

export default modalSlice.reducer;