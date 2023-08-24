import React from "react";

export default function ModalOverlay({ product }) {
  // console.log("data", data);
  // console.log("ID in Overlay:", productID);
  // let glasses = data[productID];
  // console.log(glasses);
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-img">
          <img
            src={product.url}
            alt=""
            width="170px"
            height="60px"
            className="object-fit-cover"
          />
        </div>

        <div className="overlay-text">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
        </div>
      </div>
    </div>
  );
}
