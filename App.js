import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Company logo" />
      </div>
      <div className="items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default App = () => {
  return (
    <div className="main">
      <Header></Header>
    </div>
  );
};

const react = ReactDOM.createRoot(document.getElementById("root"));

react.render(App());
