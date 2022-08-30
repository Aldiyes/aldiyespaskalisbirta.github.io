import React from "react";
import "./mainActivityComponentHome.css";
import { Link } from "react-router-dom";
import { activityInternal, activityEksternal } from "../../Data";
// internal images

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
              {activityInternal.map((item) => (
                <div className={`carousel-item ${item.id === 1 ? "active" : ""}`} data-bs-interval="4000" key={item.id}>
                  <div className="row g-0 justify-content-center position-relative">
                    <div className="col-md-5 mb-md-0 p-md-4 image">
                      <img src={item.img} className="img-fluid" alt={item.title} />
                    </div>
                    <div className="col-md-5 p-4 ps-md-0">
                      <h3 className="title-desc">{item.title}</h3>
                      <p className="description text-light">{item.smallDesc}</p>
                      <div className="btn-see-more">
                        <Link to="/main-activity/">see more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="button carousel-control-prev" type="button" data-bs-target="#internal" data-bs-slide="prev">
              <span className="button-icon carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="button carousel-control-next" type="button" data-bs-target="#internal" data-bs-slide="next">
              <span className="button-icon carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="box-eksternal">
          <h3 className="title-eksternal">Kegiatan Eksternal</h3>
          <div id="eksternal" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {activityEksternal.map((item) => (
                <div className={`carousel-item ${item.id === 1 ? "active" : ""}`} data-bs-interval="4000" key={item.id}>
                  <div className="row g-0 flex-row-reverse justify-content-center position-relative">
                    <div className="col-md-5 mb-md-0 p-md-4 image">
                      <img src={item.img} className="w-100" alt={item.title} />
                    </div>
                    <div className="col-md-5 p-4 ps-md-3">
                      <h3 className="title-desc">{item.title}</h3>
                      <p className="description text-light">{item.smallDesc}</p>
                      <div className="btn-see-more">
                        <Link to="/main-activity/">see more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="button carousel-control-prev" type="button" data-bs-target="#eksternal" data-bs-slide="prev">
              <span className="button-icon carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="button carousel-control-next" type="button" data-bs-target="#eksternal" data-bs-slide="next">
              <span className="button-icon carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainActivityComponentHome;
