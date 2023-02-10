import React, { Component } from "react";
import ualogo from "../ualogo.png";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
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
          <img style={{ width: 60, marginLeft: 50 }} src={ualogo} />
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
      </nav>
    );
  }
}
