import React from "react";
import GlassesModal from "./GlassesModal";
import GlassesList from "./GlassesList";
import GlassesHeader from "./GlassesHeader";
import "./glassesstyle.css";

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
