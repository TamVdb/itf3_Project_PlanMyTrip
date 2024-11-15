import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: false,
   modalType: '',
   currentTripId: null,
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state, action) => {
         state.isOpen = true;
         state.modalType = action.payload;
         state.currentTripId = null;
      },
      closeModal: (state) => {
         state.isOpen = false;
         state.modalType = '';
         state.currentTripId = null;
      },
      swithToLogin: (state) => {
         state.isOpen = true;
         state.modalType = 'login';
         state.currentTripId = null;
      },
      swithToSignup: (state) => {
         state.isOpen = true;
         state.modalType = 'signup';
         state.currentTripId = null;
      },
      swithToAddtrip: (state) => {
         state.isOpen = true;
         state.modalType = 'addTrip';
         state.currentTripId = null;
      },
      swithToUpdatetrip: (state, action) => {
         state.isOpen = true;
         state.modalType = 'updateTrip';
         state.currentTripId = action.payload;
      },
   }
});

export const { openModal, closeModal, swithToLogin, swithToSignup, swithToAddtrip, swithToUpdatetrip } = modalSlice.actions;

export default modalSlice.reducer;