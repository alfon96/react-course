import useInput from "../hooks/use-inputs";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: enteredSurnameIsInvalid,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid =
    enteredEmailIsValid && enteredSurnameIsValid && enteredNameIsValid;

  const nameInputClasses = !enteredNameIsInvalid
    ? "form-control"
    : "form-control invalid";

  const surnameInputClasses = !enteredSurnameIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !enteredEmailIsInvalid
    ? "form-control"
    : "form-control invalid";

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName + enteredSurname + enteredEmail);
    resetName();
    resetEmail();
    resetSurname();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {enteredNameIsInvalid && <p>Please, insert a valid name</p>}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            value={enteredSurname}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
          />
          {enteredSurnameIsInvalid && <p>Please, insert a valid surname</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {enteredEmailIsInvalid && <p>Please, insert a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
