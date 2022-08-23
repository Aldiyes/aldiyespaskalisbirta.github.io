import React from "react";

import { activityEksternal } from "../../Data";
function Eksternal() {
  return (
    <section className="eksternal" id="eksternal">
      <div className="container container-md">
        <h1 className="title">KEGIATAN EKSTERNAL</h1>

        {activityEksternal.map((item) => (
          <div className={`row mt-5 ${item.id % 2 === 0 ? "flex-row-reverse" : ""}`} key={item.id}>
            <div className="col col-md-5 col-12 image">
              <img src={item.img} className="img img-left img-fluid" alt="img-eksternal" />
            </div>

            <div className="col col-md-7 col-12 gy-5 gy-md-0">
              <h3 className="title-desc title text-light">{item.title}</h3>
              <p className="description text-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Eksternal;
