import { createSlice } from "@reduxjs/toolkit";
import { TProducts } from "../types/TProducts";
export type TCart = TProducts & { quantity?: number };
const initialState: TCart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.length > 0) {
        state.map((item, index) => {
          // handel products quantity
          if (item.product_id === action.payload.product_id) {
            if (item.quantity !== undefined && item.quantity < 5) {
              item.quantity = (item.quantity || 0) + 1;
            }
            return;
          } else if (index === state.length - 1) {
            state.push(action.payload);
          }
        });
      } else {
        state.push(action.payload);
      }
    },
    deleteFromCart(state, action) {
      const index = state.findIndex(
        (product) => product.product_id === action.payload.product_id
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeFromCart(state, action) {
      if (state.length > 0) {
        if (action.payload.quantity === 1) {
          return state.filter(
            (product) => product.product_id !== action.payload.product_id
          );
        } else {
          state.map((item) => {
            // handel products quantity
            if (item.product_id === action.payload.product_id) {
              if (item.quantity !== undefined && item.quantity > 1) {
                item.quantity = (item.quantity || 1) - 1;
              }
              return;
            }
          });
        }
      }
    },
    clearCart(state) {
      state.length = 0;
    },
  },
});
export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
