import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
const Menu = () => (
 <>
  <p>
   {" "}
   <a href="#home">Home</a>
  </p>
  <p>
   {" "}
   <a href="#wgpt3">what is GPT?</a>
  </p>
  <p>
   {" "}
   <a href="#Possibility">Open AI</a>
  </p>
  <p>
   {" "}
   <a href="#features">Case Studies</a>
  </p>
  <p>
   {" "}
   <a href="#blog">Liberary</a>
  </p>
 </>
);
const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false);

 return (
  <div className="gpt3__navbar">
   <div className="gpt3__navbar">
    <div className="gpt3__navbar-link-logo">
     <img src={logo} alt="logo" />
    </div>
    <div className="gpt3__navbar-links-container">
     <Menu />
    </div>
   </div>
   <div className="gpt3__navbar-sign">
    <p>Sign in</p>
    <button className="" type="button">
     {" "}
     Sign up
    </button>
   </div>
   <div className="gp3__navbar-menu">
    {toggleMenu ? (
     <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
    ) : (
     <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />
    )}
    {toggleMenu && (
     <div className="gpt3__navbar-menu_container scale-up-center">
      <div className="gpt3__navbar-menu_container-links">
       <Menu />
      </div>
     </div>
    )}
   </div>
  </div>
 );
};

export default Navbar;
