import ualogo from "../ualogo.png";
import "./NavBar.css";
import React from "react";
import cart from "../cart.png";
import heart from "../heart.png";
import search from "../search.png";
import { Link } from "react-router-dom";

const NavBar = ({ counters, changeStyle, getCountersWithValue }) => {
  return (
    <nav className="navbar">
      <div class="pre-navbar">
        FREE SHIPPING for members
        <div class="pre-navbar-buttons">
          <button className="member-button">Register</button>
          <button className="member-button">Log-in</button>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#081e50", paddingBottom: "10px" }}
      >
        <Link to={`/products/`}>
          <img style={{ width: 60, marginLeft: 50 }} src={ualogo} />
        </Link>
        <span className="navbar"></span>
      </div>
      <div className="center-buttons">
        <button className="navbar-button">New</button>
        <button className="navbar-button">Mens</button>
        <button className="navbar-button">Womens</button>
        <button className="navbar-button">Kids</button>
        <button className="navbar-button">Shoes</button>
        <button className="navbar-button">Curry</button>
      </div>
      <div className="quick-button-holder">
        <button className="quick-button">
          <img style={{ height: 24 }} src={search} />
        </button>
        <button className="quick-button">
          <img style={{ height: 24 }} src={heart} />
        </button>
        <button type="button" className="quick-button" onClick={changeStyle}>
          <img style={{ height: 24 }} src={cart} />
        </button>
        <div className="cart-summary" id="cart-summary">
          <div className="cart-items">
            <div className="cart-header" style={{ marginLeft: "50px" }}></div>
            <div className="cart-header">Item</div>
            <div className="cart-header">Price</div>
            <div className="cart-header">Qty.</div>
            <div className="cart-header">Total</div>
            <div>
              {counters
                .filter((counter) => counter.value > 0)
                .map(({ image, name, price, value }) => (
                  <div className="cart-items">
                    <div className="cart-items-image-container">
                      <img src={image} className="cart-items-image"></img>
                    </div>
                    <div className="cart-items-name ">{name}</div>
                    <div className="cart-items-price ">P {price}.00</div>
                    <div className="cart-items-value ">{value}</div>
                    <div className="cart-items-total ">
                      P {price * value}.00
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="total-price">
            <div>TOTAL PRICE:</div>
            <div>
              P {counters.reduce((n, { price, value }) => n + price * value, 0)}
              .00
            </div>
          </div>
        </div>
        <span className="cart-badge">
          {getCountersWithValue() > 0 && (
            <div className="badge">{getCountersWithValue()}</div>
          )}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
