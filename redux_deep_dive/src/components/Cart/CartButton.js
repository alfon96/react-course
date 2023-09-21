import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
