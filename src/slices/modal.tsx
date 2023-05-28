import { createSlice } from "@reduxjs/toolkit";

type State = {
  isOpen: boolean;
};
const state: State = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: state,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
