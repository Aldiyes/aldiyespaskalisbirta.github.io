import React from "react";
import "./bannerComponentHome.css";
import Logo from "../../images/logo.png";

function BannerComponentHome() {
  return (
    <section className="banner" id="banner">
      <div className="container container-md text-center d-flex justify-content-center align-items-center">
        <div className="row flex-row-reverse w-100">
          <div className="col-md-6 image-box">
            <img src={Logo} className="img-fluid" alt="logoit-days2022" />
          </div>
          <div className="col-md-6 text-box">
            <h1 className="title-banner">IT DAYS</h1>
            <h2 className="title-banner">2022</h2>
            <div className="scroll-down d-flex flex-column mt-1">
              <i className="bi bi-mouse2"></i>
              <a href="#about">Scroll Down</a>
              <i className="bi bi-chevron-down arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerComponentHome;
