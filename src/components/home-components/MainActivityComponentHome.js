import React from "react";
import "./mainActivityComponentHome.css";
import { Link } from "react-router-dom";
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
    <section className="main-activity" id="main-activity">
      <div className="container container-md px-md-5 px-3">
        <h1 className="title">
          MAIN <span className="title it-days">ACTIVITY</span>
        </h1>

        <div className="box-internal">
          <h3 className="title-internal">Kegiatan Internal</h3>
          <div id="internal" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Misa */}
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="row g-0 justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Misa} className="img-fluid" alt="misa" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-0">
                    <h3 className="title-desc">Misa</h3>
                    <p className="description text-light">Misa merupakan Perayaan Ekaristi Kudus Agama Katolik, misa menjadi satu diantara rangkaian acara IT DAYS serta menjadi acara pembuka seluruh...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Webinar */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Webinar} className="w-100" alt="webinar" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-0">
                    <h3 className="title-desc">Webinar</h3>
                    <p className="description text-light">Webinar merupakan seminar yang dilakukan secara virtual atau online melalui media daring seperti zoom, gmeet dan media online lainnya. Webinar ini...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Query 100 */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Query100} className="w-100" alt="query-100" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-0">
                    <h3 className="title-desc">Query 100</h3>
                    <p className="description text-light">Query 100 merupakan satu dari rangkaian kegiatan yang bergerak dalam bidang kuis, yang dimana kusi tersebut akan mempertandingkan 2 kelompok...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Games */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={FunGames} className="w-100" alt="fun-games" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-0">
                    <h3 className="title-desc">Fun Games</h3>
                    <p className="description text-light">Fun Games atau dapat diartikan sebagai sebuah games atau permainan seru atau fun dan menjadi satu diantara rangkaian kegiatan yang akan...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#internal" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#internal" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="box-eksternal">
          <h3 className="title-eksternal">Kegiatan Eksternal</h3>
          <div id="eksternal" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Band Akustik */}
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={BandAcoustic} className="w-100" alt="band-akustik" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-3">
                    <h3 className="title-desc">Band Acoustic</h3>
                    <p className="description text-light">Band Acoustik merupakan kegiatan IT DAYS yang bergerak dibidang music, dimana sebuah kelompok atau yang disebut band akan bertanding untuk menampilkan...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Short Movie */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={ShortMovie} className="img-fluid" alt="short-movie" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-3">
                    <h3 className="title-desc">Short Movie</h3>
                    <p className="description text-light">Short movie merupakan film yang berdurasi pendek, simpel dan memiliki nauansa kompleks serta tidak dianggap sebagai film utama/panjang. Kegiatan...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valorant */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Valorant} className="w-100" alt="valorant" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-3">
                    <h3 className="title-desc">Valorant</h3>
                    <p className="description text-light">Valorant adalah sebuah game FPS berbasis PC atau Laptop yang akan mempertanding-kan 2 team yang berjumlah 5 orang dalam satu team untuk merebut kemenangan.</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Legend */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={MobileLegend} className="w-100" alt="mobile-legend" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-3">
                    <h3 className="title-desc">Mobile Legend</h3>
                    <p className="description text-light">Mobile Legend atau lebih sering disebut ML adalah sebuah game MOBA berbasis mobile yang akan mempertemukan dua team berjumlah lima orang untuk...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Futsal */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row g-0 flex-row-reverse justify-content-center position-relative">
                  <div className="col-md-5 mb-md-0 p-md-4 image">
                    <img src={Futsal} className="w-100" alt="futsal" />
                  </div>
                  <div className="col-md-5 p-4 ps-md-3">
                    <h3 className="title-desc">Futsal</h3>
                    <p className="description text-light">Futsal merupakan sebuah olahraga yang mempertemukan dua team dalam satu pertandingan, dimana sebuah team terdiri dari 5 pemain yang akan bertanding...</p>
                    <div className="btn-see-more">
                      <Link to="/main-activity/">see more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#eksternal" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#eksternal" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainActivityComponentHome;
