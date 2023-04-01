// components/Navbar.js
// activeclassname -> minuscolo!
// withRouter non si usa più! va cambiato con Navigate 
// -> https://bobbyhadz.com/blog/react-export-withrouter-was-not-found-in-react-router-dom

import React, { useState } from "react";
import { NavLink, useNavigate, history } from "react-router-dom";
// import { NavLink } from "react-router-dom";
/*
const Navbar = () => {
const [isOpen, setOpen] = useState(false);  
*/
const Navbar = ({ history }) => { 
  const isAuth = !!localStorage.getItem("token");
  const [isOpen, setOpen] = useState(false);  
  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    //history.push("/profile/fede");
    window.location.href = '/profile/fede';
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    // history.push("/");
    window.location.href = '/';
  };

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${"is-active"}`}
            aria-label="menu"
            aria-expanded="false"
           // onClick={() => setOpen(!isOpen)}
  
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${"is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeclassname="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeclassname="is-active"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
              activeclassname="is-active"
              to="/profile"
            >
              Profile
            </NavLink>
          </div>

          <div className="navbar-end">
{/*            
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
*/}          

          <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <button className="button is-white" onClick={loginUser}>
                    Log in
                  </button>
                ) : (
                  <button className="button is-black" onClick={logoutUser}>
                    Log out
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

 export default Navbar; 
//export default useNavigate(Navbar);