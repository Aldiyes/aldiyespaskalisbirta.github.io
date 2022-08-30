import React, { useState } from "react";
import "./gallery.css";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../Data";

// button laod more
function Gallery() {
  const [showImage, setShowImage] = useState(6);

  function loadMore() {
    if (Images.length > showImage + 6) {
      setShowImage(showImage + 6);
    } else {
      setShowImage(showImage + 4);
    }
  }

  const slice = Images.slice(0, showImage);

  // modal
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState();
  const [titleShow, setTitleShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (img, title) => {
    setShow(true);
    setImageShow(img);
    setTitleShow(title);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container container-md d-flex flex-column justify-content-center align-items-center">
        <h1 className="title py-5">GALLERY</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gallery-image active">
          {slice.map((item) => (
            <div className="col" key={item.id}>
              <img src={item.img} className="img img-item img-fluid" alt={item.title} onClick={handleShow.bind(this, item.img, item.title)} />

              {/* modal */}
              <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                  <Modal.Title>{titleShow}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src={imageShow} className="img img-item img-fluid" alt={item.title} />
                </Modal.Body>
              </Modal>
            </div>
          ))}
        </div>
        <button className={`btn btn-load-more my-5 ${showImage < Images.length ? "active" : ""}`} onClick={() => loadMore()}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default Gallery;
