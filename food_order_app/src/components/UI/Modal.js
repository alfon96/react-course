import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-ctx";

const Backdrop = () => {
  const ctx = useContext(CartContext);
  return <div className={classes.backdrop} onClick={ctx.onCartToggle} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
