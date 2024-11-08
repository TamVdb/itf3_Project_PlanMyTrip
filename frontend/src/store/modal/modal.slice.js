import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: false,
   modalType: '',
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state, action) => {
         console.log('openModal triggered:', action.payload);
         state.isOpen = true;
         state.modalType = action.payload;
      },
      closeModal: (state) => {
         console.log('closeModal triggered');
         state.isOpen = false;
         state.modalType = '';
      },
      swithToLogin: (state) => {
         state.isOpen = true;
         state.modalType = 'login';
      },
      swithToSignup: (state) => {
         state.isOpen = true;
         state.modalType = 'signup';
      },
      swithToAddtrip: (state) => {
         state.isOpen = true;
         state.modalType = 'addTrip';
      },
      swithToUpdatetrip: (state) => {
         state.isOpen = true;
         state.modalType = 'updateTrip';
      },
   }
});

export const { openModal, closeModal, swithToLogin, swithToSignup, swithToAddtrip, swithToUpdatetrip } = modalSlice.actions;

export default modalSlice.reducer;