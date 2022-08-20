import React from "react";
import "./filosofi.css";
import img from "../../images/logo.png";
function Filosofi() {
  return (
    <section className="filosofi" id="filosofi">
      <div className="container container-md">
        <h1 className="title">FILOSOFI LOGO</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 mt-5 d-flex justify-content-center">
            <div className="border-animation">
              <span className="inset"></span>
              <span className="image p-relative">
                <img src={img} className="img-fluid" alt="definisi it days" />
              </span>
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <h3 className="title title-desc text-light">IT DAYS 2022</h3>
            <p className="description text-light">
              Logo IT DAYS terdiri dari burung enggang, electrical circuit dan nanotech. Ketiga unsur tersebut di padukan dalam sebuah logo yang melambangkan sebagai ikatan yang kokoh. <br />
              <br />
              &#9830; Burung Enggang: <br />
              Burung Tingang atau Burung enggang melambangkan keseimbangan, yang dimana kita sebagai generasi muda diharapkan memiliki pengetahuan yang mampu menyeimbangi serta beradaptasi terhadap kemajuan teknologi. <br />
              <br />
              &#9830; Electric Circuit: <br />
              Electric circuit merupakan jalur untuk mentransmisikan arus menjadi energi, maka dengan penempatannya pada area kepala dapat menginspirasi kita agar menciptakan dan menyebarkan energi positif kepada sesama. <br />
              <br />
              &#9830; Nanotech: <br />
              Nanotech atau teknologi nano merupakan teknologi berbasis rekayasa material dan menjadi suatu terobosan untuk teknologi tanpa batas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filosofi;
