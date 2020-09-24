import React from "react";
import "./DropdownMenu.css";

// example web-only dropdown menu copied from W3Schools:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar
export default function DropdownMenu() {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div className="dropdown">
        <button className="dropbtn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}
