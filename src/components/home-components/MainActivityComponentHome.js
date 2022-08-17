import React from "react";
import "./mainActivityComponentHome.css";

// internal images
import Misa from "../../images/misa (6).jpg";
import Webinar from "../../images/webinar (5).jpg";
import Query100 from "../../images/blind_date.png";
import FunGames from "../../images/blind_date.png";

// external images
import BandAcoustic from "../../images/band_akustik.jpg";
import ShortMovie from "../../images/short_movie.jpg";
import Valorant from "../../images/blind_date.png";
import MobileLegend from "../../images/mobile_legend (4).jpg";
import Futsal from "../../images/futsal.jpg";

function MainActivityComponentHome() {
  return (
    <section class="main-activity" id="main-activity">
      <div class="container container-md px-md-5 px-3">
        <h1 class="title">
          MAIN <span class="title it-days">ACTIVITY</span>
        </h1>

        <div class="box-internal">
          <h3 class="title-internal">Kegiatan Internal</h3>
          <div id="internal" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {/* Misa */}
              <div class="carousel-item active" data-bs-interval="4000">
                <div class="row g-0 justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Misa} class="img-fluid" alt="misa" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-0">
                    <h3 class="title-desc">Misa</h3>
                    <p class="description text-light">Misa merupakan Perayaan Ekaristi Kudus Agama Katolik, misa menjadi satu diantara rangkaian acara IT DAYS serta menjadi acara pembuka seluruh...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Webinar */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Webinar} class="w-100" alt="webinar" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-0">
                    <h3 class="title-desc">Webinar</h3>
                    <p class="description text-light">Webinar merupakan seminar yang dilakukan secara virtual atau online melalui media daring seperti zoom, gmeet dan media online lainnya. Webinar ini...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Query 100 */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Query100} class="w-100" alt="query-100" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-0">
                    <h3 class="title-desc">Query 100</h3>
                    <p class="description text-light">Query 100 merupakan satu dari rangkaian kegiatan yang bergerak dalam bidang kuis, yang dimana kusi tersebut akan mempertandingkan 2 kelompok...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Games */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={FunGames} class="w-100" alt="fun-games" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-0">
                    <h3 class="title-desc">Fun Games</h3>
                    <p class="description text-light">Fun Games atau dapat diartikan sebagai sebuah games atau permainan seru atau fun dan menjadi satu diantara rangkaian kegiatan yang akan...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#internal" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#internal" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="box-eksternal">
          <h3 class="title-eksternal">Kegiatan Eksternal</h3>
          <div id="eksternal" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {/* Band Akustik */}
              <div class="carousel-item active" data-bs-interval="4000">
                <div class="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={BandAcoustic} class="w-100" alt="band-akustik" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-3">
                    <h3 class="title-desc">Band Acoustic</h3>
                    <p class="description text-light">Band Acoustik merupakan kegiatan IT DAYS yang bergerak dibidang music, dimana sebuah kelompok atau yang disebut band akan bertanding untuk menampilkan...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Short Movie */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={ShortMovie} class="img-fluid" alt="short-movie" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-3">
                    <h3 class="title-desc">Short Movie</h3>
                    <p class="description text-light">Short movie merupakan film yang berdurasi pendek, simpel dan memiliki nauansa kompleks serta tidak dianggap sebagai film utama/panjang. Kegiatan...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valorant */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Valorant} class="w-100" alt="valorant" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-3">
                    <h3 class="title-desc">Valorant</h3>
                    <p class="description text-light">Valorant adalah sebuah game FPS berbasis PC atau Laptop yang akan mempertanding-kan 2 team yang berjumlah 5 orang dalam satu team untuk merebut kemenangan.</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Legend */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={MobileLegend} class="w-100" alt="mobile-legend" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-3">
                    <h3 class="title-desc">Mobile Legend</h3>
                    <p class="description text-light">Mobile Legend atau lebih sering disebut ML adalah sebuah game MOBA berbasis mobile yang akan mempertemukan dua team berjumlah lima orang untuk...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Futsal */}
              <div class="carousel-item" data-bs-interval="4000">
                <div class="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div class="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Futsal} class="w-100" alt="futsal" />
                  </div>
                  <div class="col-md-5 p-4 ps-md-3">
                    <h3 class="title-desc">Futsal</h3>
                    <p class="description text-light">Futsal merupakan sebuah olahraga yang mempertemukan dua team dalam satu pertandingan, dimana sebuah team terdiri dari 5 pemain yang akan bertanding...</p>
                    <div class="btn-see-more">
                      <a href="/main-activity/">see more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#eksternal" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#eksternal" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainActivityComponentHome;
