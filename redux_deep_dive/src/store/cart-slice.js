import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCartState = {
  items: {},
  totalAmount: 0,
  totalElements: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalElements = action.payload.totalElements;
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      if (!state.items[action.payload.id]) {
        state.items[action.payload.id] = {
          title: action.payload.title,
          price: action.payload.price,
          description: action.payload.description,
          total: action.payload.price * action.payload.quantity,
          quantity: action.payload.quantity,
        };
      } else {
        state.items[action.payload.id].quantity++;
        state.items[action.payload.id].total += action.payload.price;
      }
      state.totalAmount += action.payload.price;
      state.totalElements++;
      state.changed = true;
    },
    removeItem(state, action) {
      if (state.items[action.payload.id]) {
        state.totalAmount -= state.items[action.payload.id].price;
        state.totalElements--;
        if (state.items[action.payload.id].quantity === 1) {
          delete state.items[action.payload.id];
        } else {
          state.items[action.payload.id].quantity--;
          state.items[action.payload.id].total -=
            state.items[action.payload.id].price;
        }
        state.changed = true;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
