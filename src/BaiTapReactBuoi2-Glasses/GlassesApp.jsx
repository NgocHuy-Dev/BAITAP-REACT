import React, { useState } from "react";

import GlassesModal from "./GlassesModal";
import GlassesList from "./GlassesList";
import GlassesHeader from "./GlassesHeader";
import "./GlassesStyle.css";
import data from "./dataGlasses.json";

export default function GlassesApp() {
  const [selectProduct, setSelectProduct] = useState(data[0]);

  const handleChangeProduct = (productID) => {
    // Tìm Index của glasses có id tương ứng
    let glassesIndex = data.findIndex((data) => data.id === productID);
    setSelectProduct(data[glassesIndex]);
  };

  return (
    <>
      <section className="main">
        <GlassesHeader />
        <div className="container">
          <GlassesModal product={selectProduct} />
          <GlassesList onChangeProduct={handleChangeProduct} />
        </div>
      </section>
    </>
  );
}
