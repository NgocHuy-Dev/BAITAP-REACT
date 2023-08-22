import React from "react";

export default function GlassesList({ onChangeGlasses }) {
  return (
    <div className="container bg-white mb-5">
      <div className="row g-4 place-items-center ">
        <div className="col-md-2 item" onClick={() => onChangeGlasses(1)}>
          <img
            src="./glassesImage/g1.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(2)}>
          <img
            src="./glassesImage/g2.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(3)}>
          <img
            src="./glassesImage/g3.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(4)}>
          <img
            src="./glassesImage/g4.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(5)}>
          <img
            src="./glassesImage/g5.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(6)}>
          <img
            src="./glassesImage/g6.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(7)}>
          <img
            src="./glassesImage/g7.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(8)}>
          <img
            src="./glassesImage/g8.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
        <div className="col-md-2 item" onClick={() => onChangeGlasses(9)}>
          <img
            src="./glassesImage/g9.jpg"
            alt=""
            width="100%"
            height="70px"
            className="object-fit-cover border border-primary p-2"
          />
        </div>
      </div>
    </div>
  );
}
