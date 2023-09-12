import CartContext from "./cart-ctx";
import React, { useState } from "react";

export const CartProvider = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const onToggle = () => {
    setIsCartShown(!isCartShown);
  };

  const cartContext = {
    items: [],
    isCartShown: isCartShown,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    onCartToggle: onToggle,
  };
  return (
    <CartContext.Provider value={{ cartContext }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
