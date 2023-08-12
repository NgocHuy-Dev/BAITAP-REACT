import React from "react";
import Banner from "./Banner";
import Item from "./Item";

export default function Body() {
  return (
    <>
      <div className="container">
        <div className=" mt-3 p-5 bg-light">
          <Banner />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 pb-2 bg-light g-3">
          <div className="col-md-3">
            <Item />
          </div>
          <div className="col-md-3">
            <Item />
          </div>
          <div className="col-md-3">
            <Item />
          </div>
          <div className="col-md-3">
            <Item />
          </div>
        </div>
      </div>
    </>
  );
}
