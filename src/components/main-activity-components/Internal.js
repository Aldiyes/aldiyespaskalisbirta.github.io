import React from "react";
import Misa from "../../images/misa (6).jpg";
import Webinar from "../../images/webinar (4).jpg";
import BlindDate from "../../images/blind_date.png";
import "./style-main-activity.css";
function Internal() {
  return (
    <section className="internal" id="internal">
      <div className="container container-md">
        <h1 className="title">KEGIATAN INTERNAL</h1>

        {/* <!-- misa --> */}
        <div className="row mt-5">
          <div className="col col-md-5 col-12 image">
            <img src={Misa} className="img img-left img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">MISA</h3>
            <p className="description text-light">
              Misa merupakan Perayaan Ekaristi Kudus Agama Katolik, misa menjadi salah satu diantara rangkaian acara IT DAYS serta menjadi acara pembuka seluruh rangkaian dan kegiatan yang akan berlangsung
            </p>
          </div>
        </div>

        {/* <!-- webinar --> */}
        <div className="row mt-5 flex-row-reverse">
          <div className="col col-md-5 col-12 image">
            <img src={Webinar} className="img img-right img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">WEBINAR</h3>
            <p className="description text-light">
              Webinar merupakan seminar yang dilakukan secara virtual atau online melalui media daring seperti zoom, g-meet dan media online lainnya. Webina ini akan dihadiri oleh pembicara profesional dan berpengalaman tentunya untuk
              menyampaikan segala materi dan topik yang sudah ditentukan oleh pihak panitia yang tentunya sesuai dengan pengalaman pembicara tersebut.
            </p>
          </div>
        </div>

        {/* <!-- query 100 --> */}
        <div className="row mt-5">
          <div className="col col-md-5 col-12 image">
            <img src={BlindDate} className="img img-left img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">QUERY 100</h3>
            <p className="description text-light">
              Query 100 merupakan satu dari rangkaian kegiatan yang bergerak dalam bidan kuis, yang dimana kuis tersebut akan mempertandingkan 2 kelompok untuk saling merebut poin dan meraih kemenangan. Query sendiri diambil dari nama salah
              satu mata kuliah yang ada di prodi informatika dan 100 itu sendiri artinya seluruh kuis dilakukan survey kepada 100 orang untuk menentukan jawaban.
            </p>
          </div>
        </div>

        {/* <!-- fun games --> */}
        <div className="row mt-5 flex-row-reverse">
          <div className="col col-md-5 col-12 image">
            <img src={BlindDate} className="img img-right img-fluid" alt="img-eksternal" />
          </div>

          <div className="col col-md-7 col-12 gy-5 gy-md-0">
            <h3 className="title-desc title text-light">FUN GAMES</h3>
            <p className="description text-light">
              Fun Games atau dapat diartikan sebagai sebuah games atau permainan seru atau fun dan menjadi satu diantara rangkaian kegiatan yang akan berlangsung. Fun Games akan berisikan games-games seru yang akan diikuti oleh seluruh
              peserta dengan cara berkelompok atau saling bekerja sama dalam menyelesaikan games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internal;
