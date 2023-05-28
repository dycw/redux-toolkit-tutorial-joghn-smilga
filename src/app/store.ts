import { api } from "../api/api";
import { cartSlice } from "../slices/cart";
import { modalSlice } from "../slices/modal";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

setupListeners(store.dispatch);
