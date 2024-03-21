import React from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg"
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-link-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <p> <a href="#home">Home</a></p>
          <p> <a href="#wgpt3">what is GPT?</a></p>
          <p> <a href="#Possibility">Open AI</a></p>
          <p> <a href="#features">Case Studies</a></p>
          <p> <a href="#blog">Liberary</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
      <button className="" type="button" > Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
