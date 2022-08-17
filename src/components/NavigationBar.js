import React from "react";

function NavigationBar() {
  return (
    <header class="navbar navbar-expand-md fixed-top" id="navbar">
      <nav class="container container-md px-md-5 px-3">
        <div class="border-animation">
          <span class="inset"></span>
          <span class="navbar-brand p-relative ps-3">IT DAYS 2022</span>
        </div>
        <button class="navbar-toggler float-md-end d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
          <i class="bi bi-list text-light"></i>
        </button>

        <div class="offcanvas offcanvas-md offcanvas-bottom" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav text-center ms-auto">
              <a class="nav-link" href="/">
                Home
              </a>
              <a class="nav-link" href="/about/">
                About
              </a>
              <a class="nav-link" href="/main-activity/">
                Main Activity
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
