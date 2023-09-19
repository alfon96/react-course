import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Form from "./components/UI/Form";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isOrderingFormVisible, setIsOrderingFormVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const onOrder = () => {
    setIsOrderingFormVisible(true);
    setCartIsShown(false);
  };

  const onOrderCompleted = () => {
    setIsOrderingFormVisible(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={onOrder} />}

      <Header onShowCart={showCartHandler} />
      <main>
        {!isOrderingFormVisible && <Meals />}
        {isOrderingFormVisible && <Form onOrderCompleted={onOrderCompleted} />}
      </main>
    </CartProvider>
  );
}

export default App;
