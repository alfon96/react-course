import React from "react";
const CartContext = React.createContext({
  isCartShown: false,
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  onCartToggle: () => {
    console.log("OLD FUN");
  },
});

export default CartContext;
