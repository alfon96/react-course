import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const item = props.item;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(cartActions.addItem({ ...item, id: props.id, quantity: 1 }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={onClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
