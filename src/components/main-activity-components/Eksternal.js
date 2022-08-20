import React from "react";
import Band from "../../images/band_akustik.jpg";
import ShortMovie from "../../images/short_movie.jpg";
import BlindDate from "../../images/blind_date.png";
import MobileLegend from "../../images/mobile_legend (2).jpg";
import Futsal from "../../images/futsal.jpg";
function Eksternal() {
  return (
    <section className="eksternal" id="eksternal">
      <div className="container container-md">
        <h1 className="title">KEGIATAN EKSTERNAL</h1>

        {/* <!-- band acoustic --> */}
        <div className="row mt-5">
          <div className="col col-md-5 col-12 image">
            <img src={Band} className="img img-left img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">BAND AKUSTIK</h3>
            <p className="description text-light">
              Band Acoustik merupakan kegiatan IT DAYS yang bergerak dibidang music, dimana sebuah kelompok atau yang disebut band akan bertanding untuk menampilkan performa terbaik mereka dalam menampilkan sebuah lagu atau mengcover sebuah
              lagu dengan karakteristik band itu sendiri.
            </p>
          </div>
        </div>

        {/* <!-- short movie --> */}
        <div className="row mt-5 flex-row-reverse">
          <div className="col col-md-5 col-12 image">
            <img src={ShortMovie} className="img img-right img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">SHORT MOVIE</h3>
            <p className="description text-light">
              Short movie merupakan film yang berdurasi pendek, simpel dan memiliki nauansa kompleks serta tidak dianggap sebagai film utama/panjang. Kegiatan IT DAYS yang satu ini bisa diikuti oleh masyarakat umum.
            </p>
          </div>
        </div>

        {/* <!-- valorant --> */}
        <div className="row mt-5">
          <div className="col col-md-5 col-12 image">
            <img src={BlindDate} className="img img-left img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">VALORANT</h3>
            <p className="description text-light">Valorant adalah sebuah game FPS berbasis PC atau Laptop yang akan mempertandingkan 2 team yang berjumlah 5 orang dalam satu team untuk merebut kemenangan.</p>
          </div>
        </div>

        {/* <!-- mobile legend --> */}
        <div className="row mt-5 flex-row-reverse">
          <div className="col col-md-5 col-12 image">
            <img src={MobileLegend} className="img img-right img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">MOBILE LEGEND</h3>
            <p className="description text-light">Mobile Legend atau lebih sering disebut ML adalah sebuah game MOBA berbasis mobile yang akan mempertemukan dua team berjumlah lima orang untuk merebut kemenangan.</p>
          </div>
        </div>

        {/* <!-- futsal --> */}
        <div className="row mt-5">
          <div className="col col-md-5 col-12 image">
            <img src={Futsal} className="img img-left img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">FUTSAL</h3>
            <p className="description text-light">
              Futsal merupakan sebuah olahraga yang mempertemukan dua team dalam satu pertandingan, dimana sebuah team terdiri dari 5 pemain yang akan bertanding untuk memasukkan bola ke gawang lawan atau gol sebanyak-banyaknya untuk
              mendapatkan kemenangan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eksternal;
