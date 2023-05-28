import { cartItem } from "../cartItems";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

type State = {
  cartItems: cartItem[];
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

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    await new Promise((r) => setTimeout(r, 1000));
    return json;
  } catch (err) {
    console.log(err);
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCartItems.fulfilled,
        (state, action: PayloadAction<cartItem[]>) => {
          state.isLoading = false;
          state.cartItems = action.payload;
        }
      )
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
