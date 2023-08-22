import React from "react";

export default function GlassesModal() {
  return (
    <div className="container glasses">
      <div className="glasses-modal">
        <img
          src="./glassesImage/model.jpg"
          alt="modal"
          width="100%"
          height=""
        />
        <div className="overlay">
          <div className="overlay-content">
            <div className="overlay-img">
              <img
                src="./glassesImage/v1.png"
                alt=""
                width="170px"
                height="50px"
                className="object-fit-cover"
              />
            </div>

            <div className="overlay-text">
              <h3>FENDI</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium magni labore error tenetur repellendus in.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="glasses-modal">
        <img
          src="./glassesImage/model.jpg"
          alt="modal"
          width="100%"
          height=""
        />
      </div>
    </div>
  );
}
