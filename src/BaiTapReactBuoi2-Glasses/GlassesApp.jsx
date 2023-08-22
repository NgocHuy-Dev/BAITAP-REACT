import React from "react";
import GlassesModal from "./GlassesModal";
import GlassesList from "./GlassesList";
import GlassesHeader from "./GlassesHeader";
import style from "./GlassesStyle.css";

export default function GlassesApp() {
  return (
    <>
      <section className="header">
        <GlassesHeader />
        <div className="container">
          <GlassesModal />
          <GlassesList />
        </div>
      </section>
    </>
  );
}
