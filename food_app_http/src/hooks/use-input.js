import { useState } from "react";

const useInput = (validationFun) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const inputIsValid = validationFun(input);
  const inputIsInvalid = !inputIsValid && inputTouched;

  const handleBlur = () => {
    setInputTouched(true);
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const reset = () => {
    setInput("");
    setInputTouched(false);
  };

  return {
    input,
    inputIsValid,
    inputIsInvalid,
    handleBlur,
    onChange,
    reset,
  };
};

export default useInput;
