import Login from "./Login";
const Header = () => {
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
          <Login />
        </ul>
      </div>
    </div>
  );
};
export default Header;
