import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationBar.css";

function NavigationBar() {
  return (
    <header className="navbar navbar-expand-md fixed-top" id="navbar">
      <nav className="container container-md px-md-5 px-3">
        <div className="border-animation">
          <span className="inset"></span>
          <span className="navbar-brand p-relative ps-3">IT DAYS 2022</span>
        </div>
        <button className="navbar-toggler float-md-end d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
          <i className="bi bi-list text-light"></i>
        </button>

        <div className="offcanvas offcanvas-md offcanvas-bottom" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav text-center ms-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/main-activity">
                Main Activity
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;