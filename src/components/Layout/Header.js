import React from "react";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className="flex justify-between p-4  bg-[#8a2b06] text-white  items-center lg:justify-evenly">
        <h1 className="text-2xl font-semibold"> ReactMeals</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>

      <div className={`${classes["main-image"]} `}>
        <img src={mealsImg} alt="A table full of delicious food!"></img>
      </div>
    </>
  );
};
export default Header;
