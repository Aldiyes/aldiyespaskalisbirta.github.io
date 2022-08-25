import React from "react";

// components
import Definisi from "../../components/about-components/Definisi";
import Filosofi from "../../components/about-components/Filosofi";
import Gallery from "../../components/about-components/Gallery";
import Konsep from "../../components/about-components/Konsep";
import Tema from "../../components/about-components/Tema";

function About() {
  return (
    <main>
      <Definisi />
      <Filosofi />
      <Tema />
      <Konsep />
      <Gallery />
    </main>
  );
}

export default About;
