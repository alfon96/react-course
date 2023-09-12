import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  isCartShown: false,
  onCartToggle: () => {
    console.log("OLD FUN");
  },
});

export const CartContextProvider = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);

  const onToggle = () => {
    setIsCartShown(!isCartShown);
  };

  return (
    <CartContext.Provider
      value={{ isCartShown: isCartShown, onCartToggle: onToggle }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
