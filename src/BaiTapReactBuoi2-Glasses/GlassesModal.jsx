import React from "react";
import "./GlassesStyle.css";

export default function GlassesModal() {
  return (
    <div className="container parent d-flex justify-content-center align-items-center">
      <div className="child d-grid place-items-center">
        <div className=" d-flex justify-content-between">
          <div className="glasses-modal m-4" id="glasses-modal">
            <img
              src="./glassesImage/model.jpg"
              alt="modal"
              width="100%"
              height=""
            />
          </div>
          <div className="overlay">
            <div className="overlay-content">
              <img
                src="./glassesImage/v1.png"
                alt=""
                width="170px"
                height="50px"
                className="object-fit-cover"
              />
              <div className="overlay-text">
                <h3>FENDI</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium magni labore error tenetur repellendus in.
                </p>
              </div>
            </div>
          </div>
          <div className="glasses-modal m-4">
            <img
              src="./glassesImage/model.jpg"
              alt="modal"
              width="100%"
              height=""
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
}
