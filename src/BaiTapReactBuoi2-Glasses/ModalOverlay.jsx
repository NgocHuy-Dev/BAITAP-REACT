import React from "react";

export default function ModalOverlay({ product }) {
  return (
    <div className="overlay">
      {product.map((glasses) => {
        return (
          <div className="overlay-content">
            <div className="overlay-img">
              <img
                src={glasses.url}
                alt=""
                width="170px"
                height="60px"
                className="object-fit-cover"
              />
            </div>

            <div className="overlay-text">
              <h3>{glasses.name}</h3>
              <p>{glasses.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
