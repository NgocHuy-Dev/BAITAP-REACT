import React, { useState } from "react";
import GlassesModal from "./GlassesModal";
import GlassesList from "./GlassesList";
import GlassesHeader from "./GlassesHeader";
import "./GlassesStyle.css";
import data from "./dataGlasses.json";

export default function GlassesApp() {
  const [selectProduct, setSelectProduct] = useState("");

  const handleChangeProduct = (productID) => {
    // lọc ra sản phẩm có ID tương ứng
    console.log(productID);
    let selectedProduct = data.filter(function (product) {
      return product.id === productID;
    });
    setSelectProduct(selectedProduct);
    console.log(selectedProduct);
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
