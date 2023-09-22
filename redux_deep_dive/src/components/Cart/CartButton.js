import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";


const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfElementsInCart = useSelector(
    (state) => state.cart.totalElements
  );
  const onClickHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfElementsInCart}</span>
    </button>
  );
};

export default CartButton;
