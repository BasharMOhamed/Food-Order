import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import MealsImage from "../assets/meals.jpg";
const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>ReactMeals</h1>
        <HeaderButton onShow={props.onShow} />
      </header>
      <div className="main-image">
        <img src={MealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};
export default Header;
