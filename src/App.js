import React from "react";
import "./App.scss";

//json
import * as data from "./page.json";
//components
import Slider from "./components/Slider/Slider";
import Form from "./components/Form/Form";
import GridComponents from "./components/GridComponents/GridComponents";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  //data from json
  const GalleryComponent = data.components[0];
  const GridComponent = data.components[1];
  const FormData = data.form;

  return (
    <>
      <Layout>
        <Slider data={GalleryComponent} />
        <GridComponents data={GridComponent} />
        <Form data={FormData} />
      </Layout>
    </>
  );
};

export default App;
