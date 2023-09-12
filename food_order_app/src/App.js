import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, { useContext } from "react";
import CartContext from "./store/cart-ctx";

function App() {
  const ctx = useContext(CartContext);
  const cartOpen = ctx.cartContext.isCartShown;
  return (
    <>
      {cartOpen && <Cart />}
      <Header title="ReactMeals" />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
