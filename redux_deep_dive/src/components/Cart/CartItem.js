import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const onAddHandler = () => {
    dispatch(cartActions.addItem({ ...item, id: props.id }));
  };
  const onRemoveHandler = () => {
    dispatch(cartActions.removeItem({ id: props.id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
