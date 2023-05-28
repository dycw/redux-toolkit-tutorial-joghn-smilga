import { api } from "../api/api";
import { Item } from "../items";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = { items: Item[] };
const state: State = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = 0;
      }
    },
    increase: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = Math.max(item.quantity - 1, 0);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getCartItems.matchFulfilled,
      (state, action) => {
        state.items = action.payload;
      }
    );
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export const selectQuantity = (state: State, id: number): number => {
  const item = state.items.find((i) => i.id === id);
  return item ? item.quantity : 0;
};
export const selectTotalQuantity = (state: State): number =>
  state.items.reduce((acc, el) => acc + el.quantity, 0);
export const selectTotalPrice = (state: State): number =>
  state.items.reduce((acc, el) => acc + el.price * el.quantity, 0);
