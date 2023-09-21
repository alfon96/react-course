import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: true,
  items: {},
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
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
    },
    removeItem(state, action) {
      if (state.items[action.payload.id]) {
        state.totalAmount -= state.items[action.payload.id].price;
        if (state.items[action.payload.id].quantity === 1) {
          delete state.items[action.payload.id];
        } else {
          state.items[action.payload.id].quantity--;
          state.items[action.payload.id].total -=
            state.items[action.payload.id].price;
        }
      }
    },
  },
});

export default cartSlice;
