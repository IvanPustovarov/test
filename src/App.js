import React from "react";
import "./App.scss";

//json
import * as data from "./page.json";
//components
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contact/Contact";
import ButtonSubmit from "./components/ButtonSubmit/ButtonSubmit";
import GridComponents from "./components/GridComponents/GridComponents";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  //data from json
  const GalleryComponent = data.components[0];
  const GridComponent = data.components[1];
  const ContactComponent = data.form;
  const ButtonComponent = data.form;

  return (
    <>
      <Layout>
        <Slider data={GalleryComponent} />
        <GridComponents data={GridComponent} />
        <Contact data={ContactComponent} />
        <ButtonSubmit data={ButtonComponent} />
      </Layout>
    </>
  );
};

export default App;
