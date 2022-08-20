import React, { useState } from "react";
import "./gallery.css";
import DataImages from "../../DataImages";

// button laod more
function Gallery() {
  const [showImage, setShowImage] = useState(6);
  const [active, setActive] = useState(true);

  function loadMore() {
    setShowImage(showImage + 6);
    if (showImage + 6 === DataImages.length) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  const slice = DataImages.slice(0, showImage);

  return (
    <section className="gallery" id="gallery">
      <div className="container container-md d-flex flex-column justify-content-center align-items-center">
        <h1 className="title py-5">GALLERY</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gallery-image active">
          {slice.map((item) => (
            <div className="col" key={item.id}>
              <img src={item.image} className="img img-item img-fluid" alt={item.label} />
            </div>
          ))}
        </div>

        <button className={`btn btn-load-more my-5 ${active ? "active" : ""}`} onClick={() => loadMore()}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default Gallery;
