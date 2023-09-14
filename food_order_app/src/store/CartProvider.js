import CartContext from "./cart-ctx";
import React, { useState, useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    return addElementToCart(state, action);
  } else if (action.type === "RMV_CART_ITEM") {
    return removeItemFromCart(state, action);
  }

  return defaultCartState;

  function removeItemFromCart(state, action) {
    let updatedItems;

    const cartObjectIndex = state.items.findIndex(
      (obj) => obj.id === action.id
    );

    let cartObject = state.items[cartObjectIndex];

    if (cartObject.amount > 1) {
      const updatedItem = { ...cartObject, amount: cartObject.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[cartObjectIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    const updatedTotalAmount = state.totalAmount - cartObject.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  function addElementToCart(state, action) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
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
