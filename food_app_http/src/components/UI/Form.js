import { useContext } from "react";
import useInput from "../../hooks/use-input";
import classes from "./Form.module.css";
import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";

const Form = (props) => {
  const notEmptyValidation = (value) => {
    return value.trim() !== "";
  };

  const cartCtx = useContext(CartContext);
  const { isLoading, error, sendRequest } = useHttp();

  const {
    input: nameInput,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    handleBlur: nameBlurHandler,
    onChange: nameOnChangeHandler,
    reset: nameReset,
  } = useInput(notEmptyValidation);

  const {
    input: addressInput,
    inputIsValid: addressIsValid,
    inputIsInvalid: addressInputIsInvalid,
    handleBlur: addressBlurHandler,
    onChange: addressOnChangeHandler,
    reset: addressReset,
  } = useInput(notEmptyValidation);

  let formIsValid = nameIsValid && addressIsValid;

  const onSumbitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(addressInput + nameInput);

    const requestParams = {
      url: "https://react-http-d9795-default-rtdb.firebaseio.com/order.json",
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: { ...cartCtx.items, address: addressInput, name: nameInput },
    };
    sendRequest(requestParams);

    addressReset();
    nameReset();
    if (!error) {
      props.onOrderCompleted();
    }
  };

  const validationClassesStyle = {
    false: classes["form-control"],
    true: classes["form-control invalid"],
  };

  return (
    <>
      <form onSubmit={onSumbitHandler} className={classes["form-container"]}>
        {isLoading && <p>Wait while we process your order...</p>}
        {error && (
          <p className={classes["error-text"]}>
            There was an error processing your order: {error}
          </p>
        )}
        <div className={validationClassesStyle[nameInputIsInvalid]}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={nameInput}
            onChange={nameOnChangeHandler}
            onBlur={nameBlurHandler}
          ></input>

          {nameInputIsInvalid && (
            <p className={classes["error-text"]}>Please, enter a valid Name.</p>
          )}
        </div>

        <div className={validationClassesStyle[addressInputIsInvalid]}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={addressInput}
            onChange={addressOnChangeHandler}
            onBlur={addressBlurHandler}
          ></input>
          {addressInputIsInvalid && (
            <p className={classes["error-text"]}>
              Please, enter a valid Address.
            </p>
          )}
        </div>

        <div className={classes["form-action"]}>
          <button disabled={!formIsValid}>Confirm Order</button>
        </div>
      </form>
    </>
  );
};

export default Form;
