import CartContext from "../../store/cart-ctx";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHiglighted, setBtnIsHiglighted] = useState(false);
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.cartContext.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );
  const btnClsses = `${classes.button} ${btnIsHiglighted ? classes.bump : ""}`;

  useEffect(() => {
    if (ctx.cartContext.items.length === 0) {
      return;
    }
    setBtnIsHiglighted(true);
    const timer = setTimeout(() => {
      setBtnIsHiglighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.cartContext.items]);

  return (
    <button
      type="button"
      className={btnClsses}
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
