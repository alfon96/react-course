import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;
function App() {
  const isShown = useSelector((state) => state.ui.isShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
