import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="navbar-brand">
        <img
          src="https://www.theflyingsaucercafe.in/assets/images/logo.jpg"
          alt="logo"
          id="logo"
        />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            {" "}
            <Link to="/" id="home" className="nav-link text-uppercase">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            {" "}
            <Link to="/about" id="about" className="nav-link text-uppercase">
              About
            </Link>
          </li>

          <li className="nav-item ">
            {" "}
            <Link to="/menu" id="menu" className="nav-link text-uppercase">
              Menu
            </Link>
          </li>

          <li className="nav-item">
            {" "}
            <Link
              to="/reservation"
              id="reser"
              className="nav-link text-white text-uppercase"
            >
              Reservation
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              id="contact"
              className="nav-link text-uppercase"
            >
              Contact
            </Link>
          </li>

          
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
