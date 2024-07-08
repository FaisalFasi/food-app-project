import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1> ReactMeals</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!"></img>
      </div>
    </div>
  );
};
export default Header;
