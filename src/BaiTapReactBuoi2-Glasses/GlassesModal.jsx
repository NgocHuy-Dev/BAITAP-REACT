import React from "react";
import ModalOverlay from "./ModalOverlay";

export default function GlassesModal({ product }) {
  return (
    <div className="container glasses">
      <div className="glasses-modal">
        <div>
          <img
            src="./glassesImage/model.jpg"
            alt="modal"
            width="100%"
            height=""
          />
          <ModalOverlay product={product} />
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
