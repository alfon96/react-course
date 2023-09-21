import { cartActions } from "../../store";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalAmount);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Object.entries(items).map(([id, item], index) => (
          <CartItem key={index} id={id} item={item} />
        ))}
      </ul>

      <p>Total: {total.toFixed(2)}</p>
    </Card>
  );
};

export default Cart;
