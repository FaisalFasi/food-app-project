import classes from "./CheckOut.module.css";
import useInput from "../hooks/use-inputs";
import React from "react";
const isEmpty = (value) => value.trim() !== "" && value.trim().length > 1;
const validPostalCode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    inputIsValid: enteredNameIsValid,
    inputIsInvalid: enteredNameIsInvalid,
    valueChangedHandler: enteredNameChangedHandler,
    valueBlurHandler: enteredNameBlurHandler,
    resetValue: enteredNameReset,
  } = useInput((input) => input.trim() !== "");

  const {
    value: enteredStreet,
    inputIsValid: enteredStreetIsValid,
    inputIsInvalid: enteredStreetIsInvalid,
    valueChangedHandler: enteredStreetChangedHandler,
    valueBlurHandler: enteredStreetBlurHandler,
    resetValue: enteredStreetReset,
  } = useInput(isEmpty);
  const {
    value: enteredCity,
    inputIsValid: enteredCityIsValid,
    inputIsInvalid: enteredCityIsInvalid,
    valueChangedHandler: enteredCityChangedHandler,
    valueBlurHandler: enteredCityBlurHandler,
    resetValue: enteredCityReset,
  } = useInput(isEmpty);
  const {
    value: enteredPostalCode,
    inputIsValid: enteredPostalCodeIsValid,
    inputIsInvalid: enteredPostalCodeIsInvalid,
    valueChangedHandler: enteredPostalCodeChangedHandler,
    valueBlurHandler: enteredPostalCodeBlurHandler,
    resetValue: enteredPostalCodeReset,
  } = useInput(validPostalCode);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalCodeIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (enteredNameIsInvalid) {
      return;
    } else if (enteredStreetIsInvalid) {
      return;
    } else if (enteredCityIsInvalid) {
      return;
    } else if (enteredPostalCodeIsInvalid) {
      return;
    }
    enteredNameReset();
    enteredCityReset();
    enteredStreetReset();
    enteredPostalCodeReset();
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    !enteredNameIsInvalid ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    !enteredStreetIsInvalid ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    !enteredPostalCodeIsInvalid ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    !enteredCityIsInvalid ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name"> Your Name </label>
        <input
          type="text"
          id="name"
          onChange={enteredNameChangedHandler}
          onBlur={enteredNameBlurHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className={classes.error}> please enter a valid input</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onBlur={enteredStreetBlurHandler}
          onChange={enteredStreetChangedHandler}
          value={enteredStreet}
        />
        {enteredStreetIsInvalid && (
          <p className={classes.error}> please enter a valid input</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onBlur={enteredPostalCodeBlurHandler}
          onChange={enteredPostalCodeChangedHandler}
          value={enteredPostalCode}
        />
        {enteredPostalCodeIsInvalid && (
          <p className={classes.error}> please enter a valid input</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onBlur={enteredCityBlurHandler}
          onChange={enteredCityChangedHandler}
          value={enteredCity}
        />
        {enteredCityIsInvalid && (
          <p className={classes.error}> please enter a valid input</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {formIsValid && (
          <button className={classes.submit} disabled={!formIsValid}>
            Confirm
          </button>
        )}
      </div>
    </form>
  );
};

export default Checkout;
