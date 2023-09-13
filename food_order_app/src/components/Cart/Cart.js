import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-ctx";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.cartContext.totalAmount.toFixed(2)}`;
  const hasItems = ctx.cartContext.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.cartContext.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={ctx.cartContext.onCartToggle}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
