import { useState, useEffect } from "react";
import Login from "./Login";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  // useEffect would be called after your component renders
  // Empty dependency array [] => component loads => useEffect called on initial render only
  // Don't specify dependency array => component loads => on every render of your comp, useEffect called
  // If you have a variable that is being updated and if you have mentioend inside depenedency array it will call useEffect

  useEffect(() => {
    console.log("header useEffect is called");
    //setBtnText("Login");
  }, [btnText]);
  console.log("header called");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          alt="app-logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
          {/* <button
            className="btn-login"
            onClick={() => {
              btnText1 == "abc" ? setBtnText1("bcd") : setBtnText1("abc");
            }}
          >
            {btnText1}
          </button> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
