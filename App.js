import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.jpg";

/**
 * Header
 *    - Logo
 *    - Nav Items
 *
 * Body
 *    - Search
 *    - Res Container
 *        - Res Card
 *              -Img
 *              -Name of res, start rating, cuisine, delivery time
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 *
 */

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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Damru Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard></RestaurantCard>
      </div>
    </div>
  );
};

export default App = () => {
  return (
    <div className="main">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const react = ReactDOM.createRoot(document.getElementById("root"));

react.render(App());
