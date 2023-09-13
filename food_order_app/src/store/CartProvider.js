import CartContext from "./cart-ctx";
import React, { useState, useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type == "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type == "RMV_CART_ITEM") {
    const objWithIdIndex = state.items.findIndex((obj) => obj.id === action.id);

    const updatedItems = state.items.splice(objWithIdIndex, 1);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
  }

  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const [isCartShown, setIsCartShown] = useState(false);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "RMV_CART_ITEM", id: id });
  };

  const onToggle = () => {
    setIsCartShown(!isCartShown);
  };

  const cartContext = {
    items: cartState.items,
    isCartShown: isCartShown,
    totalAmount: cartState.totalAmount,
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
