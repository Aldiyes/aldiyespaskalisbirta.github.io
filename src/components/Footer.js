import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container-fluid bg-dark">
        <div className="row text-center">
          {/* <!-- 1 --> */}

          <div className="col-md-4 text-light mt-5 media-social">
            <h2 className="text-light footer-title">IT DAYS 2022</h2>
            <ul className="list-group list-group-horizontal p-5">
              {/* <!-- instagram --> */}
              <li className="list-group-item">
                <a href="https://www.instagram.com/itdays_usd/" className="Instagram" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              {/* <!-- twitter --> */}
              <li className="list-group-item">
                <a href="https://twitter.com/usd_itdays" className="twitter text-center" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              {/* <!-- tiktok --> */}
              <li className="list-group-item">
                <a href="https://www.tiktok.com/@itdays2022" className="tiktok" target="_blank" rel="noreferrer">
                  <i className="bi bi-tiktok"></i>
                </a>
              </li>
              {/* <!-- youtube --> */}
              <li className="list-group-item">
                <a href="https://www.youtube.com/channel/UCySbQgIFV1HEnfEd0veOx0Q" className="youtube text-center" target="_blank" rel="noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- 2 --> */}
          <div className="col-md-4 text-light mt-5 quick-links">
            <h2 className="footer-title text-md-start ps-md-3">Quick Links</h2>
            <ul className="list-group">
              <li className="list-group-item text-start">
                <a href="/main-activity/" className="band-akustik">
                  Band akustik
                </a>
              </li>
              <li className="list-group-item text-start">
                <a href="/main-activity/" className="short-movie">
                  Short Movie
                </a>
              </li>
              <li className="list-group-item text-start">
                <a href="/main-activity/" className="valorant">
                  Valorant
                </a>
              </li>
              <li className="list-group-item text-start">
                <a href="/main-activity/" className="mobile-legend">
                  Mobile Legend
                </a>
              </li>
              <li className="list-group-item text-start">
                <a href="/main-activity/" className="futsal">
                  Futsal
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- 3 --> */}
          <div className="col-md-4 text-light mt-5 contact-info ">
            <h2 className="footer-title text-md-start ps-md-3">Contact Info</h2>
            <ul className="list-group">
              {/* <!-- whatsapp --> */}
              <li className="list-group-item text-start">
                <a href="https://api.whatsapp.com/send?phone=6282255224387" target="_blank" className="whatsapp" rel="noreferrer">
                  <i className="bi bi-whatsapp"></i>
                  <span>0822-5522-4387</span>
                </a>
              </li>
              {/* <!-- email --> */}
              <li className="list-group-item text-start">
                <a href="mailto:itdaysusd2022@gmail.com" className="email" target="_blank" rel="noreferrer">
                  <i className="bi bi-envelope"></i>
                  <span>itdaysusd2022@gmail.com</span>
                </a>
              </li>
              {/* <!-- map --> */}
              <li className="list-group-item text-start">
                <a href="https://goo.gl/maps/QQTYam7VQ4P9yXRU9" target="_blank" className="map" rel="noreferrer">
                  <i className="bi bi-geo-alt"></i>
                  <span>Kampus 3, Jl. Paingan, Maguwoharjo, Depok, Sleman, Yogyakarta</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center copyright mt-5">
          <span className="text-light bg-gradient p-2">&copy; COPYRIGHT 2022.itdaysusd2022.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
