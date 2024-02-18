import { useState } from "react";
const Login = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <button
      className="btn-login"
      onClick={() => {
        btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
      }}
    >
      {btnText}
    </button>
  );
};
export default Login;
