import React from "react";

// components
import BannerComponentHome from "../../components/home-components/BannerComponentHome";
import AboutComponentHome from "../../components/home-components/AboutComponentHome";
import MainActivityComponentHome from "../../components/home-components/MainActivityComponentHome";

function Home() {
  return (
    <main>
      <BannerComponentHome />
      <AboutComponentHome />
      <MainActivityComponentHome />
    </main>
  );
}

export default Home;
