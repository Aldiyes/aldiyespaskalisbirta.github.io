import React from "react";
import "./bannerComponentHome.css";
import Logo from "../../images/logo.png";

function BannerComponentHome() {
  return (
    <section class="banner" id="banner">
      <div class="container container-md text-center d-flex justify-content-center align-items-center">
        <div class="row flex-row-reverse w-100">
          <div class="col-md-6 image-box">
            <img src={Logo} class="img-fluid" alt="logoit-days2022" />
          </div>
          <div class="col-md-6 text-box">
            <h1 class="title-banner">IT DAYS</h1>
            <h2 class="title-banner">2022</h2>
            <div class="scroll-down d-flex flex-column mt-1">
              <i class="bi bi-mouse2"></i>
              <a href="#about">Scroll Down</a>
              <i class="bi bi-chevron-down arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerComponentHome;
