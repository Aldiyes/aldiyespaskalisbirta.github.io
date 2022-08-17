import React from "react";
import "./aboutComponentHome.css";

function AboutComponentHome() {
  return (
    <section class="about" id="about">
      <div class="container container-lg">
        <div class="row justify-content-md-center justify-content-center">
          <div class="col-lg-8 col-md-10 box-about">
            <h1 class="title">
              ABOUT<span class="title title it-days">IT DAYS</span>
            </h1>
            <p class="description text-light">
              IT Days merupakan rangkaian kegiatan rutin tahunan dari Himpunan Mahasiswa Informatika Sanata Dharma yang diselenggarakan sebagai program kerja dari Himpunan yang bertujuan sebagai wadah pengembangan diri bagi seluruh
              mahasiswa untuk mempromosikan prodi Informatika ke masyarakat luas serta menambah relasi dengan masyarakat umum.
            </p>
            <div class="btn-see-more" id="btn-see-more">
              <a href="/about/">See More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponentHome;
