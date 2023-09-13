import CartContext from "../../store/cart-ctx";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.cartContext.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );

  return (
    <button
      type="button"
      className={classes.button}
      onClick={ctx.cartContext.onCartToggle}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
