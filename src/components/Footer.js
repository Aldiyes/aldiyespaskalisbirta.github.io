import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container-fluid bg-dark">
        <div className="row text-center">
          <div className="col-md-4 text-light mt-5 media-social">
            <h2 className="text-light footer-title">IT DAYS 2022</h2>
            <ul className="list-group list-group-horizontal p-5">
              <li className="list-group-item">
                <a href="https://www.instagram.com/itdays_usd/" className="instagram" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>

              <li className="list-group-item">
                <a href="https://twitter.com/usd_itdays" className="twitter" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>

              <li className="list-group-item">
                <a href="https://www.tiktok.com/@itdays2022" className="tiktok" target="_blank" rel="noreferrer">
                  <i className="bi bi-tiktok"></i>
                </a>
              </li>

              <li className="list-group-item">
                <a href="https://www.youtube.com/channel/UCySbQgIFV1HEnfEd0veOx0Q" className="youtube" target="_blank" rel="noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-light mt-5 quick-as">
            <h2 className="footer-title text-start ps-3">Quick as</h2>
            <div className="list-group text-start">
              <a href="/about" className="list-group-item">
                Band akustik
              </a>
              <a href="/about" className="list-group-item">
                Short Movie
              </a>
              <a href="/about" className="list-group-item">
                valorant
              </a>
              <a href="/about" className="list-group-item">
                Mobile Legend
              </a>
              <a href="/about" className="list-group-item">
                Futsal
              </a>
            </div>
          </div>

          <div className="col-md-4 text-light mt-5 contact-info">
            <h2 className="footer-title">Contact Info</h2>
            <div className="list-group text-start">
              <a href="https://api.whatsapp.com/send?phone=6282255224387" target="_blank" rel="noreferrer" className="list-group-item whatsapp">
                <i className="bi bi-whatsapp"></i>
                <span>0822-5522-4387</span>
              </a>

              <a href="mailto:itdaysusd2022@gmail.com" className="list-group-item email" target="_blank" rel="noreferrer">
                <i className="bi bi-envelope"></i>
                <span>itdaysusd2022@gmail.com</span>
              </a>

              <a href="https://goo.gl/maps/QQTYam7VQ4P9yXRU9" target="_blank map" className="list-group-item">
                <i className="bi bi-geo-alt"></i>
                <span>Kampus 3, Jl. Paingan, Maguwoharjo, Depok, Sleman, Yogyakarta</span>
              </a>
            </div>
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
