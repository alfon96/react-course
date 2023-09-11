import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChaneHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const resetFields = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };

  const resetError = () => {
    setError(null);
  };

  const validation = () => {
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return false;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid  age (>=1).",
      });
      return false;
    }

    return true;
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (validation()) {
      props.onAddUser(enteredUsername, enteredAge);
      resetFields();
    } else {
    }
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onSubmit={resetError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChaneHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
