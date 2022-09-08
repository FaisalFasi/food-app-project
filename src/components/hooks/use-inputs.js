import React, { useReducer } from "react";

const initialsValues = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};
const useInput = (validationCheck) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialsValues);

  const inputIsValid = validationCheck(inputState.value);
  const inputIsInvalid = !inputIsValid && inputState.isTouched;

  const valueChangedHandler = (event) => {
    console.log("changehandler");

    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueBlurHandler = () => {
    console.log("blur");
    dispatch({ type: "BLUR" });
  };

  const resetValue = () => {
    console.log("reset");

    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    inputIsValid,
    inputIsInvalid,
    valueChangedHandler,
    valueBlurHandler,
    resetValue,
  };
};

export default useInput;
