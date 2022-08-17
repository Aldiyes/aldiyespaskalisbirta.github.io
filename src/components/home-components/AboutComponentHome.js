import React from "react";
import "./aboutComponentHome.css";
import { Link } from "react-router-dom";
function AboutComponentHome() {
  return (
    <section className="about" id="about">
      <div className="container container-lg">
        <div className="row justify-content-md-center justify-content-center">
          <div className="col-lg-8 col-md-10 box-about">
            <h1 className="title">
              ABOUT<span className="title title it-days">IT DAYS</span>
            </h1>
            <p className="description text-light">
              IT Days merupakan rangkaian kegiatan rutin tahunan dari Himpunan Mahasiswa Informatika Sanata Dharma yang diselenggarakan sebagai program kerja dari Himpunan yang bertujuan sebagai wadah pengembangan diri bagi seluruh
              mahasiswa untuk mempromosikan prodi Informatika ke masyarakat luas serta menambah relasi dengan masyarakat umum.
            </p>
            <div className="btn-see-more" id="btn-see-more">
              <Link to="/about/">See More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponentHome;
