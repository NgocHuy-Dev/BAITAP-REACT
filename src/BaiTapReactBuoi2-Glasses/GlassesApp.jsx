import React from "react";
import GlassesModal from "./GlassesModal";
import GlassesList from "./GlassesList";
import GlassesHeader from "./GlassesHeader";
import "./GlassesStyle.css";
import data from "./dataGlasses.json";

export default function GlassesApp() {
  // const [info, setInfo] = useState("");

  const handleChangeGlasses = (id) => {
    return data.filter(function (glasses) {
      return (glasses.id = id);
    });
  };
  const handleGetGlasses = (product) => {
    console.log(product);
  };

  return (
    <>
      <section className="main">
        <GlassesHeader />
        <div className="container">
          <GlassesModal products={data} />
          <GlassesList onChangeGlasses={handleChangeGlasses} />
        </div>
      </section>
    </>
  );
}
