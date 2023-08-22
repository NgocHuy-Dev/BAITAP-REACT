import React, { useState } from "react";
import ModalOverlay from "./ModalOverlay";

export default function GlassesModal({ products }) {
  const handleGetGlasses = (product) => {
    console.log(product);
  };

  return (
    <div className="container glasses">
      <div className="glasses-modal">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img
                src="./glassesImage/model.jpg"
                alt="modal"
                width="100%"
                height=""
              />
              <ModalOverlay product={product} onGetGlasses={handleGetGlasses} />
            </div>
          );
        })}
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
