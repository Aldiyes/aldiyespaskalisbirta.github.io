import React from "react";
import "./gallery.css";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container container-md d-flex flex-column justify-content-center align-items-center">
        <h1 className="title py-5">GALLERY</h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gallery-image active">
          <div className="col">
            <img src="assets/blind-date/IMG_3585.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/blind-date/IMG_3590.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/blind-date/IMG_3593.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/misa/IMG_3493.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/misa/IMG_3494.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/e-sport-ml/IMG_4161.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gallery-image">
          <div className="col">
            <img src="assets/e-sport-ml/IMG_4166.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/talk-show/Copy of IMG_4504.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/talk-show/Copy of IMG_4530.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/talk-show/Copy of IMG_9599.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/webinar/IMG_9273.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/webinar/IMG_9294.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gallery-image">
          <div className="col">
            <img src="assets/webinar/IMG_9307.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/webinar/IMG_9310.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/blind-date/IMG_4059.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/webinar/IMG_9307.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/webinar/IMG_9310.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
          <div className="col">
            <img src="assets/blind-date/IMG_4059.jpg" className="img img-item img-fluid" alt="gallery" />
          </div>
        </div>

        {/* <button className="btn btn-click" id="load" onclick="loadMore()">
          Load More
        </button> */}
      </div>

      <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body modal-md">
              <img src="assets/webinar/IMG_9307.jpg" className="img img-modal img-fluid" alt="gallery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
