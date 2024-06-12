import * as React from "react";
import MyRGBPanel from "../components/color-panel/MyRGBPanel";
import Layout from "../components/Layout";

export default function ColorPanelView() {
  return (
    <>
      <Layout />
      <header className="slider-item">
        <MyRGBPanel />
      </header>
    </>
  );
}
