import CartContext from "../../store/cart-ctx";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
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
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
