import { cartItem, cartItems } from "../cartItems";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  cartItems: cartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
};
const state: State = {
  cartItems: cartItems,
  amount: 5,
  total: 4,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.amount += 1;
      }
    },
    decrease: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.amount -= 1;
      }
    },
    calculateTotals: (state) => {
      state.amount = state.cartItems.reduce((acc, el) => acc + el.amount, 0);
      state.total = state.cartItems.reduce(
        (acc, el) => acc + el.amount * el.price,
        0
      );
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
