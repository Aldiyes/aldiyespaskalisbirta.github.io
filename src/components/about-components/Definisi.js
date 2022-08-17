import React from "react";
import "./definisi.css";
import img from "../../images/short_movie.jpg";

function Definisi() {
  return (
    <section className="definisi" id="definisi">
      <div className="container container-md">
        <h1 className="title">DEFINISI</h1>
        <div className="row d-flex justify-content-center align-items-center flex-row-reverse">
          <div className="col col-md-6 d-flex justify-content-center">
            <div className="border-animation">
              <span className="inset"></span>
              <span className="image p-relative">
                <img src={img} className="img-fluid" alt="definisi it days" />
              </span>
            </div>
          </div>

          <div className="col col-md-6">
            <h3 className="title title-desc text-light">APA ITU IT DAYS?</h3>
            <p className="description text-light">
              IT Days merupakan rangkaian kegiatan rutin tahunan dari Himpunan Mahasiswa Informatika Sanata Dharma yang diselenggarakan sebagai program kerja dari Himpunan yang bertujuan sebagai wadah pengembangan diri bagi seluruh
              mahasiswa untuk mempromosikan prodi Infromatika ke masyarakat umum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Definisi;
