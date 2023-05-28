import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  cartItems: string[];
  amount: number;
  total: number;
  isLoading: boolean;
};
const state: State = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {},
});

export const {} = cartSlice.actions;
